"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";
import { fileToBase64, checkFile } from "@/lib/upload";
import type { ConceptMap } from "@ash/core";

export default function ConceptMapPage() {
  const profile = useProfile((s) => s.profile);
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [map, setMap] = useState<ConceptMap | null>(null);

  if (!profile) return <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Concept map</h1>
      <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>Turn any syllabus or chapter into a topic graph. See what depends on what.</p>
      <p className="mt-6 text-sm">Complete <Link href="/onboarding" className="underline" style={{ color: "var(--ash-primary)" }}>onboarding</Link> first to use this tool — takes 30 seconds.</p>
    </main>;

  async function build() {
    setBusy(true); setErr(null); setMap(null);
    try {
      const payload: any = { profile, subject: subject || undefined, sourceText: text || undefined };
      if (file) {
        const msg = checkFile(file); if (msg) throw new Error(msg);
        const b64 = await fileToBase64(file);
        if (file.type === "application/pdf") payload.pdfBase64 = b64; else payload.imageBase64 = b64;
      }
      if (!payload.sourceText && !payload.pdfBase64 && !payload.imageBase64) throw new Error("Give me some material first.");
      const r = await fetch("/api/concept-map", {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setMap(d);
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="min-h-screen p-6 max-w-5xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Concept map</h1>
      <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
        Turn a syllabus or chapter into a topic graph — see what depends on what.
      </p>

      <div className="glass-panel p-6 rounded-ash space-y-3">
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject (optional)" className="w-full p-3 rounded-ash border" />
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste text or upload a file below" className="w-full p-3 rounded-ash border min-h-[100px]" />
        <input type="file" accept="image/*,application/pdf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        <p className="text-xs" style={{ color: "var(--ash-muted)" }}>
          Tip: photo / PDF quality must be clear and well-lit — blurry or dark pictures can't be read by the AI.
        </p>
        <button disabled={busy} onClick={build} className="px-6 py-3 rounded-ash text-white font-semibold disabled:opacity-40" style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Building map…" : "Build concept map"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
      </div>

      {map && <ConceptSVG map={map} />}
    </main>
  );
}

// Lightweight radial SVG layout (deterministic, no deps).
function ConceptSVG({ map }: { map: ConceptMap }) {
  const layout = useMemo(() => layoutMap(map), [map]);
  return (
    <section className="glass-panel p-6 rounded-ash mt-6 overflow-x-auto">
      <h2 className="font-semibold mb-3">{map.subject}</h2>
      <svg viewBox="0 0 900 600" style={{ width: "100%", minWidth: 700, height: 600 }}>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af" />
          </marker>
        </defs>
        {map.edges.map((e, i) => {
          const a = layout[e.from]; const b = layout[e.to];
          if (!a || !b) return null;
          return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#9ca3af" strokeWidth={1.2} markerEnd="url(#arrow)" />;
        })}
        {map.nodes.map((n) => {
          const p = layout[n.id]; if (!p) return null;
          const color = colorFor(n.group ?? "");
          return (
            <g key={n.id} transform={`translate(${p.x},${p.y})`}>
              <rect x={-65} y={-18} width={130} height={36} rx={10} fill={color.bg} stroke={color.border} />
              <text textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#111">
                {n.label.length > 18 ? n.label.slice(0, 17) + "…" : n.label}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="text-xs mt-3" style={{ color: "var(--ash-muted)" }}>
        Colors group related topics. Arrows show prerequisite / part-of relationships.
      </p>
    </section>
  );
}

function layoutMap(map: ConceptMap) {
  const groups = new Map<string, string[]>();
  for (const n of map.nodes) {
    const g = n.group ?? "_";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g)!.push(n.id);
  }
  const out: Record<string, { x: number; y: number }> = {};
  const cx = 450, cy = 300;
  const groupList = [...groups.entries()];
  groupList.forEach(([, ids], gi) => {
    const angle = (gi / groupList.length) * Math.PI * 2;
    const gx = cx + Math.cos(angle) * 220;
    const gy = cy + Math.sin(angle) * 180;
    ids.forEach((id, i) => {
      const a = (i / Math.max(1, ids.length)) * Math.PI * 2 + gi;
      const r = 50 + ids.length * 6;
      out[id] = { x: gx + Math.cos(a) * r, y: gy + Math.sin(a) * r };
    });
  });
  return out;
}

function colorFor(group: string) {
  const palette = [
    { bg: "#ede9fe", border: "#7c3aed" },
    { bg: "#dcfce7", border: "#16a34a" },
    { bg: "#fef9c3", border: "#ca8a04" },
    { bg: "#ffe4e6", border: "#e11d48" },
    { bg: "#cffafe", border: "#0891b2" },
    { bg: "#fed7aa", border: "#ea580c" },
  ];
  let h = 0; for (let i = 0; i < group.length; i++) h = (h * 31 + group.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}
