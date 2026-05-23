import { NextResponse } from "next/server";
import { authUrl } from "@/lib/teams";
import { supabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function GET() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Sign in required." }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Sign in first." }, { status: 401 });
  if (!process.env.MS_CLIENT_ID) {
    return NextResponse.json({ error: "Microsoft Teams not configured. Set MS_CLIENT_ID + MS_CLIENT_SECRET." }, { status: 400 });
  }
  return NextResponse.redirect(authUrl(user.id));
}
