export type UserProfile = {
  id?: string;
  country: CountryCode;
  age: number; // years
  grade: string; // "Grade 5", "Class 9", "Year 11", etc
  curriculum: string; // curriculum id from curricula.ts
  createdAt?: string;
};

export type AnswerLength = "short" | "long";

export type CountryCode =
  | "IN"
  | "CN"
  | "US"
  | "ID"
  | "PK"
  | "NG"
  | "BR"
  | "BD"
  | "RU"
  | "MX"
  | "OTHER";

export type ExplainRequest = {
  profile: UserProfile;
  text?: string;
  // base64 data URL for image (png/jpg); in prod use signed storage URLs
  imageBase64?: string;
  // base64 for pdf
  pdfBase64?: string;
  // Optional: helps the tutor choose examples/analogies matching the student's interests.
  interestContext?: string;
  // Optional: controls verbosity of the AI response.
  answerLength?: AnswerLength;
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
