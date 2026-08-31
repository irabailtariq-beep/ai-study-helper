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


// ── One-page dashboard the owner can bookmark ────────────────────────────────
// Design follows the 2026-08-31 research: a FUNNEL, not a metric wall, because
// the funnel is honest (every figure is a real count), never empty (pages
// published is non-zero on the worst day), and diagnostic — it names which
// stage is stuck. Deliberately banned here, all of which the first version
// shipped: percentage change on counts under ~30 ("+100%" on 1→2 clicks), a
// verdict emoji that flips on ±1 click, average position as a headline (an
// inverted scale computed over ~34 impressions), CTR, auto-scaled click charts,
// and a live "visitors now" counter that would read 0 all day.
const HERE = path.dirname(fileURLToPath(import.meta.url));
const readJson = (f, fallback) => {
  try { return JSON.parse(fs.readFileSync(path.join(HERE, f), "utf8")); } catch { return fallback; }
};
const idx = readJson("index-state.json", null);

const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const short = (u) => esc(String(u).replace("https://helpinstudy.com", "") || "/");
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;

// Verdict: one plain sentence, no percentages, no emoji that flips on ±1.
const weeksWithAClick = hist.slice(-21).filter((h) => h.last7Clicks > 0).length;
let verdictLine;
if (snap.last7Impressions === 0) {
  verdictLine = "Nobody saw our site in Google this week. That is normal for a site this new — right now the job is simply getting Google to read our pages.";
} else if (snap.last7Clicks === 0) {
  verdictLine = `Our pages appeared in Google ${plural(snap.last7Impressions, "time")} this week, but nobody clicked. That is because we come up around page 8 of the results, and almost nobody scrolls that far. Climbing up the list is what has to happen next.`;
} else {
  const diff = snap.last7Clicks - snap.prev7Clicks;
  const cmp = diff > 0 ? `${plural(diff, "more visit")} than last week`
    : diff < 0 ? `${plural(-diff, "fewer visit")} than last week` : "the same as last week";
  const who = snap.last7Clicks === 1 ? "One person" : `${snap.last7Clicks} people`;
  verdictLine = `${who} came from Google this week — ${cmp}.`;
}

