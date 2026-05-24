import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { findPost, POSTS } from "@/content/posts";
import { SITE, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = findPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.description,
      url: `${SITE.url}/blog/${p.slug}`,
      publishedTime: p.publishedAt,
      modifiedTime: p.updatedAt ?? p.publishedAt,
      tags: p.tags,
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const p = findPost(slug);
  if (!p) notFound();

  const html = renderMarkdown(p.body);

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({
        title: p.title, description: p.description, slug: p.slug, published: p.publishedAt, updated: p.updatedAt,
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
        { name: "Blog", path: "/blog" },
        { name: p.title, path: `/blog/${p.slug}` },
      ])) }} />

      <Link href="/blog" className="text-sm" style={{ color: "var(--ash-primary)" }}>← All posts</Link>

      <article className="mt-4">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight">{p.title}</h1>
          <p className="text-sm mt-2" style={{ color: "var(--ash-muted)" }}>
            {new Date(p.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })} · {p.readTime} · {p.tags.join(" · ")}
          </p>
        </header>

        <div className="prose-content" dangerouslySetInnerHTML={{ __html: html }} />

        <footer className="mt-10 glass-panel rounded-ash p-5 text-center">
          <p className="font-semibold mb-2">Try the free AI tutor</p>
          <Link href="/onboarding" className="inline-block px-5 py-2 rounded-ash text-white font-semibold"
                style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
            Start free
          </Link>
        </footer>
      </article>

      <style>{`
        .prose-content { font-size: 16px; line-height: 1.7; }
        .prose-content h2 { font-size: 22px; font-weight: 700; margin: 1.6em 0 0.5em; }
        .prose-content h3 { font-size: 18px; font-weight: 600; margin: 1.2em 0 0.4em; }
        .prose-content p  { margin: 0.7em 0; }
        .prose-content ul, .prose-content ol { margin: 0.7em 0 0.7em 1.4em; }
        .prose-content li { margin: 0.3em 0; }
        .prose-content a { color: var(--ash-primary); text-decoration: underline; }
        .prose-content code { background: rgba(0,0,0,0.06); padding: 1px 4px; border-radius: 4px; font-size: 0.92em; }
        .prose-content strong { font-weight: 700; }
      `}</style>
    </main>
  );
}

// ─────────── tiny markdown renderer (no runtime dep)
function renderMarkdown(src: string): string {
  // Escape HTML
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const lines = src.split("\n");
  const out: string[] = [];
  let inUL = false, inOL = false;

  const flush = () => {
    if (inUL) { out.push("</ul>"); inUL = false; }
    if (inOL) { out.push("</ol>"); inOL = false; }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) { flush(); continue; }

    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) { flush(); const lvl = h[1].length; out.push(`<h${lvl}>${inline(h[2])}</h${lvl}>`); continue; }

    if (/^- /.test(line)) {
      if (!inUL) { flush(); out.push("<ul>"); inUL = true; }
      out.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      if (!inOL) { flush(); out.push("<ol>"); inOL = true; }
      out.push(`<li>${inline(line.replace(/^\d+\.\s/, ""))}</li>`);
      continue;
    }
    flush();
    out.push(`<p>${inline(line)}</p>`);
  }
  flush();
  return out.join("\n");

  function inline(s: string): string {
    s = esc(s);
    // bold **x**
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // italic *x*
    s = s.replace(/(^|\W)\*([^*]+)\*(\W|$)/g, "$1<em>$2</em>$3");
    // code `x`
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    // links [t](url)
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    return s;
  }
}
