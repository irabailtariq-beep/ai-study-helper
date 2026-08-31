import type { BoardHubConfig } from "@/components/BoardHub";

export const BOARD_HUBS: BoardHubConfig[] = [
  {
    board: "cbse", label: "CBSE",
    title: "CBSE Practice Questions — Solved Step by Step, Free",
    description: "Free CBSE practice: NCERT-style word problems, numericals, case-study questions and accountancy chapters, every solution in exam layout with marking notes.",
    h1: "CBSE practice questions, solved the way examiners mark",
    intro: "Every page here works the way a CBSE paper does: Given, Formula, Substitution, Answer with units — with a note on exactly where students lose marks, and a fresh variant to try yourself. All free, no account.",
    tools: [
      { href: "/tools/cbse-maths-solver", label: "CBSE maths solver", why: "NCERT-style working for any problem you paste or photograph" },
      { href: "/quiz", label: "Quiz generator", why: "Turn any chapter into auto-marked practice questions" },
      { href: "/grade", label: "Answer marking", why: "Point-marked feedback the way CBSE papers score" },
      { href: "/help-in-study/accounting", label: "Accountancy help", why: "The commerce subject hub" },
    ],
  },
  {
    board: "gcse", label: "GCSE",
    title: "GCSE Practice & Grade Boundaries — AQA, Edexcel, OCR",
    description: "GCSE exam technique and data: pass marks, grade percentages, 6-mark question method and worked practice for AQA, Edexcel and OCR. Free, no signup.",
    h1: "GCSE practice, pass marks and exam technique",
    intro: "Real boundary numbers from the latest series, the level-marking system explained, and worked questions in the style your board actually uses — AQA, Edexcel and OCR.",
    tools: [
      { href: "/tools/gcse-ai-marker", label: "AI marker for GCSE answers", why: "Paste an answer, get mark-scheme-style feedback" },
      { href: "/tools/mark-my-english-essay-gcse", label: "English essay marking", why: "Paper 1 Q5 and literature essays, coached" },
      { href: "/mock-exam", label: "Mock exam generator", why: "A timed paper in your board's style" },
      { href: "/flashcards", label: "Flashcard maker", why: "Spaced repetition from your own notes" },
    ],
  },
  {
    board: "waec", label: "WAEC / WASSCE",
    title: "WASSCE Practice Questions — Solved, Free, Any Phone",
    description: "Free WASSCE-format practice: maths theory by topic and year style, biology genetics, all solved with WAEC-style M and A marking notes. Works on any phone browser.",
    h1: "WASSCE practice questions with full working",
    intro: "Original questions in the exact WASSCE format, each solved line by line with the method and accuracy marks labelled the way WAEC examiners award them. No registration, no downloads, works on any phone.",
    tools: [
      { href: "/tools/wassce-practice-questions", label: "WASSCE practice generator", why: "Original questions on any topic, auto-marked" },
      { href: "/explain", label: "Explain anything", why: "Any topic, explained at your level" },
      { href: "/grade", label: "Answer marking", why: "See where the marks come from" },
      { href: "/help-in-study/math", label: "Maths help", why: "The core-maths subject hub" },
    ],
  },
  {
    board: "ap", label: "AP",
    title: "AP Score Calculators — 11 Subjects, Free (2027)",
    description: "Free AP score calculators for Biology, Chemistry, Calculus, Physics 1, APUSH, Psychology, Statistics, English Language and more — real 2027 exam structures.",
    h1: "AP score calculators and exam practice",
    intro: "Slide in your practice-exam section scores and see your estimated AP score instantly. Each calculator uses the real current exam structure, with honest cut-point estimates — the College Board moves the real boundaries every year.",
    tools: [
      { href: "/quiz", label: "Quiz generator", why: "Unit-by-unit practice questions, auto-marked" },
      { href: "/flashcards", label: "Flashcard maker", why: "Spaced repetition for terms and formulas" },
      { href: "/chat", label: "AI tutor chat", why: "Ask until it clicks" },
      { href: "/essay-coach", label: "Essay coach", why: "For the writing-heavy exams" },
    ],
  },
  {
    board: "cambridge", label: "Cambridge IGCSE / A-Level",
    title: "Cambridge IGCSE Paper Guides & Practice — Free",
    description: "Cambridge IGCSE by spec code: 0620, 0625, 0610, 0580 and 0500 paper guides with original exam-style questions solved — written by a student who sits these exams.",
    h1: "Cambridge IGCSE papers, explained by a student who sits them",
    intro: "Paper-by-paper guides for the big Cambridge IGCSE codes — what each paper looks like, how it is marked, and original exam-style questions solved in full. Written from real exam-room experience.",
    tools: [
      { href: "/explain", label: "Explain anything", why: "Photo, PDF or paste — explained in Cambridge style" },
      { href: "/mock-exam", label: "Mock exam generator", why: "A timed practice paper for your syllabus" },
      { href: "/grade", label: "Answer marking", why: "Mark-scheme-style feedback on written answers" },
      { href: "/math-solver", label: "Maths solver", why: "Every line of working shown" },
    ],
  },
];
