"use client";
import { useState } from "react";
import Link from "next/link";
import { useEffectiveProfile } from "@/lib/profileStore";
import { ProfileNudge } from "@/components/ProfileNudge";
import { fileToBase64, checkFile } from "@/lib/upload";
import type { ExplainResponse, TransformIntensity } from "@ash/core";
import { SpeakButton, VoiceInput } from "@/components/VoiceInput";
import { RichOutput, InlineRich } from "@/components/RichOutput";

const INTEREST_PRESETS = [
  { id: "cooking",    emoji: "🍳", label: "Cooking" },
  { id: "football",   emoji: "⚽", label: "Football / Soccer" },
  { id: "cricket",    emoji: "🏏", label: "Cricket" },
  { id: "basketball", emoji: "🏀", label: "Basketball" },
  { id: "gaming",     emoji: "🎮", label: "Video games" },
  { id: "music",      emoji: "🎵", label: "Music" },
  { id: "movies",     emoji: "🎬", label: "Movies and TV" },
  { id: "anime",      emoji: "📺", label: "Anime / Manga" },
  { id: "cars",       emoji: "🚗", label: "Cars" },
  { id: "space",      emoji: "🚀", label: "Space / astronomy" },
  { id: "animals",    emoji: "🐶", label: "Animals" },
  { id: "fashion",    emoji: "👗", label: "Fashion" },
  { id: "art",        emoji: "🎨", label: "Art and design" },
  { id: "minecraft",  emoji: "⛏️", label: "Minecraft" },
  { id: "harry-potter", emoji: "⚡", label: "Harry Potter" },
  { id: "marvel",     emoji: "🦸", label: "Marvel / superheroes" },
  { id: "skateboarding", emoji: "🛹", label: "Skateboarding" },
  { id: "dance",      emoji: "💃", label: "Dance" },
  { id: "robots",     emoji: "🤖", label: "Robotics" },
  { id: "k-pop",      emoji: "🎤", label: "K-pop" },
];

const INTENSITY_LABELS: Record<TransformIntensity, { name: string; sub: string }> = {
  off:   { name: "Off",          sub: "Plain neutral explanation" },
  light: { name: "Light touch",  sub: "1-2 themed examples" },
  heavy: { name: "Heavily themed", sub: "Most examples come from your world" },
  full:  { name: "Full reframe", sub: "Whole explanation set inside that world" },
};

