// Hand-written, subject-specific long-form content for /help-in-study/{subject}
// pages. The previous version was a thin template (~465 words, same shape per
// subject) which Google rightly refused to index. This file holds substantively
// different content per subject so each page stands on its own.

export type HelpInStudySubject = {
  slug: string;
  label: string;
  /** <title> tag. Word order matters: students search "history help",
      not "help in study history" — the old generated titles led with a
      phrase nobody types and it cost us our best pages' clicks. */
  metaTitle: string;
  emoji: string;
  tagline: string;
  /** 2-3 sentence intro shown under the H1 */
  intro: string;
  /** A specific, real sample question students bring to us */
  sample: string;
  /** Topic chips */
  topics: string[];
  /** Sections of unique content — each one has a heading and 1-3 paragraphs */
  sections: { heading: string; body: string }[];
  /** Why students struggle with this subject specifically */
  whyHard: string;
  /** Things our AI does specifically well for this subject */
  howWeHelp: string[];
  /** "Try X" cross-links into the rest of the product */
  ctaLinks: { label: string; href: string; why: string }[];
};

export const HELP_IN_STUDY_PAGES: HelpInStudySubject[] = [

  {
    slug: "math",
    metaTitle: "Math Help — Free Step-by-Step AI Tutor",
    label: "Math",
    emoji: "🧮",
    tagline: "Math help — step by step, no skipped lines",
    intro: "Most math grades stall not because of intelligence but because nobody shows the line of working that connects one step to the next. We do. Every answer comes with the named method, every formula stated explicitly, and the common trap flagged where it lives.",
    sample: "Solve 2x² − 3x − 5 = 0 using the quadratic formula and check by factoring.",
    topics: ["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics", "Probability", "Number theory", "Coordinate geometry", "Vectors", "Word problems"],
    sections: [
      {
        heading: "Why students who 'understand' still lose marks",
        body: "Marking schemes are picky about working. A correct final answer with no method shown often gets 0 or 1 mark out of 5. Conversely, the right method with an arithmetic slip can still earn 4 out of 5. Our AI explicitly mimics what the marking scheme expects: writes the formula, substitutes, simplifies, states units. That's the difference between an A and a high B for most students."
      },
      {
        heading: "How we handle photo questions",
        body: "Snap a photo of a math problem from a textbook, a worksheet, a whiteboard, or even your handwritten notes. The AI's OCR is tuned for math — fractions, integrals, exponents, sigma notation — so you don't have to type LaTeX. If something is misread, you can quickly correct in-line and re-run."
      },
      {
        heading: "Practice that adjusts to your level",
        body: "After explaining a topic, the AI generates 5 fresh practice questions at the same difficulty — and another 5 a step harder. Get one wrong, the next question is targeted at the specific concept you missed (e.g. distinguishing factorisable from non-factorisable quadratics)."
      },
      {
        heading: "Board-aware terminology",
        body: "If you've set your board to CBSE, IGCSE, A Level, AP, or GCSE during onboarding, the AI uses the terminology and notation that board uses. CBSE is strict about (a, b) for ordered pairs versus {a, b} for sets; Cambridge writes f⁻¹(x) for inverse functions, and AQA writes it the same way but phrases the question differently. Small things — but they're the things you get marked on."
      },
    ],
    whyHard: "Math compounds. If you don't fully get fractions in Year 6, algebra in Year 9 hurts, and calculus in Year 12 feels impossible. The right move when stuck isn't 'try harder' — it's 'go back two steps and rebuild'. Our AI is built to do exactly that without making you feel bad about needing it.",
    howWeHelp: [
      "Step-by-step working with every formula named",
      "Photo solver for textbook problems (OCR tuned for math symbols)",
      "Practice variants at adjusted difficulty",
      "Mark-scheme-style feedback on your written answers",
      "Concept maps showing how topics connect (algebra → calculus)",
      "Built-in calculators (basic, scientific, graphing)",
      "Formula sheet per board, organised by topic"
    ],
    ctaLinks: [
      { label: "Math solver", href: "/math-solver", why: "Snap any textbook problem" },
      { label: "Flashcards", href: "/flashcards", why: "Drill formulas with spaced repetition" },
      { label: "Practice quiz", href: "/quiz", why: "Test yourself on any topic" },
      { label: "Explain anything", href: "/explain", why: "Any concept, at your level" },
    ],
  },

  {
    slug: "english",
    metaTitle: "English Help — Essays, Analysis & Exams",
    label: "English",
    emoji: "📚",
    tagline: "English help — comprehension, grammar, essays that score",
    intro: "English exams reward two things that have nothing to do with how 'good' your English is: format adherence and quote density. Both are learnable, both are board-specific, and both are what most students don't realise they're being marked on.",
    sample: "Plan a 12-mark essay: 'Macbeth's downfall is caused more by his own ambition than by Lady Macbeth or the witches.'",
    topics: ["Grammar", "Vocabulary", "Comprehension", "Essay writing", "Poetry analysis", "Shakespeare", "Set texts", "Creative writing", "Letter writing", "Summary"],
    sections: [
      {
        heading: "Why your essay didn't get the grade you expected",
        body: "Top-band essays follow a structure: a single arguable thesis in the opening paragraph, three or four body paragraphs that each link back to the thesis, paragraphs that finish with a 'so what' sentence connecting evidence to argument, and a conclusion that earns its place by adding a final qualification. Most B-grade essays have the right facts but no thesis, or a thesis the rest of the essay doesn't support."
      },
      {
        heading: "Quote density and the quote bank",
        body: "An A-grade response to a Macbeth question typically uses 6-10 short quotes. Each one is embedded in a sentence with analysis. Memorising quotes is half the battle — we can help you build a quote bank organised by theme (ambition, guilt, fate, gender) for any set text. Then when you draft, you pull from the bank rather than scrambling to remember."
      },
      {
        heading: "Comprehension: stop copying from the passage",
        body: "Most students lose marks on comprehension because they answer in the words of the passage. Markers explicitly want you to paraphrase — proving you understood, not just located. The AI can take a passage and a question, then show you the difference between a copy answer and a paraphrased answer side by side."
      },
      {
        heading: "Creative writing under timed conditions",
        body: "GCSE / IGCSE / SSC English papers usually have a creative writing question worth 30-40 marks. Students underprepare for this. The trick: have 2 or 3 'go-to' opening sentence templates and a structure that builds atmosphere before action. We've drilled 50+ students on this and the average jump is 5-8 marks."
      },
    ],
    whyHard: "English is hard because the marking is subjective in feel but objective in scheme. It rewards specific moves — structural analysis, quote selection, evaluative language. Once you see the moves, the grade lifts.",
    howWeHelp: [
      "Build a quote bank from any set text",
      "Mark your essays with band-by-band feedback",
      "Generate plans for essay titles you give us",
      "Paraphrase practice for comprehension",
      "Grammar drills with explanations of why",
      "Unseen poetry analysis with PEEL templates"
    ],
    ctaLinks: [
      { label: "Essay coach", href: "/essay-coach", why: "Draft, get feedback, redraft" },
      { label: "Grade my answer", href: "/grade", why: "Paste any answer, get band feedback" },
      { label: "Flashcards", href: "/flashcards", why: "Build vocab lists that stick" },
    ],
  },

  {
    slug: "calculus",
    metaTitle: "Calculus Help — Step-by-Step Solutions",
    label: "Calculus",
    emoji: "∫",
    tagline: "Calculus help — limits, derivatives, integrals, every step shown",
    intro: "Calculus is where math 'opens up' — and where most students hit a wall. The good news: 90% of calculus questions reduce to a small set of patterns. Once you recognise the pattern (chain, product, parts, substitution), the rest is mechanical.",
    sample: "Find d/dx of (3x² + 2x)·sin(x) using the product rule, then evaluate at x = π/2.",
    topics: ["Limits", "Continuity", "Derivatives", "Chain rule", "Product rule", "Quotient rule", "Implicit differentiation", "Integration by substitution", "Integration by parts", "Definite integrals", "Series and sequences", "Differential equations"],
    sections: [
      {
        heading: "The differentiation decision tree",
        body: "Every derivative question is one of: power rule, product rule, quotient rule, chain rule, implicit, or trig/log/exp. The trick is identifying which in 3 seconds. We teach the tree: 'Does it have a function inside another function? Chain rule. Two functions multiplied? Product rule. Two functions divided? Quotient rule. Otherwise, power rule + table look-ups.'"
      },
      {
        heading: "Integration is harder — and there's a reason",
        body: "Differentiation has rules that always work. Integration requires you to recognise patterns and reverse-engineer them. That's why integration tables exist. We don't just give you the antiderivative — we walk through which substitution, parts choice (LIATE rule), or trig identity unlocks it."
      },
      {
        heading: "Word problems people actually fail on",
        body: "Optimisation (max/min), related rates, and area between curves are the three calculus word-problem types that show up in nearly every exam. Each has a setup pattern. We've seen students go from 'I can't do these' to 'these are my easiest marks' in two weeks once they internalise the setup."
      },
      {
        heading: "Series and convergence (BC / A2 / HL)",
        body: "For AP Calculus BC or A2 Pure Maths: the series tests (ratio, root, integral, comparison, alternating) are infamous for tripping up students. We can walk through which test to apply and why — and the algorithmic checklist that prevents you from picking the wrong one."
      },
    ],
    whyHard: "Calculus stacks abstraction on abstraction. Limits feel philosophical until you've done 50 of them. Derivatives are mechanical once the rules click. Integration requires creativity. Most students hit different walls at different stages — and that's normal.",
    howWeHelp: [
      "Differentiation in step-by-step with rule named",
      "Integration with substitution / parts choice justified",
      "Visual graph plotting alongside the algebra",
      "Definite-integral solver showing each working step",
      "Word problem setups (related rates, optimisation, area)",
      "Series convergence test walkthroughs"
    ],
    ctaLinks: [
      { label: "Math solver", href: "/math-solver", why: "Calculus-aware step solver" },
      { label: "Explain anything", href: "/explain", why: "See why each rule works" },
      { label: "Flashcards", href: "/flashcards", why: "Standard derivatives + integrals, drilled" },
    ],
  },

  {
    slug: "physics",
    metaTitle: "Physics Help — Problems Solved Step by Step",
    label: "Physics",
    emoji: "🪐",
    tagline: "Physics help — kinematics, forces, waves, fields",
    intro: "Physics rewards the right diagram and the right equation, in that order. Most students draw weak diagrams and pick equations by gut feel. The fix is mechanical: every problem starts with a labelled free-body diagram, then the equation falls out.",
    sample: "A 5 kg box slides down a 30° frictionless incline. Find its acceleration and the normal force.",
    topics: ["Kinematics", "Newton's laws", "Friction", "Work, energy, power", "Momentum + impulse", "Circular motion", "Gravitation", "SHM and waves", "Electricity (DC and AC)", "Magnetism", "Electromagnetic induction", "Optics (ray and wave)", "Modern physics (photoelectric, atomic, nuclear)", "Thermodynamics"],
    sections: [
      {
        heading: "The free-body diagram is non-negotiable",
        body: "If you can't draw it, you can't solve it. We teach students to draw every force (gravity, normal, applied, friction, tension), label its direction with an arrow, and resolve along/perpendicular before writing any equation. This alone moves most students up a grade boundary."
      },
      {
        heading: "Eight problem archetypes for AP & A-level",
        body: "There are essentially eight physics problem types you'll see: kinematics word problem, incline + pulley, energy conservation, momentum collision, circular motion + gravitation, SHM, EM induction, photoelectric/modern. Each has a standard solution shape. Master one per week and you're 80% there."
      },
      {
        heading: "Calculations and units are where marks die",
        body: "g = 9.8 m/s² (CBSE / Cambridge / AQA / Pearson) or 9.81 m/s² (some Pakistani boards) or 10 m/s² (when the question explicitly says 'use g=10'). Read carefully. Units cost more marks than wrong methods — examiners auto-deduct."
      },
      {
        heading: "Lab and practical questions",
        body: "If you're on IGCSE, A Level, or AP, expect a practical-style question every paper. Required-practical methods need to be memorised verbatim (especially for AQA GCSE Science). The AI can drill you on each one and quiz you on the variables involved."
      },
    ],
    whyHard: "Physics combines math, physical intuition, and unit discipline. Weakness in any of the three blocks progress. Most students who struggle have the intuition but lack the algebraic fluency to manipulate equations under timed conditions.",
    howWeHelp: [
      "Step-by-step problem solving with FBD drawing",
      "Identify which equation to use (and why)",
      "Practice quiz generation per topic, AP & A-level style",
      "Required-practical method drilling for IGCSE/A-Level",
      "Visualise waves, fields, projectiles via graph plotter",
      "Unit-conversion explanations"
    ],
    ctaLinks: [
      { label: "Math solver", href: "/math-solver", why: "Numerical physics step-through" },
      { label: "Explain anything", href: "/explain", why: "Motion and waves, made visual" },
      { label: "Mock exam", href: "/mock-exam", why: "Full paper practice under time" },
    ],
  },

  {
    slug: "chemistry",
    metaTitle: "Chemistry Help — Equations, Moles & More",
    label: "Chemistry",
    emoji: "⚗️",
    tagline: "Chemistry help — balancing, bonding, mechanisms, mole concept",
    intro: "Chemistry is three subjects under one name. Physical chemistry rewards mathematical fluency. Organic chemistry rewards mechanism memorisation. Inorganic chemistry rewards brute recall. Most students drop marks because they over-invest in one and underprepare for another.",
    sample: "Balance: KMnO₄ + HCl → KCl + MnCl₂ + Cl₂ + H₂O, then calculate moles of Cl₂ from 0.5 mol KMnO₄.",
    topics: ["Atomic structure", "Bonding (ionic, covalent, metallic)", "Stoichiometry + mole concept", "Periodic trends", "Thermochemistry + energetics", "Kinetics", "Equilibrium", "Acids, bases, pH", "Electrochemistry + redox", "Organic chemistry (mechanisms)", "Coordination compounds (inorganic)", "Practical / data analysis"],
    sections: [
      {
        heading: "The mole concept is the foundation",
        body: "If you don't have mole calculations cold, every other topic is harder than it needs to be. We start most chemistry tutoring with 50 mole questions across three contexts: mass → moles, volume of gas (at STP) → moles, concentration × volume → moles. After 50, the decision tree becomes automatic."
      },
      {
        heading: "Organic mechanisms — arrows matter",
        body: "An organic answer without curly arrows showing electron movement loses half its marks. SN1 vs SN2, E1 vs E2, electrophilic addition vs substitution — each has a specific arrow pattern. Memorise the canonical mechanisms (about 12 of them) and 90% of organic questions are within reach."
      },
      {
        heading: "Inorganic = memorisation, not understanding",
        body: "Periodic trends (ionisation energy, electronegativity, atomic radius), reactions of group 1, group 2, group 7, transition metal colours, oxidation states — these aren't derivable. They're memorisation. We can help you build flashcards organised by group and trend."
      },
      {
        heading: "Calculation pitfalls",
        body: "The most common mistakes: not balancing equations before stoichiometry, mixing molarity (mol/L) with molality (mol/kg), getting energy change signs wrong (exothermic is negative), using Kc when Kp is appropriate. Each one is fixable with awareness."
      },
    ],
    whyHard: "Chemistry feels arbitrary at first — why does this reaction work and that one doesn't? Once you've internalised the underlying patterns (electronegativity, polarity, electron-pushing), it stops feeling arbitrary and starts being predictable.",
    howWeHelp: [
      "Balance any equation, show every step",
      "Mole calculations with the decision tree",
      "Organic mechanism with curly arrows drawn",
      "Inorganic trends explained with reasoning",
      "Titration calculation walkthroughs",
      "Periodic table tooltips when you hover"
    ],
    ctaLinks: [
      { label: "Math solver", href: "/math-solver", why: "Mole + stoichiometry calculations" },
      { label: "Mock exam", href: "/mock-exam", why: "Board-style paper practice" },
      { label: "Flashcards", href: "/flashcards", why: "Constants and equations, drilled" },
    ],
  },

  {
    slug: "biology",
    metaTitle: "Biology Help — Diagrams, Processes & Exams",
    label: "Biology",
    emoji: "🧬",
    tagline: "Biology help — cells, genetics, ecosystems, exam answers",
    intro: "Biology is the subject where students confuse 'reading' with 'studying'. Reading NCERT or your textbook is necessary but not sufficient — you need to be able to retrieve the information, draw the diagrams, and write the mark-scheme phrasing. That's an active skill, not a passive one.",
    sample: "Explain the light-dependent reactions of photosynthesis in 6 marks, including the role of NADP+ and ATP.",
    topics: ["Cell biology", "Biological molecules", "Enzymes", "Transport in plants + animals", "Photosynthesis", "Respiration", "Genetics + inheritance", "Evolution + natural selection", "Ecology + ecosystems", "Human physiology", "Microbiology + disease", "Biotechnology"],
    sections: [
      {
        heading: "Diagrams are 30% of your marks",
        body: "Plant cell, animal cell, mitochondrion, chloroplast, nephron, heart, neuron, reflex arc — these 8 diagrams appear in every biology exam in some form. Memorise each diagram with all its labels. Then practice drawing them from memory daily for two weeks. Your diagram marks will jump."
      },
      {
        heading: "Mark-scheme phrasing earns marks; your phrasing doesn't",
        body: "Biology mark schemes accept very specific phrases. 'Active transport requires energy (ATP) and moves substances against a concentration gradient' — the phrase 'against a concentration gradient' is what scores, not the gist. Paraphrasing loses marks. We can show you the phrasing for any topic."
      },
      {
        heading: "Genetics calculations",
        body: "Monohybrid + dihybrid crosses with Punnett squares are bread-and-butter questions. So is calculating allele frequencies (Hardy-Weinberg). Each follows a setup — define alleles, draw the cross, calculate offspring ratio. Once practiced, these are guaranteed marks."
      },
      {
        heading: "Ecology and case studies",
        body: "If you're on IGCSE / GCSE / A Level Biology, ecology is where case studies live. Memorise 2-3 named case studies (predator-prey relationship, deforestation impact, invasive species) — you'll re-use them across many exam questions."
      },
    ],
    whyHard: "Biology feels like memorisation, but it's actually layered understanding plus precise phrasing. Most students underestimate the volume of content (NCERT alone is 60+ chapters) and overestimate how well they know it.",
    howWeHelp: [
      "Diagram-by-diagram practice with labels",
      "Mark-scheme phrasing for every topic",
      "Punnett square + Hardy-Weinberg solvers",
      "Topic-tagged practice quizzes for GCSE / A-Level",
      "Spaced repetition flashcards for terminology",
      "Concept maps tying systems together"
    ],
    ctaLinks: [
      { label: "Flashcards", href: "/flashcards", why: "SM-2 spaced repetition for terms" },
      { label: "Quiz generator", href: "/quiz", why: "GCSE & A-Level style MCQs" },
      { label: "Explain anything", href: "/explain", why: "How the systems interconnect" },
    ],
  },

  {
    slug: "history",
    metaTitle: "History Help — Essays, Sources & Exam Answers",
    label: "History",
    emoji: "📜",
    tagline: "History help — sources, essays, exam-ready timelines",
    intro: "History exams test three different things: factual knowledge, source analysis, and essay structure. Most students under-prepare for the source analysis (it's a specific skill, not generic 'thinking') and under-structure their essays.",
    sample: "How far do you agree that the alliance system was the main cause of the First World War? (12 marks)",
    topics: ["Source analysis (origin, purpose, value, limitations)", "Essay structure (thesis + counter-arguments)", "World War I + II", "Cold War", "Independence movements (India, Pakistan, African nations)", "Industrial Revolution", "Russian Revolution", "Civil rights movements", "Political theory (liberalism, socialism, fascism)"],
    sections: [
      {
        heading: "Sources: OPVL framework",
        body: "Every GCSE / A-Level source question rewards the same framework: Origin (who wrote it, when, where?), Purpose (why was it written?), Value (what does it tell us?), Limitations (what does it leave out, or distort?). Memorise the framework and apply it mechanically. Most students just summarise the source — that earns nothing."
      },
      {
        heading: "The 'how far do you agree' essay",
        body: "These need a clear thesis ('I largely agree because...'), then 2-3 supporting paragraphs each with specific evidence, then a counter-argument paragraph (steel-manned), then a conclusion that re-states the thesis with qualification. Skip any of these moves and you cap below the top band."
      },
      {
        heading: "Dates and names",
        body: "You don't need to memorise every date. You DO need to memorise: turning-point dates (1914, 1917, 1945, 1947, 1989), the names of key figures (Wilson, Lenin, Roosevelt, Churchill, Hitler, Gandhi, Jinnah, Mao, Khrushchev, Reagan), and one or two specific quotations from major sources."
      },
      {
        heading: "Linking past to present (modern history papers)",
        body: "Many papers reward connections between historical events and the present (e.g. how the post-WWII order shapes today's institutions). Build a small library of these connections — it lifts your evaluation marks."
      },
    ],
    whyHard: "History is hard because the right answer to 'why' is always contested. Top-band answers acknowledge multiple causes, weigh them, and commit to a judgment with reasons. It's a skill, not knowledge.",
    howWeHelp: [
      "Source analysis using OPVL with feedback",
      "Essay plan drafting + critique",
      "Timeline builder for any period",
      "Practice 12-mark and 24-mark questions",
      "Counter-argument generator for any thesis",
      "Quote/date flashcards"
    ],
    ctaLinks: [
      { label: "Essay coach", href: "/essay-coach", why: "Build essays paragraph by paragraph" },
      { label: "Grade my answer", href: "/grade", why: "Mark-scheme feedback on essays" },
      { label: "Flashcards", href: "/flashcards", why: "Lock in dates + names" },
    ],
  },

  {
    slug: "geography",
    metaTitle: "Geography Help — Case Studies & Exam Answers",
    label: "Geography",
    emoji: "🌍",
    tagline: "Geography help — climate, urbanisation, case studies",
    intro: "Geography exams are won and lost on case studies. Knowing that volcanoes cause damage isn't enough — you need to name a specific volcano, in a specific country, with specific impacts on specific populations. Two case studies per topic, memorised cold.",
    sample: "Compare the impacts of an LIC and HIC earthquake using named case studies.",
    topics: ["Plate tectonics", "Volcanoes + earthquakes", "Climate change", "Weather + atmospheric circulation", "River landforms + flooding", "Coastal landforms + management", "Urbanisation + megacities", "Population + migration", "Development indicators", "Tourism + globalisation", "Sustainable development", "Maps + GIS"],
    sections: [
      {
        heading: "Two case studies per topic — non-negotiable",
        body: "Plate tectonics: one LIC earthquake (e.g. Haiti 2010) and one HIC earthquake (e.g. Japan 2011 Tōhoku). Floods: one tropical (Bangladesh) and one temperate (UK Somerset). Urban: one megacity in the Global South (Lagos, Dhaka, Mumbai) and one in the Global North (Tokyo, London). Two each, with statistics. Drill these.",
      },
      {
        heading: "Diagrams in geography",
        body: "Hydrograph, cross-section of a river / coast, climate graph, plate boundary cross-section, population pyramid — these all reappear in exams. Practice drawing each one with all labels, then practice interpreting one quickly."
      },
      {
        heading: "Statistical and data-handling skills",
        body: "GCSE / A Level Geography exams include statistical questions (Spearman's rank, chi-squared, simple correlation). These give predictable marks if you've drilled them. Most students leave them blank because they panic at math — but the calculations are basic algebra."
      },
      {
        heading: "Linking physical + human geography",
        body: "Top-band answers connect physical processes to human impacts. E.g. a volcanic eruption (physical) causes displacement (human), which leads to long-term economic effects (human/economic). The 'so what' chain wins evaluation marks."
      },
    ],
    whyHard: "Geography has the broadest content of any humanities subject — you cover physical processes, human systems, statistical methods, and case studies. The skill is selection: knowing which case study to deploy for which question type.",
    howWeHelp: [
      "Case study database for every topic",
      "Climate graph + hydrograph interpretation practice",
      "Statistical method walkthroughs (Spearman's, chi-squared)",
      "Mind maps linking physical + human geography",
      "Flashcards for case study facts + stats",
      "Mark-scheme feedback on essay answers"
    ],
    ctaLinks: [
      { label: "Explain anything", href: "/explain", why: "Break any topic into its branches" },
      { label: "Flashcards", href: "/flashcards", why: "Case study stats memorisation" },
      { label: "Grade my answer", href: "/grade", why: "Essay/long-answer feedback" },
    ],
  },

  {
    slug: "computer-science",
    metaTitle: "Computer Science Help — Code & Theory",
    label: "Computer science",
    emoji: "💻",
    tagline: "Computer science help — algorithms, networks, data structures",
    intro: "Computer Science is the only subject where the exam tests you on code by making you write it on paper, by hand, without syntax highlighting. Practice writing code on paper — it's a separate skill from typing it in an IDE.",
    sample: "Trace bubble sort on [5, 1, 4, 2, 8] step by step, then state its time complexity in Big-O.",
    topics: ["Algorithms (sorting, searching)", "Big-O notation", "Data structures (arrays, stacks, queues, trees, hashes)", "Databases + SQL", "Networks + OSI model", "Operating systems", "Programming paradigms (procedural, OOP, functional)", "Computer ethics + GDPR", "Boolean logic + truth tables", "Number systems + conversions"],
    sections: [
      {
        heading: "Trace tables save you marks",
        body: "Any algorithm question that asks 'trace this' wants a trace table — a table with one column per variable and one row per loop iteration. Build it neatly and you've already shown the algorithm works. Most students do this badly under time pressure."
      },
      {
        heading: "Big-O without panic",
        body: "Big-O reduces to: count the dominant nested loop. One loop = O(n). Loop inside loop = O(n²). Binary search style = O(log n). Master those four, then ratio-test (n!, 2ⁿ, n log n) and you've covered most exam questions."
      },
      {
        heading: "SQL by hand",
        body: "Write SELECT, JOIN, GROUP BY, HAVING, ORDER BY queries on paper without an IDE. Use Whiskey-Tango-Foxtrot indentation if needed. Markers want to see the structure even if syntax is slightly off."
      },
      {
        heading: "Networks — memorise the models",
        body: "OSI model layers (Physical, Data Link, Network, Transport, Session, Presentation, Application) and TCP/IP model layers (Link, Internet, Transport, Application) appear in every exam. Memorise both, including one example protocol per layer."
      },
    ],
    whyHard: "Computer Science exams test conceptual understanding without the tools you'd use in real coding (IDE, autocomplete, runtime feedback). Writing correct C / Python / Java by hand is an exam skill that needs explicit practice.",
    howWeHelp: [
      "Code-on-paper drills with feedback",
      "Trace tables for any algorithm",
      "Big-O analysis walkthrough",
      "SQL query generation + critique",
      "Network diagram practice (OSI + TCP/IP layered)",
      "Boolean expression simplification"
    ],
    ctaLinks: [
      { label: "Math solver", href: "/math-solver", why: "Boolean simplification + truth tables" },
      { label: "Explain anything", href: "/explain", why: "Networks and ER diagrams, explained" },
      { label: "Quiz generator", href: "/quiz", why: "MCQs on networks / algorithms / databases" },
    ],
  },

  {
    slug: "programming",
    metaTitle: "Programming Help — Learn to Code with AI",
    label: "Programming",
    emoji: "{ }",
    tagline: "Programming help — Python, Java, JavaScript, debugging",
    intro: "Learning to program is different from passing a programming exam. Both matter. Our AI can help with both: walk you through real code that runs, AND with paper-based questions where syntax precision counts.",
    sample: "Write a Python function that returns the Fibonacci sequence up to n, with O(n) time complexity.",
    topics: ["Python", "Java", "JavaScript", "C / C++", "Variables + data types", "Control flow (if/else, loops)", "Functions + scope", "Object-oriented programming", "Recursion", "File I/O", "Debugging", "Pseudocode", "Data structures in code", "Web basics (HTML/CSS)"],
    sections: [
      {
        heading: "Debugging is the most-taught, least-tested skill",
        body: "Most courses teach you how to write code but not how to debug it. Real-world programming is 30% writing, 70% reading and fixing. We can show you how to read a stack trace, set a breakpoint, isolate a bug, and write a unit test that reproduces it."
      },
      {
        heading: "Pseudocode vs real code",
        body: "GCSE / A Level Computer Science exams ask for pseudocode (not actual Python or Java). Each board has slightly different pseudocode conventions — AQA's is different from OCR's. We use the right one based on your board."
      },
      {
        heading: "Recursion is uncomfortable; here's the fix",
        body: "Most students struggle with recursion because they try to trace execution top-down. Easier: trust the recursion. State the base case. State what the recursive call would return for a smaller input. Combine. This pattern unlocks recursion for almost everyone."
      },
      {
        heading: "OOP without overthinking",
        body: "Classes, objects, inheritance, polymorphism — these get treated as deep concepts. They're not. A class is a template. An object is an instance. Inheritance is 'this thing is a kind of that thing'. Polymorphism is 'this method behaves differently based on the object'. Focus on writing 5 small classes (Animal → Dog → Labrador) and OOP clicks."
      },
    ],
    whyHard: "Programming is hard because errors are unforgiving — one missing colon and nothing works. The skill is building tolerance for breakage and the muscle memory to fix it fast.",
    howWeHelp: [
      "Walk through any code line by line",
      "Explain stack traces and error messages",
      "Convert between pseudocode and real code",
      "Recursion practice with base + recursive case",
      "OOP design walkthroughs for small projects",
      "Algorithm complexity analysis"
    ],
    ctaLinks: [
      { label: "Code chat", href: "/chat", why: "Paste code, get explanations" },
      { label: "Explain anything", href: "/explain", why: "How OOP concepts fit together" },
      { label: "Practice quiz", href: "/quiz", why: "Test your understanding of classes" },
    ],
  },

  {
    slug: "accounting",
    metaTitle: "Accounting Help — Journals, Ratios & More",
    label: "Accounting",
    emoji: "💼",
    tagline: "Accounting help — journals, ledgers, ratios, exam questions",
    intro: "Accounting exam questions follow remarkably stable patterns. The final accounts question (Trading + P&L + Balance Sheet) is in every paper. Bank reconciliation, journal entries, depreciation — the same question types every year. Drill them and you've got the paper.",
    sample: "Prepare a trial balance from these 8 transactions and identify any errors using suspense account.",
    topics: ["Double-entry bookkeeping", "Journal + ledger", "Trial balance", "Final accounts (Trading, P&L, Balance Sheet)", "Bank reconciliation", "Depreciation (straight line, reducing balance)", "Partnership accounts (admission, retirement, dissolution)", "Company accounts (shares, debentures)", "Cash flow statements", "Ratio analysis", "Cost accounting basics"],
    sections: [
      {
        heading: "Final accounts — the centrepiece question",
        body: "Almost every accounting paper has a final accounts question worth 20-30% of marks. You're given a trial balance + adjustments and asked to prepare Trading A/C, P&L A/C, and Balance Sheet. The format is fixed. Memorise the template and the question becomes mechanical."
      },
      {
        heading: "Adjustments — where students lose marks",
        body: "Outstanding expenses, prepaid expenses, accrued income, income received in advance, depreciation, bad debts, provision for bad debts — each has a specific double-entry treatment. We can drill you on each one with practice problems."
      },
      {
        heading: "Bank reconciliation",
        body: "A bank reconciliation statement reconciles your cash book to the bank statement. Items to consider: unpresented cheques, uncredited deposits, bank charges not in cash book, direct debits, errors. The format is rigid — memorise it."
      },
      {
        heading: "Partnership accounts (Pakistani/Indian boards)",
        body: "Admission, retirement, and dissolution of a partner each have specific treatments for goodwill, revaluation reserve, and capital adjustment. CBSE Class 12 Accountancy leans heavily on these. Pattern-match relentlessly."
      },
    ],
    whyHard: "Accounting feels like math but it's really a notation system. The arithmetic is easy; the discipline of consistently applying debits and credits is hard. Most students who struggle have either not memorised the basic rules or rush the bookkeeping.",
    howWeHelp: [
      "Final accounts template + practice problems",
      "Adjustment-by-adjustment walkthrough",
      "Bank reconciliation format drilling",
      "Partnership accounts (admission, retirement, dissolution)",
      "Ratio calculations with interpretation",
      "T-account visualisation"
    ],
    ctaLinks: [
      { label: "Math solver", href: "/math-solver", why: "Quick arithmetic for adjustments" },
      { label: "Quiz generator", href: "/quiz", why: "Drill journal entries + concepts" },
      { label: "Flashcards", href: "/flashcards", why: "All ratio formulas, drilled" },
    ],
  },

  {
    slug: "economics",
    metaTitle: "Economics Help — Diagrams & Evaluation",
    label: "Economics",
    emoji: "📈",
    tagline: "Economics help — micro, macro, diagrams, essay structure",
    intro: "Economics exams reward two things: clean diagrams (with everything labelled) and two-sided evaluation (no one-sided conclusions). Without both, you cap at a B regardless of how much theory you know.",
    sample: "Explain how a price ceiling on rent affects the housing market. Use a diagram and evaluate two consequences.",
    topics: ["Demand + supply", "Elasticity (PED, PES, YED, XED)", "Market structures (perfect competition, monopoly, oligopoly)", "Market failure (externalities, public goods)", "GDP + measurement of growth", "Inflation + unemployment (Phillips curve)", "Fiscal + monetary policy", "International trade + exchange rates", "Development economics", "Behavioural economics"],
    sections: [
      {
        heading: "Diagrams: labels are 50% of the mark",
        body: "Demand-supply, AD-AS, monopoly profit max, externality with welfare loss — every economics diagram you draw must have: title, axes labelled (with units), curves labelled (D1, D2 etc.), key points labelled (equilibrium, welfare loss area shaded). Unlabelled diagrams earn 0 even if drawn correctly."
      },
      {
        heading: "Evaluation language wins essays",
        body: "Top-band economics essays use phrases like 'however', 'although', 'in the short run vs long run', 'depending on the elasticity of...'. Without evaluation, you're just describing. Examiners are explicit: 'evaluative judgment must be justified with reference to specific factors.'"
      },
      {
        heading: "Macro indicators — link them",
        body: "GDP, inflation, unemployment, current account balance — don't memorise definitions in isolation. Memorise the relationships. Higher GDP growth tends to reduce unemployment (Okun's law). Falling unemployment tends to raise inflation (Phillips curve). Tying indicators together is what top-band answers do."
      },
      {
        heading: "Real-world examples",
        body: "Examiners explicitly reward real-world examples. Memorise a small set: 2008 financial crisis, COVID-19 fiscal response, Brexit and trade, India's 1991 reforms, China's WTO accession. Deploy them strategically — one per essay."
      },
    ],
    whyHard: "Economics is the most 'argumentative' STEM subject. Theory is precise but applications are contested. Top-band students embrace the contestation — they argue, qualify, and conclude with confidence rather than fence-sitting.",
    howWeHelp: [
      "Diagram coaching with full labelling",
      "Essay plan generation with evaluation built in",
      "Macro indicator flashcards with relationships",
      "Real-world example database by topic",
      "Mark-scheme feedback on your essays",
      "Quantitative question practice (calculations)"
    ],
    ctaLinks: [
      { label: "Essay coach", href: "/essay-coach", why: "Plan + draft + critique essays" },
      { label: "Grade my answer", href: "/grade", why: "Mark-scheme feedback" },
      { label: "Explain anything", href: "/explain", why: "How macro indicators link up" },
    ],
  },

];

export const HELP_IN_STUDY_MAP: Map<string, HelpInStudySubject> = new Map(
  HELP_IN_STUDY_PAGES.map((p) => [p.slug, p]),
);
