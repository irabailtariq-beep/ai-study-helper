/**
 * Text-LLM provider abstraction.
 *
 * - Vision / PDF always uses Gemini (only multimodal free option).
 * - Plain text chat / grading / diagnostic plans can optionally use
 *   Groq (Llama 3.3 70B, free) or OpenRouter (rotating free models),
 *   which are often faster and more generous on the free tier.
 */

export type TextCallOpts = {
  systemInstruction: string;
  userText: string;              // a single flattened user message
  history?: { role: "user" | "model"; text: string }[];
  temperature?: number;
  responseJson?: boolean;
};

export type ProviderName = "gemini" | "groq" | "openrouter";

function firstAvailable(): ProviderName {
  const pref = (process.env.AI_TEXT_PROVIDER || "auto").toLowerCase();
  if (pref !== "auto") return pref as ProviderName;
  if (process.env.GROQ_API_KEY) return "groq";
  if (process.env.OPENROUTER_API_KEY) return "openrouter";
  return "gemini";
}

export function pickTextProvider(): ProviderName {
  const p = firstAvailable();
  // Sanity: fall back to gemini if keys missing.
  if (p === "groq" && !process.env.GROQ_API_KEY) return "gemini";
  if (p === "openrouter" && !process.env.OPENROUTER_API_KEY) return "gemini";
  return p;
}

// ─────────────────────── GROQ ───────────────────────
async function groqChat(opts: TextCallOpts): Promise<string> {
  const messages: any[] = [{ role: "system", content: opts.systemInstruction }];
  for (const turn of opts.history ?? []) {
    messages.push({ role: turn.role === "model" ? "assistant" : "user", content: turn.text });
  }
  messages.push({ role: "user", content: opts.userText });

  const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: opts.temperature ?? 0.5,
      ...(opts.responseJson ? { response_format: { type: "json_object" } } : {}),
    }),
  });
  if (!r.ok) throw new Error(`Groq ${r.status}: ${await r.text()}`);
  const d = await r.json();
  return d.choices?.[0]?.message?.content ?? "";
}

// ─────────────────────── OPENROUTER ─────────────────────
async function openRouterChat(opts: TextCallOpts): Promise<string> {
  const messages: any[] = [{ role: "system", content: opts.systemInstruction }];
  for (const turn of opts.history ?? []) {
    messages.push({ role: turn.role === "model" ? "assistant" : "user", content: turn.text });
  }
  messages.push({ role: "user", content: opts.userText });

  const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "HTTP-Referer": "https://helpinstudy.com",
      "X-Title": "Help in Study",
    },
    body: JSON.stringify({
      // Free-tier, open-source model. OpenRouter rotates these; fall back chain.
      model: "meta-llama/llama-3.3-70b-instruct:free",
      messages,
      temperature: opts.temperature ?? 0.5,
    }),
  });
  if (!r.ok) throw new Error(`OpenRouter ${r.status}: ${await r.text()}`);
  const d = await r.json();
  return d.choices?.[0]?.message?.content ?? "";
}

export async function callText(opts: TextCallOpts): Promise<string> {
  const provider = pickTextProvider();
  try {
    if (provider === "groq") return await groqChat(opts);
    if (provider === "openrouter") return await openRouterChat(opts);
  } catch (e: any) {
    // Fall back to Gemini if free-tier provider fails
    console.warn(`[ai] ${provider} failed, falling back to Gemini: ${e.message}`);
  }
  // Gemini fallback is done in the parent index.ts (keeps single GoogleGenAI client).
  throw new Error("GEMINI_FALLBACK");
}

export function hasFreeTextProvider(): boolean {
  const p = pickTextProvider();
  return p === "groq" || p === "openrouter";
}
