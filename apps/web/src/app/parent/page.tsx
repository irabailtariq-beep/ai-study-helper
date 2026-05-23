"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ParentDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/parent-recap")
      .then(async (r) => { const d = await r.json(); if (!r.ok) throw new Error(d.error); return d; })
      .then(setData)
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Parent dashboard</h1>
      <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
        A weekly recap a parent or guardian can read in under a minute. Requires sign-in.
      </p>

      {loading && <p>Loading…</p>}
      {err && <div className="glass-panel p-4 rounded-ash text-red-600">{err} — please <Link href="/signin" className="underline">sign in</Link>.</div>}

      {data && (
        <div className="space-y-4">
          <section className="glass-panel p-6 rounded-ash">
            <h2 className="font-semibold mb-2">This week's note</h2>
            <p className="whitespace-pre-wrap text-sm">{data.letter}</p>
          </section>
          <section className="glass-panel p-6 rounded-ash">
            <h2 className="font-semibold mb-2">Numbers</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>Active days: <b>{data.stats.totals.days}</b></div>
              <div>Explanations: <b>{data.stats.totals.explains}</b></div>
              <div>Quizzes: <b>{data.stats.totals.quizzes}</b></div>
              <div>Chats: <b>{data.stats.totals.chats}</b></div>
              <div>Cards reviewed: <b>{data.stats.totals.cards}</b></div>
            </div>
          </section>
          {data.stats.quizzesMade?.length > 0 && (
            <section className="glass-panel p-6 rounded-ash">
              <h2 className="font-semibold mb-2">Quizzes made this week</h2>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {data.stats.quizzesMade.slice(-8).map((t: string, i: number) => <li key={i}>{t}</li>)}
              </ul>
            </section>
          )}
        </div>
      )}
    </main>
  );
}
