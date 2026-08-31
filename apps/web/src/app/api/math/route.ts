import { NextRequest, NextResponse } from "next/server";
import { solveMath, formulaSheet } from "@ash/ai-client";
import { checkRateLimitShared, keyFromRequest, bodyTooLarge, refundRateLimit } from "@/lib/rateLimit";
import { friendlyError } from "@/lib/apiError";

export const runtime = "nodejs";
export const maxDuration = 60;

// Two actions:
//  { action: "solve", profile, text?, imageBase64?, pdfBase64? }
//  { action: "sheet", profile, subject, topic? }
export async function POST(req: NextRequest) {
  if (bodyTooLarge(req, 4000000)) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  const rl = await checkRateLimitShared(`math:${keyFromRequest(req)}`, Number(process.env.RL_GUEST_PER_DAY ?? 10) * 2);
  if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });
  try {
    const body = await req.json();
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });
    if (body.action === "solve") {
      const sol = await solveMath(body);
      return NextResponse.json(sol);
    }
    if (body.action === "sheet") {
      if (!body.subject) return NextResponse.json({ error: "Need subject" }, { status: 400 });
      const sheet = await formulaSheet(body);
      return NextResponse.json(sheet);
    }
    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (e: any) {
    console.error("/api/math", e);
    const fe = friendlyError(e);
    await refundRateLimit(`math:${keyFromRequest(req)}`);
    return NextResponse.json({ error: fe.error }, { status: fe.status });
  }
}
