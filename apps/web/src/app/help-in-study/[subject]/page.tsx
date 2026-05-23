import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE, faqJsonLd } from "@/lib/seo";

const SUBJECTS: Record<string, { label: string; emoji: string; tagline: string; topics: string[]; sample: string }> = {
  math: {
    label: "Math",
    emoji: "🧮",
    tagline: "Help in study math — step by step, every time",
    topics: ["Algebra", "Geometry", "Trigonometry", "Statistics", "Probability", "Number theory", "Word problems"],
    sample: "Solve 2x² − 3x − 5 = 0 using the quadratic formula.",
  },
  english: {
    label: "English",
    emoji: "📚",
    tagline: "Help in study English — comprehension, grammar, essays",
    topics: ["Grammar", "Vocabulary", "Comprehension", "Essay writing", "Poetry analysis", "Shakespeare", "Creative writing"],
    sample: "Explain the central theme of \"Romeo and Juliet\" in 3 paragraphs.",
  },
  calculus: {
    label: "Calculus",
    emoji: "∫",
    tagline: "Help in study calculus — limits, derivatives, integrals, every step shown",
    topics: ["Limits", "Continuity", "Derivatives", "Chain rule", "Integration techniques", "Series", "Differential equations"],
    sample: "Find d/dx of (3x² + 2x)·sin(x) using the product rule.",
  },
  physics: {
    label: "Physics",
    emoji: "🪐",
    tagline: "Help in study physics — kinematics, forces, waves, fields",
    topics: ["Kinematics", "Newton's laws", "Energy and momentum", "Waves", "Electricity and magnetism", "Optics", "Thermodynamics"],
    sample: "A 5 kg box slides down a 30° incline with friction μ=0.2. Find its acceleration.",
  },
  chemistry: {
    label: "Chemistry",
    emoji: "⚗️",
    tagline: "Help in study chemistry — balancing, bonding, reactions, organic mechanisms",
    topics: ["Atomic structure", "Periodic trends", "Bonding", "Stoichiometry", "Acids and bases", "Organic chemistry", "Equilibrium"],
    sample: "Balance: KMnO₄ + HCl → KCl + MnCl₂ + Cl₂ + H₂O",
  },
  biology: {
    label: "Biology",
    emoji: "🧬",
    tagline: "Help in study biology — cells, genetics, ecosystems, exam answers",
    topics: ["Cell biology", "Genetics", "Photosynthesis", "Respiration", "Evolution", "Human anatomy", "Ecology"],
    sample: "Explain the light-dependent reactions of photosynthesis in 6 marks.",
  },
  history: {
    label: "History",
    emoji: "📜",
    tagline: "Help in study history — sources, essays, exam-ready timelines",
    topics: ["Source analysis", "Essay structure", "World War I & II", "Cold War", "Independence movements", "Political theory"],
    sample: "Why did the Cold War end? Plan a 12-mark essay.",
  },
  geography: {
    label: "Geography",
    emoji: "🌍",
    tagline: "Help in study geography — climate, urbanisation, case studies",
    topics: ["Plate tectonics", "Climate", "Urbanisation", "Population", "Development", "Case studies", "Maps and GIS"],
    sample: "Compare the impacts of an LIC and HIC earthquake using named case studies.",
  },
  "computer-science": {
    label: "Computer science",
    emoji: "💻",
    tagline: "Help in study computer science — algorithms, networks, data structures",
    topics: ["Algorithms", "Big-O", "Data structures", "Databases", "Networks", "Operating systems", "Computer ethics"],
    sample: "Trace bubble sort on [5, 1, 4, 2, 8] and state its time complexity.",
  },
  programming: {
    label: "Programming",
    emoji: "{ }",
    tagline: "Help in study programming — Python, Java, JavaScript, debugging",
    topics: ["Variables", "Loops", "Functions", "OOP", "Recursion", "File I/O", "Debugging", "Pseudocode"],
    sample: "Write a Python function that returns the Fibonacci sequence up to n.",
  },
  accounting: {
    label: "Accounting",
    emoji: "💼",
    tagline: "Help in study accounting — journals, ledgers, ratios, exam questions",
    topics: ["Double-entry", "Trial balance", "Income statement", "Balance sheet", "Cash flow", "Ratios", "Cost accounting"],
    sample: "Prepare a trial balance from these 8 transactions and identify errors.",
  },
  economics: {
    label: "Economics",
    emoji: "📈",
    tagline: "Help in study economics — micro, macro, diagrams, essay structure",
    topics: ["Demand and supply", "Elasticity", "Market structures", "GDP", "Inflation", "Trade", "Development"],
    sample: "Explain how a price ceiling on rent affects the housing market. Use a diagram.",
  },
};

type Props = { params: Promise<{ subject: string }> };

