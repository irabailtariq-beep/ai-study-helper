import Link from "next/link";
import type { ToolLanding } from "@/content/toolLandings";
import { breadcrumbJsonLd, faqJsonLd, jsonLdSafe } from "@/lib/seo";

// The embedded tools are the same client components the /grade, /essay-coach,
// /math-solver and /quiz routes render — one product, many query-matched doors.
import GradePage from "@/app/grade/page";
import EssayCoachPage from "@/app/essay-coach/page";
import MathSolverPage from "@/app/math-solver/page";
import QuizPage from "@/app/quiz/page";
import ExplainPage from "@/app/explain/page";

const TOOL_COMPONENT = {
  "grade": GradePage,
  "essay-coach": EssayCoachPage,
  "math-solver": MathSolverPage,
  "quiz": QuizPage,
  "explain": ExplainPage,
} as const;

export function ToolLandingView({ page }: { page: ToolLanding }) {
  const Tool = TOOL_COMPONENT[page.tool];
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbJsonLd([
        { name: page.h1, path: `/tools/${page.slug}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(
        faqJsonLd(page.faqs.map((f) => ({ question: f.q, answer: f.a })))
      ) }} />

      <header className="px-6 pt-10 pb-2 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{page.h1}</h1>
        <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>{page.subhead}</p>
        <div className="glass-panel rounded-2xl p-5 mt-6 text-left">
          <p className="text-base leading-relaxed">{page.quickAnswer}</p>
        </div>
        <p className="mt-4 text-sm font-semibold" style={{ color: "var(--ash-primary)" }}>
          ↓ Use it right here — free, no account
        </p>
      </header>

      {/* the actual tool */}
      <Tool />

      <section className="px-6 pb-14 max-w-3xl mx-auto">
        {page.sections.map((s) => (
          <div key={s.heading} className="mt-10">
            <h2 className="text-2xl font-extrabold tracking-tight">{s.heading}</h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--ash-text)" }}>{s.body}</p>
          </div>
        ))}

        <div className="mt-10">
          <h2 className="text-2xl font-extrabold tracking-tight">{page.example.title}</h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--ash-text)" }}>{page.example.body}</p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Questions students ask</h2>
          <div className="mt-4 space-y-5">
            {page.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <p className="mt-1.5 text-base leading-relaxed" style={{ color: "var(--ash-muted)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-sm" style={{ color: "var(--ash-muted)" }}>
          Every tool on Help in Study is free with no ads and no signup — browse{" "}
          <Link href="/tools" className="underline" style={{ color: "var(--ash-primary)" }}>all ten tools</Link>{" "}
          or the <Link href="/blog" className="underline" style={{ color: "var(--ash-primary)" }}>revision guides</Link>.
        </p>
      </section>
    </div>
  );
}
