import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CURRICULA, COUNTRIES } from "@ash/core";
import { SITE, faqJsonLd, courseJsonLd } from "@/lib/seo";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject, board } = await params;
  const subj = SUBJECT_LABELS[subject];
  const cur = CURRICULA.find((c) => c.id === board);
  if (!subj || !cur) return {};
  const country = COUNTRIES.find((c) => c.code === cur.country)?.name ?? "International";
  const title = `Free ${subj} help for ${cur.name} students (${country})`;
  const description = `AI tutor for ${cur.name} ${subj}. Step-by-step explanations, quizzes, and flashcards aligned to your board. Free, no credit card.`;
  return {
    title,
    description,
    alternates: { canonical: `/learn/${subject}/${board}` },
    openGraph: { title, description, url: `${SITE.url}/learn/${subject}/${board}` },
  };
}

export default async function LearnPage({ params }: Props) {
  const { subject, board } = await params;
  const subj = SUBJECT_LABELS[subject];
  const cur = CURRICULA.find((c) => c.id === board);
  if (!subj || !cur) notFound();

  const country = COUNTRIES.find((c) => c.code === cur.country)?.name ?? "International";

  const faqs = [
    {
      question: `Is the AI tutor for ${cur.name} ${subj} really free?`,
      answer: `Yes. The free tier includes 10 explanations and 50 chat messages per day, plus quiz generation and flashcards. No credit card. Pro removes limits and ads.`,
    },
    {
      question: `Does it match the official ${cur.name} syllabus?`,
      answer: `The AI is told you're a ${cur.name} ${subj} student before every reply, so terminology, units and exam style match your board. You can also upload your official syllabus to lock answers to it.`,
    },
    {
      question: `Can it solve exam-style questions?`,
      answer: `Yes. Snap a photo of any question from your textbook or notes. The AI shows step-by-step working in the style your board's mark scheme expects.`,
    },
    {
      question: `Will it help with my homework or just explain theory?`,
      answer: `Both. Use Explain for concepts, Math Solver for step-by-step working, and Mark My Answer when you need feedback on a written answer.`,
    },
  ];

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({ name: `${cur.name} ${subj}`, description: `AI-tutored ${subj} for ${cur.name} students.` })) }} />

      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-8">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.25em" }}>
          {country} · {cur.name}
        </p>
        <h1 className="font-extrabold tracking-tight mt-2"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              backgroundImage: "linear-gradient(120deg, #4F46E5, #7c3aed, #06b6d4)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}>
          Free AI tutor for {cur.name} {subj}
        </h1>
        <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>
          Built for {cur.name} students. Snap a textbook page, paste a question, or upload a worksheet —
          your tutor explains it in your board's style, generates practice quizzes, and remembers what you've covered.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/onboarding" className="px-6 py-3 rounded-ash text-white font-semibold"
                style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
            Start free →
          </Link>
          <Link href="/pricing" className="px-6 py-3 rounded-ash border font-semibold"
                style={{ borderColor: "var(--ash-border)" }}>
            See plans
          </Link>
        </div>
      </header>

      <section className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="glass-panel p-5 rounded-ash">
          <div className="text-2xl mb-1">🧮</div>
          <h2 className="font-semibold">Step-by-step {subj}</h2>
          <p className="text-sm" style={{ color: "var(--ash-muted)" }}>Every line of working shown — no more "I get the answer but not how".</p>
          <Link href="/math-solver" className="text-sm mt-2 inline-block underline" style={{ color: "var(--ash-primary)" }}>Try the math solver →</Link>
        </div>
        <div className="glass-panel p-5 rounded-ash">
          <div className="text-2xl mb-1">🧠</div>
          <h2 className="font-semibold">{cur.name}-style quizzes</h2>
          <p className="text-sm" style={{ color: "var(--ash-muted)" }}>Auto-generated MCQs, short answer, and true/false from your notes or any topic.</p>
          <Link href="/quiz" className="text-sm mt-2 inline-block underline" style={{ color: "var(--ash-primary)" }}>Generate a quiz →</Link>
        </div>
        <div className="glass-panel p-5 rounded-ash">
          <div className="text-2xl mb-1">✨</div>
          <h2 className="font-semibold">Learn through your interests</h2>
          <p className="text-sm" style={{ color: "var(--ash-muted)" }}>Reframe any topic through cricket, cooking, gaming, K-pop — whatever you love.</p>
          <Link href="/transform" className="text-sm mt-2 inline-block underline" style={{ color: "var(--ash-primary)" }}>Make it about you →</Link>
        </div>
        <div className="glass-panel p-5 rounded-ash">
          <div className="text-2xl mb-1">🔥</div>
          <h2 className="font-semibold">Daily streaks + study plan</h2>
          <p className="text-sm" style={{ color: "var(--ash-muted)" }}>10-question diagnostic builds your personal 7-day plan.</p>
          <Link href="/diagnostic" className="text-sm mt-2 inline-block underline" style={{ color: "var(--ash-primary)" }}>Take the diagnostic →</Link>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">How it helps {cur.name} {subj} students</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li><b>Curriculum-locked answers.</b> Once you tell us your grade and {cur.name} board, every reply uses the right terminology, formulas, and units.</li>
          <li><b>Auto-generated practice.</b> Upload notes or a chapter — get fresh quizzes and flashcards at the right difficulty.</li>
          <li><b>Mark-scheme grading.</b> Type your answer, AI marks it like a {cur.name} examiner would, with feedback.</li>
          <li><b>Photo math.</b> Snap a problem from your textbook or notebook — get step-by-step working.</li>
          <li><b>Adaptive difficulty.</b> If a topic is too easy or too hard, the next question adjusts.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">FAQs</h2>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <details key={i} className="glass-panel rounded-ash p-4">
              <summary className="font-semibold cursor-pointer">{f.question}</summary>
              <p className="mt-2 text-sm">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="glass-panel rounded-ash p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Ready when you are</h2>
        <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>Free forever for the basics. Upgrade later if you want to.</p>
        <Link href="/onboarding" className="inline-block px-6 py-3 rounded-ash text-white font-semibold"
              style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          Get started — it's free
        </Link>
      </section>
    </main>
  );
}
