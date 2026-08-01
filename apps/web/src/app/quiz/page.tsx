"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { fileToBase64, checkFile } from "@/lib/upload";
import type { Quiz, QuizItem } from "@ash/core";
import { InlineRich } from "@/components/RichOutput";

export default function QuizPage() {
  const profile = useProfile((s) => s.profile);
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [count, setCount] = useState(8);
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [revealed, setRevealed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!profile) {
    return (
      <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Quiz me — auto practice</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Generate quizzes from any material: MCQ, short answer, true/false, fill-in-the-blank — auto-graded with explanations.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>
    );
  }

  async function generate() {
    setError(null);
    setQuiz(null);
    setAnswers({});
    setRevealed(false);
    setLoading(true);
    try {
      const payload: any = { profile, sourceText: text || undefined, count };
      if (file) {
        const msg = checkFile(file);
        if (msg) throw new Error(msg);
        const b64 = await fileToBase64(file);
        if (file.type === "application/pdf") payload.pdfBase64 = b64;
        else payload.imageBase64 = b64;
      }
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Request failed");
      setQuiz(await res.json());
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Quiz me</h1>

      {!quiz && (
        <div className="glass-panel p-6 rounded-ash space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste study material, or upload a file below."
            className="w-full p-3 rounded-ash border min-h-[100px]"
          />
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          <p className="text-xs" style={{ color: "var(--ash-muted)" }}>
            Tip: photo / PDF quality must be clear and well-lit — blurry or dark pictures can't be read by the AI.
          </p>
          <div>
            <label className="text-sm" style={{ color: "var(--ash-muted)" }}>
              Number of questions: <b>{count}</b>
            </label>
            <input
              type="range"
              min={4}
              max={20}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <button
            disabled={loading || (!text && !file)}
            onClick={generate}
            className="px-6 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
            style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}
          >
            {loading ? "Generating…" : "Generate quiz"}
          </button>
          {error && <div className="text-red-600 text-sm">{error}</div>}
        </div>
      )}

      {quiz && (
        <section className="glass-panel p-6 rounded-ash space-y-6">
          <h2 className="font-semibold text-xl">{quiz.title}</h2>
          {quiz.items.map((item, i) => (
            <div key={i} className="border-t pt-4">
              <div className="font-medium mb-2">{i + 1}. <InlineRich>{item.q}</InlineRich></div>
              <QuizItemUI item={item} index={i} answers={answers} setAnswers={setAnswers} revealed={revealed} />
            </div>
          ))}
          <div className="flex gap-3">
            <button
              onClick={() => setRevealed(true)}
              className="px-5 py-2 rounded-ash text-white"
              style={{ background: "var(--ash-primary)" }}
            >
              Show answers
            </button>
            <button
              onClick={() => { setQuiz(null); setAnswers({}); setRevealed(false); }}
              className="px-5 py-2 rounded-ash border"
            >
              New quiz
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

function QuizItemUI({ item, index, answers, setAnswers, revealed }: {
  item: QuizItem; index: number; answers: Record<number, any>; setAnswers: (a: any) => void; revealed: boolean;
}) {
  const set = (v: any) => setAnswers((a: any) => ({ ...a, [index]: v }));
  if (item.type === "mcq") {
    return (
      <div className="space-y-1">
        {item.options.map((opt, j) => (
          <label key={j} className="block cursor-pointer p-2 rounded border"
            style={{
              borderColor: revealed && j === item.answerIndex ? "#16a34a" : "#e5e7eb",
              background: answers[index] === j ? "var(--ash-bg)" : "transparent",
            }}>
            <input
              type="radio"
              name={`q${index}`}
              checked={answers[index] === j}
              onChange={() => set(j)}
              className="mr-2"
            />
            <InlineRich>{opt}</InlineRich>
          </label>
        ))}
        {revealed && <p className="text-sm mt-2" style={{ color: "var(--ash-muted)" }}><b>Why:</b> <InlineRich>{item.why}</InlineRich></p>}
      </div>
    );
  }
  if (item.type === "tf") {
    return (
      <div>
        {[true, false].map((v) => (
          <label key={String(v)} className="mr-4">
            <input type="radio" name={`q${index}`} checked={answers[index] === v} onChange={() => set(v)} className="mr-1" />
            {v ? "True" : "False"}
          </label>
        ))}
        {revealed && (
          <p className="text-sm mt-2" style={{ color: "var(--ash-muted)" }}>
            <b>Answer:</b> {item.answer ? "True" : "False"} — <InlineRich>{item.why}</InlineRich>
          </p>
        )}
      </div>
    );
  }
  if (item.type === "short" || item.type === "fill") {
    return (
      <div>
        <label className="block text-xs mb-1" style={{ color: "var(--ash-muted)" }}>
          Type your answer below {item.type === "fill" ? "(fill in the blank)" : "(short answer)"}
        </label>
        <textarea
          value={answers[index] ?? ""}
          onChange={(e) => set(e.target.value)}
          placeholder="Type your answer here…"
          rows={item.type === "fill" ? 1 : 2}
          className="w-full p-3 rounded-2xl border"
          style={{ borderColor: "var(--ash-border)", background: "white", fontSize: "15px" }}
        />
        {revealed && (
          <p className="text-sm mt-2" style={{ color: "var(--ash-muted)" }}>
            <b>Answer:</b> <InlineRich>{`${item.answer}${item.type === "short" && item.rubric ? ` — Rubric: ${item.rubric}` : item.type === "fill" && item.why ? ` — ${item.why}` : ""}`}</InlineRich>
          </p>
        )}
      </div>
    );
  }
  return null;
}
