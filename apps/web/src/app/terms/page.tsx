import type { Metadata } from "next";
import Link from "next/link";

const title = "Terms of Use";
const description = "The terms for using Help in Study — a free AI study tool. What you may use it for, the limits of AI accuracy, and how to get in touch.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/terms" },
  openGraph: { title, description, url: "https://helpinstudy.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-3xl font-bold my-4">Terms of Use</h1>
      <p className="text-sm" style={{ color: "var(--ash-muted)" }}>Last updated: 1 September 2026</p>

      <section className="space-y-4 mt-6">
        <p>By using Help in Study you agree to these terms.</p>

        <h2 className="text-xl font-semibold">Use of the service</h2>
        <p>The app is a free study tool. You may use it for personal learning. You must not upload content that is illegal, harmful, or that you do not have the right to share (including copyrighted material you do not own).</p>

        <h2 className="text-xl font-semibold">AI accuracy</h2>
        <p>AI responses can be incorrect. You are responsible for verifying important answers. The app is not a substitute for qualified teachers or official textbooks.</p>

        <h2 className="text-xl font-semibold">No warranty</h2>
        <p>The service is provided "as is" without warranty of any kind. We are not liable for any loss arising from use of the service.</p>

        <h2 className="text-xl font-semibold">Changes</h2>
        <p>We may update these terms. Continued use of the service means you accept the updated terms.</p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Questions? <a href="mailto:raistudyhelper@gmail.com" className="underline">raistudyhelper@gmail.com</a></p>
      </section>
    </main>
  );
}
