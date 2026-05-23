import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "All AI study tools — explain, math solver, quiz, flashcards & more",
  description:
    "Every Help in Study tool in one place. AI math solver, photo homework helper, quiz generator, flashcards, study planner, calculator hub, graph plotter, and 20+ more.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "All AI study tools — Help in Study",
    description: "Every AI study tool in one place. 20+ live now, more on the way.",
    url: `${SITE.url}/tools`,
    images: [{
      url: `/api/og?title=${encodeURIComponent("All study tools")}&subtitle=${encodeURIComponent("20+ live, free for students worldwide")}&tag=${encodeURIComponent("Tools catalog")}`,
      width: 1200, height: 630,
    }],
  },
};

type Tool = {
  href?: string; emoji: string; title: string; body: string; status: "live" | "soon";
  category: "Core AI" | "Math" | "Practice" | "Memory" | "Planning" | "School" | "Languages" | "Accessibility";
};

const TOOLS: Tool[] = [
  // ─────── Core AI ───────
  { status: "live", category: "Core AI",     href: "/explain",         emoji: "📖", title: "Explain anything",        body: "Photo, PDF or paste — explained at your level, in your board's style." },
  { status: "live", category: "Core AI",     href: "/transform",       emoji: "✨", title: "Make it about my interest", body: "Reframe any topic through cricket, cooking, gaming, K-pop, anything." },
  { status: "live", category: "Core AI",     href: "/chat",            emoji: "💬", title: "AI chat tutor",            body: "Conversational tutor with memory + voice input/output." },
  { status: "live", category: "Core AI",     href: "/whiteboard",      emoji: "📋", title: "Whiteboard → notes",       body: "Snap your teacher's whiteboard → typed, organised study notes." },

  // ─────── Math ───────
  { status: "live", category: "Math",        href: "/math-solver",     emoji: "🧮", title: "Step-by-step math solver", body: "Every line of working. Method named. Pitfalls flagged." },
  { status: "live", category: "Math",        href: "/formula-sheet",   emoji: "📐", title: "Formula sheet builder",    body: "Focused, board-aware list with worked examples." },
  { status: "live", category: "Math",        href: "/problem-variants",emoji: "🔁", title: "Problem variants",         body: "Same idea, different numbers — 10 fresh practice problems from any source." },
  { status: "live", category: "Math",        href: "/graph-plotter",   emoji: "📈", title: "Graph plotter",            body: "Plot any function instantly. Compare two curves on one axis." },
  { status: "live", category: "Math",        href: "/calculator",      emoji: "🧷", title: "Calculator hub",           body: "Percentage, fractions, average, GPA, ratio, and a scientific tab." },

  // ─────── Practice ───────
  { status: "live", category: "Practice",    href: "/quiz",            emoji: "🧠", title: "Quiz me",                  body: "Auto-generated practice questions from any material." },
  { status: "live", category: "Practice",    href: "/grade",           emoji: "✍️", title: "Mark my answer",           body: "AI marks your exam answer with strengths + improvements." },
  { status: "live", category: "Practice",    href: "/mock-exam",       emoji: "⏱️", title: "Mock exam simulator",      body: "Timed exam-room conditions. Auto-graded with full review." },

  // ─────── Memory ───────
  { status: "live", category: "Memory",      href: "/flashcards",      emoji: "🃏", title: "Flashcards",               body: "Spaced repetition (SM-2). Auto-generated from material." },

  // ─────── Planning ───────
  { status: "live", category: "Planning",    href: "/diagnostic",      emoji: "🎯", title: "Diagnostic + 7-day plan",  body: "10-question diagnostic → personalised plan." },
  { status: "live", category: "Planning",    href: "/concept-map",     emoji: "🗺️", title: "Concept map",              body: "Visualise your syllabus as a topic graph." },
  { status: "live", category: "Planning",    href: "/syllabus",        emoji: "📚", title: "Digital syllabus",         body: "Extract official syllabi to a clean outline." },

  // ─────── Languages ───────
  { status: "live", category: "Languages",   href: "/essay-coach",     emoji: "📝", title: "Essay coach",              body: "Outline, thesis options, opening hooks, line edits." },
  { status: "live", category: "Languages",   href: "/vocab",           emoji: "🅰️", title: "Vocabulary builder",       body: "Define + use in a sentence + memory tip in any language." },
  { status: "live", category: "Languages",   href: "/translate",       emoji: "🌐", title: "Translation mode",         body: "Translate textbook pages while preserving technical terms." },

  // ─────── School ───────
  { status: "live", category: "School",      href: "/lecture-summary", emoji: "🎬", title: "Lecture summariser",       body: "Paste a lecture or upload slides → TL;DR + 5-8 key bullets + 3 likely exam questions." },
  { status: "live", category: "School",      href: "/classroom",       emoji: "🎒", title: "Google Classroom",         body: "Sync assignments + AI study coach picks what to start next." },
  { status: "live", category: "School",      href: "/teams",           emoji: "🟦", title: "Microsoft Teams",          body: "Connect Teams Education for assignment sync + coaching." },
  { status: "live", category: "School",      href: "/lms",             emoji: "🏫", title: "Canvas / Moodle",          body: "Pull courses + assignments via your institution token." },
  { status: "live", category: "School",      href: "/parent",          emoji: "👪", title: "Parent dashboard",         body: "Weekly recap for the parent. 5 minutes a week, big difference." },

  // ─────── Coming next ───────
  { status: "soon", category: "Core AI",       emoji: "🎙️", title: "Voice-only tutor",        body: "Hands-free Q&A while doing chores or commuting." },
  { status: "soon", category: "Core AI",       emoji: "🧒", title: "Story-mode learning",     body: "Topics taught as choose-your-own-adventure stories. Built for ages 6-10." },
  { status: "soon", category: "Math",          emoji: "✏️", title: "Handwritten math checker", body: "Snap your handwritten work — AI checks each step, not just the answer." },
  { status: "soon", category: "Practice",      emoji: "🖍️", title: "PDF smart highlighter",  body: "Highlights what's likely to be tested in a chapter." },
  { status: "soon", category: "Memory",        emoji: "🎴", title: "Voice-note → flashcards", body: "Talk through a topic — AI auto-extracts flashcards from your voice memo." },
  { status: "soon", category: "Accessibility", emoji: "🧠", title: "Dyslexia + ADHD mode",    body: "Dyslexia-friendly font, chunked text, focus timer, gentle pacing." },
];