// True per-day impressions for the sparkline. history.json stores a ROLLING
// 7-day window, and plotting a moving average as a time series makes one busy
// day look like a week-long plateau — so the sparkline uses the daily rows
// pulled above instead.
const daily = rows.map((r) => ({ date: r.keys[0], impressions: r.impressions || 0, clicks: r.clicks || 0 }));
const maxImpr = Math.max(1, ...daily.map((d) => d.impressions));
const sparkW = 320, sparkH = 44;
const points = daily.map((d, i) => {
  const x = daily.length > 1 ? (i / (daily.length - 1)) * sparkW : 0;
  const y = sparkH - (d.impressions / maxImpr) * (sparkH - 4) - 2; // y-axis pinned to 0
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(" ");
// One dot per real click — no axis, no interpolation between events that did
// not happen.
const clickDots = daily.map((d) =>
  `<span class="dot ${d.clicks ? "on" : ""}" title="${d.date}: ${plural(d.clicks, "click")}"></span>`).join("");
const lifetimeClicks = hist.reduce((m, h) => Math.max(m, h.last7Clicks), 0);

const indexedNow = idx ? idx.indexed : null;
const totalPages = idx ? idx.total : null;
const indexedPct = idx && idx.total ? Math.round((idx.indexed / idx.total) * 100) : 0;
const indexedDelta = idx && idx.prevIndexed != null ? idx.indexed - idx.prevIndexed : null;

const worklistHtml = idx && idx.worklist?.length
  ? idx.worklist.map((w, i) => `<li><span class="i">${i + 1}</span><code>${short(w.url)}</code></li>`).join("")
  : `<li class="empty">Nothing waiting — every page Google knows about is either indexed or already crawled.</li>`;

const alerts = [];
if (idx?.lost?.length) alerts.push(`<div class="alert bad"><b>${plural(idx.lost.length, "page")} dropped out of Google since the last check.</b> ${idx.lost.map(short).join(", ")}</div>`);
if (idx?.brokenUrls?.length) alerts.push(`<div class="alert bad"><b>${plural(idx.brokenUrls.length, "page")} Google could not fetch or is blocked from indexing.</b> ${idx.brokenUrls.slice(0, 5).map((b) => short(b.url)).join(", ")}</div>`);
if (idx && indexedDelta > 0) alerts.push(`<div class="alert good"><b>${plural(indexedDelta, "new page")} got indexed since the last check.</b></div>`);

const rowsOr = (arr, render, empty) =>
  arr.length ? arr.map(render).join("") : `<tr><td class="empty">${empty}</td></tr>`;

const dashboard = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0a6357">
<title>Help in Study — how the site is doing</title>
<style>
:root{--bg:#f4efe3;--card:#fff;--ink:#1a2530;--muted:#6b7785;--teal:#0a6357;--line:#e8e1d2;--good:#0a7d3f;--bad:#b3402f}
@media(prefers-color-scheme:dark){:root{--bg:#161b1e;--card:#1f262a;--ink:#eef2f4;--muted:#9aa7b0;--line:#2c353a}}
*{box-sizing:border-box}
body{margin:0;padding:14px;background:var(--bg);color:var(--ink);font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
.wrap{max-width:560px;margin:0 auto}
.pill{display:inline-block;font-size:12px;color:var(--muted);background:var(--card);border-radius:20px;padding:5px 12px;margin-bottom:12px}
.verdict{background:var(--card);border-left:5px solid var(--teal);border-radius:12px;padding:15px 17px;font-size:17px;line-height:1.45;margin-bottom:14px}
.funnel{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}
.stage{background:var(--card);border-radius:12px;padding:14px;text-align:center;position:relative}
.stage .n{font-size:30px;font-weight:800;color:var(--teal);line-height:1.1}
.stage .l{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin-top:5px;line-height:1.3}
.stage .s{font-size:12px;color:var(--muted);margin-top:5px}
.card{background:var(--card);border-radius:12px;padding:15px 17px;margin-bottom:12px}
.card h2{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin:0 0 11px;font-weight:700}
.bar{height:12px;background:var(--line);border-radius:6px;overflow:hidden;margin:8px 0 6px}
.bar i{display:block;height:100%;background:var(--teal)}
.alert{border-radius:10px;padding:12px 14px;margin-bottom:10px;font-size:14px;line-height:1.45}
.alert.good{background:rgba(10,125,63,.1);border-left:4px solid var(--good)}
.alert.bad{background:rgba(179,64,47,.1);border-left:4px solid var(--bad)}
ol{margin:0;padding:0;list-style:none}
ol li{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--line);font-size:14px}
ol li:last-child{border-bottom:0}
ol .i{flex:none;width:22px;height:22px;border-radius:50%;background:var(--teal);color:#fff;font-size:12px;font-weight:700;display:grid;place-items:center}
code{font:13px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;word-break:break-all}
table{width:100%;border-collapse:collapse;font-size:14px}
td{padding:7px 0;border-bottom:1px solid var(--line);vertical-align:top}
tr:last-child td{border-bottom:0}
td.n{text-align:right;white-space:nowrap;color:var(--muted);padding-left:10px;font-size:13px}
.dots{line-height:1;word-break:break-all}
.dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--line);margin:2px}
.dot.on{background:var(--teal);width:9px;height:9px}
.note{color:var(--muted);font-size:13px;line-height:1.55;margin:8px 0 0}
.empty{color:var(--muted);font-style:italic;font-size:14px}
b{font-weight:700}
</style></head><body><div class="wrap">

<div class="pill">Checked ${snap.ranOn} · Google's numbers only go up to ${endDate}, because it always reports about 3 days late</div>

<div class="verdict">${verdictLine}</div>

${alerts.join("")}

<div class="funnel">
  <div class="stage"><div class="n">${totalPages ?? "–"}</div><div class="l">Pages we built</div><div class="s">the whole website</div></div>
  <div class="stage"><div class="n">${indexedNow ?? "–"}</div><div class="l">Google has read</div><div class="s">${indexedDelta > 0 ? `+${indexedDelta} since yesterday` : "the rest are invisible"}</div></div>
  <div class="stage"><div class="n">${snap.last7Impressions}</div><div class="l">Showed up in Google</div><div class="s">this week, in someone's search</div></div>
  <div class="stage"><div class="n">${snap.last7Clicks}</div><div class="l">People who came</div><div class="s">this week, clicked and visited</div></div>
</div>

<div class="card">
  <h2>What is holding us back</h2>
  <div class="bar"><i style="width:${indexedPct}%"></i></div>
  <div style="font-size:15px"><b>Google has only read ${indexedNow ?? "–"} of our ${totalPages ?? "–"} pages</b> (${indexedPct}%).</div>
  <p class="note">Google has to read a page before it can ever show it to anyone. The other ${(totalPages ?? 0) - (indexedNow ?? 0)} pages might as well not exist yet — nobody can find them, no matter how good they are. Getting this number up is the single most useful thing we can do right now.</p>
</div>

<div class="card">
  <h2>Your job today — 10 pages to submit</h2>
  <ol>${worklistHtml}</ol>
  <p class="note">This is asking Google to come and read these pages. Open Search Console, paste one link into the search bar at the very top, press enter, then click <b>Request indexing</b>. Repeat for each. Google only allows about 10 a day, and this list is already sorted so the most useful ones are first.</p>
</div>

<div class="card">
  <h2>Showing up in Google, day by day</h2>
  <svg width="100%" viewBox="0 0 ${sparkW} ${sparkH}" preserveAspectRatio="none" style="display:block;height:52px">
    <polyline fill="none" stroke="var(--teal)" stroke-width="2" stroke-linejoin="round" points="${points}"/>
  </svg>
  <p class="note">Each point is one day. It counts how many times one of our pages appeared in front of someone searching Google — whether or not they clicked. Best day so far: ${maxImpr}. The bottom of the chart is zero, so a low flat line really does mean nothing happened.</p>
</div>

<div class="card">
  <h2>Days someone actually visited</h2>
  <div class="dots">${clickDots}</div>
  <p class="note">One dot per day. A dark dot means at least one person clicked through to the site that day. Most days are still empty — that is normal this early. Best week so far: ${plural(lifetimeClicks, "visitor")}.</p>
</div>

<div class="card">
  <h2>Which of our pages Google showed</h2>
  <table>${rowsOr(topPages, (r) => `<tr><td>${short(r.keys[0])}</td><td class="n">${r.impressions} shown · ${plural(r.clicks, "click")}</td></tr>`, "Nothing shown in search yet.")}</table>
</div>

<div class="card">
  <h2>What people typed into Google</h2>
  <table>${rowsOr(topQueries, (r) => `<tr><td>${esc(r.keys[0])}</td><td class="n">${r.impressions} shown · position ${r.position.toFixed(0)}</td></tr>`, "No searches recorded yet.")}</table>
  <p class="note">These are real things people typed into Google that our site showed up for. <b>Position</b> means where we appeared: 1 to 10 is the first page of results, and 80 means page eight, where nobody looks. Google hides the words behind rare visits to protect people, so this list is always shorter than reality — it fills in by itself as we grow.</p>
</div>

<div class="card">
  <h2>Other websites linking to us</h2>
  <div style="font-size:15px"><b>${idx ? idx.externalLinks.length : "–"} found.</b></div>
  <p class="note">When another website links to ours, Google treats it as a vote that we are trustworthy — and trust is exactly what decides whether it bothers reading our pages. This is the reason most of our pages are still unread. Note: the one we have is an automatic spam page, so it counts for nothing real.</p>
</div>

<div class="card">
  <h2>How this all works</h2>
  <p class="note">It always happens in this order, and you cannot skip a step:<br><br><b>1. We build a page.</b> Instant — we control this.<br><b>2. Google reads it.</b> Days to months. We push this along by submitting the 10 links above.<br><b>3. It starts showing up</b> when someone searches. Weeks after that.<br><b>4. Someone clicks</b> and visits. This is last, and slowest, because it only happens once we climb high enough in the results to be seen.<br><br>So early on, the first two numbers are the ones that move — and they are the two you can actually control. The last one is the reward for the other three.</p>
</div>

</div></body></html>
`;
fs.writeFileSync(path.join(HERE, "dashboard.html"), dashboard);
const publicDir = path.join(HERE, "..", "..", "apps", "web", "public");
if (fs.existsSync(publicDir)) fs.writeFileSync(path.join(publicDir, "dashboard.html"), dashboard);
console.log("dashboard.html written");
