import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  // Only ever redirect to a path on this site. `new URL(next, url)` would happily
  // resolve "//evil.com/" to https://evil.com/, turning the login flow into an
  // open redirect an attacker could use to make a phishing link look like ours.
  const raw = url.searchParams.get("next") ?? "/";
  const next = raw.startsWith("/") && !raw.startsWith("//") ? raw : "/";
  if (code) {
    const sb = await supabaseServer();
    if (sb) await sb.auth.exchangeCodeForSession(code);
  }
  return NextResponse.redirect(new URL(next, url));
}
