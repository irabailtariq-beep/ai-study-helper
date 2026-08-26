// Assemble reviewed agent output into the exam-page / tool-landing registries.
// Usage: node tools/exam-pages/assemble.mjs <exam-pages.json> <landings.json>
// Validates the renderer's plain-text rules before touching any source file.
import fs from "fs";

const EXAM = "apps/web/src/content/examPages.ts";
const LAND = "apps/web/src/content/toolLandings.ts";
const E_MARK = "  // @@EXAM_PAGES_INSERT@@";
const L_MARK = "  // @@TOOL_LANDINGS_INSERT@@";

const bad = [];
function checkText(where, v) {
  if (typeof v !== "string") return;
  if (v.includes("`")) bad.push(`${where}: backtick`);
  if (/\$\s?\d/.test(v)) bad.push(`${where}: $ before digit`);
  if (/^\s*\|/m.test(v)) bad.push(`${where}: table row`);
  if (/^\s*#/m.test(v)) bad.push(`${where}: markdown heading`);
  if (v.includes("${")) bad.push(`${where}: template literal`);
}
function walk(where, o) {
  if (typeof o === "string") return checkText(where, o);
  if (Array.isArray(o)) return o.forEach((x, i) => walk(`${where}[${i}]`, x));
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) walk(`${where}.${k}`, v);
}
const ser = (o, indent) => JSON.stringify(o, null, 2).split("\n").map((l, i) => (i === 0 ? l : indent + l)).join("\n");

function inject(file, marker, items, label) {
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes(marker)) { console.error(`marker missing in ${file}`); process.exit(1); }
  const existing = new Set([...src.matchAll(/"slug": "([a-z0-9-]+)"/g)].map((m) => m[1]));
  let added = 0;
  for (const it of items) {
    if (existing.has(it.slug)) { console.log(`  skip (already present): ${it.slug}`); continue; }
    src = src.replace(marker, `  ${ser(it, "  ")},\n${marker}`);
    added++;
  }
  fs.writeFileSync(file, src);
  console.log(`${label}: ${added} added`);
}

const [examFile, landFile] = process.argv.slice(2);
if (examFile && fs.existsSync(examFile)) {
  const pages = JSON.parse(fs.readFileSync(examFile, "utf8"));
  pages.forEach((p, i) => walk(`exam[${i}:${p.slug}]`, p));
  if (bad.length) { console.error("VALIDATION FAILED:\n" + bad.join("\n")); process.exit(1); }
  inject(EXAM, E_MARK, pages, "exam pages");
}
if (landFile && fs.existsSync(landFile)) {
  const pages = JSON.parse(fs.readFileSync(landFile, "utf8"));
  pages.forEach((p, i) => walk(`landing[${i}:${p.slug}]`, p));
  if (bad.length) { console.error("VALIDATION FAILED:\n" + bad.join("\n")); process.exit(1); }
  inject(LAND, L_MARK, pages, "tool landings");
}
console.log("assemble done");
