import { NextRequest, NextResponse } from "next/server";
import { extractSyllabus } from "@ash/ai-client";
import { checkRateLimit, keyFromRequest } from "@/lib/rateLimit";
import { supabaseServer } from "@/lib/supabase/server";
import { friendlyError } from "@/lib/apiError";

export const runtime = "nodejs";
export const maxDuration = 60;

// POST: extract syllabus from upload, optionally save if signed in.
export async function POST(req: NextRequest) {
  const rl = checkRateLimit(`syllabus:${keyFromRequest(req)}`, Number(process.env.RL_UPLOAD_PER_DAY ?? 5));
  if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });

  try {
    const body = await req.json();
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });
    const syllabus = await extractSyllabus(body);

    const sb = await supabaseServer();
    if (sb) {
      const { data: { user } } = await sb.auth.getUser();
      if (user && body.save !== false) {
        const { data } = await sb
          .from("syllabi")
          .insert({
            user_id: user.id,
            subject: syllabus.subject,
            curriculum: syllabus.curriculum,
            grade: syllabus.grade,
            year: syllabus.year ?? null,
            units: syllabus.units,
            source: syllabus.source ?? "User upload",
          })
          .select()
          .single();
        return NextResponse.json({ ...syllabus, id: data?.id ?? null, saved: true });
      }
    }
    return NextResponse.json({ ...syllabus, saved: false });
  } catch (e: any) {
    console.error("/api/syllabus POST", e);
    return NextResponse.json({ error: friendlyError(e).error }, { status: friendlyError(e).status });
  }
}

// GET: list signed-in user's saved syllabi
export async function GET() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ syllabi: [] });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ syllabi: [] });
  const { data } = await sb
    .from("syllabi")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });
  return NextResponse.json({ syllabi: data ?? [] });
}

export async function DELETE(req: NextRequest) {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Auth not configured" }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  await sb.from("syllabi").delete().eq("id", id).eq("user_id", user.id);
  return NextResponse.json({ ok: true });
}
