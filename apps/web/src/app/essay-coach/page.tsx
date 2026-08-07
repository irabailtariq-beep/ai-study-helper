"use client";
import { useState } from "react";
import Link from "next/link";
import { useEffectiveProfile } from "@/lib/profileStore";
import { ProfileNudge } from "@/components/ProfileNudge";
import { explainWith, grammarWith } from "@/lib/tools/clientHelpers";
import { RichOutput, InlineRich } from "@/components/RichOutput";
import { formatCitation, CITE_STYLES, type CiteStyle } from "@/lib/citation";
import type { GrammarResult } from "@ash/core";

const FEEDBACK_PROMPTS = {
  outline: "Create a clear essay outline (intro, 3 body paragraphs with topic sentences, conclusion) for the prompt below. Keep it punchy and exam-friendly.",
  improve: "Read the essay below and give specific, kind feedback. Point out (1) what works, (2) where the argument is weak, (3) three line-edits to lift the writing, (4) one stronger thesis the student could try.",
  thesis:  "Read the essay prompt below. Give 3 strong thesis statement options the student could choose from, ranked from safe to bold. Briefly explain why each one works.",
  hook:    "Suggest 5 different opening hooks for the essay below. Mix anecdote, statistic, question, quote, scene. Keep each under 30 words.",
};

type Tab = "feedback" | "grammar" | "cite";

export default function WritingCoachPage() {
  const profile = useEffectiveProfile();
  const [tab, setTab] = useState<Tab>("feedback");


  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <ProfileNudge />
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>Writing coach</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">Make your writing land.</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Get essay feedback, a grammar &amp; clarity check, or a perfectly-formatted citation. Pick a mode.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-5">
        {([["feedback", "Essay feedback"], ["grammar", "Grammar check"], ["cite", "Citations"]] as [Tab, string][]).map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)}
            className="px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: tab === id ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "rgba(255,255,255,0.7)",
              color: tab === id ? "white" : "var(--ash-text)",
              border: "1px solid var(--ash-border)",
            }}>{label}</button>
        ))}
      </div>

      {tab === "feedback" && <FeedbackMode profile={profile} />}
      {tab === "grammar" && <GrammarMode profile={profile} />}
      {tab === "cite" && <CiteMode />}
    </main>
  );
}

