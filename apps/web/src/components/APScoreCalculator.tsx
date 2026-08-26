"use client";
import { useState } from "react";
import type { ApCalcData } from "@/content/examPages";

/**
 * AP score estimator. Interactive on purpose: an answer box can't BE a
 * calculator, which is why calculator SERPs resist AI Overviews. Estimates
 * only — official curves shift every year and the page says so.
 */
export function APScoreCalculator({ data }: { data: ApCalcData }) {
  const [mcq, setMcq] = useState(Math.round(data.mcqCount * 0.6));
  const [frq, setFrq] = useState(Math.round(data.frqMaxPoints * 0.6));

  const composite =
    (mcq / data.mcqCount) * data.mcqWeightPercent +
    (frq / data.frqMaxPoints) * data.frqWeightPercent;
  const pct = Math.round(composite);
  const score =
    pct >= data.cutoffs.five ? 5 :
    pct >= data.cutoffs.four ? 4 :
    pct >= data.cutoffs.three ? 3 :
    pct >= data.cutoffs.two ? 2 : 1;

  const clamp = (v: number, max: number) => Math.max(0, Math.min(max, Math.round(v)));

  return (
    <section className="glass-panel rounded-2xl p-6 my-8" aria-label={`${data.name} score calculator`}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ap-mcq" className="block text-sm font-semibold">
            Multiple choice: correct answers (0–{data.mcqCount})
          </label>
          <input
            id="ap-mcq" type="range" min={0} max={data.mcqCount} value={mcq}
            onChange={(e) => setMcq(clamp(Number(e.target.value), data.mcqCount))}
            className="w-full mt-2"
          />
          <div className="text-center text-2xl font-bold mt-1">{mcq}</div>
          <p className="text-xs text-center" style={{ color: "var(--ash-muted)" }}>
            worth {data.mcqWeightPercent}% of the exam
          </p>
        </div>
        <div>
          <label htmlFor="ap-frq" className="block text-sm font-semibold">
            Free response: points earned (0–{data.frqMaxPoints})
          </label>
          <input
            id="ap-frq" type="range" min={0} max={data.frqMaxPoints} value={frq}
            onChange={(e) => setFrq(clamp(Number(e.target.value), data.frqMaxPoints))}
            className="w-full mt-2"
          />
          <div className="text-center text-2xl font-bold mt-1">{frq}</div>
          <p className="text-xs text-center" style={{ color: "var(--ash-muted)" }}>
            {data.frqCount} questions, worth {data.frqWeightPercent}% of the exam
          </p>
        </div>
      </div>

      <div className="text-center mt-6 pt-5" style={{ borderTop: "1px solid var(--ash-border)" }}>
        <div className="text-sm" style={{ color: "var(--ash-muted)" }}>Estimated composite: {pct}%</div>
        <div className="text-5xl font-extrabold mt-1" style={{ color: "var(--ash-primary)" }} aria-live="polite">
          {score}
        </div>
        <div className="text-sm font-semibold mt-1">estimated AP score</div>
        <p className="text-xs mt-3 max-w-md mx-auto" style={{ color: "var(--ash-muted)" }}>
          Estimate only — the College Board adjusts the real cut points every year. {data.sourceNote}
        </p>
      </div>
    </section>
  );
}
