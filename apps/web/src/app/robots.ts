import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const base = SITE.url.replace(/\/$/, "");
  return {
    rules: [
      // Default: allow everything except the JSON API and signed-in pages.
      // AI training crawlers (GPTBot, Google-Extended, ClaudeBot, anthropic-ai, CCBot)
      // are deliberately ALLOWED so the site can be cited by ChatGPT / Claude /
      // Perplexity / Google AI Overviews when students ask for study help.
      { userAgent: "*", allow: "/", disallow: ["/api/", "/settings"] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
