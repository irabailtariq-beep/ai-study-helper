// Auto-publish the next queued blog post.
// Runs daily in GitHub Actions: takes queue[0], injects it into posts-batch-3.ts
// at the @@BLOG_QUEUE_INSERT@@ marker, dates it today, and drops it from the queue.
// Uses Node built-ins only — no npm install needed.
import fs from "fs";

const QUEUE = "tools/blog-queue/queue.json";
const POSTS = "apps/web/src/content/posts-batch-3.ts";
const MARKER = "  // @@BLOG_QUEUE_INSERT@@";

const queue = JSON.parse(fs.readFileSync(QUEUE, "utf8"));
if (!Array.isArray(queue) || queue.length === 0) {
  console.log("Queue is empty — nothing to publish today.");
  process.exit(0);
}

const post = queue.shift();
const today = new Date().toISOString().slice(0, 10);

// Escape anything that would break a template literal (queue is pre-validated, this is a safety net).
const escBody = String(post.body).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const obj = `
  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    description: ${JSON.stringify(post.description)},
    publishedAt: ${JSON.stringify(today)}, readTime: ${JSON.stringify(post.readTime)},
    tags: ${JSON.stringify(post.tags)},
    body: \`
${escBody}
\`,
  },
${MARKER}`;

let src = fs.readFileSync(POSTS, "utf8");
if (!src.includes(MARKER)) {
  console.error("ERROR: insert marker not found in posts-batch-3.ts — aborting.");
  process.exit(1);
}
src = src.replace(MARKER, obj);
fs.writeFileSync(POSTS, src);
fs.writeFileSync(QUEUE, JSON.stringify(queue, null, 1) + "\n");

console.log(`Published "${post.slug}" (dated ${today}). ${queue.length} post(s) left in the queue.`);
