import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — 100% free, forever",
  description: "Help in Study is genuinely free. No credit card, no trial, no upgrade prompts. We don't sell paid plans.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="text-center mt-4 mb-10">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.25em" }}>
          Pricing
        </p>
        <h1
          className="font-extrabold leading-tight tracking-tight mt-3"
          style={{
            fontSize: "clamp(36px, 6vw, 60px)",
            backgroundImage: "linear-gradient(120deg, #4F46E5 0%, #7c3aed 50%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          100% free. Forever.
        </h1>
        <p className="mt-4 text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--ash-text)" }}>
          No credit card. No trial period. No upgrade prompts. Every feature, free.
          We don't sell paid plans because the whole point is access for every student.
        </p>
      </header>

      <section className="glass-panel rounded-ash p-8 mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">Everything's included</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            "AI explanations (text, photo, PDF)",
            "Chat tutor with memory",
            "Quiz generator (MCQ, short answer, T/F, fill-in)",
            "Math solver with step-by-step working",
            "Photo math from your textbook",
            "Flashcards with spaced repetition (SM-2)",
            "Past-paper synthesis",
            "Mark-scheme-style answer feedback",
            "Concept map builder",
            "Diagnostic quiz + 7-day plan",
            "Formula sheets per board",
            "Calculator + graph plotter",
            "Whiteboard",
            "Voice input + voice output",
            "Translate + vocab builder",
            "Essay coach",
            "Lecture summary",
            "Mock exams",
            "Problem variants generator",
            "Syllabus extraction",
            "Parent weekly recap",
            "Google Classroom sync",
            "MS Teams sync",
            "Canvas + Moodle integration",
            "Progress tracking + streaks",
            "129+ study-tip articles",
            "80+ curricula supported",
            "Adaptive UI by age",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span style={{ color: "var(--ash-primary)" }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Why it's free</h2>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--ash-text)" }}>
          Tutoring should not be a luxury. A student in Lahore studying for FBISE Matric and a student in
          Houston studying for SAT deserve the same quality of help. Paywalls defeat that purpose.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ash-text)" }}>
          The site runs on the free tiers of Google Gemini, Groq, and Vercel. Reasonable daily limits
          keep abuse in check; everything else is wide open.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Daily limits (anti-abuse only)</h2>
        <ul className="space-y-2 text-sm">
          <li>10 explanations per day (guest) / 50 per day (signed in)</li>
          <li>50 chat messages per day</li>
          <li>5 uploads per day, 5 MB per file, 20 PDF pages</li>
        </ul>
        <p className="text-xs mt-3" style={{ color: "var(--ash-muted)" }}>
          Limits exist because we pay per AI request. They're high enough that real students rarely hit them.
        </p>
      </section>

      <section className="glass-panel rounded-ash p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Start using it now</h2>
        <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
          30-second onboarding. No card. No catch.
        </p>
        <Link
          href="/onboarding"
          className="inline-block px-6 py-3 rounded-ash text-white font-semibold"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}
        >
          Open my AI study helper →
        </Link>
      </section>
    </main>
  );
}
