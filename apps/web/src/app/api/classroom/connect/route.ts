import { NextResponse } from "next/server";
import { authUrl } from "@/lib/classroom";
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

export async function GET() {
  if (!CLASSROOM_ENABLED) return classroomDisabled();
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Sign in required (Supabase not configured)." }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Sign in first." }, { status: 401 });
  if (!process.env.GOOGLE_CLIENT_ID) {
    return NextResponse.json({ error: "Google Classroom not configured. Set GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET in .env." }, { status: 400 });
  }
  return NextResponse.redirect(authUrl(user.id));
}
