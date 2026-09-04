"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  COUNTRIES,
  CURRICULA,
  themeForAge,
  type CountryCode,
  type OutputFormat,
  type ToneStyle, SUPPORTED_CURRICULA } from "@ash/core";
import { useProfile } from "@/lib/profileStore";

// We support FIVE exam systems only. The onboarding picker offers just these
// (with their sub-boards) — never any other curriculum.

const COMMON_SUBJECTS = [
  "Mathematics", "English", "Physics", "Chemistry", "Biology", "Computer Science",
  "History", "Geography", "Economics", "Business Studies", "Accounting", "Psychology",
  "Sociology", "Art", "Music", "Religious Studies / Islamiat", "Urdu", "Arabic", "French",
  "Spanish", "German", "Mandarin", "Hindi", "PE / Sport", "Drama / Theatre",
  "Further Mathematics", "Statistics", "Environmental Science", "Politics", "Law",
];

const COMMON_INTERESTS = [
  { emoji: "⚽", label: "Football / Soccer" }, { emoji: "🏏", label: "Cricket" }, { emoji: "🏀", label: "Basketball" },
  { emoji: "🎮", label: "Video games" }, { emoji: "🎵", label: "Music" }, { emoji: "🎤", label: "K-pop" },
  { emoji: "🍳", label: "Cooking" }, { emoji: "📺", label: "Anime / Manga" }, { emoji: "🎬", label: "Movies / TV" },
  { emoji: "🚗", label: "Cars" }, { emoji: "🚀", label: "Space" }, { emoji: "🐶", label: "Animals" },
  { emoji: "👗", label: "Fashion" }, { emoji: "🎨", label: "Art" }, { emoji: "⛏️", label: "Minecraft" },
  { emoji: "⚡", label: "Harry Potter" }, { emoji: "🦸", label: "Marvel" }, { emoji: "🛹", label: "Skateboarding" },
  { emoji: "💃", label: "Dance" }, { emoji: "🤖", label: "Robotics" }, { emoji: "📚", label: "Books / reading" },
  { emoji: "🍰", label: "Baking" }, { emoji: "🎲", label: "Board games" }, { emoji: "📷", label: "Photography" },
];

const FORMAT_OPTIONS: { id: OutputFormat; title: string; sub: string }[] = [
  { id: "mixed",        title: "Mixed",          sub: "Quick answer + bullets + example" },
  { id: "bullets",      title: "Bullets",        sub: "Tight bullet lists I can scan fast" },
  { id: "paragraphs",   title: "Paragraphs",     sub: "Short paragraphs that read like a tutor talking" },
  { id: "step-by-step", title: "Step-by-step",   sub: "Numbered steps, one idea per step" },
];

const TONE_OPTIONS: { id: ToneStyle; title: string; sub: string }[] = [
  { id: "neutral",       title: "Neutral",        sub: "Clear, friendly, no slang" },
  { id: "kid-friendly",  title: "Kid-friendly",   sub: "Simple words, encouraging" },
  { id: "playful",       title: "Playful",        sub: "Light, story-led, friendly" },
  { id: "professional",  title: "Professional",   sub: "Formal exam-prep voice" },
  { id: "gen-z",         title: "Gen Z",          sub: "Casual modern slang (sparingly)" },
  { id: "gen-alpha",     title: "Gen Alpha",      sub: "Bright, fast, occasional emoji ✨" },
];

const STEP_LABELS = ["Country","Age","Curriculum","Grade","Subjects","Struggle","Interests","Style"];

