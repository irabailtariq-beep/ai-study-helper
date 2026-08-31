import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CURRICULA, COUNTRIES } from "@ash/core";
import { SITE, courseJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { findLearnCombo, LEARN_COMBOS } from "@/content/learnPages";
import { HELP_IN_STUDY_MAP } from "@/content/helpInStudyPages";

const SUBJECT_LABELS: Record<string, string> = {
  "math": "Mathematics",
  "physics": "Physics",
  "chemistry": "Chemistry",
  "biology": "Biology",
  "english": "English",
  "history": "History",
  "geography": "Geography",
  "economics": "Economics",
  "computer-science": "Computer Science",
  "accounting": "Accounting",
  "psychology": "Psychology",
  "general-science": "General Science",
};

type Props = { params: Promise<{ subject: string; board: string }> };

// Pre-generate only the curated combos.
export async function generateStaticParams() {
  return LEARN_COMBOS.map(({ subject, board }) => ({ subject, board }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject, board } = await params;
  const combo = findLearnCombo(subject, board);
  if (!combo) return {};
  const subj = SUBJECT_LABELS[subject];
  const cur = CURRICULA.find((c) => c.id === board);
  if (!subj || !cur) return {};
  const title = combo.metaTitle ?? `${subj} help for ${cur.name} students · Help in Study`;
  const description = combo.metaDescription ?? combo.intro.slice(0, 155);
  return {
    title,
    description,
    alternates: { canonical: `/learn/${subject}/${board}` },
    openGraph: {
      images: [{ url: `/api/og?title=${encodeURIComponent(`${subj} — ${cur.name}`)}&tag=${encodeURIComponent("Study guide")}`, width: 1200, height: 630 }], title, description, url: `${SITE.url}/learn/${subject}/${board}` },
  };
}

export default async function LearnPage({ params }: Props) {
  const { subject, board } = await params;
  const combo = findLearnCombo(subject, board);
  // Non-five-board combos are no longer served. Redirect to the subject hub only
  // when that hub actually exists — otherwise we were 301-ing to a 404, which
  // wastes crawl budget and shows the visitor a dead end.
  if (!combo) {
    if (HELP_IN_STUDY_MAP.has(subject)) permanentRedirect(`/help-in-study/${subject}`);
    notFound();
  }

  const subj = SUBJECT_LABELS[subject];
  const cur = CURRICULA.find((c) => c.id === board);
  if (!subj || !cur) notFound();

  const country = COUNTRIES.find((c) => c.code === cur.country)?.name ?? "International";

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseJsonLd({
            name: `${cur.name} ${subj} — Help in Study`,
            description: combo.intro,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([
            { name: subj, path: `/help-in-study/${subject}` },
            { name: cur.name, path: `/learn/${subject}/${board}` },
          ])),
        }}
      />

      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-8">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.25em" }}>
          {country} · {cur.name}
        </p>
        <h1
          className="font-extrabold tracking-tight mt-2"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            backgroundImage: "linear-gradient(120deg, #0a6357, #0e9f8e, #14b8a6)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}
        >
          {cur.name} {subj} help — done properly
        </h1>
        <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--ash-text)" }}>
          {combo.intro}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/onboarding" className="px-6 py-3 rounded-ash text-white font-semibold"
                style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
            Start free →
          </Link>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Exam format you'll actually sit</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ash-text)" }}>{combo.examFormat}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Highest-yield topics (the ones that show up year after year)</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {combo.highYieldTopics.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        <p className="text-xs mt-3" style={{ color: "var(--ash-muted)" }}>
          Drill these first. If you can't do every one of these cold, work through them with{" "}
          <Link href="/explain" className="underline" style={{ color: "var(--ash-primary)" }}>/explain</Link>{" "}
          or{" "}
          <Link href="/quiz" className="underline" style={{ color: "var(--ash-primary)" }}>/quiz</Link>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Common mistakes that quietly cost marks</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {combo.commonPitfalls.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <p className="text-xs mt-3" style={{ color: "var(--ash-muted)" }}>
          When you mark your past papers, tag each lost mark to one of these. The pattern reveals where to focus.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Where to get real past papers</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {combo.pastPaperSources.map((src, i) => (
            <li key={i}>{src}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Realistic study plan</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ash-text)" }}>{combo.studyPlan}</p>
      </section>

      {combo.resources && combo.resources.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Recommended resources</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {combo.resources.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      {combo.extraNotes && (
        <section className="mb-10 glass-panel p-5 rounded-ash">
          <h2 className="text-base font-semibold mb-2">Worth knowing</h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--ash-text)" }}>{combo.extraNotes}</p>
        </section>
      )}

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">How Help in Study fits into your prep</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="glass-panel p-5 rounded-ash">
            <div className="text-2xl mb-1">🧮</div>
            <h3 className="font-semibold">Step-by-step working</h3>
            <p className="text-sm" style={{ color: "var(--ash-muted)" }}>
              Snap any textbook problem — the AI works through every step in {cur.name} style with full justification.
            </p>
            <Link href="/math-solver" className="text-sm mt-2 inline-block underline" style={{ color: "var(--ash-primary)" }}>Try math solver →</Link>
          </div>
          <div className="glass-panel p-5 rounded-ash">
            <div className="text-2xl mb-1">🧠</div>
            <h3 className="font-semibold">Board-style practice quizzes</h3>
            <p className="text-sm" style={{ color: "var(--ash-muted)" }}>
              MCQs, short-answer, and true/false generated from any topic above — auto-graded with explanations.
            </p>
            <Link href="/quiz" className="text-sm mt-2 inline-block underline" style={{ color: "var(--ash-primary)" }}>Generate a quiz →</Link>
          </div>
          <div className="glass-panel p-5 rounded-ash">
            <div className="text-2xl mb-1">✍️</div>
            <h3 className="font-semibold">Have your answer marked</h3>
            <p className="text-sm" style={{ color: "var(--ash-muted)" }}>
              Paste an answer to a past-paper question — get feedback like a {cur.name} examiner would give.
            </p>
            <Link href="/grade" className="text-sm mt-2 inline-block underline" style={{ color: "var(--ash-primary)" }}>Mark my answer →</Link>
          </div>
          <div className="glass-panel p-5 rounded-ash">
            <div className="text-2xl mb-1">🔥</div>
            <h3 className="font-semibold">Practise your weak topics</h3>
            <p className="text-sm" style={{ color: "var(--ash-muted)" }}>
              Auto-generate practice questions on the topics above and drill the ones you keep getting wrong.
            </p>
            <Link href="/quiz" className="text-sm mt-2 inline-block underline" style={{ color: "var(--ash-primary)" }}>Quiz me →</Link>
          </div>
        </div>
      </section>

      <section className="glass-panel rounded-ash p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Ready to start?</h2>
        <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
          Set up your profile once — every reply from then on is tuned to your {cur.name} {subj} syllabus.
        </p>
        <Link href="/onboarding" className="inline-block px-6 py-3 rounded-ash text-white font-semibold"
              style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
          Get started — it's free
        </Link>
      </section>
    </main>
  );
}
