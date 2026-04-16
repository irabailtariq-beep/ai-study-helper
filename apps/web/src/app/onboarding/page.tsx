"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { COUNTRIES, curriculaForCountry, type CountryCode, themeForAge } from "@ash/core";
import { useProfile } from "@/lib/profileStore";

export default function OnboardingPage() {
  const router = useRouter();
  const setProfile = useProfile((s) => s.setProfile);
  const [step, setStep] = useState(0);
  const [country, setCountry] = useState<CountryCode | "">("");
  const [age, setAge] = useState<number>(14);
  const [grade, setGrade] = useState("");
  const [curriculum, setCurriculum] = useState("");

  const curricula = useMemo(() => (country ? curriculaForCountry(country) : []), [country]);
  const currentCurriculum = curricula.find((c) => c.id === curriculum);

  function finish() {
    if (!country || !curriculum || !grade) return;
    setProfile({ country, age, grade, curriculum });
    router.push("/");
  }

  const preview = themeForAge(age);

  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--ash-primary)" }}>
        Let's set you up
      </h1>

      <div className="flex gap-1 mb-6">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded"
            style={{ background: i <= step ? "var(--ash-primary)" : "#e5e7eb" }}
          />
        ))}
      </div>

      <div className="bg-ash-surface p-6 rounded-ash shadow-sm">
        {step === 0 && (
          <>
            <h2 className="text-lg font-semibold mb-4">Which country are you in?</h2>
            <div className="grid grid-cols-2 gap-2">
              {COUNTRIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCountry(c.code)}
                  className="p-3 rounded-ash border text-left"
                  style={{
                    borderColor: country === c.code ? "var(--ash-primary)" : "#e5e7eb",
                    background: country === c.code ? "var(--ash-primary)" : "transparent",
                    color: country === c.code ? "white" : "var(--ash-text)",
                  }}
                >
                  <span className="mr-2">{c.flag}</span>
                  {c.name}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="text-lg font-semibold mb-2">How old are you?</h2>
            <p className="text-sm mb-4" style={{ color: "var(--ash-muted)" }}>
              The app changes how it looks and speaks based on your age.
            </p>
            <input
              type="range"
              min={6}
              max={30}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center text-3xl font-bold mt-2">{age}</div>
            <div
              className="mt-4 p-4 rounded-ash text-sm"
              style={{
                background: preview.palette.bg,
                color: preview.palette.text,
                borderRadius: `${preview.radius}px`,
              }}
            >
              <div style={{ color: preview.palette.primary, fontWeight: 700 }}>
                Preview at age {age}
              </div>
              <div style={{ color: preview.palette.mutedText }}>
                Tone: {preview.aiTone}
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-lg font-semibold mb-4">Which curriculum?</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {curricula.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setCurriculum(c.id);
                    setGrade("");
                  }}
                  className="w-full p-3 rounded-ash border text-left"
                  style={{
                    borderColor: curriculum === c.id ? "var(--ash-primary)" : "#e5e7eb",
                    background: curriculum === c.id ? "var(--ash-primary)" : "transparent",
                    color: curriculum === c.id ? "white" : "var(--ash-text)",
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-lg font-semibold mb-4">Which class / grade?</h2>
            <div className="grid grid-cols-3 gap-2">
              {currentCurriculum?.grades.map((g) => (
                <button
                  key={g}
                  onClick={() => setGrade(g)}
                  className="p-2 rounded-ash border text-sm"
                  style={{
                    borderColor: grade === g ? "var(--ash-primary)" : "#e5e7eb",
                    background: grade === g ? "var(--ash-primary)" : "transparent",
                    color: grade === g ? "white" : "var(--ash-text)",
                  }}
                >
                  {g}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="flex justify-between mt-8">
          <button
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="px-4 py-2 rounded-ash border disabled:opacity-40"
          >
            Back
          </button>
          {step < 3 ? (
            <button
              disabled={(step === 0 && !country) || (step === 2 && !curriculum)}
              onClick={() => setStep((s) => s + 1)}
              className="px-4 py-2 rounded-ash text-white disabled:opacity-40"
              style={{ background: "var(--ash-primary)" }}
            >
              Next
            </button>
          ) : (
            <button
              disabled={!grade}
              onClick={finish}
              className="px-4 py-2 rounded-ash text-white disabled:opacity-40"
              style={{ background: "var(--ash-primary)" }}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
