// Deterministic citation formatter — no AI, no network, pure function.
// Covers APA, MLA, Chicago (author-date), Harvard from 5 simple fields.

export type CiteStyle = "apa" | "mla" | "chicago" | "harvard";

export type CiteInput = {
  author: string;      // "Smith, John" or "Smith, J."
  title: string;
  year: string;
  publisher: string;   // publisher OR site / journal name
  url?: string;
  accessed?: string;   // optional, used for web sources in MLA / Harvard
};

const t = (s?: string) => (s || "").trim();

export function formatCitation(style: CiteStyle, input: CiteInput): string {
  const A = t(input.author) || "Author, A.";
  const Y = t(input.year) || "n.d.";
  const T = t(input.title) || "Untitled";
  const P = t(input.publisher);
  const U = t(input.url);
  const D = t(input.accessed);

  switch (style) {
    case "apa": {
      // Author (Year). Title. Publisher. URL
      let out = `${A} (${Y}). ${T}.`;
      if (P) out += ` ${P}.`;
      if (U) out += ` ${U}`;
      return out.trim();
    }
    case "mla": {
      // Author. "Title." Publisher, Year, URL. Accessed date.
      let out = `${A}. "${T}."`;
      const meta = [P, Y].filter(Boolean).join(", ");
      if (meta) out += ` ${meta}`;
      out += U ? `, ${U}.` : `.`;
      if (U && D) out += ` Accessed ${D}.`;
      return out.trim();
    }
    case "chicago": {
      // Author. Year. Title. Publisher. URL.
      let out = `${A}. ${Y}. ${T}.`;
      if (P) out += ` ${P}.`;
      if (U) out += ` ${U}.`;
      return out.trim();
    }
    case "harvard": {
      // Author (Year) Title. Publisher. Available at: URL (Accessed: date).
      let out = `${A} (${Y}) ${T}.`;
      if (P) out += ` ${P}.`;
      if (U) out += ` Available at: ${U}${D ? ` (Accessed: ${D})` : ""}.`;
      return out.trim();
    }
    default:
      return `${A} (${Y}). ${T}.`;
  }
}

export const CITE_STYLES: { id: CiteStyle; label: string }[] = [
  { id: "apa", label: "APA" },
  { id: "mla", label: "MLA" },
  { id: "chicago", label: "Chicago" },
  { id: "harvard", label: "Harvard" },
];
