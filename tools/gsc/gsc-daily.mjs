// Daily Google Search Console snapshot for helpinstudy.com.
// Runs in GitHub Actions. Reads the service-account key from the GSC_SA_JSON secret,
// pulls Search Analytics, and appends a trailing-7-day snapshot to history.json.
import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const raw = process.env.GSC_SA_JSON;
if (!raw) { console.error("❌ GSC_SA_JSON secret is missing. Add it in GitHub → Settings → Secrets."); process.exit(1); }

let creds;
try { creds = JSON.parse(raw); }
catch { console.error("❌ GSC_SA_JSON is not valid JSON. Paste the whole key file contents."); process.exit(1); }

const SITE = "sc-domain:helpinstudy.com";
const HIST = path.join(path.dirname(fileURLToPath(import.meta.url)), "history.json");

const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
});
const wm = google.webmasters({ version: "v3", auth });

const day = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);
// GSC data lags ~3 days; look back 17 days so we get 2 full trailing weeks of settled data.
const startDate = day(17), endDate = day(3);

const rows = (await wm.searchanalytics.query({
  siteUrl: SITE,
  requestBody: { startDate, endDate, dimensions: ["date"], rowLimit: 100 },
})).data.rows || [];

const sum = (a, k) => a.reduce((s, r) => s + (r[k] || 0), 0);
const last7 = rows.slice(-7), prev7 = rows.slice(-14, -7);

const snap = {
  ranOn: new Date().toISOString().slice(0, 10),
  window: `${startDate}..${endDate}`,
  last7Clicks: sum(last7, "clicks"),
  last7Impressions: sum(last7, "impressions"),
  prev7Clicks: sum(prev7, "clicks"),
  prev7Impressions: sum(prev7, "impressions"),
};

let hist = [];
try { hist = JSON.parse(fs.readFileSync(HIST, "utf8")); } catch {}
hist = hist.filter((h) => h.ranOn !== snap.ranOn);   // one entry per day
hist.push(snap);
hist.sort((a, b) => (a.ranOn < b.ranOn ? -1 : 1));
fs.writeFileSync(HIST, JSON.stringify(hist, null, 2) + "\n");


// ── Extra dimensions for the dashboard ────────────────────────────────────────
// Same settled 14-day window as above. Search Analytics quota is 1,200 QPD, so
// three more calls a day is nothing.
const q = async (dimensions, rowLimit) => {
  try {
    return (await wm.searchanalytics.query({
      siteUrl: SITE, requestBody: { startDate, endDate, dimensions, rowLimit },
    })).data.rows || [];
  } catch (e) {
    console.error(`(dashboard) ${dimensions.join("+")} query failed: ${e.message}`);
    return [];
  }
};
const topPages = (await q(["page"], 25))
  // Drop our own site: lookups — they are the owner checking the site, not students.
  .filter((r) => r.impressions > 0)
  .sort((a, b) => b.impressions - a.impressions).slice(0, 5);
const topQueries = (await q(["query"], 50))
  .filter((r) => !/^site:/i.test(r.keys[0]))
  .sort((a, b) => b.impressions - a.impressions).slice(0, 5);
const totalsRow = (await q([], 1))[0] || {};
const avgPosition = totalsRow.position ? totalsRow.position.toFixed(1) : "n/a";

const prevRead = hist.length >= 2 ? hist[hist.length - 2] : null;
const wowClicks = snap.prev7Clicks ? Math.round((100 * (snap.last7Clicks - snap.prev7Clicks)) / snap.prev7Clicks) : 0;
const wowImpr = snap.prev7Impressions ? Math.round((100 * (snap.last7Impressions - snap.prev7Impressions)) / snap.prev7Impressions) : 0;

let verdict;
if (snap.last7Impressions === 0) {
  verdict = "🌱 Nothing yet — Google isn't showing the site in search results. Totally normal for a brand-new site; it takes weeks.";
} else if (snap.last7Clicks === 0) {
  verdict = `👀 Google is showing you (${snap.last7Impressions} impressions in 7 days) but 0 clicks — you're ranking too low to get clicks yet. Normal early on; the job now is to climb the rankings.`;
} else if (!prevRead) {
  verdict = `📊 First clicks tracked — ${snap.last7Clicks} in the last 7 days. Baseline set; we'll compare from here.`;
} else if (wowClicks > 5) {
  verdict = `📈 GROWING — clicks up ${wowClicks}% vs the week before. Whatever you're doing, keep going.`;
} else if (wowClicks < -25 && snap.prev7Clicks >= 5) {
  verdict = `📉 DOWN — clicks fell ${Math.abs(wowClicks)}% vs the week before. Worth a look.`;
} else {
  verdict = `➡️ Steady — about the same as last week (clicks ${wowClicks >= 0 ? "+" : ""}${wowClicks}%).`;
}

