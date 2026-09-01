"use client";
import { useState, useMemo } from "react";
import { GCSE_BOUNDARIES, BOUNDARY_SERIES, findBoundaryRow, gradeForMark } from "@/content/gcseBoundaries";

/**
 * GCSE grade lookup against the published June 2026 boundaries.
 *
 * Deliberately a LOOKUP, not a model: the student enters one total raw mark for
 * the whole qualification and we read the answer off the board's own table. An
 * earlier design asked for marks per paper and had to encode each spec's
 * component structure — which is exactly where it got OCR's J260 wrong. Nothing
 * here is interpolated, extrapolated, or carried across board, spec or tier.
 */
const SUBJECTS = ["Maths", "Combined Science"] as const;
const BOARDS = ["AQA", "Edexcel", "OCR"] as const;
const TIERS = ["Foundation", "Higher"] as const;

export function GcseGradeCalculator() {
  const [subject, setSubject] = useState<(typeof SUBJECTS)[number]>("Maths");
  const [board, setBoard] = useState<(typeof BOARDS)[number]>("AQA");
  const [tier, setTier] = useState<(typeof TIERS)[number]>("Higher");
  const [specIdx, setSpecIdx] = useState(0);
  const [mark, setMark] = useState(120);

  // Specs this board publishes for this subject (AQA Combined has two, OCR too).
  const specs = useMemo(() => {
    const seen = new Map<string, string>();
    for (const r of GCSE_BOUNDARIES) {
      if (r.board === board && r.subject === subject) seen.set(r.spec, r.specName);
    }
    return [...seen.entries()].map(([spec, specName]) => ({ spec, specName }));
  }, [board, subject]);

  const chosen = specs[Math.min(specIdx, specs.length - 1)];
  const row = chosen ? findBoundaryRow(board, chosen.spec, tier) : undefined;
  // Never silently rewrite the student's own number. If their mark does not fit
  // the paper they have now selected (switching board changes the total), say so
  // and show no grade, rather than clamping and reporting a grade they did not
  // earn. Clamping is what made 250/300 on OCR read as "240 out of 240" on AQA.
  const overMax = row ? mark > row.maxMark : false;
  const capped = row ? Math.max(0, Math.min(row.maxMark, mark)) : mark;
  const showResult = Boolean(row) && !overMax && Number.isFinite(mark);

  const grade = row && showResult ? gradeForMark(row, capped) : "";
  const awarded = row ? row.grades.find((g) => g.grade === grade) : undefined;
  // Next grade up: the printed grade immediately above the one awarded. When the
  // result is U there is no awarded boundary, so the target is the LOWEST printed
  // grade — well defined, unlike "the grade above U".
  const nextUp = row
    ? awarded
      ? row.grades[row.grades.indexOf(awarded) - 1]
      : row.grades[row.grades.length - 1]
    : undefined;

  const sel = "mt-1 w-full rounded-lg border px-3 py-2 text-sm";
  const selStyle = { borderColor: "var(--ash-border)", background: "var(--ash-bg)" };

  return (
    <section className="glass-panel rounded-2xl p-6 my-8" aria-label="GCSE grade calculator">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="g-subject" className="block text-sm font-semibold">Subject</label>
          <select id="g-subject" className={sel} style={selStyle} value={subject}
            onChange={(e) => { setSubject(e.target.value as typeof subject); setSpecIdx(0); }}>
            {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="g-board" className="block text-sm font-semibold">Exam board</label>
          <select id="g-board" className={sel} style={selStyle} value={board}
            onChange={(e) => { setBoard(e.target.value as typeof board); setSpecIdx(0); }}>
            {BOARDS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        {specs.length > 1 && (
          <div>
            <label htmlFor="g-spec" className="block text-sm font-semibold">Which course</label>
            <select id="g-spec" className={sel} style={selStyle} value={specIdx}
              onChange={(e) => setSpecIdx(Number(e.target.value))}>
              {specs.map((s, i) => <option key={s.spec} value={i}>{s.specName} ({s.spec})</option>)}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="g-tier" className="block text-sm font-semibold">Tier</label>
          <select id="g-tier" className={sel} style={selStyle} value={tier}
            onChange={(e) => setTier(e.target.value as typeof tier)}>
            {TIERS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {row ? (
        <>
          <div className="mt-6">
            <label htmlFor="g-mark" className="block text-sm font-semibold">
              Your total mark across all papers (0–{row.maxMark})
            </label>
            <input id="g-mark" type="range" min={0} max={row.maxMark} value={capped}
              onChange={(e) => setMark(Number(e.target.value))} className="w-full mt-2" />
            <input type="number" min={0} max={row.maxMark} value={capped}
              onChange={(e) => setMark(Number(e.target.value))}
              className="mt-1 w-28 rounded-lg border px-3 py-2 text-center text-lg font-bold"
              style={selStyle} aria-label="Total mark" />
          </div>

          <div className="mt-6 rounded-xl p-5 text-center" style={{ background: "var(--ash-bg)" }}>
            <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--ash-muted)", letterSpacing: "0.2em" }}>
              {BOUNDARY_SERIES} boundaries
            </div>
            {showResult ? (
              <>
                <div className="text-5xl font-extrabold mt-2" style={{ color: "var(--ash-primary)" }}>{grade}</div>
                <p className="text-sm mt-2" style={{ color: "var(--ash-muted)" }}>
                  {capped} out of {row.maxMark} on {board} {chosen?.specName} ({chosen?.spec}), {tier} tier
                </p>
                <p className="text-sm mt-3">
                  {awarded && (
                    capped === awarded.boundary
                      ? <>You are exactly on the grade {awarded.grade} boundary. </>
                      : <>You are {capped - awarded.boundary} mark{capped - awarded.boundary === 1 ? "" : "s"} above the grade {awarded.grade} boundary. </>
                  )}
                  {nextUp && capped < nextUp.boundary && <>Grade {nextUp.grade} needed {nextUp.boundary - capped} more.</>}
                  {!nextUp && <>That is the highest grade this tier awards.</>}
                </p>
              </>
            ) : (
              <p className="text-base mt-3">
                {overMax
                  ? <>Your mark of {mark} is more than this paper&apos;s total of {row.maxMark}. Enter your mark for {board} {chosen?.specName} to see the grade.</>
                  : <>Enter your total mark to see the grade.</>}
              </p>
            )}
          </div>

          <details className="mt-4">
            <summary className="text-sm font-semibold cursor-pointer">
              All {BOUNDARY_SERIES} boundaries for this paper
            </summary>
            <ul className="mt-2 text-sm grid grid-cols-2 sm:grid-cols-3 gap-1" style={{ color: "var(--ash-muted)" }}>
              {row.grades.map((g) => (
                <li key={g.grade}>Grade {g.grade}: {g.boundary} marks</li>
              ))}
              <li>Below {row.grades[row.grades.length - 1].boundary}: U</li>
            </ul>
          </details>
        </>
      ) : (
        <p className="mt-6 text-sm" style={{ color: "var(--ash-muted)" }}>
          We do not hold published boundaries for that combination, so there is nothing
          honest to show. Check your board's own grade boundary document.
        </p>
      )}

      <p className="mt-5 text-xs leading-relaxed" style={{ color: "var(--ash-muted)" }}>
        These are the real {BOUNDARY_SERIES} boundaries as published by the board — but boundaries
        move every single exam series, because they are set after examiners see how hard the papers
        turned out. Use this to understand where you stand in a mock, not to predict a future grade.
        Foundation tier tops out at grade 5 (5-5 in combined science); Higher tier runs 9 to 4 with a
        narrow safety-net grade 3 (4-3 in combined science) below it.
      </p>
    </section>
  );
}