export default function OnboardingPage() {
  const router = useRouter();
  const existing = useProfile((s) => s.profile);
  const hydrated = useProfile((s) => s.hydrated);
  const setProfile = useProfile((s) => s.setProfile);
  const [step, setStep] = useState(0);

  const [country, setCountry] = useState<CountryCode | "">(existing?.country ?? "");
  const [countryQuery, setCountryQuery] = useState("");
  const [age, setAge] = useState<number>(Math.max(existing?.age ?? 14, 13));
  const [curriculum, setCurriculum] = useState(existing?.curriculum ?? "");
  const [curriculumQuery, setCurriculumQuery] = useState("");
  const [grade, setGrade] = useState(existing?.grade ?? "");

  const [displayName, setDisplayName] = useState(existing?.displayName ?? "");
  const [subjects, setSubjects] = useState<string[]>(existing?.subjects ?? []);
  const [customSubject, setCustomSubject] = useState("");
  const [struggling, setStruggling] = useState<string[]>(existing?.struggling ?? []);
  const [interests, setInterests] = useState<string[]>(existing?.interests ?? []);
  const [customInterest, setCustomInterest] = useState("");
  const [goal, setGoal] = useState(existing?.goal ?? "");
  const [formatPref, setFormatPref] = useState<OutputFormat>(existing?.formatPreference ?? "mixed");
  const [tonePref, setTonePref] = useState<ToneStyle>(existing?.tonePreference ?? "neutral");

  // The useState initialisers above run on first render, BEFORE zustand has read
  // the saved profile back from localStorage — so on the Settings "Change" path
  // they were all empty and finish() then wrote those blanks over everything the
  // student had entered. Seed once, when the real profile actually arrives.
  const [seeded, setSeeded] = useState(false);
  useEffect(() => {
    if (seeded || !hydrated || !existing) return;
    setCountry(existing.country ?? "");
    setAge(Math.max(existing.age ?? 14, 13));
    setCurriculum(existing.curriculum ?? "");
    setGrade(existing.grade ?? "");
    setDisplayName(existing.displayName ?? "");
    setSubjects(existing.subjects ?? []);
    setStruggling(existing.struggling ?? []);
    setInterests(existing.interests ?? []);
    setGoal(existing.goal ?? "");
    setFormatPref(existing.formatPreference ?? "mixed");
    setTonePref(existing.tonePreference ?? "neutral");
    setSeeded(true);
  }, [hydrated, existing, seeded]);

  const [finishing, setFinishing] = useState(false);
  const [finishError, setFinishError] = useState<string | null>(null);

  const filteredCountries = useMemo(() => {
    const q = countryQuery.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter((c) => c.name.toLowerCase().includes(q));
  }, [countryQuery]);

  const curricula = useMemo(() => {
    const five = SUPPORTED_CURRICULA;
    const q = curriculumQuery.trim().toLowerCase();
    if (!q) return five;
    return five.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.aliases ?? []).some((a) => a.toLowerCase().includes(q))
    );
  }, [curriculumQuery]);
  const currentCurriculum = CURRICULA.find((c) => c.id === curriculum);

  const preview = themeForAge(age);

  function toggle<T>(arr: T[], v: T): T[] {
    return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
  }

  const [saved, setSaved] = useState(false);

  async function finish() {
    setFinishError(null);
    if (!country)    { setStep(0); setFinishError("Please pick a country first."); return; }
    if (!curriculum) { setStep(2); setFinishError("Please pick a curriculum."); return; }
    if (!grade)      { setStep(3); setFinishError("Please pick a class / grade."); return; }
    setFinishing(true);
    setProfile({
      ...(existing ?? {}),
      country, age, grade, curriculum,
      displayName: displayName.trim() || undefined,
      subjects: subjects.length ? subjects : undefined,
      struggling: struggling.length ? struggling : undefined,
      interests: interests.length ? interests : undefined,
      goal: goal.trim() || undefined,
      formatPreference: formatPref,
      tonePreference: tonePref,
    });
    await new Promise((r) => setTimeout(r, 300));
    setFinishing(false);
    setSaved(true);
  }

  function canAdvance(): boolean {
    if (step === 0) return !!country;
    if (step === 1) return age >= 4 && age <= 99;
    if (step === 2) return !!curriculum;
    if (step === 3) return !!grade;
    return true; // remaining steps are skippable
  }

  if (saved) {
    return (
      <main className="px-6 py-20 max-w-2xl mx-auto text-center">
        <div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full text-5xl mb-6"
          style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)", color: "white" }}
        >
          ✓
        </div>
        <h1 className="font-extrabold tracking-tight"
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            backgroundImage: "linear-gradient(120deg, #0a6357, #0e9f8e, #14b8a6)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            letterSpacing: "-0.02em",
          }}>
          SAVED
        </h1>
        <p className="mt-4 text-lg" style={{ color: "var(--ash-text)" }}>
          {displayName ? `Welcome, ${displayName}.` : "Welcome."} Your profile is set up — every reply will adapt to you.
        </p>
        <div className="mt-3 inline-flex flex-wrap gap-2 justify-center text-xs" style={{ color: "var(--ash-muted)" }}>
          <span className="glass-panel px-3 py-1 rounded-full">{COUNTRIES.find((c) => c.code === country)?.flag} {COUNTRIES.find((c) => c.code === country)?.name}</span>
          <span className="glass-panel px-3 py-1 rounded-full">{grade}</span>
          <span className="glass-panel px-3 py-1 rounded-full">{currentCurriculum?.name}</span>
          {subjects.length > 0 && <span className="glass-panel px-3 py-1 rounded-full">{subjects.length} subjects</span>}
          {struggling.length > 0 && <span className="glass-panel px-3 py-1 rounded-full">{struggling.length} struggle areas</span>}
          {interests.length > 0 && <span className="glass-panel px-3 py-1 rounded-full">{interests.length} interests</span>}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              // Tools link here as /onboarding?next=/math-solver, so send the
              // student back to what they were actually trying to do.
              // Read at click time to avoid a useSearchParams prerender bailout.
              const next = new URLSearchParams(window.location.search).get("next");
              const safe = next && next.startsWith("/") && !next.startsWith("//") ? next : "/tools";
              window.location.href = safe;
            }}
            className="px-7 py-3.5 rounded-full text-white font-semibold"
            style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}
          >
            Open my study helper →
          </button>
          <button
            onClick={() => setSaved(false)}
            className="px-7 py-3.5 rounded-full border font-semibold"
            style={{ borderColor: "var(--ash-border)", background: "rgba(255,255,255,0.7)" }}
          >
            Edit my profile
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--ash-primary)" }}>
        {existing ? "Update your profile" : "Let's set you up"}
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--ash-muted)" }}>
        Answer a few quick questions and your AI tutor adapts every reply to you.
      </p>

      {/* Step indicator */}
      <div className="flex gap-1 mb-6" aria-label={`Step ${step + 1} of 8`}>
        {STEP_LABELS.map((_, i) => (
          <div key={i} className="h-1 flex-1 rounded"
               style={{ background: i <= step ? "var(--ash-primary)" : "#e5e7eb" }} />
        ))}
      </div>

      <div className="glass-panel p-6 rounded-2xl">
        {step === 0 && (
          <>
            <h2 className="text-lg font-semibold mb-2">Which country are you in?</h2>
            <input value={countryQuery} onChange={(e) => setCountryQuery(e.target.value)}
              placeholder="Search country…" className="w-full p-3 rounded-2xl border mb-3" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
              {filteredCountries.map((c) => (
                <button key={c.code} onClick={() => setCountry(c.code)}
                  className="p-3 rounded-2xl border text-left text-sm"
                  style={{
                    borderColor: country === c.code ? "var(--ash-primary)" : "#e5e7eb",
                    background: country === c.code ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "transparent",
                    color: country === c.code ? "white" : "var(--ash-text)",
                  }}>
                  <span className="mr-2">{c.flag}</span>{c.name}
                </button>
              ))}
              {filteredCountries.length === 0 && <p className="col-span-full text-sm" style={{ color: "var(--ash-muted)" }}>No matches. Try "Other / International".</p>}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="text-lg font-semibold mb-2">How old are you?</h2>
            <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>The AI adapts its tone and reading level to your age. Help in Study is for ages 13 and over.</p>
            {/* Floor is 13 to match the privacy policy and our COPPA position —
                the slider used to start at 6, which invited under-13s to sign up. */}
            <input type="range" min={13} max={30} value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full" aria-label="Your age" />
            <div className="text-center text-4xl font-bold mt-2">{age}</div>
            <div className="mt-4 p-4 rounded-2xl text-sm"
              style={{ background: preview.palette.bg, color: preview.palette.text }}>
              <div style={{ color: preview.palette.primary, fontWeight: 700 }}>Preview at age {age}</div>
              <div style={{ color: preview.palette.mutedText }}>Tone: {preview.aiTone}</div>
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold mb-2" htmlFor="onboarding-what-should-we-call-you-optional">What should we call you? (optional)</label>
              <input id="onboarding-what-should-we-call-you-optional" value={displayName} onChange={(e) => setDisplayName(e.target.value)}
                placeholder="First name" className="w-full p-3 rounded-2xl border" maxLength={30} />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-lg font-semibold mb-2">Which curriculum?</h2>
            <p className="text-sm mb-2" style={{ color: "var(--ash-muted)" }}>Type "CBSE", "GCSE", "AP", "Cambridge", or "WAEC".</p>
            <input value={curriculumQuery} onChange={(e) => setCurriculumQuery(e.target.value)}
              placeholder="Search curriculum / board…" className="w-full p-3 rounded-2xl border mb-3" />
            <div className="space-y-2 max-h-[420px] overflow-y-auto">
              {curricula.map((c) => (
                <button key={c.id} onClick={() => { setCurriculum(c.id); setGrade(""); }}
                  className="w-full p-3 rounded-2xl border text-left"
                  style={{
                    borderColor: curriculum === c.id ? "var(--ash-primary)" : "#e5e7eb",
                    background: curriculum === c.id ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "transparent",
                    color: curriculum === c.id ? "white" : "var(--ash-text)",
                  }}>
                  <div className="font-medium">{c.name}</div>
                  {c.region && <div className="text-xs mt-0.5" style={{ color: curriculum === c.id ? "rgba(255,255,255,0.85)" : "var(--ash-muted)" }}>{c.region}</div>}
                </button>
              ))}
              {curricula.length === 0 && <p className="text-sm" style={{ color: "var(--ash-muted)" }}>No match. Try a different search term.</p>}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-lg font-semibold mb-4">Which class / grade?</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-96 overflow-y-auto">
              {currentCurriculum?.grades.map((g) => (
                <button key={g} onClick={() => setGrade(g)}
                  className="p-2 rounded-2xl border text-sm"
                  style={{
                    borderColor: grade === g ? "var(--ash-primary)" : "#e5e7eb",
                    background: grade === g ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "transparent",
                    color: grade === g ? "white" : "var(--ash-text)",
                  }}>
                  {g}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-lg font-semibold mb-2">Which subjects do you study?</h2>
            <p className="text-sm mb-3" style={{ color: "var(--ash-muted)" }}>Pick all that apply — we'll use this to focus the AI on your real subjects.</p>
            <div className="flex flex-wrap gap-2">
              {COMMON_SUBJECTS.map((s) => {
                const active = subjects.includes(s);
                return (
                  <button key={s} onClick={() => setSubjects(toggle(subjects, s))}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      background: active ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "rgba(255,255,255,0.7)",
                      color: active ? "white" : "var(--ash-text)",
                      border: "1px solid var(--ash-border)",
                    }}>
                    {s}
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex gap-2">
              <input value={customSubject} onChange={(e) => setCustomSubject(e.target.value)}
                placeholder="Add a custom subject…" className="flex-1 p-2 rounded-2xl border" />
              <button onClick={() => {
                const v = customSubject.trim();
                if (v && !subjects.includes(v)) setSubjects([...subjects, v]);
                setCustomSubject("");
              }} className="px-4 rounded-2xl border">Add</button>
            </div>
            {subjects.length > 0 && <p className="text-xs mt-3" style={{ color: "var(--ash-muted)" }}>{subjects.length} selected. You can skip this step if unsure.</p>}
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-lg font-semibold mb-2">Which subjects do you find hardest?</h2>
            <p className="text-sm mb-3" style={{ color: "var(--ash-muted)" }}>So we can prioritise extra help here.</p>
            <div className="flex flex-wrap gap-2">
              {(subjects.length ? subjects : COMMON_SUBJECTS).map((s) => {
                const active = struggling.includes(s);
                return (
                  <button key={s} onClick={() => setStruggling(toggle(struggling, s))}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      background: active ? "linear-gradient(135deg, #dc2626, #f97316)" : "rgba(255,255,255,0.7)",
                      color: active ? "white" : "var(--ash-text)",
                      border: "1px solid var(--ash-border)",
                    }}>
                    {s}
                  </button>
                );
              })}
            </div>
            {struggling.length > 0 && <p className="text-xs mt-3" style={{ color: "var(--ash-muted)" }}>{struggling.length} flagged. Skip if nothing is hard right now.</p>}
          </>
        )}

        {step === 6 && (
          <>
            <h2 className="text-lg font-semibold mb-2">What do you love outside school?</h2>
            <p className="text-sm mb-3" style={{ color: "var(--ash-muted)" }}>Used by the "make it about my interests" feature to reframe explanations through your world.</p>
            <div className="flex flex-wrap gap-2">
              {COMMON_INTERESTS.map((it) => {
                const active = interests.includes(it.label);
                return (
                  <button key={it.label} onClick={() => setInterests(toggle(interests, it.label))}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{
                      background: active ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "rgba(255,255,255,0.7)",
                      color: active ? "white" : "var(--ash-text)",
                      border: "1px solid var(--ash-border)",
                    }}>
                    <span className="mr-1">{it.emoji}</span>{it.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex gap-2">
              <input value={customInterest} onChange={(e) => setCustomInterest(e.target.value)}
                placeholder="Or type your own (e.g. F1, knitting, chess)…" className="flex-1 p-2 rounded-2xl border" />
              <button onClick={() => {
                const v = customInterest.trim();
                if (v && !interests.includes(v)) setInterests([...interests, v]);
                setCustomInterest("");
              }} className="px-4 rounded-2xl border">Add</button>
            </div>
          </>
        )}

        {step === 7 && (
          <>
            <h2 className="text-lg font-semibold mb-2">How should the AI explain things to you?</h2>
            <p className="text-sm mb-3" style={{ color: "var(--ash-muted)" }}>You can change this anytime in Settings or per-question.</p>

            <div className="text-xs uppercase tracking-widest font-semibold mt-2 mb-2" style={{ color: "var(--ash-primary)", letterSpacing: "0.2em" }}>Format</div>
            <div className="grid grid-cols-2 gap-2">
              {FORMAT_OPTIONS.map((o) => (
                <button key={o.id} onClick={() => setFormatPref(o.id)}
                  className="p-3 rounded-2xl text-left text-sm"
                  style={{
                    background: formatPref === o.id ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "rgba(255,255,255,0.7)",
                    color: formatPref === o.id ? "white" : "var(--ash-text)",
                    border: "1px solid var(--ash-border)",
                  }}>
                  <div className="font-semibold">{o.title}</div>
                  <div className="text-[12px] mt-0.5" style={{ opacity: formatPref === o.id ? 0.95 : 0.7 }}>{o.sub}</div>
                </button>
              ))}
            </div>

            <div className="text-xs uppercase tracking-widest font-semibold mt-5 mb-2" style={{ color: "var(--ash-primary)", letterSpacing: "0.2em" }}>Tone</div>
            <div className="grid grid-cols-2 gap-2">
              {TONE_OPTIONS.map((o) => (
                <button key={o.id} onClick={() => setTonePref(o.id)}
                  className="p-3 rounded-2xl text-left text-sm"
                  style={{
                    background: tonePref === o.id ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "rgba(255,255,255,0.7)",
                    color: tonePref === o.id ? "white" : "var(--ash-text)",
                    border: "1px solid var(--ash-border)",
                  }}>
                  <div className="font-semibold">{o.title}</div>
                  <div className="text-[12px] mt-0.5" style={{ opacity: tonePref === o.id ? 0.95 : 0.7 }}>{o.sub}</div>
                </button>
              ))}
            </div>

            <div className="mt-5">
              <label className="block text-sm font-semibold mb-2" htmlFor="onboarding-what-s-your-goal-optional">What's your goal? (optional)</label>
              <input id="onboarding-what-s-your-goal-optional" value={goal} onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Get an A in IGCSE Math by June 2026" className="w-full p-3 rounded-2xl border" maxLength={120} />
            </div>
          </>
        )}

        {/* Nav */}
        <div className="flex justify-between mt-8">
          <button disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="px-4 py-2 rounded-2xl border disabled:opacity-40">Back</button>

          <div className="flex gap-2">
            {step >= 4 && step < 7 && (
              <button onClick={() => setStep((s) => s + 1)}
                className="px-4 py-2 rounded-2xl text-sm font-semibold"
                style={{ color: "var(--ash-muted)" }}>Skip</button>
            )}
            {step < 7 ? (
              <button disabled={!canAdvance()} onClick={() => setStep((s) => s + 1)}
                className="px-5 py-2 rounded-2xl text-white font-semibold disabled:opacity-40"
                style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>Next</button>
            ) : (
              <button disabled={finishing} onClick={finish}
                className="px-5 py-2 rounded-2xl text-white font-semibold disabled:opacity-40"
                style={{ background: "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" }}>
                {finishing ? "Saving…" : "Finish"}
              </button>
            )}
          </div>
        </div>

        {finishError && <p className="mt-3 text-sm text-red-600">{finishError}</p>}

        <p className="mt-4 text-[11px]" style={{ color: "var(--ash-muted)" }}>
          Step {step + 1} of 8 · {STEP_LABELS[step]}
        </p>
      </div>
    </main>
  );
}
