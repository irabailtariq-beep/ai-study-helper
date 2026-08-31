import { NextRequest, NextResponse } from "next/server";
import { generateQuiz } from "@ash/ai-client";
import { checkRateLimitShared, keyFromRequest, bodyTooLarge, refundRateLimit } from "@/lib/rateLimit";
import { friendlyError } from "@/lib/apiError";
import { supabaseServer } from "@/lib/supabase/server";
import { recordActivity } from "@/lib/activity";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  if (bodyTooLarge(req, 8000000)) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  const rl = await checkRateLimitShared(`quiz:${keyFromRequest(req)}`, Number(process.env.RL_GUEST_PER_DAY ?? 10));
  if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });

  try {
    const body = await req.json();
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });
    const quiz = await generateQuiz(body);
    const sb = await supabaseServer();
    if (sb) {
      const { data: { user } } = await sb.auth.getUser();
      if (user) {
        await sb.from("quizzes").insert({
          user_id: user.id,
          title: quiz.title,
          content: quiz,
          source_text: body.sourceText ?? null,
        });
        recordActivity(user.id, "quizzes").catch(() => {});
      }
    }
    return NextResponse.json(quiz);
  } catch (e: any) {
    console.error("/api/quiz", e);
    const fe = friendlyError(e);
    await refundRateLimit(`quiz:${keyFromRequest(req)}`);
    return NextResponse.json({ error: fe.error }, { status: fe.status });
  }
}
