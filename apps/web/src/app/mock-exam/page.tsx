"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import type { Quiz, QuizItem } from "@ash/core";

export default function MockExamPage() {
  const profile = useProfile((s) => s.profile);
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState(10);
  const [minutes, setMinutes] = useState(20);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!quiz || submitted) return;
    if (secondsLeft <= 0) { setSubmitted(true); return; }
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [quiz, submitted, secondsLeft]);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Mock exam simulator</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Pick a topic and a time. We generate a fresh exam, time you, and auto-grade your work.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function start() {
    setBusy(true); setErr(null); setSubmitted(false); setQuiz(null); setAnswers({});
    try {
      const r = await fetch("/api/quiz", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({
          profile,
          sourceText: `Generate a mock-exam-style set of ${count} questions on "${topic || "the curriculum overall"}". Mix MCQ, true/false, short answer and fill in the blank. Difficulty should match a real exam, not a homework drill.`,
          count,
        }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setQuiz(d); setSecondsLeft(minutes * 60);
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  function score(): { right: number; total: number } {
    if (!quiz) return { right: 0, total: 0 };
    let right = 0;
    quiz.items.forEach((item: QuizItem, i: number) => {
      const a = answers[i];
      if (item.type === "mcq" && a === item.answerIndex) right++;
      else if (item.type === "tf" && a === item.answer) right++;
      else if ((item.type === "short" || item.type === "fill") && typeof a === "string" &&
        a.trim().toLowerCase() === item.answer.trim().toLowerCase()) right++;
    });
    return { right, total: quiz.items.length };
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Mock exam simulator</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Pick a topic and a time. We generate a fresh exam, time you, then auto-grade your work.
        </p>
      </header>

      {!quiz && (
        <section className="glass-panel p-5 rounded-2xl space-y-3">
          <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Topic (e.g. trigonometry, photosynthesis, the cold war)"
            className="w-full p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }} />
          <div className="grid grid-cols-2 gap-3">
            <label className="text-sm">Questions
              <input type="number" min={5} max={30} value={count} onChange={(e) => setCount(Number(e.target.value))}
                className="w-full mt-1 p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }} />
            </label>
            <label className="text-sm">Time (minutes)
              <input type="number" min={5} max={180} value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-full mt-1 p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }} />
            </label>
          </div>
          <button disabled={busy} onClick={start}
            className="px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
            style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
            {busy ? "Generating exam…" : "Start exam"}
          </button>
          {err && <p className="text-red-600 text-sm">{err}</p>}
        </section>
      )}

      {quiz && !submitted && (
        <>
          <div className="sticky top-16 z-30 mb-4 flex items-center justify-between glass-panel rounded-2xl px-4 py-2">
            <div className="text-sm">{quiz.title}</div>
            <div className="font-mono text-lg" style={{ color: secondsLeft < 60 ? "#dc2626" : "var(--ash-primary)" }}>{mm}:{ss}</div>
          </div>
          <section className="glass-panel p-5 rounded-2xl space-y-5">
            {quiz.items.map((item, i) => <QuizQ key={i} item={item} index={i} answers={answers} setAnswers={setAnswers} />)}
            <button onClick={() => setSubmitted(true)} className="px-6 py-3 rounded-full text-white font-semibold"
              style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
              Submit exam
            </button>
          </section>
        </>
      )}

      {quiz && submitted && (
        <section className="glass-panel p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">{score().right} / {score().total}</h2>
          <p className="text-sm mb-5" style={{ color: "var(--ash-muted)" }}>Tap any question to see the correct answer + why.</p>
          {quiz.items.map((item, i) => <ReviewQ key={i} item={item} answers={answers} index={i} />)}
          <button onClick={() => { setQuiz(null); setSubmitted(false); }} className="mt-4 px-5 py-2 rounded-full border">New exam</button>
        </section>
      )}
    </main>
  );
}

function QuizQ({ item, index, answers, setAnswers }: any) {
  const set = (v: any) => setAnswers((a: any) => ({ ...a, [index]: v }));
  return (
    <div className="border-t pt-4" style={{ borderColor: "var(--ash-border)" }}>
      <div className="font-medium mb-2">{index + 1}. {item.q}</div>
      {item.type === "mcq" && item.options.map((opt: string, j: number) => (
        <label key={j} className="block p-2 rounded border cursor-pointer mb-1"
          style={{ borderColor: answers[index] === j ? "var(--ash-primary)" : "#e5e7eb" }}>
          <input type="radio" name={`q${index}`} checked={answers[index] === j} onChange={() => set(j)} className="mr-2" />
          {opt}
        </label>
      ))}
      {item.type === "tf" && [true, false].map((v) => (
        <label key={String(v)} className="mr-4">
          <input type="radio" name={`q${index}`} checked={answers[index] === v} onChange={() => set(v)} className="mr-1" />
          {v ? "True" : "False"}
        </label>
      ))}
      {(item.type === "short" || item.type === "fill") && (
        <input value={answers[index] ?? ""} onChange={(e) => set(e.target.value)} placeholder="Your answer"
          className="w-full p-2 rounded border" style={{ borderColor: "var(--ash-border)" }} />
      )}
    </div>
  );
}

function ReviewQ({ item, answers, index }: any) {
  let mine = "";
  let correct = "";
  let ok = false;
  if (item.type === "mcq") {
    mine = item.options[answers[index]] ?? "(blank)";
    correct = item.options[item.answerIndex];
    ok = answers[index] === item.answerIndex;
  } else if (item.type === "tf") {
    mine = answers[index] === undefined ? "(blank)" : answers[index] ? "True" : "False";
    correct = item.answer ? "True" : "False";
    ok = answers[index] === item.answer;
  } else {
    mine = (answers[index] ?? "(blank)").toString();
    correct = item.answer;
    ok = mine.trim().toLowerCase() === correct.trim().toLowerCase();
  }
  return (
    <details className="border-t pt-3 mt-3" style={{ borderColor: "var(--ash-border)" }}>
      <summary className="cursor-pointer">
        <span style={{ color: ok ? "#16a34a" : "#dc2626" }}>{ok ? "✓" : "✗"}</span> {index + 1}. {item.q}
      </summary>
      <div className="mt-2 text-sm space-y-1">
        <div>Your answer: <b>{mine}</b></div>
        <div>Correct: <b>{correct}</b></div>
        {item.why && <div style={{ color: "var(--ash-muted)" }}>{item.why}</div>}
        {item.rubric && <div style={{ color: "var(--ash-muted)" }}>Rubric: {item.rubric}</div>}
      </div>
    </details>
  );
}
