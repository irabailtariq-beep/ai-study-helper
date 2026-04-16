"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Data = {
  signedIn: boolean;
  streak?: { current: number; longest: number; totalDays: number };
  last14?: { day: string; explains: number; quizzes: number; chats: number; cards_reviewed: number }[];
  quizCount?: number;
  cardCount?: number;
};

export default function ProgressPage() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/api/progress").then((r) => r.json()).then(setData);
  }, []);

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Your progress</h1>
      {!data ? <p>Loading…</p> : !data.signedIn ? (
        <div className="bg-ash-surface p-6 rounded-ash shadow-sm">
          <p className="mb-3">Sign in to track streaks, review history, and sync across devices.</p>
          <Link href="/signin" className="inline-block px-4 py-2 rounded-ash text-white" style={{ background: "var(--ash-primary)" }}>
            Sign in
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <Card label="Current streak" value={`${data.streak?.current ?? 0} 🔥`} />
            <Card label="Longest streak" value={`${data.streak?.longest ?? 0}`} />
            <Card label="Active days" value={`${data.streak?.totalDays ?? 0}`} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Card label="Quizzes made" value={`${data.quizCount ?? 0}`} />
            <Card label="Flashcards" value={`${data.cardCount ?? 0}`} />
          </div>
          <div className="bg-ash-surface p-4 rounded-ash shadow-sm">
            <h2 className="font-semibold mb-3">Last 14 days</h2>
            <div className="flex gap-1 items-end h-24">
              {(data.last14 ?? []).map((d, i) => {
                const total = d.explains + d.quizzes + d.chats + d.cards_reviewed;
                const h = Math.min(100, total * 6);
                return (
                  <div key={i} className="flex-1 flex flex-col items-center" title={`${d.day}: ${total}`}>
                    <div
                      className="w-full"
                      style={{ height: `${h}%`, background: "var(--ash-primary)", borderRadius: 4, minHeight: 2 }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-ash-surface p-4 rounded-ash shadow-sm">
      <div className="text-xs" style={{ color: "var(--ash-muted)" }}>{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}
