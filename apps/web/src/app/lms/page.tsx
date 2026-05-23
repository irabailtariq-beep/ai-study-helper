"use client";
import { useState } from "react";
import Link from "next/link";

type Provider = "canvas" | "moodle";

export default function LMSPage() {
  const [provider, setProvider] = useState<Provider>("canvas");
  const [baseUrl, setBaseUrl] = useState("");
  const [token, setToken] = useState("");
  const [data, setData] = useState<any>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setBusy(true); setErr(null); setData(null);
    try {
      const r = await fetch(`/api/lms/${provider}`, {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ baseUrl, token }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      setData(d);
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Canvas / Moodle</h1>
      <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
        Paste your institution's URL and a personal access token to pull your courses + assignments.
      </p>

      <div className="glass-panel p-6 rounded-ash space-y-3">
        <div className="flex gap-2">
          {(["canvas", "moodle"] as Provider[]).map((p) => (
            <button key={p} onClick={() => setProvider(p)}
              className="px-4 py-2 rounded-ash text-sm font-semibold"
              style={{
                background: provider === p ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "transparent",
                color: provider === p ? "white" : "var(--ash-text)",
                border: "1px solid var(--ash-border)",
              }}>
              {p === "canvas" ? "Canvas" : "Moodle"}
            </button>
          ))}
        </div>
        <input value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} placeholder={provider === "canvas" ? "https://canvas.instructure.com" : "https://moodle.school.edu"} className="w-full p-3 rounded-ash border" />
        <input value={token} onChange={(e) => setToken(e.target.value)} type="password" placeholder="Personal access token" className="w-full p-3 rounded-ash border" />
        <button disabled={busy || !baseUrl || !token} onClick={load}
          className="px-6 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          {busy ? "Loading…" : "Connect"}
        </button>
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <p className="text-xs" style={{ color: "var(--ash-muted)" }}>
          We never store your token on the server — it's sent per-request from your browser.
        </p>
      </div>

      {data && (
        <>
          {data.summary && (
            <section className="glass-panel p-6 rounded-ash mt-4">
              <h2 className="font-semibold mb-2">Study coach</h2>
              <p className="whitespace-pre-wrap text-sm">{data.summary}</p>
            </section>
          )}
          <section className="space-y-3 mt-4">
            {(data.courses ?? []).map((c: any) => (
              <div key={c.course.id} className="glass-panel p-4 rounded-ash">
                <div className="font-semibold mb-2">{c.course.name}</div>
                <ul className="text-sm space-y-1">
                  {(c.assignments ?? []).slice(0, 20).map((a: any) => (
                    <li key={a.id} className="flex justify-between gap-2">
                      <span>{a.name}</span>
                      <span className="text-xs" style={{ color: "var(--ash-muted)" }}>
                        {a.due_at ? new Date(a.due_at).toLocaleDateString() :
                         a.duedate ? new Date(a.duedate * 1000).toLocaleDateString() : "—"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </>
      )}
    </main>
  );
}
