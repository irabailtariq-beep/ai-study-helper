import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { callText, hasFreeTextProvider } from "./providers";
export { pickTextProvider, hasFreeTextProvider } from "./providers";
import {
  systemPromptExplain,
  systemPromptQuiz,
  systemPromptChat,
  systemPromptPastPaper,
  systemPromptSyllabus,
  systemPromptTopicPaper,
  systemPromptDiagnostic,
  systemPromptGrade,
  systemPromptGrammar,
  systemPromptConceptMap,
  systemPromptParentRecap,
  DISCLAIMER,
  type ExplainRequest,
  type ExplainResponse,
  type AnswerLength,
  type Quiz,
  type QuizType,
  type UserProfile,
  type ChatTurn,
  type PastPaperRequest,
  type Syllabus,
  type StudyPlan,
  type GradeResult,
  type GrammarResult,
  type ConceptMap,
  systemPromptMathSolver,
  systemPromptFormulaSheet,
  type MathSolution,
  type FormulaSheet,
} from "@ash/core";

const MODEL = "gemini-2.5-flash";
// Same family, far more generous free allowance: flash gets 250 requests a day
// against flash-lite's 1,000. On 2026-09-01 every tool on the site was dead
// because flash alone ran dry, so a throttled call now retries on lite rather
// than failing the student — a slightly smaller model beats no answer at all.
const FALLBACK_MODEL = "gemini-2.5-flash-lite";

/** True for the provider's "out of quota / slow down" responses. */
function isQuotaError(e: unknown): boolean {
  const raw = String((e as { message?: string })?.message ?? e ?? "");
  return /\b429\b|quota|rate.?limit|RESOURCE_EXHAUSTED|too many requests/i.test(raw);
}

/**
 * Gemini client with the model fallback built in.
 *
 * Wrapping generateContent here rather than at each of the thirteen call sites
 * means every tool inherits it, and no future tool can forget to.
 */
function getClient() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY not set");
  const ai = new GoogleGenAI({ apiKey: key });
  const generateContent = ai.models.generateContent.bind(ai.models);
  ai.models.generateContent = (async (args: any) => {
    try {
      return await generateContent(args);
    } catch (e) {
      if (!isQuotaError(e) || args?.model === FALLBACK_MODEL) throw e;
      console.warn(`[ai] ${args?.model} throttled — retrying on ${FALLBACK_MODEL}`);
      return await generateContent({ ...args, model: FALLBACK_MODEL });
    }
  }) as typeof ai.models.generateContent;
  return ai;
}

const SAFETY = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

function extractJSON<T>(text: string): T {
  const match = text.match(/```json\s*([\s\S]*?)\s*```/) ?? text.match(/(\{[\s\S]*\})/);
  const raw = match ? match[1] : text;
  return JSON.parse(raw) as T;
}

function partsForRequest(req: ExplainRequest) {
  const parts: any[] = [];
  if (req.text) parts.push({ text: req.text });
  if (req.imageBase64) {
    const [meta, data] = req.imageBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "image/jpeg";
    parts.push({ inlineData: { mimeType, data: data ?? req.imageBase64 } });
  }
  if (req.pdfBase64) {
    const [meta, data] = req.pdfBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "application/pdf";
    parts.push({ inlineData: { mimeType, data: data ?? req.pdfBase64 } });
  }
  if (!parts.length) parts.push({ text: "Please explain the concept the student is studying." });
  return parts;
}

export async function explain(req: ExplainRequest): Promise<ExplainResponse> {
  const system = systemPromptExplain(
    req.profile,
    req.interestContext,
    req.answerLength,
    req.transformIntensity,
    req.formatOverride,
    req.toneOverride,
    req.wantDiagrams,
  );
  // All explain calls go through Gemini's JSON mode. The free open-source LLM path
  // was removed here because it routinely corrupts JSON-string LaTeX backslashes
  // (\frac -> \f, \times -> \t, \sqrt makes JSON.parse throw), which broke formulas.
  const ai = getClient();
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts: partsForRequest(req) }],
    config: {
      systemInstruction: system,
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.4,
    },
  });
  const text = resp.text ?? "";
  const parsed = extractJSON<Omit<ExplainResponse, "disclaimer">>(text);
  return { ...parsed, disclaimer: DISCLAIMER };
}

export async function generateQuiz(opts: {
  profile: UserProfile;
  sourceText?: string;
  imageBase64?: string;
  pdfBase64?: string;
  types?: QuizType[];
  count?: number;
}): Promise<Quiz> {
  const ai = getClient();
  const types = opts.types ?? ["mcq", "short", "tf", "fill"];
  const count = opts.count ?? 8;
  const parts: any[] = [];
  if (opts.sourceText) parts.push({ text: opts.sourceText });
  if (opts.imageBase64) {
    const [meta, data] = opts.imageBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "image/jpeg";
    parts.push({ inlineData: { mimeType, data: data ?? opts.imageBase64 } });
  }
  if (opts.pdfBase64) {
    const [meta, data] = opts.pdfBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "application/pdf";
    parts.push({ inlineData: { mimeType, data: data ?? opts.pdfBase64 } });
  }
  if (!parts.length) throw new Error("Quiz needs source material");

  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts }],
    config: {
      systemInstruction: systemPromptQuiz(opts.profile, types, count),
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.6,
    },
  });
  return extractJSON<Quiz>(resp.text ?? "");
}

