import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { computeStreak } from "@/lib/activity";

export const runtime = "nodejs";

export async function GET() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ signedIn: false });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ signedIn: false });
  const streak = await computeStreak(user.id);
  const { data: last14 } = await sb
    .from("activity").select("*")
    .eq("user_id", user.id)
    .order("day", { ascending: false }).limit(14);
  const { count: quizCount } = await sb.from("quizzes").select("*", { head: true, count: "exact" }).eq("user_id", user.id);
  const { count: cardCount } = await sb.from("flashcards").select("*", { head: true, count: "exact" }).eq("user_id", user.id);
  return NextResponse.json({
    signedIn: true,
    streak,
    last14: (last14 ?? []).reverse(),
    quizCount: quizCount ?? 0,
    cardCount: cardCount ?? 0,
  });
}
