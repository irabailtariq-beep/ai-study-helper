import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Help in Study",
  description: "Get in touch with Help in Study — support, feedback, partnerships, press.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Help in Study", description: "Get in touch.", url: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-2xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact us</h1>
        <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>
          We read every message — usually reply within 1–2 business days.
        </p>
      </header>

      <section className="space-y-4">
        <Card title="Support / bug reports" email="support@helpinstudy.com" />
        <Card title="Privacy & data requests" email="privacy@helpinstudy.com" />
        <Card title="Security" email="security@helpinstudy.com" sub="Or use security.txt" />
        <Card title="Schools & partnerships" email="partners@helpinstudy.com" />
        <Card title="Press / media" email="press@helpinstudy.com" />
        <Card title="Anything else" email="hello@helpinstudy.com" />
      </section>

      <p className="text-xs mt-10" style={{ color: "var(--ash-muted)" }}>
        Help in Study · <Link href="/about" className="underline">About</Link> ·{" "}
        <Link href="/privacy" className="underline">Privacy</Link> ·{" "}
        <Link href="/terms" className="underline">Terms</Link>
      </p>
    </main>
  );
}

function Card({ title, email, sub }: { title: string; email: string; sub?: string }) {
  return (
    <div className="glass-panel rounded-2xl p-5">
      <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--ash-muted)", letterSpacing: "0.2em" }}>{title}</div>
      <a href={`mailto:${email}`} className="font-semibold underline" style={{ color: "var(--ash-primary)" }}>{email}</a>
      {sub && <div className="text-xs mt-1" style={{ color: "var(--ash-muted)" }}>{sub}</div>}
    </div>
  );
}
