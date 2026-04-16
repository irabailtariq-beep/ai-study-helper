"use client";
import { useState } from "react";
import { useProfile } from "@/lib/profileStore";
import { fileToBase64, checkFile } from "@/lib/upload";
import type { ExplainResponse } from "@ash/core";
import Link from "next/link";

export default function ExplainPage() {
  const profile = useProfile((s) => s.profile);
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [interestContext, setInterestContext] = useState<string>("");
  const [answerLength, setAnswerLength] = useState<"short" | "long">("long");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ExplainResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!profile) {
    return (
      <main className="min-h-screen p-6 max-w-2xl mx-auto">
        <p>Please complete <Link href="/onboarding" className="underline">onboarding</Link> first.</p>
      </main>
    );
  }

  async function submit() {
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const payload: any = { profile, text: text || undefined };
      if (interestContext) payload.interestContext = interestContext;
      payload.answerLength = answerLength;
      if (file) {
        const msg = checkFile(file);
        if (msg) throw new Error(msg);
        const b64 = await fileToBase64(file);
        if (file.type === "application/pdf") payload.pdfBase64 = b64;
        else payload.imageBase64 = b64;
      }
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Request failed");
      setResult(await res.json());
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Explain something</h1>

      <div className="bg-ash-surface p-6 rounded-ash shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-4 items-start">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste a question, topic, or paragraph you want explained…"
            className="w-full p-3 rounded-ash border min-h-[100px]"
          />

          <div>
            <div className="text-sm font-semibold mb-1" style={{ color: "var(--ash-muted)" }}>
              Answer Length
            </div>
            <div className="flex rounded-ash border overflow-hidden">
              <button
                type="button"
                onClick={() => setAnswerLength("short")}
                className="flex-1 py-2 text-sm font-semibold"
                style={{
                  background: answerLength === "short" ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "transparent",
                  color: answerLength === "short" ? "white" : "var(--ash-text)",
                }}
              >
                Short
              </button>
              <button
                type="button"
                onClick={() => setAnswerLength("long")}
                className="flex-1 py-2 text-sm font-semibold"
                style={{
                  background: answerLength === "long" ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "transparent",
                  color: answerLength === "long" ? "white" : "var(--ash-text)",
                }}
              >
                Long
              </button>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--ash-muted)" }}>
            Make it relevant to your interests (optional)
          </label>
          <select
            value={interestContext}
            onChange={(e) => setInterestContext(e.target.value)}
            className="w-full p-3 rounded-ash border"
          >
            <option value="">No preference</option>
            <option value="cooking">Cooking</option>
            <option value="sports">Sports</option>
            <option value="gaming">Gaming</option>
            <option value="music">Music</option>
            <option value="movies and TV">Movies and TV</option>
            <option value="art and design">Art and design</option>
            <option value="animals">Animals</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--ash-muted)" }}>
            Or upload a photo / PDF (max 20 MB)
          </label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </div>
        <button
          disabled={loading || (!text && !file)}
          onClick={submit}
          className="px-6 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}
        >
          {loading ? "Thinking…" : "Explain it"}
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </div>

      {result && (
        <section className="bg-ash-surface p-6 rounded-ash shadow-sm mt-6 space-y-4">
          <div>
            <h2 className="font-semibold mb-2">Explanation</h2>
            <p className="whitespace-pre-wrap">{result.explanation}</p>
          </div>
          {result.keyPoints?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-1">Key points</h3>
              <ul className="list-disc pl-5">
                {result.keyPoints.map((k, i) => <li key={i}>{k}</li>)}
              </ul>
            </div>
          )}
          {result.followUps?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-1">Try next</h3>
              <ul className="list-disc pl-5">
                {result.followUps.map((k, i) => <li key={i}>{k}</li>)}
              </ul>
            </div>
          )}
          <p className="text-xs" style={{ color: "var(--ash-muted)" }}>{result.disclaimer}</p>
        </section>
      )}
    </main>
  );
}
