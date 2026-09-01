import { NextRequest, NextResponse } from "next/server";
import { generateQuiz, generateDiagnosticPlan } from "@ash/ai-client";
import { checkRateLimit, keyFromRequest } from "@/lib/rateLimit";
import { friendlyError } from "@/lib/apiError";

export const runtime = "nodejs";
export const maxDuration = 60;

// Two actions:
//  { action: "quiz", profile, subject?, count? }   → returns a 10-Q diagnostic quiz (mixed topics)
//  { action: "plan", profile, subject?, days?, results: [{question, studentAnswer, correctAnswer, topic}] }
//    → returns a StudyPlan
export async function POST(req: NextRequest) {
  const rl = checkRateLimit(`diag:${keyFromRequest(req)}`, Number(process.env.RL_GUEST_PER_DAY ?? 10));
  if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });

  try {
    const body = await req.json();
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });

    if (body.action === "quiz") {
      const subjectLine = body.subject ? `Subject: ${body.subject}. ` : "";
      const prompt = `${subjectLine}Create a diagnostic quiz of ${body.count ?? 10} questions that spreads across the major topics of this curriculum and grade. Include a short "topic" hint for each question in the "why" field so we can map mastery later.`;
      const quiz = await generateQuiz({
        profile: body.profile,
        sourceText: prompt,
        types: ["mcq"],
        count: body.count ?? 10,
      });
      return NextResponse.json(quiz);
    }

    if (body.action === "plan") {
      const plan = await generateDiagnosticPlan({
        profile: body.profile,
        subject: body.subject,
        days: body.days ?? 7,
        results: body.results ?? [],
      });
      return NextResponse.json(plan);
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (e: any) {
    console.error("/api/diagnostic", e);
    const msg = String(e?.message ?? "");
    // Surface clearer messages for common upstream failures
    if (/503|overload|unavail|quota|rate.?limit/i.test(msg)) {
      return NextResponse.json({ error: "Our AI provider is briefly overloaded. Wait 10 seconds and try again." }, { status: 503 });
    }
    return NextResponse.json({ error: friendlyError(e).error }, { status: friendlyError(e).status });
  }
}
