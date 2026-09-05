// Hand-written long-form content for /learn/{subject}/{board} pages.
// We previously generated 12 subjects × 130 curricula = 1,548 near-identical
// programmatic pages. Google rightly refused to index them. This file holds the
// curated set of combos we keep, each with genuinely unique content that
// addresses board-specific exam format, high-yield topics, common pitfalls,
// recommended past papers, and a study plan.
//
// Any combo NOT in this list returns notFound() from the page route.

export type LearnCombo = {
  /** ISO date of the last significant content change; feeds sitemap lastmod.
   *  Omit it and the page falls back to its group date in sitemap.ts. */
  updatedAt?: string;
  subject: string;          // "math" | "biology" | ...
  board: string;            // curriculum id from packages/core/src/curricula.ts
  /** SEO title — overrides the generic auto-title */
  metaTitle?: string;
  /** Meta description (≤ 160 chars) */
  metaDescription?: string;
  /** 2-3 sentence intro shown under the H1 */
  intro: string;
  /** What the actual exam looks like: papers, time limits, mark breakdown */
  examFormat: string;
  /** Topics that appear in nearly every paper — the highest-yield revision */
  highYieldTopics: string[];
  /** Specific mistakes students lose marks on — keeps content unique */
  commonPitfalls: string[];
  /** Where to find official past papers (board-specific URLs / archives) */
  pastPaperSources: string[];
  /** Realistic study plan tailored to this combo */
  studyPlan: string;
  /** Public-domain or board-published useful resources */
  resources?: string[];
  /** Optional notes — anything else unique to this combo */
  extraNotes?: string;
};

