"use client";
import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { fileToBase64, checkFile } from "@/lib/upload";

type Paper = { title: string; sections: { name: string; marks: number; items: { q: string; marks: number }[] }[] };

export default function PastPapersPage() {
  const profile = useProfile((s) => s.profile);
  const [file, setFile] = useState<File | null>(null);
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [papers, setPapers] = useState<Paper[]>([]);
  const [error, setError] = useState<string | null>(null);

  if (!profile) {
    return (
      <main className="min-h-screen p-6 max-w-2xl mx-auto">
        <p>Please complete <Link href="/onboarding" className="underline">onboarding</Link> first.</p>
      </main>
    );
  }

  async function generate() {
    if (!file) return setError("Upload a past paper PDF or image.");
    setError(null);
    setPapers([]);
    setLoading(true);
    try {
      const msg = checkFile(file);
      if (msg) throw new Error(msg);
      const b64 = await fileToBase64(file);
      const payload: any = { profile, count };
      if (file.type === "application/pdf") payload.pdfBase64 = b64;
      else payload.imageBase64 = b64;
      const res = await fetch("/api/past-papers", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Request failed");
      setPapers(data.papers ?? []);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Past paper practice</h1>

      <div className="bg-ash-surface p-6 rounded-ash shadow-sm space-y-4">
        <p className="text-sm" style={{ color: "var(--ash-muted)" }}>
          Upload a real past paper. I'll generate similar practice papers with different questions but the same structure and difficulty.
        </p>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <div>
          <label className="text-sm" style={{ color: "var(--ash-muted)" }}>
            Number of practice papers: <b>{count}</b>
          </label>
          <input
            type="range"
            min={1}
            max={5}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <button
          disabled={loading || !file}
          onClick={generate}
          className="px-6 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, #7c3aed, var(--ash-accent))" }}
        >
          {loading ? "Generating…" : "Generate practice papers"}
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </div>

      {papers.map((paper, pi) => (
        <section key={pi} className="bg-ash-surface p-6 rounded-ash shadow-sm mt-6">
          <h2 className="font-bold text-xl mb-4">{paper.title}</h2>
          {paper.sections?.map((sec, si) => (
            <div key={si} className="mb-4">
              <h3 className="font-semibold">{sec.name} ({sec.marks} marks)</h3>
              <ol className="list-decimal pl-6 space-y-1">
                {sec.items?.map((it, i) => (
                  <li key={i}>
                    {it.q} <span className="text-xs" style={{ color: "var(--ash-muted)" }}>[{it.marks}]</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
