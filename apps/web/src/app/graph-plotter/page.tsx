"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

const PRESETS = [
  { label: "x²", expr: "x*x" },
  { label: "sin x", expr: "Math.sin(x)" },
  { label: "cos x", expr: "Math.cos(x)" },
  { label: "1/x", expr: "1/x" },
  { label: "log x", expr: "Math.log(x)" },
  { label: "√x", expr: "Math.sqrt(x)" },
  { label: "2ˣ", expr: "Math.pow(2,x)" },
  { label: "Quadratic", expr: "x*x - 3*x + 2" },
];

export default function GraphPlotter() {
  const [expr, expr2, setExprX] = useStrings();
  const [xmin, setXmin] = useState(-10);
  const [xmax, setXmax] = useState(10);
  const [ymin, setYmin] = useState(-10);
  const [ymax, setYmax] = useState(10);

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Graph plotter</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Plot any function of x. Use Math.* (e.g. <code>Math.sin(x)</code>, <code>Math.pow(x, 2)</code>).
        </p>
      </header>

      <section className="glass-panel p-5 rounded-2xl space-y-3">
        <input value={expr} onChange={(e) => setExprX(e.target.value, 0)} placeholder="f(x) = …"
          className="w-full p-3 rounded-2xl border font-mono text-sm" style={{ borderColor: "var(--ash-border)" }} />
        <input value={expr2} onChange={(e) => setExprX(e.target.value, 1)} placeholder="g(x) = … (optional second curve)"
          className="w-full p-3 rounded-2xl border font-mono text-sm" style={{ borderColor: "var(--ash-border)" }} />

        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button key={p.label} onClick={() => setExprX(p.expr, 0)}
              className="px-3 py-1 rounded-full text-xs"
              style={{ border: "1px solid var(--ash-border)" }}>{p.label}</button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
          <label>x min<input type="number" value={xmin} onChange={(e) => setXmin(Number(e.target.value))} className="w-full p-2 rounded-2xl border mt-1" /></label>
          <label>x max<input type="number" value={xmax} onChange={(e) => setXmax(Number(e.target.value))} className="w-full p-2 rounded-2xl border mt-1" /></label>
          <label>y min<input type="number" value={ymin} onChange={(e) => setYmin(Number(e.target.value))} className="w-full p-2 rounded-2xl border mt-1" /></label>
          <label>y max<input type="number" value={ymax} onChange={(e) => setYmax(Number(e.target.value))} className="w-full p-2 rounded-2xl border mt-1" /></label>
        </div>
      </section>

      <Plot expr={expr} expr2={expr2} xmin={xmin} xmax={xmax} ymin={ymin} ymax={ymax} />
    </main>
  );
}

function useStrings(): [string, string, (v: string, i: 0 | 1) => void] {
  const [a, setA] = useState("x*x - 3*x + 2");
  const [b, setB] = useState("");
  return [a, b, (v, i) => (i === 0 ? setA(v) : setB(v))];
}

function compile(expr: string): ((x: number) => number) | null {
  if (!expr.trim()) return null;
  const allowed = /^[\s\d.+\-*/()%,xMath\.a-zA-Z]+$/;
  if (!allowed.test(expr)) return null;
  try {
    // eslint-disable-next-line no-new-func
    return new Function("x", `"use strict"; return (${expr});`) as any;
  } catch { return null; }
}

function Plot({ expr, expr2, xmin, xmax, ymin, ymax }: { expr: string; expr2: string; xmin: number; xmax: number; ymin: number; ymax: number; }) {
  const W = 600, H = 400;
  const fns = [compile(expr), compile(expr2)].filter(Boolean) as ((x: number) => number)[];
  const colors = ["#4F46E5", "#06b6d4"];
  const xs = useMemo(() => {
    const arr: number[] = [];
    const steps = W;
    for (let i = 0; i <= steps; i++) arr.push(xmin + ((xmax - xmin) * i) / steps);
    return arr;
  }, [xmin, xmax]);
  const sx = (x: number) => ((x - xmin) / (xmax - xmin)) * W;
  const sy = (y: number) => H - ((y - ymin) / (ymax - ymin)) * H;
  const paths = fns.map((fn) => {
    let d = "";
    let pen = false;
    for (const x of xs) {
      let y: number;
      try { y = fn(x); } catch { y = NaN; }
      if (!isFinite(y) || y < ymin || y > ymax) { pen = false; continue; }
      d += `${pen ? "L" : "M"}${sx(x).toFixed(1)} ${sy(y).toFixed(1)} `;
      pen = true;
    }
    return d;
  });
  return (
    <section className="glass-panel rounded-2xl p-3 mt-4 overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", background: "white", borderRadius: 12 }}>
        {/* axes */}
        <line x1={0} y1={sy(0)} x2={W} y2={sy(0)} stroke="#cbd5e1" />
        <line x1={sx(0)} y1={0} x2={sx(0)} y2={H} stroke="#cbd5e1" />
        {/* grid */}
        {Array.from({ length: 11 }, (_, i) => xmin + ((xmax - xmin) * i) / 10).map((g, i) => (
          <g key={`gx${i}`}>
            <line x1={sx(g)} y1={0} x2={sx(g)} y2={H} stroke="#f1f5f9" />
            <text x={sx(g) + 2} y={sy(0) + 12} fontSize="10" fill="#94a3b8">{g.toFixed(0)}</text>
          </g>
        ))}
        {Array.from({ length: 11 }, (_, i) => ymin + ((ymax - ymin) * i) / 10).map((g, i) => (
          <g key={`gy${i}`}>
            <line x1={0} y1={sy(g)} x2={W} y2={sy(g)} stroke="#f1f5f9" />
            <text x={sx(0) + 4} y={sy(g) - 2} fontSize="10" fill="#94a3b8">{g.toFixed(0)}</text>
          </g>
        ))}
        {/* curves */}
        {paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={colors[i]} strokeWidth={2} />
        ))}
      </svg>
      <p className="text-xs mt-2" style={{ color: "var(--ash-muted)" }}>
        Allowed: numbers, operators, x, and Math.* functions. No external variables.
      </p>
    </section>
  );
}
