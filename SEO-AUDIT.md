# SEO + AdSense Audit · helpinstudy.com

_Audit date: 2026-05-10_

## TL;DR

- ✅ **Technical SEO**: solid. Sitemap, robots, schema, canonicals, OG, mobile-responsive, HTTPS — all in place.
- ⚠️ **Content depth**: articles average 250-300 words. Google's modern bar for AdSense + ranking is **800+ words per post**. This is the one thing standing between you and a confident AdSense application.
- ✅ **Site structure**: privacy, terms, contact, about, refund-policy all live and reachable.
- ✅ **AdSense slots**: code is wired and conditional on `NEXT_PUBLIC_ADSENSE_CLIENT`. Flips on instantly the moment your AdSense ID is set.

---

## 1. Article inventory

| | Count |
|---|---|
| Original posts (`posts.ts`) | 65 |
| Batch 2 (`posts-batch-2.ts`) | 50 |
| **Total live articles** | **115** |
| Average word count | **~275 words** |
| Min / Max | 175 / 438 |

### What Google wants (as of 2025-2026)

- Quality bar: **800-2500 words per article** is the sweet spot
- Below 600 words is "thin content" — risk of de-ranking
- Above 3000 words → diminishing returns
- AdSense reviewers explicitly flag pages with "low-value content"

### My honest verdict

The 115 articles are concise and human-voiced, but they're **too short for a clean AdSense application**. AdSense reviews are getting stricter — even quality short content gets rejected with "low-value content" notes.

**Two options:**

1. **Expand 30 cornerstone articles to 1200+ words each.** This is the smart move. Pick the 30 that target highest-volume keywords (math, English, GCSE, CBSE, IB, AP, Pomodoro, ADHD study, exam tips). Cover everything else later.

2. **Apply now and risk a "low-value content" rejection**, then expand after they tell us specifically which pages flagged.

I recommend option 1. Tell me when you're ready and I'll start expanding.

---

## 2. Technical SEO — verified live

### What was fixed today

| Issue | Status | Fix |
|---|---|---|
| Sitemap URLs malformed (`https://helpinstudy.com\n/foo`) | ✅ Fixed | Trim trailing whitespace from `SITE.url` |
| Robots.txt sitemap line wrapping across two lines | ✅ Fixed | Same trim |
| 16 tool pages had no H1 in SSR HTML (only after JS hydration) | ✅ Fixed | Added H1 + intro to no-profile fallback |

### What's already in place (verified live)

- ✅ **Sitemap**: 1,713 URLs at `/sitemap.xml`, all well-formed
- ✅ **Robots.txt**: clean, with `Sitemap: https://helpinstudy.com/sitemap.xml`
- ✅ **Robots meta**: `index, follow` with `max-image-preview: large`
- ✅ **Canonical URLs**: every page has `<link rel="canonical">`
- ✅ **Open Graph**: 6 og:* tags per page (title, description, url, type, image, site_name)
- ✅ **Twitter card**: `summary_large_image` with dynamic OG image
- ✅ **JSON-LD schema** on every page: Organization, WebSite (with SearchAction), WebApplication, plus per-page-type schemas:
  - Blog posts: `Article` + `WebPage` + `ImageObject`
  - Subject pages: `FAQPage` + `Course`
- ✅ **HTTPS** with auto-renewing Let's Encrypt
- ✅ **www → apex 308 redirect** in place
- ✅ **Favicon family**: 16, 32, 180, 192, 512, 1024 + SVG mask
- ✅ **PWA manifest**: installable on iOS + Android home screens
- ✅ **Dynamic OG image generator** at `/api/og` (1200×630 PNG, branded with logo)
- ✅ **AI crawler blocking**: GPTBot, Google-Extended, ClaudeBot, anthropic-ai, CCBot all blocked in robots.txt
- ✅ **Mobile responsive**: hamburger menu, collapsible footer accordions, fluid type
- ✅ **Persistent nav + footer** on every page (was a fix two turns ago)

### Per-page H1 status (now live)

All 16 tool pages now have an SSR-rendered H1 even when the user hasn't completed onboarding:

```
/math-solver           h1: Step-by-step Math Solver
/transform             h1: Make any topic about your interests
/explain               h1: Explain anything
/quiz                  h1: Quiz me — auto practice
/past-papers           h1: Past papers in your board's style
/diagnostic            h1: Diagnostic + 7-day study plan
/grade                 h1: Mark my answer
/concept-map           h1: Concept map
/syllabus              h1: Digital syllabus extractor
/essay-coach           h1: AI essay coach
/vocab                 h1: Vocabulary builder
/translate             h1: Translation mode for students
/whiteboard            h1: Whiteboard photo to neat notes
/lecture-summary       h1: Lecture summary
/mock-exam             h1: Mock exam simulator
/problem-variants      h1: Problem variants generator
```

---

## 3. AdSense eligibility checklist

