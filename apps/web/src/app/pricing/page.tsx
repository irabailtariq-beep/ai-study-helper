"use client";
import { useState } from "react";
import Link from "next/link";
import { PLANS, type PlanId } from "@/lib/plans";

export default function PricingPage() {
  const [yearly, setYearly] = useState(true);
  const order: PlanId[] = ["free", "pro", "family"];

  return (
    <main className="min-h-screen px-6 py-10 max-w-5xl mx-auto">
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="text-center mt-4 mb-10">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.25em" }}>
          Simple pricing
        </p>
        <h1
          className="font-extrabold leading-tight tracking-tight mt-3"
          style={{
            fontSize: "clamp(36px, 6vw, 60px)",
            backgroundImage: "linear-gradient(120deg, #4F46E5 0%, #7c3aed 50%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Start free. Upgrade when you're ready.
        </h1>
        <p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto" style={{ color: "var(--ash-muted)" }}>
          Free is genuinely free — no credit card. Pro removes ads and limits, unlocks essay coach and concept
          maps. Family adds 5 student profiles and a parent dashboard.
        </p>

        <div className="inline-flex items-center mt-6 rounded-full p-1" style={{ background: "rgba(255,255,255,0.65)", border: "1px solid var(--ash-border)" }}>
          <button onClick={() => setYearly(false)}
            className="px-4 py-1.5 text-sm rounded-full"
            style={{
              background: !yearly ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "transparent",
              color: !yearly ? "white" : "var(--ash-text)",
            }}>
            Monthly
          </button>
          <button onClick={() => setYearly(true)}
            className="px-4 py-1.5 text-sm rounded-full"
            style={{
              background: yearly ? "linear-gradient(135deg, var(--ash-primary), #7c3aed)" : "transparent",
              color: yearly ? "white" : "var(--ash-text)",
            }}>
            Yearly <span className="text-xs ml-1 opacity-90">save ~35%</span>
          </button>
        </div>
      </header>

      <section className="grid gap-5 md:grid-cols-3">
        {order.map((id) => {
          const p = PLANS[id];
          const price = yearly ? p.priceYearly : p.priceMonthly;
          const per = yearly ? "/yr" : "/mo";
          return (
            <div
              key={p.id}
              className="rounded-ash p-6 relative"
              style={{
                background: p.popular ? "linear-gradient(135deg, #4F46E5 0%, #7c3aed 50%, #06b6d4 100%)" : "var(--ash-surface)",
                color: p.popular ? "white" : "var(--ash-text)",
                border: p.popular ? "none" : "1px solid var(--ash-border)",
                boxShadow: p.popular ? "var(--ash-shadow)" : "var(--ash-shadow-soft)",
              }}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest" style={{ color: "#4F46E5", letterSpacing: "0.2em" }}>
                  Most popular
                </div>
              )}
              <h2 className="text-2xl font-bold">{p.name}</h2>
              <div className="mt-3 mb-1">
                <span className="text-4xl font-extrabold">${price}</span>
                <span className="text-sm opacity-80 ml-1">{p.priceMonthly === 0 ? "forever" : per}</span>
              </div>
              {yearly && p.priceMonthly > 0 && (
                <p className="text-xs opacity-80 mb-4">
                  ≈ ${(p.priceYearly / 12).toFixed(2)}/mo billed yearly
                </p>
              )}
              {!yearly && p.priceYearly > 0 && (
                <p className="text-xs opacity-80 mb-4">${p.priceYearly}/yr available</p>
              )}

              <ul className="text-sm space-y-2 mb-6 mt-2">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span aria-hidden>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {p.priceMonthly === 0 ? (
                <Link href="/onboarding"
                  className="block text-center px-4 py-3 rounded-ash font-semibold"
                  style={{
                    background: p.popular ? "white" : "var(--ash-text)",
                    color: p.popular ? "#4F46E5" : "white",
                  }}>
                  Start free
                </Link>
              ) : (
                <button
                  className="w-full px-4 py-3 rounded-ash font-semibold"
                  style={{
                    background: p.popular ? "white" : "linear-gradient(135deg, var(--ash-primary), #7c3aed)",
                    color: p.popular ? "#4F46E5" : "white",
                    cursor: "not-allowed",
                    opacity: 0.85,
                  }}
                  title="Stripe checkout coming soon"
                >
                  Coming soon
                </button>
              )}
            </div>
          );
        })}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Frequently asked questions</h2>
        <div className="space-y-3">
          <details className="glass-panel rounded-ash p-4"><summary className="font-semibold cursor-pointer">Is the free plan really free?</summary><p className="mt-2 text-sm">Yes. No card required, no time limit. We earn from optional ads on the free tier and from Pro / Family subscriptions.</p></details>
          <details className="glass-panel rounded-ash p-4"><summary className="font-semibold cursor-pointer">What happens to my data if I cancel?</summary><p className="mt-2 text-sm">Nothing — you keep guest-mode access and can export everything from Settings any time. We never sell student data.</p></details>
          <details className="glass-panel rounded-ash p-4"><summary className="font-semibold cursor-pointer">How is this different from ChatGPT?</summary><p className="mt-2 text-sm">We're built around your school context: country, board, grade, and your personal interests. Every reply is shaped by all four. Plus we generate quizzes, flashcards, study plans, concept maps and parent recaps from any material — ChatGPT doesn't.</p></details>
          <details className="glass-panel rounded-ash p-4"><summary className="font-semibold cursor-pointer">Can a school buy this for a class?</summary><p className="mt-2 text-sm">Family covers up to 5 students. For 10+ seats, contact us — we'll set up a school plan with admin tools.</p></details>
          <details className="glass-panel rounded-ash p-4"><summary className="font-semibold cursor-pointer">Which curricula do you support?</summary><p className="mt-2 text-sm">CBSE, ICSE, all Indian state boards; Pakistan Federal/Punjab/Sindh/KPK + AKU-EB; UK National Curriculum + GCSE/A-Level (AQA, Edexcel, OCR, WJEC, CCEA, SQA); US Common Core, AP, SAT/ACT, state standards; IB PYP/MYP/DP; Cambridge IGCSE/O/A; Edexcel International; Australian Curriculum + VCE/HSC/QCE/WACE; NZ NCEA; Brazilian BNCC + ENEM; WAEC, NECO, KCSE, NSC, plus dozens more.</p></details>
        </div>
      </section>
    </main>
  );
}
