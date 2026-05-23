"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import type { FormulaSheet } from "@ash/core";

const SUBJECTS = ["Mathematics", "Physics", "Chemistry", "Biology", "Statistics", "Economics", "Accounting"];

export default function FormulaSheetPage() {
  const profile = useProfile((s) => s.profile);
  const [subject, setSubject] = useState("Mathematics");
  const [topic, setTopic] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [sheet, setSheet] = useState<FormulaSheet | null>(null);

  if (!profile) return <main className="p-6"><p>Complete <Link href="/onboarding" className="underline">onboarding</Link> first.</p></main>;

  async function build() {
    setBusy(true); setErr(null); setSheet(null);
    try {
      const r = await fetch("/api/math", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "sheet", profile, subject, topic: topic || undefined }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setSheet(d);
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="min-h-screen px-6 py-8 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <header className="mt-3 mb-6">
        <h1 className="text-3xl font-bold">Formula sheet builder</h1>
        <p className="text-sm mt-2" style={{ color: "var(--ash-muted)" }}>
          A focused list of formulas for your subject and grade — with when to use each one.
        </p>
      </header>

      <section className="glass-panel p-5 rounded-ash space-y-3">
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map((s) => (
            <button key={s} onClick={() => setSubject(s)}
              className="px-3 py-1.5 rounded-full text-sm"
              style={{
                background: subject === s ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "rgba(255,255,255,0.65)",
                color: subject === s ? "white" : "var(--ash-text)",
                border: "1px solid var(--ash-border)",
              }}>
              {s}
            </button>
          ))}
        </div>
        <input value={topic} onChange={(e) => setTopic(e.target.value)}
          placeholder="Optional: narrow to a topic (e.g. trigonometry, kinematics)"
          className="w-full p-3 rounded-ash border" style={{ borderColor: "var(--ash-border)" }} />
        <button disabled={busy} onClick={build}
          className="px-6 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Building…" : "Build my formula sheet"}
        </button>
        {err && <p className="text-sm text-red-600">{err}</p>}
      </section>

      {sheet && (
        <section className="glass-panel p-6 rounded-ash mt-6">
          <h2 className="font-bold text-xl">{sheet.subject}{sheet.topic ? ` · ${sheet.topic}` : ""}</h2>
          <div className="mt-4 space-y-5">
            {sheet.groups.map((g, i) => (
              <div key={i}>
                <h3 className="font-semibold border-b pb-1 mb-2" style={{ borderColor: "var(--ash-border)" }}>{g.title}</h3>
                <ul className="space-y-3">
                  {g.items.map((it, j) => (
                    <li key={j}>
                      <div className="font-semibold text-sm">{it.name}</div>
                      <div className="font-mono text-[15px] mt-1">{it.formula}</div>
                      <div className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>📌 Use when: {it.useWhen}</div>
                      {it.example && <div className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>e.g. {it.example}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
