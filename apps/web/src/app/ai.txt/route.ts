// ai.txt — Spawning's spec to declare your AI training opt-out preferences.
// https://site.spawning.ai/spawning-ai-txt
// Returned as plain text at /ai.txt

export const dynamic = "force-static";

export function GET() {
  const body = `# AI training & data collection preferences for Help in Study
# This file follows Spawning's ai.txt spec, which covers TRAINING-DATA
# collection only. It is not a search directive: crawling, indexing and
# citation are governed by /robots.txt, which deliberately ALLOWS search and
# AI-answer crawlers (GPTBot, Google-Extended, ClaudeBot, PerplexityBot, CCBot)
# so students can find this site through ChatGPT, Claude, Perplexity and
# Google AI Overviews.

User-Agent: *
Disallow: /

# Reasoning: this site contains educational content written by a student for
# students. We do not consent to it being scraped as training data for
# commercial AI models without an explicit licensing agreement. Reading,
# indexing, quoting with attribution, and citing in AI answers are all fine.
#
# To request a licensing arrangement, contact: raistudyhelper@gmail.com
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
