"use client";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";

export default function Home() {
  const profile = useProfile((s) => s.profile);

  return (
    <main>
      {/* ─────── HERO — simpler, AI-forward, scannable ─────── */}
      <section className="relative px-6 pt-12 pb-12 sm:pt-20 sm:pb-16 max-w-5xl mx-auto text-center">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 30%, rgba(124,58,237,0.18), transparent 70%), radial-gradient(50% 40% at 70% 60%, rgba(34,211,238,0.14), transparent 70%)",
          }}
        />

        {/* Eyebrow with the AI keyword */}
        <p className="uppercase tracking-widest text-[11px] sm:text-xs font-semibold mb-4"
           style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>
          AI study helper · Free · Any subject · Any age
        </p>

        {/* Big easy headline */}
        <h1
          className="font-extrabold leading-[1.02] tracking-tight"
          style={{
            fontSize: "clamp(48px, 9vw, 100px)",
            backgroundImage: "linear-gradient(120deg, #4F46E5 0%, #7c3aed 45%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          Your free AI<br /> study helper
        </h1>

        {/* Sub-line states *what it does* in plain words */}
        <p className="mt-6 text-xl sm:text-2xl font-medium max-w-2xl mx-auto" style={{ color: "var(--ash-text)" }}>
          Help with math, English, science — any subject, any class.
        </p>
        <p className="mt-3 text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--ash-muted)" }}>
          Snap a photo, drop a PDF, or just ask. Our AI explains it in plain words —
          and rewrites the whole thing through what you love (cricket, cooking, gaming, K-pop…).
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={profile ? "/transform" : "/onboarding"}
            className="px-7 py-3.5 rounded-full text-white font-semibold text-base"
            style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)", boxShadow: "var(--ash-shadow)" }}
          >
            {profile ? "Open my study helper →" : "Start free — no card needed"}
          </Link>
          <Link
            href="/tools"
            className="px-7 py-3.5 rounded-full border font-semibold text-base"
            style={{ borderColor: "var(--ash-border)", background: "rgba(255,255,255,0.65)" }}
          >
            See all tools
          </Link>
        </div>

        {/* trust strip */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center text-xs" style={{ color: "var(--ash-muted)" }}>
          <span className="glass-panel px-3 py-1.5 rounded-full">🤖 Powered by AI</span>
          <span className="glass-panel px-3 py-1.5 rounded-full">🌍 80+ curricula</span>
          <span className="glass-panel px-3 py-1.5 rounded-full">🎓 Ages 6 to 25</span>
          <span className="glass-panel px-3 py-1.5 rounded-full">🔒 No tracking</span>
          <span className="glass-panel px-3 py-1.5 rounded-full">💸 Free forever</span>
        </div>
      </section>

      {/* ─────── HEADLINE FEATURE: Learn through interests ─────── */}
      <section className="px-6 max-w-5xl mx-auto">
        <Link
          href={profile ? "/transform" : "/onboarding"}
          className="block rounded-3xl p-7 sm:p-10 relative overflow-hidden hover:-translate-y-0.5 transition"
          style={{
            background: "linear-gradient(135deg, #4F46E5 0%, #7c3aed 50%, #06b6d4 100%)",
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
          <ToolTile href="/concept-map"  emoji="🗺️" title="Concept map"        body="Turn any topic into a visual map of ideas." />
          <ToolTile href="/diagnostic"   emoji="🎯" title="Diagnostic + plan"  body="10 questions → personalised 7-day plan." />
        </div>
        <div className="text-center mt-6">
          <Link href="/tools" className="text-sm font-semibold underline" style={{ color: "var(--ash-primary)" }}>
            See all 25+ tools (with what's coming next) →
          </Link>
        </div>
      </section>

      {/* ─────── HELP IN STUDY [SUBJECT] LINKS — SEO + UX ─────── */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-3">Help in study, by subject</h2>
        <p className="text-center text-sm max-w-xl mx-auto mb-8" style={{ color: "var(--ash-muted)" }}>
          Our AI study helper covers every school subject. Pick yours to start.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            ["math", "Math", "🧮"],
            ["english", "English", "📚"],
            ["calculus", "Calculus", "∫"],
            ["physics", "Physics", "🪐"],
            ["chemistry", "Chemistry", "⚗️"],
            ["biology", "Biology", "🧬"],
            ["history", "History", "📜"],
            ["geography", "Geography", "🌍"],
            ["computer-science", "Computer science", "💻"],
            ["programming", "Programming", "{ }"],
            ["accounting", "Accounting", "💼"],
            ["economics", "Economics", "📈"],
          ].map(([slug, label, ic]) => (
            <Link key={slug} href={`/help-in-study/${slug}`}
              className="glass-panel rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-medium">
              <span className="text-lg">{ic}</span>
              Help in study {label.toLowerCase()}
            </Link>
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

      {/* ─────── BUILT FOR YOUR BOARD ─────── */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-3">Works with your curriculum</h2>
        <p className="text-center text-sm max-w-xl mx-auto" style={{ color: "var(--ash-muted)" }}>
          Every reply uses your board's terminology, units and exam style. Switch curriculum any time.
        </p>
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {[
            "CBSE","ICSE","Cambridge IGCSE","Cambridge A Level","Edexcel","AQA","OCR","WJEC",
            "AP","SAT","Common Core","IB Diploma","IB MYP","IB PYP",
            "FBISE","Punjab Board","Sindh Board","KPK","AKU-EB",
            "VCE","HSC","NCEA","ENEM","WAEC","NECO","SQA Higher","Maharashtra","Tamil Nadu",
            "JEE","NEET",
          ].map((b) => (
            <span key={b} className="glass-panel rounded-full px-3 py-1.5 text-xs">{b}</span>
          ))}
          <span className="glass-panel rounded-full px-3 py-1.5 text-xs" style={{ color: "var(--ash-primary)" }}>+ 50 more</span>
        </div>
      </section>

      {/* ─────── PRICING TEASE ─────── */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-3">Free forever. Pro if you want more.</h2>
        <p className="text-center text-sm max-w-xl mx-auto mb-8" style={{ color: "var(--ash-muted)" }}>
          The free plan is genuinely free — no card, no time limit.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <PricingTease name="Free" price="$0" sub="forever" features={["AI explanations","Quiz + flashcards","Math solver","Diagnostic + plan","No card required"]} />
          <PricingTease name="Pro" price="$4.99" sub="per month" highlight features={["Everything in Free","No ads","Unlimited usage","Concept maps","Essay coach","Priority speed"]} />
          <PricingTease name="Family" price="$9.99" sub="per month" features={["Everything in Pro","5 student profiles","Parent dashboard","Per-child progress"]} />
        </div>
        <div className="text-center mt-6">
          <Link href="/pricing" className="text-sm font-semibold underline" style={{ color: "var(--ash-primary)" }}>
            Compare every feature →
          </Link>
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
          background: "linear-gradient(135deg, #4F46E5, #7c3aed, #06b6d4)",
          color: "white",
          boxShadow: "var(--ash-shadow)",
        }}>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Ready when you are.</h2>
          <p className="mt-3 opacity-95">Start free in 30 seconds. No card. No tracking.</p>
          <Link href="/onboarding" className="mt-6 inline-block px-7 py-3.5 rounded-full font-semibold"
            style={{ background: "white", color: "#4F46E5" }}>
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
           style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>{n}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>{body}</div>
    </div>
  );
}

function PricingTease({ name, price, sub, highlight, features }: { name: string; price: string; sub: string; highlight?: boolean; features: string[] }) {
  return (
    <div className="rounded-2xl p-6"
      style={{
        background: highlight ? "linear-gradient(135deg, #4F46E5 0%, #7c3aed 50%, #06b6d4 100%)" : "var(--ash-surface)",
        color: highlight ? "white" : "var(--ash-text)",
        border: highlight ? "none" : "1px solid var(--ash-border)",
        boxShadow: highlight ? "var(--ash-shadow)" : "var(--ash-shadow-soft)",
      }}>
      <div className="font-semibold">{name}</div>
      <div className="mt-2">
        <span className="text-3xl font-extrabold">{price}</span>
        <span className="text-sm opacity-80 ml-1">{sub}</span>
      </div>
      <ul className="mt-4 text-sm space-y-1.5">
        {features.map((f, i) => <li key={i}>✓ {f}</li>)}
      </ul>
    </div>
  );
}

const FAQ = [
  { q: "What is Help in Study?", a: "Help in Study is a free AI study helper. You upload a photo, PDF, or just ask a question — our AI explains it in plain words at your level. It works for any subject (math, English, science, history…) and any school curriculum (CBSE, IGCSE, IB, AP, GCSE, A-Level, and 80+ more)." },
  { q: "Is the AI study helper really free?", a: "Yes. The free plan has no card, no time limit, no hidden trial. You can use it forever. Pro ($4.99/mo) removes ads and limits; Family ($9.99/mo) adds parent dashboard + 5 student profiles. We earn from optional ads on free and from subscriptions." },
  { q: "How is this different from ChatGPT?", a: "ChatGPT doesn't know your country, your board, or your grade — so its terminology and exam style are often wrong. Help in Study builds those four signals into every AI reply. Plus we generate quizzes, flashcards, study plans, concept maps and parent recaps from any material — ChatGPT doesn't." },
  { q: "Will it help with math homework?", a: "Yes. The Math Solver shows every line of working, names the method (\"using the quadratic formula\"), flags common pitfalls, and gives you a way to check your answer. It works on photos, PDFs, or text." },
  { q: "Which subjects can I get help in study with?", a: "Every school subject — math, English, calculus, physics, chemistry, biology, history, geography, economics, accounting, computer science, programming, psychology, and more. Pick yours on the homepage to start." },
  { q: "Is my child's data safe?", a: "We collect only what's needed: profile, content you upload, usage counts. No third-party trackers. One-click data export and account delete from Settings. We never sell student data." },
];
