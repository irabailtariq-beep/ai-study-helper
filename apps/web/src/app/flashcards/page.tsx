"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { fileToBase64, checkFile } from "@/lib/upload";

type Card = { id: string; front: string; back: string; deck: string; due_at: string; reps: number };

export default function FlashcardsPage() {
  const profile = useProfile((s) => s.profile);
  const [cards, setCards] = useState<Card[]>([]);
  const [due, setDue] = useState<Card[]>([]);
  const [current, setCurrent] = useState<Card | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);

  async function load() {
    const r = await fetch("/api/flashcards");
    if (!r.ok) {
      setError("Flashcards need sign-in. Go to /signin.");
      return;
    }
    const d = await r.json();
    setCards(d.cards ?? []);
    setDue(d.due ?? []);
    setCurrent((d.due ?? [])[0] ?? null);
    setFlipped(false);
  }
  useEffect(() => { load(); }, []);

  async function review(quality: number) {
    if (!current) return;
    await fetch("/api/flashcards", {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ action: "review", id: current.id, quality }),
    });
    setFlipped(false);
    const next = due.slice(1);
    setDue(next);
    setCurrent(next[0] ?? null);
  }

  async function generate() {
    if (!profile) return;
    if (!source && !file) return;
    setBusy(true); setError(null);
    try {
      const body: any = { action: "generate", profile, sourceText: source || undefined, count: 10 };
      if (file) {
        const msg = checkFile(file); if (msg) throw new Error(msg);
        const b64 = await fileToBase64(file);
        if (file.type === "application/pdf") body.pdfBase64 = b64; else body.imageBase64 = b64;
      }
      const r = await fetch("/api/flashcards", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      await load();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Flashcards</h1>

      {error && <div className="bg-ash-surface p-4 rounded-ash text-sm mb-4">{error}</div>}

      {current ? (
        <div
          onClick={() => setFlipped((f) => !f)}
          className="bg-ash-surface p-8 rounded-ash shadow-sm text-center cursor-pointer min-h-[180px] flex items-center justify-center"
        >
          <div>
            <p className="text-xs mb-2" style={{ color: "var(--ash-muted)" }}>
              {flipped ? "Answer" : "Question"} · tap to flip
            </p>
            <p className="text-xl">{flipped ? current.back : current.front}</p>
          </div>
        </div>
      ) : (
        <div className="bg-ash-surface p-6 rounded-ash text-center" style={{ color: "var(--ash-muted)" }}>
          {cards.length === 0 ? "No cards yet. Generate from any material below." : "Nothing due right now. Come back tomorrow!"}
        </div>
      )}

      {current && flipped && (
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { q: 1, label: "Again", color: "#dc2626" },
            { q: 3, label: "Hard", color: "#ea580c" },
            { q: 4, label: "Good", color: "#16a34a" },
            { q: 5, label: "Easy", color: "#2563eb" },
          ].map((b) => (
            <button key={b.q} onClick={() => review(b.q)} className="py-3 rounded-ash text-white"
              style={{ background: b.color }}>
              {b.label}
            </button>
          ))}
        </div>
      )}

      <section className="mt-8 bg-ash-surface p-6 rounded-ash shadow-sm">
        <h2 className="font-semibold mb-2">Generate cards from material</h2>
        <textarea value={source} onChange={(e) => setSource(e.target.value)}
          className="w-full p-2 border rounded-ash min-h-[80px]"
          placeholder="Paste a lesson, or upload a file below…" />
        <input type="file" accept="image/*,application/pdf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="mt-2" />
        <button onClick={generate} disabled={busy} className="mt-3 px-4 py-2 rounded-ash text-white disabled:opacity-40"
          style={{ background: "var(--ash-primary)" }}>
          {busy ? "Generating…" : "Generate 10 cards"}
        </button>
      </section>

      <p className="text-xs mt-6" style={{ color: "var(--ash-muted)" }}>
        {due.length} due today · {cards.length} total
      </p>
    </main>
  );
}
