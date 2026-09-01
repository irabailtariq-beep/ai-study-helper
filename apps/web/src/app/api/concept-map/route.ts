import { NextRequest, NextResponse } from "next/server";
import { buildConceptMap } from "@ash/ai-client";
import { checkRateLimit, keyFromRequest } from "@/lib/rateLimit";
import { friendlyError } from "@/lib/apiError";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const rl = checkRateLimit(`concept:${keyFromRequest(req)}`, Number(process.env.RL_GUEST_PER_DAY ?? 10));
  if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });
  try {
    const body = await req.json();
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });
    const map = await buildConceptMap(body);
    return NextResponse.json(map);
  } catch (e: any) {
    console.error("/api/concept-map", e);
    return NextResponse.json({ error: friendlyError(e).error }, { status: friendlyError(e).status });
  }
}
