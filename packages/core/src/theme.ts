// Age-continuous adaptive theme.
// Interpolates between anchor ages so UI "grows up" with the user.

type AgeAnchor = {
  age: number;
  fontBase: number;      // px
  fontScale: number;     // headings multiplier
  radius: number;        // border radius
  spacing: number;       // base spacing unit
  animation: number;     // 0..1 how much motion
  palette: {
    bg: string;
    surface: string;
    primary: string;
    accent: string;
    text: string;
    mutedText: string;
  };
  mascotOpacity: number; // 0..1
  navItems: number;
  aiTone: string;
};

const ANCHORS: AgeAnchor[] = [
  {
    age: 6,
    fontBase: 20, fontScale: 1.6, radius: 24, spacing: 16, animation: 1,
    palette: { bg: "#FFF7E6", surface: "#FFFFFF", primary: "#FF7A59", accent: "#7ED957", text: "#3D2C1E", mutedText: "#8A6E55" },
    mascotOpacity: 1, navItems: 3,
    aiTone: "playful story-style with analogies, emojis, and simple words",
  },
  {
    age: 10,
    fontBase: 18, fontScale: 1.5, radius: 20, spacing: 14, animation: 0.8,
    palette: { bg: "#FFF9F3", surface: "#FFFFFF", primary: "#FF6B4A", accent: "#3BA7FF", text: "#2A2A3A", mutedText: "#6B6B82" },
    mascotOpacity: 0.8, navItems: 4,
    aiTone: "friendly and curious; short paragraphs; a few analogies",
  },
  {
    age: 14,
    fontBase: 16, fontScale: 1.4, radius: 14, spacing: 12, animation: 0.5,
    palette: { bg: "#F6F8FC", surface: "#FFFFFF", primary: "#4F46E5", accent: "#22D3EE", text: "#1F2937", mutedText: "#6B7280" },
    mascotOpacity: 0.3, navItems: 5,
    aiTone: "structured and clear; bullet points and worked examples",
  },
  {
    age: 18,
    fontBase: 15, fontScale: 1.35, radius: 10, spacing: 10, animation: 0.25,
    palette: { bg: "#F4F6FA", surface: "#FFFFFF", primary: "#2F4BE0", accent: "#0EA5E9", text: "#111827", mutedText: "#6B7280" },
    mascotOpacity: 0, navItems: 6,
    aiTone: "academic and exam-focused; precise terminology",
  },
  {
    age: 25,
    fontBase: 14, fontScale: 1.3, radius: 8, spacing: 8, animation: 0.1,
    palette: { bg: "#F9FAFB", surface: "#FFFFFF", primary: "#1F2937", accent: "#0EA5E9", text: "#0B0F19", mutedText: "#4B5563" },
    mascotOpacity: 0, navItems: 6,
    aiTone: "concise, direct, professional",
  },
];

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function lerpColor(a: string, b: string, t: number) {
  const pa = a.replace("#",""); const pb = b.replace("#","");
  const ar = parseInt(pa.substring(0,2),16), ag = parseInt(pa.substring(2,4),16), ab = parseInt(pa.substring(4,6),16);
  const br = parseInt(pb.substring(0,2),16), bg = parseInt(pb.substring(2,4),16), bb = parseInt(pb.substring(4,6),16);
  const r = Math.round(lerp(ar,br,t)), g = Math.round(lerp(ag,bg,t)), bl = Math.round(lerp(ab,bb,t));
  return `#${r.toString(16).padStart(2,"0")}${g.toString(16).padStart(2,"0")}${bl.toString(16).padStart(2,"0")}`;
}

export type Theme = Omit<AgeAnchor, "age">;

export function themeForAge(age: number): Theme {
  const clamped = Math.max(ANCHORS[0].age, Math.min(ANCHORS[ANCHORS.length - 1].age, age));
  let lo = ANCHORS[0], hi = ANCHORS[ANCHORS.length - 1];
  for (let i = 0; i < ANCHORS.length - 1; i++) {
    if (clamped >= ANCHORS[i].age && clamped <= ANCHORS[i + 1].age) {
      lo = ANCHORS[i]; hi = ANCHORS[i + 1]; break;
    }
  }
  const t = hi.age === lo.age ? 0 : (clamped - lo.age) / (hi.age - lo.age);
  return {
    fontBase: lerp(lo.fontBase, hi.fontBase, t),
    fontScale: lerp(lo.fontScale, hi.fontScale, t),
    radius: lerp(lo.radius, hi.radius, t),
    spacing: lerp(lo.spacing, hi.spacing, t),
    animation: lerp(lo.animation, hi.animation, t),
    palette: {
      bg: lerpColor(lo.palette.bg, hi.palette.bg, t),
      surface: lerpColor(lo.palette.surface, hi.palette.surface, t),
      primary: lerpColor(lo.palette.primary, hi.palette.primary, t),
      accent: lerpColor(lo.palette.accent, hi.palette.accent, t),
      text: lerpColor(lo.palette.text, hi.palette.text, t),
      mutedText: lerpColor(lo.palette.mutedText, hi.palette.mutedText, t),
    },
    mascotOpacity: lerp(lo.mascotOpacity, hi.mascotOpacity, t),
    navItems: Math.round(lerp(lo.navItems, hi.navItems, t)),
    aiTone: t < 0.5 ? lo.aiTone : hi.aiTone,
  };
}

export function themeToCSSVars(theme: Theme): Record<string, string> {
  return {
    "--ash-bg": theme.palette.bg,
    "--ash-surface": theme.palette.surface,
    "--ash-primary": theme.palette.primary,
    "--ash-accent": theme.palette.accent,
    "--ash-text": theme.palette.text,
    "--ash-muted": theme.palette.mutedText,
    "--ash-radius": `${theme.radius}px`,
    "--ash-font-base": `${theme.fontBase}px`,
    "--ash-spacing": `${theme.spacing}px`,
  };
}
