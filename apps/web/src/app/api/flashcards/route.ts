import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { sm2 } from "@/lib/sm2";
import { generateQuiz } from "@ash/ai-client";
import { checkRateLimit, keyFromRequest } from "@/lib/rateLimit";
import { recordActivity } from "@/lib/activity";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ cards: [], due: [] });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ cards: [], due: [] });
  const today = new Date().toISOString().slice(0, 10);
  const { data: due } = await sb
    .from("flashcards").select("*")
    .eq("user_id", user.id).lte("due_at", today)
    .order("due_at", { ascending: true }).limit(30);
  const { data: cards } = await sb
    .from("flashcards").select("*")
    .eq("user_id", user.id).order("created_at", { ascending: false }).limit(100);
  return NextResponse.json({ cards: cards ?? [], due: due ?? [] });
}

// POST body:
//  { action: "create", front, back }
//  { action: "review", id, quality }
//  { action: "generate", profile, sourceText?, pdfBase64?, imageBase64?, count? }
//  { action: "delete", id }
export async function POST(req: NextRequest) {
  const body = await req.json();

  // ─── GENERATE works for everyone, signed in or not ───
  // If signed in we'll also save to Supabase. Otherwise we just return the cards
  // and the client stores them in localStorage.
  if (body.action === "generate") {
    // This branch calls Gemini, so it needs the same guard as every other AI
    // route — without it anyone could loop it and drain the API quota, which
    // would take all ten tools down.
    const rl = checkRateLimit(`flashcards:${keyFromRequest(req)}`, Number(process.env.RL_GUEST_PER_DAY ?? 10));
    if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });

    try {
      const quiz = await generateQuiz({
        profile: body.profile,
        sourceText: body.sourceText,
        imageBase64: body.imageBase64,
        pdfBase64: body.pdfBase64,
        types: ["short"],
        // Clamp so a crafted request can't ask for thousands of cards.
        count: Math.min(Math.max(Number(body.count) || 10, 1), 20),
      });
      const cards = quiz.items
        .filter((it: any) => it.type === "short")
        .map((it: any, i: number) => ({
          id: `local-${Date.now()}-${i}`,
          front: it.q,
          back: it.answer,
          deck: "generated",
          interval_days: 0,
          ease: 2.5,
          reps: 0,
          due_at: new Date().toISOString().slice(0, 10),
          created_at: new Date().toISOString(),
        }));

      // Optionally save to Supabase if signed in
      const sb = await supabaseServer();
      if (sb) {
        const { data: { user } } = await sb.auth.getUser();
        if (user) {
          const rows = cards.map((c) => ({ user_id: user.id, front: c.front, back: c.back, deck: "generated" }));
          await sb.from("flashcards").insert(rows);
        }
      }

      return NextResponse.json({ cards, created: cards.length });
    } catch (e: any) {
      console.error("/api/flashcards generate", e);
      return NextResponse.json({ error: e?.message ?? "Generation failed" }, { status: 500 });
    }
  }

  // ─── Everything else (create / review / delete) still needs sign-in ───
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Sign in (needs Supabase) to save cards across devices." }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  if (body.action === "create") {
    const { front, back, deck } = body;
    const { data, error } = await sb.from("flashcards")
      .insert({ user_id: user.id, front, back, deck: deck ?? "default" })
      .select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  }

  if (body.action === "review") {
    const { id, quality } = body;
    const { data: card } = await sb.from("flashcards").select("*").eq("id", id).eq("user_id", user.id).single();
    if (!card) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const next = sm2(card, quality);
    const { data: upd, error } = await sb.from("flashcards")
      .update({ interval_days: next.interval_days, ease: next.ease, reps: next.reps, due_at: next.nextDue })
      .eq("id", id).eq("user_id", user.id).select().single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    recordActivity(user.id, "cards_reviewed").catch(() => {});
    return NextResponse.json(upd);
  }

  if (body.action === "delete") {
    await sb.from("flashcards").delete().eq("id", body.id).eq("user_id", user.id);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