| Requirement | Status |
|---|---|
| Privacy policy with cookies + 3rd party data note | ✅ `/privacy` (mentions cookies, AdSense, Google) |
| Terms of service | ✅ `/terms` |
| Contact page | ✅ `/contact` |
| About page | ✅ `/about` |
| Refund / cancellation policy | ✅ `/refund-policy` |
| Custom domain (not vercel.app) | ✅ `helpinstudy.com` |
| HTTPS | ✅ |
| Sitemap + robots.txt | ✅ 1,713 URLs |
| Indexable by Googlebot | ✅ `index, follow` |
| Easy navigation | ✅ persistent nav + footer + hamburger |
| Article schema on blog posts | ✅ `Article`, `WebPage`, `ImageObject` |
| Substantive content volume | ✅ 115 articles |
| **Article depth (~800+ words)** | ⚠️ **Average 275 words — below threshold** |
| Original content (not AI-generated low quality) | ⚠️ AI-assisted, hand-edited, but Google can flag this if they choose |
| AdSense slot code wired | ✅ `<AdSlot />` component conditional on env var |
| AdSense site verification meta tag slot | ✅ `verification.other` slot in `metadata` ready |
| Site age (typically 6 months minimum) | ⏳ Domain is recent |

### What Google's AdSense reviewer will look at

1. **Visit `helpinstudy.com`** → check the homepage looks legit, has nav, has clear value prop ✓
2. **Click 3-5 articles** → check they're original, well-written, useful, 800+ words each ⚠️
3. **Click privacy policy** → check it mentions cookies + ads ✓
4. **Click contact** → check there's a real contact method ✓
5. **Check the URL is HTTPS, has SSL** ✓
6. **Check the site isn't "made for ads"** (i.e. just a content farm) → 25 working tools + product + clear value prop ✓

The single risk is item #2: article depth.

---

## 4. Recommended action plan (ordered by ROI)

### Tier 1 — do before applying for AdSense

1. **Expand 30 cornerstone articles to 1200+ words.** Pick the highest-volume targets first:
   - `best-free-ai-study-helper-2026`
   - `ai-study-helper-math`
   - `gcse-revision-guide`
   - `cbse-class-10-board-exam`
   - `jee-mains-prep`
   - `how-to-study-for-exams`
   - `spaced-repetition-explained`
   - `how-to-write-thesis-statement`
   - `quadratic-formula-step-by-step`
   - `pythagoras-theorem-when-to-use`
   - `photosynthesis-explained-simply`
   - `mitosis-vs-meiosis`
   - `newtons-laws-explained`
   - `parents-help-with-homework`
   - `study-with-adhd`
   - … and 15 more in similar high-volume categories

2. **Submit sitemap to Google Search Console** + Bing Webmaster Tools. Without this, Google's index of helpinstudy.com is small and AdSense thinks the site is empty.

3. **Wait 2-4 weeks** between sitemap submission and AdSense application. Let Google index 100+ pages first.

4. **Set up Google Analytics 4** (`NEXT_PUBLIC_GA_ID` env var). AdSense reviewers cross-check that real users visit.

### Tier 2 — improve over time

5. **Add 10-15 more articles per month.** Frequency signals an active site.
6. **Add internal links** between related articles (most posts already do this — keep doing it).
7. **Add a few hand-edited images** to top articles (the OG image generator handles social previews; the article body is plain text right now).
8. **Get a few backlinks**. Reddit comments in r/CBSE, r/GCSE, r/APStudents — be helpful first, link only when relevant.

### Tier 3 — once AdSense is approved

9. **Place ad slots strategically**: in-content (after intro), end of article, sidebar (no annoying interstitials).
10. **Never show ads on under-13 or kids-mode pages** (Apple/Google both pull listings for this).
11. **Monitor RPM by traffic source** in AdSense dashboard.

---

## 5. Steps to apply for AdSense (when content is ready)

1. Go to https://adsense.google.com/start/
2. Sign up with the Google account that owns Search Console for helpinstudy.com
3. Add `helpinstudy.com` as a site
4. AdSense gives you a `<script>` tag with `ca-pub-XXXXXXXXXXXXXXXX`
5. Paste the publisher ID into Vercel: `vercel env add NEXT_PUBLIC_ADSENSE_CLIENT production`
6. Redeploy
7. AdSense reviewer visits within 1-14 days
8. Either approved (you start earning) or rejected with feedback (we fix and reapply in 2 weeks)

---

## 6. What you'd typically earn

For a free AI study helper with mixed traffic:

- **Education niche RPM**: ~$3-6 per 1000 page views (mixed countries)
- **US/UK/AU traffic**: ~$8-25 RPM
- **South Asia / Africa traffic**: ~$0.50-3 RPM
- At 100k page views/month: ~$300-600/month
- At 500k page views/month: ~$1,500-3,000/month

These are realistic. Influencers selling "$10k from AdSense" courses are usually inflating with traffic from low-value sources.

---

## My honest one-line summary

**You're 95% AdSense-ready.** Technical SEO is excellent. The one fix needed is article depth. Tell me to start expanding the 30 cornerstone articles and we can apply 2 weeks later with high confidence.
