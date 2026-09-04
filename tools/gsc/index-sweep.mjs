// Nightly index-status sweep of every URL in the sitemap.
//
// Turns the owner's daily question — "which 10 URLs do I submit to Search
// Console today?" — into a generated, ranked list, and produces the two numbers
// the dashboard's funnel needs (pages published, pages Google has indexed).
//
// Also harvests referringUrls from the same API responses, which is a free
// backlink check: anything linking to us that is not us is an external link.
//
// Quota (developers.google.com/webmaster-tools/limits): URL Inspection allows
// 600 queries/minute and 2,000/day per site. ~270 URLs is ~13% of the daily
// allowance, so this can run every night indefinitely.
import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const raw = process.env.GSC_SA_JSON;
if (!raw) { console.error("❌ GSC_SA_JSON secret is missing."); process.exit(1); }
let creds;
try { creds = JSON.parse(raw); }
catch { console.error("❌ GSC_SA_JSON is not valid JSON."); process.exit(1); }

const SITE = "sc-domain:helpinstudy.com";
const ORIGIN = "https://helpinstudy.com";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const STATE = path.join(HERE, "index-state.json");

const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
});
const sc = google.searchconsole({ version: "v1", auth });

// ── URL list straight from the live sitemap, so the sweep can never drift from
//    what we actually publish. ───────────────────────────────────────────────
const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) { console.error("❌ sitemap returned no URLs"); process.exit(1); }
console.log(`sweeping ${urls.length} URLs from the sitemap`);

const prev = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, "utf8")) : { pages: {} };
const pages = {};
const externalLinks = new Set();
let done = 0, failed = 0;

// Paced concurrency: well under 600 QPM, and gentle enough that a transient
// failure doesn't cascade. A failed URL keeps its previous state rather than
// being recorded as "unknown", which would fake a regression on the dashboard.
const QUEUE = [...urls];
async function worker() {
  while (QUEUE.length) {
    const url = QUEUE.shift();
    try {
      const r = (await sc.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl: SITE },
      })).data.inspectionResult || {};
      const idx = r.indexStatusResult || {};
      pages[url] = {
        coverage: idx.coverageState || "unknown",
        verdict: idx.verdict || "",
        lastCrawl: idx.lastCrawlTime ? idx.lastCrawlTime.slice(0, 10) : null,
        fetch: idx.pageFetchState || "",
        indexing: idx.indexingState || "",
        robots: idx.robotsTxtState || "",
        refs: (idx.referringUrls || []).length,
        firstSeen: prev.pages?.[url]?.firstSeen || new Date().toISOString().slice(0, 10),
      };
      for (const ref of idx.referringUrls || []) {
        if (!ref.includes("helpinstudy.com")) externalLinks.add(ref);
      }
    } catch (e) {
      failed++;
      if (prev.pages?.[url]) pages[url] = prev.pages[url];
      if (failed <= 3) console.error(`  inspect failed for ${url}: ${e.message}`);
    }
    done++;
    if (done % 50 === 0) console.log(`  ${done}/${urls.length}`);
  }
}
await Promise.all(Array.from({ length: 4 }, worker));

// ── Tomorrow's worklist ──────────────────────────────────────────────────────
// Google's own docs say a "Crawled - currently not indexed" page is a quality
// verdict and resubmitting it unchanged does nothing, so those are excluded.
// Real breakage (fetch errors, blocked indexing) outranks patience problems.
const isIndexed = (p) => /submitted and indexed|indexed, not submitted/i.test(p.coverage);
// "*_UNSPECIFIED" is the API's way of saying "no data" — it is what every page
// Google has never fetched reports, so treating it as an error flagged 197 of
// 234 healthy pages as broken on the first run. Only a NAMED failure counts.
const FETCH_OK = new Set(["SUCCESSFUL", "PAGE_FETCH_STATE_UNSPECIFIED", ""]);
const INDEXING_OK = new Set(["INDEXING_ALLOWED", "INDEXING_STATE_UNSPECIFIED", ""]);
const isBroken = (p) => !FETCH_OK.has(p.fetch || "") || !INDEXING_OK.has(p.indexing || "");
// Pages that exist for humans, not for search. Submitting these wastes the
// owner's daily quota — the first worklist we generated led with /about,
// /contact and /terms.
const NOT_WORTH_SUBMITTING = /\/(about|contact|terms|privacy|settings|signin|progress|onboarding|dashboard)/;