const summary = `## 📊 Search Console — ${snap.ranOn}

**${verdict}**

|  | Clicks | Impressions |
|---|---|---|
| Last 7 days | ${snap.last7Clicks} | ${snap.last7Impressions} |
| Week before | ${snap.prev7Clicks} | ${snap.prev7Impressions} |
| Change | ${wowClicks >= 0 ? "+" : ""}${wowClicks}% | ${wowImpr >= 0 ? "+" : ""}${wowImpr}% |

@irabailtariq-beep — for the deep *"why is this happening & what should we fix,"* tell Claude **"check Search Console."**
`;
fs.writeFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "summary.md"), summary);
console.log(summary);
console.log(`(history entries: ${hist.length})`);

// ── One-page dashboard the owner can bookmark ─────────────────────────────────
// Static HTML committed by the daily Action and served from apps/web/public, so
// there is no server route to break the build and no credentials in Vercel env.
// noindex: this is an internal page, and it is deliberately absent from sitemap.ts.
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const short = (u) => esc(String(u).replace("https://helpinstudy.com", "") || "/");
const arrow = (n) => (n > 0 ? `<span class="up">▲ +${n}%</span>` : n < 0 ? `<span class="down">▼ ${n}%</span>` : `<span class="flat">▬ 0%</span>`);
const rowsOr = (rows, render, empty) =>
  rows.length ? rows.map(render).join("") : `<tr><td colspan="3" class="empty">${empty}</td></tr>`;

const dashboard = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Help in Study — how the site is doing</title>
<style>
:root{--bg:#f4efe3;--card:#fff;--ink:#1a2530;--muted:#6b7785;--teal:#0a6357;--line:#e4ddcc}
*{box-sizing:border-box}
body{margin:0;padding:20px;background:var(--bg);color:var(--ink);font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
.wrap{max-width:720px;margin:0 auto}
h1{font-size:22px;margin:0 0 4px}
.when{color:var(--muted);font-size:13px;margin-bottom:18px}
.verdict{background:var(--card);border-left:5px solid var(--teal);border-radius:12px;padding:16px 18px;font-size:17px;margin-bottom:18px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:18px}
.stat{background:var(--card);border-radius:12px;padding:16px;text-align:center}
.stat .n{font-size:32px;font-weight:800;color:var(--teal);line-height:1.1}
.stat .l{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-top:6px}
.stat .d{font-size:13px;margin-top:6px}
.up{color:#0a7d3f;font-weight:700}.down{color:#b3402f;font-weight:700}.flat{color:var(--muted)}
.card{background:var(--card);border-radius:12px;padding:16px 18px;margin-bottom:16px}
.card h2{font-size:15px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin:0 0 10px}
table{width:100%;border-collapse:collapse;font-size:14px}
td{padding:7px 0;border-bottom:1px solid var(--line);vertical-align:top}
tr:last-child td{border-bottom:0}
td.n{text-align:right;white-space:nowrap;color:var(--muted);padding-left:10px}
.empty{color:var(--muted);font-style:italic}
.note{color:var(--muted);font-size:13px;line-height:1.55}
a{color:var(--teal)}
</style></head><body><div class="wrap">
<h1>How the site is doing</h1>
<div class="when">Search Console data for ${startDate} to ${endDate} · updated ${snap.ranOn}. Google's data always runs about 3 days behind.</div>

<div class="verdict">${verdict}</div>

<div class="grid">
  <div class="stat"><div class="n">${snap.last7Clicks}</div><div class="l">Clicks · 7 days</div><div class="d">${arrow(wowClicks)}</div></div>
  <div class="stat"><div class="n">${snap.last7Impressions}</div><div class="l">Times shown</div><div class="d">${arrow(wowImpr)}</div></div>
  <div class="stat"><div class="n">${avgPosition}</div><div class="l">Average position</div><div class="d">lower is better</div></div>
</div>

<div class="card">
  <h2>Pages people saw most</h2>
  <table>${rowsOr(topPages, (r) => `<tr><td>${short(r.keys[0])}</td><td class="n">${r.impressions} shown · ${r.clicks} click${r.clicks === 1 ? "" : "s"}</td></tr>`, "No pages shown in search yet.")}</table>
</div>

<div class="card">
  <h2>What people searched to find us</h2>
  <table>${rowsOr(topQueries, (r) => `<tr><td>${esc(r.keys[0])}</td><td class="n">${r.impressions} shown · position ${r.position.toFixed(0)}</td></tr>`, "No searches recorded yet.")}</table>
</div>

<div class="card">
  <h2>What these numbers mean</h2>
  <p class="note"><b>Times shown</b> is how often a page of ours appeared in someone's Google results. <b>Clicks</b> is how many of them actually came to the site. <b>Average position</b> is where we sit in the results: 1 to 10 is the first page, and anything above 20 means almost nobody scrolls that far. Early on, position is the number that moves first — clicks follow much later.</p>
  <p class="note">This page only covers Google. Visitor numbers from every source live in the Vercel dashboard under Analytics.</p>
</div>
</div></body></html>
`;
const here = path.dirname(fileURLToPath(import.meta.url));
fs.writeFileSync(path.join(here, "dashboard.html"), dashboard);
// Served copy — apps/web/public is deployed as-is, so it lands at /dashboard.html
const publicDir = path.join(here, "..", "..", "apps", "web", "public");
if (fs.existsSync(publicDir)) fs.writeFileSync(path.join(publicDir, "dashboard.html"), dashboard);
console.log("dashboard.html written");
