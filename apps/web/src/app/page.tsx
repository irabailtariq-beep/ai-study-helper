"use client";
import Link from "next/link";
import { useProfile } from "@/lib/profileStore";

export default function Home() {
  const profile = useProfile((s) => s.profile);
  const hasProfile = Boolean(profile);

  const actions = [
    { label: "Explain", glyph: "E", href: hasProfile ? "/explain" : "/onboarding" },
    { label: "Quiz Me", glyph: "Q", href: hasProfile ? "/quiz" : "/onboarding" },
    { label: "Chat Tutor", glyph: "C", href: hasProfile ? "/chat" : "/onboarding" },
    { label: "Past Papers", glyph: "P", href: hasProfile ? "/past-papers" : "/onboarding" },
    { label: "Personal Explain", glyph: "PE", href: hasProfile ? "/personal-explain" : "/onboarding" },
  ] as const;

  return (
    <main className="min-h-screen px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-xl text-center">
        <div className="glass-panel rounded-[28px] p-6 sm:p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}
            >
              AI
            </div>
            <div className="text-left">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: "var(--ash-muted)" }}>
                AI Study Helper
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold">Study faster</h1>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-semibold">Choose an action</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {actions.map((a, idx) => (
              <Link
                key={a.label}
                href={a.href}
                className={`soft-panel rounded-[24px] px-5 py-5 text-left hover:-translate-y-0.5 ${
                  idx === actions.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}
                  >
                    {a.glyph}
                  </div>
                  <div className="font-semibold text-base">{a.label}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
