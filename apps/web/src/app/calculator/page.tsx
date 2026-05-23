"use client";
import { useState } from "react";
import Link from "next/link";

const CALCS = [
  { id: "percentage", label: "Percentage" },
  { id: "scientific", label: "Scientific" },
  { id: "fraction",   label: "Fraction" },
  { id: "average",    label: "Average / Mean" },
  { id: "gpa",        label: "GPA" },
  { id: "ratio",      label: "Ratio" },
] as const;
type Tab = typeof CALCS[number]["id"];

export default function CalculatorPage() {
  const [tab, setTab] = useState<Tab>("percentage");
  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Link href="/tools" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All tools</Link>
      <header className="mt-3 mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Calculators</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Quick everyday calculators for homework: percentages, scientific functions, fractions, averages, GPA, ratios.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-4">
        {CALCS.map((c) => (
          <button key={c.id} onClick={() => setTab(c.id)}
            className="px-3 py-1.5 rounded-full text-sm font-semibold"
            style={{
              background: tab === c.id ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "rgba(255,255,255,0.7)",
              color: tab === c.id ? "white" : "var(--ash-text)",
              border: "1px solid var(--ash-border)",
            }}>
            {c.label}
          </button>
        ))}
      </div>

      <section className="glass-panel p-5 rounded-2xl">
        {tab === "percentage" && <Percentage />}
        {tab === "scientific" && <Scientific />}
        {tab === "fraction"   && <Fraction />}
        {tab === "average"    && <Average />}
        {tab === "gpa"        && <GPA />}
        {tab === "ratio"      && <Ratio />}
      </section>
    </main>
  );
}

function Field({ label, value, onChange, type = "number" }: any) {
  return (
    <label className="block text-sm">
      {label}
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }} />
    </label>
  );
}
function Result({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 p-4 rounded-2xl text-lg font-semibold" style={{ background: "rgba(124,58,237,0.08)" }}>{children}</div>;
}

function Percentage() {
  const [a, setA] = useState("25");
  const [b, setB] = useState("200");
  const num = (s: string) => Number(s) || 0;
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">What is X% of Y?</h2>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Percent (%)" value={a} onChange={setA} />
        <Field label="of value" value={b} onChange={setB} />
      </div>
      <Result>{a}% of {b} = <b>{(num(a) * num(b) / 100).toLocaleString()}</b></Result>
      <h2 className="font-semibold mt-6">X is what % of Y?</h2>
      <Result>{a} ÷ {b} × 100 = <b>{num(b) ? ((num(a) / num(b)) * 100).toFixed(2) : 0}%</b></Result>
      <h2 className="font-semibold mt-6">% increase / decrease (Y → A)</h2>
      <Result>
        {num(b)
          ? ((num(a) - num(b)) / num(b) * 100).toFixed(2) + "%" + ` (${num(a) >= num(b) ? "increase" : "decrease"})`
          : "—"}
      </Result>
    </div>
  );
}

function Scientific() {
  const [expr, setExpr] = useState("Math.sin(Math.PI/4) + Math.log(10)");
  const [out, setOut] = useState<string>("");
  function run() {
    try {
      // Restricted eval — only Math.* and numbers/operators allowed.
      const allowed = /^[\s\d.+\-*/()%,xMath\.a-zPIE]+$/;
      if (!allowed.test(expr)) throw new Error("Only numbers, operators, and Math.* allowed");
      // eslint-disable-next-line no-new-func
      const v = new Function(`"use strict"; return (${expr});`)();
      setOut(typeof v === "number" ? String(v) : JSON.stringify(v));
    } catch (e: any) { setOut("Error: " + e.message); }
  }
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Type a math expression (Math.* allowed)</h2>
      <input value={expr} onChange={(e) => setExpr(e.target.value)}
        className="w-full p-3 rounded-2xl border font-mono text-sm" style={{ borderColor: "var(--ash-border)" }} />
      <button onClick={run} className="px-5 py-2 rounded-full text-white font-semibold"
        style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>Compute</button>
      <Result>{out || "—"}</Result>
      <p className="text-xs" style={{ color: "var(--ash-muted)" }}>
        Examples: <code>Math.sqrt(225)</code>, <code>Math.pow(2,10)</code>, <code>Math.log10(1000)</code>, <code>Math.sin(Math.PI/3)</code>
      </p>
    </div>
  );
}

