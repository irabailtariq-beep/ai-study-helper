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