export default function TransformPage() {
  const profile = useEffectiveProfile();

  const [interest, setInterest] = useState<string>("cooking");
  const [customInterest, setCustomInterest] = useState("");
  const [intensity, setIntensity] = useState<TransformIntensity>("heavy");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ExplainResponse | null>(null);
  const [error, setError] = useState<string | null>(null);


  const finalInterest = customInterest.trim() || INTEREST_PRESETS.find((p) => p.id === interest)?.label || interest;

  async function submit() {
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const payload: any = {
        profile,
        text: text || undefined,
        interestContext: finalInterest,
        transformIntensity: intensity,
        answerLength: "long",
      };
      if (file) {
        const msg = checkFile(file);
        if (msg) throw new Error(msg);
        const b64 = await fileToBase64(file);
        if (file.type === "application/pdf") payload.pdfBase64 = b64;
        else payload.imageBase64 = b64;
      }
      if (!text && !file) throw new Error("Add a question, paste some text, or upload a file.");
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
      <ProfileNudge />
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-3 mb-6">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.25em" }}>
          Make it about my interests
        </p>
        <h1
          className="font-extrabold leading-tight tracking-tight mt-2"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            backgroundImage: "linear-gradient(120deg, #0a6357 0%, #0e9f8e 50%, #14b8a6 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Learn anything through what you love
        </h1>
        <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--ash-muted)" }}>
          Pick an interest, drop in a topic, photo or PDF. Your tutor rewrites the explanation through that lens —
          electromagnetic waves <i>through cooking</i>, photosynthesis <i>through Minecraft</i>, trigonometry <i>through cricket</i>.
        </p>
      </header>

      {/* INTEREST PICKER */}
      <section className="glass-panel p-5 rounded-ash mb-4">
        <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--ash-muted)" }}>Pick your interest</h2>
        <div className="flex flex-wrap gap-2">
          {INTEREST_PRESETS.map((p) => {
            const active = !customInterest && interest === p.id;
            return (
              <button
                key={p.id}
                onClick={() => { setInterest(p.id); setCustomInterest(""); }}
                className="px-3 py-2 rounded-full text-sm transition"
                style={{
                  background: active ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "rgba(255,255,255,0.65)",
                  color: active ? "white" : "var(--ash-text)",
                  border: "1px solid var(--ash-border)",
                }}
              >
                <span className="mr-1">{p.emoji}</span>{p.label}
              </button>
            );
          })}
        </div>
        <input
          value={customInterest}
          onChange={(e) => setCustomInterest(e.target.value)}
          placeholder="Or type your own — e.g. Formula 1, knitting, chess, Pokémon…"
          className="w-full mt-3 p-3 rounded-ash border bg-white"
          style={{ borderColor: "var(--ash-border)" }}
        />
        {customInterest && (
          <p className="text-xs mt-2" style={{ color: "var(--ash-primary)" }}>
            Using custom interest: <b>{customInterest}</b>
          </p>
        )}
      </section>

      {/* INTENSITY SLIDER */}
      <section className="glass-panel p-5 rounded-ash mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold" style={{ color: "var(--ash-muted)" }}>How strong should the theme be?</h2>
          <span className="text-xs" style={{ color: "var(--ash-primary)" }}>
            {INTENSITY_LABELS[intensity].name}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {(["off", "light", "heavy", "full"] as TransformIntensity[]).map((v) => {
            const active = intensity === v;
            return (
              <button
                key={v}
                onClick={() => setIntensity(v)}
                className="p-3 rounded-ash text-center text-sm transition"
                style={{
                  background: active ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "rgba(255,255,255,0.65)",
                  color: active ? "white" : "var(--ash-text)",
                  border: "1px solid var(--ash-border)",
                }}
              >
                <div className="font-semibold">{INTENSITY_LABELS[v].name}</div>
                <div className="text-[11px] mt-0.5" style={{ opacity: active ? 0.9 : 0.7 }}>{INTENSITY_LABELS[v].sub}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* INPUT */}
      <section className="glass-panel p-5 rounded-ash mb-4 space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-semibold" style={{ color: "var(--ash-muted)" }}>What do you want to understand?</label>
            <VoiceInput onText={(t) => setText((s) => s ? s + " " + t : t)} />
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. How do electromagnetic waves work? Or paste a paragraph…"
            className="w-full p-3 rounded-ash border min-h-[100px]"
            style={{ borderColor: "var(--ash-border)" }}
          />
        </div>
        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--ash-muted)" }}>
            Or upload a photo / PDF (max 20 MB) — Vercel free-tier capped to ~4 MB
          </label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>
            Tip: photo / PDF quality must be clear and well-lit — blurry or dark pictures can't be read by the AI.
          </p>
        </div>
        <button
          disabled={loading || (!text && !file)}
          onClick={submit}
          className="w-full sm:w-auto px-7 py-3 rounded-ash text-white font-semibold disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}
        >
          {loading ? "Transforming…" : `Explain it through ${finalInterest.toLowerCase()}`}
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </section>

      {/* RESULT */}
      {result && (
        <section className="glass-panel p-6 rounded-ash mt-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Your themed explanation</h2>
            <SpeakButton text={result.explanation} />
          </div>
          <RichOutput>{result.explanation}</RichOutput>
          {result.keyPoints?.length > 0 && (
            <div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--ash-muted)" }}>Key points</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {result.keyPoints.map((k, i) => <li key={i}><InlineRich>{k}</InlineRich></li>)}
              </ul>
            </div>
          )}
          {result.followUps?.length > 0 && (
            <div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--ash-muted)" }}>Try next</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {result.followUps.map((k, i) => <li key={i}><InlineRich>{k}</InlineRich></li>)}
              </ul>
            </div>
          )}
          <p className="text-xs" style={{ color: "var(--ash-muted)" }}>{result.disclaimer}</p>
        </section>
      )}
    </main>
  );
}
