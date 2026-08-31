// GCSE (9-1) grade boundaries — June 2026 series, AQA / Pearson Edexcel / OCR.
//
// Every row below was transcribed from the awarding body's own published
// boundary document and then independently re-extracted and re-checked against
// those documents by a second reviewer (2026-08-31). Boundaries are facts, not
// copyrightable content, but they are also SERIES-SPECIFIC: they move every
// exam session, so this data is a lookup for June 2026 only and the page says
// so. Never interpolate between boundaries, never carry a mark across boards,
// specs or tiers, and never output a grade the tier does not offer.
//
// Grades printed "-" (AQA), "n/a" (OCR) or blank (Pearson) are NOT available on
// that tier and are therefore absent here. U is the residual outcome, not a
// threshold, so no U row is stored.

export type BoundaryRow = {
  board: "AQA" | "Edexcel" | "OCR";
  /** specification code as printed by the board, e.g. "8300" */
  spec: string;
  subject: "Maths" | "Combined Science";
  /** shown when a board offers more than one spec for the subject */
  specName: string;
  tier: "Foundation" | "Higher";
  maxMark: number;
  /** highest grade first; boundary = minimum raw mark for that grade */
  grades: { grade: string; boundary: number }[];
};

export const BOUNDARY_SERIES = "June 2026";

