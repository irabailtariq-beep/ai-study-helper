import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE, breadcrumbJsonLd } from "@/lib/seo";
import { HELP_IN_STUDY_PAGES, HELP_IN_STUDY_MAP } from "@/content/helpInStudyPages";
import { LEARN_COMBOS } from "@/content/learnPages";
import { examPagesForHub } from "@/content/examPages";
import { CURRICULA } from "@ash/core";

type Props = { params: Promise<{ subject: string }> };

export async function generateStaticParams() {
  return HELP_IN_STUDY_PAGES.map((p) => ({ subject: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject } = await params;
  const s = HELP_IN_STUDY_MAP.get(subject);
  if (!s) return {};
  const title = s.metaTitle;
  const description = `${s.intro.slice(0, 155)}`;
  return {
    title,
    description,
    alternates: { canonical: `/help-in-study/${subject}` },
    openGraph: {
      title, description, url: `${SITE.url}/help-in-study/${subject}`,
      images: [{
        url: `/api/og?title=${encodeURIComponent(`${s.label} help`)}&subtitle=${encodeURIComponent(s.tagline)}&tag=${encodeURIComponent("AI study helper")}`,
        width: 1200, height: 630,
      }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function SubjectPage({ params }: Props) {
  const { subject } = await params;
  const s = HELP_IN_STUDY_MAP.get(subject);
  if (!s) notFound();

  // The /learn board guides had no inbound link from anywhere on the site — they
  // were sitemap-only URLs. Surfacing them here gives them a real path in and
  // sends this hub's authority to them.
  const boardGuides = LEARN_COMBOS.filter((c) => c.subject === subject);
  const practice = examPagesForHub(subject);

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([
            { name: s.label, path: `/help-in-study/${subject}` },
          ])),
        }}
      />

      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-8">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>
          {s.emoji}  Help in study · {s.label}
        </p>
        <h1
          className="font-extrabold tracking-tight mt-3"
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            backgroundImage: "linear-gradient(120deg, #0a6357, #0e9f8e, #14b8a6)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          {s.tagline}
        </h1>
        <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--ash-text)" }}>
          {s.intro}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/onboarding" className="px-6 py-3 rounded-full text-white font-semibold"
            style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
            Start free →
          </Link>
          <Link href="/transform" className="px-6 py-3 rounded-full border font-semibold"
            style={{ borderColor: "var(--ash-border)" }}>
            Reframe through my interests
          </Link>
        </div>
      </header>

      <section className="glass-panel rounded-2xl p-6 mb-10">
        <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--ash-muted)", letterSpacing: "0.25em" }}>
          A real {s.label.toLowerCase()} question students bring us
        </div>
        <p className="font-mono text-sm mb-4">{s.sample}</p>
        <Link href="/onboarding" className="inline-block px-5 py-2.5 rounded-full text-white font-semibold text-sm"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
          Try it with your own question →
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Why {s.label.toLowerCase()} is harder than it looks</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ash-text)" }}>{s.whyHard}</p>
      </section>

      {s.sections.map((section, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--ash-text)" }}>{section.body}</p>
        </section>
      ))}

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">What we do specifically well for {s.label.toLowerCase()}</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {s.howWeHelp.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Topics covered</h2>
        <div className="flex flex-wrap gap-2">
          {s.topics.map((t) => (
            <span key={t} className="glass-panel rounded-full px-3 py-1.5 text-sm">{t}</span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Tools that pair well with {s.label.toLowerCase()}</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {s.ctaLinks.map((cta, i) => (
            <Link key={i} href={cta.href} className="glass-panel rounded-2xl p-4 hover:-translate-y-0.5 transition block">
              <div className="font-semibold">{cta.label} →</div>
              <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>{cta.why}</p>
            </Link>
          ))}
        </div>
      </section>

      {boardGuides.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">{s.label} by exam board</h2>
          <p className="text-sm mb-3" style={{ color: "var(--ash-muted)" }}>
            Board-specific guides: paper structure, what the mark scheme rewards, and how to revise for it.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {boardGuides.map((c) => (
              <Link
                key={`${c.subject}/${c.board}`}
                href={`/learn/${c.subject}/${c.board}`}
                className="glass-panel rounded-2xl p-4 hover:-translate-y-0.5 transition block"
              >
                <div className="font-semibold">{CURRICULA.find((x) => x.id === c.board)?.name ?? c.board} →</div>
                <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>
                  {s.label} for {CURRICULA.find((x) => x.id === c.board)?.name ?? c.board}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {practice.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Practice questions, solved step by step</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {practice.map((p) => (
              <Link key={`${p.board}/${p.slug}`} href={`/${p.board}/${p.slug}`} className="glass-panel rounded-2xl p-4 hover:-translate-y-0.5 transition block">
                <div className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: "var(--ash-primary)", letterSpacing: "0.2em" }}>{p.board.toUpperCase()}</div>
                <div className="font-semibold text-sm">{p.h1} →</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="glass-panel rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Get help in study {s.label.toLowerCase()} now</h2>
        <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>Free forever. Every tool. No card.</p>
        <Link href="/onboarding" className="inline-block px-6 py-3 rounded-full text-white font-semibold"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
          Open my AI study helper →
        </Link>
      </section>
    </main>
  );
}
