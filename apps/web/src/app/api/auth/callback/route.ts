import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  // Only ever redirect to a path on THIS site, or a login link becomes a
  // phishing vector: sign in through helpinstudy.com, land on someone else's
  // page. A previous version tested the string prefix ("starts with / but not
  // //"), which is bypassable — browsers resolve "/\\evil.com" and "/<tab>/evil.com"
  // as protocol-relative, so both escaped to https://evil.com/ (verified).
  // Resolving first and comparing the ORIGIN cannot be tricked that way.
  const raw = url.searchParams.get("next") ?? "/";
  let next = "/";
  try {
    const candidate = new URL(raw, url);
    if (candidate.origin === url.origin) next = candidate.pathname + candidate.search + candidate.hash;
  } catch {
    /* unparseable — fall back to the home page */
  }
  if (code) {
    const sb = await supabaseServer();
    if (sb) await sb.auth.exchangeCodeForSession(code);
  }
  return NextResponse.redirect(new URL(next, url));
}
