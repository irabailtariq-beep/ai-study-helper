# AI Study Helper

A free, cross-platform (iOS + Android + Web) AI study tutor. Upload a photo, PDF, or ask a question — it explains in an age-appropriate way, generates quizzes, and remembers past conversations.

See [PLAN.md](PLAN.md) for the full vision, scope, architecture, and roadmap.

## Monorepo layout

```
ai-study-helper/
├── apps/
│   ├── web/          Next.js 15 (web UI + API routes = backend for mobile too)
│   └── mobile/       Expo SDK 52 (iOS + Android, shares web API)
├── packages/
│   ├── core/         Shared types, curricula data, age-adaptive theme, prompts
│   └── ai-client/    Google Gemini wrapper with safety settings
└── PLAN.md
```

## Prerequisites

- **Node** 20+ (Node 25 works)
- **pnpm** 10+ (`npm i -g pnpm`)
- **Xcode** + iOS Simulator (for iOS)
- **Android Studio** + an Android Emulator (for Android)
- A **Google Gemini API key** — free from https://aistudio.google.com/apikey

## First-time setup

```bash
# From repo root
pnpm install

# Create your env file
cp .env.example apps/web/.env.local
# then edit apps/web/.env.local and paste your GEMINI_API_KEY
```

## Run the web app

```bash
pnpm dev:web
# → http://localhost:3000
```

The web app **is also the backend** — its `/api/*` routes serve the mobile app.

## Run the mobile app

The mobile app calls the web app's `/api` routes, so **start the web app first** (`pnpm dev:web` in a separate terminal).

```bash
pnpm dev:mobile
# Then press:
#   i  → open iOS Simulator
#   a  → open Android Emulator
#   w  → open in browser
```

### Pointing mobile at the right backend

- **iOS Simulator**: `http://localhost:3000` works out of the box.
- **Android Emulator**: edit `apps/mobile/src/lib/api.ts` or set `EXPO_PUBLIC_API_BASE=http://10.0.2.2:3000` before starting.
- **Real device** (Expo Go on your phone): set `EXPO_PUBLIC_API_BASE=http://<your-mac-ip>:3000` before starting.

Find your Mac IP with `ipconfig getifaddr en0`.

## What works today (M1 delivery)

Web:
- ✅ Onboarding wizard (country → age → curriculum → grade)
- ✅ Adaptive UI: colors, fonts, radius, tone interpolate continuously by age (6→25+)
- ✅ **Explain** — paste text, upload image, or upload PDF → Gemini returns age-adapted explanation + key points + follow-ups
- ✅ **Chat tutor** — conversational, with cross-session memory (stored in localStorage for M1; Supabase in M2)
- ✅ **Quiz** — generate MCQ / short answer / true-false / fill-in-the-blank from any source
- ✅ **Past papers** — upload one real paper, get N practice papers with matching structure
- ✅ Rate limiting (in-memory; swap for Upstash in prod)
- ✅ Gemini safety settings on max

Mobile (Expo):
- ✅ Onboarding
- ✅ Home with adaptive theming
- ✅ **Explain** (photo + PDF picker)
- ✅ **Chat tutor**
- ⏳ Quiz + Past papers — use web for now (coming in M2)

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` / `pnpm dev:web` | Start Next.js dev server on :3000 |
| `pnpm dev:mobile` | Start Expo dev server |
| `pnpm build` | Production build of web |
| `pnpm typecheck` | Type-check all packages |

## Known gotchas

- **Node 25 on macOS**: Some Expo native modules expect Node 20. If `pnpm dev:mobile` fails, `nvm use 20`.
- **Gemini free tier limits**: 15 requests/minute, 1500/day on `gemini-2.5-flash`. Rate limits in the app default lower.
- **Kids under 13**: MVP gates strict-kids mode behind a future v2 update to keep App Store / Play Store approval smooth. See [PLAN.md §10](PLAN.md).
- **Shared packages use TypeScript source directly** (no build step). Both Next.js (`transpilePackages`) and Metro (`watchFolders`) are configured for this.

## Next milestones

- **M2**: Supabase auth + DB, persistent AI memory, progress/streaks
- **M3**: Handwriting/math OCR, voice input, TTS
- **M4**: Railway deploy, EAS builds, App Store + Play Store submission

## License

Private / unreleased.
