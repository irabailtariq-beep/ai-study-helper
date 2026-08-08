"use client";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";

const FOOTER_GROUPS = [
  {
    title: "Tools",
    links: [
      { href: "/explain", label: "Explain anything" },
      { href: "/chat", label: "AI chat tutor" },
      { href: "/transform", label: "Learn through what you love" },
      { href: "/math-solver", label: "Math solver" },
      { href: "/quiz", label: "Quiz me" },
      { href: "/tools", label: "All tools" },
    ],
  },
  {
    title: "More tools",
    links: [
      { href: "/mock-exam", label: "Mock exam" },
      { href: "/grade", label: "Mark my answer" },
      { href: "/flashcards", label: "Flashcards" },
      { href: "/lecture-summary", label: "Summarise anything" },
      { href: "/essay-coach", label: "Writing coach" },
    ],
  },
  {
    title: "Subjects",
    links: [
      { href: "/help-in-study/math", label: "Math help" },
      { href: "/help-in-study/english", label: "English help" },
      { href: "/help-in-study/physics", label: "Physics help" },
      { href: "/help-in-study/chemistry", label: "Chemistry help" },
      { href: "/help-in-study/biology", label: "Biology help" },
      { href: "/help-in-study/calculus", label: "Calculus help" },
      { href: "/help-in-study/history", label: "History help" },
      { href: "/help-in-study/geography", label: "Geography help" },
      // These four hubs previously had no inbound link anywhere on the site.
      { href: "/help-in-study/computer-science", label: "Computer science help" },
      { href: "/help-in-study/programming", label: "Programming help" },
      { href: "/help-in-study/economics", label: "Economics help" },
      { href: "/help-in-study/accounting", label: "Accounting help" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
      { href: "/progress", label: "My progress" },
      { href: "/feed.xml", label: "RSS feed" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/signin", label: "Sign in" },
      { href: "/settings", label: "Settings" },
    ],
  },
];

export function SiteFooter() {
  // Mobile collapsible state per group
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <footer
      className="mt-20 border-t"
      style={{ borderColor: "var(--ash-border)", background: "rgba(255,255,255,0.6)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Brand row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="Help in Study — home">
              <Logo size={36} />
            </Link>
            <p className="mt-3 text-sm max-w-md" style={{ color: "var(--ash-muted)" }}>
              A free AI study helper for any subject and any age. Snap a photo, paste a question,
              upload a PDF — get help in plain words, in your board's style.
            </p>
          </div>
          <div className="text-xs" style={{ color: "var(--ash-muted)" }}>
            Built for students worldwide. <span aria-hidden>·</span> Free forever.
          </div>
        </div>

        {/* Desktop link grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="font-semibold mb-3">{g.title}</h3>
              <ul className="space-y-2" style={{ color: "var(--ash-muted)" }}>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-[color:var(--ash-primary)]">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile collapsible accordions */}
        <div className="sm:hidden divide-y" style={{ borderColor: "var(--ash-border)" }}>
          {FOOTER_GROUPS.map((g) => {
            const open = openGroup === g.title;
            return (
              <div key={g.title}>
                <button
                  onClick={() => setOpenGroup(open ? null : g.title)}
                  className="w-full py-3 flex items-center justify-between text-left font-semibold"
                  aria-expanded={open}
                >
                  <span>{g.title}</span>
                  <span aria-hidden>{open ? "−" : "+"}</span>
                </button>
                {open && (
                  <ul className="pb-3 space-y-2 text-sm" style={{ color: "var(--ash-muted)" }}>
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row sm:justify-between gap-3 text-xs"
          style={{ borderColor: "var(--ash-border)", color: "var(--ash-muted)" }}
        >
          <div>© {new Date().getFullYear()} Help in Study</div>
          <div>AI can make mistakes. Always double-check important answers with your teacher or textbook.</div>
        </div>
      </div>
    </footer>
  );
}
