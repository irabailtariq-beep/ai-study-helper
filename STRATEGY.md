# AI Study Helper — Strategy & Growth Plan

_Last updated: 2026-05-08_

This is the master plan for everything non-code: features, monetization, SEO, content, and the path from "free Vercel side-project" to "real product students pay for."

---

## Part 1 — Why students struggle (research-grounded)

A mountain of research and parent/teacher reporting agrees on the same top-five pain points. We design every feature against them.

| Pain | Evidence (directional) | Our feature |
|---|---|---|
| **1. Math (formulas, word problems, "where did that step come from?")** | NAEP 2024: ~63% of US 8th graders below proficient. Tutoring-industry data: math is the #1 demanded subject in every market. | `/math-solver` (step-by-step working with named methods + pitfalls), `/formula-sheet` (focused, board-aware), photo math via Gemini vision |
| **2. Reading textbooks they don't understand** | UNESCO GEM 2024: ~60% of 10-year-olds in low/middle-income countries cannot read with comprehension. Even in HICs, ~30% of teens read below grade level. | `/explain` (age-adapted, board-aware), `/transform` (reframe through their interests) |
| **3. Test/exam anxiety + prep overwhelm** | APA: ~30% of teens report significant test anxiety. Major cause: unfamiliarity with the format. | `/past-papers` (board-style synthesis), `/grade` (mark-scheme feedback), `/diagnostic` (personalised 7-day plan) |
| **4. Memory / forgetting** | Cognitive science: rereading is the worst common method; retrieval practice + spaced repetition double recall. | `/flashcards` (SM-2 spaced repetition), `/quiz` (active retrieval), session memory in chat |
| **5. Curriculum mismatch** | Generic AI gives "right" answers in the wrong style — students lose marks on board exams. | Onboarding wizard captures country + age + grade + curriculum and they are injected into every system prompt |

### Secondary but high-impact pains

- **Language barriers** — non-native English speakers struggle with technical vocabulary
- **Note-taking / lecture summaries** — students drown in slide decks
- **Special needs (dyslexia, ADHD)** — standard textbooks are inaccessible
- **Parent involvement** — parents don't know how to help with new curricula
- **Distractions / phone addiction** — focus is the bottleneck

---

## Part 2 — The full feature pyramid

Each feature is tagged with where it lives on the **Free / Pro / Family** ladder.

### Tier 0 — Already shipped (in production now)

| Feature | Tier | What it does |
|---|---|---|
| Onboarding (50+ curricula, searchable) | Free | country → age → curriculum → grade |
| `/explain` — text/photo/PDF | Free (limited) | Age + board-locked explanation |
| `/transform` — interest reframing | Free | Cooking, cricket, K-pop, anything |
| `/quiz` — MCQ/short/T-F/fill | Free (limited) | Auto-generated from any material |
| `/chat` — tutor with memory | Free (limited) | Answer-length toggle + voice in/out |
| `/past-papers` — paper or topic+decade | Free (limited) | Board-style synthesis |
| `/grade` — AI exam marking | Free (limited) | Score + band + feedback |
| `/diagnostic` — quiz → 7-day plan | Free | Personalised study plan |
| `/concept-map` — topic graph | Free | Visualize syllabus dependencies |
| `/syllabus` — extract official syllabi | Free | Saved digital outline |
| `/flashcards` — SM-2 spaced repetition | Free (sign-in) | Auto-generate from material |
| `/progress` — streaks + 14-day chart | Free (sign-in) | Daily activity tracking |
| `/parent` — weekly recap | Free (sign-in) | AI-written 220-word email |
| `/classroom` — Google Classroom OAuth | Free | Assignments + AI coach |
| `/teams` — MS Teams Education OAuth | Free | Same for MS schools |
| `/lms` — Canvas + Moodle (token) | Free | For uni / school LMS |
| `/math-solver` — step-by-step | Free (limited) | Photo or text |
| `/formula-sheet` — board-aware | Free | Subject + topic |
| Voice in/out (Web Speech API) | Free | No API cost |
| Adaptive UI by age (continuous) | Free | Fonts/colors/tone |