export default function ToolsPage() {
  const live = TOOLS.filter((t) => t.status === "live");
  const soon = TOOLS.filter((t) => t.status === "soon");

  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-10">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>
          AI study tools · {live.length} live · {soon.length} coming next
        </p>
        <h1 className="font-extrabold tracking-tight mt-3"
          style={{
            fontSize: "clamp(40px, 7vw, 64px)",
            backgroundImage: "linear-gradient(120deg, #4F46E5, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            letterSpacing: "-0.02em",
          }}>
          Every tool in one place
        </h1>
        <p className="mt-3 text-base sm:text-lg max-w-2xl" style={{ color: "var(--ash-muted)" }}>
          One free AI study helper. {live.length} tools live today. Built for any subject, any age, any board.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Available now</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {live.map((t) => <ToolCard key={t.title} t={t} />)}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Coming next</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {soon.map((t) => <ToolCard key={t.title} t={t} />)}
        </div>
      </section>

      <section className="glass-panel rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Got an idea for the next tool?</h2>
        <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
          Email us — we read every suggestion.
        </p>
        <Link href="/contact" className="inline-block px-5 py-2.5 rounded-full text-white font-semibold text-sm"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          Suggest a tool →
        </Link>
      </section>
    </main>
  );
}

function ToolCard({ t }: { t: Tool }) {
  const inner = (
    <div className="glass-panel rounded-2xl p-5 h-full relative">
      {t.status === "soon" && (
        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-bold"
          style={{ background: "rgba(124,58,237,0.15)", color: "#7c3aed", letterSpacing: "0.15em" }}>
          Next
        </span>
      )}
      <div className="text-2xl mb-2">{t.emoji}</div>
      <div className="font-semibold">{t.title}</div>
      <div className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>{t.body}</div>
      <div className="text-[11px] mt-2" style={{ color: "var(--ash-primary)" }}>{t.category}</div>
    </div>
  );
  return t.href ? <Link href={t.href}>{inner}</Link> : <div className="opacity-90 cursor-not-allowed">{inner}</div>;
}
