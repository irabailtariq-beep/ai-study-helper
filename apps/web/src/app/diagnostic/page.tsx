"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import type { Quiz, StudyPlan } from "@ash/core";

export default function DiagnosticPage() {
  const profile = useProfile((s) => s.profile);
  const [subject, setSubject] = useState("");
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Diagnostic + 7-day study plan</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Take a 10-question diagnostic. We find your weak topics and build a personalised 7-day plan with daily tasks.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function start() {
    setBusy(true); setErr(null); setPlan(null);
    try {
      const r = await fetch("/api/diagnostic", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "quiz", profile, subject: subject || undefined, count: 10 }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setQuiz(d); setAnswers({});
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  async function submit() {
    if (!quiz) return;
    setBusy(true); setErr(null);
    try {
      const results = quiz.items.map((it: any, i) => ({
        question: it.q,
        studentAnswer: it.type === "mcq" ? it.options[answers[i] ?? -1] ?? "(no answer)" : "(skipped)",
        correctAnswer: it.type === "mcq" ? it.options[it.answerIndex] : "",
        topic: it.why?.slice(0, 80) ?? "",
      }));
      const r = await fetch("/api/diagnostic", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "plan", profile, subject: subject || undefined, days: 7, results }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setPlan(d);
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Diagnostic quiz → study plan</h1>
      <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
        10 quick questions. The AI figures out your weak spots and gives you a 7-day plan.
      </p>

      {!quiz && (
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "var(--ash-muted)" }}>
              Which subject? Pick one — or "mixed" for an all-subject diagnostic.
            </label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setSubject("")}
                className="px-3 py-1.5 rounded-full text-sm"
                style={{
                  background: !subject ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "rgba(255,255,255,0.7)",
                  color: !subject ? "white" : "var(--ash-text)",
                  border: "1px solid var(--ash-border)",
                }}>
                🎲 Mixed
              </button>
              {((profile.subjects && profile.subjects.length > 0)
                ? profile.subjects
                : ["Mathematics","English","Physics","Chemistry","Biology","History","Geography","Computer Science"]
              ).map((s) => (
                <button key={s} onClick={() => setSubject(s)}
                  className="px-3 py-1.5 rounded-full text-sm"
                  style={{
                    background: subject === s ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "rgba(255,255,255,0.7)",
                    color: subject === s ? "white" : "var(--ash-text)",
                    border: "1px solid var(--ash-border)",
                  }}>
                  {s}
                </button>
              ))}
            </div>
            {profile.subjects && profile.subjects.length === 0 && (
              <p className="text-xs mt-2" style={{ color: "var(--ash-muted)" }}>
                Tip: <Link href="/onboarding" className="underline">add your subjects to your profile</Link> so we can personalise this list.
              </p>
            )}
          </div>
          <button disabled={busy} onClick={start} className="px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
            style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
            {busy ? "Generating quiz…" : `Start ${subject || "mixed"} diagnostic`}
          </button>
          {err && (
            <div className="text-red-600 text-sm space-y-1">
              <div><b>Couldn't start:</b> {err}</div>
              <div className="text-xs">If you see a 5xx error, our AI provider hit a hiccup. Wait 10 seconds and tap the button again.</div>
            </div>
          )}
        </div>
      )}

      {quiz && !plan && (
        <div className="glass-panel p-6 rounded-ash space-y-4">
          <h2 className="font-semibold">{quiz.title}</h2>
          {quiz.items.map((item: any, i) => (
            <div key={i} className="border-t pt-3">
              <div className="font-medium mb-2">{i + 1}. {item.q}</div>
              {item.type === "mcq" && item.options.map((opt: string, j: number) => (
                <label key={j} className="block p-2 rounded border cursor-pointer"
                  style={{ borderColor: answers[i] === j ? "var(--ash-primary)" : "#e5e7eb", marginBottom: 4 }}>
                  <input type="radio" name={`q${i}`} checked={answers[i] === j} onChange={() => setAnswers({ ...answers, [i]: j })} className="mr-2" />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button disabled={busy} onClick={submit} className="px-6 py-3 rounded-ash text-white font-semibold" style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
            {busy ? "Building plan…" : "Build my study plan"}
          </button>
          {err && <p className="text-red-600 text-sm">{err}</p>}
        </div>
      )}

      {plan && (
        <section className="glass-panel p-6 rounded-ash space-y-4">
          <div className="text-lg">{plan.summary}</div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-1">Weak areas</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {plan.weakAreas?.map((w, i) => <li key={i}><b>{w.topic}</b>: {w.evidence}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Strong areas</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {plan.strongAreas?.map((w, i) => <li key={i}><b>{w.topic}</b>: {w.evidence}</li>)}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Your 7-day plan</h3>
            <ol className="space-y-3">
              {plan.days.map((d) => (
                <li key={d.day} className="p-3 rounded-ash border">
                  <div className="font-medium">Day {d.day} · {d.focus} <span className="text-xs ml-2" style={{ color: "var(--ash-muted)" }}>({d.minutes} min)</span></div>
                  <ul className="list-disc pl-5 mt-1 text-sm">
                    {d.tasks.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </main>
  );
}
