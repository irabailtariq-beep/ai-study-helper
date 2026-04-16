import { NextRequest, NextResponse } from "next/server";
import { explain } from "@ash/ai-client";
import type { ExplainRequest } from "@ash/core";
import { checkRateLimit, keyFromRequest } from "@/lib/rateLimit";
import { supabaseServer } from "@/lib/supabase/server";
import { recordActivity } from "@/lib/activity";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const key = keyFromRequest(req);
  const limit = Number(process.env.RL_GUEST_PER_DAY ?? 10);
  const rl = checkRateLimit(`explain:${key}`, limit);
  if (!rl.allowed) {
    return NextResponse.json({ error: "Daily limit reached. Try again tomorrow." }, { status: 429 });
  }

  try {
    const body = (await req.json()) as ExplainRequest;
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });
    const result = await explain(body);
    const sb = await supabaseServer();
    if (sb) {
      const { data: { user } } = await sb.auth.getUser();
      if (user) recordActivity(user.id, "explains").catch(() => {});
    }
    return NextResponse.json(result);
  } catch (e: any) {
    console.error("/api/explain", e);
    return NextResponse.json(
      { error: e?.message ?? "Something went wrong" },
      { status: 500 }
    );
  }
}
