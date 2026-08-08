// Validate the blog queue BEFORE anything is published.
// Runs as the first step of blog-daily.yml. Without this, one malformed queued
// post gets injected into posts-batch-3.ts, breaks the Vercel build, and the
// site silently stops updating while the Action still reports success.
// Node built-ins only — no npm install in CI.
import fs from "fs";

const QUEUE = "tools/blog-queue/queue.json";
const CONTENT = [
  "apps/web/src/content/posts.ts",
  "apps/web/src/content/posts-batch-2.ts",
  "apps/web/src/content/posts-batch-3.ts",
];
const MIN_WORDS = 800;
const LOW_QUEUE_DAYS = 7; // warn when fewer than this many days of posts remain
const PER_DAY = Number(process.env.PUBLISH_COUNT || 2);

const problems = [];
const warnings = [];

let queue;
try {
  queue = JSON.parse(fs.readFileSync(QUEUE, "utf8"));
} catch (e) {
  console.error(`❌ queue.json is not valid JSON: ${e.message}`);
  process.exit(1);
}
if (!Array.isArray(queue)) {
  console.error("❌ queue.json is not an array.");
  process.exit(1);
}

// Every slug already used anywhere (live posts + redirects), so we can't collide.
const existing = new Set();
for (const f of CONTENT) {
  let src = "";
  try { src = fs.readFileSync(f, "utf8"); } catch { continue; }
  for (const m of src.matchAll(/slug:\s*["'`]([a-z0-9-]+)["'`]/g)) existing.add(m[1]);
  for (const m of src.matchAll(/^\s*["'`]([a-z0-9-]+)["'`]\s*:/gm)) existing.add(m[1]); // BLOG_REDIRECTS keys
}

const seen = new Set();
queue.forEach((p, i) => {
  const at = `queue[${i}] (${p?.slug ?? "no slug"})`;
  for (const field of ["slug", "title", "description", "readTime", "body"]) {
    if (!p?.[field] || String(p[field]).trim() === "") problems.push(`${at}: missing ${field}`);
  }
  if (!Array.isArray(p?.tags) || p.tags.length === 0) problems.push(`${at}: missing tags`);
  if (p?.slug && !/^[a-z0-9-]+$/.test(p.slug)) problems.push(`${at}: slug is not url-safe`);
  if (p?.slug && existing.has(p.slug)) problems.push(`${at}: slug already exists in a live post or redirect`);
  if (p?.slug && seen.has(p.slug)) problems.push(`${at}: duplicate slug inside the queue`);
  if (p?.slug) seen.add(p.slug);

  const body = String(p?.body ?? "");
  // These break the custom markdown renderer or the generated TypeScript file.
  if (body.includes("`")) problems.push(`${at}: body contains a backtick`);
  if (body.includes("${")) problems.push(`${at}: body contains \${ (breaks the template literal)`);
  if (/\$\d/.test(body)) problems.push(`${at}: body contains $ before a digit (KaTeX eats it)`);
  if (body.split("\n").some((l) => /^\s*\|/.test(l))) problems.push(`${at}: body contains a markdown table`);
  if (body.split("\n").some((l) => /^\s*>\s/.test(l))) problems.push(`${at}: body contains a blockquote`);
  if (body.includes("![")) problems.push(`${at}: body contains an image`);
  if (/\[\/[a-z-]+\]\(/.test(body)) problems.push(`${at}: body has raw-path link text like [/quiz](/quiz)`);

  // Links must point at routes that still exist.
  const DEAD = ["pricing","refund-policy","concept-map","diagnostic","formula-sheet","graph-plotter","calculator","vocab","translate","whiteboard","problem-variants","syllabus","parent","personal-explain","classroom","past-papers"];
  for (const m of body.matchAll(/\]\((\/[a-z0-9-]+)/g)) {
    if (DEAD.includes(m[1].slice(1))) problems.push(`${at}: links to deleted route ${m[1]}`);
  }

  // Forbidden exam boards — the site covers five systems only.
  const FORBIDDEN = /\b(IB Diploma|NEET|JEE|FBISE|ICSE|WJEC|CCEA|UPSC|MDCAT|Common Core)\b/;
  const hit = body.match(FORBIDDEN) || String(p?.title ?? "").match(FORBIDDEN);
  if (hit) problems.push(`${at}: mentions forbidden exam board "${hit[0]}"`);

  const words = body.trim().split(/\s+/).filter(Boolean).length;
  if (words < MIN_WORDS) problems.push(`${at}: only ${words} words (minimum ${MIN_WORDS})`);
  if (!/##\s*FAQ/i.test(body)) warnings.push(`${at}: no "## FAQ" section, so no FAQPage schema`);
});

// Running out of posts is not an error, but it must be visible — silence here is
// how the blog quietly stops for weeks.
const daysLeft = Math.floor(queue.length / Math.max(PER_DAY, 1));
if (queue.length === 0) {
  problems.push("QUEUE IS EMPTY — nothing left to publish. Add posts to tools/blog-queue/queue.json.");
} else if (daysLeft < LOW_QUEUE_DAYS) {
  warnings.push(`Only ${queue.length} posts left (~${daysLeft} days at ${PER_DAY}/day). Top the queue up.`);
}

for (const w of warnings) console.log(`⚠️  ${w}`);
if (problems.length) {
  console.error(`\n❌ Queue validation failed (${problems.length}):`);
  for (const p of problems) console.error(`   ${p}`);
  process.exit(1);
}
console.log(`✅ Queue OK — ${queue.length} posts (~${daysLeft} days at ${PER_DAY}/day), all valid.`);
