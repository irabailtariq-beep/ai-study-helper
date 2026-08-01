import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Help in Study — a free AI study helper for every subject",
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
          Help in Study (<b>helpinstudy.com</b>) is a free AI study helper for students aged 6–25.
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

        <h2 className="text-2xl font-bold mt-8">Who's behind Help in Study</h2>
        <p className="text-base leading-relaxed">
          Hi — I'm <b>Rabail</b>, and I'm a student myself (working through IGCSE and A-Levels). History is my
          favourite subject and English is my strongest — but I know exactly how it feels to be stuck in a topic
          with no tutor you can afford and no time to spare. What finally worked for me was getting things explained
          in plain language, in my own exam's style. So I built the study help I wish I'd had — for students who are
          struggling and just need a real hand, not a lecture.
        </p>
        <p className="text-base leading-relaxed">
          One thing matters to me a lot: I didn't build this so you could copy answers and switch your brain off.
          I built it so you'd <b>actually get it</b>. Every tool shows you the method, the working, and the <i>why</i> —
          so you do the real work, understand it properly, and walk into the exam able to do it on your own.
          Learning it beats cheating it, every single time.
        </p>
        <p className="text-base leading-relaxed">
          And it's <b>genuinely free</b> — no "free" that asks for your card three screens in. Plenty of study
          sites say free and quietly aren't. Help in Study actually is, and it stays that way.
        </p>
        <p className="text-base leading-relaxed">
          Everything here is written and checked by a real person — me — not spun up and left to rot. If something's
          wrong or could be clearer, <Link href="/contact" className="underline" style={{ color: "var(--ash-primary)" }}>tell me</Link>; I read every message.
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
