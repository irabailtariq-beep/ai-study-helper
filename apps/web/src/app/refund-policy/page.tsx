import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Refund policy — Help in Study",
  description: "Help in Study refund policy: 14-day money-back guarantee on Pro and Family plans. Free plan is free forever.",
  alternates: { canonical: "/refund-policy" },
  openGraph: { title: "Refund policy — Help in Study", description: "14-day money-back guarantee.", url: `${SITE.url}/refund-policy` },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-3xl font-extrabold mt-4 mb-2 tracking-tight">Refund policy</h1>
      <p className="text-sm mb-8" style={{ color: "var(--ash-muted)" }}>Effective: {new Date().getFullYear()}</p>

      <section className="space-y-5">
        <div className="glass-panel p-5 rounded-2xl">
          <h2 className="text-xl font-bold">14-day money-back guarantee</h2>
          <p className="mt-2 text-sm leading-relaxed">
            If you're not happy with Pro or Family within 14 days of your first purchase, email{" "}
            <a className="underline" href="mailto:support@helpinstudy.com">support@helpinstudy.com</a> and
            we'll refund you in full — no questions asked.
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <h2 className="text-lg font-bold">Free plan</h2>
          <p className="mt-2 text-sm leading-relaxed">
            The free plan is free forever. Nothing to refund.
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <h2 className="text-lg font-bold">Cancellations</h2>
          <p className="mt-2 text-sm leading-relaxed">
            You can cancel any paid plan from <Link href="/settings" className="underline">Settings</Link> at any time.
            After cancellation you keep access through the end of the current billing period.
            We don't charge cancellation fees.
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <h2 className="text-lg font-bold">Renewals</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Pro and Family auto-renew monthly or yearly depending on the plan you chose.
            We send a reminder email 7 days before any annual renewal.
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <h2 className="text-lg font-bold">App-store purchases</h2>
          <p className="mt-2 text-sm leading-relaxed">
            If you bought a subscription through the iOS App Store or Google Play, refunds are handled by
            Apple / Google and follow their refund policies. We can't issue refunds for App Store purchases ourselves.
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <h2 className="text-lg font-bold">Questions?</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Email <a className="underline" href="mailto:support@helpinstudy.com">support@helpinstudy.com</a>
            {" "}— we read every message.
          </p>
        </div>
      </section>
    </main>
  );
}
