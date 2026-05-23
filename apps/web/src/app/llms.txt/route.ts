// llms.txt — community spec for guiding LLMs to consume your site.
// https://llmstxt.org — returned as plain text at /llms.txt
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const base = SITE.url.replace(/\/$/, "");
  const body = `# ${SITE.name}

> ${SITE.description}

AI Study Helper is a free, multimodal AI tutor for students aged 6–25.
It supports 80+ curricula worldwide (CBSE, IGCSE, IB, AP, GCSE, A-Level, NCEA, ENEM, WAEC, …).
The product reframes any explanation through the student's chosen interest (cricket, cooking, gaming, etc.)
and produces age-appropriate explanations, step-by-step math, quizzes, flashcards, and study plans.

## Primary tools (each is a route on the site)

- [Explain anything](${base}/explain): Photo / PDF / text → age-adapted explanation.
- [Make it about my interests](${base}/transform): Reframe any topic through cricket, cooking, gaming, K-pop…
- [Math solver](${base}/math-solver): Step-by-step working, named method, common pitfalls.
- [Formula sheet](${base}/formula-sheet): Board-aware list of formulas with examples.
- [Quiz me](${base}/quiz): MCQ + Short + True/False + Fill-in-the-blank, auto-generated.
- [Diagnostic + study plan](${base}/diagnostic): 10-question diagnostic → personalised 7-day plan.
- [Mark my answer](${base}/grade): AI marks an exam answer in your board's style.
- [Concept map](${base}/concept-map): Visualise a syllabus as a topic graph.
- [Digital syllabus](${base}/syllabus): Extract official syllabi to a clean outline.
- [Flashcards](${base}/flashcards): SM-2 spaced repetition, auto-generated from any material.
- [Chat tutor](${base}/chat): Conversational tutor with memory + voice mode.
- [Parent dashboard](${base}/parent): Weekly recap for parents/guardians.
- [Google Classroom](${base}/classroom), [Microsoft Teams](${base}/teams), [Canvas / Moodle](${base}/lms): assignment sync + AI coaching.

## Plans

- [Pricing](${base}/pricing): Free forever, Pro ($4.99/mo), Family ($9.99/mo).

## Site policies

- [Privacy policy](${base}/privacy)
- [Terms of use](${base}/terms)

## Data sources for answers

- The student's profile (country, age, grade, curriculum) is injected into every system prompt.
- Optional uploads (photos, PDFs) are sent to Google Gemini for vision/PDF understanding.
- Text-only requests can route to Groq Llama 3.3 70B or OpenRouter when configured.
- AI Study Helper does not share student data with third parties for advertising or training.

## Optional

- [Sitemap](${base}/sitemap.xml)
- [Robots](${base}/robots.txt)
- [Blog (study tips, exam prep)](${base}/blog)
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
