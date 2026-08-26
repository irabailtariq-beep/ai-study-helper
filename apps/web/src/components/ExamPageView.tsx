import Link from "next/link";
import type { ExamPage } from "@/content/examPages";
import { examPagesByBoard } from "@/content/examPages";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { quizJsonLd } from "@/lib/quizSchema";
import { APScoreCalculator } from "@/components/APScoreCalculator";

const BOARD_LABEL: Record<ExamPage["board"], string> = {
  cbse: "CBSE", gcse: "GCSE", waec: "WAEC / WASSCE", ap: "AP",
};

/**
 * Renderer for exam-structure pages: answer-first (the quick answer is the
 * first content Google and AI engines see), then worked problems with the
 * marking detail the incumbents (forum threads, PDF dumps) never include.
 */
export function ExamPageView({ page }: { page: ExamPage }) {
  const related = examPagesByBoard(page.board).filter((p) => p.slug !== page.slug).slice(0, 4);

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
        { name: BOARD_LABEL[page.board], path: `/${page.board}` },
        { name: page.h1, path: `/${page.board}/${page.slug}` },
      ])) }} />
      {page.problems.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
          quizJsonLd(page.h1, page.problems.map((p) => ({ q: p.question, a: p.answer })))
        ) }} />
      )}
      {page.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
          faqJsonLd(page.faqs.map((f) => ({ question: f.q, answer: f.a })))
        ) }} />
      )}

      <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.25em" }}>
        {BOARD_LABEL[page.board]}
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">{page.h1}</h1>

      <div className="glass-panel rounded-2xl p-5 mt-6">
        <div className="text-xs uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--ash-muted)", letterSpacing: "0.2em" }}>
          Quick answer
        </div>
        <p className="text-base leading-relaxed">{page.quickAnswer}</p>
      </div>

      <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--ash-text)" }}>{page.intro}</p>

      {page.calculator && <APScoreCalculator data={page.calculator} />}

      {page.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-2xl font-extrabold tracking-tight">{s.heading}</h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--ash-text)" }}>{s.body}</p>
        </section>
      ))}

      {page.problems.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Worked questions, step by step</h2>
          <div className="mt-4 space-y-6">
            {page.problems.map((pr, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5">
                <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--ash-primary)", letterSpacing: "0.2em" }}>
                  Question {i + 1}
                </div>
                <p className="font-semibold leading-relaxed">{pr.question}</p>
                <ol className="mt-3 space-y-2">
                  {pr.steps.map((st, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed">
                      <span className="flex-none w-6 h-6 rounded-full grid place-items-center text-xs font-bold text-white" style={{ background: "var(--ash-primary)" }} aria-hidden="true">{j + 1}</span>
                      <span style={{ color: "var(--ash-text)" }}>{st}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 font-bold">Answer: {pr.answer}</p>
                <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
                  <b>Where marks slip:</b> {pr.markTip}
                </p>
                <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
                  <b>Try one yourself:</b> {pr.variant}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="glass-panel rounded-2xl p-6 mt-10 text-center">
        <h2 className="text-xl font-bold">Stuck on a different question?</h2>
        <p className="text-sm mt-2 mb-4" style={{ color: "var(--ash-muted)" }}>
          Paste or photograph it and get the full working, free — no account needed.
        </p>
        <Link href="/math-solver" className="inline-block px-6 py-3 rounded-full text-white font-semibold" style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
          Solve my question →
        </Link>
        <span className="inline-block w-3" />
        <Link href="/quiz" className="inline-block px-6 py-3 rounded-full border font-semibold" style={{ borderColor: "var(--ash-border)" }}>
          Quiz me on this topic
        </Link>
      </section>

      {page.faqs.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Questions students ask</h2>
          <div className="mt-4 space-y-5">
            {page.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <p className="mt-1.5 text-base leading-relaxed" style={{ color: "var(--ash-muted)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-3">More {BOARD_LABEL[page.board]} practice</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/${r.board}/${r.slug}`} className="glass-panel rounded-2xl p-4 hover:-translate-y-0.5 transition block">
                <div className="font-semibold text-sm">{r.h1} →</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
