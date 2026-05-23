import type { CountryCode } from "./types";

export type Curriculum = {
  id: string;
  name: string;
  country: CountryCode;
  grades: string[];        // display labels
  region?: string;         // e.g. "Cambridge", "IB", "State board"
  aliases?: string[];      // for search ("matric", "10th", "SSC", etc.)
};

const k = (prefix: string, start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => `${prefix} ${start + i}`);

export const CURRICULA: Curriculum[] = [
  // ─────────────────────────── PAKISTAN
  { id: "pk-federal",      name: "Federal Board (FBISE)",        country: "PK", grades: k("Class", 1, 12), aliases: ["matric","fsc","ssc","hssc","fbise","federal"] },
  { id: "pk-punjab",       name: "Punjab Board (BISE)",          country: "PK", grades: k("Class", 1, 12), aliases: ["matric","fsc","punjab","lahore","bisep","bisepunjab"] },
  { id: "pk-sindh",        name: "Sindh Board (BSEK / BIEK)",    country: "PK", grades: k("Class", 1, 12), aliases: ["karachi","sindh","matric","fsc"] },
  { id: "pk-kpk",          name: "Khyber Pakhtunkhwa Board",     country: "PK", grades: k("Class", 1, 12), aliases: ["kpk","peshawar","matric","fsc"] },
  { id: "pk-balochistan",  name: "Balochistan Board",            country: "PK", grades: k("Class", 1, 12), aliases: ["quetta","balochistan"] },
  { id: "pk-aku-eb",       name: "AKU-EB",                       country: "PK", grades: k("Class", 9, 12), aliases: ["aga khan","aku","aku-eb"] },
  { id: "pk-aga-khan",     name: "Aga Khan Board",               country: "PK", grades: k("Class", 1, 12), aliases: ["aga khan"] },

  // ─────────────────────────── INDIA
  { id: "in-cbse",         name: "CBSE",                                        country: "IN", grades: k("Class", 1, 12), aliases: ["central board","ncert","cbse","10th","12th","board exam"] },
  { id: "in-icse",         name: "ICSE / ISC (CISCE)",                          country: "IN", grades: k("Class", 1, 12), aliases: ["cisce","icse","isc","council"] },
  { id: "in-nios",         name: "NIOS (Open School)",                          country: "IN", grades: k("Class", 1, 12), aliases: ["open","nios","national institute"] },
  { id: "in-jee",          name: "JEE Main / Advanced prep",                    country: "IN", grades: ["Class 11","Class 12","Drop year"], aliases: ["iit","jee","engineering"] },
  { id: "in-neet",         name: "NEET prep",                                   country: "IN", grades: ["Class 11","Class 12","Drop year"], aliases: ["medical","neet","aiims"] },
  { id: "in-maharashtra",  name: "Maharashtra State Board (MSBSHSE)",           country: "IN", grades: k("Class", 1, 12), aliases: ["maharashtra","msbshse","ssc","hsc","mumbai","pune"] },
  { id: "in-tamilnadu",    name: "Tamil Nadu State Board (TN)",                 country: "IN", grades: k("Class", 1, 12), aliases: ["tamil nadu","tn","chennai","samacheer kalvi"] },
  { id: "in-up",           name: "Uttar Pradesh Board (UP Board)",              country: "IN", grades: k("Class", 1, 12), aliases: ["up","uttar pradesh","upmsp"] },
  { id: "in-karnataka",    name: "Karnataka State Board (KSEEB / PUE)",         country: "IN", grades: k("Class", 1, 12), aliases: ["karnataka","bangalore","sslc","puc"] },
  { id: "in-rajasthan",    name: "Rajasthan Board (RBSE / BSER)",               country: "IN", grades: k("Class", 1, 12), aliases: ["rajasthan","rbse","ajmer"] },
  { id: "in-westbengal",   name: "West Bengal Board (WBBSE / WBCHSE)",          country: "IN", grades: k("Class", 1, 12), aliases: ["west bengal","kolkata","wbbse","wbchse","madhyamik"] },
  { id: "in-gujarat",      name: "Gujarat Board (GSEB)",                        country: "IN", grades: k("Class", 1, 12), aliases: ["gujarat","gseb","ahmedabad","ssc","hsc"] },
  { id: "in-andhra",       name: "Andhra Pradesh Board (BIEAP / BSEAP)",        country: "IN", grades: k("Class", 1, 12), aliases: ["andhra","ap","hyderabad"] },
  { id: "in-telangana",    name: "Telangana Board (BSE TS / TSBIE)",            country: "IN", grades: k("Class", 1, 12), aliases: ["telangana","hyderabad","ts"] },
  { id: "in-kerala",       name: "Kerala Board (DHSE / SSLC)",                  country: "IN", grades: k("Class", 1, 12), aliases: ["kerala","sslc","dhse"] },
  { id: "in-bihar",        name: "Bihar Board (BSEB)",                          country: "IN", grades: k("Class", 1, 12), aliases: ["bihar","bseb","patna"] },

  // ─────────────────────────── USA
  { id: "us-common-core",  name: "Common Core (most states)",   country: "US", grades: ["K", ...k("Grade", 1, 12)], aliases: ["common core","ccss"] },
  { id: "us-ap",           name: "Advanced Placement (AP)",     country: "US", grades: k("Grade", 9, 12), aliases: ["ap","college board","calculus","biology","chemistry"] },
  { id: "us-sat",          name: "SAT prep",                    country: "US", grades: k("Grade", 9, 12), aliases: ["sat","college","entrance"] },
  { id: "us-act",          name: "ACT prep",                    country: "US", grades: k("Grade", 9, 12), aliases: ["act"] },
  { id: "us-texas",        name: "Texas TEKS",                  country: "US", grades: ["K", ...k("Grade", 1, 12)], aliases: ["teks","texas","staar"] },
  { id: "us-california",   name: "California State Standards",  country: "US", grades: ["K", ...k("Grade", 1, 12)], aliases: ["california","ca"] },
  { id: "us-newyork",      name: "New York Next-Gen Standards", country: "US", grades: ["K", ...k("Grade", 1, 12)], aliases: ["new york","ny","regents"] },
  { id: "us-florida",      name: "Florida BEST Standards",      country: "US", grades: ["K", ...k("Grade", 1, 12)], aliases: ["florida","fl","best standards"] },
  { id: "us-gre",          name: "GRE prep",                    country: "US", grades: ["Undergrad","Grad"], aliases: ["gre","graduate"] },

  // ─────────────────────────── UK
  { id: "uk-natcurr-ks1",  name: "UK National Curriculum (KS1)",        country: "GB", grades: ["Year 1","Year 2"], aliases: ["england","ks1","key stage 1"] },
  { id: "uk-natcurr-ks2",  name: "UK National Curriculum (KS2)",        country: "GB", grades: ["Year 3","Year 4","Year 5","Year 6"], aliases: ["ks2","sats","england"] },
  { id: "uk-natcurr-ks3",  name: "UK National Curriculum (KS3)",        country: "GB", grades: ["Year 7","Year 8","Year 9"], aliases: ["ks3","england"] },
  { id: "uk-gcse-aqa",     name: "GCSE — AQA",                          country: "GB", grades: ["Year 10","Year 11"], aliases: ["gcse","aqa"] },
  { id: "uk-gcse-edexcel", name: "GCSE — Edexcel (Pearson)",            country: "GB", grades: ["Year 10","Year 11"], aliases: ["gcse","edexcel","pearson"] },
  { id: "uk-gcse-ocr",     name: "GCSE — OCR",                          country: "GB", grades: ["Year 10","Year 11"], aliases: ["gcse","ocr"] },
  { id: "uk-gcse-wjec",    name: "GCSE — WJEC / Eduqas",                country: "GB", grades: ["Year 10","Year 11"], aliases: ["gcse","wjec","eduqas","wales"] },
  { id: "uk-gcse-ccea",    name: "GCSE — CCEA (NI)",                    country: "GB", grades: ["Year 10","Year 11"], aliases: ["gcse","ccea","northern ireland"] },
  { id: "uk-alevel-aqa",     name: "A Level — AQA",                     country: "GB", grades: ["Year 12","Year 13"], aliases: ["a level","aqa","sixth form"] },
  { id: "uk-alevel-edexcel", name: "A Level — Edexcel (Pearson)",       country: "GB", grades: ["Year 12","Year 13"], aliases: ["a level","edexcel"] },
  { id: "uk-alevel-ocr",     name: "A Level — OCR",                     country: "GB", grades: ["Year 12","Year 13"], aliases: ["a level","ocr"] },
  { id: "uk-btec",           name: "BTEC (Pearson)",                    country: "GB", grades: ["Level 1","Level 2","Level 3"], aliases: ["btec","vocational"] },
  { id: "uk-scot-nat5",      name: "Scotland — National 5 (SQA)",       country: "GB", grades: ["S3","S4"], aliases: ["scotland","sqa","national 5"] },
  { id: "uk-scot-higher",    name: "Scotland — Higher (SQA)",           country: "GB", grades: ["S5","S6"], aliases: ["scotland","sqa","higher"] },
  { id: "uk-scot-advhigher", name: "Scotland — Advanced Higher (SQA)",  country: "GB", grades: ["S6"], aliases: ["scotland","sqa","advanced higher"] },

  // ─────────────────────────── CANADA
  { id: "ca-ontario",   name: "Ontario Curriculum",                  country: "CA", grades: ["JK","SK", ...k("Grade", 1, 12)], aliases: ["ontario","osstf"] },
  { id: "ca-bc",        name: "BC Curriculum",                       country: "CA", grades: ["K", ...k("Grade", 1, 12)], aliases: ["british columbia","bc"] },
  { id: "ca-quebec",    name: "Québec — MEQ Programme de formation", country: "CA", grades: ["1er cycle","2e cycle","3e cycle","Sec 1","Sec 2","Sec 3","Sec 4","Sec 5"], aliases: ["quebec","mels","meq","cégep"] },
  { id: "ca-alberta",   name: "Alberta Programs of Study",           country: "CA", grades: ["K", ...k("Grade", 1, 12)], aliases: ["alberta"] },

  // ─────────────────────────── AUSTRALIA / NZ
  { id: "au-acara",     name: "Australian Curriculum (ACARA)",       country: "AU", grades: ["Foundation", ...k("Year", 1, 10)], aliases: ["acara","national","f-10"] },
  { id: "au-vce",       name: "VCE — Victoria",                      country: "AU", grades: ["Year 11","Year 12"], aliases: ["vce","victoria","melbourne","atar"] },
  { id: "au-hsc",       name: "HSC — New South Wales",               country: "AU", grades: ["Year 11","Year 12"], aliases: ["hsc","nsw","sydney","atar"] },
  { id: "au-qce",       name: "QCE — Queensland",                    country: "AU", grades: ["Year 11","Year 12"], aliases: ["qce","queensland","brisbane","atar"] },
  { id: "au-wace",      name: "WACE — Western Australia",            country: "AU", grades: ["Year 11","Year 12"], aliases: ["wace","wa","perth","atar"] },
  { id: "au-sace",      name: "SACE — South Australia",              country: "AU", grades: ["Year 11","Year 12"], aliases: ["sace","sa","adelaide","atar"] },
  { id: "nz-natcurr",   name: "NZ Curriculum",                       country: "NZ", grades: k("Year", 1, 13), aliases: ["nzc","new zealand"] },
  { id: "nz-ncea1",     name: "NCEA Level 1",                        country: "NZ", grades: ["Year 11"], aliases: ["ncea","level 1","nz"] },
  { id: "nz-ncea2",     name: "NCEA Level 2",                        country: "NZ", grades: ["Year 12"], aliases: ["ncea","level 2","nz"] },
  { id: "nz-ncea3",     name: "NCEA Level 3",                        country: "NZ", grades: ["Year 13"], aliases: ["ncea","level 3","nz","university entrance"] },

  // ─────────────────────────── GCC
  { id: "ae-moe",       name: "UAE MoE National Curriculum",         country: "AE", grades: k("Grade", 1, 12), aliases: ["uae","emirates","moe"] },
  { id: "sa-moe",       name: "Saudi Arabia MoE",                    country: "SA", grades: k("Grade", 1, 12), aliases: ["saudi","ksa","tatweer","vision 2030"] },
  { id: "qa-moe",       name: "Qatar MoEHE",                         country: "QA", grades: k("Grade", 1, 12), aliases: ["qatar","doha"] },
  { id: "kw-moe",       name: "Kuwait MoE",                          country: "KW", grades: k("Grade", 1, 12), aliases: ["kuwait"] },
  { id: "om-moe",       name: "Oman MoE",                            country: "OM", grades: k("Grade", 1, 12), aliases: ["oman","muscat"] },
  { id: "bh-moe",       name: "Bahrain MoE",                         country: "BH", grades: k("Grade", 1, 12), aliases: ["bahrain"] },

  // ─────────────────────────── EUROPE (selected)
  { id: "de-abitur",    name: "Germany — Abitur (Gymnasium)",        country: "DE", grades: k("Klasse", 5, 13), aliases: ["abitur","germany","gymnasium"] },
  { id: "de-realschule", name: "Germany — Realschulabschluss",       country: "DE", grades: k("Klasse", 5, 10), aliases: ["realschule","germany"] },
  { id: "fr-college",   name: "France — Collège",                    country: "FR", grades: ["6ème","5ème","4ème","3ème"], aliases: ["college","france","brevet"] },
  { id: "fr-lycee",     name: "France — Lycée / Baccalauréat",       country: "FR", grades: ["Seconde","Première","Terminale"], aliases: ["bac","lycee","france","baccalaureat"] },
  { id: "it-maturita",  name: "Italy — Maturità (Liceo)",            country: "IT", grades: ["Liceo 1","Liceo 2","Liceo 3","Liceo 4","Liceo 5"], aliases: ["italy","liceo","maturita","esame di stato"] },
  { id: "es-eso",       name: "Spain — ESO + Bachillerato (LOMLOE)", country: "ES", grades: ["1º ESO","2º ESO","3º ESO","4º ESO","1º Bach","2º Bach"], aliases: ["spain","eso","bachillerato","selectividad","evau"] },
  { id: "nl-vwo",       name: "Netherlands — VWO",                   country: "NL", grades: k("Klas", 1, 6), aliases: ["netherlands","vwo","atheneum"] },
  { id: "nl-havo",      name: "Netherlands — HAVO",                  country: "NL", grades: k("Klas", 1, 5), aliases: ["netherlands","havo"] },
  { id: "nl-vmbo",      name: "Netherlands — VMBO",                  country: "NL", grades: k("Klas", 1, 4), aliases: ["netherlands","vmbo"] },
  { id: "pl-matura",    name: "Poland — Matura",                     country: "PL", grades: k("Klasa", 1, 8), aliases: ["poland","matura"] },
  { id: "se-grundskola",name: "Sweden — Grundskola (Lgr22)",         country: "SE", grades: k("Årskurs", 1, 9), aliases: ["sweden","lgr22","grundskola"] },
  { id: "se-gymnasium", name: "Sweden — Gymnasium (Gy22)",           country: "SE", grades: ["År 1","År 2","År 3"], aliases: ["sweden","gymnasium","gy22"] },
  { id: "no-lk20",      name: "Norway — LK20 (Kunnskapsløftet)",     country: "NO", grades: k("Trinn", 1, 13), aliases: ["norway","lk20"] },
  { id: "fi-pops",      name: "Finland — POPS (Perusopetus)",        country: "FI", grades: k("Luokka", 1, 9), aliases: ["finland","pops","perusopetus"] },
  { id: "dk-stx",       name: "Denmark — STX (Gymnasium)",           country: "DK", grades: ["1.g","2.g","3.g"], aliases: ["denmark","stx","gymnasium"] },

  // ─────────────────────────── BRAZIL & LATAM
  { id: "br-bncc",      name: "Brazil — BNCC + ENEM",                country: "BR", grades: k("Ano", 1, 12), aliases: ["brazil","brasil","bncc","enem","ensino"] },
  { id: "mx-sep",       name: "Mexico — SEP (Plan 2022)",            country: "MX", grades: k("Grado", 1, 12), aliases: ["mexico","sep","secundaria","preparatoria"] },
  { id: "ar-secundario",name: "Argentina — Secundario",              country: "AR", grades: k("Año", 1, 12), aliases: ["argentina","secundario"] },
  { id: "co-saber",     name: "Colombia — Currículo + Saber 11",     country: "CO", grades: k("Grado", 1, 11), aliases: ["colombia","saber 11"] },
  { id: "cl-paes",      name: "Chile — PAES",                        country: "CL", grades: k("Grado", 1, 12), aliases: ["chile","paes","psu"] },
  { id: "pe-nacional",  name: "Perú — Currículo Nacional",           country: "PE", grades: k("Grado", 1, 11), aliases: ["peru"] },

  // ─────────────────────────── AFRICA
  { id: "ng-waec",      name: "Nigeria — WAEC (SSCE)",                country: "NG", grades: ["SS1","SS2","SS3"], aliases: ["nigeria","waec","ssce","wassce"] },
  { id: "ng-neco",      name: "Nigeria — NECO",                       country: "NG", grades: ["SS1","SS2","SS3"], aliases: ["nigeria","neco"] },
  { id: "ng-ube",       name: "Nigeria — UBE (Primary + JSS)",        country: "NG", grades: [...k("Primary", 1, 6),"JSS1","JSS2","JSS3"], aliases: ["nigeria","ube","junior secondary"] },
  { id: "za-caps",      name: "South Africa — CAPS / NSC (Matric)",   country: "ZA", grades: ["R", ...k("Grade", 1, 12)], aliases: ["south africa","caps","nsc","matric"] },
  { id: "ke-cbc",       name: "Kenya — CBC",                          country: "KE", grades: ["PP1","PP2", ...k("Grade", 1, 9), "Form 1","Form 2","Form 3","Form 4"], aliases: ["kenya","cbc","kcse"] },
  { id: "gh-wassce",    name: "Ghana — WASSCE",                       country: "GH", grades: ["SHS1","SHS2","SHS3"], aliases: ["ghana","wassce"] },
  { id: "eg-thanaweya", name: "Egypt — Thanaweya Amma",               country: "EG", grades: ["Prep 1","Prep 2","Prep 3","Sec 1","Sec 2","Sec 3"], aliases: ["egypt","thanaweya"] },

  // ─────────────────────────── ASIA (others)
  { id: "cn-national",  name: "China — National Curriculum (Gaokao-aligned)", country: "CN", grades: k("Grade", 1, 12), aliases: ["china","gaokao","prc"] },
  { id: "jp-mext",      name: "Japan — MEXT Course of Study",                 country: "JP", grades: k("Grade", 1, 12), aliases: ["japan","mext","gakushū"] },
  { id: "kr-kicd",      name: "South Korea — KICD + Suneung (KSAT)",          country: "KR", grades: k("Grade", 1, 12), aliases: ["korea","kr","ksat","suneung","csat"] },
  { id: "tw-12year",    name: "Taiwan — 12-Year Basic Education",             country: "TW", grades: k("Grade", 1, 12), aliases: ["taiwan","tw","gsat"] },
  { id: "vn-mt",        name: "Vietnam — MOET",                               country: "VN", grades: k("Lớp", 1, 12), aliases: ["vietnam","moet"] },

  // ─────────────────────────── SEA
  { id: "id-merdeka",   name: "Indonesia — Kurikulum Merdeka",                country: "ID", grades: k("Kelas", 1, 12), aliases: ["indonesia","merdeka","ktsp","sma","smp"] },
  { id: "ph-k12",       name: "Philippines — K-12",                           country: "PH", grades: ["K", ...k("Grade", 1, 12)], aliases: ["philippines","deped","k-12"] },
  { id: "my-kssr",      name: "Malaysia — KSSR / KSSM (SPM)",                 country: "MY", grades: ["Tahun 1","Tahun 2","Tahun 3","Tahun 4","Tahun 5","Tahun 6","Tingkatan 1","Tingkatan 2","Tingkatan 3","Tingkatan 4","Tingkatan 5"], aliases: ["malaysia","kssr","kssm","spm","upsr","sijil"] },
  { id: "my-stpm",      name: "Malaysia — STPM",                              country: "MY", grades: ["Form 6 Lower","Form 6 Upper"], aliases: ["malaysia","stpm","sixth form"] },
  { id: "sg-psle",      name: "Singapore — Primary (PSLE)",                   country: "SG", grades: k("Primary", 1, 6), aliases: ["singapore","psle","moe sg"] },
  { id: "sg-olevel",    name: "Singapore — GCE O-Level",                      country: "SG", grades: ["Sec 1","Sec 2","Sec 3","Sec 4","Sec 5"], aliases: ["singapore","o level","gce"] },
  { id: "sg-alevel",    name: "Singapore — GCE A-Level (H1/H2/H3)",           country: "SG", grades: ["JC1","JC2"], aliases: ["singapore","a level","gce","jc"] },
  { id: "th-obec",      name: "Thailand — OBEC Basic Education",              country: "TH", grades: ["Prathom 1-6","Mathayom 1-6"], aliases: ["thailand","obec"] },

  // ─────────────────────────── SOUTH ASIA OTHERS
  { id: "bd-nctb",      name: "Bangladesh — NCTB (PSC/JSC/SSC/HSC)",          country: "BD", grades: k("Class", 1, 12), aliases: ["bangladesh","nctb","ssc","hsc"] },
  { id: "lk-natcurr",   name: "Sri Lanka — National Curriculum (G.C.E. O/A)", country: "LK", grades: k("Grade", 1, 13), aliases: ["sri lanka","gce","o level","a level"] },
  { id: "np-neb",       name: "Nepal — NEB",                                  country: "NP", grades: k("Class", 1, 12), aliases: ["nepal","neb","slc","plus 2"] },

  // ─────────────────────────── RUSSIA
  { id: "ru-fgos",      name: "Russia — FGOS",                                country: "RU", grades: k("Class", 1, 11), aliases: ["russia","fgos","ege"] },

  // ─────────────────────────── INTERNATIONAL — always offered alongside local
  { id: "intl-cambridge-primary", name: "Cambridge Primary",                  country: "OTHER", grades: k("Stage", 1, 6), region: "Cambridge", aliases: ["cambridge","primary checkpoint"] },
  { id: "intl-cambridge-lower",   name: "Cambridge Lower Secondary",          country: "OTHER", grades: ["Stage 7","Stage 8","Stage 9"], region: "Cambridge", aliases: ["cambridge","lower secondary","checkpoint"] },
  { id: "intl-cambridge-igcse",   name: "Cambridge IGCSE",                    country: "OTHER", grades: ["Year 10","Year 11"], region: "Cambridge", aliases: ["igcse","cambridge","cie"] },
  { id: "intl-cambridge-olevel",  name: "Cambridge O Level",                  country: "OTHER", grades: ["Year 10","Year 11"], region: "Cambridge", aliases: ["cambridge","o level","cie"] },
  { id: "intl-cambridge-aslevel", name: "Cambridge AS Level",                 country: "OTHER", grades: ["Year 12"], region: "Cambridge", aliases: ["cambridge","as level"] },
  { id: "intl-cambridge-alevel",  name: "Cambridge A Level",                  country: "OTHER", grades: ["Year 12","Year 13"], region: "Cambridge", aliases: ["cambridge","a level","cie"] },
  { id: "intl-edexcel-igcse",     name: "Edexcel International IGCSE",        country: "OTHER", grades: ["Year 10","Year 11"], region: "Edexcel", aliases: ["edexcel","pearson","igcse","international"] },
  { id: "intl-edexcel-ial",       name: "Edexcel International A Level",      country: "OTHER", grades: ["Year 12","Year 13"], region: "Edexcel", aliases: ["edexcel","ial","international a level"] },
  { id: "intl-ib-pyp",            name: "IB Primary Years (PYP)",             country: "OTHER", grades: k("Grade", 1, 5), region: "IB", aliases: ["ib","pyp","primary years"] },
  { id: "intl-ib-myp",            name: "IB Middle Years (MYP)",              country: "OTHER", grades: k("Grade", 6, 10), region: "IB", aliases: ["ib","myp","middle years"] },
  { id: "intl-ib-dp",             name: "IB Diploma Programme (DP)",          country: "OTHER", grades: ["DP1","DP2"], region: "IB", aliases: ["ib","diploma","dp","international baccalaureate"] },
  { id: "intl-ib-cp",             name: "IB Career-related Programme (CP)",   country: "OTHER", grades: ["CP1","CP2"], region: "IB", aliases: ["ib","career-related"] },
  { id: "intl-ap-international",  name: "Advanced Placement (international)", country: "OTHER", grades: k("Grade", 9, 12), region: "AP", aliases: ["ap","college board"] },
  { id: "intl-french-aefe",       name: "French AEFE (international French)", country: "OTHER", grades: ["École","Collège","Lycée"], region: "France", aliases: ["aefe","french","mlf"] },
  { id: "intl-german-dsd",        name: "German Schools Abroad (DSD)",        country: "OTHER", grades: k("Klasse", 5, 13), region: "Germany", aliases: ["german","dsd","auslandsschule"] },

  // ─────────────────────────── UNIVERSITY (generic)
  { id: "uni-undergrad",          name: "University — Undergraduate",         country: "OTHER", grades: ["Year 1","Year 2","Year 3","Year 4"], region: "University", aliases: ["undergrad","bachelor","ba","bs","bsc"] },
  { id: "uni-postgrad",           name: "University — Postgraduate",          country: "OTHER", grades: ["Master","PhD"], region: "University", aliases: ["postgrad","masters","phd","msc","ma"] },
];

