"use client";
import Link from "next/link";
import { useState } from "react";
import { useProfile } from "@/lib/profileStore";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function SettingsPage() {
  const profile = useProfile((s) => s.profile);
  const setProfile = useProfile((s) => s.setProfile);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function deleteAccount() {
    if (!confirm("This permanently deletes your account and all your data. Continue?")) return;
    setBusy(true); setMsg(null);
    try {
      const r = await fetch("/api/account/delete", { method: "POST" });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setMsg(d.note ?? "Account deleted.");
      setProfile(null);
      const sb = supabaseBrowser();
      await sb?.auth.signOut();
    } catch (e: any) {
      setMsg(`Error: ${e.message}`);
    } finally { setBusy(false); }
  }

  async function downloadData() {
    setMsg(null);
    try {
      const r = await fetch("/api/account/export");
      if (r.status === 401) { setMsg("Sign in first — there is nothing to download for a signed-out visitor. Everything you have used so far is stored only in this browser."); return; }
      if (!r.ok) { setMsg("Could not prepare your download just now. Please try again shortly."); return; }
      const blob = await r.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "helpinstudy-my-data.json";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setMsg("Could not prepare your download just now. Please try again shortly.");
    }
  }

  async function signOut() {
    const sb = supabaseBrowser();
    await sb?.auth.signOut();
    setMsg("Signed out.");
  }

  function wipeLocal() {
    if (!confirm("Wipe guest profile + chat history on this device?")) return;
    localStorage.clear();
    setProfile(null);
    setMsg("Local data wiped.");
  }

  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Settings</h1>

      <section className="glass-panel p-6 rounded-ash mb-4">
        <h2 className="font-semibold mb-2">Profile</h2>
        {profile ? (
          <div className="text-sm">
            <div>Age: {profile.age}</div>
            <div>Country: {profile.country}</div>
            <div>Grade: {profile.grade}</div>
            <div>Curriculum: {profile.curriculum}</div>
            <Link href="/onboarding" className="text-sm underline mt-3 inline-block" style={{ color: "var(--ash-primary)" }}>Change</Link>
          </div>
        ) : <p>No profile yet. <Link href="/onboarding" className="underline">Set up</Link></p>}
      </section>

      <section className="glass-panel p-6 rounded-ash mb-4 space-y-2">
        <h2 className="font-semibold">Your data</h2>
        <div className="flex flex-wrap gap-2">
          <button onClick={downloadData} className="px-4 py-2 rounded-ash border">Download my data (JSON)</button>
          <button onClick={signOut} className="px-4 py-2 rounded-ash border">Sign out</button>
          <button onClick={wipeLocal} className="px-4 py-2 rounded-ash border">Wipe local data</button>
          <button onClick={deleteAccount} disabled={busy} className="px-4 py-2 rounded-ash text-white" style={{ background: "#dc2626" }}>
            {busy ? "Deleting…" : "Delete account"}
          </button>
        </div>
        {msg && <p className="text-sm mt-2" style={{ color: "var(--ash-muted)" }}>{msg}</p>}
      </section>

      <section className="text-sm space-x-4">
        <Link href="/privacy" className="underline">Privacy Policy</Link>
        <Link href="/terms" className="underline">Terms of Use</Link>
      </section>
    </main>
  );
}
