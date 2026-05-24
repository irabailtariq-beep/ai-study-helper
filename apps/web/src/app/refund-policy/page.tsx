import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund policy",
  description: "Help in Study is 100% free — there are no payments and therefore no refunds.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicy() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-2xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Refund policy</h1>
      </header>

      <article className="prose-content text-sm leading-relaxed space-y-3">
        <p>
          Help in Study is <strong>100% free</strong>. We don't charge for anything, we don't take payment
          details, and we don't offer paid tiers. There is therefore nothing to refund.
        </p>
        <p>
          If a third-party service has charged you in our name, that is a scam — we never ask for payment.
          Please report it to your bank and forward the receipt to{" "}
          <Link href="/contact" style={{ color: "var(--ash-primary)" }}>our contact form</Link>.
        </p>
        <p>
          See also our{" "}
          <Link href="/pricing" style={{ color: "var(--ash-primary)" }}>pricing page</Link> (spoiler: it's $0).
        </p>
      </article>
    </main>
  );
}