### Tier 1 — Next (1-2 weeks, mostly already prompt-able)

| Feature | Tier | One-liner |
|---|---|---|
| **Lecture summarizer** | Pro | Drop a video URL or upload audio → bullet-point notes + Q&A bank |
| **Essay coach** | Pro | Outline → draft → critique loop with mark-scheme awareness |
| **Note-taking from photos of whiteboard** | Free | Snap a photo of the lecture board → typed notes |
| **Vocabulary builder** | Free | Define + use in sentence + flashcard auto-add |
| **Translation mode** | Free | Translate a textbook page to local language with terminology preserved |
| **"Simpler!" reroll button** | Free | One tap → easier reading level on the same content |
| **"Why not?" button on wrong answers** | Free | Explains the mistake instead of just marking wrong |
| **Math problem variants** | Pro | "Same idea, different numbers" — generate 10 practice variants |

### Tier 2 — Differentiators (1-2 months)

| Feature | Tier | One-liner |
|---|---|---|
| **Handwritten math recognition** | Pro | Upload a photo of handwritten work → AI checks each step |
| **Voice-only homework mode** | Pro | Hands-free Q&A while doing chores or commuting |
| **Group study rooms** | Pro/Family | 2-4 students share a session, AI moderates |
| **Teacher mode** | (school plan) | Auto-generate worksheets + answer keys + grading |
| **Dyslexia / ADHD mode** | Free | Dyslexia-friendly font, chunked text, focus timer |
| **Offline mode (PWA)** | Free | Cached explanations on flaky connections |
| **Live mock-exam simulator** | Pro | Timed, exam-conditions, room-temperature pressure |
| **Smart highlighter on PDFs** | Pro | "Show me the parts I'm likely to be tested on" |

### Tier 3 — Ambitious

- **AR diagram explorer** — point camera at a chemistry diagram, atoms light up
- **Real-time camera tutor** — "show your homework, I'll talk you through it"
- **University / professional certifications** — CFA, ACCA, USMLE, bar prep

---

## Part 3 — Monetization

### 3a) Subscription tiers (already coded in `lib/plans.ts`)

| | Free | **Pro** | Family |
|---|---|---|---|
| Price | $0 forever | $4.99/mo or $39/yr | $9.99/mo or $79/yr |
| Daily explanations | 10 | 200 | 500 |
| Daily chats | 50 | 1,000 | 2,000 |
| PDF size | 5 MB / 20 pp | 20 MB / 50 pp | 20 MB / 50 pp |
| Ads | Yes | **No** | No |
| Concept map | — | ✅ | ✅ |
| AI past-paper grading | — | ✅ | ✅ |
| Diagnostic + study plan | basic | ✅ full | ✅ full |
| Voice tutor (high-quality) | basic | ✅ | ✅ |
| Cross-device sync | — | ✅ | ✅ |
| Priority speed | — | ✅ | ✅ |
| Student profiles | 1 | 1 | **5** |
| Parent dashboard | — | — | ✅ |

**Why this split works**:
- Free is generous enough to be genuinely useful (kids actually finish their homework with it)
- Pro is the "I'm serious about this exam" upsell — past-paper grading is the killer Pro feature
- Family is the only tier with the parent dashboard — converts the parent who pays from a child user

**Pricing rationale**:
- Below $5 is a "credit-card-statement-no-question" zone for parents
- Yearly discount (~35%) trains conversion to annual = stickier
- Free → Pro target: 4–6% monthly conversion (industry standard for freemium ed-tech)

**Implementation notes** (next phase):
- Use **Stripe Checkout** + Stripe Customer Portal (no custom billing UI)
- Webhook updates a `subscriptions` table in Supabase
- Add `getActivePlan(userId)` middleware that gates premium features
- Pricing page already live at `/pricing`

### 3b) Google AdSense

