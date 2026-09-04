import { NextRequest, NextResponse } from "next/server";
import { exchangeCode } from "@/lib/classroom";
import { supabaseServer } from "@/lib/supabase/server";

// DISABLED 2026-09-04. This Google Classroom integration is not linked from any
// page, is not mentioned anywhere in the privacy policy, and stores Google
// access and refresh tokens for students aged 13+. An undisclosed OAuth
// integration holding minors' credentials is a liability, not a feature.
// The code is intact: set CLASSROOM_ENABLED=1 to turn it back on, after adding
// it to the privacy policy and linking it from the UI.
const CLASSROOM_ENABLED = process.env.CLASSROOM_ENABLED === "1";
const classroomDisabled = () =>
  NextResponse.json(
    { error: "The Google Classroom connection is not available." },
    { status: 404 },
  );


export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  if (!CLASSROOM_ENABLED) return classroomDisabled();
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state"); // user id
  if (!code || !state) return NextResponse.redirect(new URL("/classroom?error=missing", url));

  const sb = await supabaseServer();
  if (!sb) return NextResponse.redirect(new URL("/classroom?error=no_supabase", url));
  const { data: { user } } = await sb.auth.getUser();
  if (!user || user.id !== state) return NextResponse.redirect(new URL("/classroom?error=state_mismatch", url));

  try {
    const tok = await exchangeCode(code);
    const expires_at = new Date(Date.now() + tok.expires_in * 1000).toISOString();
    await sb.from("classroom_links").upsert({
      user_id: user.id,
      provider: "google",
      access_token: tok.access_token,
      refresh_token: tok.refresh_token ?? null,
      expires_at,
      scope: tok.scope,
    });
    return NextResponse.redirect(new URL("/classroom?connected=1", url));
  } catch (e: any) {
    console.error("classroom callback", e);
    return NextResponse.redirect(new URL(`/classroom?error=${encodeURIComponent(e.message)}`, url));
  }
}
