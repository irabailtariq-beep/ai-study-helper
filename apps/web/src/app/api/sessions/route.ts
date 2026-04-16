import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function GET() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ sessions: [] });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ sessions: [] });
  const { data } = await sb
    .from("chat_sessions")
    .select("id,title,summary,updated_at")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(30);
  return NextResponse.json({ sessions: data ?? [] });
}

export async function POST(req: Request) {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Auth not configured" }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  const { title } = await req.json();
  const { data, error } = await sb
    .from("chat_sessions")
    .insert({ user_id: user.id, title: title ?? "New chat" })
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
