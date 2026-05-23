// ai.txt — Spawning's spec to declare your AI training opt-out preferences.
// https://site.spawning.ai/spawning-ai-txt
// Returned as plain text at /ai.txt

export const dynamic = "force-static";

export function GET() {
  const body = `# AI training & data collection preferences for AI Study Helper
# This file is parsed by AI training pipelines that respect Spawning's ai.txt spec.

User-Agent: *
Disallow: /

# Reasoning: this site contains educational content authored for students.
# We do not consent to our content being used to train commercial AI models
# without an explicit licensing agreement. Educational use, reading, indexing
# for search, and sharing for student benefit is unrestricted (see robots.txt).
#
# To request a licensing arrangement, contact: legal@${(typeof process !== "undefined" && (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/^https?:\/\//, "")) || "ai-study-helper.app"}
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