function FeedbackMode({ profile }: { profile: any }) {
  const [mode, setMode] = useState<keyof typeof FEEDBACK_PROMPTS>("outline");
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function run() {
    setBusy(true); setErr(null); setResult(null);
    try {
      const data = await explainWith({ profile, text: `${FEEDBACK_PROMPTS[mode]}\n\n---\n${text}`, answerLength: "long" });
      setResult([data.explanation, ...(data.keyPoints?.map((k) => `- ${k}`) ?? [])].join("\n\n"));
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <>
      <section className="glass-panel p-5 rounded-2xl space-y-3">
        <div className="flex flex-wrap gap-2">
          {(Object.keys(FEEDBACK_PROMPTS) as (keyof typeof FEEDBACK_PROMPTS)[]).map((k) => (
            <button key={k} onClick={() => setMode(k)}
              className="px-3 py-1.5 rounded-full text-sm font-semibold"
              style={{
                background: mode === k ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "rgba(255,255,255,0.7)",
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
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
          {busy ? "Thinking…" : "Help me write"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </section>
      {result && (
        <section className="glass-panel p-6 rounded-2xl mt-6">
          <h2 className="font-semibold mb-3">Your coach says</h2>
          <div className="text-[15px] leading-relaxed"><RichOutput>{result}</RichOutput></div>
        </section>
      )}
    </>
  );
}

function GrammarMode({ profile }: { profile: any }) {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [res, setRes] = useState<GrammarResult | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function run() {
    setBusy(true); setErr(null); setRes(null); setCopied(false);
    try { setRes(await grammarWith(profile, text)); }
    catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <>
      <section className="glass-panel p-5 rounded-2xl space-y-3">
        <textarea value={text} onChange={(e) => setText(e.target.value)}
          placeholder="Paste your writing to check grammar, spelling and clarity…"
          className="w-full p-3 rounded-2xl border min-h-[160px]" style={{ borderColor: "var(--ash-border)" }} />
        <button disabled={busy || !text.trim()} onClick={run}
          className="px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
          {busy ? "Checking…" : "Check my writing"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </section>
      {res && (
        <section className="glass-panel p-6 rounded-2xl mt-6 space-y-4">
          <p className="text-sm" style={{ color: "var(--ash-muted)" }}>{res.summary}</p>
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">Corrected</h2>
              <button onClick={() => { navigator.clipboard.writeText(res.correctedText); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
                className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--ash-border)" }}>{copied ? "Copied ✓" : "Copy"}</button>
            </div>
            <div className="text-[15px] leading-relaxed"><RichOutput>{res.correctedText}</RichOutput></div>
          </div>
          {res.issues?.length > 0 && (
            <div>
              <h3 className="font-semibold text-sm mb-2">What changed</h3>
              <ul className="space-y-2 text-sm">
                {res.issues.map((it, i) => (
                  <li key={i} className="border-l-2 pl-3" style={{ borderColor: "var(--ash-primary)" }}>
                    <span style={{ color: "#b91c1c" }}>{it.original}</span> → <b>{it.suggestion}</b>
                    <div className="text-xs" style={{ color: "var(--ash-muted)" }}>{it.type} · {it.why}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {res.clarityNotes?.length > 0 && (
            <div>
              <h3 className="font-semibold text-sm mb-1">To make it stronger</h3>
              <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: "var(--ash-muted)" }}>
                {res.clarityNotes.map((n, i) => <li key={i}><InlineRich>{n}</InlineRich></li>)}
              </ul>
            </div>
          )}
        </section>
      )}
    </>
  );
}

function CiteMode() {
  const [style, setStyle] = useState<CiteStyle>("apa");
  const [f, setF] = useState({ author: "", title: "", year: "", publisher: "", url: "", accessed: "" });
  const [copied, setCopied] = useState(false);
  const out = formatCitation(style, f);
  const set = (k: keyof typeof f) => (e: any) => setF((s) => ({ ...s, [k]: e.target.value }));

  return (
    <section className="glass-panel p-5 rounded-2xl space-y-3">
      <div className="flex flex-wrap gap-2 mb-1">
        {CITE_STYLES.map((s) => (
          <button key={s.id} onClick={() => setStyle(s.id)}
            className="px-3 py-1.5 rounded-full text-sm font-semibold"
            style={{ background: style === s.id ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "rgba(255,255,255,0.7)", color: style === s.id ? "white" : "var(--ash-text)", border: "1px solid var(--ash-border)" }}>
            {s.label}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="Author" placeholder="Smith, John" value={f.author} onChange={set("author")} />
        <Field label="Year" placeholder="2024" value={f.year} onChange={set("year")} />
        <Field label="Title" placeholder="Title of the work" value={f.title} onChange={set("title")} full />
        <Field label="Publisher / site" placeholder="Publisher or website name" value={f.publisher} onChange={set("publisher")} />
        <Field label="URL (if online)" placeholder="https://…" value={f.url} onChange={set("url")} />
      </div>
      <div className="rounded-2xl p-4 mt-1" style={{ background: "rgba(14,159,142,0.06)", border: "1px solid var(--ash-border)" }}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs uppercase font-bold" style={{ color: "var(--ash-muted)", letterSpacing: "0.08em" }}>{style} reference</span>
          <button onClick={() => { navigator.clipboard.writeText(out); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
            className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--ash-border)" }}>{copied ? "Copied ✓" : "Copy"}</button>
        </div>
        <p className="text-[15px]" style={{ color: "var(--ash-text)" }}>{out}</p>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, full }: { label: string; value: string; onChange: (e: any) => void; placeholder?: string; full?: boolean }) {
  return (
    <label className={`text-sm ${full ? "sm:col-span-2" : ""}`}>
      <span style={{ color: "var(--ash-muted)" }}>{label}</span>
      <input value={value} onChange={onChange} placeholder={placeholder}
        className="w-full mt-1 p-2.5 rounded-xl border" style={{ borderColor: "var(--ash-border)" }} />
    </label>
  );
}
