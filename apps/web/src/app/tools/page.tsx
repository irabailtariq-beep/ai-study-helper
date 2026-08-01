import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free AI study tools — explain, math solver, quiz, flashcards & more",
  description:
    "Every Help in Study tool in one place: AI tutor chat, step-by-step math solver, quiz maker, mock exams, flashcards, summariser and a writing coach. Free for CBSE, GCSE, AP, Cambridge & WAEC.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free AI study tools — Help in Study",
    description: "Ten focused AI study tools in one place, free for every student.",
    url: `${SITE.url}/tools`,
    images: [{
      url: `/api/og?title=${encodeURIComponent("All study tools")}&subtitle=${encodeURIComponent("10 free tools for students worldwide")}&tag=${encodeURIComponent("Tools")}`,
      width: 1200, height: 630,
    }],
  },
};

type Category = "Understand" | "Practise & get marked" | "Revise" | "Notes & writing";
type Tool = { href: string; emoji: string; title: string; body: string; category: Category };

const TOOLS: Tool[] = [
  { category: "Understand", href: "/explain",   emoji: "📖", title: "Explain anything",          body: "Photo, PDF or paste — explained at your level, in your board's style." },
  { category: "Understand", href: "/chat",      emoji: "💬", title: "AI chat tutor",             body: "Ask anything and keep asking — a tutor that knows your board and grade." },
  { category: "Understand", href: "/transform", emoji: "✨", title: "Learn through what you love", body: "Reframe any topic through cricket, cooking, gaming, K-pop — anything." },

  { category: "Practise & get marked", href: "/math-solver", emoji: "🧮", title: "Step-by-step math solver", body: "Every line of working. Method named. Common pitfalls flagged." },
  { category: "Practise & get marked", href: "/quiz",        emoji: "🧠", title: "Quiz me",                  body: "Auto-generated practice questions from any material." },
  { category: "Practise & get marked", href: "/mock-exam",   emoji: "⏱️", title: "Mock exam",                body: "Timed exam-room conditions in your board's style. Auto-graded." },
  { category: "Practise & get marked", href: "/grade",       emoji: "✍️", title: "Mark my answer",           body: "Graded like your board's examiner — with exactly what to fix." },

  { category: "Revise", href: "/flashcards", emoji: "🃏", title: "Flashcards", body: "Spaced repetition, auto-made from your notes. Stored on your device." },

  { category: "Notes & writing", href: "/lecture-summary", emoji: "🎬", title: "Summarise anything", body: "Lecture, notes or PDF → summary, key points and likely exam questions." },
  { category: "Notes & writing", href: "/essay-coach",     emoji: "📝", title: "Writing coach",       body: "Essay feedback, a grammar & clarity check, and APA/MLA/Chicago/Harvard citations." },
];

const CATEGORIES: Category[] = ["Understand", "Practise & get marked", "Revise", "Notes & writing"];

export default function ToolsPage() {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-10">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>
          AI study tools · {TOOLS.length} free tools
        </p>
        <h1 className="font-extrabold tracking-tight mt-3"
          style={{ fontSize: "clamp(36px, 6vw, 56px)", color: "var(--ash-text)", letterSpacing: "-0.02em" }}>
          Ten tools. Everything a student needs.
        </h1>
        <p className="mt-3 text-base sm:text-lg max-w-2xl" style={{ color: "var(--ash-muted)" }}>
          Free for every student. Built for your board — CBSE, GCSE, AP, Cambridge and WAEC.
        </p>
      </header>

      {CATEGORIES.map((cat) => (
        <section key={cat} className="mb-9">
          <h2 className="text-sm uppercase font-bold mb-4" style={{ color: "var(--ash-muted)", letterSpacing: "0.08em" }}>{cat}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.filter((t) => t.category === cat).map((t) => <ToolCard key={t.href} t={t} />)}
          </div>
        </section>
      ))}
    </main>
  );
}

function ToolCard({ t }: { t: Tool }) {
  return (
    <Link href={t.href} className="glass-panel rounded-2xl p-5 h-full block">
      <div className="text-2xl mb-2">{t.emoji}</div>
      <div className="font-semibold">{t.title}</div>
      <div className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>{t.body}</div>
    </Link>
  );
}
