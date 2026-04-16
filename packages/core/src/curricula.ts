import type { CountryCode } from "./types";

export type Curriculum = {
  id: string;
  name: string;
  country: CountryCode;
  grades: string[]; // display labels
};

const k12 = (prefix: string, start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => `${prefix} ${start + i}`);

export const CURRICULA: Curriculum[] = [
  // India
  { id: "in-cbse", name: "CBSE", country: "IN", grades: k12("Class", 1, 12) },
  { id: "in-icse", name: "ICSE / ISC", country: "IN", grades: k12("Class", 1, 12) },
  { id: "in-state", name: "State Board (generic)", country: "IN", grades: k12("Class", 1, 12) },

  // China
  { id: "cn-national", name: "National Curriculum (Gaokao-aligned)", country: "CN", grades: k12("Grade", 1, 12) },

  // USA
  { id: "us-common-core", name: "Common Core", country: "US", grades: ["K", ...k12("Grade", 1, 12)] },
  { id: "us-ap", name: "Advanced Placement (AP)", country: "US", grades: k12("Grade", 9, 12) },

  // Indonesia
  { id: "id-merdeka", name: "Kurikulum Merdeka", country: "ID", grades: k12("Kelas", 1, 12) },

  // Pakistan
  { id: "pk-federal", name: "Federal Board (FBISE)", country: "PK", grades: k12("Class", 1, 12) },
  { id: "pk-punjab", name: "Punjab Board", country: "PK", grades: k12("Class", 1, 12) },
  { id: "pk-sindh", name: "Sindh Board", country: "PK", grades: k12("Class", 1, 12) },
  { id: "pk-kpk", name: "KPK Board", country: "PK", grades: k12("Class", 1, 12) },
  { id: "pk-balochistan", name: "Balochistan Board", country: "PK", grades: k12("Class", 1, 12) },
  { id: "pk-aku-eb", name: "AKU-EB", country: "PK", grades: k12("Class", 9, 12) },

  // Nigeria
  { id: "ng-waec", name: "WAEC (Senior Secondary)", country: "NG", grades: ["SS1", "SS2", "SS3"] },
  { id: "ng-neco", name: "NECO", country: "NG", grades: ["SS1", "SS2", "SS3"] },
  { id: "ng-basic", name: "Universal Basic Education (UBE)", country: "NG", grades: k12("Primary", 1, 6).concat(["JSS1","JSS2","JSS3"]) },

  // Brazil
  { id: "br-bncc", name: "BNCC / ENEM", country: "BR", grades: k12("Ano", 1, 12) },

  // Bangladesh
  { id: "bd-nctb", name: "NCTB", country: "BD", grades: k12("Class", 1, 12) },

  // Russia
  { id: "ru-fgos", name: "FGOS (Federal State Standard)", country: "RU", grades: k12("Class", 1, 11) },

  // Mexico
  { id: "mx-sep", name: "SEP (Plan 2022)", country: "MX", grades: k12("Grado", 1, 12) },

  // Universal / International
  { id: "intl-cambridge-igcse", name: "Cambridge IGCSE", country: "OTHER", grades: ["Year 10", "Year 11"] },
  { id: "intl-cambridge-olevel", name: "Cambridge O Level", country: "OTHER", grades: ["Year 10", "Year 11"] },
  { id: "intl-cambridge-alevel", name: "Cambridge A Level (AS/A2)", country: "OTHER", grades: ["Year 12", "Year 13"] },
  { id: "intl-ib-pyp", name: "IB PYP (Primary)", country: "OTHER", grades: k12("Grade", 1, 5) },
  { id: "intl-ib-myp", name: "IB MYP (Middle)", country: "OTHER", grades: k12("Grade", 6, 10) },
  { id: "intl-ib-dp", name: "IB Diploma", country: "OTHER", grades: ["DP1", "DP2"] },
  { id: "intl-edexcel", name: "Edexcel (IGCSE / International A Level)", country: "OTHER", grades: k12("Year", 10, 13) },
];

export const COUNTRIES: { code: CountryCode; name: string; flag: string }[] = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "OTHER", name: "Other (International)", flag: "🌍" },
];

export function curriculaForCountry(country: CountryCode): Curriculum[] {
  const local = CURRICULA.filter((c) => c.country === country);
  const intl = CURRICULA.filter((c) => c.country === "OTHER");
  // Always also offer international tracks (students in PK/IN often do Cambridge/IB)
  return country === "OTHER" ? intl : [...local, ...intl];
}
