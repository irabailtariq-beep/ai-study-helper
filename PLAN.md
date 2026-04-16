# AI Study Helper — Master Plan

_Last updated: 2026-04-15_

## 1. Vision

A free, cross-platform (iOS + Android + Web) AI-powered study companion that adapts to a student's age, country, class, and curriculum. Students upload a photo, PDF, or ask a question → the app explains the concept in their language level, quizzes them on it, and remembers what they've learned.

**First user**: family/self, then Pakistani + top-10-country students (IN, CN, US, ID, PK, NG, BR, BD, RU, MX).

## 2. Scope Decisions (locked)

| Area | Decision |
|---|---|
| App name | **AI Study Helper** |
| Platforms | iOS, Android, Web (one codebase) |
| Monetization | Fully free at launch |
| Language | English only at launch |
| Adaptive UI | Continuous by age (interpolated across anchors: 6, 10, 14, 18, 25+) |
| Auth | Guest mode + optional email/Google/Apple sign-in |
| Kid safety | Moderate — AI content filters. _Note: targeting under-13 requires COPPA; we will gate strict features behind 13+ for MVP to avoid store rejection._ |
| Upload limits | 20 MB, 50 PDF pages, any image |
| AI memory | Persistent across sessions (class, weak topics, history summaries) |
| Build strategy | Build everything, then ship |
| Local dev | Web (Next.js) + iOS simulator + Android emulator |
| Future deploy | Railway → App Store + Play Store |

## 3. Features

### MVP (must ship)
1. **Onboarding wizard** — country, age, class/grade, curriculum/board
2. **Upload & Explain** — photo, PDF, or pasted text → AI returns age-appropriate explanation
3. **AI Chat Tutor** — conversational Q&A grounded in uploaded material, with cross-session memory
4. **Quiz Generator** — from uploaded content, produces MCQ + Short Answer + True/False + Fill-in-the-blank
5. **Past Papers / Exam Prep** — user uploads a past paper → AI generates N similar practice papers
6. **Adaptive UI** — fonts, colors, mascot, nav complexity scale continuously by age
7. **Guest mode** + optional sign-up

### v2 (stretch)
- Progress tracking & streaks
- Flashcards / spaced repetition
- Voice input & TTS explanations
- Handwriting / math recognition
- Parental dashboard

## 4. Curriculum Support (10 countries)

| Country | Boards/Curricula to list |
|---|---|
| India | CBSE, ICSE, State boards (grouped) |
| China | Gaokao-aligned national standard |
| USA | Common Core, AP, state variations (generic) |
| Indonesia | Kurikulum Merdeka |
| Pakistan | Federal, Punjab, Sindh, KPK, Balochistan boards + Cambridge (O/A, IGCSE) |
| Nigeria | WAEC, NECO |
| Brazil | BNCC / ENEM |
| Bangladesh | NCTB |
| Russia | FGOS |
| Mexico | SEP |
| Universal | IB, Cambridge, Edexcel |

_We don't pre-load content. The curriculum list drives the AI's system prompt context so it answers in the right style/standard._

## 5. Architecture

```
┌──────────────────────────┐    ┌──────────────────────────┐
│  Expo (iOS+Android)      │    │  Next.js (Web)           │
│  React Native            │    │  React                   │
└────────┬─────────────────┘    └────────┬─────────────────┘
         │    shared packages: ui, core, ai-client         │
         └──────────────────────┬──────────────────────────┘
                                │
                    ┌───────────▼────────────┐
                    │  API (Next.js routes)  │
                    │  /api/explain          │
                    │  /api/quiz             │
                    │  /api/chat             │
                    │  /api/upload           │
                    └───────┬─────────┬──────┘
                            │         │
                ┌───────────▼──┐  ┌───▼───────────────┐
                │  Supabase    │  │  Google Gemini    │
                │  Auth/DB/    │  │  2.5 Flash        │
                │  Storage     │  │  (vision+text)    │
                └──────────────┘  └───────────────────┘
```

**Monorepo layout** (pnpm + Turborepo):
```
ai-study-helper/
├── apps/
│   ├── web/          # Next.js 15 (web app + API routes)
│   └── mobile/       # Expo SDK 52 (iOS + Android)
├── packages/
│   ├── ui/           # shared components (tamagui or nativewind)
│   ├── core/         # business logic, types, prompts
│   └── ai-client/    # Gemini wrapper + safety filters
├── supabase/         # migrations, seed
└── PLAN.md
```

