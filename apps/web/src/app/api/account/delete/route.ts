import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { createClient } from "@supabase/supabase-js";

// Cascade delete: RLS + foreign keys cascade when we delete the auth.user.
// To delete the auth user we need the service role key (admin API).
export async function POST() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Auth not configured" }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!service) {
    // Best effort: delete app data; user row stays until admin removes it.
    await sb.from("profiles").delete().eq("id", user.id);
    await sb.from("chat_messages").delete().eq("user_id", user.id);
    await sb.from("chat_sessions").delete().eq("user_id", user.id);
    await sb.from("flashcards").delete().eq("user_id", user.id);
    await sb.from("quizzes").delete().eq("user_id", user.id);
    await sb.from("quiz_attempts").delete().eq("user_id", user.id);
    await sb.from("activity").delete().eq("user_id", user.id);
    await sb.auth.signOut();
    return NextResponse.json({ ok: true, note: "Data wiped. Auth user row remains until SUPABASE_SERVICE_ROLE_KEY is set." });
  }
  const admin = createClient(url, service, { auth: { autoRefreshToken: false, persistSession: false } });
  const { error } = await admin.auth.admin.deleteUser(user.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
