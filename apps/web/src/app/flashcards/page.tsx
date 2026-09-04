"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useEffectiveProfile } from "@/lib/profileStore";
import { ProfileNudge } from "@/components/ProfileNudge";
import { fileToBase64, checkFile } from "@/lib/upload";
import { sm2 } from "@/lib/sm2";
import { InlineRich } from "@/components/RichOutput";

type Card = {
  id: string;
  front: string;
  back: string;
  deck?: string;
  interval_days: number;
  ease: number;
  reps: number;
  due_at: string;     // YYYY-MM-DD
  created_at: string;
};

const STORAGE_KEY = "ash-flashcards-v1";

function loadCards(): Card[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]"); }
  catch { return []; }
}
function saveCards(cards: Card[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

export default function FlashcardsPage() {
  const profile = useEffectiveProfile();
  const [cards, setCards] = useState<Card[]>([]);
  const [current, setCurrent] = useState<Card | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [count, setCount] = useState(10);
  const [busy, setBusy] = useState(false);

  // Load on mount: local first so the page is instant, then merge in anything
  // saved to the account. Without this second step signing in synced nothing —
  // the API existed and was never called, while /signin and the settings page
  // both promised "sync your flashcards across devices".
  useEffect(() => {
    const local = loadCards();
    setCards(local);
    const today = new Date().toISOString().slice(0, 10);
    setCurrent(local.filter((c) => c.due_at <= today)[0] ?? local[0] ?? null);

    let cancelled = false;
    (async () => {
      try {
        const r = await fetch("/api/flashcards");
        if (!r.ok) return;
        const { cards: remote } = (await r.json()) as { cards?: Card[] };
        if (cancelled || !remote?.length) return;
        // Merge by content, not by id: a card made offline and the same card
        // saved to the account are the same card to the student. The server row
        // wins because it carries the real review schedule.
        const key = (c: Card) => `${c.front}\u0000${c.back}`;
        const merged = [...remote];
        const seen = new Set(remote.map(key));
        for (const c of local) if (!seen.has(key(c))) merged.push(c);
        saveCards(merged);
        setCards(merged);
        setCurrent(merged.filter((c) => c.due_at <= today)[0] ?? merged[0] ?? null);
      } catch {
        /* offline or signed out — the local deck is already showing */
      }
    })();
    return () => { cancelled = true; };
  }, []);

  function persist(next: Card[]) {
    saveCards(next);
    setCards(next);
  }

  async function generate() {
    if (!source.trim() && !file) return setError("Paste a topic or upload a file first.");
    setBusy(true); setError(null);
    try {
      const body: any = { action: "generate", profile, count };
      if (source.trim()) body.sourceText = source.trim();
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
      if (!r.ok) throw new Error(d.error ?? "Generation failed");
      const newCards: Card[] = d.cards ?? [];
      if (newCards.length === 0) throw new Error("AI returned no cards. Try a different topic or longer source.");
      const merged = [...newCards, ...cards];
      persist(merged);
      setCurrent(newCards[0] ?? null);
      setFlipped(false);
      setSource("");
      setFile(null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  function review(quality: number) {
    if (!current) return;
    const next = sm2(current, quality);
    const updated: Card = { ...current, interval_days: next.interval_days, ease: next.ease, reps: next.reps, due_at: next.nextDue };
    const allCards = cards.map((c) => (c.id === current.id ? updated : c));
    persist(allCards);
    setFlipped(false);
    // Move to next due card
    const today = new Date().toISOString().slice(0, 10);
    const due = allCards.filter((c) => c.due_at <= today && c.id !== current.id);
    setCurrent(due[0] ?? null);
  }

  function deleteCurrent() {
    if (!current) return;
    if (!confirm("Delete this card?")) return;
    const next = cards.filter((c) => c.id !== current.id);
    persist(next);
    const today = new Date().toISOString().slice(0, 10);
    const due = next.filter((c) => c.due_at <= today);
    setCurrent(due[0] ?? next[0] ?? null);
  }

  function wipeAll() {
    if (!confirm("Delete ALL flashcards on this device?")) return;
    persist([]);
    setCurrent(null);
  }

  const today = new Date().toISOString().slice(0, 10);
  const dueCount = cards.filter((c) => c.due_at <= today).length;


  return (
    <main className="px-6 py-10 max-w-2xl mx-auto">
      <ProfileNudge />
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <h1 className="text-3xl font-extrabold tracking-tight my-4">Flashcards</h1>
      <p className="text-sm mb-6" style={{ color: "var(--ash-muted)" }}>
        Auto-generated from any material. Spaced repetition. Stored on this device — no sign-in needed.
      </p>

      {error && <div className="glass-panel p-4 rounded-2xl text-red-600 text-sm mb-4">{error}</div>}

      {/* Review card */}
      {current ? (
        <section
          onClick={() => setFlipped((f) => !f)}
          className="glass-panel p-8 rounded-2xl text-center cursor-pointer min-h-[200px] flex items-center justify-center"
        >
          <div>
            <p className="text-xs mb-2" style={{ color: "var(--ash-muted)" }}>
              {flipped ? "Answer" : "Question"} · tap to flip
            </p>
            <p className="text-xl"><InlineRich>{flipped ? current.back : current.front}</InlineRich></p>
          </div>
        </section>
      ) : (
        <section className="glass-panel p-6 rounded-2xl text-center" style={{ color: "var(--ash-muted)" }}>
          {cards.length === 0 ? "No cards yet. Generate some below ↓" : "Nothing due right now. Come back tomorrow!"}
        </section>
      )}

      {/* Grade buttons */}
      {current && flipped && (
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { q: 1, label: "Again", color: "#dc2626" },
            { q: 3, label: "Hard", color: "#ea580c" },
            { q: 4, label: "Good", color: "#16a34a" },
            { q: 5, label: "Easy", color: "#2563eb" },
          ].map((b) => (
            <button key={b.q} onClick={() => review(b.q)} className="py-3 rounded-2xl text-white text-sm font-semibold"
              style={{ background: b.color }}>
              {b.label}
            </button>
          ))}
        </div>
      )}

      {current && (
        <div className="text-right mt-2">
          <button onClick={deleteCurrent} className="text-xs underline" style={{ color: "var(--ash-muted)" }}>Delete this card</button>
        </div>
      )}

      {/* Generate */}
      <section className="mt-8 glass-panel p-6 rounded-2xl">
        <h2 className="font-semibold mb-2">Generate new cards</h2>
        <p className="text-sm mb-3" style={{ color: "var(--ash-muted)" }}>
          Type a topic, paste a lesson, or upload a file. We turn it into flashcards.
        </p>
        <textarea value={source} onChange={(e) => setSource(e.target.value)}
          className="w-full p-3 rounded-2xl border min-h-[100px]"
          placeholder="e.g. probability rules · or paste a lesson · or leave blank if uploading a file" />
        <input type="file" accept="image/*,application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="mt-2 block text-sm" />
        <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>
          Tip: photo / PDF quality must be clear and well-lit — blurry or dark pictures can't be read by the AI.
        </p>
        {file && <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>📎 {file.name}</p>}
        <div className="mt-3 flex items-center gap-3">
          <label className="text-sm" style={{ color: "var(--ash-muted)" }} htmlFor="flashcards-how-many-b-count-b">
            How many? <b>{count}</b>
          </label>
          <input id="flashcards-how-many-b-count-b" type="range" min={5} max={20} value={count} onChange={(e) => setCount(Number(e.target.value))} className="flex-1" />
        </div>
        <button onClick={generate} disabled={busy}
          className="mt-4 px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
          {busy ? "Generating…" : `Generate ${count} cards`}
        </button>
      </section>

      <p className="text-xs mt-6" style={{ color: "var(--ash-muted)" }}>
        {dueCount} due today · {cards.length} total cards on this device.
        {cards.length > 0 && (
          <> · <button onClick={wipeAll} className="underline">Wipe all</button></>
        )}
      </p>
    </main>
  );
}