export const GCSE_BOUNDARIES: BoundaryRow[] = [
  // ---- Maths (single award) ----
  {
    board: "AQA", spec: "8300", subject: "Maths", specName: "Mathematics", tier: "Foundation", maxMark: 240,
    grades: [{ grade: "5", boundary: 187 }, { grade: "4", boundary: 154 }, { grade: "3", boundary: 115 }, { grade: "2", boundary: 76 }, { grade: "1", boundary: 38 }],
  },
  {
    board: "AQA", spec: "8300", subject: "Maths", specName: "Mathematics", tier: "Higher", maxMark: 240,
    grades: [{ grade: "9", boundary: 219 }, { grade: "8", boundary: 192 }, { grade: "7", boundary: 166 }, { grade: "6", boundary: 131 }, { grade: "5", boundary: 97 }, { grade: "4", boundary: 63 }, { grade: "3", boundary: 46 }],
  },
  {
    board: "Edexcel", spec: "1MA1", subject: "Maths", specName: "Mathematics", tier: "Foundation", maxMark: 240,
    grades: [{ grade: "5", boundary: 181 }, { grade: "4", boundary: 151 }, { grade: "3", boundary: 110 }, { grade: "2", boundary: 69 }, { grade: "1", boundary: 29 }],
  },
  {
    board: "Edexcel", spec: "1MA1", subject: "Maths", specName: "Mathematics", tier: "Higher", maxMark: 240,
    grades: [{ grade: "9", boundary: 208 }, { grade: "8", boundary: 177 }, { grade: "7", boundary: 146 }, { grade: "6", boundary: 114 }, { grade: "5", boundary: 82 }, { grade: "4", boundary: 50 }, { grade: "3", boundary: 34 }],
  },
  {
    board: "OCR", spec: "J560", subject: "Maths", specName: "Mathematics", tier: "Foundation", maxMark: 300,
    grades: [{ grade: "5", boundary: 183 }, { grade: "4", boundary: 133 }, { grade: "3", boundary: 96 }, { grade: "2", boundary: 59 }, { grade: "1", boundary: 23 }],
  },
  {
    board: "OCR", spec: "J560", subject: "Maths", specName: "Mathematics", tier: "Higher", maxMark: 300,
    grades: [{ grade: "9", boundary: 264 }, { grade: "8", boundary: 217 }, { grade: "7", boundary: 170 }, { grade: "6", boundary: 132 }, { grade: "5", boundary: 94 }, { grade: "4", boundary: 57 }, { grade: "3", boundary: 38 }],
  },
  // ---- Combined Science (double award) ----
  {
    board: "AQA", spec: "8464", subject: "Combined Science", specName: "Trilogy", tier: "Foundation", maxMark: 420,
    grades: [{ grade: "5-5", boundary: 276 }, { grade: "5-4", boundary: 257 }, { grade: "4-4", boundary: 238 }, { grade: "4-3", boundary: 208 }, { grade: "3-3", boundary: 178 }, { grade: "3-2", boundary: 149 }, { grade: "2-2", boundary: 120 }, { grade: "2-1", boundary: 91 }, { grade: "1-1", boundary: 62 }],
  },
  {
    board: "AQA", spec: "8464", subject: "Combined Science", specName: "Trilogy", tier: "Higher", maxMark: 420,
    grades: [{ grade: "9-9", boundary: 298 }, { grade: "9-8", boundary: 280 }, { grade: "8-8", boundary: 262 }, { grade: "8-7", boundary: 245 }, { grade: "7-7", boundary: 228 }, { grade: "7-6", boundary: 208 }, { grade: "6-6", boundary: 188 }, { grade: "6-5", boundary: 168 }, { grade: "5-5", boundary: 149 }, { grade: "5-4", boundary: 130 }, { grade: "4-4", boundary: 111 }, { grade: "4-3", boundary: 101 }],
  },
  {
    board: "AQA", spec: "8465", subject: "Combined Science", specName: "Synergy", tier: "Foundation", maxMark: 400,
    grades: [{ grade: "5-5", boundary: 252 }, { grade: "5-4", boundary: 233 }, { grade: "4-4", boundary: 215 }, { grade: "4-3", boundary: 189 }, { grade: "3-3", boundary: 163 }, { grade: "3-2", boundary: 137 }, { grade: "2-2", boundary: 111 }, { grade: "2-1", boundary: 85 }, { grade: "1-1", boundary: 60 }],
  },
  {
    board: "AQA", spec: "8465", subject: "Combined Science", specName: "Synergy", tier: "Higher", maxMark: 400,
    grades: [{ grade: "9-9", boundary: 267 }, { grade: "9-8", boundary: 251 }, { grade: "8-8", boundary: 235 }, { grade: "8-7", boundary: 219 }, { grade: "7-7", boundary: 203 }, { grade: "7-6", boundary: 184 }, { grade: "6-6", boundary: 165 }, { grade: "6-5", boundary: 146 }, { grade: "5-5", boundary: 127 }, { grade: "5-4", boundary: 108 }, { grade: "4-4", boundary: 90 }, { grade: "4-3", boundary: 81 }],
  },
  {
    board: "Edexcel", spec: "1SC0", subject: "Combined Science", specName: "Combined Science", tier: "Foundation", maxMark: 360,
    grades: [{ grade: "5-5", boundary: 231 }, { grade: "5-4", boundary: 212 }, { grade: "4-4", boundary: 194 }, { grade: "4-3", boundary: 168 }, { grade: "3-3", boundary: 142 }, { grade: "3-2", boundary: 116 }, { grade: "2-2", boundary: 91 }, { grade: "2-1", boundary: 66 }, { grade: "1-1", boundary: 41 }],
  },
  {
    board: "Edexcel", spec: "1SC0", subject: "Combined Science", specName: "Combined Science", tier: "Higher", maxMark: 360,
    grades: [{ grade: "9-9", boundary: 282 }, { grade: "9-8", boundary: 266 }, { grade: "8-8", boundary: 251 }, { grade: "8-7", boundary: 236 }, { grade: "7-7", boundary: 221 }, { grade: "7-6", boundary: 202 }, { grade: "6-6", boundary: 183 }, { grade: "6-5", boundary: 164 }, { grade: "5-5", boundary: 145 }, { grade: "5-4", boundary: 126 }, { grade: "4-4", boundary: 108 }, { grade: "4-3", boundary: 99 }],
  },
  {
    board: "OCR", spec: "J250", subject: "Combined Science", specName: "Gateway Science A", tier: "Foundation", maxMark: 360,
    grades: [{ grade: "5-5", boundary: 209 }, { grade: "5-4", boundary: 191 }, { grade: "4-4", boundary: 174 }, { grade: "4-3", boundary: 153 }, { grade: "3-3", boundary: 132 }, { grade: "3-2", boundary: 111 }, { grade: "2-2", boundary: 90 }, { grade: "2-1", boundary: 69 }, { grade: "1-1", boundary: 48 }],
  },
  {
    board: "OCR", spec: "J250", subject: "Combined Science", specName: "Gateway Science A", tier: "Higher", maxMark: 360,
    grades: [{ grade: "9-9", boundary: 275 }, { grade: "9-8", boundary: 261 }, { grade: "8-8", boundary: 248 }, { grade: "8-7", boundary: 235 }, { grade: "7-7", boundary: 222 }, { grade: "7-6", boundary: 205 }, { grade: "6-6", boundary: 188 }, { grade: "6-5", boundary: 171 }, { grade: "5-5", boundary: 154 }, { grade: "5-4", boundary: 137 }, { grade: "4-4", boundary: 121 }, { grade: "4-3", boundary: 113 }],
  },
  {
    board: "OCR", spec: "J260", subject: "Combined Science", specName: "Twenty First Century B", tier: "Foundation", maxMark: 360,
    grades: [{ grade: "5-5", boundary: 218 }, { grade: "5-4", boundary: 203 }, { grade: "4-4", boundary: 189 }, { grade: "4-3", boundary: 166 }, { grade: "3-3", boundary: 143 }, { grade: "3-2", boundary: 120 }, { grade: "2-2", boundary: 97 }, { grade: "2-1", boundary: 74 }, { grade: "1-1", boundary: 51 }],
  },
  {
    board: "OCR", spec: "J260", subject: "Combined Science", specName: "Twenty First Century B", tier: "Higher", maxMark: 360,
    grades: [{ grade: "9-9", boundary: 257 }, { grade: "9-8", boundary: 244 }, { grade: "8-8", boundary: 231 }, { grade: "8-7", boundary: 218 }, { grade: "7-7", boundary: 206 }, { grade: "7-6", boundary: 189 }, { grade: "6-6", boundary: 172 }, { grade: "6-5", boundary: 155 }, { grade: "5-5", boundary: 139 }, { grade: "5-4", boundary: 123 }, { grade: "4-4", boundary: 107 }, { grade: "4-3", boundary: 99 }],
  },
];

/** The one published row for this combination, or undefined — never an approximation. */
export function findBoundaryRow(board: string, spec: string, tier: string) {
  return GCSE_BOUNDARIES.find((r) => r.board === board && r.spec === spec && r.tier === tier);
}

/** Highest printed grade whose boundary the mark reaches; "U" below the lowest. */
export function gradeForMark(row: BoundaryRow, mark: number) {
  const hit = row.grades.find((g) => mark >= g.boundary);
  return hit ? hit.grade : "U";
}
