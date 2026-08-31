import Link from "next/link";
import { TOOL_CONTENT } from "@/content/toolPages";
import { breadcrumbJsonLd, faqJsonLd, jsonLdSafe } from "@/lib/seo";

/**
 * Server-rendered explainer that sits below each tool's UI.
 *
 * The tool pages target the site's highest-intent queries but used to ship only
 * a heading and one sentence of unique text, so they had nothing to rank on.
 * This is a server component on purpose: the copy must be in the initial HTML,
 * not painted in by React afterwards.
 */
// Breadcrumb labels for the 10 tools. ToolContent has no title field, and the
// visible <h1> lives in each tool's own client component, so the trail names
// them explicitly rather than prettifying the slug.
const TOOL_LABEL: Record<string, string> = {
  "explain": "Explain anything",
  "math-solver": "Math solver",
  "quiz": "Quiz maker",
  "grade": "Mark my answer",
  "mock-exam": "Mock exam generator",
  "flashcards": "Flashcards",
  "chat": "AI tutor chat",
  "essay-coach": "Essay coach",
  "lecture-summary": "Lecture summary",
  "transform": "Learn through your interests",
};

export function ToolPageContent({ slug }: { slug: string }) {
  const c = TOOL_CONTENT[slug];
  if (!c) return null;

  return (
    <section className="mt-16 mb-4 px-6 max-w-3xl mx-auto" aria-labelledby={`about-${slug}`}>
      {/* Breadcrumbs are the one rich result in this family that Google still
          renders, and the 11 tool pages were the only template emitting none. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdSafe(breadcrumbJsonLd([
            { name: "Tools", path: "/tools" },
            { name: TOOL_LABEL[slug] ?? slug, path: `/${slug}` },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdSafe(faqJsonLd(c.faqs.map((f) => ({ question: f.q, answer: f.a })))),
        }}
      />

      <hr className="mb-10" style={{ borderColor: "var(--ash-border)" }} />

      <h2 id={`about-${slug}`} className="text-2xl font-extrabold tracking-tight">
        How it works
      </h2>
      <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--ash-muted)" }}>
        {c.intro}
      </p>

      <ol className="mt-6 space-y-4">
        {c.howItWorks.map((s, i) => (
          <li key={s.step} className="flex gap-3">
            <span
              className="flex-none w-7 h-7 rounded-full grid place-items-center text-sm font-bold text-white"
              style={{ background: "var(--ash-primary)" }}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <span>
              <b>{s.step}.</b>{" "}
              <span style={{ color: "var(--ash-muted)" }}>{s.text}</span>
            </span>
          </li>
        ))}
      </ol>

      <h2 className="text-2xl font-extrabold tracking-tight mt-12">Your exam board changes the answer</h2>
      <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--ash-muted)" }}>
        {c.boards}
      </p>
      <p className="mt-3 text-sm">
        <Link href={`/onboarding?next=/${slug}`} className="underline" style={{ color: "var(--ash-primary)" }}>
          Set your exam board
        </Link>{" "}
        — it takes about 30 seconds and every answer after that matches your syllabus.
      </p>

      <h2 className="text-2xl font-extrabold tracking-tight mt-12">{c.example.title}</h2>
      <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--ash-muted)" }}>
        {c.example.body}
      </p>

      <h2 className="text-2xl font-extrabold tracking-tight mt-12">Getting better results</h2>
      <ul className="mt-3 space-y-2 list-disc pl-5">
        {c.tips.map((t) => (
          <li key={t} className="text-base leading-relaxed" style={{ color: "var(--ash-muted)" }}>
            {t}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-extrabold tracking-tight mt-12">Questions students ask</h2>
      <div className="mt-4 space-y-6">
        {c.faqs.map((f) => (
          <div key={f.q}>
            <h3 className="text-lg font-semibold">{f.q}</h3>
            <p className="mt-1.5 text-base leading-relaxed" style={{ color: "var(--ash-muted)" }}>
              {f.a}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm" style={{ color: "var(--ash-muted)" }}>
        Every tool on Help in Study is free, with no account required and no ads. Browse them all on{" "}
        <Link href="/tools" className="underline" style={{ color: "var(--ash-primary)" }}>
          the tools page
        </Link>
        , or read the{" "}
        <Link href="/blog" className="underline" style={{ color: "var(--ash-primary)" }}>
          revision guides
        </Link>
        .
      </p>
    </section>
  );
}
