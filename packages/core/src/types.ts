export type UserProfile = {
  id?: string;
  country: CountryCode;
  age: number; // years
  grade: string; // "Grade 5", "Class 9", "Year 11", etc
  curriculum: string; // curriculum id from curricula.ts
  createdAt?: string;

  /**
   * True for the placeholder profile used before a visitor completes onboarding.
   * The country/grade/curriculum fields are only defaults to keep the tools
   * usable — they are NOT what this student actually studies, so prompts must
   * not assert them as fact or apply one board's exam conventions.
   */
  guest?: boolean;

  // ─── Extended profile (collected during onboarding, used to shape every AI reply) ───
  displayName?: string;          // optional first name for personalised greetings
  subjects?: string[];           // subjects they are studying this year
  struggling?: string[];         // subjects (or topics) they find hardest
  interests?: string[];          // hobbies / interests for the "make it about my world" mode
  goal?: string;                 // free text — "Get an A in IGCSE Math by June 2026"
  formatPreference?: OutputFormat;
  tonePreference?: ToneStyle;
};

// How the explanation is structured.
export type OutputFormat = "mixed" | "bullets" | "paragraphs" | "step-by-step";

// How the explanation sounds.
export type ToneStyle = "neutral" | "kid-friendly" | "playful" | "professional" | "gen-z" | "gen-alpha";

export type AnswerLength = "short" | "long";

// Writing coach — grammar & clarity check result.
export type GrammarIssue = {
  type: "grammar" | "spelling" | "punctuation" | "clarity" | "style";
  original: string;
  suggestion: string;
  why: string;
};
export type GrammarResult = {
  correctedText: string;
  issues: GrammarIssue[];
  clarityNotes: string[];
  summary: string;
};

// How aggressively to rewrite the explanation through the student's interest lens.
// "off"   → ignore interest, plain explanation
// "light" → use 1-2 examples from the interest, otherwise neutral
// "heavy" → most examples and analogies come from the interest world
// "full"  → the entire explanation is reframed as a story / scenario in that world
export type TransformIntensity = "off" | "light" | "heavy" | "full";

// ISO-3166-1 alpha-2 country codes actually supported by the app.
// "OTHER" is the fallback bucket that also carries international curricula (Cambridge / IB / AP).
export type CountryCode =
  | "PK" | "IN" | "US" | "GB" | "CA" | "AU" | "NZ"
  | "AE" | "SA" | "QA" | "KW" | "OM" | "BH" | "EG"
  | "DE" | "FR" | "IT" | "ES" | "NL" | "PL" | "SE" | "NO" | "FI" | "DK" | "RU"
  | "BR" | "MX" | "AR" | "CO" | "CL" | "PE"
  | "NG" | "GH" | "KE" | "ZA"
  | "CN" | "JP" | "KR" | "TW" | "VN"
  | "ID" | "PH" | "MY" | "SG" | "TH"
  | "BD" | "LK" | "NP"
  | "OTHER";

// Also exported as a runtime list so UIs can iterate.
export const ALL_COUNTRY_CODES: CountryCode[] = [
  "PK","IN","US","GB","CA","AU","NZ",
  "AE","SA","QA","KW","OM","BH","EG",
  "DE","FR","IT","ES","NL","PL","SE","NO","FI","DK","RU",
  "BR","MX","AR","CO","CL","PE",
  "NG","GH","KE","ZA",
  "CN","JP","KR","TW","VN",
  "ID","PH","MY","SG","TH",
  "BD","LK","NP",
  "OTHER",
];

export type ExplainRequest = {
  profile: UserProfile;
  text?: string;
  // base64 data URL for image (png/jpg); in prod use signed storage URLs
  imageBase64?: string;
  // base64 for pdf
  pdfBase64?: string;
  // Optional: helps the tutor choose examples/analogies matching the student's interests.
  interestContext?: string;
  // Optional: controls how aggressively the explanation is reframed through that interest.
  transformIntensity?: TransformIntensity;
  // Optional: controls verbosity of the AI response.
  answerLength?: AnswerLength;
  // Optional per-request overrides of the profile-level defaults.
  formatOverride?: OutputFormat;
  toneOverride?: ToneStyle;
  // When true, AI prioritises visual output (Mermaid diagram + ```chem block) over prose.
  wantDiagrams?: boolean;
  style?: "auto" | "simple" | "standard" | "detailed";
};

export type ExplainResponse = {
  explanation: string;
  keyPoints: string[];
  followUps: string[];
  disclaimer: string;
};

export type QuizType = "mcq" | "short" | "tf" | "fill";

export type QuizItem =
  | { type: "mcq"; q: string; options: string[]; answerIndex: number; why: string }
  | { type: "short"; q: string; answer: string; rubric: string }
  | { type: "tf"; q: string; answer: boolean; why: string }
  | { type: "fill"; q: string; answer: string; why: string };

export type Quiz = {
  title: string;
  items: QuizItem[];
};

export type ChatTurn = {
  role: "user" | "assistant" | "system";
  content: string;
};

// ─────────── Syllabus (extracted + digital storage)
export type SyllabusTopic = {
  title: string;
  subtopics?: string[];
  notes?: string;
  estimatedHours?: number;
};
export type SyllabusUnit = {
  title: string;
  topics: SyllabusTopic[];
};
export type Syllabus = {
  id?: string;
  subject: string;     // e.g. "Biology"
  curriculum: string;  // id from curricula
  grade: string;       // "Class 10"
  year?: number;       // syllabus year if present
  units: SyllabusUnit[];
  source?: string;     // e.g. "User uploaded PDF", "Board website"
  createdAt?: string;
};

// ─────────── Diagnostic quiz + study plan
export type DiagnosticArea = {
  topic: string;
  mastery: "weak" | "okay" | "strong";
  evidence: string;
};
export type StudyPlanDay = {
  day: number;        // 1..N
  focus: string;
  tasks: string[];    // "Review flashcards on X", "Do 10 MCQs on Y"
  minutes: number;
};
export type StudyPlan = {
  summary: string;
  weakAreas: DiagnosticArea[];
  strongAreas: DiagnosticArea[];
  days: StudyPlanDay[];
};

// ─────────── Past-paper grading
export type GradeResult = {
  score: number;
  max: number;
  band: string;                    // e.g. "A*", "B", "4"
  feedback: string;                // prose
  strengths: string[];
  improvements: string[];
  markScheme?: string;             // AI's best guess at the expected answer
};

// ─────────── Concept map
export type ConceptNode = { id: string; label: string; group?: string };
export type ConceptEdge = { from: string; to: string; label?: string };
export type ConceptMap = {
  subject: string;
  nodes: ConceptNode[];
  edges: ConceptEdge[];
};

// ─────────── Math solver
export type MathStep = { title: string; math: string; note?: string };
export type MathSolution = {
  restated: string;
  method: string;
  steps: MathStep[];
  answer: string;
  pitfalls: string[];
  checks: string[];
};

// ─────────── Formula sheet
export type FormulaItem = { name: string; formula: string; useWhen: string; example?: string };
export type FormulaGroup = { title: string; items: FormulaItem[] };
export type FormulaSheet = { subject: string; topic?: string | null; groups: FormulaGroup[] };

// ─────────── Decade / topic-focused past papers
export type PastPaperRequest = {
  profile: UserProfile;
  subject?: string;
  topic?: string;                   // narrow focus: "Photosynthesis"
  decadeStart?: number;             // e.g. 2010
  decadeEnd?: number;               // e.g. 2019
  count?: number;
  pdfBase64?: string;               // optional seed paper
  imageBase64?: string;
  sourceText?: string;
};
