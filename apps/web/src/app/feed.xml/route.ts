// RSS 2.0 feed of the blog — enables Google Discover "Follow", Bing, Feedly/Flipboard, and AI agents.
// Regenerates on every deploy from the POSTS array. No maintenance.
import { POSTS } from "@/content/posts";
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function GET() {
  const base = SITE.url.replace(/\/$/, "");
  const items = [...POSTS]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 50)
    .map((p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${base}/blog/${p.slug}</link>
      <guid isPermaLink="true">${base}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.publishedAt + "T09:00:00Z").toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.name)} — Blog</title>
    <link>${base}/blog</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Free, exam-board-specific study guides for CBSE, GCSE, AP, Cambridge and WAEC students.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
