"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Summary = {
  connected: boolean;
  courses?: { course: { id: string; name: string }; work: any[] }[];
  aiSummary?: string;
  error?: string;
};

export default function ClassroomPage() {
  const [data, setData] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    try {
      const r = await fetch("/api/classroom/summary");
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setData(d);
    } catch (e: any) {
      setError(e.message);
    } finally { setLoading(false); }
  }
  useEffect(() => { load(); }, []);

  async function disconnect() {
    await fetch("/api/classroom/disconnect", { method: "POST" });
    await load();
  }

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-8">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>
          🎒 Google Classroom · AI study coach
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
          Sync your Classroom assignments
        </h1>
        <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>
          Connect Google Classroom once. Help in Study reads your courses and assignments,
          shows what's overdue and due soon, and your AI study coach suggests what to work on next.
        </p>
      </header>

      {loading && <p>Loading…</p>}
      {error && <div className="glass-panel p-4 rounded-2xl text-red-600">{error}</div>}

      {/* Benefits — show even when not connected */}
      {data && !data.connected && (
        <>
          <section className="grid sm:grid-cols-2 gap-4 mb-8">
            <Benefit emoji="📅" title="See what's overdue" body="Every overdue assignment, every deadline this week — surfaced automatically." />
            <Benefit emoji="🎯" title="Plan your week"     body="AI coach picks 1–3 things to work on next based on your grades and deadlines." />
            <Benefit emoji="📝" title="Drop-in help"       body="One click to ask Help in Study about any specific assignment." />
            <Benefit emoji="🔒" title="Read-only"          body="We only ever read — we never submit, edit or delete anything in Classroom." />
          </section>

          <section className="glass-panel p-6 rounded-2xl mb-6">
            <h2 className="text-lg font-bold mb-3">Connect in 2 clicks</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Click "Connect Google Classroom" below.</li>
              <li>Google asks you to confirm read access for assignments. That's it.</li>
            </ol>
            <a
              href="/api/classroom/connect"
              className="mt-5 inline-block px-6 py-3 rounded-full text-white font-semibold"
              style={{ background: "linear-gradient(135deg, #4285F4, #34A853)" }}
            >
              Connect Google Classroom →
            </a>
            <p className="text-xs mt-3" style={{ color: "var(--ash-muted)" }}>
              Requires you to be signed in to Help in Study.
              We store the access token only — used solely to read your courses and assignments.
              Disconnect any time from this page or Settings.
            </p>
          </section>

          <section className="glass-panel p-5 rounded-2xl text-sm" style={{ color: "var(--ash-muted)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "var(--ash-text)" }}>What we ask permission for</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Read your active courses</li>
              <li>Read assignments and your submission status</li>
              <li>Read your basic profile (name + email) for sign-in</li>
            </ul>
            <p className="mt-3">
              We <b>never</b> ask for write access. We can't submit, edit or delete anything.
            </p>
          </section>
        </>
      )}

      {data && data.connected && (
        <>
          {data.aiSummary && (
            <section className="glass-panel p-6 rounded-2xl mb-4">
              <h2 className="font-semibold mb-2">Your AI study coach says</h2>
              <p className="whitespace-pre-wrap text-sm">{data.aiSummary}</p>
            </section>
          )}
          <section className="space-y-3">
            {data.courses?.map((c) => (
              <div key={c.course.id} className="glass-panel p-4 rounded-2xl">
                <div className="font-semibold mb-2">{c.course.name}</div>
                {c.work.length === 0 ? (
                  <p className="text-sm" style={{ color: "var(--ash-muted)" }}>No coursework yet.</p>
                ) : (
                  <ul className="text-sm space-y-1">
                    {c.work.map((w: any) => (
                      <li key={w.id} className="flex justify-between gap-2">
                        <span>{w.title}</span>
                        <span className="text-xs" style={{ color: w.state === "TURNED_IN" ? "#16a34a" : w.late ? "#dc2626" : "var(--ash-muted)" }}>
                          {w.state === "TURNED_IN" ? "Done" : w.late ? "Late" : w.dueDate ? `Due ${w.dueDate.year}-${String(w.dueDate.month).padStart(2,"0")}-${String(w.dueDate.day).padStart(2,"0")}` : "—"}
                          {w.grade != null ? ` · ${w.grade}/${w.max ?? "-"}` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
          <button onClick={disconnect} className="mt-6 text-sm underline" style={{ color: "var(--ash-muted)" }}>
            Disconnect Google Classroom
          </button>
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
