import { NextRequest, NextResponse } from "next/server";
import { chat } from "@ash/ai-client";
import { checkRateLimitShared, keyFromRequest, bodyTooLarge, refundRateLimit } from "@/lib/rateLimit";
import { friendlyError } from "@/lib/apiError";
import { supabaseServer } from "@/lib/supabase/server";
import { recordActivity } from "@/lib/activity";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  if (bodyTooLarge(req, 120000)) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  const rl = await checkRateLimitShared(`chat:${keyFromRequest(req)}`, Number(process.env.RL_GUEST_PER_DAY ?? 10) * 5);
  if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });

  try {
    const body = await req.json();
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });

    const sb = await supabaseServer();
    const { data: userData } = sb ? await sb.auth.getUser() : { data: { user: null } };
    const user = userData?.user;

    // Chat memory is deliberately client-side only: the browser sends the recent
    // turns plus its own short summary (see chat/page.tsx). We do NOT keep a
    // server-side copy of a student's conversation. These are children; /privacy
    // tells them their messages are sent to the AI provider to produce an answer
    // and nothing more, and this route keeps that promise.
    const memory: string | undefined = body.memory;
    const answerLength = body.answerLength;

    const reply = await chat({
      profile: body.profile,
      history: body.history,
      memory,
      answerLength,
      formatOverride: body.formatOverride,
      toneOverride: body.toneOverride,
    });

    // A signed-in student gets a streak count only: a number, never the words.
    // Storing the conversation itself would need a privacy-policy change first.
    if (sb && user) {
      recordActivity(user.id, "chats").catch(() => {});
    }

    return NextResponse.json({ reply });
  } catch (e: any) {
    console.error("/api/chat", e);
    const fe = friendlyError(e);
    await refundRateLimit(`chat:${keyFromRequest(req)}`);
    return NextResponse.json({ error: fe.error }, { status: fe.status });
  }
}