export async function chat(opts: {
  profile: UserProfile;
  history: ChatTurn[];
  memory?: string;
  answerLength?: AnswerLength;
  formatOverride?: import("@ash/core").OutputFormat;
  toneOverride?: import("@ash/core").ToneStyle;
}): Promise<string> {
  const system = systemPromptChat(opts.profile, opts.memory, opts.answerLength, opts.formatOverride, opts.toneOverride);
  const turns = opts.history.filter((t) => t.role !== "system");
  const last = turns[turns.length - 1];
  const prior = turns.slice(0, -1);

  // Try free text provider first (Groq / OpenRouter) if configured
  if (hasFreeTextProvider()) {
    try {
      return await callText({
        systemInstruction: system,
        history: prior.map((t) => ({ role: t.role === "assistant" ? "model" : "user", text: t.content })),
        userText: last?.content ?? "",
        temperature: 0.7,
      });
    } catch (e: any) {
      if (e.message !== "GEMINI_FALLBACK") console.warn("[chat] free provider failed:", e.message);
    }
  }

  // Fallback / default: Gemini
  const ai = getClient();
  const contents = turns.map((t) => ({
    role: t.role === "assistant" ? "model" : "user",
    parts: [{ text: t.content }],
  }));
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents,
    config: { systemInstruction: system, safetySettings: SAFETY, temperature: 0.7 },
  });
  return resp.text ?? "";
}

export async function generatePastPapers(opts: {
  profile: UserProfile;
  pdfBase64?: string;
  imageBase64?: string;
  sourceText?: string;
  count?: number;
}) {
  const ai = getClient();
  const count = opts.count ?? 3;
  const parts: any[] = [];
  if (opts.sourceText) parts.push({ text: opts.sourceText });
  if (opts.imageBase64) {
    const [meta, data] = opts.imageBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "image/jpeg";
    parts.push({ inlineData: { mimeType, data: data ?? opts.imageBase64 } });
  }
  if (opts.pdfBase64) {
    const [meta, data] = opts.pdfBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "application/pdf";
    parts.push({ inlineData: { mimeType, data: data ?? opts.pdfBase64 } });
  }
  if (!parts.length) throw new Error("Past paper generator needs a source paper");

  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts }],
    config: {
      systemInstruction: systemPromptPastPaper(opts.profile, count),
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.7,
    },
  });
  return extractJSON<{ papers: any[] }>(resp.text ?? "");
}

export async function extractSyllabus(opts: {
  profile: UserProfile;
  subject?: string;
  sourceText?: string;
  pdfBase64?: string;
  imageBase64?: string;
}): Promise<Syllabus> {
  const ai = getClient();
  const parts: any[] = [];
  if (opts.sourceText) parts.push({ text: opts.sourceText });
  if (opts.imageBase64) {
    const [meta, data] = opts.imageBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "image/jpeg";
    parts.push({ inlineData: { mimeType, data: data ?? opts.imageBase64 } });
  }
  if (opts.pdfBase64) {
    const [meta, data] = opts.pdfBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "application/pdf";
    parts.push({ inlineData: { mimeType, data: data ?? opts.pdfBase64 } });
  }
  if (!parts.length) throw new Error("Syllabus extractor needs source material");

  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts }],
    config: {
      systemInstruction: systemPromptSyllabus(opts.profile, opts.subject),
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.2,
    },
  });
  const parsed = extractJSON<Omit<Syllabus, "curriculum" | "grade">>(resp.text ?? "");
  return {
    ...parsed,
    subject: parsed.subject ?? opts.subject ?? "Unknown",
    curriculum: opts.profile.curriculum,
    grade: opts.profile.grade,
    createdAt: new Date().toISOString(),
    source: "User upload",
  };
}

export async function generateTopicPapers(req: PastPaperRequest) {
  const ai = getClient();
  const parts: any[] = [];
  if (req.sourceText) parts.push({ text: req.sourceText });
  if (req.imageBase64) {
    const [meta, data] = req.imageBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "image/jpeg";
    parts.push({ inlineData: { mimeType, data: data ?? req.imageBase64 } });
  }
  if (req.pdfBase64) {
    const [meta, data] = req.pdfBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "application/pdf";
    parts.push({ inlineData: { mimeType, data: data ?? req.pdfBase64 } });
  }
  if (!parts.length) parts.push({ text: `Generate practice papers based on the specified topic and era.` });

  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts }],
    config: {
      systemInstruction: systemPromptTopicPaper(req.profile, {
        subject: req.subject,
        topic: req.topic,
        decadeStart: req.decadeStart,
        decadeEnd: req.decadeEnd,
        count: req.count ?? 3,
      }),
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.7,
    },
  });
  return extractJSON<{ papers: any[] }>(resp.text ?? "");
}

