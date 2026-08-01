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

const pct = snap.prev7Clicks ? Math.round((100 * (snap.last7Clicks - snap.prev7Clicks)) / snap.prev7Clicks) : 0;
const drop = snap.prev7Clicks >= 5 && pct <= -25;
console.log(`✅ Snapshot ${snap.ranOn} (${snap.window})`);
console.log(`   last 7d: ${snap.last7Clicks} clicks / ${snap.last7Impressions} impressions`);
console.log(`   prev 7d: ${snap.prev7Clicks} clicks / ${snap.prev7Impressions} impressions`);
console.log(`   week-over-week clicks: ${pct >= 0 ? "+" : ""}${pct}%${drop ? "  ⚠️ DROP" : ""}`);
console.log(`   history entries: ${hist.length}`);
