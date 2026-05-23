"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { explainWith } from "@/lib/tools/clientHelpers";

export default function ProblemVariantsPage() {
  const profile = useProfile((s) => s.profile);
  const [problem, setProblem] = useState("");
  const [count, setCount] = useState(10);
  const [busy, setBusy] = useState(false);
  const [out, setOut] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Problem variants generator</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Paste one problem you struggled with. Get 10 fresh variants that test the same skill — same idea, different numbers.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function run() {
    if (!profile) return;
    setBusy(true); setErr(null); setOut(null);
    try {
      const data = await explainWith({
        profile,
        text: `Below is a math (or science) problem. Generate ${count} VARIANTS that test the same skill but with different numbers / names / scenarios. After each variant, on a new line, give the answer in brackets like [Answer: ...]. Number the variants 1 to ${count}.\n\n---\n${problem}`,
        answerLength: "long",
      });
      setOut([data.explanation, ...(data.keyPoints?.map(k => `• ${k}`) ?? [])].join("\n\n"));
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Problem variants generator</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Paste one problem you struggled with. Get 10 fresh variants that test the same skill — same idea, different numbers.
        </p>
      </header>

      <section className="glass-panel p-5 rounded-2xl space-y-3">
        <textarea value={problem} onChange={(e) => setProblem(e.target.value)} placeholder="Paste the problem you got wrong / want to drill…"
          className="w-full p-3 rounded-2xl border min-h-[120px]" style={{ borderColor: "var(--ash-border)" }} />
        <label className="text-sm" style={{ color: "var(--ash-muted)" }}>How many variants? <b>{count}</b></label>
        <input type="range" min={3} max={20} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full" />
        <button disabled={busy || !problem.trim()} onClick={run}
          className="px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Generating…" : "Make variants"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </section>

      {out && (
        <section className="glass-panel p-6 rounded-2xl mt-6">
          <h2 className="font-semibold mb-3">Practice set</h2>
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed">{out}</p>
        </section>
      )}
    </main>
  );
}
