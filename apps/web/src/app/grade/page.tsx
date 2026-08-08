"use client";
import { useState } from "react";
import Link from "next/link";
import { useEffectiveProfile } from "@/lib/profileStore";
import { ProfileNudge } from "@/components/ProfileNudge";
import type { GradeResult } from "@ash/core";
import { VoiceInput } from "@/components/VoiceInput";
import { RichOutput, InlineRich } from "@/components/RichOutput";

export default function GradePage() {
  const profile = useEffectiveProfile();
  const [question, setQuestion] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [rubric, setRubric] = useState("");
  const [marks, setMarks] = useState(10);
  const [result, setResult] = useState<GradeResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);


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
      <ProfileNudge />
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Mark my answer</h1>
      <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
        Paste (or dictate) an exam-style question and your answer. I'll mark it against your board's style.
      </p>

      <div className="glass-panel p-6 rounded-ash space-y-3">
        <label className="block text-sm font-semibold" htmlFor="grade-question">Question</label>
        <textarea id="grade-question" value={question} onChange={(e) => setQuestion(e.target.value)} className="w-full p-3 rounded-ash border min-h-[70px]" placeholder="e.g. Explain photosynthesis (6 marks)" />

        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold" htmlFor="grade-your-answer">Your answer</label>
          <VoiceInput onText={(t) => setStudentAnswer((s) => s ? s + " " + t : t)} />
        </div>
        <textarea id="grade-your-answer" value={studentAnswer} onChange={(e) => setStudentAnswer(e.target.value)} className="w-full p-3 rounded-ash border min-h-[120px]" placeholder="Type your answer here…" />

        <label className="block text-sm font-semibold" htmlFor="grade-rubric-optional">Rubric (optional)</label>
        <textarea id="grade-rubric-optional" value={rubric} onChange={(e) => setRubric(e.target.value)} className="w-full p-3 rounded-ash border min-h-[70px]" placeholder="Paste the mark scheme if you have one." />

        <label className="text-sm" style={{ color: "var(--ash-muted)" }} htmlFor="grade-max-marks-b-marks-b">Max marks: <b>{marks}</b></label>
        <input id="grade-max-marks-b-marks-b" type="range" min={1} max={20} value={marks} onChange={(e) => setMarks(Number(e.target.value))} className="w-full" />

        <button disabled={busy || !question || !studentAnswer} onClick={grade} className="px-6 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
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
