"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TeamsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    try { const r = await fetch("/api/teams/summary"); const d = await r.json(); if (!r.ok) throw new Error(d.error ?? "Failed"); setData(d); }
    catch (e: any) { setErr(e.message); } finally { setLoading(false); }
  }
  useEffect(() => { load(); }, []);

  async function disconnect() {
    await fetch("/api/teams/disconnect", { method: "POST" }); await load();
  }

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-8">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>
          🟦 Microsoft Teams · AI study coach
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
          Sync your Teams assignments
        </h1>
        <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>
          Connect Microsoft Teams for Education once. We read your classes and assignments,
          surface what's overdue and due soon, and your AI study coach suggests what to start on next.
        </p>
      </header>

      {loading && <p>Loading…</p>}
      {err && <div className="glass-panel p-4 rounded-2xl text-red-600">{err}</div>}

      {data && !data.connected && (
        <>
          <section className="grid sm:grid-cols-2 gap-4 mb-8">
            <Benefit emoji="📅" title="Deadlines at a glance" body="What's due this week. What's overdue. No more digging through Teams." />
            <Benefit emoji="🎯" title="AI study coach"          body="Picks 1–3 things to work on next based on deadlines + your grades." />
            <Benefit emoji="📝" title="Drop-in help"            body="One tap to ask Help in Study about any assignment from your class." />
            <Benefit emoji="🔒" title="Read-only access"        body="We only read your assignments. We never submit, edit, or delete anything." />
          </section>

          <section className="glass-panel p-6 rounded-2xl mb-6">
            <h2 className="text-lg font-bold mb-3">Connect in 2 clicks</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Click "Connect Microsoft Teams" below.</li>
              <li>Microsoft asks you to sign in and confirm read access. That's it.</li>
            </ol>
            <a
              href="/api/teams/connect"
              className="mt-5 inline-block px-6 py-3 rounded-full text-white font-semibold"
              style={{ background: "linear-gradient(135deg, #2B579A, #106EBE)" }}
            >
              Connect Microsoft Teams →
            </a>
            <p className="text-xs mt-3" style={{ color: "var(--ash-muted)" }}>
              You need a school Microsoft 365 account with Teams for Education.
              We store only the access token — used solely to read your classes and assignments.
              Disconnect any time.
            </p>
          </section>

          <section className="glass-panel p-5 rounded-2xl text-sm" style={{ color: "var(--ash-muted)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "var(--ash-text)" }}>What we ask permission for</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Read basic education info (your classes)</li>
              <li>Read assignments you have been given</li>
              <li>Read your basic profile (name + email)</li>
            </ul>
            <p className="mt-3">
              We <b>never</b> ask for write access. We can't submit work or change anything in Teams.
            </p>
          </section>
        </>
      )}

      {data && data.connected && (
        <>
          {data.aiSummary && (
            <section className="glass-panel p-6 rounded-2xl mb-4">
              <h2 className="font-semibold mb-2">Your AI study coach</h2>
              <p className="whitespace-pre-wrap text-sm">{data.aiSummary}</p>
            </section>
          )}
          <section className="space-y-3">
            {data.classes?.map((c: any) => (
              <div key={c.class.id} className="glass-panel p-4 rounded-2xl">
                <div className="font-semibold mb-2">{c.class.displayName}</div>
                {c.assignments.length === 0 ? (
                  <p className="text-sm" style={{ color: "var(--ash-muted)" }}>No assignments.</p>
                ) : (
                  <ul className="text-sm space-y-1">
                    {c.assignments.map((a: any) => (
                      <li key={a.id} className="flex justify-between gap-2">
                        <span>{a.title}</span>
                        <span className="text-xs" style={{ color: "var(--ash-muted)" }}>
                          {a.status ?? ""}{a.dueDateTime ? ` · ${new Date(a.dueDateTime).toLocaleDateString()}` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
          <button onClick={disconnect} className="text-sm mt-6 underline" style={{ color: "var(--ash-muted)" }}>Disconnect Teams</button>
        </>
      )}
    </main>
  );
}

function Benefit({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div className="glass-panel rounded-2xl p-5">
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>{body}</div>
    </div>
  );
}
