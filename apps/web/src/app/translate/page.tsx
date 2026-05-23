"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { explainWith } from "@/lib/tools/clientHelpers";

const LANGS = ["English","Arabic","French","Spanish","German","Italian","Portuguese","Russian","Mandarin","Japanese","Korean","Hindi","Urdu","Bengali","Indonesian","Vietnamese","Thai","Turkish","Persian","Swahili"];

export default function TranslatePage() {
  const profile = useProfile((s) => s.profile);
  const [from, setFrom] = useState("English");
  const [to, setTo] = useState("Urdu");
  const [text, setText] = useState("");
  const [keepTerms, setKeepTerms] = useState(true);
  const [busy, setBusy] = useState(false);
  const [out, setOut] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Translation mode for students</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Translate a paragraph from your textbook to your language while keeping technical terms intact so you don't lose marks on the exam.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function run() {
    if (!profile) return;
    setBusy(true); setErr(null); setOut(null);
    try {
      const data = await explainWith({
        profile,
        text: `Translate the following from ${from} to ${to}. ${keepTerms ? "Keep technical / scientific terms in the original language in parentheses next to the translation. " : ""}After the translation, list any 5 tricky vocabulary items the student should remember from this passage with one-line meanings.\n\n---\n${text}`,
        answerLength: "long",
      });
      setOut([data.explanation, ...(data.keyPoints?.map(k => `• ${k}`) ?? [])].join("\n\n"));
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Translation mode</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Translate a paragraph from your textbook to your language. Keep the technical terms in English so you don't lose marks on the exam.
        </p>
      </header>

      <section className="glass-panel p-5 rounded-2xl space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="text-sm">From
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="mt-1 w-full p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }}>
              {LANGS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </label>
          <label className="text-sm">To
            <select value={to} onChange={(e) => setTo(e.target.value)} className="mt-1 w-full p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }}>
              {LANGS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </label>
        </div>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste the paragraph to translate…"
          className="w-full p-3 rounded-2xl border min-h-[160px]" style={{ borderColor: "var(--ash-border)" }} />
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" checked={keepTerms} onChange={(e) => setKeepTerms(e.target.checked)} />
          Keep technical terms in original language
        </label>
        <button disabled={busy || !text.trim()} onClick={run}
          className="px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Translating…" : "Translate"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </section>

      {out && (
        <section className="glass-panel p-6 rounded-2xl mt-6">
          <h2 className="font-semibold mb-3">{from} → {to}</h2>
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed">{out}</p>
        </section>
      )}
    </main>
  );
}
