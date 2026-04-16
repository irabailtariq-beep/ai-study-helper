// Tiny SM-2 implementation.
// quality: 0-5 (0=blackout, 3=correct after hesitation, 5=perfect)
export function sm2(
  current: { interval_days: number; ease: number; reps: number },
  quality: number
): { interval_days: number; ease: number; reps: number; nextDue: string } {
  let { interval_days, ease, reps } = current;
  if (quality < 3) {
    reps = 0;
    interval_days = 1;
  } else {
    reps += 1;
    if (reps === 1) interval_days = 1;
    else if (reps === 2) interval_days = 6;
    else interval_days = Math.round(interval_days * ease);
    ease = Math.max(1.3, ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  }
  const next = new Date();
  next.setDate(next.getDate() + interval_days);
  return { interval_days, ease, reps, nextDue: next.toISOString().slice(0, 10) };
}
