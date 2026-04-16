# Deployment Guide

This guide walks you step-by-step from "it works on my Mac" to "installed on the App Store, Play Store, and live on the web."

---

## 1) Backend database (Supabase)

1. Create a free account at https://supabase.com and create a new project.
2. In the Supabase dashboard → **SQL editor**, paste the contents of [`supabase/schema.sql`](supabase/schema.sql) and run it.
3. Storage → create a bucket named `uploads` (private).
4. Settings → API → copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` secret key → `SUPABASE_SERVICE_ROLE_KEY` (keep secret; only used server-side for account deletion)

Put these in `apps/web/.env.local` for local dev.

## 2) Web app on Railway

1. Create a free account at https://railway.app and install the CLI: `brew install railway`
2. From the repo root:
   ```bash
   railway login
   railway init       # or: railway link to an existing project
   railway up
   ```
3. In the Railway dashboard → **Variables**, add:
   ```
   GEMINI_API_KEY=...
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```
4. Railway auto-detects [`railway.toml`](railway.toml), builds, and gives you a URL like `https://your-app.up.railway.app`. Note it — the mobile app points at it.

### Using Docker instead
If you prefer a custom host (Fly.io, Render, your own VPS), a [Dockerfile](Dockerfile) is provided:
```bash
docker build -t ai-study-helper .
docker run -p 3000:3000 --env-file .env ai-study-helper
```

## 3) Mobile builds (Expo EAS)

Prerequisites: free Expo account at https://expo.dev, then:
```bash
npm i -g eas-cli
eas login
cd apps/mobile
```

Edit `eas.json` and replace `https://your-app.up.railway.app` with your actual Railway URL.

### iOS (App Store)

1. You need a paid **Apple Developer account** ($99/year) — this is Apple's requirement, not ours.
2. ```bash
   eas build --platform ios --profile production
   ```
   EAS prompts you to let it manage your Apple credentials — answer yes for the easiest path.
3. When the build completes, submit to TestFlight:
   ```bash
   eas submit --platform ios
   ```
4. Go to https://appstoreconnect.apple.com to:
   - Add app metadata (description, keywords, screenshots).
   - Invite yourself/testers to TestFlight.
   - When ready, submit for App Review.
5. Apple will ask about "content users generate." Answer honestly: users upload photos/PDFs of study material, and the app uses AI to produce educational explanations.

### Android (Google Play)

1. Create a **Google Play Developer** account (one-time $25).
2. ```bash
   eas build --platform android --profile production
   eas submit --platform android
   ```
3. In the Play Console add metadata, screenshots, and promote to production when ready.

## 4) Screenshots & metadata (both stores)

Both stores need:
- App icon (already generated at `apps/mobile/assets/icon.png`)
- Screenshots at specific sizes: use the iOS simulator / Android emulator and take them with the device bezel frames from `https://previewed.app/` or similar.
- Short description (~80 chars): *"Your free AI study tutor. Explain, quiz, and remember — fits your age and class."*
- Full description: copy/expand the intro from the [README](README.md).
- Age rating: **Educational**, **12+** for MVP (because of user-generated content). Do NOT rate it as 4+ until you ship the strict kids mode in v2.
- Privacy policy URL: `https://your-app.up.railway.app/privacy`
- Support URL: your contact email.

## 5) Required Apple/Google answers

| Question | Answer for this app |
|---|---|
| Data types collected | Email (optional), content you upload (sent to Google Gemini) |
| Data linked to user | Yes (when signed in) |
| Used for tracking | **No** |
| Third-party analytics | None |
| Third-party ads | None |
| Uses AI | Yes — Google Gemini for explanations / quizzes |
| Target audience | 13+ (MVP). Update to family-friendly in v2 after strict kids mode. |

## 6) Post-launch

- Monitor free-tier usage on Supabase + Railway + Gemini.
- Set up error alerting (Sentry free tier has a Next.js SDK).
- Keep `GEMINI_API_KEY` rotated every few months.
- Respond to user reports in the store reviews within 7 days (Apple expects this).

## Rollback

If Railway ships a broken deploy:
```bash
railway rollback
```

If an EAS build has a regression, set your users back to the previous production track in App Store Connect / Play Console. Never skip review queues — Apple will reject apps that push unreviewed native code changes.
