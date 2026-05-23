import { NextResponse } from "next/server";
import { authUrl } from "@/lib/classroom";
import { supabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function GET() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Sign in required (Supabase not configured)." }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Sign in first." }, { status: 401 });
  if (!process.env.GOOGLE_CLIENT_ID) {
    return NextResponse.json({ error: "Google Classroom not configured. Set GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET in .env." }, { status: 400 });
  }
  return NextResponse.redirect(authUrl(user.id));
}
