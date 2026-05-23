"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { explainWith } from "@/lib/tools/clientHelpers";

export default function VocabPage() {
  const profile = useProfile((s) => s.profile);
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("English");
  const [busy, setBusy] = useState(false);
  const [out, setOut] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Vocabulary builder</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Type any word in any language. Get the meaning, three example sentences, synonyms, antonyms, and a memory tip.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function run() {
    if (!profile) return;
    setBusy(true); setErr(null); setOut(null);
    try {
      const data = await explainWith({
        profile,
        text: `Explain the word "${word}" in ${language}. Give: simple meaning, one easy example sentence, two harder example sentences using the word in different contexts, common synonyms, common antonyms, a memory tip a student could use, and the part of speech. Avoid AI-sounding phrasing.`,
        answerLength: "long",
      });
      setOut([data.explanation, ...(data.keyPoints?.map(k => `• ${k}`) ?? [])].join("\n\n"));
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Vocabulary builder</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Type any word in any language. Get the meaning, three example sentences, synonyms, antonyms, and a memory tip.
        </p>
      </header>

      <section className="glass-panel p-5 rounded-2xl space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-3">
          <input value={word} onChange={(e) => setWord(e.target.value)} placeholder="e.g. ephemeral"
            className="p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }} />
          <select value={language} onChange={(e) => setLanguage(e.target.value)}
            className="p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }}>
            <option>English</option><option>Arabic</option><option>French</option><option>Spanish</option>
            <option>German</option><option>Urdu</option><option>Hindi</option><option>Indonesian</option>
            <option>Portuguese</option><option>Mandarin</option><option>Japanese</option><option>Korean</option>
          </select>
        </div>
        <button disabled={busy || !word.trim()} onClick={run}
          className="px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Looking up…" : "Show me"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </section>

      {out && (
        <section className="glass-panel p-6 rounded-2xl mt-6">
          <h2 className="font-semibold mb-3">{word}</h2>
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed">{out}</p>
        </section>
      )}
    </main>
  );
}
