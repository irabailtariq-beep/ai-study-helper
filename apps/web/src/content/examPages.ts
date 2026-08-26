// Exam-structure pages — the content system the 2026-08-24 research called for:
// pages that mirror the exam itself (textbook question families, board practice
// sets, pass-mark facts, score calculators) instead of generic topic explainers.
// Every question stem here is paraphrased/original — never verbatim textbook or
// past-paper text (NCERT and the UK boards are copyrighted; facts are free).
// Populated by tools/exam-pages/* from reviewed agent output.

export type ExamProblem = {
  question: string;
  steps: string[];
  answer: string;
  /** one sentence: where students lose marks on exactly this */
  markTip: string;
  /** an original practice variant for the reader (answer in brackets) */
  variant: string;
};

export type ApCalcData = {
  name: string;
  mcqCount: number;
  mcqWeightPercent: number;
  frqCount: number;
  frqWeightPercent: number;
  frqMaxPoints: number;
  /** percent of total composite needed, conservative estimates */
  cutoffs: { five: number; four: number; three: number; two: number };
  sourceNote: string;
};

export type ExamPage = {
  board: "cbse" | "gcse" | "waec" | "ap";
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  quickAnswer: string;
  intro: string;
  sections: { heading: string; body: string }[];
  problems: ExamProblem[];
  faqs: { q: string; a: string }[];
  targetQuery: string;
  hubSubjects: string[];
  calculator?: ApCalcData;
};

export const EXAM_PAGES: ExamPage[] = [
  // @@EXAM_PAGES_INSERT@@
];

export const examPagesByBoard = (board: ExamPage["board"]) =>
  EXAM_PAGES.filter((p) => p.board === board);

export const findExamPage = (board: ExamPage["board"], slug: string) =>
  EXAM_PAGES.find((p) => p.board === board && p.slug === slug);

export const examPagesForHub = (subject: string) =>
  EXAM_PAGES.filter((p) => p.hubSubjects.includes(subject));
