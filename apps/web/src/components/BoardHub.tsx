import Link from "next/link";
import type { ExamPage } from "@/content/examPages";
import { examPagesByBoard } from "@/content/examPages";
import { breadcrumbJsonLd, jsonLdSafe } from "@/lib/seo";

export type BoardHubConfig = {
  board: ExamPage["board"];
  label: string;
  title: string;        // <title>
  description: string;  // meta description
  h1: string;
  intro: string;
  /** the tools most useful for this board's students */
  tools: { href: string; label: string; why: string }[];
};

/**
 * Board index page (/cbse, /gcse, /waec, /ap, /cambridge): every exam-structure
 * page for the board in one place. These are the pages the exam-page
 * breadcrumbs point at, and the crawl path that keeps the exam layer from
 * being sitemap-only.
 */
export function BoardHub({ cfg }: { cfg: BoardHubConfig }) {
  const pages = examPagesByBoard(cfg.board);
  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSafe(breadcrumbJsonLd([
        { name: cfg.label, path: `/${cfg.board}` },
      ])) }} />

      <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.25em" }}>
        Exam practice
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">{cfg.h1}</h1>
      <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--ash-text)" }}>{cfg.intro}</p>

      <section className="mt-8">
        <h2 className="text-xl font-bold mb-3">Practice pages, solved step by step</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {pages.map((p) => (
            <Link key={p.slug} href={`/${p.board}/${p.slug}`} className="glass-panel rounded-2xl p-4 hover:-translate-y-0.5 transition block">
              <div className="font-semibold text-sm">{p.h1} →</div>
              <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>{p.metaDescription.slice(0, 90)}…</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold mb-3">Free tools for {cfg.label} students</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {cfg.tools.map((t) => (
            <Link key={t.href} href={t.href} className="glass-panel rounded-2xl p-4 hover:-translate-y-0.5 transition block">
              <div className="font-semibold text-sm">{t.label} →</div>
              <p className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>{t.why}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
