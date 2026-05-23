# Deployment Runbook

Goal: go from this repo → live web app + App Store + Play Store.

Everything that **doesn't** need you personally (code, configs, CLI installs, builds) is automated by `deploy.sh`. Everything that **does** need you (accounts, fees, browser logins, store review) is listed below as one-liners you run yourself.

---

## 0. What you need once (accounts)

| Service | Why | Free? |
|---|---|---|
| [Gemini API](https://aistudio.google.com/apikey) | Vision + PDF understanding | ✅ free tier |
| [Groq](https://console.groq.com/keys) | Fast text-only Llama 3.3 70B (optional) | ✅ free |
| [Supabase](https://supabase.com) | Database + auth + storage | ✅ free tier |
| [Railway](https://railway.app) | Hosts the web backend | ✅ free tier ($5/mo of usage) |
| [Expo](https://expo.dev) | Builds iOS + Android | ✅ free tier |
| [Apple Developer](https://developer.apple.com/programs/) | App Store | 💵 $99/yr |
| [Google Play Console](https://play.google.com/console/) | Play Store | 💵 $25 one-time |

For **just web + local mobile testing**, only the free ones matter. The $99 and $25 only apply if you want to ship to the stores.

---

## 1. Supabase (5 minutes)

1. Create a project at supabase.com.
2. Open **SQL editor**, paste [`supabase/schema.sql`](supabase/schema.sql), run it.
3. **Storage → new bucket** → name `uploads`, private.
4. **Settings → API**, copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` → `SUPABASE_SERVICE_ROLE_KEY`
5. Paste these + your `GEMINI_API_KEY` into `apps/web/.env.local` (copied from `.env.example`).

## 2. Run it locally

```bash
pnpm dev:web            # http://localhost:3000
```
Mobile in a second terminal:
```bash
pnpm dev:mobile         # press i / a / w
```

## 3. Deploy the web backend to Railway

One command:

```bash
bash deploy.sh web
```

What it does:
- Installs Railway CLI if missing.
- Runs the production build.
- Prompts you once to `railway login` (opens browser).
- Creates/links a Railway project.
- Pushes every key from `apps/web/.env.local` as a Railway env var.
- Triggers `railway up`.

When Railway gives you the URL (e.g. `https://ai-study-helper.up.railway.app`), update the mobile app's API base:

```bash
# apps/mobile/eas.json → production.env.EXPO_PUBLIC_API_BASE
```

## 4. OAuth redirect URIs (for Classroom / Teams)

Once you have your Railway URL, set:

- **Google Cloud Console → OAuth client** → Authorized redirect URIs:
  ```
  http://localhost:3000/api/classroom/callback
  https://<your-railway>.up.railway.app/api/classroom/callback
  https://<your-railway>.up.railway.app/api/auth/callback    ← for Supabase Google sign-in
  ```
- **Azure portal → app registration → Redirect URIs**:
  ```
  http://localhost:3000/api/teams/callback
  https://<your-railway>.up.railway.app/api/teams/callback
  ```

## 5. Mobile builds + store submission

```bash
bash deploy.sh mobile
```

Under the hood:
- Installs EAS CLI if missing.
- Prompts `eas login`.
- Triggers preview builds for iOS and Android.

Watch progress at https://expo.dev or:
```bash
eas build:list
```

### First-time iOS specifics (need Apple Developer account)
```bash
cd apps/mobile
eas build:configure
eas build --platform ios --profile production
eas submit --platform ios
```
EAS will manage Apple signing certificates for you — say **yes** when it asks.

### First-time Android specifics (need Play Console account)
```bash
cd apps/mobile
eas build --platform android --profile production
eas submit --platform android
```
First submission needs you to manually create the app shell on Play Console, add metadata, and set an age rating (13+ for MVP).

## 6. Store listing answers (copy-paste ready)

**Short description (~80 chars)**
> Your free AI study tutor. Explain, quiz, and remember — fits your age and class.

**Full description** — use the intro from [README.md](README.md), then bullet-list the features:
- Upload a photo or PDF to get an age-adapted explanation
- Generate quizzes, past-papers and flashcards from any material
- Digital syllabus + concept map view
- Google Classroom, Microsoft Teams, Canvas & Moodle sync
- Diagnostic quiz → personalised 7-day plan
- Parent dashboard with weekly recap
- Voice input and read-aloud

**Age rating**: 13+ (MVP). Raise to 4+ only after shipping strict kids mode.

**Privacy policy URL**: `https://<your-railway>.up.railway.app/privacy`

**Data collected & linked to user**
- Email (sign-in only, optional)
- Uploaded content → sent to Gemini for processing
- Usage counts (for streaks)

**Used for tracking**: No.
**Third-party ads**: No.

## 7. Rollback

Web:
```bash
railway rollback
```

Mobile: in App Store Connect / Play Console, revert the active build to the previous track. Do not force-ship native code changes that skipped review.

## 8. Post-launch checklist

- Set up free Sentry project, add `SENTRY_DSN` env var for crash reports.
- Monitor free-tier usage: Supabase (500 MB DB), Railway ($5 usage), Gemini (1500 req/day), Groq (14k req/day on free tier).
- Respond to store reviews within 7 days (Apple penalty if slow).
- Rotate `GEMINI_API_KEY`, `GROQ_API_KEY`, `SUPABASE_SERVICE_ROLE_KEY` every 3 months.
