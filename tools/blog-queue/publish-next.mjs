// Auto-publish the next queued blog post(s).
// Runs daily in GitHub Actions: takes the next COUNT posts from queue[0..],
// injects each into posts-batch-3.ts at the @@BLOG_QUEUE_INSERT@@ marker,
// dates them today, and drops them from the queue.
// Uses Node built-ins only — no npm install needed.
import fs from "fs";

const QUEUE = "tools/blog-queue/queue.json";
const POSTS = "apps/web/src/content/posts-batch-3.ts";
const MARKER = "  // @@BLOG_QUEUE_INSERT@@";
const COUNT = Number(process.env.PUBLISH_COUNT || 2); // posts per run

const queue = JSON.parse(fs.readFileSync(QUEUE, "utf8"));
if (!Array.isArray(queue) || queue.length === 0) {
  console.log("Queue is empty — nothing to publish today.");
  process.exit(0);
}

let src = fs.readFileSync(POSTS, "utf8");
if (!src.includes(MARKER)) {
  console.error("ERROR: insert marker not found in posts-batch-3.ts — aborting.");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
// Escape anything that would break a template literal (queue is pre-validated; safety net).
const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const published = [];
for (let i = 0; i < COUNT && queue.length > 0; i++) {
  const post = queue.shift();
  const obj = `
  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    description: ${JSON.stringify(post.description)},
    publishedAt: ${JSON.stringify(today)}, readTime: ${JSON.stringify(post.readTime)},
    tags: ${JSON.stringify(post.tags)},
    body: \`
${esc(post.body)}
\`,
  },
${MARKER}`;
  src = src.replace(MARKER, obj);
  published.push(post.slug);
}

fs.writeFileSync(POSTS, src);
fs.writeFileSync(QUEUE, JSON.stringify(queue, null, 1) + "\n");
console.log(`Published ${published.length}: ${published.join(", ")}. ${queue.length} left in queue.`);
