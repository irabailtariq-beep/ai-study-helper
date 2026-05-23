"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { explainWith } from "@/lib/tools/clientHelpers";

const PROMPTS = {
  outline: "Create a clear essay outline (intro, 3 body paragraphs with topic sentences, conclusion) for the prompt below. Keep it punchy and exam-friendly.",
  improve: "Read the essay below and give specific, kind feedback. Point out (1) what works, (2) where the argument is weak, (3) three line-edits to lift the writing, (4) one stronger thesis the student could try.",
  thesis:  "Read the essay prompt below. Give 3 strong thesis statement options the student could choose from, ranked from safe to bold. Briefly explain why each one works.",
  hook:    "Suggest 5 different opening hooks for the essay below. Mix anecdote, statistic, question, quote, scene. Keep each under 30 words.",
};

export default function EssayCoachPage() {
  const profile = useProfile((s) => s.profile);
  const [mode, setMode] = useState<keyof typeof PROMPTS>("outline");
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AI essay coach</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Outline help, thesis options, opening hooks, or a kind line-edit on a draft. Pick a mode and paste your prompt or essay.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function run() {
    if (!profile) return;
    setBusy(true); setErr(null); setResult(null);
    try {
      const data = await explainWith({
        profile,
        text: `${PROMPTS[mode]}\n\n---\n${text}`,
        answerLength: "long",
      });
      setResult([data.explanation, ...(data.keyPoints?.map(k => `• ${k}`) ?? [])].join("\n\n"));
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>
          AI essay coach
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">Make your writing land.</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Outline help, thesis options, opening hooks, or a kind line-edit on a draft. Pick a mode and paste your prompt or essay.
        </p>
      </header>

      <section className="glass-panel p-5 rounded-2xl space-y-3">
        <div className="flex flex-wrap gap-2">
          {(Object.keys(PROMPTS) as (keyof typeof PROMPTS)[]).map((k) => (
            <button key={k} onClick={() => setMode(k)}
              className="px-3 py-1.5 rounded-full text-sm font-semibold capitalize"
              style={{
                background: mode === k ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "rgba(255,255,255,0.7)",
                color: mode === k ? "white" : "var(--ash-text)",
                border: "1px solid var(--ash-border)",
              }}>
              {k === "improve" ? "Improve my draft" : k === "thesis" ? "Thesis options" : k === "hook" ? "Opening hooks" : "Build outline"}
            </button>
          ))}
        </div>
        <textarea value={text} onChange={(e) => setText(e.target.value)}
          placeholder={mode === "improve" ? "Paste your essay here…" : "Paste the essay prompt or topic…"}
          className="w-full p-3 rounded-2xl border min-h-[160px]" style={{ borderColor: "var(--ash-border)" }} />
        <button disabled={busy || !text.trim()} onClick={run}
          className="px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Thinking…" : "Help me write"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </section>

      {result && (
        <section className="glass-panel p-6 rounded-2xl mt-6">
          <h2 className="font-semibold mb-3">Your coach says</h2>
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed">{result}</p>
        </section>
      )}
    </main>
  );
}
