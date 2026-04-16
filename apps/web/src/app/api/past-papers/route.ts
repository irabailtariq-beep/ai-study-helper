import { NextRequest, NextResponse } from "next/server";
import { generatePastPapers } from "@ash/ai-client";
import { checkRateLimit, keyFromRequest } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const maxDuration = 120;

export async function POST(req: NextRequest) {
  const rl = checkRateLimit(`papers:${keyFromRequest(req)}`, Number(process.env.RL_UPLOAD_PER_DAY ?? 5));
  if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });

  try {
    const body = await req.json();
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });
    const papers = await generatePastPapers(body);
    return NextResponse.json(papers);
  } catch (e: any) {
    console.error("/api/past-papers", e);
    return NextResponse.json({ error: e?.message ?? "Past paper generation failed" }, { status: 500 });
  }
}
