import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { POSTS } from "@/content/posts";
import { LEARN_COMBOS } from "@/content/learnPages";

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

// Stable last-modified dates for pages whose content does NOT change on every
// deploy. Using `new Date()` here was actively harmful: the blog robot deploys
// twice a day, so every one of these URLs claimed "modified today" on every
// crawl. Google treats a sitemap whose lastmod is always "now" as untrustworthy
// and stops relying on it. Bump these by hand when the content really changes.
const STATIC_UPDATED = new Date("2026-08-07"); // tool/marketing/legal pages
const HUBS_UPDATED = new Date("2026-08-07");   // /help-in-study/* subject hubs
const LEARN_UPDATED = new Date("2026-08-07");  // /learn/* board combos

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const out: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: STATIC_UPDATED,
    changeFrequency: "weekly",
    priority: p === "" ? 1.0 : 0.7,
  }));

  // Subject-targeted /help-in-study/<subject> pages (high-priority — unique content per subject)
  for (const subject of HELP_IN_STUDY_SUBJECTS) {
    out.push({
      url: `${base}/help-in-study/${subject}`,
      lastModified: HUBS_UPDATED,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  // /learn/<subject>/<board> — only the curated combos we've written unique content for.
  // Previous version emitted 1,548 near-duplicate URLs; Google would mark most as
  // "Crawled — currently not indexed". The trimmed list reflects only combos with
  // hand-written, board-specific content in apps/web/src/content/learnPages.ts.
  for (const combo of LEARN_COMBOS) {
    out.push({
      url: `${base}/learn/${combo.subject}/${combo.board}`,
      lastModified: LEARN_UPDATED,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  // Blog articles
  for (const p of POSTS) {
    out.push({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return out;
}
