import Link from "next/link";
import type { Metadata } from "next";
import { POSTS } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog · Study tips, AI tutor guides, exam-prep",
  description: "Evidence-based study tips, board-specific exam prep guides, and how-to articles for getting the most out of your AI tutor.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <header className="mt-4 mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Study notes</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--ash-muted)" }}>
          Evidence-based study tips, board-specific exam prep, and AI-tutor playbooks.
        </p>
      </header>

      <ul className="space-y-3">
        {[...POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)).map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="block glass-panel rounded-ash p-5 hover:-translate-y-0.5 transition">
              <h2 className="text-lg font-bold">{p.title}</h2>
              <p className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>{p.description}</p>
              <p className="text-xs mt-2" style={{ color: "var(--ash-muted)" }}>
                {new Date(p.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })} · {p.readTime}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
