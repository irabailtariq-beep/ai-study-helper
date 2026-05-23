// humans.txt — humanstxt.org — credit the people behind the site.
// Returned as plain text at /humans.txt
import { SITE } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `/* TEAM */
Founder & maker: ${SITE.founder}
Site: ${SITE.url}

/* THANKS */
Open-source: Next.js, React, TypeScript, Tailwind CSS, Supabase, Expo, Zustand
AI: Google Gemini (vision + PDF), Groq Llama 3.3 70B (free open-source), OpenRouter

/* SITE */
Last update: ${new Date().toISOString().slice(0, 10)}
Standards: HTML5, ECMAScript 2022, JSON-LD schema.org
Components: PWA, server-rendered + static generation
Built with: ❤️ for students everywhere
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
