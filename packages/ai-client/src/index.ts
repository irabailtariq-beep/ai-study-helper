import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import {
  systemPromptExplain,
  systemPromptQuiz,
  systemPromptChat,
  systemPromptPastPaper,
  DISCLAIMER,
  type ExplainRequest,
  type ExplainResponse,
  type AnswerLength,
  type Quiz,
  type QuizType,
  type UserProfile,
  type ChatTurn,
} from "@ash/core";

const MODEL = "gemini-2.5-flash";

function getClient() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY not set");
  return new GoogleGenAI({ apiKey: key });
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
  const ai = getClient();
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: "user", parts: partsForRequest(req) }],
    config: {
      systemInstruction: systemPromptExplain(req.profile, req.interestContext, req.answerLength),
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
}): Promise<string> {
  const ai = getClient();
  const contents = opts.history
    .filter((t) => t.role !== "system")
    .map((t) => ({ role: t.role === "assistant" ? "model" : "user", parts: [{ text: t.content }] }));
  const resp = await ai.models.generateContent({
    model: MODEL,
    contents,
    config: {
      systemInstruction: systemPromptChat(opts.profile, opts.memory, opts.answerLength),
      safetySettings: SAFETY,
      temperature: 0.7,
    },
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
