"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { fileToBase64, checkFile } from "@/lib/upload";
import type { Syllabus } from "@ash/core";

export default function SyllabusPage() {
  const profile = useProfile((s) => s.profile);
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [result, setResult] = useState<Syllabus | null>(null);
  const [library, setLibrary] = useState<Syllabus[]>([]);

  async function loadLibrary() {
    try {
      const r = await fetch("/api/syllabus");
      const d = await r.json();
      setLibrary(d.syllabi ?? []);
    } catch {}
  }
  useEffect(() => { loadLibrary(); }, []);

  if (!profile) {
    return (
      <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Digital syllabus extractor</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Upload an official syllabus and we turn it into a clean digital outline of units, topics, and estimated hours.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>
    );
  }

  async function extract() {
    setErr(null); setResult(null); setBusy(true);
    try {
      const payload: any = { profile, subject: subject || undefined, sourceText: text || undefined };
      if (file) {
        const msg = checkFile(file); if (msg) throw new Error(msg);
        const b64 = await fileToBase64(file);
        if (file.type === "application/pdf") payload.pdfBase64 = b64;
        else payload.imageBase64 = b64;
      }
      if (!payload.sourceText && !payload.pdfBase64 && !payload.imageBase64) {
        throw new Error("Add syllabus text or upload a file first.");
      }
      const r = await fetch("/api/syllabus", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setResult(d);
      await loadLibrary();
    } catch (e: any) {
      setErr(e.message);
    } finally { setBusy(false); }
  }

  async function remove(id?: string) {
    if (!id) return;
    if (!confirm("Delete this syllabus?")) return;
    await fetch(`/api/syllabus?id=${id}`, { method: "DELETE" });
    await loadLibrary();
  }

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Digital syllabus</h1>
      <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
        Upload an official syllabus (PDF / image / text). The AI extracts a clean digital outline — units,
        topics, and estimated hours. Signed in? It's saved to your library.
      </p>

      <div className="glass-panel p-6 rounded-ash space-y-4">
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject (e.g. Biology, Mathematics)"
          className="w-full p-3 rounded-ash border"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste syllabus text, or upload a file below…"
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
        <button
          disabled={busy}
          onClick={extract}
          className="px-6 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}
        >
          {busy ? "Extracting…" : "Extract syllabus"}
        </button>
        {err && <p className="text-sm text-red-600">{err}</p>}
      </div>

      {result && <SyllabusView s={result} />}

      {library.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Your library</h2>
          <div className="space-y-2">
            {library.map((s) => (
              <div key={s.id} className="glass-panel p-4 rounded-ash flex items-start justify-between">
                <div>
                  <div className="font-medium">{s.subject}</div>
                  <div className="text-xs" style={{ color: "var(--ash-muted)" }}>
                    {s.grade} · {s.units?.length ?? 0} units{s.year ? ` · ${s.year}` : ""}
                  </div>
                </div>
                <button onClick={() => remove(s.id)} className="text-xs text-red-600 underline">Delete</button>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function SyllabusView({ s }: { s: Syllabus }) {
  return (
    <section className="glass-panel p-6 rounded-ash mt-6">
      <h2 className="font-bold text-xl mb-2">{s.subject}{s.year ? ` (${s.year})` : ""}</h2>
      <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
        {s.grade} · {s.curriculum}
      </p>
      <ol className="list-decimal pl-5 space-y-3">
        {s.units.map((u, i) => (
          <li key={i}>
            <div className="font-semibold">{u.title}</div>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {u.topics.map((t, j) => (
                <li key={j}>
                  <span className="font-medium">{t.title}</span>
                  {t.estimatedHours ? <span className="text-xs ml-2" style={{ color: "var(--ash-muted)" }}>({t.estimatedHours}h)</span> : null}
                  {t.subtopics && t.subtopics.length > 0 && (
                    <div className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>{t.subtopics.join(" · ")}</div>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
