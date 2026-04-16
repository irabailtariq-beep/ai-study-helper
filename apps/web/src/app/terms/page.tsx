import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-3xl font-bold my-4">Terms of Use</h1>

      <section className="space-y-4 mt-6">
        <p>By using AI Study Helper you agree to these terms.</p>

        <h2 className="text-xl font-semibold">Use of the service</h2>
        <p>The app is a free study tool. You may use it for personal learning. You must not upload content that is illegal, harmful, or that you do not have the right to share (including copyrighted material you do not own).</p>

        <h2 className="text-xl font-semibold">AI accuracy</h2>
        <p>AI responses can be incorrect. You are responsible for verifying important answers. The app is not a substitute for qualified teachers or official textbooks.</p>

        <h2 className="text-xl font-semibold">No warranty</h2>
        <p>The service is provided "as is" without warranty of any kind. We are not liable for any loss arising from use of the service.</p>

        <h2 className="text-xl font-semibold">Changes</h2>
        <p>We may update these terms. Continued use of the service means you accept the updated terms.</p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Questions? <a href="mailto:support@ai-study-helper.app" className="underline">support@ai-study-helper.app</a></p>
      </section>
    </main>
  );
}
