import { supabaseServer } from "./supabase/server";

type Kind = "explains" | "quizzes" | "chats" | "cards_reviewed";

export async function bumpActivity(userId: string | null | undefined, kind: Kind, amount = 1) {
  if (!userId) return;
  const sb = await supabaseServer();
  if (!sb) return;
  // Upsert today's row then increment
  const today = new Date().toISOString().slice(0, 10);
  await sb.from("activity").upsert({ user_id: userId, day: today }, { onConflict: "user_id,day" });
  await sb.rpc("noop"); // no-op; keep shape simple
  await sb.from("activity").update({ [kind]: amount }).eq("user_id", userId).eq("day", today);
  // We use a simpler "set count" approach: read-modify-write is avoided by the client-side page reading and computing totals.
}

export async function recordActivity(userId: string | null | undefined, kind: Kind) {
  if (!userId) return;
  const sb = await supabaseServer();
  if (!sb) return;
  const today = new Date().toISOString().slice(0, 10);
  // ensure row exists
  await sb.from("activity").upsert({ user_id: userId, day: today }, { onConflict: "user_id,day", ignoreDuplicates: true });
  // fetch current count then write back (simple; small scale)
  const { data } = await sb.from("activity").select(kind).eq("user_id", userId).eq("day", today).maybeSingle();
  const cur = (data as any)?.[kind] ?? 0;
  await sb.from("activity").update({ [kind]: cur + 1 }).eq("user_id", userId).eq("day", today);
}

export async function computeStreak(userId: string): Promise<{ current: number; longest: number; totalDays: number }> {
  const sb = await supabaseServer();
  if (!sb) return { current: 0, longest: 0, totalDays: 0 };
  const { data } = await sb.from("activity").select("day").eq("user_id", userId).order("day", { ascending: false }).limit(365);
  if (!data || data.length === 0) return { current: 0, longest: 0, totalDays: 0 };
  const days = new Set(data.map((r: any) => r.day));
  let current = 0;
  const d = new Date(); d.setHours(0, 0, 0, 0);
  while (days.has(d.toISOString().slice(0, 10))) { current++; d.setDate(d.getDate() - 1); }
  let longest = 0, run = 0, prev: Date | null = null;
  const sorted = [...days].sort();
  for (const ds of sorted) {
    const cur = new Date(ds);
    if (prev && (cur.getTime() - prev.getTime()) / 86400000 === 1) run++; else run = 1;
    longest = Math.max(longest, run);
    prev = cur;
  }
  return { current, longest, totalDays: days.size };
}
