import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { sm2 } from "@/lib/sm2";
import { generateQuiz } from "@ash/ai-client";
import { recordActivity } from "@/lib/activity";

export const runtime = "nodejs";

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
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Auth not configured" }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const body = await req.json();
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

  if (body.action === "generate") {
    // Use quiz generator to produce short-answer pairs, convert to cards
    const quiz = await generateQuiz({
      profile: body.profile,
      sourceText: body.sourceText,
      imageBase64: body.imageBase64,
      pdfBase64: body.pdfBase64,
      types: ["short"],
      count: body.count ?? 10,
    });
    const rows = quiz.items
      .filter((it: any) => it.type === "short")
      .map((it: any) => ({ user_id: user.id, front: it.q, back: it.answer, deck: "generated" }));
    if (!rows.length) return NextResponse.json({ created: 0 });
    const { error } = await sb.from("flashcards").insert(rows);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ created: rows.length });
  }

  if (body.action === "delete") {
    await sb.from("flashcards").delete().eq("id", body.id).eq("user_id", user.id);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