export async function generateDiagnosticPlan(opts: {
  profile: UserProfile;
  subject?: string;
  days?: number;
  results: { question: string; studentAnswer: string; correctAnswer: string; topic?: string }[];
}): Promise<StudyPlan> {
  const ai = getClient();
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts: [{ text: JSON.stringify(opts.results) }] }],
    config: {
      systemInstruction: systemPromptDiagnostic(opts.profile, opts.subject, opts.days ?? 7),
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.4,
    },
  });
  return extractJSON<StudyPlan>(resp.text ?? "");
}

export async function gradeAnswer(opts: {
  profile: UserProfile;
  question: string;
  studentAnswer: string;
  rubric?: string;
  marks?: number;
}): Promise<GradeResult> {
  const system = systemPromptGrade(opts.profile, { rubric: opts.rubric, marks: opts.marks });
  const payload = `QUESTION:\n${opts.question}\n\nSTUDENT ANSWER:\n${opts.studentAnswer}`;

  // Grade goes through Gemini's JSON mode; the free LLM path was removed because it
  // corrupts LaTeX backslashes inside JSON (same reason as explain()).
  const ai = getClient();
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts: [{ text: payload }] }],
    config: {
      systemInstruction: system,
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.2,
    },
  });
  return extractJSON<GradeResult>(resp.text ?? "");
}

export async function checkGrammar(opts: { profile: UserProfile; text: string }): Promise<GrammarResult> {
  const system = systemPromptGrammar(opts.profile);
  // Gemini JSON mode (free path skipped — same JSON-escaping reliability reason as explain/grade).
  const ai = getClient();
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts: [{ text: opts.text }] }],
    config: { systemInstruction: system, safetySettings: SAFETY, responseMimeType: "application/json", temperature: 0.2 },
  });
  return extractJSON<GrammarResult>(resp.text ?? "");
}

export async function buildConceptMap(opts: {
  profile: UserProfile;
  subject?: string;
  sourceText?: string;
  pdfBase64?: string;
  imageBase64?: string;
}): Promise<ConceptMap> {
  const ai = getClient();
  const parts: any[] = [];
  if (opts.sourceText) parts.push({ text: opts.sourceText });
  if (opts.imageBase64) {
    const [meta, data] = opts.imageBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "image/jpeg";
    parts.push({ inlineData: { mimeType, data: data ?? opts.imageBase64 } });
  }
  if (opts.pdfBase64) {
    const [meta, data] = opts.pdfBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "application/pdf";
    parts.push({ inlineData: { mimeType, data: data ?? opts.pdfBase64 } });
  }
  if (!parts.length) throw new Error("Concept map needs source material");
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts }],
    config: {
      systemInstruction: systemPromptConceptMap(opts.profile, opts.subject),
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.3,
    },
  });
  return extractJSON<ConceptMap>(resp.text ?? "");
}

export async function parentRecap(opts: { profile: UserProfile; stats: any }): Promise<string> {
  const ai = getClient();
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts: [{ text: "Please write the recap now." }] }],
    config: {
      systemInstruction: systemPromptParentRecap(opts.profile, opts.stats),
      safetySettings: SAFETY,
      temperature: 0.5,
    },
  });
  return resp.text ?? "";
}

export async function solveMath(opts: {
  profile: UserProfile;
  text?: string;
  imageBase64?: string;
  pdfBase64?: string;
}): Promise<MathSolution> {
  const ai = getClient();
  const parts: any[] = [];
  if (opts.text) parts.push({ text: opts.text });
  if (opts.imageBase64) {
    const [meta, data] = opts.imageBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "image/jpeg";
    parts.push({ inlineData: { mimeType, data: data ?? opts.imageBase64 } });
  }
  if (opts.pdfBase64) {
    const [meta, data] = opts.pdfBase64.split(",");
    const mimeType = /data:(.*?);base64/.exec(meta)?.[1] ?? "application/pdf";
    parts.push({ inlineData: { mimeType, data: data ?? opts.pdfBase64 } });
  }
  if (!parts.length) throw new Error("Math solver needs a problem");
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts }],
    config: {
      systemInstruction: systemPromptMathSolver(opts.profile),
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.1,
    },
  });
  return extractJSON<MathSolution>(resp.text ?? "");
}

export async function formulaSheet(opts: {
  profile: UserProfile;
  subject: string;
  topic?: string;
}): Promise<FormulaSheet> {
  const ai = getClient();
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts: [{ text: `Subject: ${opts.subject}${opts.topic ? `, topic: ${opts.topic}` : ""}` }] }],
    config: {
      systemInstruction: systemPromptFormulaSheet(opts.profile, opts.subject, opts.topic),
      safetySettings: SAFETY,
      responseMimeType: "application/json",
      temperature: 0.2,
    },
  });
  return extractJSON<FormulaSheet>(resp.text ?? "");
}
