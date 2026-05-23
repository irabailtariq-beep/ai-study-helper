"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { fileToBase64, checkFile } from "@/lib/upload";
import { explainWith } from "@/lib/tools/clientHelpers";

export default function WhiteboardPage() {
  const profile = useProfile((s) => s.profile);
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [notes, setNotes] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Whiteboard photo to neat notes</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Snap the whiteboard before it gets erased. We turn the photo into clean, organised study notes you can revise from.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function run() {
    if (!file) return;
    setBusy(true); setErr(null); setNotes(null);
    try {
      const msg = checkFile(file); if (msg) throw new Error(msg);
      const b64 = await fileToBase64(file);
      const payload: any = {
        profile,
        text: "This is a photo of a whiteboard from class. Read everything on it carefully. Write neat, organised study notes in markdown — heading, key points, formulas, examples — exactly as a student would later revise from. Fix any obvious teacher shorthand. If a diagram is shown, describe it in words.",
        answerLength: "long",
      };
      if (file.type === "application/pdf") payload.pdfBase64 = b64; else payload.imageBase64 = b64;
      const data = await explainWith(payload);
      setNotes([data.explanation, ...(data.keyPoints?.map(k => `• ${k}`) ?? [])].join("\n\n"));
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Whiteboard to neat notes</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Snap the whiteboard before it gets erased. We turn the photo into clean, organised study notes you can revise from.
        </p>
      </header>

      <section className="glass-panel p-5 rounded-2xl space-y-3">
        <input type="file" accept="image/*,application/pdf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        <p className="text-xs" style={{ color: "var(--ash-muted)" }}>
          Tip: photo / PDF quality must be clear and well-lit — blurry or dark pictures can't be read by the AI.
        </p>
        {file && <p className="text-xs" style={{ color: "var(--ash-muted)" }}>Selected: {file.name}</p>}
        <button disabled={busy || !file} onClick={run}
          className="px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Reading…" : "Convert to notes"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </section>

      {notes && (
        <section className="glass-panel p-6 rounded-2xl mt-6">
          <h2 className="font-semibold mb-3">Your notes</h2>
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed">{notes}</p>
        </section>
      )}
    </main>
  );
}
