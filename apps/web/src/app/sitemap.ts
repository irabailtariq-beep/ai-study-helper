import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { POSTS } from "@/content/posts";
import { LEARN_COMBOS } from "@/content/learnPages";
import { EXAM_PAGES } from "@/content/examPages";
import { TOOL_LANDINGS } from "@/content/toolLandings";

const STATIC_PATHS = [
  "",
  // NOTE: /onboarding, /progress and /signin are deliberately NOT here. They are
  // app UI with no search intent, they are noindex, and listing them only spent
  // crawl budget and produced "duplicate, Google chose a different canonical".
  // The 10 tools
  "/explain", "/transform", "/chat",
  "/math-solver", "/quiz", "/mock-exam", "/grade",
  "/flashcards", "/lecture-summary", "/essay-coach",
  "/tools",
  // Marketing
  "/blog", "/about", "/contact",
  // Legal / compliance
  "/privacy", "/terms",
];

// Subject-targeted SEO landing pages. Each page has hand-written, subject-specific
// long-form content — NOT a programmatic template — so they're worth indexing.
const HELP_IN_STUDY_SUBJECTS = [
  "math", "english", "calculus", "physics", "chemistry", "biology",
  "history", "geography", "computer-science", "programming",
  "accounting", "economics",
];

// Last-modified dates.
//
// Using `new Date()` here was actively harmful: the blog robot deploys daily, so
// every URL claimed "modified today" on every crawl, and Google stops trusting a
// lastmod that is always now. The previous fix — four hand-set constants — was
// correct in principle but drifted in practice: content shipped on 31 Aug while
// the constants still said 7 and 30 Aug, so real content changes went unsignalled.
//
// So each record now carries its own `updatedAt`, exactly as POSTS already did,
// and these constants are only the fallback for records that have never declared
// one. Google uses lastmod to schedule RECRAWLS of URLs it already knows; it is
// not a discovery or ranking signal, so accuracy matters more than freshness.
// Bump a record's own updatedAt when its main content really changes.
const STATIC_UPDATED = new Date("2026-08-31"); // tool/marketing/legal pages
const HUBS_UPDATED = new Date("2026-08-07");   // /help-in-study/* subject hubs
const LEARN_UPDATED = new Date("2026-08-31");  // /learn/* board combos
const EXAM_UPDATED = new Date("2026-08-31");   // exam-structure + landing pages

/** A record's own updatedAt when it declares one, else the group fallback. */
const modified = (updatedAt: string | undefined, fallback: Date) =>
  updatedAt ? new Date(updatedAt) : fallback;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const out: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: STATIC_UPDATED,
  }));

  // Subject-targeted /help-in-study/<subject> pages (high-priority — unique content per subject)
  for (const subject of HELP_IN_STUDY_SUBJECTS) {
    out.push({
      url: `${base}/help-in-study/${subject}`,
      lastModified: HUBS_UPDATED,
    });
  }

  // /learn/<subject>/<board> — only the curated combos we've written unique content for.
  // Previous version emitted 1,548 near-duplicate URLs; Google would mark most as
  // "Crawled — currently not indexed". The trimmed list reflects only combos with
  // hand-written, board-specific content in apps/web/src/content/learnPages.ts.
  for (const combo of LEARN_COMBOS) {
    out.push({
      url: `${base}/learn/${combo.subject}/${combo.board}`,
      lastModified: modified(combo.updatedAt, LEARN_UPDATED),
    });
  }

  // Board hub index pages
  for (const b of ["cbse", "gcse", "waec", "ap", "cambridge"]) {
    out.push({ url: `${base}/${b}`, lastModified: EXAM_UPDATED });
  }

  // Exam-structure pages (question families, practice sets, calculators) —
  // the highest-priority content per the 2026-08-24 research.
  for (const p of EXAM_PAGES) {
    out.push({
      url: `${base}/${p.board}/${p.slug}`,
      lastModified: modified(p.updatedAt, EXAM_UPDATED),
    });
  }

  // Query-matched tool landing pages
  for (const p of TOOL_LANDINGS) {
    out.push({
      url: `${base}/tools/${p.slug}`,
      lastModified: modified(p.updatedAt, EXAM_UPDATED),
    });
  }

  // Blog articles
  for (const p of POSTS) {
    out.push({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
    });
  }

  return out;
}
