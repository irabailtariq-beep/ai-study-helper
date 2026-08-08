"use client";
import { useState } from "react";
import Link from "next/link";
import { useEffectiveProfile } from "@/lib/profileStore";
import { ProfileNudge } from "@/components/ProfileNudge";
import { fileToBase64, checkFile } from "@/lib/upload";
import { explainWith } from "@/lib/tools/clientHelpers";
import { RichOutput } from "@/components/RichOutput";

export default function LectureSummaryPage() {
  const profile = useEffectiveProfile();
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [out, setOut] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);


  async function run() {
    setBusy(true); setErr(null); setOut(null);
    try {
      const payload: any = {
        profile,
        text: text ? `Summarise this lecture / notes / transcript. Output:\n• 1-paragraph TL;DR\n• 5-8 bullet key points\n• 3 likely exam questions\n• Glossary of any technical term used\n\n---\n${text}` : undefined,
        answerLength: "long",
      };
      if (file) {
        const msg = checkFile(file); if (msg) throw new Error(msg);
        const b64 = await fileToBase64(file);
        if (file.type === "application/pdf") payload.pdfBase64 = b64; else payload.imageBase64 = b64;
        if (!payload.text) {
          payload.text = "Summarise this lecture/notes file. Output: TL;DR paragraph, 5-8 key bullets, 3 likely exam questions, glossary.";
        }
      }
      if (!text && !file) throw new Error("Paste a transcript or upload a file.");
      const data = await explainWith(payload);
      setOut([data.explanation, ...(data.keyPoints?.map(k => `- ${k}`) ?? [])].join("\n\n"));
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <ProfileNudge />
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Lecture summary</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Paste a YouTube transcript, lecture notes, or upload the slide PDF. We turn it into a TL;DR, key bullets,
          three likely exam questions, and a glossary.
        </p>
      </header>

      <section className="glass-panel p-5 rounded-2xl space-y-3">
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste lecture transcript / notes…"
          className="w-full p-3 rounded-2xl border min-h-[160px]" style={{ borderColor: "var(--ash-border)" }} />
        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--ash-muted)" }} htmlFor="lecture-summary-or-upload-pdf-slides-photo">Or upload PDF / slides photo</label>
          <input id="lecture-summary-or-upload-pdf-slides-photo" type="file" accept="image/*,application/pdf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
          <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>
            Tip: photo / PDF quality must be clear and well-lit — blurry or dark pictures can't be read by the AI.
          </p>
        </div>
        <button disabled={busy || (!text.trim() && !file)} onClick={run}
          className="px-6 py-3 rounded-full text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
          {busy ? "Summarising…" : "Summarise"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </section>

      {out && (
        <section className="glass-panel p-6 rounded-2xl mt-6">
          <h2 className="font-semibold mb-3">Summary</h2>
          <div className="text-[15px] leading-relaxed"><RichOutput>{out}</RichOutput></div>
        </section>
      )}
    </main>
  );
}
