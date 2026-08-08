"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Surfaced in the Vercel logs so a recurring failure is findable.
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="min-h-screen px-6 py-20 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Something went wrong</h1>
      <p className="mt-4 text-base" style={{ color: "var(--ash-muted)" }}>
        That&apos;s on us, not you. Try again — it usually works second time. If it keeps happening,
        tell me at{" "}
        <a href="mailto:raistudyhelper@gmail.com" className="underline" style={{ color: "var(--ash-primary)" }}>
          raistudyhelper@gmail.com
        </a>{" "}
        and I&apos;ll fix it.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-full text-white font-semibold"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}
        >
          Try again
        </button>
        <Link
          href="/tools"
          className="px-6 py-3 rounded-full border font-semibold"
          style={{ borderColor: "var(--ash-border)" }}
        >
          Back to the tools
        </Link>
      </div>

      {error.digest && (
        <p className="mt-8 text-xs" style={{ color: "var(--ash-muted)" }}>
          Reference: {error.digest}
        </p>
      )}
    </main>
  );
}
