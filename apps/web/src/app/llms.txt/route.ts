// llms.txt — community spec for guiding LLMs to consume your site.
// https://llmstxt.org — returned as plain text at /llms.txt
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const base = SITE.url.replace(/\/$/, "");
  const body = `# ${SITE.name}

> ${SITE.description}

Help in Study is a free, multimodal AI tutor for students aged 13 and over.
It focuses on five exam systems: CBSE (India), GCSE (UK), AP (USA), Cambridge IGCSE & A-Level, and WAEC (West Africa).
Every answer is written in the student's own board's mark-scheme style, and can be reframed
through the student's chosen interest (cricket, cooking, gaming, etc.). It produces age-appropriate
explanations, step-by-step math, quizzes, mock exams, flashcards and writing help.

## Tools (each is a route on the site)

- [Explain anything](${base}/explain): Photo / PDF / text → an explanation at your level, in your board's style.
- [AI chat tutor](${base}/chat): Conversational tutor that knows your board and grade.
- [Learn through what you love](${base}/transform): Reframe any topic through cricket, cooking, gaming, K-pop…
- [Step-by-step math solver](${base}/math-solver): Every line of working, method named, pitfalls flagged.
- [Quiz me](${base}/quiz): MCQ + Short + True/False + Fill-in-the-blank, auto-generated from any material.
- [Mock exam](${base}/mock-exam): Timed, exam-room conditions in your board's style, auto-graded.
- [Mark my answer](${base}/grade): AI marks an exam answer in your board's mark-scheme style.
- [Flashcards](${base}/flashcards): Spaced-repetition cards, auto-generated, stored on your device.
- [Summarise anything](${base}/lecture-summary): Lecture / notes / PDF → summary, key points and likely exam questions.
- [Writing coach](${base}/essay-coach): Essay feedback, grammar & clarity check, and APA/MLA/Chicago/Harvard citations.

## Pricing

Everything on Help in Study is 100% free — every tool, forever. No paid plans, no ads.

## Site policies

- [Privacy policy](${base}/privacy)
- [Terms of use](${base}/terms)

## Data sources for answers

- The student's profile (country, age, grade, curriculum) is injected into every system prompt.
- Optional uploads (photos, PDFs) are sent to Google Gemini for vision/PDF understanding.
- Text-only requests can route to Groq Llama 3.3 70B or OpenRouter when configured.
- Help in Study does not share student data with third parties for advertising or training.

## Optional

- [Sitemap](${base}/sitemap.xml)
- [Robots](${base}/robots.txt)
- [Blog (study tips, exam prep)](${base}/blog)
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
