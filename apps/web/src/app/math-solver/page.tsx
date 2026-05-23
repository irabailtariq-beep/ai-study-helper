"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { fileToBase64, checkFile } from "@/lib/upload";
import type { MathSolution } from "@ash/core";
import { VoiceInput, SpeakButton } from "@/components/VoiceInput";
import { RichOutput } from "@/components/RichOutput";

export default function MathSolverPage() {
  const profile = useProfile((s) => s.profile);
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [sol, setSol] = useState<MathSolution | null>(null);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Step-by-step Math Solver</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Snap a math problem or paste it. Get every line of working, the named method, and common pitfalls flagged.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function solve() {
    setBusy(true); setErr(null); setSol(null);
    try {
      const payload: any = { action: "solve", profile, text: text || undefined };
      if (file) {
        const msg = checkFile(file); if (msg) throw new Error(msg);
        const b64 = await fileToBase64(file);
        if (file.type === "application/pdf") payload.pdfBase64 = b64; else payload.imageBase64 = b64;
      }
      if (!text && !file) throw new Error("Type a problem or take a photo.");
      const r = await fetch("/api/math", {
        method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setSol(d);
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="min-h-screen px-6 py-8 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <header className="mt-3 mb-6">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.25em" }}>Step-by-step math</p>
        <h1 className="font-extrabold tracking-tight mt-2" style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          backgroundImage: "linear-gradient(120deg, #4F46E5, #7c3aed, #06b6d4)",
          WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
        }}>
          Stuck on a math problem? Show me.
        </h1>
        <p className="text-sm mt-2" style={{ color: "var(--ash-muted)" }}>
          Type it, paste it, or snap a photo. I'll show every step, name the method, and flag common mistakes.
        </p>
      </header>

      <section className="glass-panel p-5 rounded-ash space-y-3">
        <div className="flex items-center justify-between mb-1">
          <label className="text-sm font-semibold" style={{ color: "var(--ash-muted)" }}>Problem</label>
          <VoiceInput onText={(t) => setText((s) => s ? s + " " + t : t)} />
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g. Solve 2x² − 3x − 5 = 0  ·  or paste any word problem"
          className="w-full p-3 rounded-ash border min-h-[110px] font-mono"
          style={{ borderColor: "var(--ash-border)" }}
        />
        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--ash-muted)" }}>Or upload a photo / PDF of the problem</label>
          <input type="file" accept="image/*,application/pdf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
          <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>
            Tip: photo / PDF quality must be clear and well-lit — blurry or dark pictures can't be read by the AI.
          </p>
        </div>
        <button disabled={busy || (!text && !file)} onClick={solve}
          className="w-full sm:w-auto px-7 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Solving…" : "Show me step by step"}
        </button>
        {err && <p className="text-sm text-red-600">{err}</p>}
      </section>

      {sol && (
        <section className="glass-panel p-6 rounded-ash mt-6 space-y-4">
          <div>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--ash-muted)", letterSpacing: "0.2em" }}>Method</div>
            <div className="font-semibold">{sol.method}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--ash-muted)", letterSpacing: "0.2em" }}>The problem</div>
            <p className="text-sm">{sol.restated}</p>
          </div>
          <ol className="space-y-3">
            {sol.steps.map((s, i) => (
              <li key={i} className="border-l-4 pl-4 py-1" style={{ borderColor: "var(--ash-primary)" }}>
                <div className="font-semibold text-sm">{s.title}</div>
                <div className="text-[15px] mt-1"><RichOutput>{s.math}</RichOutput></div>
                {s.note && <div className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>💡 {s.note}</div>}
              </li>
            ))}
          </ol>
          <div className="rounded-ash p-4" style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.1), rgba(34,211,238,0.1))" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--ash-primary)", letterSpacing: "0.2em" }}>Final answer</div>
            <div className="text-xl font-bold mt-1"><RichOutput>{sol.answer}</RichOutput></div>
            <div className="mt-2"><SpeakButton text={`The answer is ${sol.answer}. ${sol.method}.`} /></div>
          </div>
          {sol.pitfalls?.length > 0 && (
            <div>
              <div className="text-sm font-semibold mb-1">Common pitfalls</div>
              <ul className="list-disc pl-5 text-sm space-y-1">{sol.pitfalls.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
          )}
          {sol.checks?.length > 0 && (
            <div>
              <div className="text-sm font-semibold mb-1">Check your work</div>
              <ul className="list-disc pl-5 text-sm space-y-1">{sol.checks.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
