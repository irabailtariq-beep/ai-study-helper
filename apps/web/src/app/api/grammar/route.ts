import { NextRequest, NextResponse } from "next/server";
import { checkGrammar } from "@ash/ai-client";
import { checkRateLimitShared, keyFromRequest, bodyTooLarge } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  if (bodyTooLarge(req, 120000)) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  const rl = await checkRateLimitShared(`grammar:${keyFromRequest(req)}`, Number(process.env.RL_GUEST_PER_DAY ?? 10));
  if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });
  try {
    const body = await req.json();
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });
    if (!body?.text?.trim()) return NextResponse.json({ error: "Missing text" }, { status: 400 });
    const result = await checkGrammar(body);
    return NextResponse.json(result);
  } catch (e: any) {
    console.error("/api/grammar", e);
    return NextResponse.json({ error: e?.message ?? "Failed" }, { status: 500 });
  }
}
