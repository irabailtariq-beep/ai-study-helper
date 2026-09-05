import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { revokeGoogleToken } from "@/lib/classroom";

export const runtime = "nodejs";

// Note this route is NOT behind CLASSROOM_ENABLED, unlike connect/callback/summary.
// That is deliberate: a student who linked their Google account during the ~10
// weeks the Connect button was live must still be able to unlink it, even though
// nobody can link a new one. Gating this would trap the people it should serve.
export async function POST() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Auth not configured" }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  // Revoke at Google BEFORE dropping the row. Deleting our copy of the token
  // does not end Google's side of the grant — it just destroys the only thing
  // that could have ended it. Order matters here.
  const { data: link } = await sb
    .from("classroom_links")
    .select("refresh_token, access_token")
    .eq("user_id", user.id)
    .eq("provider", "google")
    .maybeSingle();

  const revoked = link?.refresh_token
    ? await revokeGoogleToken(link.refresh_token)
    : link?.access_token
      ? await revokeGoogleToken(link.access_token)
      : true; // nothing stored — nothing to revoke

  await sb.from("classroom_links").delete().eq("user_id", user.id).eq("provider", "google");

  // Tell the truth if Google would not confirm the revoke, so the student knows
  // to remove us at myaccount.google.com/permissions themselves.
  return NextResponse.json({
    ok: true,
    revoked,
    ...(revoked ? {} : {
      note: "We deleted our copy of the connection, but Google did not confirm it was switched off at their end. To be certain, remove Help in Study at myaccount.google.com/permissions.",
    }),
  });
}