## 6. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Mobile | Expo SDK 52 + React Native 0.76 | Cross-platform, OTA updates, EAS builds |
| Web | Next.js 15 App Router | SSR, API routes double as mobile backend |
| Styling | NativeWind (Tailwind for RN) + Tailwind | Shared styling language across web + mobile |
| State | Zustand + TanStack Query | Lightweight, works everywhere |
| Backend | Next.js API routes on Railway | Single deploy target, scales fine for MVP |
| DB/Auth/Storage | Supabase (free tier) | Postgres + auth + file storage in one |
| AI | Google Gemini 2.5 Flash | Free tier, native vision + PDF, multilingual, fast |
| PDF parse fallback | pdf-parse (Node) | If Gemini file-API has issues |
| Analytics | PostHog (free self-host later) | Product analytics |
| Error tracking | Sentry free tier | Crash/error monitoring |

## 7. AI Strategy

**Model**: `gemini-2.5-flash` (free tier: 15 RPM, 1500 RPD, 1M TPM).

**System prompt template** (assembled per request):
```
You are a patient study tutor for a {age}-year-old {class} student
in {country} studying {curriculum}. Reply in English at a reading
level appropriate for age {age}. Use {tone_for_age} style.
Be accurate; if unsure, say so. Never produce unsafe, adult, or
self-harm content. Keep responses focused on the question.
```

**Safety rails**:
- Pre-filter uploads (file size, MIME check, virus scan via Supabase)
- Gemini safety settings: BLOCK_MEDIUM_AND_ABOVE for HARASSMENT/HATE/SEXUAL/DANGEROUS
- Post-filter: regex + secondary Gemini pass for under-13 accounts
- "I'm not sure" fallback when confidence low
- Disclaimer footer on every AI response

**Rate limits** (per user, anti-abuse & cost cap):
- Guest: 10 requests/day
- Signed-in: 50 requests/day
- Uploads: 5 files/day

**Memory design**:
- `sessions` table: thread-level history
- `user_profile` table: class, curriculum, weak topics (updated by async summarizer)
- Each request injects: profile + last 10 turns + summarized older turns

## 8. Adaptive UI (continuous by age)

Design tokens interpolate between anchor ages:

| Token | Age 6 | Age 10 | Age 14 | Age 18 | Age 25+ |
|---|---|---|---|---|---|
| Base font | 20px | 18px | 16px | 15px | 14px |
| Palette | Playful | Bright | Vibrant | Clean | Minimal |
| Mascot | Prominent | Present | Optional | Off | Off |
| Nav density | 3 tabs | 4 tabs | 5 tabs | Full | Full |
| AI tone | Story/analogy | Friendly | Structured | Academic | Concise |
| Animations | Heavy | Medium | Medium | Subtle | Minimal |

Implemented as a `useAgeTheme(age)` hook returning interpolated token values; consumed by NativeWind classes via CSS vars.

## 9. Milestones

**M1 — Foundation (Session 1)**
- Monorepo scaffold, Expo + Next.js hello-world running on iOS sim, Android emu, web
- Supabase project, env wiring
- Gemini client with a test `/api/explain` endpoint

**M2 — Onboarding + Adaptive UI**
- Wizard flow (country → age → class → curriculum)
- Adaptive theme system, 5 age anchor previews
- Guest mode + profile persistence

**M3 — Core AI features**
- Upload (photo/PDF) → Explain
- Chat tutor with session memory
- Content safety filters

**M4 — Quiz + Past Papers**
- Quiz generator (all 4 types), auto-grading
- Past paper upload → N practice papers

**M5 — Polish & Ship prep**
- Progress/streaks (stretch)
- Privacy policy, ToS, store screenshots, age rating
- Railway deploy, EAS builds, store submissions

## 10. App Store Readiness (baked in from M1)

- Privacy policy + data deletion endpoint (Apple/Google require)
- Age rating: 4+ with user-generated content warning
- No 3rd-party ads/tracking for under-13 users
- Export/delete user data self-service
- Clear "AI can be wrong" disclaimers
- No collection of sensitive PII
- Crash-free rate > 99% before submission

## 11. Open Risks

| Risk | Mitigation |
|---|---|
| Gemini free-tier throttling under load | Per-user rate limits + queue + graceful degradation message |
| Store rejection for AI content aimed at kids | Moderate filter + 13+ gate for MVP + add parental controls in v2 before targeting <13 |
| OCR quality on handwritten notes | Set expectations; v2 adds dedicated OCR |
| Memory bloat / privacy | Auto-summarize >30 day history; one-click wipe |
| Solo dev burnout on "build everything" | Milestones are shippable independently; we can pause between any two |

## 12. What I'll do next (after plan approval)

1. Scaffold the monorepo (pnpm + Turborepo + Expo + Next.js)
2. Stand up Supabase schema + .env
3. Wire Gemini client with a working `/api/explain` proof
4. Get all three targets (web/iOS sim/Android emu) showing a "Hello" screen that reads from the same shared package

Then I'll pause and show you the working shell before moving into M2.