// Country list — kept ISO-2 where practical. CountryCode in types.ts is open ("OTHER" allowed for international).
export const COUNTRIES: { code: CountryCode; name: string; flag: string }[] = [
  { code: "PK", name: "Pakistan",        flag: "🇵🇰" },
  { code: "IN", name: "India",           flag: "🇮🇳" },
  { code: "US", name: "United States",   flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom",  flag: "🇬🇧" },
  { code: "CA", name: "Canada",          flag: "🇨🇦" },
  { code: "AU", name: "Australia",       flag: "🇦🇺" },
  { code: "NZ", name: "New Zealand",     flag: "🇳🇿" },
  { code: "AE", name: "UAE",             flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia",    flag: "🇸🇦" },
  { code: "QA", name: "Qatar",           flag: "🇶🇦" },
  { code: "KW", name: "Kuwait",          flag: "🇰🇼" },
  { code: "OM", name: "Oman",            flag: "🇴🇲" },
  { code: "BH", name: "Bahrain",         flag: "🇧🇭" },
  { code: "EG", name: "Egypt",           flag: "🇪🇬" },
  { code: "DE", name: "Germany",         flag: "🇩🇪" },
  { code: "FR", name: "France",          flag: "🇫🇷" },
  { code: "IT", name: "Italy",           flag: "🇮🇹" },
  { code: "ES", name: "Spain",           flag: "🇪🇸" },
  { code: "NL", name: "Netherlands",     flag: "🇳🇱" },
  { code: "PL", name: "Poland",          flag: "🇵🇱" },
  { code: "SE", name: "Sweden",          flag: "🇸🇪" },
  { code: "NO", name: "Norway",          flag: "🇳🇴" },
  { code: "FI", name: "Finland",         flag: "🇫🇮" },
  { code: "DK", name: "Denmark",         flag: "🇩🇰" },
  { code: "RU", name: "Russia",          flag: "🇷🇺" },
  { code: "BR", name: "Brazil",          flag: "🇧🇷" },
  { code: "MX", name: "Mexico",          flag: "🇲🇽" },
  { code: "AR", name: "Argentina",       flag: "🇦🇷" },
  { code: "CO", name: "Colombia",        flag: "🇨🇴" },
  { code: "CL", name: "Chile",           flag: "🇨🇱" },
  { code: "PE", name: "Peru",            flag: "🇵🇪" },
  { code: "NG", name: "Nigeria",         flag: "🇳🇬" },
  { code: "GH", name: "Ghana",           flag: "🇬🇭" },
  { code: "KE", name: "Kenya",           flag: "🇰🇪" },
  { code: "ZA", name: "South Africa",    flag: "🇿🇦" },
  { code: "CN", name: "China",           flag: "🇨🇳" },
  { code: "JP", name: "Japan",           flag: "🇯🇵" },
  { code: "KR", name: "South Korea",     flag: "🇰🇷" },
  { code: "TW", name: "Taiwan",          flag: "🇹🇼" },
  { code: "VN", name: "Vietnam",         flag: "🇻🇳" },
  { code: "ID", name: "Indonesia",       flag: "🇮🇩" },
  { code: "PH", name: "Philippines",     flag: "🇵🇭" },
  { code: "MY", name: "Malaysia",        flag: "🇲🇾" },
  { code: "SG", name: "Singapore",       flag: "🇸🇬" },
  { code: "TH", name: "Thailand",        flag: "🇹🇭" },
  { code: "BD", name: "Bangladesh",      flag: "🇧🇩" },
  { code: "LK", name: "Sri Lanka",       flag: "🇱🇰" },
  { code: "NP", name: "Nepal",           flag: "🇳🇵" },
  { code: "OTHER", name: "Other / International", flag: "🌍" },
];

export function curriculaForCountry(country: CountryCode): Curriculum[] {
  const local = CURRICULA.filter((c) => c.country === country);
  const intl  = CURRICULA.filter((c) => c.country === "OTHER");
  // Always also offer international tracks (Cambridge / IB / AP) — common in private schools worldwide.
  return country === "OTHER" ? intl : [...local, ...intl];
}

/**
 * Search across name + aliases + grades.
 * Returns curricula sorted by relevance (best match first).
 * Empty query returns curriculaForCountry(country).
 */
export function searchCurricula(country: CountryCode, query: string): Curriculum[] {
  const base = curriculaForCountry(country);
  const q = query.trim().toLowerCase();
  if (!q) return base;
  const scored = base
    .map((c) => {
      const hay = [
        c.name.toLowerCase(),
        ...(c.aliases ?? []).map((a) => a.toLowerCase()),
        ...c.grades.map((g) => g.toLowerCase()),
        c.region?.toLowerCase() ?? "",
      ].join(" | ");
      let score = 0;
      if (c.name.toLowerCase().startsWith(q)) score += 5;
      if (c.name.toLowerCase().includes(q)) score += 3;
      if (hay.includes(q)) score += 1;
      // word-by-word
      for (const w of q.split(/\s+/)) {
        if (w && hay.includes(w)) score += 0.3;
      }
      return { c, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.c);
  return scored;
}
