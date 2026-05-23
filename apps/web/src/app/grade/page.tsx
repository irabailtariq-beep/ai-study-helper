"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import type { GradeResult } from "@ash/core";
import { VoiceInput } from "@/components/VoiceInput";
import { RichOutput, InlineRich } from "@/components/RichOutput";

export default function GradePage() {
  const profile = useProfile((s) => s.profile);
  const [question, setQuestion] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [rubric, setRubric] = useState("");
  const [marks, setMarks] = useState(10);
  const [result, setResult] = useState<GradeResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Mark my answer</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Paste an exam question and your answer. AI marks it in your board's style — score, band, strengths, improvements, model answer.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function grade() {
    setBusy(true); setErr(null); setResult(null);
    try {
      const r = await fetch("/api/grade", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ profile, question, studentAnswer, rubric: rubric || undefined, marks }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setResult(d);
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Mark my answer</h1>
      <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
        Paste (or dictate) an exam-style question and your answer. I'll mark it against your board's style.
      </p>

      <div className="glass-panel p-6 rounded-ash space-y-3">
        <label className="block text-sm font-semibold">Question</label>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="w-full p-3 rounded-ash border min-h-[70px]" placeholder="e.g. Explain photosynthesis (6 marks)" />

        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold">Your answer</label>
          <VoiceInput onText={(t) => setStudentAnswer((s) => s ? s + " " + t : t)} />
        </div>
        <textarea value={studentAnswer} onChange={(e) => setStudentAnswer(e.target.value)} className="w-full p-3 rounded-ash border min-h-[120px]" placeholder="Type your answer here…" />

        <label className="block text-sm font-semibold">Rubric (optional)</label>
        <textarea value={rubric} onChange={(e) => setRubric(e.target.value)} className="w-full p-3 rounded-ash border min-h-[70px]" placeholder="Paste the mark scheme if you have one." />

        <label className="text-sm" style={{ color: "var(--ash-muted)" }}>Max marks: <b>{marks}</b></label>
        <input type="range" min={1} max={20} value={marks} onChange={(e) => setMarks(Number(e.target.value))} className="w-full" />

        <button disabled={busy || !question || !studentAnswer} onClick={grade} className="px-6 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Marking…" : "Mark it"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </div>

      {result && (
        <section className="glass-panel p-6 rounded-ash mt-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">{result.score} / {result.max}</div>
            <div className="px-3 py-1 rounded-full text-white text-sm" style={{ background: "var(--ash-primary)" }}>Grade: {result.band}</div>
          </div>
          <RichOutput>{result.feedback}</RichOutput>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-sm mb-1">Strengths</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">{result.strengths?.map((s, i) => <li key={i}><InlineRich>{s}</InlineRich></li>)}</ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">To improve</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">{result.improvements?.map((s, i) => <li key={i}><InlineRich>{s}</InlineRich></li>)}</ul>
            </div>
          </div>
          {result.markScheme && (
            <details className="text-sm">
              <summary className="cursor-pointer font-semibold">Show a model answer</summary>
              <div className="mt-2"><RichOutput>{result.markScheme}</RichOutput></div>
            </details>
          )}
        </section>
      )}
    </main>
  );
}
