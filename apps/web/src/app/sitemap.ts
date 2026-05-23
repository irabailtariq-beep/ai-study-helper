import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { CURRICULA } from "@ash/core";
import { POSTS } from "@/content/posts";

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
  // Account
  "/signin", "/settings",
];

// Subject-targeted SEO landing pages (matches user search patterns:
//   "help in study math", "help in study calculus", "help in study English", …)
const HELP_IN_STUDY_SUBJECTS = [
  "math", "english", "calculus", "physics", "chemistry", "biology",
  "history", "geography", "computer-science", "programming",
  "accounting", "economics",
];

// Programmatic /learn/<subject>/<board> matrix.
const LEARN_SUBJECTS = [
  "math", "physics", "chemistry", "biology", "english",
  "history", "geography", "economics", "computer-science",
  "accounting", "psychology", "general-science",
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

  // Subject-targeted /help-in-study/<subject> SEO pages (high-priority because they match user voice queries)
  for (const subject of HELP_IN_STUDY_SUBJECTS) {
    out.push({
      url: `${base}/help-in-study/${subject}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  // Programmatic /learn/<subject>/<board> matrix
  for (const subject of LEARN_SUBJECTS) {
    for (const c of CURRICULA) {
      out.push({
        url: `${base}/learn/${subject}/${c.id}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // Blog articles (60+)
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
