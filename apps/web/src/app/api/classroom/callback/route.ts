import { NextRequest, NextResponse } from "next/server";
import { exchangeCode } from "@/lib/classroom";
import { supabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
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