export async function generateStaticParams() {
  return Object.keys(SUBJECTS).map((subject) => ({ subject }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject } = await params;
  const s = SUBJECTS[subject];
  if (!s) return {};
  const title = `Help in study ${s.label.toLowerCase()} — free AI study helper`;
  const description = `Free AI ${s.label.toLowerCase()} tutor. Snap a photo or paste a question — get a step-by-step explanation in your level. ${s.topics.slice(0, 4).join(", ")} and more.`;
  return {
    title,
    description,
    alternates: { canonical: `/help-in-study/${subject}` },
    keywords: [
      `help in study ${s.label.toLowerCase()}`,
      `AI study helper ${s.label.toLowerCase()}`,
      `${s.label.toLowerCase()} help AI`,
      `free ${s.label.toLowerCase()} tutor`,
      `${s.label.toLowerCase()} homework help`,
      `AI ${s.label.toLowerCase()} solver`,
      `step by step ${s.label.toLowerCase()}`,
    ],
    openGraph: {
      title, description, url: `${SITE.url}/help-in-study/${subject}`,
      images: [{
        url: `/api/og?title=${encodeURIComponent(`Help in study ${s.label.toLowerCase()}`)}&subtitle=${encodeURIComponent(s.tagline)}&tag=${encodeURIComponent("AI study helper")}`,
        width: 1200, height: 630,
      }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function SubjectPage({ params }: Props) {
  const { subject } = await params;
  const s = SUBJECTS[subject];
  if (!s) notFound();

  const faqs = [
    {
      question: `Is the AI ${s.label.toLowerCase()} tutor free?`,
      answer: `Yes. Free plan: 10 explanations + 50 chat messages a day. No credit card. Pro ($4.99/mo) unlocks unlimited usage and removes ads.`,
    },
    {
      question: `Can it help with ${s.label.toLowerCase()} homework?`,
      answer: `Yes — paste a question, snap a textbook page, or upload a PDF. Our AI explains the concept and shows working step by step in your board's style.`,
    },
    {
      question: `Does it work with my school's curriculum?`,
      answer: `We support 80+ curricula including CBSE, ICSE, Cambridge IGCSE, IB, GCSE / A-Level (AQA, Edexcel, OCR), AP, and many more. Set your board once during onboarding — every reply respects it.`,
    },
    {
      question: `Will it just give me the answer?`,
      answer: `No. Help in Study explains the method, shows every line of working, names the technique, and flags common pitfalls. The goal is for you to learn, not copy.`,
    },
  ];

  return (
    <main className="min-h-screen px-6 py-10 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>

      <header className="mt-4 mb-8">
        <p className="uppercase tracking-widest text-xs font-semibold" style={{ color: "var(--ash-primary)", letterSpacing: "0.3em" }}>
          {s.emoji}  Help in study · {s.label}
        </p>
        <h1
          className="font-extrabold tracking-tight mt-3"
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            backgroundImage: "linear-gradient(120deg, #4F46E5, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          {s.tagline}
        </h1>
        <p className="mt-3 text-base" style={{ color: "var(--ash-muted)" }}>
          Free AI study helper for {s.label.toLowerCase()}. Snap a photo, drop a PDF, or paste your question —
          we explain it at your level and remember what your school's syllabus expects.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/onboarding" className="px-6 py-3 rounded-full text-white font-semibold"
            style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
            Start free →
          </Link>
          <Link href="/transform" className="px-6 py-3 rounded-full border font-semibold"
            style={{ borderColor: "var(--ash-border)" }}>
            Reframe through my interests
          </Link>
        </div>
      </header>

      <section className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="glass-panel p-5 rounded-2xl">
          <div className="text-2xl mb-1">🧠</div>
          <h2 className="font-semibold">Step-by-step explanations</h2>
          <p className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>
            Every line of working. Every formula named. Every pitfall flagged.
          </p>
        </div>
        <div className="glass-panel p-5 rounded-2xl">
          <div className="text-2xl mb-1">🎯</div>
          <h2 className="font-semibold">Diagnostic + plan</h2>
          <p className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>
            10 questions → a personalised 7-day plan that targets what you actually need.
          </p>
        </div>
        <div className="glass-panel p-5 rounded-2xl">
          <div className="text-2xl mb-1">🃏</div>
          <h2 className="font-semibold">Spaced-repetition flashcards</h2>
          <p className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>
            Auto-generated from any {s.label.toLowerCase()} material. Reviews at the right interval.
          </p>
        </div>
        <div className="glass-panel p-5 rounded-2xl">
          <div className="text-2xl mb-1">✨</div>
          <h2 className="font-semibold">Through what you love</h2>
          <p className="text-sm mt-1" style={{ color: "var(--ash-muted)" }}>
            {s.label} reframed through cricket, cooking, gaming, K-pop — whatever helps it click.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Topics covered</h2>
        <div className="flex flex-wrap gap-2">
          {s.topics.map((t) => (
            <span key={t} className="glass-panel rounded-full px-3 py-1.5 text-sm">{t}</span>
          ))}
        </div>
      </section>

      <section className="glass-panel rounded-2xl p-6 mb-10">
        <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--ash-muted)", letterSpacing: "0.25em" }}>
          Sample question
        </div>
        <p className="font-mono text-sm mb-4">{s.sample}</p>
        <Link href="/onboarding" className="inline-block px-5 py-2.5 rounded-full text-white font-semibold text-sm"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          Try it on your own question →
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">FAQs</h2>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <details key={i} className="glass-panel rounded-2xl p-4">
              <summary className="font-semibold cursor-pointer">{f.question}</summary>
              <p className="mt-2 text-sm">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="glass-panel rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Get help in study {s.label.toLowerCase()} now</h2>
        <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>Free forever for the basics. No card.</p>
        <Link href="/onboarding" className="inline-block px-6 py-3 rounded-full text-white font-semibold"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #7c3aed)" }}>
          Open my AI study helper →
        </Link>
      </section>
    </main>
  );
}
