import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Auth not configured" }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  await sb.from("classroom_links").delete().eq("user_id", user.id).eq("provider", "google");
  return NextResponse.json({ ok: true });
}