const ALL_LEARN_COMBOS: LearnCombo[] = [

  // ──────────────────────────── PAKISTAN ────────────────────────────

  {
    subject: "math",
    board: "pk-federal",
    metaTitle: "FBISE Maths Help — Class 9-12 (Federal Board)",
    metaDescription: "Free AI math tutor for FBISE Federal Board students. Step-by-step working in Pakistani Matric and FSc style, past-paper practice, and board-aligned chapter notes.",
    intro: "If you're sitting Federal Board (FBISE) Matric or Inter mathematics, the difference between a B and an A is rarely intelligence — it's knowing what FBISE markers actually reward. Our AI is configured to answer in FBISE style: PTB textbook chapter order, the working steps the marking scheme expects, and the specific terminology your teacher uses.",
    examFormat: "FBISE Mathematics is split into two annual board papers. Section A is short-answer (typically 12 marks of MCQs and 18-24 marks of one-line answers). Section B is long answer — 5 questions of 5 marks each in SSC, more in HSSC. Time: 3 hours per paper. The objective MCQ paper is sat first and is short (around 30 minutes for 15 MCQs).",
    highYieldTopics: [
      "Quadratic equations (factorisation, completing the square, quadratic formula) — appears every Matric paper",
      "Algebraic formulas (a+b)², (a-b)², (a+b)³ derivations — Class 9 always asks one",
      "Linear equations in two variables — substitution and elimination",
      "Variations — direct, inverse, joint (Class 10 staple)",
      "Trigonometric identities (sin²θ + cos²θ = 1 family) — long-answer question almost every year",
      "Calculus: differentiation rules, definite integrals (FSc Part 2)",
      "Vectors and matrices — short-answer favourites in FSc Part 1",
    ],
    commonPitfalls: [
      "Forgetting units on geometry questions — FBISE strictly deducts marks for missing cm, m², rad",
      "Skipping the 'Given / To prove' setup on trigonometric identities — markers want that scaffold",
      "Using = instead of ≅ for triangle congruence statements",
      "Not showing constant of integration C in indefinite integrals",
      "Substituting before fully simplifying — leads to arithmetic mistakes in long questions",
      "Using decimal answers when the question implies an exact form (e.g. π, √, fractions)",
    ],
    pastPaperSources: [
      "Official FBISE past papers archive: fbise.edu.pk/past_papers",
      "ilmi Kitab Khana past-papers volumes (available at any Urdu Bazaar)",
      "Most FBISE past papers from 2010 onwards are also mirrored on ilmkidunya.com and beeducated.pk",
    ],
    studyPlan: "Eight weeks out, do one full timed paper per fortnight to lock pacing. Six weeks out, drill 10 quadratic questions and 10 trig identity questions per week. Four weeks out, switch to high-yield mixed papers. Two weeks out, only past papers + formula memorisation. Final 48 hours: no new learning, just rest.",
    resources: [
      "PTB Mathematics textbooks (the green ones) — your absolute primary source",
      "Class notes from your school teacher — FBISE markers often follow standard teacher phrasing",
      "Our /math-solver for any photo of a textbook problem — it works in FBISE-step format",
    ],
    extraNotes: "If you're sitting FSc Pre-Engineering, prioritise calculus and trigonometry. Pre-Medical students should still cover both papers but can de-emphasise vector spaces. Drop-year (improver) candidates: focus on the previous board's exact paper — FBISE re-uses question structure heavily.",
  },

  {
    subject: "math",
    board: "pk-punjab",
    metaTitle: "Punjab Board Mathematics — Matric & FSc help (BISE)",
    metaDescription: "Free AI math tutor for Punjab Board (Lahore, Gujranwala, Multan, etc.) Matric and FSc students. Punjabi board-style step working, MCQ practice, and chapter help.",
    intro: "Punjab BISE math papers (Lahore, Gujranwala, Multan, Faisalabad, Rawalpindi, Sahiwal, Sargodha, Bahawalpur, DG Khan) follow the same Punjab Textbook Board syllabus but each city's board sets its own paper. The good news: the structure is highly predictable year to year. The bad news: marking is unforgiving on missed steps.",
    examFormat: "Two separate papers per class: Objective (MCQs, 15-20 marks, 30 minutes) and Subjective (Long Questions + Short Questions, 65-75 marks, 2.5 hours). Class 9 and 10 have separate Mathematics 'I' (compulsory) syllabi. FSc Part 1 and Part 2 split mathematics into algebra+trig and calculus+coordinate geometry respectively.",
    highYieldTopics: [
      "Theorems on circles (Class 10) — at least one long question every year",
      "Quadratic equations — solution by all three methods is standard short-answer fare",
      "Matrices and determinants (FSc 1) — every paper since 2016",
      "Application of derivatives (maxima/minima word problems) — FSc 2 favourite",
      "Definite integrals with substitution — usually 2 short questions",
      "Sequences and series (AP, GP) — Punjab Board loves the sum-to-n problem",
    ],
    commonPitfalls: [
      "Drawing diagrams without ruler and pencil — Punjab Board markers deduct for freehand",
      "Skipping 'Construction' step in geometry theorems",
      "Mixing up Sin⁻¹ and arcsin in calculus — Punjab Board uses Sin⁻¹ exclusively",
      "Forgetting the formula chit at the top of long answers — markers want to see you stated it",
      "Calculator dependence — Punjab Board exams allow scientific calculators but you lose marks for unjustified jumps",
    ],
    pastPaperSources: [
      "biselahore.com/past_papers, bisegrw.edu.pk, bisemultan.edu.pk — each board posts the last 5 years",
      "ilmkidunya.com hosts all Punjab Board past papers grouped by city + year",
      "Caravan and ilmi Punjab Board guides (Urdu Bazaar Lahore) include marking schemes",
    ],
    studyPlan: "Two months before the exam, master the theorems first — they're the easiest marks. One month before, drill 5 MCQ sets a week. Two weeks before, sit one full paper per subject every other day under timed conditions.",
  },

  {
    subject: "biology",
    board: "pk-federal",
    metaTitle: "FBISE Biology — Matric & FSc Pre-Medical help",
    metaDescription: "Free AI biology tutor for FBISE Federal Board Matric and FSc Pre-Medical. Diagram practice, board-style long answers, MDCAT prep.",
    intro: "FBISE biology is famously diagram-heavy. The students who get A-grades aren't memorising textbooks — they're memorising diagrams and the exact wording of the marking scheme. Our AI knows the difference between the textbook explanation and the marking-scheme phrasing.",
    examFormat: "Two parts: Objective (15 MCQs, 30 minutes) and Subjective (5 long questions + 5 short questions + diagrams, 2.5 hours). Class 9 covers cell biology + classification + organisms. Class 10 covers human body systems + genetics + ecology. FSc Pre-Medical doubles down with deeper coverage.",
    highYieldTopics: [
      "Photosynthesis (light and dark reactions) — long question every Pre-Med year",
      "Human respiratory system diagram + mechanism of breathing",
      "Mitosis vs meiosis comparison — extremely common short answer",
      "Nephron structure and urine formation — Class 10 favourite",
      "Mendel's laws + monohybrid/dihybrid crosses",
      "Krebs cycle — FSc Pre-Med standard long question",
      "DNA replication + protein synthesis (transcription, translation) — FSc 2",
    ],
    commonPitfalls: [
      "Drawing diagrams without labels or label lines — instant mark loss",
      "Using colloquial English instead of textbook terminology (e.g. 'breathing in' instead of 'inspiration')",
      "Forgetting to mention 'in eukaryotes' vs 'in prokaryotes' context",
      "Missing the 'enzyme involved' detail in biochemical reactions",
      "Confusing 'function' and 'mechanism' — examiners want both, separately",
    ],
    pastPaperSources: [
      "fbise.edu.pk past papers section",
      "PMC (Pakistan Medical Commission) sample papers — for MDCAT alignment",
      "Caravan Biology FSc guide is the gold standard for past-paper compilations",
    ],
    studyPlan: "Eight weeks: spend two weeks per system (digestive, respiratory, circulatory, excretory). Six weeks out: start drawing one diagram per day, labelled, from memory. Four weeks out: full past paper every weekend. MDCAT candidates: add 30 mins of MCQ practice daily from week 6 onwards.",
    extraNotes: "If you're using FSc biology as MDCAT prep, the question style is different — MDCAT favours single-best-answer MCQs that test understanding, while FBISE long answers test recall. Practise both formats.",
  },

  {
    subject: "chemistry",
    board: "pk-federal",
    metaTitle: "FBISE Chemistry — Class 9, 10, 11, 12 (Federal Board)",
    metaDescription: "Free AI chemistry tutor for FBISE Federal Board. Balancing equations, organic mechanisms, mole concept, Pre-Med + Pre-Engineering specific topics.",
    intro: "Chemistry on FBISE has a predictable structure: every paper has one stoichiometry calculation, one organic mechanism (FSc), and a chunk of theory. Pre-Med students need to weight equilibrium and organic. Pre-Engineering should add atomic structure and chemical bonding.",
    examFormat: "Objective paper (15 MCQs, 30 min) + Subjective paper (long Qs, short Qs, structural diagrams, 2.5 hrs). FSc chemistry is split into Part 1 (physical + inorganic foundation) and Part 2 (organic chemistry + environmental).",
    highYieldTopics: [
      "Mole concept and stoichiometry calculations — appears every year",
      "Atomic structure (Bohr model + quantum numbers) — FSc 1",
      "Chemical bonding (ionic, covalent, hybridisation) — FSc 1",
      "Equilibrium and Le Chatelier's principle — FSc 2",
      "Organic reaction mechanisms (alkanes, alkenes, alcohols) — FSc 2 standard",
      "Periodic trends (electronegativity, ionisation energy) — Class 10",
      "Acids, bases, pH, pKa, pKb — both parts",
    ],
    commonPitfalls: [
      "Not balancing equations before doing stoichiometry — automatic wrong answer",
      "Drawing organic structures without showing bond angles or directions",
      "Confusing oxidation and reduction (LEO the lion says GER works — Loss of Electrons = Oxidation, Gain = Reduction)",
      "Ignoring units (g, mol, L) in calculations",
      "Writing equilibrium expressions with reactants on top — should be products / reactants",
    ],
    pastPaperSources: [
      "FBISE official archive",
      "Caravan Chemistry FSc Part 1 and Part 2 guides",
      "ilmkidunya.com archive",
    ],
    studyPlan: "Master mole concept and atomic structure first (weeks 8-7 before exam). Then bonding and periodic trends (weeks 6-5). Equilibrium and acids/bases (weeks 4-3). Final weeks: 100% past papers and organic mechanisms drill.",
  },

  {
    subject: "physics",
    board: "pk-federal",
    metaTitle: "FBISE Physics — Matric & FSc Pre-Engineering",
    metaDescription: "Free AI physics tutor for FBISE Federal Board. Numerical practice, derivations, Pre-Engineering ECAT prep.",
    intro: "FBISE physics rewards two skills: doing the derivation cleanly and showing each step of a numerical calculation. Pre-Engineering students also need their physics fluent for ECAT. The same AI that explains a chapter can re-explain it in ECAT MCQ style if you ask.",
    examFormat: "Objective + Subjective, same format as other Pakistani science subjects. Numerical problems usually carry 3-5 marks each. Derivations are common long-answer questions worth 5-8 marks.",
    highYieldTopics: [
      "Equations of motion (kinematics) — every paper",
      "Newton's laws + friction calculations",
      "Work, energy, power — derivations + numericals",
      "Circular motion and gravitation — FSc 1",
      "Capacitors and DC circuits — FSc 2 favourite",
      "Wave equation, interference, diffraction (Young's double slit) — FSc 2",
      "Photoelectric effect and Bohr's model — FSc 2 modern physics",
    ],
    commonPitfalls: [
      "Skipping the 'Given / Required' setup on numericals — markers want to see the data extracted",
      "Forgetting units in final answers — auto-deduction",
      "Mixing SI and CGS units — pick one and stick to it",
      "Writing F = ma without specifying direction (vector notation)",
      "Forgetting g = 9.8 m/s² unless the question specifies 10 m/s²",
    ],
    pastPaperSources: [
      "FBISE past papers",
      "Caravan Physics FSc guide",
      "ECAT past papers from utets.uet.edu.pk for Pre-Engineering",
    ],
    studyPlan: "Weeks 8-6: derivations from memory, one per day. Weeks 5-4: numerical practice (3 a day). Weeks 3-2: timed past papers. Final week: review formula sheet, sleep early.",
  },

  {
    subject: "english",
    board: "pk-federal",
    metaTitle: "FBISE English — grammar, comprehension, essays",
    metaDescription: "Free AI English help for FBISE Matric and FSc. Grammar drills, comprehension passages, essay structure, paraphrasing.",
    intro: "FBISE English isn't testing your fluency — it's testing whether you know the specific exam format. Letter writing, paragraph, comprehension, and translation each have a near-fixed mark allocation. Memorise the format and you've already won half the paper.",
    examFormat: "Objective (15 MCQs from textbook + grammar, 30 min) and Subjective (translation, paragraph, letter/application, comprehension, summary, 2.5 hrs). Class 9 and 10 have separate textbooks. FSc English Part 1 and Part 2 add modern essay, modern prose, and Heroes & Anti-heroes.",
    highYieldTopics: [
      "Letter to the editor + job application — every Matric paper",
      "Translation Urdu → English — usually 10 marks",
      "Paragraph (descriptive or narrative) — usually 10 marks",
      "Comprehension passage with 5 questions — 10 marks",
      "Summary of an essay or story from the textbook",
      "Direct/Indirect speech transformations",
      "Active/Passive voice transformations",
    ],
    commonPitfalls: [
      "Using informal/colloquial English in formal letters",
      "Forgetting the sender's address, date, salutation, subject in letters",
      "Translating Urdu word-for-word instead of sense-for-sense",
      "Comprehension answers copied verbatim from the passage (markers want re-phrased answers)",
      "Spelling and punctuation in the paragraph — these add up fast",
    ],
    pastPaperSources: [
      "FBISE archive — at least 10 years of English papers available",
      "Sapphire English MCQ book (popular in Islamabad/Rawalpindi)",
    ],
    studyPlan: "Spend the first three weeks memorising one application + one letter format perfectly. Next three weeks: translation practice (5 Urdu sentences per day). Final two weeks: full past papers, focus on time management.",
  },

  {
    subject: "computer-science",
    board: "pk-federal",
    metaTitle: "FBISE Computer Science — Class 9, 10, FSc (ICS)",
    metaDescription: "Free AI computer science tutor for FBISE ICS, FSc, and Matric. C/C++ programming, networking, databases, exam-style answers.",
    intro: "FBISE Computer Science (ICS for Inter) is heavy on theory at Matric level and shifts to programming + databases at FSc level. The C/C++ programming questions are usually worth 8-10 marks and you should aim to nail every single one.",
    examFormat: "Objective + Subjective. Programming questions ask you to write code by hand — focus on syntax, loops, and arrays. Database questions test normalisation, SQL DDL/DML, and ER diagrams.",
    highYieldTopics: [
      "C/C++ syntax — variables, loops, arrays, functions",
      "Write a program to print Fibonacci / factorial / prime numbers — very standard",
      "Networking: OSI vs TCP/IP model layers",
      "Database normalisation (1NF, 2NF, 3NF) with examples",
      "Number system conversions (binary, octal, decimal, hexadecimal)",
      "Logic gates and truth tables",
      "Microsoft Office and basic IT — usually Class 9",
    ],
    commonPitfalls: [
      "Forgetting #include <iostream> and using namespace std; in C++ programs",
      "Off-by-one errors in loop bounds — markers check the exact output",
      "Indentation matters even on paper — write clearly",
      "Mixing up TCP/IP layers and OSI layers",
      "Writing pseudo-code when the question asked for C++ (or vice versa)",
    ],
    pastPaperSources: ["FBISE past papers", "ICS/ICom textbooks by PTB"],
    studyPlan: "Daily: 30 minutes of code writing by hand on paper, no IDE. Build muscle memory for syntax. Spend the last two weeks doing only past papers.",
  },

  {
    subject: "accounting",
    board: "pk-federal",
    metaTitle: "FBISE Accounting Help — ICom Part 1 & 2",
    metaDescription: "Free AI accounting tutor for FBISE ICom. Trial balance, journals, ledgers, final accounts, ratio analysis, exam-style problems.",
    intro: "FBISE Principles of Accounting (ICom Part 1 and 2) follows a remarkably consistent question pattern: every paper has one full set of final accounts (Trading + P&L + Balance Sheet), one journalising problem, and one bank reconciliation. The students who do well are those who can do these three in their sleep.",
    examFormat: "Objective + Subjective. The Subjective paper has ~3 'major' questions each worth 15-20 marks (one being final accounts). Allow 60+ minutes for the final accounts question.",
    highYieldTopics: [
      "Preparing final accounts (Trading A/C, P&L A/C, Balance Sheet) — always asked",
      "Bank reconciliation statement",
      "Journalising transactions",
      "Cash book, petty cash book",
      "Depreciation methods (straight line, reducing balance)",
      "Partnership accounts (admission, retirement) — Part 2",
      "Ratio analysis — Part 2",
    ],
    commonPitfalls: [
      "Putting debits in credit column and vice versa — read the question slowly",
      "Forgetting to bring down balances (b/d, c/d) when preparing T-accounts",
      "Mixing capital and revenue expenditure in the trading account",
      "Using net profit instead of gross profit in the wrong account",
      "Skipping working notes — examiners want to see your reasoning",
    ],
    pastPaperSources: ["FBISE past papers", "Sohail Afzal Accounting (the popular guide)"],
    studyPlan: "Do one full final-accounts question per day. After two weeks, you'll have the template memorised. Add ratio analysis and partnership in the last three weeks.",
  },

  // ──────────────────────────── INDIA ────────────────────────────

  {
    subject: "math",
    board: "in-cbse",
    metaTitle: "CBSE Maths Help — Class 10 & 12 (NCERT-Aligned)",
    metaDescription: "Free AI math tutor for CBSE Class 10 and Class 12 boards. NCERT chapter-by-chapter help, PYQ practice, step-by-step working in board style.",
    intro: "CBSE math papers follow NCERT religiously. The students who get 95+ aren't smarter — they've solved every NCERT exercise + every example + the last 5 years of CBSE PYQs. Our AI knows the NCERT chapter order, the exact theorem statements CBSE expects, and the specific question patterns the Class 10 and 12 boards re-use.",
    examFormat: "CBSE Class 10 Math: 80 marks across 5 sections (Section A: 20 marks of MCQ + Assertion/Reasoning; Section B: 2-mark questions; Section C: 3-mark; Section D: 5-mark; Section E: 4-mark case studies). 3 hours. Class 12 Math: same 80-mark structure but with deeper sections.",
    highYieldTopics: [
      "Quadratic equations + word problems (boat-stream, time-work) — Class 10 Section D",
      "Trigonometry: Heights and Distances word problem — Class 10 every year",
      "Surface areas + volumes (frustum, hemisphere combinations) — Class 10",
      "Statistics (mean by step deviation, ogive) — Class 10",
      "Calculus: application of derivatives — Class 12 staple",
      "Integration by parts + partial fractions — Class 12",
      "Differential equations (variable separable, homogeneous) — Class 12",
      "Vector algebra + 3D geometry — Class 12 Section D",
      "Probability (Bayes' theorem) — Class 12 case study",
    ],
    commonPitfalls: [
      "Skipping the diagram on Heights & Distances — markers want it labelled",
      "Forgetting +C in indefinite integrals",
      "Using degrees instead of radians in calculus",
      "Writing 'Hence proved' without the actual proof step",
      "Missing the case 'when discriminant = 0' in quadratic word problems",
      "Sign errors in vector cross products",
    ],
    pastPaperSources: [
      "cbse.gov.in/cbsenew → Sample Question Papers (official)",
      "Previous Year Questions (PYQs) on byjus.com, vedantu.com, oswaal-publishers.com (all free)",
      "NCERT Exemplar problems (much harder than the textbook — predictive for Section D)",
    ],
    studyPlan: "Eight weeks: cover all NCERT exercises, two chapters per week. Six weeks out: NCERT Exemplar problems. Four weeks: 5 years of PYQs by topic. Two weeks: full-length papers under exam conditions. Final week: only revision, no new content.",
    extraNotes: "Class 12 board Maths rewards clean, complete working — write every step, because method marks are awarded even when the final answer slips. Keep a running list of the formulas you forget most and revise them weekly.",
  },

  {
    subject: "math",
    board: "in-icse",
    metaTitle: "ICSE Mathematics — Class 10 & ISC Class 12 help (CISCE)",
    metaDescription: "Free AI math tutor for ICSE Class 10 and ISC Class 12 students. Selina chapter help, ML Aggarwal practice, board-style working, PYQ drills.",
    intro: "ICSE / ISC mathematics is widely considered harder than CBSE — more application questions, less rote, and a tighter mark scheme. The Selina and ML Aggarwal textbooks are the standard. Our AI works in CISCE phrasing and follows the marking criteria from the Council's mark schemes.",
    examFormat: "ICSE Class 10 Math: 80 marks in 2.5 hours. Section A (40 marks compulsory) + Section B (40 marks, attempt any 4 of 7 questions). ISC Class 12 Math: 80 marks paper + 20 marks project. Three sections — Section A compulsory, Sections B/C optional (relations & functions / probability).",
    highYieldTopics: [
      "Banking (recurring deposit + maturity value) — Class 10 every year",
      "GST + tax calculations — Class 10 (post 2018 syllabus)",
      "Quadratic equations + nature of roots",
      "Similar triangles + circles theorems — Class 10",
      "Trigonometric identities and Heights/Distances",
      "Matrices (ISC) — every paper",
      "Differential calculus + applications — ISC",
      "Conic sections (parabola, ellipse, hyperbola) — ISC",
    ],
    commonPitfalls: [
      "GST calculations: confusing CGST + SGST split — always 50:50",
      "Not constructing the actual triangle in similar-triangles proofs",
      "Forgetting the negative root in quadratic word problems where both apply",
      "Matrices: rows × columns mistakes (always state order first)",
      "Calculus: not checking which form of differentiation rule applies",
    ],
    pastPaperSources: [
      "Selina Concise Mathematics (Class 10) — the textbook",
      "ML Aggarwal Understanding ICSE Mathematics — companion practice",
      "ISC papers on cisce.org (last 5 years available)",
    ],
    studyPlan: "Solve every Selina exercise twice — once for understanding, once for speed. ML Aggarwal for harder application practice. Last month: only PYQs.",
  },

  {
    subject: "biology",
    board: "in-cbse",
    metaTitle: "CBSE Biology — Class 10 & 12 board help (NCERT)",
    metaDescription: "Free AI biology tutor for CBSE Class 10 and Class 12 boards. NCERT chapter notes, diagram practice, exam-style questions, mark-scheme answers.",
    intro: "CBSE Biology Class 12 is mostly NCERT, line-by-line. The marking is so strict that paraphrasing too much loses marks. Our AI knows the exact NCERT phrasing and can show you which sentences are 'mark-bearing' — i.e. you must include them verbatim.",
    examFormat: "Class 12 Biology: 70-mark theory + 30-mark practical. Theory is 3 hours, 5 sections (A: 16 × 1-mark MCQs; B: 8 × 2-mark; C: 5 × 3-mark; D: 3 × 5-mark Long; E: 4-mark case studies). Class 10 Biology is part of the integrated Science paper.",
    highYieldTopics: [
      "Reproductive health + sexual reproduction in flowering plants — Class 12, always asked",
      "Genetics: Mendel's laws, blood groups, ABO, Rh — Class 12",
      "DNA replication + transcription + translation — Class 12 Section D",
      "Human health and disease (immunity, vaccines, AIDS, cancer) — Class 12",
      "Photosynthesis (light + dark reactions, Calvin cycle)",
      "Respiration in plants (glycolysis, Krebs cycle, ETC)",
      "Biotechnology principles (PCR, gel electrophoresis, recombinant DNA)",
      "Ecosystem and ecology (energy flow, food chains, biogeochemical cycles)",
    ],
    commonPitfalls: [
      "Using your own words instead of NCERT phrasing — costs marks every time",
      "Diagrams without correct labels (use leader lines, not arrows)",
      "Confusing reproductive structures in plants (anther vs filament, ovule vs ovary)",
      "Missing the 'In humans...' qualifier when NCERT specifies a species",
      "Treating Section D as Section C — long answers need more depth",
    ],
    pastPaperSources: [
      "cbse.gov.in → Sample Papers (official)",
      "Oswaal CBSE Question Bank (Biology Class 12) — the most-used PYQ compilation",
      "Disha Publishers Chapter-wise Previous-Year Questions (CBSE)",
    ],
    studyPlan: "Read each NCERT chapter twice — first for understanding, second to highlight mark-bearing sentences. Then practice diagram drawing daily. Last 3 weeks: full previous-year papers. From week 8, add 30 min of daily MCQs to sharpen recall.",
  },

  {
    subject: "chemistry",
    board: "in-cbse",
    metaTitle: "CBSE Chemistry — Class 11 & 12 board help (NCERT)",
    metaDescription: "Free AI chemistry tutor for CBSE Class 11 and 12. Physical, organic, inorganic chemistry NCERT-aligned. Mechanisms, calculations, mark-scheme answers.",
    intro: "CBSE Chemistry is three subjects in one: Physical Chemistry rewards math, Organic Chemistry rewards mechanism memorisation, and Inorganic Chemistry rewards recall. Most students drop marks in Inorganic because they don't realise how much memorisation it needs.",
    examFormat: "Class 12 Chemistry: 70-mark theory + 30-mark practical. Theory in 3 hours, similar 5-section structure to Biology. Class 11 is the foundation but isn't directly examined in CBSE board (only at school level).",
    highYieldTopics: [
      "Solutions (molarity, molality, colligative properties) — Class 12 Section D",
      "Electrochemistry (Nernst equation, cell potentials) — every paper",
      "Chemical kinetics (rate laws, half-life) — Class 12 standard",
      "Coordination compounds (Werner's theory, isomerism) — Inorganic favourite",
      "p-block and d-block element trends",
      "Alcohols, phenols, ethers (mechanism + reactions) — Organic Section C",
      "Aldehydes, ketones, carboxylic acids — Organic Section D",
      "Amines and biomolecules — at least one short question",
    ],
    commonPitfalls: [
      "Mixing up molarity and molality formulas — molarity = moles/L, molality = moles/kg",
      "Forgetting to balance redox half-reactions before adding them",
      "Drawing organic mechanisms without arrows for electron movement",
      "Using Markovnikov's rule when the question is about peroxide effect",
      "Forgetting that Le Chatelier's principle works on both sides of equilibrium",
    ],
    pastPaperSources: [
      "cbse.gov.in sample papers",
      "Oswaal CBSE Chemistry Question Bank",
      "P. Bahadur Physical Chemistry, M.S. Chouhan Organic — for harder practice",
    ],
    studyPlan: "Allocate weeks by topic difficulty: Physical 30%, Organic 40%, Inorganic 30%. Inorganic needs daily 20 min revision because it's pure memorisation.",
  },

  {
    subject: "physics",
    board: "in-cbse",
    metaTitle: "CBSE Physics — Class 11 & 12 board help (NCERT)",
    metaDescription: "Free AI physics tutor for CBSE Class 11 and 12. NCERT-aligned derivations, numerical practice, exam-style problems.",
    intro: "CBSE Physics looks scary but has the cleanest pattern of any subject. Every paper has: one derivation per section (electromagnetism, optics, modern), one numerical per section, and a few short-answer questions. Memorise 20 derivations and you've covered ~30 marks.",
    examFormat: "Class 12 Physics: 70-mark theory + 30-mark practical. Theory 3 hours, 5 sections. Class 11 not directly board-examined.",
    highYieldTopics: [
      "Electrostatics: Gauss's law applications + capacitor combinations",
      "Current electricity: Kirchhoff's laws + Wheatstone bridge derivation",
      "Magnetic effects of current + magnetism (Biot-Savart law applications)",
      "Electromagnetic induction: Faraday's law + Lenz's law derivations",
      "AC circuits + LC oscillations",
      "Ray and wave optics: lens formula derivation, Young's double slit",
      "Modern physics: photoelectric effect, hydrogen spectrum, de Broglie",
      "Atoms and nuclei: binding energy, mass defect, radioactive decay",
    ],
    commonPitfalls: [
      "Stating laws without giving their mathematical form",
      "Using cm in some places and m in others within the same problem",
      "Forgetting sign conventions in ray optics (the New Cartesian convention)",
      "Calculating without the unit, then attaching it at the end (wrong)",
      "Forgetting that EMF and potential difference are different concepts",
    ],
    pastPaperSources: [
      "cbse.gov.in sample papers",
      "Oswaal CBSE Physics Question Bank",
      "H.C. Verma Concepts of Physics — for conceptual depth",
      "DC Pandey Understanding Physics — for extra numerical practice",
    ],
    studyPlan: "Derivations first — print or write out all 20 standard ones. Drill them weekly. Then numericals by chapter. Final month: PYPs only.",
  },

  {
    subject: "english",
    board: "in-cbse",
    metaTitle: "CBSE English Core & English Elective — Class 10 & 12",
    metaDescription: "Free AI English help for CBSE Class 10 and Class 12 students. Literature analysis, essay writing, comprehension, NCERT Flamingo/Vistas.",
    intro: "CBSE English Class 12 is split into reading, writing, and literature sections. The literature section is where you can score 95+ — every textbook chapter has predictable questions if you know the NCERT 'message' the board wants you to extract.",
    examFormat: "Class 12 English Core: 80-mark paper, 3 hours. Section A: Reading (22 marks). Section B: Creative Writing (18 marks: notice, letter, article, report). Section C: Literature (40 marks: Flamingo + Vistas).",
    highYieldTopics: [
      "Article writing (120-150 words) — every year",
      "Formal letter / job application — every year",
      "Literature questions on Flamingo: 'Last Lesson', 'Lost Spring', 'Deep Water'",
      "Vistas: 'The Third Level', 'The Tiger King', 'Journey to the End of the Earth'",
      "Poetry: 'My Mother at Sixty-Six', 'Keeping Quiet', 'A Thing of Beauty'",
      "Note-making + summary",
      "Unseen passage with vocabulary",
    ],
    commonPitfalls: [
      "Article writing without a title or with the wrong format",
      "Using bullet points in essay-style answers (CBSE wants prose)",
      "Quoting too much from the chapter — markers want analysis",
      "Forgetting the 'message' / theme paragraph in long literature questions",
      "Article tone too casual (use formal English, not chatty)",
    ],
    pastPaperSources: [
      "cbse.gov.in sample papers",
      "Together with English by Rachna Sagar (chapter notes + PYQs)",
      "Educart/Oswaal Question Bank — Flamingo + Vistas chapter-wise",
    ],
    studyPlan: "Week 1-2: memorise the article + letter format templates. Week 3-6: 1 chapter per day, summary + theme. Week 7-8: PYQs.",
  },

  {
    subject: "math",
    board: "in-jee",
    metaTitle: "JEE Mains Mathematics — concepts, formulas, problem types",
    metaDescription: "Free AI tutor for JEE Mains and Advanced math. NCERT + Cengage + ML Khanna alignment. Question archetypes, shortcuts, and PYQ drills.",
    intro: "JEE Mathematics rewards speed and pattern recognition. The same 8-10 problem archetypes repeat every year — calculus optimisation, definite integral with trig, conic sections, probability with Bayes, complex numbers locus, etc. Once you can recognise the archetype in 5 seconds, half the question is done.",
    examFormat: "JEE Mains: 25 math questions per paper (20 MCQ + 5 numerical answer type). 1 hour for math section. Negative marking on MCQs. JEE Advanced: more questions, multiple-correct types, integer types.",
    highYieldTopics: [
      "Definite integrals with substitution + symmetry properties",
      "Application of derivatives — maxima/minima word problems",
      "Conic sections — parabola, ellipse, hyperbola standard problems",
      "Complex numbers — locus problems on the Argand plane",
      "Permutations and combinations + binomial theorem",
      "Probability — Bayes' theorem, conditional probability",
      "Matrices and determinants",
      "Sequences and series — sum of GP, AGP",
      "3D geometry — line and plane intersections",
      "Trigonometric equations and inverse trig",
    ],
    commonPitfalls: [
      "Wasting 5+ minutes on a single problem when you should move on",
      "Mis-reading the question — JEE loves 'least' vs 'greatest' switcheroos",
      "Forgetting domain restrictions in inverse trig",
      "Sign errors in conic section equations",
      "Negative marking on guesses — only answer if 50%+ sure",
    ],
    pastPaperSources: [
      "Official JEE archive on jeemain.nta.nic.in",
      "JEE Main 10 Years' Solved Papers (Arihant)",
      "Cengage IIT-JEE Mathematics series for depth",
      "ML Khanna for the harder problems",
    ],
    studyPlan: "JEE Main is 60% NCERT-level. Master NCERT first. Then Cengage for depth. Finally PYQs (last 12 years). Take 1 mock per week from month 3 onwards.",
  },

  {
    subject: "biology",
    board: "in-neet",
    metaTitle: "NEET Biology — Class 11 & 12 NCERT-driven prep",
    metaDescription: "Free AI tutor for NEET Biology. Line-by-line NCERT focus, diagram practice, MCQ drills, common-mistake list.",
    intro: "NEET Biology is the most NCERT-faithful section of the entire exam. 90%+ of questions come directly from NCERT line items. The students who get 350+ in Biology aren't smarter — they've read NCERT Class 11 and 12 cover-to-cover at least 5 times.",
    examFormat: "NEET 2026: Biology section = 90 questions (45 Botany + 45 Zoology), 720 max marks for the full paper. 200 minutes total. +4 for correct, -1 for wrong, 0 for unattempted.",
    highYieldTopics: [
      "Plant kingdom (Bryophyta, Pteridophyta, Gymnosperms, Angiosperms) — Botany Class 11",
      "Anatomy of flowering plants — every NEET",
      "Photosynthesis + respiration in plants — Botany Class 11",
      "Human reproduction — Zoology Class 12",
      "Genetics + molecular basis of inheritance — Zoology Class 12",
      "Biotechnology + applications — Zoology Class 12",
      "Ecology — usually 15+ questions per paper",
      "Animal kingdom (porifera through chordata) — Zoology Class 11",
    ],
    commonPitfalls: [
      "Reading NCERT just once and then jumping to MCQs — you need 5 reads minimum",
      "Memorising without understanding evolutionary relationships — leads to confusion in mixed questions",
      "Ignoring Botany — it's still 45 marks!",
      "Confusing Class 11 and Class 12 content boundaries",
      "Not making your own one-page summaries per chapter",
    ],
    pastPaperSources: [
      "Official NEET PYP archive on neet.nta.nic.in",
      "MTG NEET Biology Topic-wise PYQs (the standard prep book)",
      "Trueman's Biology — supplement to NCERT for harder concepts",
    ],
    studyPlan: "NCERT reading: 30 pages per day for 3 months. After 2 reads, start MCQs alongside (30 per day). Last 30 days: pure PYQ + mock tests every other day.",
    extraNotes: "AIIMS-style questions are no longer asked (AIIMS merged into NEET), so focus only on NEET pattern.",
  },

  {
    subject: "economics",
    board: "in-cbse",
    metaTitle: "CBSE Economics Help — Class 11 & 12 (Macro + Micro)",
    metaDescription: "Free AI economics tutor for CBSE Class 11 and 12. Macro, Micro, Statistics, Indian Economic Development. Diagrams, numericals, and conceptual depth.",
    intro: "CBSE Economics rewards diagrams. Every long answer that involves a curve (demand, supply, AD-AS, IS-LM-like) needs a labelled diagram. Without it, you lose 40% of the marks regardless of how good your prose is.",
    examFormat: "Class 12 Economics: 80-mark paper, 3 hours. Part A: Macroeconomics (40 marks). Part B: Indian Economic Development (40 marks). MCQ + short + long answer structure.",
    highYieldTopics: [
      "National income aggregates (GDP, GNP, NNP, NDP)",
      "Methods of measuring national income (income, expenditure, product)",
      "Money and banking (functions of money, RBI tools)",
      "Foreign exchange + balance of payments",
      "Indian economy 1950-90 + post-1991 reforms",
      "Poverty, unemployment, infrastructure",
      "Sustainable development",
    ],
    commonPitfalls: [
      "Drawing diagrams without labels on both axes",
      "Confusing nominal GDP with real GDP",
      "Mixing fiscal and monetary policy tools",
      "Writing the formula without applying it",
      "Forgetting to mention the source of statistics (NITI Aayog, RBI, World Bank, etc.)",
    ],
    pastPaperSources: [
      "cbse.gov.in sample papers",
      "Sandeep Garg Macroeconomics + Indian Economy",
      "TR Jain & VK Ohri (popular guide series)",
    ],
    studyPlan: "Diagram drill: 1 diagram per day for 6 weeks. Then numerical practice (national income calculations). Last 2 weeks: full PYQ papers.",
  },

  {
    subject: "accounting",
    board: "in-cbse",
    metaTitle: "CBSE Accountancy — Class 11 & 12 board help",
    metaDescription: "Free AI accountancy tutor for CBSE Class 11 and 12. Journal, ledger, final accounts, partnership, company accounts, ratio analysis.",
    intro: "CBSE Accountancy Class 12 is split into Partnership Accounts and Company Accounts + Analysis of Financial Statements. Partnership is the heaviest scoring area — get the admission, retirement, and dissolution of a partner questions down cold.",
    examFormat: "Class 12 Accountancy: 80-mark paper, 3 hours. Part A: Accounting for Partnership Firms + Companies (60 marks). Part B: Financial Statement Analysis (20 marks) OR Computerised Accounting (20 marks, option).",
    highYieldTopics: [
      "Admission of a partner (goodwill, revaluation, capital adjustment)",
      "Retirement / death of a partner",
      "Dissolution of partnership firm",
      "Company accounts: Share capital + debentures issue",
      "Cash flow statement",
      "Comparative + common-size statements",
      "Accounting ratios",
    ],
    commonPitfalls: [
      "Putting goodwill on the asset side when it should be written off",
      "Mistakes in sacrificing vs gaining ratio",
      "Forgetting capital adjustment after admission",
      "Confusing debentures issued at discount vs premium",
      "Cash flow: misclassifying operating vs investing vs financing activity",
    ],
    pastPaperSources: [
      "cbse.gov.in sample papers",
      "T.S. Grewal Accountancy (the standard CBSE textbook)",
      "D.K. Goel Accountancy (alternative)",
    ],
    studyPlan: "T.S. Grewal exercises chapter by chapter. After each chapter, do CBSE PYQs on that topic. Last 3 weeks: full mock papers.",
  },

  // ──────────────────────────── UK ────────────────────────────

  {
    subject: "math",
    board: "uk-gcse-aqa",
    metaTitle: "GCSE Maths AQA — Foundation + Higher tier help",
    metaDescription: "Free AI maths tutor for AQA GCSE Maths (8300). Foundation and Higher tier topics, exam-style questions, past papers, mark-scheme working.",
    intro: "AQA GCSE Maths (spec 8300) is sat at the end of Year 11. The Higher tier ceiling is grade 9; Foundation tier ceiling is grade 5. The trick to a grade 7+ on Higher is knowing the small set of 'topics that always appear': bounds, vectors, similarity, transformations, simultaneous equations with quadratics, and circle theorems.",
    examFormat: "Three papers, 1h 30 each, 80 marks each (240 total). Paper 1: non-calculator. Papers 2 & 3: calculator. Both tiers sit the same number of papers. Higher questions are explicitly graded 4-9, Foundation 1-5.",
    highYieldTopics: [
      "Algebra: solving quadratics, simultaneous equations (linear-quadratic on Higher)",
      "Trigonometry: SOHCAHTOA + sine rule + cosine rule (Higher)",
      "Circle theorems — at least one question every paper (Higher)",
      "Vectors: column vectors + vector geometry proofs (Higher)",
      "Bounds (upper/lower) calculations — Higher",
      "Histograms with unequal class widths",
      "Direct and inverse proportion (k method)",
      "Compound interest + percentage change",
    ],
    commonPitfalls: [
      "Writing 'x = ' without units on geometry answers",
      "Calculator paper: not converting between dms and decimal degrees",
      "Vector proof questions: not factoring out the common scalar at the end",
      "Histograms: confusing frequency with frequency density",
      "Probability tree diagrams without labelled branches",
    ],
    pastPaperSources: [
      "aqa.org.uk/qualifications/mathematics — official past papers + mark schemes",
      "physicsandmathstutor.com — topic-by-topic PYQ collections",
      "Corbettmaths + MathsGenie — free worksheets and past-paper grouping by topic",
    ],
    studyPlan: "Eight weeks before exams: one topic per week, Corbettmaths worksheet + AQA past-paper questions. From week 4 onwards: one full past paper under timed conditions per week. Mark with the actual AQA scheme.",
    extraNotes: "If you're on Higher and struggling with grade 4 questions on Paper 1, you should consider Foundation — the cap of grade 5 still gets you a pass with much less stress.",
  },

  {
    subject: "math",
    board: "uk-gcse-edexcel",
    metaTitle: "GCSE Maths Edexcel — Pearson 1MA1 Foundation + Higher",
    metaDescription: "Free AI maths tutor for Edexcel GCSE Maths (1MA1). Foundation and Higher tier, past papers, step-by-step solutions in Edexcel mark-scheme style.",
    intro: "Edexcel GCSE Maths (1MA1) is the most-sat maths qualification in the UK. The exam papers are very predictable — Pearson re-uses question types year after year. If you've done the last 5 years of papers, you've effectively seen 80% of the question patterns.",
    examFormat: "Three papers, 1h 30 each, 80 marks each (240 total). Paper 1 non-calculator, Papers 2 & 3 calculator. Same structure as AQA but with Edexcel-specific question styles.",
    highYieldTopics: [
      "Bearings (always appears, calculator paper)",
      "Surds: rationalising the denominator — Higher",
      "Compound shapes area + volume (frustum, sphere)",
      "Stem-and-leaf, cumulative frequency, box plots",
      "Standard form arithmetic (×, ÷, +, −)",
      "Solving quadratic by formula AND by completing the square",
      "Inverse functions + composite functions — Higher",
      "Exponential growth and decay word problems",
    ],
    commonPitfalls: [
      "Bearings: not measuring from North clockwise",
      "Surds: leaving an irrational in the denominator",
      "Stem-and-leaf: forgetting the key",
      "Standard form: putting the decimal in the wrong place",
      "Functions: f(g(x)) order vs g(f(x))",
    ],
    pastPaperSources: [
      "qualifications.pearson.com — official 1MA1 past papers",
      "Maths Genie's grouped Edexcel PYQs by topic + grade",
      "OnMaths.com video walk-throughs of Edexcel papers",
    ],
    studyPlan: "Week-by-week: pick a grade target (e.g. grade 6), find every grade-6 question on Maths Genie, do them in clusters of 10. Build a personal 'mistakes book' — review weekly.",
  },

  {
    subject: "math",
    board: "uk-alevel-aqa",
    metaTitle: "A Level Maths AQA — 7357 Pure + Mechanics + Stats",
    metaDescription: "Free AI maths tutor for AQA A Level Maths (7357). Pure, Mechanics, Statistics — past papers, step-by-step working, formula sheet.",
    intro: "AQA A Level Maths (7357) covers Pure (about 2/3) + Mechanics + Statistics. The hardest jump from GCSE is the Year 12 calculus and proof. Most students underprepare for proof by induction and proof by contradiction — both reappear every year.",
    examFormat: "Three papers, 2h each, 100 marks each (300 total). Paper 1 & 2: Pure. Paper 3: Mechanics + Statistics. All calculator-allowed.",
    highYieldTopics: [
      "Differentiation rules + applications (rate of change problems)",
      "Integration by parts + by substitution",
      "Trigonometric identities + small-angle approximations",
      "Numerical methods (Newton-Raphson + iteration)",
      "Sequences and series + binomial expansion for any n",
      "Proof by induction + proof by contradiction",
      "Mechanics: SUVAT + projectiles + variable forces",
      "Statistics: hypothesis testing on a binomial distribution + normal approximation",
    ],
    commonPitfalls: [
      "Forgetting constant of integration on indefinite integrals",
      "Newton-Raphson convergence: not checking the function is differentiable and the start point is close",
      "Mechanics: forgetting g = 9.8 m/s² (not 10)",
      "Hypothesis testing: stating H₀ and H₁ but not the test statistic",
      "Trigonometric equations: missing solutions outside the principal range",
    ],
    pastPaperSources: [
      "aqa.org.uk/qualifications/mathematics/as-and-a-level/mathematics-7357",
      "physicsandmathstutor.com — topic-grouped PYQs",
      "Madasmaths.com — harder problem sets",
    ],
    studyPlan: "Year 13: 4 hours/week pure maths + 2 hours mechanics/stats. Daily quick problem (5 min). Last term: 1 mock per week.",
  },

  {
    subject: "math",
    board: "uk-alevel-edexcel",
    metaTitle: "A Level Maths Edexcel — 9MA0 Pure + Mechanics + Stats",
    metaDescription: "Free AI maths tutor for Edexcel A Level Maths (9MA0). Pure, Applied (Mechanics + Stats), past papers, every-step working.",
    intro: "Edexcel A Level Maths (9MA0) has the same content as AQA but slightly different question styles. Edexcel is known for cleaner numbers in calculations but tougher 'show that' proof questions. Mark schemes are very specific on which method gets marks.",
    examFormat: "Three papers, 2h each, 100 marks each. Papers 1 & 2: Pure. Paper 3: Statistics (50 marks) + Mechanics (50 marks). All calculator-allowed.",
    highYieldTopics: [
      "Vectors in 2D and 3D — magnitude, direction, dot product",
      "Differentiation from first principles (worth showing fully)",
      "Logarithms + exponentials + their differentiation",
      "Numerical integration: trapezium rule + Simpson's rule",
      "Statistics: regression, correlation, hypothesis testing on r",
      "Mechanics: connected particles (pulley, inclined plane)",
      "Moments and equilibrium (rigid bodies)",
    ],
    commonPitfalls: [
      "Vector questions: confusing position vectors with direction vectors",
      "Differentiation from first principles: not showing the limit clearly",
      "Trapezium rule: getting the h wrong (h = (b-a)/n)",
      "Stats: testing the wrong tail (one-tail vs two-tail)",
      "Mechanics: forgetting to resolve forces along the incline",
    ],
    pastPaperSources: [
      "qualifications.pearson.com → Edexcel A Level Maths 9MA0",
      "Maths Genie A Level section",
      "ExamSolutions video walk-throughs",
    ],
    studyPlan: "Identify the 6 weakest topics from a diagnostic. Spend a week per topic with PYQs only. Recap with mocks fortnightly.",
  },

  {
    subject: "biology",
    board: "uk-gcse-aqa",
    metaTitle: "GCSE Biology AQA — 8461 Foundation + Higher",
    metaDescription: "Free AI biology tutor for AQA GCSE Biology (8461). Cell biology, organisation, infection, bioenergetics, homeostasis, ecology — full coverage.",
    intro: "AQA GCSE Biology (8461) is six topics on Paper 1 and six on Paper 2. The trick is that 'required practicals' (10 of them) appear in every paper as 6-mark questions. Memorise the practical method exactly and you've got an easy 12+ marks.",
    examFormat: "Two papers, 1h 45 each, 100 marks each. Paper 1: cell biology, organisation, infection and response, bioenergetics. Paper 2: homeostasis, inheritance, variation, evolution, ecology.",
    highYieldTopics: [
      "Required practical: enzyme activity (effect of pH or temperature)",
      "Required practical: osmosis with potato cylinders",
      "Required practical: photosynthesis with pondweed",
      "Inheritance: monohybrid Punnett squares + sex inheritance",
      "Homeostasis: blood glucose regulation (insulin / glucagon)",
      "Nervous system: reflex arc diagram + labels",
      "Plant transport: xylem and phloem structure + function",
      "Pyramids of biomass and energy flow through ecosystems",
    ],
    commonPitfalls: [
      "Required practical questions: writing the method out of order — markers want sequential steps",
      "Genetic cross: forgetting to state genotype AND phenotype",
      "Confusing meiosis and mitosis stages",
      "Using 'germs' instead of 'pathogens'",
      "Photosynthesis equation missing the light arrow",
    ],
    pastPaperSources: [
      "aqa.org.uk/qualifications/science/gcse",
      "Save My Exams free past papers + topic questions",
      "GCSEPod for visual revision",
    ],
    studyPlan: "Spend 2 weeks memorising all 10 required practical methods cold. Then topic-by-topic via Save My Exams flashcards. Last 4 weeks: PYQs.",
  },

  {
    subject: "chemistry",
    board: "uk-gcse-aqa",
    metaTitle: "GCSE Chemistry AQA — 8462 Foundation + Higher",
    metaDescription: "Free AI chemistry tutor for AQA GCSE Chemistry (8462). Atomic structure, bonding, quantitative, energy changes, organic, chemical analysis.",
    intro: "AQA GCSE Chemistry (8462) is heavy on calculations. Higher tier students need to be comfortable with mole calculations, percentage yield, atom economy, and concentration calculations. Foundation students can ignore moles and focus on relative masses.",
    examFormat: "Two papers, 1h 45 each, 100 marks each. Paper 1: atomic structure, bonding, quantitative, chemical changes, energy changes. Paper 2: rates of reaction, organic, chemical analysis, atmosphere, resources.",
    highYieldTopics: [
      "Calculating relative formula mass and percentage by mass",
      "Mole calculations (Higher only): n = m / Mr",
      "Balancing equations + reacting masses",
      "Electrolysis of brine + molten lead bromide",
      "Required practical: titration (acid + alkali)",
      "Rates of reaction: collision theory + factors affecting rate",
      "Organic homologous series (alkanes, alkenes, alcohols, carboxylic acids)",
      "Chromatography: Rf values calculation",
    ],
    commonPitfalls: [
      "Forgetting to balance the equation before doing mole calculations",
      "Titration: misreading the burette to the wrong decimal place",
      "Electrolysis: confusing anode (positive) and cathode (negative)",
      "Energy changes: getting endothermic vs exothermic signs wrong",
      "Organic: drawing 'displayed formula' when 'structural formula' was asked",
    ],
    pastPaperSources: [
      "aqa.org.uk past papers",
      "Save My Exams chemistry topic questions",
      "BBC Bitesize for visual revision",
    ],
    studyPlan: "Calculations daily — 5 mole questions, 2 titration questions. Topic theory in 30-min blocks. Practicals in week 4-5. Past papers in last 3 weeks.",
  },

  {
    subject: "physics",
    board: "uk-gcse-aqa",
    metaTitle: "GCSE Physics AQA — 8463 Foundation + Higher",
    metaDescription: "Free AI physics tutor for AQA GCSE Physics (8463). Energy, electricity, particle model, atomic structure, forces, waves, magnetism, space.",
    intro: "AQA GCSE Physics (8463) is the most equation-heavy of the three sciences. You're given some equations on a formula sheet but the most-used ones (energy, work done, power) must be memorised. Higher tier adds another tier of equations and harder calculations.",
    examFormat: "Two papers, 1h 45 each, 100 marks each. Paper 1: energy, electricity, particle model, atomic structure. Paper 2: forces, waves, magnetism + electromagnetism, space physics (Higher only).",
    highYieldTopics: [
      "Energy stores and transfers (kinetic, gravitational, elastic, thermal, chemical)",
      "Specific heat capacity + specific latent heat calculations",
      "Required practical: investigating resistance vs length of wire",
      "Required practical: investigating force-extension of a spring",
      "Required practical: Snell's law for refraction",
      "Equations of motion (kinematics) on the formula sheet",
      "Wave equations: v = fλ",
      "Electromagnetic spectrum + uses of each band",
    ],
    commonPitfalls: [
      "Writing equations without rearranging them first — show the rearrangement step",
      "Mixing watts with joules (W = J/s)",
      "Using degrees in trigonometric calculations when radians needed (advanced)",
      "Forgetting that I in circuits is in amperes, not amps (write both)",
      "Practical questions: not naming the independent and dependent variables",
    ],
    pastPaperSources: [
      "aqa.org.uk past papers",
      "Save My Exams physics topic questions",
      "Cognito YouTube channel for visual explanations",
    ],
    studyPlan: "Memorise the 20 most-used equations in week 1. Then drill calculations in week 2-4. Required practicals week 5. PYPs from week 6.",
  },

  {
    subject: "english",
    board: "uk-gcse-aqa",
    metaTitle: "GCSE English Language + Literature AQA — 8700 + 8702",
    metaDescription: "Free AI English tutor for AQA GCSE English Language (8700) and Literature (8702). Unseen poetry, Shakespeare, 19th century novel, modern texts.",
    intro: "AQA GCSE English is two qualifications: Language (8700) tests reading and writing skills on unseen texts. Literature (8702) tests set texts — typically Macbeth, A Christmas Carol, An Inspector Calls, and the Power & Conflict anthology. Memorising the right quotes is what separates grades 6 from 9.",
    examFormat: "Language: two papers, 1h 45 each. Paper 1: Explorations in Creative Reading + Writing. Paper 2: Writers' Viewpoints + Perspectives. Literature: two papers. Paper 1: Shakespeare + 19th century novel. Paper 2: modern text + poetry anthology + unseen poetry.",
    highYieldTopics: [
      "Language Paper 1 Q3: structural analysis of an extract",
      "Language Paper 1 Q5: descriptive or narrative writing (40 marks!)",
      "Literature: Macbeth — ambition, guilt, supernatural themes",
      "Literature: A Christmas Carol — redemption, social criticism, Scrooge's transformation",
      "Literature: An Inspector Calls — responsibility, class, J.B. Priestley's socialist message",
      "Literature: Power & Conflict poetry comparison",
      "Unseen poetry analysis (using PEEL or PETAL structure)",
    ],
    commonPitfalls: [
      "Language Q5: writing too short — aim for 1.5 to 2 pages minimum",
      "Quoting without analysing — every quote needs a 'this shows...'",
      "Forgetting context paragraph on the modern text question",
      "Unseen poetry: jumping to themes before language devices",
      "Spelling, punctuation, grammar marks lost in creative writing",
    ],
    pastPaperSources: [
      "aqa.org.uk english past papers (Language + Literature)",
      "Mr Bruff and Mr Salles YouTube — best free literature analysis",
      "Save My Exams English revision notes",
    ],
    studyPlan: "Build a quote bank: 15 quotes per set text, organised by theme. Practice Language Paper 1 Q5 weekly. Memorise 3 PEEL paragraphs per set text.",
  },

  {
    subject: "biology",
    board: "uk-alevel-aqa",
    metaTitle: "A Level Biology AQA — 7402 paper-by-paper help",
    metaDescription: "Free AI biology tutor for AQA A Level Biology (7402). 8 topics across 2 years, required practicals, exam-style 25-mark essays.",
    intro: "AQA A Level Biology (7402) is famously content-dense. 8 topics across Year 12 and 13. The 25-mark essay on Paper 3 is what kills most students' overall grade — it's worth ~10% of the total qualification on its own.",
    examFormat: "Three papers, 2h each, 91-78 marks. Paper 1: topics 1-4 (biological molecules, cells, organisms exchange substances, genetic information). Paper 2: topics 5-8. Paper 3: synoptic + 25-mark essay choice.",
    highYieldTopics: [
      "Enzymes: induced fit + factors affecting activity",
      "DNA, RNA, protein synthesis (transcription + translation)",
      "Membrane transport: diffusion, osmosis, active transport, co-transport",
      "Mass transport in animals (heart + circulation) and plants (xylem + phloem)",
      "Genetic diversity + natural selection (Hardy-Weinberg)",
      "Photosynthesis + respiration (full biochemistry)",
      "Nervous coordination (action potentials + synapses)",
      "Gene technology (PCR, gel electrophoresis, recombinant DNA)",
    ],
    commonPitfalls: [
      "Confusing 'because' vs 'so' — biology mark schemes care about cause-effect direction",
      "Vague 'damages cells' answers — say HOW (e.g. denatures enzymes, ruptures membranes)",
      "Photosynthesis: not stating the location (chloroplast vs stroma vs thylakoid)",
      "Genetics: not stating gamete combinations explicitly",
      "Synoptic essay: picking 5 unrelated topics — you need a unifying theme",
    ],
    pastPaperSources: [
      "aqa.org.uk/qualifications/biology",
      "physicsandmathstutor.com — topic-grouped PYQs + synoptic essays",
      "Snaprevise + Cognito for visual explanations",
    ],
    studyPlan: "Year 13: 5 hours/week + 2 hours practice questions. Required practicals revision in Easter. Last 6 weeks: PYP-only mode, 25-mark essay plans weekly.",
  },

  {
    subject: "economics",
    board: "uk-alevel-aqa",
    metaTitle: "A Level Economics AQA — 7136 Micro + Macro paper help",
    metaDescription: "Free AI economics tutor for AQA A Level Economics (7136). Microeconomics, Macroeconomics, evaluation questions, 25-mark essay structure.",
    intro: "AQA A Level Economics (7136) examiners love evaluation. A grade A answer doesn't just describe — it weighs, qualifies, and concludes. Without evaluation, you cap at grade B even if your knowledge is perfect.",
    examFormat: "Three papers, 2h each, 80 marks each. Paper 1: Markets and market failure (micro). Paper 2: National + international economy (macro). Paper 3: Economic principles + issues (synoptic, multi-choice + 25-mark essay).",
    highYieldTopics: [
      "Demand + supply analysis with diagrams (every paper)",
      "Elasticity (PED, PES, YED, XED) — calculations + interpretation",
      "Market failure: externalities, public goods, info gaps",
      "Government intervention: tax, subsidy, regulation, behavioural nudges",
      "GDP, inflation, unemployment, balance of payments — definitions + measurement",
      "AD/AS analysis and macro-objective trade-offs",
      "Monetary policy + fiscal policy + supply-side policy comparison",
      "International trade: comparative advantage + protectionism",
    ],
    commonPitfalls: [
      "Diagrams without titles or axis labels",
      "One-sided analysis with no counter-argument (capping at level 2/4)",
      "Confusing PPP exchange rate with floating rate",
      "Vague evaluation ('it depends') without giving concrete factors",
      "25-mark essay: not concluding with a justified judgment",
    ],
    pastPaperSources: [
      "aqa.org.uk/qualifications/economics",
      "Tutor2u Economics — free essay plans + past papers",
      "physicsandmathstutor.com economics section",
    ],
    studyPlan: "Year 13: 1 essay plan per week. Diagram practice daily. Tutor2u newsletter for current affairs to bring into evaluation. Last term: 1 mock per week.",
  },

  // ──────────────────────────── US ────────────────────────────

  {
    subject: "math",
    board: "us-ap",
    metaTitle: "AP Calculus AB & BC + Precalc + Stats — College Board help",
    metaDescription: "Free AI tutor for AP Math (Calc AB, Calc BC, Precalc, Statistics). FRQ practice, MCQ drills, scoring rubrics, exam-day strategy.",
    intro: "AP Math exams (Calc AB, Calc BC, Precalc, Stats) reward two things: a deep grasp of a small set of concepts, and the ability to communicate clearly on Free Response Questions (FRQs). College Board scoring rubrics are very specific — knowing what each rubric point actually asks for is the difference between a 4 and a 5.",
    examFormat: "From the May 2027 exams: AP Calc AB and BC are 3h 10m — 42 MCQs (29 no-calculator in 62 min, 13 calculator in 38 min; 50%) + 6 FRQs (2 calculator in 30 min, 4 no-calculator in 60 min; 50%); BC adds series and polar/parametric. AP Precalculus is 2h 55m — 42 MCQs + four 6-point FRQs. AP Stats is 3h — 42 MCQs (90 min, 50%) + four 10-point FRQs (90 min, 50%); the Investigative Task was removed in the 2026-27 revision. All scored 1-5.",
    highYieldTopics: [
      "Calc: definite + indefinite integrals (FRQ standard)",
      "Calc: Mean Value Theorem + Intermediate Value Theorem statements",
      "Calc: related rates word problems",
      "Calc BC: series convergence tests (ratio, root, integral)",
      "Stats: hypothesis tests (one-sample t, chi-square goodness of fit)",
      "Stats: confidence intervals + interpretation",
      "Stats: linear regression + residuals",
      "Precalc: trig identities + inverse trig",
    ],
    commonPitfalls: [
      "AP Calc FRQ: omitting units in real-world context questions",
      "Stating limits without showing approach value (lim x→∞)",
      "Stats FRQ: not checking conditions before doing a test (random, normal, independent)",
      "Series tests: not stating which test you're applying",
      "Stats: using 'probability' language when 'confidence' language was required",
    ],
    pastPaperSources: [
      "apcentral.collegeboard.org → past FRQs going back 20+ years",
      "AP Classroom (your teacher's portal) for unit-by-unit drills",
      "Khan Academy AP courses",
    ],
    studyPlan: "Sept-Feb: cover units alongside class. Mar-Apr: 2 FRQs per week from PYQs. April-May: 1 full AP exam every other week + analyse with rubric.",
  },

  {
    subject: "math",
    board: "us-common-core",
    metaTitle: "Common Core Math — K-12 standards-aligned help",
    metaDescription: "Free AI math tutor for Common Core State Standards K-12. Standards-aligned practice, multi-step word problems, mathematical practices.",
    intro: "Common Core Math emphasizes 'mathematical practices' (problem-solving, reasoning, communicating, modelling) as much as content. The standards spiral — each grade builds on the previous. Our AI is aware of the K-8 progression and the High School conceptual categories.",
    examFormat: "Common Core doesn't have a single exam — assessment varies by state (SBAC, PARCC, state-specific tests). Most state tests have multi-step word problems, performance tasks, and gridded responses.",
    highYieldTopics: [
      "K-5: number sense, place value, fractions",
      "6-8: ratios, proportions, expressions, equations",
      "Algebra I: linear functions, systems, quadratics",
      "Geometry: transformations, similarity, right triangles",
      "Algebra II: polynomials, rational functions, exponential/log",
      "Statistics & probability: data displays, conditional probability",
    ],
    commonPitfalls: [
      "Skipping the explanation step on performance tasks",
      "Multi-step problems: not labelling intermediate quantities",
      "Mixing up commutative and associative properties",
      "Coordinate plane: confusing slope with rate of change",
    ],
    pastPaperSources: [
      "achievethecore.org — released items from SBAC and PARCC",
      "Khan Academy Common Core aligned practice",
      "Engageny.org curriculum modules",
    ],
    studyPlan: "Identify your weakest 'cluster' from a diagnostic. Spend 30 min/day on that cluster + 15 min mixed review.",
  },

  {
    subject: "math",
    board: "us-sat",
    metaTitle: "SAT Math — College Board Digital SAT prep",
    metaDescription: "Free AI tutor for Digital SAT Math. Adaptive practice, problem types, pacing, calculator strategy.",
    intro: "The Digital SAT Math section is adaptive — Module 2 difficulty depends on your Module 1 performance. The strategy is: nail Module 1 to unlock the harder Module 2, which is where the higher score comes from. A perfect Module 1 + average Module 2 still gets you ~720; the reverse caps at ~640.",
    examFormat: "Digital SAT Math: 2 modules of 22 questions each, 35 min each (70 min total). All questions calculator-allowed (Desmos built-in). Scored 200-800.",
    highYieldTopics: [
      "Linear equations + systems",
      "Quadratic equations (vertex form, factoring, quadratic formula)",
      "Exponents and exponential functions",
      "Geometry: angles, circles, triangles, similarity",
      "Statistics: mean, median, mode, standard deviation interpretation",
      "Word problems with proportions and percentages",
      "Function notation and composition",
    ],
    commonPitfalls: [
      "Not using Desmos for graphing questions (saves minutes)",
      "Misreading the question (always re-read the last sentence)",
      "Spending >2 min on a question and not moving on",
      "Geometry: not drawing the figure even when not provided",
      "Word problems: not defining variables clearly",
    ],
    pastPaperSources: [
      "Khan Academy SAT Practice (official partnership)",
      "Bluebook app (College Board) — full-length digital practice tests",
      "College Board Question of the Day",
    ],
    studyPlan: "Take a Bluebook diagnostic first. Spend 60% of study time on your weakest 3 topic types. Take 1 full practice test per week.",
  },

  {
    subject: "biology",
    board: "us-ap",
    metaTitle: "AP Biology — College Board help",
    metaDescription: "Free AI tutor for AP Biology. 8 units, lab investigations, exam-style FRQs, scoring rubrics.",
    intro: "AP Biology is one of the harder AP exams. The 8-unit framework means you can't cram — start in September and pace yourself. The key skill examiners reward is connecting concepts across units (e.g. how cell signaling intersects with immune response).",
    examFormat: "60 MCQ (90 min, 50% score) + 6 FRQs (90 min, 50% score). Scored 1-5.",
    highYieldTopics: [
      "Cell communication and cell cycle",
      "Genetics: Mendelian + non-Mendelian inheritance",
      "Gene expression and regulation (operons)",
      "Cellular energetics (photosynthesis + cellular respiration in detail)",
      "Heredity and natural selection (Hardy-Weinberg equilibrium)",
      "Ecology: population dynamics + ecosystem energy flow",
      "Lab investigations (BLAST, transformation, photosynthesis)",
    ],
    commonPitfalls: [
      "FRQ: not justifying with biological reasoning",
      "Confusing meiosis stages with mitosis stages",
      "Hardy-Weinberg: not stating conditions",
      "Lab questions: forgetting the control",
      "Vague language ('the cell does something') instead of specific mechanisms",
    ],
    pastPaperSources: [
      "apcentral.collegeboard.org → AP Biology past FRQs",
      "Bozeman Science YouTube — full unit walkthroughs",
      "AP Classroom unit drills",
    ],
    studyPlan: "Sept-Nov: units 1-4. Dec-Feb: units 5-8. Mar-April: FRQ practice + labs. May: full exams + targeted revision.",
  },

  {
    subject: "chemistry",
    board: "us-ap",
    metaTitle: "AP Chemistry — College Board help",
    metaDescription: "Free AI tutor for AP Chemistry. 9 units, lab investigations, equilibrium, kinetics, electrochemistry, FRQ practice.",
    intro: "AP Chemistry is calculation-heavy. The Equation Sheet given in the exam saves you memorisation, but you still need to know WHICH equation to apply and when. The 'big four' calculation topics are equilibrium, acids/bases, kinetics, and electrochemistry.",
    examFormat: "60 MCQ (90 min, 50%) + 7 FRQs (105 min, 50%). Scored 1-5.",
    highYieldTopics: [
      "Equilibrium (Kc, Kp, Le Chatelier, ICE tables)",
      "Acids and bases (Henderson-Hasselbalch, buffers, titration curves)",
      "Kinetics (rate laws, integrated rate laws, mechanisms)",
      "Electrochemistry (cell potentials, Nernst equation, electrolysis)",
      "Thermodynamics (ΔG = ΔH - TΔS, spontaneity)",
      "Atomic structure (PES, photoelectric effect, electronic configuration)",
      "Intermolecular forces (hydrogen bonding, dipole-dipole, London)",
    ],
    commonPitfalls: [
      "Mixing Ka and pKa in buffer calculations",
      "Forgetting that 'x' in ICE tables is small only when initial concentrations are >> Ka",
      "Sign errors in electrochemistry (oxidation = negative E°)",
      "Thermodynamics: forgetting to convert J to kJ before using ΔG = ΔH - TΔS",
      "PES: misidentifying which subshell each peak represents",
    ],
    pastPaperSources: [
      "apcentral.collegeboard.org → AP Chemistry past FRQs",
      "Adrian Dingle Chemistry — best AP Chem resource site",
      "AP Classroom unit drills",
    ],
    studyPlan: "Master equilibrium + acid/base in semester 1. Kinetics + electrochem in semester 2. Past FRQs from March onwards.",
  },

  {
    subject: "physics",
    board: "us-ap",
    metaTitle: "AP Physics 1 + 2 + C — College Board help",
    metaDescription: "Free AI tutor for AP Physics 1, 2, C: Mechanics and C: E&M. Algebra-based and calculus-based, FRQs, labs.",
    intro: "AP Physics splits into algebra-based (Physics 1 + 2) and calculus-based (Physics C: Mechanics + E&M). Physics 1 is the most-failed AP exam — partly because students underestimate it. C: E&M is the hardest by far but the curve is generous.",
    examFormat: "From the May 2027 exams all four AP Physics exams share one shape: 3 hours — 42 MCQs (85 min, 50%) + 4 FRQs (95 min, 50%). That applies to Physics 1, Physics 2, Physics C: Mechanics and Physics C: E&M; Physics C is no longer the short 90-minute paper it used to be. All scored 1-5.",
    highYieldTopics: [
      "Kinematics (1D and 2D motion, projectiles)",
      "Newton's laws + free body diagrams",
      "Energy and momentum conservation",
      "Rotational motion + torque (Physics 1 + C)",
      "Simple harmonic motion + waves",
      "Electrostatics + circuits (Physics 1 + 2)",
      "Magnetism + electromagnetic induction (Physics 2 + C: E&M)",
      "Calculus: Gauss's law, Ampere's law (Physics C: E&M only)",
    ],
    commonPitfalls: [
      "FRQ: forgetting to draw a free body diagram even when not explicitly asked",
      "Confusing average velocity with instantaneous velocity",
      "Forgetting that g points downward (negative if up is positive)",
      "Physics C: E&M: surface integrals direction errors",
      "Lab questions: not identifying systematic vs random error",
    ],
    pastPaperSources: [
      "apcentral.collegeboard.org → all Physics past FRQs",
      "Flipping Physics YouTube — best AP Physics video resource",
      "Knight's Physics for Scientists and Engineers (C-level depth)",
    ],
    studyPlan: "Conceptual mastery first (Newton's laws, energy conservation). Then numerical practice. From January, alternate FRQs and full mocks.",
  },

  // ──────────────────────────── INTERNATIONAL ────────────────────────────

  {
    subject: "math",
    board: "intl-cambridge-igcse",
    metaTitle: "Cambridge IGCSE Maths — 0580 / 0980 help",
    metaDescription: "Free AI tutor for Cambridge IGCSE Mathematics (0580 + 0980). Core and Extended tier, past papers, mark-scheme working.",
    intro: "Cambridge IGCSE Maths (0580 traditional and 0980 9-1 grading) is sat in 130+ countries. The Extended tier is the standard for top universities. Cambridge mark schemes are unusually specific — knowing which words score is half the battle.",
    examFormat: "Paper 1 (Core, 1h, 56 marks, non-calc): short answer. Paper 2 (Extended, 1h 30, 70 marks, non-calc): short answer. Paper 3 (Core, 2h, 104 marks, calc): structured. Paper 4 (Extended, 2h 30, 130 marks, calc): structured.",
    highYieldTopics: [
      "Set notation + Venn diagrams (always asked)",
      "Sequences (linear, quadratic, geometric, special)",
      "Functions: f(x), f⁻¹(x), fg(x), gf(x)",
      "Coordinate geometry: gradient, midpoint, parallel/perpendicular lines",
      "Vectors: column vectors + vector geometry",
      "Probability: tree diagrams + conditional",
      "Statistics: cumulative frequency curves + box plots",
      "Trigonometry: sine rule, cosine rule, area of triangle",
    ],
    commonPitfalls: [
      "Vectors: not stating that two vectors are parallel using a scalar multiple",
      "Functions: f(g(x)) order — read right to left",
      "Cumulative frequency: reading the curve at the wrong y-value",
      "Trigonometric: degrees vs radians (Extended assumes degrees)",
      "Bounds: confusing upper/lower bound subtraction direction",
    ],
    pastPaperSources: [
      "cambridgeinternational.org → Mathematics 0580 past papers",
      "Save My Exams IGCSE section",
      "Znotes — free comprehensive IGCSE notes",
    ],
    studyPlan: "Identify Core vs Extended early. Extended students: solve papers 2 + 4 from last 10 years. Core: papers 1 + 3.",
  },

  {
    subject: "math",
    board: "intl-cambridge-alevel",
    metaTitle: "Cambridge International A Level Maths — 9709",
    metaDescription: "Free AI tutor for Cambridge International A Level Mathematics (9709). P1, P3, S1, S2, M1, M2 paper-specific help.",
    intro: "Cambridge International A Level Maths (9709) is modular. AS = P1 + (S1 or M1). Full A Level = P1 + P3 + 2 application papers. P3 is the hardest paper in the system — half the cohort fails it. Cambridge mark schemes give partial credit generously if working is shown clearly.",
    examFormat: "Each paper is 1h 50, 75 marks. P1 (Pure 1, compulsory), P3 (Pure 3, A Level only), M1 (Mechanics 1), M2 (Mechanics 2), S1 (Statistics 1), S2 (Statistics 2). Pick 2 application papers for full A Level.",
    highYieldTopics: [
      "P1: differentiation + integration of polynomials",
      "P1: trigonometry equations + identities",
      "P3: integration by parts + by substitution",
      "P3: differential equations (separating variables)",
      "P3: numerical methods (iteration)",
      "P3: vectors in 3D + vector equation of a line",
      "S1/S2: hypothesis testing on a normal distribution",
      "M1/M2: kinematics with calculus",
    ],
    commonPitfalls: [
      "P1: forgetting +C on indefinite integrals",
      "P3: integration by parts in wrong order (LATE / ILATE rule)",
      "Vector equations: confusing position vector with direction vector",
      "S1/S2: forgetting continuity correction when normal approximating binomial",
      "M1: forgetting g = 9.8 m/s² in Cambridge papers (some use 9.81)",
    ],
    pastPaperSources: [
      "cambridgeinternational.org → 9709 past papers (Oct/Nov, May/June)",
      "Znotes notes by paper",
      "Maths Aid Hub YouTube",
    ],
    studyPlan: "Master P1 in Year 12. P3 takes the whole of Year 13. Choose your applied papers strategically based on uni course.",
  },

  {
    subject: "math",
    board: "intl-ib-dp",
    metaTitle: "IB Mathematics — AA SL/HL + AI SL/HL help",
    metaDescription: "Free AI tutor for IB Math Analysis & Approaches (AA) and Applications & Interpretation (AI), SL and HL. Internal assessments, exam-style problems.",
    intro: "IB Math has 4 streams: AA SL, AA HL, AI SL, AI HL. Pick wrong and you'll suffer for two years. AA = traditional pure maths (best for engineering/physics). AI = applied + statistics-heavy (best for social sciences). HL = uni-level depth.",
    examFormat: "AA HL: 3 papers (Paper 1 no calculator, Paper 2 calculator, Paper 3 calculator with extended response). Plus a 20-page Internal Assessment (IA) worth 20% of final grade. AA SL: 2 papers + IA. AI: similar structure.",
    highYieldTopics: [
      "AA: differential calculus (chain, product, quotient rule)",
      "AA: integration techniques (substitution, parts)",
      "AA HL: complex numbers (de Moivre, roots of unity)",
      "AA HL: proof by induction",
      "AI: regression + correlation + Pearson's r",
      "AI: chi-squared test (independence + goodness of fit)",
      "Both: vectors in 3D",
      "Both: probability distributions (binomial, normal)",
    ],
    commonPitfalls: [
      "IA: choosing a topic that's too broad — markers want focused exploration",
      "Paper 1 (no calculator): doing arithmetic mistakes from rushing",
      "Vector questions: forgetting to verify two lines are coplanar before finding intersection",
      "Hypothesis tests: confusing null/alternative formulation",
      "Complex numbers: not converting between Cartesian and polar before multiplying",
    ],
    pastPaperSources: [
      "Your school's IB Resource Hub (Managebac, ToddleMe)",
      "RevisionVillage IB Math (the standard prep site)",
      "Past papers from Follett IB Store (paid) or your teacher",
    ],
    studyPlan: "IA: choose topic Year 1, draft Year 2 early. Exams: 6 months of consistent past papers. Use RevisionVillage's exam-style questions sorted by difficulty.",
  },

  {
    subject: "biology",
    board: "intl-ib-dp",
    metaTitle: "IB Biology — SL + HL Diploma help",
    metaDescription: "Free AI tutor for IB Diploma Biology SL and HL. 11 topics, Internal Assessment, command terms, exam-style questions.",
    intro: "IB Biology has 11 topics across SL (135 hours) and HL (240 hours). HL adds molecular biology, neurobiology, plant biology, and animal physiology depth. The Internal Assessment (IA) — an individual experimental investigation — is worth 20% of your final grade.",
    examFormat: "SL: 2 papers (1.5h + 2.25h, 75 marks total). HL: 3 papers (1.25h + 2.25h + 1.25h, 95 marks total). All papers include data-based questions + section A short + section B long.",
    highYieldTopics: [
      "Cell biology: structure, transport, division",
      "Molecular biology: enzymes, DNA, transcription, translation",
      "Genetics: meiosis, inheritance, biotechnology",
      "Ecology: communities, ecosystems, climate change",
      "Evolution and biodiversity (HL adds plant + animal phylogeny)",
      "Human physiology (HL goes deeper on nervous, muscles, kidneys)",
      "HL only: nucleic acids, metabolism, plant biology, neurobiology",
    ],
    commonPitfalls: [
      "Command terms: 'state' (no explanation) vs 'explain' (causation needed) vs 'discuss' (multiple sides)",
      "IA: poor controlled variables documentation",
      "Confusing similar processes (active vs facilitated transport)",
      "Data-based questions: not reading the axes carefully",
      "Hardy-Weinberg: not checking conditions before using",
    ],
    pastPaperSources: [
      "IB Resource Hub via your school",
      "BioNinja (the gold-standard free IB Biology site)",
      "RevisionDojo IB Biology",
    ],
    studyPlan: "Year 1: cover SL core. Year 2: HL extensions + start IA. From March of Year 2: past papers only. IA draft due in early Year 2.",
  },

  {
    subject: "chemistry",
    board: "intl-ib-dp",
    metaTitle: "IB Chemistry — SL + HL Diploma help",
    metaDescription: "Free AI tutor for IB Diploma Chemistry SL and HL. 11 topics + options, IA, periodicity, organic, equilibrium, redox.",
    intro: "IB Chemistry SL covers 11 core topics; HL adds depth on bonding, energetics, kinetics, equilibrium, redox, and organic. The 4 options (A: Materials, B: Biochemistry, C: Energy, D: Medicinal Chem) add another paper-3 worth of content. Choose your option early.",
    examFormat: "SL: 3 papers (45 min, 1.25h, 1.25h, 80 marks). HL: 3 papers (1h, 2.25h, 1.25h, 110 marks). All require Data Booklet (provided).",
    highYieldTopics: [
      "Stoichiometric relationships (mole concept)",
      "Atomic structure + periodicity",
      "Chemical bonding + structure",
      "Energetics + thermochemistry (Hess's law, bond enthalpies)",
      "Kinetics + equilibrium (Le Chatelier, Kc, Kp)",
      "Acids and bases (pH, Ka, Kb, titration curves)",
      "Redox + electrochemistry",
      "Organic chemistry (mechanisms in HL)",
    ],
    commonPitfalls: [
      "Mole calculations: not balancing equations first",
      "Bond enthalpies: signs (bonds breaking = +, bonds forming = −)",
      "pH calculations: confusing strong vs weak acid formulas",
      "Organic mechanisms: missing curly arrows (especially for SN2)",
      "Data Booklet: forgetting it has the equation you need (always check)",
    ],
    pastPaperSources: [
      "School Resource Hub",
      "ScienceShorts on YouTube (best IB Chem channel)",
      "RevisionDojo Chemistry",
    ],
    studyPlan: "Year 1: core SL. Year 2: HL extensions + chosen option + IA. Last 4 months: past papers only.",
  },

  {
    subject: "physics",
    board: "intl-ib-dp",
    metaTitle: "IB Physics — SL + HL Diploma help",
    metaDescription: "Free AI tutor for IB Diploma Physics SL and HL. 8 topics + options, IA, measurement, mechanics, waves, electricity, atomic.",
    intro: "IB Physics has 8 core topics + 4 HL extensions + 1 option (A: Relativity, B: Engineering, C: Imaging, D: Astrophysics). The Data Booklet provides nearly every formula — your job is knowing which one to use, not memorising.",
    examFormat: "SL: 3 papers (45 min MCQ, 1.25h short + extended, 1h options, 95 marks). HL: 3 papers (1h MCQ, 2.25h structured, 1.25h options, 145 marks).",
    highYieldTopics: [
      "Measurement and uncertainties (always in Paper 1)",
      "Mechanics (Newton's laws, momentum, energy)",
      "Thermal physics (specific heat, latent heat, ideal gases)",
      "Waves (interference, diffraction, Doppler)",
      "Electricity + magnetism (DC circuits, fields)",
      "Atomic, nuclear, particle physics",
      "HL: wave phenomena (single slit, polarisation)",
      "HL: fields (gravitational, electric, combined)",
    ],
    commonPitfalls: [
      "Uncertainties: not propagating them through calculations",
      "Mechanics: forgetting to include the system's net force direction",
      "Circuits: confusing series and parallel formulas for resistance",
      "Atomic: confusing decay equations (alpha, beta, gamma differ in what's emitted)",
      "Significant figures: data given to 2 sf, answer given to 5 sf",
    ],
    pastPaperSources: [
      "School Resource Hub",
      "Andrew Dotson + Physics Online for IB Physics walkthroughs",
      "ibphysics.org notes by topic",
    ],
    studyPlan: "Master uncertainties early (Topic 1) — it's in every paper. IA in Year 2. Past papers from January Year 2.",
  },
];

// We focus on FIVE exam systems only. Combos for any other board stay in the
// source above for future reference, but are never generated, linked, or indexed.
const FIVE_BOARDS = new Set([
  "in-cbse",               // CBSE (India)
  "uk-gcse-aqa",           // GCSE (UK)
  "uk-gcse-edexcel",       // GCSE (UK)
  "us-ap",                 // AP (USA)
  "intl-cambridge-igcse",  // Cambridge IGCSE
  "intl-cambridge-alevel", // Cambridge International A-Level
]);

export const LEARN_COMBOS: LearnCombo[] = ALL_LEARN_COMBOS.filter((c) => FIVE_BOARDS.has(c.board));

/**
 * Quick lookup map keyed by `${subject}/${board}`.
 */
export const LEARN_COMBO_MAP: Map<string, LearnCombo> = new Map(
  LEARN_COMBOS.map((c) => [`${c.subject}/${c.board}`, c]),
);

export function findLearnCombo(subject: string, board: string): LearnCombo | undefined {
  return LEARN_COMBO_MAP.get(`${subject}/${board}`);
}
