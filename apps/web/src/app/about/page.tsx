import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Help in Study — Free AI Study Helper",
  description: "Help in Study is a free AI study helper that adapts to your age, your school's curriculum, and what you actually like. Built for students worldwide.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Help in Study", description: "Free AI study helper for every subject and curriculum.", url: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <header className="mt-4 mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About Help in Study</h1>
        <p className="mt-3 text-lg" style={{ color: "var(--ash-muted)" }}>
          A free AI study helper that meets students where they are.
        </p>
      </header>

      <section className="prose-content space-y-4">
        <p className="text-base leading-relaxed">
          Help in Study (<b>helpinstudy.com</b>) is a free AI study helper for students aged 13 and over.
          We started with a simple question: why does generic AI feel useless when a kid actually has homework?
        </p>
        <p className="text-base leading-relaxed">
          The answer is that generic AI doesn't know your country, your school's board,
          your grade, or what makes things click for you personally. So it answers in the wrong style,
          uses the wrong terminology, and treats a 9-year-old like a college student.
        </p>
        <p className="text-base leading-relaxed">
          We fix that. Every reply on Help in Study is shaped by four things: your country, your age, your grade,
          and your curriculum. Then — if you want — we'll rewrite the whole explanation through what you love.
          Cricket. Cooking. Minecraft. K-pop. Whatever helps it click.
        </p>

        <h2 className="text-2xl font-bold mt-8">What we believe</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><b>Free should mean free.</b> No card, no trial, no paid plans, no ads — every tool, free.</li>
          <li><b>AI should help students learn — not cheat.</b> Every reply shows the method, not just the answer.</li>
          <li><b>Curriculum-fit beats generic intelligence.</b> CBSE, GCSE, AP, Cambridge, WAEC — different boards reward different things, and we go deep on all five.</li>
          <li><b>Privacy-first for kids.</b> Privacy-friendly, anonymized analytics only — no ad trackers, and we never sell student data. One-click data export and delete.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Who writes Help in Study</h2>
        <p className="text-base leading-relaxed">
          Hi — I'm <b>Rabail</b>, the founder of Help in Study. Every guide here is drafted with AI and then
          checked by me, line by line, against the exam board's own specification — I do not publish
          anything I have not read. That is how one student can cover five exam systems honestly;
          pretending I typed all of it myself would be the lie. I'm a current student, working through my own IGCSE and A-Level exams — so this comes from
          someone actually sitting these papers, not a faceless content team. English is my strongest subject,
          history is my favourite, and I focus on plain-English explanations and exam technique for students
          across CBSE, GCSE, AP, Cambridge and WAEC.
        </p>
        <p className="text-base leading-relaxed">
          I built this for the students I recognised in myself: the ones who are struggling, can't afford a tutor,
          and don't have hours to spare — but still want to <b>actually understand</b> their work, not copy it.
          Every tool shows the method and the working, so you learn it instead of cheating it. Learning it beats
          cheating it, every single time.
        </p>
        <p className="text-base leading-relaxed">
          And it's <b>genuinely free</b> — no "free" that quietly asks for your card three screens in, unlike a lot
          of study sites. Everything here is written and checked by a real person — me — not spun up and left to rot.
          Spot something wrong or unclear? <Link href="/contact" className="underline" style={{ color: "var(--ash-primary)" }}>Tell me</Link> — I read every message.
        </p>

        <h2 className="text-2xl font-bold mt-8">What we use under the hood</h2>
        <p className="text-base leading-relaxed">
          We use Google Gemini for vision and PDF understanding (only free multimodal AI),
          and open-source Llama 3.3 70B (via Groq) for fast text generation. Both are state-of-the-art models.
          We don't fine-tune any model on student content.
        </p>

        <h2 className="text-2xl font-bold mt-8">Get in touch</h2>
        <p className="text-base leading-relaxed">
          Questions, feedback, partnerships, or press? <Link href="/contact" className="underline" style={{ color: "var(--ash-primary)" }}>Email us</Link>.
        </p>
      </section>
    </main>
  );
}
