"use client";
import { useState } from "react";
import { supabaseBrowser, isSupabaseConfigured } from "@/lib/supabase/browser";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [err, setErr] = useState<string | null>(null);

  if (!isSupabaseConfigured()) {
    return (
      <main className="min-h-screen p-6 max-w-md mx-auto">
        <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
        <h1 className="text-2xl font-bold my-4">Sign in</h1>
        <p className="bg-ash-surface p-4 rounded-ash text-sm" style={{ color: "var(--ash-muted)" }}>
          Sign-in needs Supabase to be configured. Add
          <code className="mx-1 px-1 bg-gray-100 rounded">NEXT_PUBLIC_SUPABASE_URL</code>
          and
          <code className="mx-1 px-1 bg-gray-100 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
          to <code>apps/web/.env.local</code> — until then, guest mode works and stores everything on-device.
        </p>
      </main>
    );
  }

  async function sendMagicLink() {
    setErr(null);
    const sb = supabaseBrowser();
    if (!sb) return;
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/api/auth/callback?next=/` },
    });
    if (error) { setErr(error.message); setStatus("error"); }
    else setStatus("sent");
  }

  async function withGoogle() {
    const sb = supabaseBrowser();
    if (!sb) return;
    await sb.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/api/auth/callback?next=/` },
    });
  }

  return (
    <main className="min-h-screen p-6 max-w-md mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Sign in</h1>

      <div className="bg-ash-surface p-6 rounded-ash shadow-sm space-y-4">
        <button
          onClick={withGoogle}
          className="w-full px-4 py-3 rounded-ash border font-medium"
        >
          Continue with Google
        </button>

        <div className="text-center text-xs" style={{ color: "var(--ash-muted)" }}>or</div>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="you@example.com"
          className="w-full p-3 rounded-ash border"
        />
        <button
          onClick={sendMagicLink}
          disabled={!email}
          className="w-full px-4 py-3 rounded-ash text-white disabled:opacity-40"
          style={{ background: "var(--ash-primary)" }}
        >
          Email me a sign-in link
        </button>

        {status === "sent" && <p className="text-sm text-green-700">Link sent. Check your email.</p>}
        {err && <p className="text-sm text-red-600">{err}</p>}
        <p className="text-xs" style={{ color: "var(--ash-muted)" }}>
          Signing in is optional — guest mode works too. Sign in to sync across devices and save progress.
        </p>
      </div>
    </main>
  );
}