function Fraction() {
  const [a, setA] = useState("3"), [b, setB] = useState("4"), [c, setC] = useState("1"), [d, setD] = useState("2");
  const num = (s: string) => Number(s) || 0;
  function gcd(x: number, y: number): number { return y === 0 ? Math.abs(x) : gcd(y, x % y); }
  function simplify(n: number, dn: number): string {
    if (!dn) return "—"; const g = gcd(n, dn); return `${n / g}/${dn / g}`;
  }
  const ad = num(a) * num(d), bc = num(b) * num(c), bd = num(b) * num(d);
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Fraction operations</h2>
      <div className="grid grid-cols-4 gap-2">
        <Field label="a" value={a} onChange={setA} />
        <Field label="b" value={b} onChange={setB} />
        <Field label="c" value={c} onChange={setC} />
        <Field label="d" value={d} onChange={setD} />
      </div>
      <Result>a/b + c/d = {simplify(ad + bc, bd)} ≈ <b>{bd ? ((ad + bc) / bd).toFixed(4) : "—"}</b></Result>
      <Result>a/b − c/d = {simplify(ad - bc, bd)} ≈ <b>{bd ? ((ad - bc) / bd).toFixed(4) : "—"}</b></Result>
      <Result>a/b × c/d = {simplify(num(a) * num(c), num(b) * num(d))}</Result>
      <Result>a/b ÷ c/d = {simplify(ad, bc)}</Result>
    </div>
  );
}

function Average() {
  const [list, setList] = useState("8, 7, 9, 10, 6, 7, 8");
  const arr = list.split(/[,\s]+/).map(Number).filter((n) => !isNaN(n));
  const sum = arr.reduce((a, b) => a + b, 0);
  const mean = arr.length ? sum / arr.length : 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const median = sorted.length
    ? sorted.length % 2 ? sorted[(sorted.length - 1) / 2]
      : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
    : 0;
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Average / mean / median</h2>
      <textarea value={list} onChange={(e) => setList(e.target.value)} className="w-full p-3 rounded-2xl border min-h-[80px] font-mono"
        style={{ borderColor: "var(--ash-border)" }} placeholder="Comma- or space-separated numbers" />
      <Result>Count: <b>{arr.length}</b> · Sum: <b>{sum}</b></Result>
      <Result>Mean: <b>{mean.toFixed(3)}</b> · Median: <b>{median}</b></Result>
      <Result>Min: <b>{arr.length ? Math.min(...arr) : "—"}</b> · Max: <b>{arr.length ? Math.max(...arr) : "—"}</b></Result>
    </div>
  );
}

const GPA_TABLE: Record<string, number> = {
  "A+":4.0,"A":4.0,"A-":3.7,"B+":3.3,"B":3.0,"B-":2.7,"C+":2.3,"C":2.0,"C-":1.7,"D+":1.3,"D":1.0,"F":0.0,
};
function GPA() {
  const [rows, setRows] = useState([{ grade: "A", credits: "3" }]);
  const total = rows.reduce((acc, r) => {
    const pts = GPA_TABLE[r.grade] ?? 0;
    const c = Number(r.credits) || 0;
    return { sum: acc.sum + pts * c, credits: acc.credits + c };
  }, { sum: 0, credits: 0 });
  const gpa = total.credits ? total.sum / total.credits : 0;
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">GPA calculator (US 4.0 scale)</h2>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2">
          <select value={r.grade} onChange={(e) => setRows(rows.map((x, j) => i === j ? { ...x, grade: e.target.value } : x))}
            className="p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }}>
            {Object.keys(GPA_TABLE).map((g) => <option key={g} value={g}>{g} ({GPA_TABLE[g]})</option>)}
          </select>
          <input type="number" placeholder="Credits" value={r.credits}
            onChange={(e) => setRows(rows.map((x, j) => i === j ? { ...x, credits: e.target.value } : x))}
            className="p-3 rounded-2xl border" style={{ borderColor: "var(--ash-border)" }} />
          <button onClick={() => setRows(rows.filter((_, j) => j !== i))} className="px-3 rounded-2xl border" aria-label="Remove">×</button>
        </div>
      ))}
      <button onClick={() => setRows([...rows, { grade: "A", credits: "3" }])} className="px-4 py-2 rounded-full border">+ Add course</button>
      <Result>GPA: <b>{gpa.toFixed(2)}</b> · Credits: <b>{total.credits}</b></Result>
    </div>
  );
}

function Ratio() {
  const [a, setA] = useState("3"), [b, setB] = useState("4"), [c, setC] = useState("9");
  const num = (s: string) => Number(s) || 0;
  const x = num(b) ? (num(a) * num(c)) / num(b) : 0;
  function gcd(x: number, y: number): number { return y === 0 ? Math.abs(x) : gcd(y, x % y); }
  const g = gcd(num(a), num(b));
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Ratio · proportion solver</h2>
      <p className="text-sm" style={{ color: "var(--ash-muted)" }}>If <b>{a} : {b} = {c} : ?</b>, find the missing value.</p>
      <div className="grid grid-cols-3 gap-2">
        <Field label="a" value={a} onChange={setA} />
        <Field label="b" value={b} onChange={setB} />
        <Field label="c" value={c} onChange={setC} />
      </div>
      <Result>Missing value (d): <b>{x.toFixed(3)}</b></Result>
      <Result>Simplified ratio of a:b → <b>{g ? `${num(a) / g} : ${num(b) / g}` : "—"}</b></Result>
    </div>
  );
}
