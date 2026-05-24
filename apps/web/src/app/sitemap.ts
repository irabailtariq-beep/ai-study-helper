import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { POSTS } from "@/content/posts";
import { LEARN_COMBOS } from "@/content/learnPages";

const STATIC_PATHS = [
  "",
  // Onboarding & core tools
  "/onboarding", "/explain", "/transform", "/quiz", "/chat",
  "/syllabus", "/flashcards", "/progress", "/diagnostic",
  "/grade", "/concept-map", "/parent", "/classroom", "/teams", "/lms",
  "/math-solver", "/formula-sheet",
  // New tools
  "/essay-coach", "/vocab", "/translate", "/whiteboard",
  "/mock-exam", "/lecture-summary", "/problem-variants",
  "/calculator", "/graph-plotter",
  "/tools",
  // Marketing
  "/pricing", "/blog", "/about", "/contact",
  // Legal / compliance
  "/privacy", "/terms", "/refund-policy",
  // Account (signin only — /settings is robots-disallowed and shouldn't be in sitemap)
  "/signin",
];

// Subject-targeted SEO landing pages. Each page has hand-written, subject-specific
// long-form content — NOT a programmatic template — so they're worth indexing.
const HELP_IN_STUDY_SUBJECTS = [
  "math", "english", "calculus", "physics", "chemistry", "biology",
  "history", "geography", "computer-science", "programming",
  "accounting", "economics",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url.replace(/\/$/, "");
  const out: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1.0 : 0.7,
  }));

  // Subject-targeted /help-in-study/<subject> pages (high-priority — unique content per subject)
  for (const subject of HELP_IN_STUDY_SUBJECTS) {
    out.push({
      url: `${base}/help-in-study/${subject}`,
      lastModified: now,
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
      lastModified: now,
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