**Eligibility** (Google's bar):
- Site must have ≥ 30 days of original content
- Must have privacy policy ✓ (we have `/privacy`)
- Must comply with kids-content rules (we gate kids mode)
- Strong "navigation, original content, no scraped material"

**Plan**:
1. Wait until you have ~10 indexed pages and ~30 days of activity
2. Submit `[your-domain].com` for AdSense review (1-2 weeks)
3. Once approved, set `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXX` in Vercel
4. Create 3 ad units: in-content (rectangle), sidebar (skyscraper), end-of-article (responsive)
5. Place via `<AdSlot slot="..." />` on:
   - `/blog/[slug]` — 1 ad after intro, 1 at the end
   - `/learn/[subject]/[board]` — 1 ad mid-page
   - Result page on `/explain` — only after 3+ free uses
6. **NEVER** show ads to users on Pro/Family plans, or to under-13 in kids mode (Apple/Google will pull the listing if you do)

**Realistic AdSense earnings (education niche)**:
- US/UK/AU traffic: ~$8–25 RPM (revenue per 1000 page views)
- IN/PK/NG: ~$0.50–3 RPM
- Mixed traffic: budget ~$3–6 RPM as a planning number
- 100k visits/mo → ~$300–600/mo

### 3c) Other revenue (later)

- **School site licenses** — $X per student per year (when ready, target Pakistani private schools first)
- **Sponsored study guides** — partnerships with curriculum publishers (transparent labelling)
- **Affiliate** — past-paper books, scientific calculators (only for products we'd recommend anyway)

---

## Part 4 — SEO strategy

### 4a) Keyword universe (sorted by intent + opportunity)

**Tier-1 (high volume, hard to rank cold) — pursue with content + backlinks over months**
- "AI tutor" / "AI homework help" / "free AI tutor"
- "GCSE biology revision", "AQA past papers"
- "CBSE class 10 math help"
- "AP US History review"
- "JEE preparation"
- "NEET biology"

**Tier-2 (board + subject + grade — programmatic SEO sweet spot)** — these are auto-generated from `/learn/[subject]/[board]` with ~12 subjects × ~80 boards = **~960 landing pages**
- "AQA GCSE chemistry tutor"
- "CBSE class 9 physics help"
- "Cambridge IGCSE math past papers"
- "VCE biology study guide"
- "ENEM matemática"
- "WAEC SS3 chemistry"
- "Edexcel A Level economics"

**Tier-3 (long-tail "how do I" — best ROI per article)**
- "how to study for [exam]"
- "best way to memorise [thing]"
- "how to solve quadratic equations step by step"
- "how to write a GCSE history essay"
- "what is photosynthesis explained simply"
- "best free AI tutor for [country]"

**Tier-4 (interest-bridging — unique to us)**
- "explain photosynthesis through Minecraft"
- "trigonometry through cricket"
- "physics with cooking analogies"
- These will rank near zero competitors and convert highly because they target the exact moment a kid types something quirky into Google.

### 4b) Content calendar — 12 weeks to authority

Each week: **1 keyword-targeted article** + **2 programmatic SEO refresh batches**.

| Week | Article | Target keyword |
|---|---|---|
| 1 | Best Free AI Tutors 2026 (already shipped) | "best free AI tutor" |
| 2 | How to Study Math Effectively (already shipped) | "how to study math" |
| 3 | CBSE vs IGCSE vs IB (already shipped) | "CBSE vs Cambridge" |
| 4 | The Photosynthesis Explainer (with all 5 interest reframes) | "photosynthesis explained" |
| 5 | The Quadratic Formula Step-by-Step | "how to solve quadratic" |
| 6 | What is the Pythagorean Theorem? (with kid-level + advanced) | "pythagorean theorem" |
| 7 | The Periodic Table Explained for [Class 9-12] | "periodic table explained" |
| 8 | Test Anxiety: 7 Research-Backed Tactics | "test anxiety tips" |
| 9 | How Spaced Repetition Actually Works | "spaced repetition" |
| 10 | The Best AI Tutor for AQA / Edexcel / OCR | "AQA AI tutor" |
| 11 | Free Past Papers Generator: 5 Use Cases | "past paper generator" |
| 12 | How Parents Can Help with Homework Without Doing It | "help my child with homework" |

Every article should have:
- Clear H1 with primary keyword
- 1500–2500 words
- Internal links to 3+ feature pages
- 1 FAQ section with `FAQPage` JSON-LD
- 1 "try it free" CTA above the fold + at the end
- Original images / SVGs (no stock photos)

### 4c) Technical SEO checklist (already done unless ❌)

- [x] `sitemap.xml` (auto-generated from routes + `/learn/[subject]/[board]`)
- [x] `robots.txt`
- [x] Canonical URLs on every page
- [x] OG + Twitter card metadata
- [x] JSON-LD: Organization, WebSite, WebApplication, FAQPage, Article, Course
- [x] Mobile-friendly (responsive Tailwind)
- [x] Fast Core Web Vitals (Next.js 15, static where possible)
- [x] HTTPS everywhere (Vercel default)
- [x] `index, follow` on all public pages
- [ ] Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` once you have it from Google Search Console
- [ ] Set `NEXT_PUBLIC_BING_SITE_VERIFICATION` for Bing Webmaster Tools
- [ ] Set up GA4 with `NEXT_PUBLIC_GA_ID` (already wired conditionally)
- [ ] Submit sitemap to Google Search Console + Bing Webmaster Tools after domain connect

### 4d) Off-page (link building)

- Reddit answers in `/r/CBSE`, `/r/GCSE`, `/r/APStudents`, `/r/IBO` — be helpful first, link only when relevant
- Quora "best free AI tutor" topics
- Reach out to small education YouTubers / TikTokers in your country with a Pro voucher
- Wikipedia citations on niche topics if you write a definitive article on something
- Hacker News "Show HN" launch when you're ready (only one chance — don't waste it)
- Product Hunt launch (separately)

---

## Part 5 — Path to mobile (when you're ready)

You already have the Expo monorepo wired up and EAS configs ready (see `apps/mobile/` and `DEPLOY.md`).

When the web is generating consistent traffic, the mobile build is one command:
```bash
bash deploy.sh mobile
```

Apple Developer ($99/yr) + Google Play ($25 one-time) are the only blockers.

---

## Part 6 — 30-day execution plan

| Day | Task |
|---|---|
| 1 | Connect domain to Vercel, set up Cloudflare DNS |
| 2 | Submit to Google Search Console + Bing Webmaster Tools |
| 3 | Set up GA4, add `NEXT_PUBLIC_GA_ID` to Vercel |
| 4-7 | Write 4 more SEO articles (10 total) |
| 7 | Apply for AdSense |
| 14 | Set up Stripe account, build the Pro paywall (1 day's coding) |
| 21 | First Reddit post (helpful answer, not promotion) |
| 28 | If AdSense approved, place ad slots |
| 30 | Review GA4 traffic, decide which 5 boards to push hardest |

---

## Part 7 — Risks and what we'll do about them

| Risk | Mitigation |
|---|---|
| Google de-ranks AI-generated content | Our articles are AI-assisted, human-edited, with original framing and unique features — Google's policy explicitly allows this |
| Free-tier abuse drains our Gemini quota | Rate limits per IP + per signed-in user already in place; Groq fallback for text-only |
| Apple/Google reject the mobile app | We're conservative on age targeting; full COPPA-compliant kids mode is on the roadmap before any under-13 promotion |
| Curriculum drift (boards update syllabi) | Every Sept, refresh the curricula list; user-uploaded syllabi are always the most up-to-date source |
| AI hallucinations cause real harm | Disclaimer on every reply; "show source" feature on the roadmap for v2; never give medical/legal/financial answers — explicitly refuse |

---

## Part 8 — Decisions we should make this week

1. **Domain name** — what is it? I need it to wire up Vercel's custom domain + redirect www → apex + update SITE.url
2. **Monetization launch order** — AdSense first (no $$ collection complexity) or Stripe first (higher LTV)?
3. **Primary geographic target** — push hardest in Pakistan? India? UK? US? Decide where to spend your first $200 of Google Ads when you're ready to test paid acquisition
4. **Brand colours** — keep current indigo/violet/cyan or align with your domain branding?

That's it. Everything else is execution.
