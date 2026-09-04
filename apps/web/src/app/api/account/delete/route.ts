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
    // These two were missing from the wipe. classroom_links holds Google access
    // and refresh TOKENS — leaving those behind after someone asks us to delete
    // their account is the worst thing on this list, not a tidiness issue.
    await sb.from("classroom_links").delete().eq("user_id", user.id);
    await sb.from("syllabi").delete().eq("user_id", user.id);
    await sb.auth.signOut();
    // Tell the truth: without the service-role key we cannot remove the account
    // row itself, so the email address stays. Do not report a clean delete.
    return NextResponse.json({
      ok: true,
      complete: false,
      note: "Your study data has been deleted. Your account record (email address) could not be removed automatically — email raistudyhelper@gmail.com and it will be deleted manually.",
    });
  }
  const admin = createClient(url, service, { auth: { autoRefreshToken: false, persistSession: false } });
  // Belt and braces: delete the rows first in case any table lacks an ON DELETE
  // CASCADE foreign key to auth.users, then remove the account itself.
  for (const t of ["profiles", "chat_messages", "chat_sessions", "flashcards", "quizzes", "quiz_attempts", "activity", "classroom_links", "syllabi"]) {
    await sb.from(t).delete().eq(t === "profiles" ? "id" : "user_id", user.id);
  }
  const { error } = await admin.auth.admin.deleteUser(user.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, complete: true });
}
