// Single source of truth for subscription tiers and feature gates.
// Wire to Stripe later — for MVP every user is "free" and ads serve.

export type PlanId = "free" | "pro" | "family";

export const PLANS: Record<PlanId, {
  id: PlanId;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  currency: string;
  popular?: boolean;
  features: string[];
  // What the plan removes / adds
  showsAds: boolean;
  dailyExplains: number;
  dailyChats: number;
  dailyQuizzes: number;
  dailyUploads: number;
  uploadMaxMB: number;
  pdfMaxPages: number;
  voiceMode: boolean;
  conceptMap: boolean;
  pastPaperGrading: boolean;
  classroomSync: boolean;
  parentDashboard: boolean;
  prioritySpeed: boolean;
  familySeats: number;
}> = {
  free: {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    currency: "USD",
    features: [
      "AI explanations (text, photo, PDF up to 5 MB)",
      "10 explanations + 50 chat messages per day",
      "Quiz generator (basic)",
      "Past paper practice (limited)",
      "Adaptive UI by age",
      "Guest mode + sign-in",
      "Ads supported",
    ],
    showsAds: true,
    dailyExplains: 10,
    dailyChats: 50,
    dailyQuizzes: 10,
    dailyUploads: 5,
    uploadMaxMB: 5,
    pdfMaxPages: 20,
    voiceMode: true,
    conceptMap: false,
    pastPaperGrading: false,
    classroomSync: false,
    parentDashboard: false,
    prioritySpeed: false,
    familySeats: 1,
  },
  pro: {
    id: "pro",
    name: "Pro",
    priceMonthly: 4.99,
    priceYearly: 39,
    currency: "USD",
    popular: true,
    features: [
      "Everything in Free",
      "No ads, ever",
      "Unlimited explanations + chats",
      "PDF up to 20 MB / 50 pages",
      "Concept map view",
      "AI essay coaching with feedback",
      "Diagnostic quiz + 7-day study plan",
      "Voice tutor (high-quality TTS)",
      "Priority response speed",
      "Cross-device sync",
    ],
    showsAds: false,
    dailyExplains: 200,
    dailyChats: 1000,
    dailyQuizzes: 50,
    dailyUploads: 30,
    uploadMaxMB: 20,
    pdfMaxPages: 50,
    voiceMode: true,
    conceptMap: true,
    pastPaperGrading: true,
    classroomSync: true,
    parentDashboard: false,
    prioritySpeed: true,
    familySeats: 1,
  },
  family: {
    id: "family",
    name: "Family",
    priceMonthly: 9.99,
    priceYearly: 79,
    currency: "USD",
    features: [
      "Everything in Pro",
      "Up to 5 student profiles",
      "Parent dashboard with weekly recap",
      "Per-child progress tracking",
      "Per-child age + curriculum settings",
      "Google Classroom + Microsoft Teams sync per child",
      "Shareable study plans",
      "Parent-only safety controls",
    ],
    showsAds: false,
    dailyExplains: 500,
    dailyChats: 2000,
    dailyQuizzes: 100,
    dailyUploads: 100,
    uploadMaxMB: 20,
    pdfMaxPages: 50,
    voiceMode: true,
    conceptMap: true,
    pastPaperGrading: true,
    classroomSync: true,
    parentDashboard: true,
    prioritySpeed: true,
    familySeats: 5,
  },
};

export function planById(id?: string): typeof PLANS[PlanId] {
  if (id === "pro" || id === "family") return PLANS[id];
  return PLANS.free;
}
