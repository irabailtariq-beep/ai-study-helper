import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-2xl mx-auto text-center">
      <p className="text-sm font-semibold" style={{ color: "var(--ash-primary)" }}>404</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
        That page doesn&apos;t exist
      </h1>
      <p className="mt-4 text-base" style={{ color: "var(--ash-muted)" }}>
        The link may be old, or the page may have moved. Everything on Help in Study is free, so
        nothing here is behind a login — try one of these instead.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
        <Card href="/tools" title="All 10 tools" sub="Explain, solve, quiz, mark, and more" />
        <Card href="/blog" title="Revision guides" sub="Exam technique, worked examples" />
        <Card href="/explain" title="Explain anything" sub="Photo, PDF, or paste a question" />
        <Card href="/math-solver" title="Math solver" sub="Every line of working shown" />
      </div>

      <p className="mt-10 text-sm">
        <Link href="/" className="underline" style={{ color: "var(--ash-primary)" }}>
          Back to the homepage
        </Link>
      </p>
    </main>
  );
}

function Card({ href, title, sub }: { href: string; title: string; sub: string }) {
  return (
    <Link href={href} className="glass-panel rounded-2xl p-4 hover:-translate-y-0.5 transition block">
      <div className="font-semibold">{title} →</div>
      <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>{sub}</p>
    </Link>
  );
}
