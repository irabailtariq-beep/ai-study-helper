"use client";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";

export default function Home() {
  const profile = useProfile((s) => s.profile);

  return (
    <main>
      {/* ─────── HERO — cream + teal, trust-forward ─────── */}
      <section className="relative px-6 pt-14 pb-12 sm:pt-20 sm:pb-16 max-w-4xl mx-auto text-center">
        {/* Eyebrow with the keyword */}
        <p className="uppercase text-[11px] sm:text-xs font-bold mb-4"
           style={{ color: "var(--ash-primary)", letterSpacing: "0.26em" }}>
          Free AI study help · any subject · any grade
        </p>

        {/* Headline — ink with a readable deep-teal accent */}
        <h1
          className="font-extrabold leading-[1.04] tracking-tight mx-auto"
          style={{ fontSize: "clamp(38px, 7vw, 68px)", letterSpacing: "-0.025em", color: "var(--ash-text)", maxWidth: "16ch" }}
        >
          Stuck? Get it explained until it <span style={{ color: "var(--ash-primary)" }}>clicks.</span>
        </h1>

        {/* Sub-line — what it does, in plain words */}
        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "var(--ash-muted)" }}>
          Snap a photo, drop a PDF, or just ask. We explain it in plain words — in your board's style —
          then make quizzes and flashcards so it actually sticks.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={profile ? "/transform" : "/onboarding"}
            className="px-7 py-3.5 rounded-full text-white font-semibold text-base"
            style={{ background: "var(--ash-primary)", boxShadow: "var(--ash-shadow)" }}
          >
            {profile ? "Open my study helper →" : "Start free — no card"}
          </Link>
          <Link
            href="/tools"
            className="px-7 py-3.5 rounded-full border font-semibold text-base"
            style={{ borderColor: "var(--ash-border)", background: "rgba(255,255,255,0.7)", color: "var(--ash-text)" }}
          >
            See all tools
          </Link>
        </div>

        {/* Author trust line — E-E-A-T signal Google rewards */}
        <div className="mt-7 flex justify-center">
          <Link href="/about" className="inline-flex items-center gap-2 text-xs sm:text-sm px-4 py-2 rounded-full glass-panel" style={{ color: "var(--ash-muted)" }}>
            <span className="inline-flex items-center justify-center rounded-full text-white font-bold" style={{ width: 22, height: 22, fontSize: 11, background: "var(--ash-primary)" }}>R</span>
            Written &amp; checked by Rabail, a real student — not a content farm.
          </Link>
        </div>

        {/* trust strip — the five boards, honest chips */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center text-xs" style={{ color: "var(--ash-muted)" }}>
          <span className="glass-panel px-3 py-1.5 rounded-full">CBSE · GCSE · AP · Cambridge · WAEC</span>
          <span className="glass-panel px-3 py-1.5 rounded-full">🎓 Ages 13+</span>
          <span className="glass-panel px-3 py-1.5 rounded-full">🚫 No ads</span>
          <span className="glass-panel px-3 py-1.5 rounded-full">💸 Free forever</span>
        </div>
      </section>

      {/* ─────── HEADLINE FEATURE: Learn through interests ─────── */}
      <section className="px-6 max-w-5xl mx-auto">
        <Link
          href={profile ? "/transform" : "/onboarding"}
          className="block rounded-3xl p-7 sm:p-10 relative overflow-hidden hover:-translate-y-0.5 transition"
          style={{
            background: "linear-gradient(135deg, #0a6357 0%, #0e9f8e 100%)",
            color: "white",
            boxShadow: "var(--ash-shadow)",
          }}
        >
          <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-center">
            <div className="text-6xl sm:text-7xl">✨</div>
            <div>
              <div className="text-[11px] uppercase tracking-widest font-semibold opacity-90" style={{ letterSpacing: "0.3em" }}>
                AI · headline feature
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
                Learn anything through what you love
              </div>
              <p className="mt-2 text-base opacity-95 max-w-xl">
                Photosynthesis through Minecraft. Calculus through cricket. Electromagnetic waves through cooking.
                Pick what you love, drop in a topic — our AI rewrites the whole explanation through that lens.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                Try it now <span aria-hidden>→</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ─────── 6 CORE TOOLS ─────── */}
      <section className="px-6 mt-14 max-w-5xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>
          Six tools you'll use every day
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ToolTile href="/explain"      emoji="📖" title="Explain anything"   body="Photo, PDF, or paste — explained at your level." />
          <ToolTile href="/math-solver"  emoji="🧮" title="Step-by-step math"  body="Every line of working. Every formula named." />
          <ToolTile href="/quiz"         emoji="🧠" title="Quiz me"            body="Auto-generated practice from any material." />
          <ToolTile href="/flashcards"   emoji="🃏" title="Flashcards"         body="Spaced repetition. Built to actually stick." />
          <ToolTile href="/mock-exam"    emoji="⏱️" title="Mock exam"          body="Timed, in your board's style. Auto-graded." />
          <ToolTile href="/grade"        emoji="✍️" title="Mark my answer"     body="Graded like your board's examiner." />
        </div>
        <div className="text-center mt-6">
          <Link href="/tools" className="text-sm font-semibold underline" style={{ color: "var(--ash-primary)" }}>
            See all tools →
          </Link>
        </div>
      </section>

      {/* ─────── SUBJECTS BY CURRICULUM ─────── */}
      <section id="subjects" className="px-6 mt-20 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-3">Every subject, in your board's exact style</h2>
        <p className="text-center text-sm max-w-2xl mx-auto mb-9" style={{ color: "var(--ash-muted)" }}>
          We go deep on five curricula — and help with the subjects students actually take in each.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CURRICULA_SUBJECTS.map((c) => (
            <div key={c.name} className="glass-panel rounded-2xl p-6">
              <div className="flex items-baseline justify-between gap-2 mb-4">
                <h3 className="text-xl font-extrabold" style={{ color: "var(--ash-primary)" }}>{c.name}</h3>
                <span className="text-[11px] text-right" style={{ color: "var(--ash-muted)" }}>{c.tagline}</span>
              </div>
              <div className="space-y-2.5">
                {c.groups.map(([cat, subs]) => (
                  <div key={cat}>
                    <div className="uppercase text-[10px] font-bold mb-0.5" style={{ color: "var(--ash-muted)", letterSpacing: "0.08em" }}>{cat}</div>
                    <div className="text-sm leading-snug" style={{ color: "var(--ash-text)" }}>{subs}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────── HOW IT WORKS ─────── */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-10">How it works</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          <Step n={1} title="Tell us about you" body="Country, age, grade, curriculum. Takes 30 seconds." />
          <Step n={2} title="Drop in your work" body="Photo of a textbook, a PDF, or just type your question. Pick an interest if you want." />
          <Step n={3} title="Get a real answer" body="At your reading level. In your board's style. With practice + flashcards ready to go." />
        </div>
      </section>

      {/* ─────── THE FIVE CURRICULA WE FOCUS ON ─────── */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-3">Built for five major exam systems</h2>
        <p className="text-center text-sm max-w-xl mx-auto" style={{ color: "var(--ash-muted)" }}>
          We focus on five curricula and go deep on each — so every reply uses your board's exact terminology, units and exam style.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {[
            ["CBSE", "India"],
            ["GCSE", "United Kingdom"],
            ["AP", "United States"],
            ["Cambridge", "IGCSE & A-Level"],
            ["WAEC", "West Africa"],
          ].map(([b, region]) => (
            <span key={b} className="glass-panel rounded-2xl px-5 py-3 text-sm font-bold flex flex-col items-center min-w-[130px]">
              {b}
              <span className="text-[11px] font-normal mt-0.5" style={{ color: "var(--ash-muted)" }}>{region}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─────── 100% FREE ─────── */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-10 text-center glass-panel">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">100% free. Every tool. Forever.</h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "var(--ash-muted)" }}>
            No card, no trial, no paid plans, no upgrade prompts. Everything on Help in Study is free for every student —
            because good help shouldn't sit behind a paywall.
          </p>
        </div>
      </section>

      {/* ─────── FAQ ─────── */}
      <section className="px-6 mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-6">Common questions</h2>
        <div className="space-y-3">
          {FAQ.map((f, i) => (
            <details key={i} className="glass-panel rounded-2xl p-5">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ash-muted)" }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ─────── FINAL CTA ─────── */}
      <section className="px-6 mt-20 mb-16 max-w-3xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 text-center" style={{
          background: "linear-gradient(135deg, #0a6357, #0e9f8e)",
          color: "white",
          boxShadow: "var(--ash-shadow)",
        }}>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Ready when you are.</h2>
          <p className="mt-3 opacity-95">Start free in 30 seconds. No card. No ads.</p>
          <Link href="/onboarding" className="mt-6 inline-block px-7 py-3.5 rounded-full font-semibold"
            style={{ background: "white", color: "var(--ash-primary)" }}>
            Open my AI study helper →
          </Link>
        </div>
      </section>

      {/* Site footer is rendered globally via RootLayout. */}
    </main>
  );
}

function ToolTile({ href, emoji, title, body }: { href: string; emoji: string; title: string; body: string }) {
  return (
    <Link href={href} className="glass-panel rounded-2xl p-5 block transition" style={{ transition: "transform 200ms ease" }}>
      <div className="text-2xl mb-2">{emoji}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm mt-0.5" style={{ color: "var(--ash-muted)" }}>{body}</div>
    </Link>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="glass-panel rounded-2xl p-5">
      <div className="inline-flex items-center justify-center w-9 h-9 rounded-full font-bold text-white text-sm mb-3"
           style={{ background: "linear-gradient(135deg, var(--ash-primary), var(--ash-brand))" }}>{n}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>{body}</div>
    </div>
  );
}

// The five curricula and the subjects their students actually take (researched per board).
const CURRICULA_SUBJECTS: { name: string; tagline: string; groups: [string, string][] }[] = [
  {
    name: "CBSE", tagline: "India · Class 9–12",
    groups: [
      ["Maths", "Mathematics · Applied Mathematics"],
      ["Sciences", "Physics · Chemistry · Biology · Science"],
      ["English & Languages", "English · Hindi · Sanskrit"],
      ["Humanities", "Social Science · History · Political Science · Geography · Psychology"],
      ["Commerce", "Accountancy · Business Studies · Economics"],
      ["Computing", "Computer Science · Informatics Practices · AI"],
    ],
  },
  {
    name: "GCSE", tagline: "United Kingdom · Year 10–11",
    groups: [
      ["Maths", "Mathematics · Statistics"],
      ["Sciences", "Combined Science · Biology · Chemistry · Physics"],
      ["English & Languages", "English Language · English Literature · French · Spanish · German"],
      ["Humanities", "History · Geography · Religious Studies · Psychology · Sociology"],
      ["Business", "Business · Economics"],
      ["Computing", "Computer Science"],
    ],
  },
  {
    name: "AP", tagline: "United States · College Board",
    groups: [
      ["Maths", "Precalculus · Calculus AB · Calculus BC · Statistics"],
      ["Sciences", "Biology · Chemistry · Physics 1 · Environmental Science"],
      ["English & Languages", "English Language · English Literature · Spanish"],
      ["Humanities", "US History · World History · US Government · Psychology · Human Geography"],
      ["Economics", "Macroeconomics · Microeconomics"],
      ["Computing", "Computer Science Principles · Computer Science A"],
    ],
  },
  {
    name: "Cambridge", tagline: "International · IGCSE & A-Level",
    groups: [
      ["Maths", "Mathematics · Additional Mathematics · Further Mathematics"],
      ["Sciences", "Biology · Chemistry · Physics · Combined Science"],
      ["English & Languages", "English (First Language) · Literature in English · French"],
      ["Humanities", "History · Geography · Sociology · Psychology · Global Perspectives"],
      ["Commerce", "Business Studies · Accounting · Economics"],
      ["Computing", "Computer Science · ICT"],
    ],
  },
  {
    name: "WAEC", tagline: "West Africa · SS1–SS3",
    groups: [
      ["Maths", "Mathematics · Further Mathematics"],
      ["Sciences", "Physics · Chemistry · Biology · Agricultural Science"],
      ["English & Languages", "English Language · Literature-in-English · French"],
      ["Humanities", "Government · Geography · History · Christian/Islamic Studies"],
      ["Commerce", "Economics · Financial Accounting · Commerce"],
      ["Computing", "Computer Studies · Data Processing"],
    ],
  },
];

const FAQ = [
  { q: "What is Help in Study?", a: "Help in Study is a free AI study helper. You upload a photo, PDF, or just ask a question — our AI explains it in plain words at your level. It's built for five major exam systems: CBSE (India), GCSE (UK), AP (USA), Cambridge IGCSE & A-Level, and WAEC (West Africa)." },
  { q: "Is the AI study helper really free?", a: "Yes — completely. No card, no time limit, no hidden trial, and no paid plans. Every tool is free for every student, forever." },
  { q: "How is this different from ChatGPT?", a: "ChatGPT doesn't know your country, your board, or your grade — so its terminology and exam style are often wrong. Help in Study builds those four signals into every AI reply. Plus we generate quizzes, flashcards, mock exams, and examiner-style marking from any material — ChatGPT doesn't." },
  { q: "Will it help with math homework?", a: "Yes. The Math Solver shows every line of working, names the method (\"using the quadratic formula\"), flags common pitfalls, and gives you a way to check your answer. It works on photos, PDFs, or text." },
  { q: "Which subjects can I get help in study with?", a: "Every school subject — math, English, physics, chemistry, biology, economics, accounting, computer science, and more. Pick yours on the homepage to start." },
  { q: "Is my child's data safe?", a: "We collect only what's needed: profile, content you upload, usage counts. We use privacy-friendly, anonymized analytics, show no ads, and never sell student data. One-click data export and account delete from Settings." },
];