// Ordering follows Google's own guidance rather than intuition. Its docs say a
// page in "Discovered - currently not indexed" has ALREADY been scheduled and
// "there's no need to resubmit" it — so those are excluded entirely, which is
// most of our unindexed pages. Only URLs Google has genuinely never seen are
// worth a manual submission, and only once each.
const rank = (p, url) => {
  if (NOT_WORTH_SUBMITTING.test(url)) return 9;
  if (isBroken(p)) return 0;                                            // a real, named failure
  if (/unknown/i.test(p.coverage)) return 1;                            // Google has never seen it
  return 9;                                                             // already discovered, indexed, or judged
};
const worklist = Object.entries(pages)
  .filter(([url, p]) => rank(p, url) < 9)
  .sort((a, b) => rank(a[1], a[0]) - rank(b[1], b[0]) || String(a[1].firstSeen).localeCompare(String(b[1].firstSeen)))
  .slice(0, 10)
  .map(([url, p]) => ({ url, why: isBroken(p) ? `BROKEN: ${p.fetch || p.indexing}` : p.coverage }));

const indexed = Object.values(pages).filter(isIndexed).length;
const broken = Object.entries(pages).filter(([, p]) => isBroken(p));

// Pages that were indexed yesterday and are not today — the one genuinely
// urgent alert, since it means we lost something we already had.
const lost = Object.entries(pages)
  .filter(([url, p]) => prev.pages?.[url] && isIndexed(prev.pages[url]) && !isIndexed(p))
  .map(([url]) => url);

// If a large share of inspections failed, this run did not really happen: keep
// the previous numbers and say so, rather than stamping today's date on stale
// counts and reporting a false "nothing was lost".
const failureRate = urls.length ? failed / urls.length : 0;
const incomplete = failureRate > 0.2;

const state = {
  ranOn: incomplete ? (prev.ranOn ?? null) : new Date().toISOString().slice(0, 10),
  attemptedOn: new Date().toISOString().slice(0, 10),
  failed,
  incomplete,
  total: urls.length,
  indexed,
  prevIndexed: prev.indexed ?? null,
  counts: Object.values(pages).reduce((acc, p) => {
    const k = p.coverage || "unknown"; acc[k] = (acc[k] || 0) + 1; return acc;
  }, {}),
  brokenUrls: broken.map(([url, p]) => ({ url, fetch: p.fetch, indexing: p.indexing })),
  // A failed sweep cannot distinguish "deindexed" from "not checked".
  lost: incomplete ? [] : lost,
  externalLinks: [...externalLinks].sort(),
  worklist,
  // How many URLs remain that are actually worth submitting. When this hits 0
  // the owner's daily submission task is finished for good.
  submittableLeft: Object.entries(pages).filter(([url, p]) => rank(p, url) < 9).length,
  pages,
};
fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");

console.log(`\nindexed: ${indexed}/${urls.length}${prev.indexed != null ? ` (was ${prev.indexed})` : ""}`);
for (const [k, v] of Object.entries(state.counts).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(4)}  ${k}`);
if (lost.length) console.log(`\n⚠️ DEINDEXED since last run: ${lost.join(", ")}`);
if (broken.length) console.log(`\n⚠️ broken: ${broken.length} page(s)`);
if (incomplete) {
  console.error(`\n⚠️ SWEEP INCOMPLETE: ${failed} of ${urls.length} inspections failed. Keeping the previous counts; the dashboard will show this run as incomplete.`);
}
console.log(`\nexternal links known to Google: ${externalLinks.size}`);
for (const l of externalLinks) console.log(`  ${l}`);
console.log(`\nworth submitting in total: ${state.submittableLeft}`);
console.log(`\ntomorrow's 10:`);
worklist.forEach((w, i) => console.log(`  ${i + 1}. ${w.url}  [${w.why}]`));

// Exit non-zero on a broken run so the workflow step fails visibly instead of
// the dashboard quietly showing yesterday's numbers under today's date.
if (incomplete) process.exit(1);
