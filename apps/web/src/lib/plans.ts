// Single tier — Help in Study is 100% free, no paid plans.
// This file is kept (instead of deleted) so any future call sites don't break,
// and so we have one place to bump rate limits or feature flags later.

export type PlanId = "free";

export const PLANS: Record<PlanId, {
  id: PlanId;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  currency: string;
  features: string[];
  // Daily limits (anti-abuse only, not paywalls)
  dailyExplains: number;
  dailyChats: number;
  dailyQuizzes: number;
  dailyUploads: number;
  uploadMaxMB: number;
  pdfMaxPages: number;
  // All features enabled for everyone
  voiceMode: boolean;
  conceptMap: boolean;
  pastPaperGrading: boolean;
  classroomSync: boolean;
  parentDashboard: boolean;
}> = {
  free: {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    currency: "USD",
    features: [
      "AI explanations (text, photo, PDF)",
      "Chat tutor with cross-session memory",
      "Quiz generator (MCQ, short, T/F, fill)",
      "Math solver with step-by-step working",
      "Flashcards with spaced repetition",
      "Past-paper synthesis + mark-scheme grading",
      "Concept map builder",
      "Diagnostic + 7-day study plan",
      "Voice input + output",
      "Google Classroom + MS Teams + Canvas + Moodle",
      "Parent weekly recap",
      "129+ study-tip articles",
      "80+ curricula supported",
    ],
    dailyExplains: 50,
    dailyChats: 200,
    dailyQuizzes: 30,
    dailyUploads: 10,
    uploadMaxMB: 20,
    pdfMaxPages: 50,
    voiceMode: true,
    conceptMap: true,
    pastPaperGrading: true,
    classroomSync: true,
    parentDashboard: true,
  },
};

export function planById(_id?: string): typeof PLANS[PlanId] {
  return PLANS.free;
}
