# Research — AI Study Helper

A condensed reference for product decisions. Pulled from public reporting on EdTech adoption (UNESCO 2024 GEM report on tech in education, OECD PISA 2022, EEF UK studies on retrieval practice + spaced repetition, Pew Research 2024 on student AI use, multiple board syllabus PDFs). Numbers are directional, not citations.

---

## 1. Who actually struggles with study, and how

| Stage | Typical age | Top study pains | What AI realistically helps with |
|---|---|---|---|
| **Lower primary** (Grade 3–5) | 8–11 | Reading comprehension, vocabulary, simple math word problems, short attention span. Parent does most of the "study". | Read-aloud explanations, picture-based prompts, "explain like I'm 9", instant homework help that a parent can verify. |
| **Upper primary** (Grade 6–8) | 11–14 | Switching from one teacher to many subjects; first time facing exams; foundational gaps in math/science compound here. | Concept simplification, worked examples, diagnostic quizzes that find gaps, flashcards for vocabulary/formulas. |
| **Secondary / O-Level / Matric** (Grade 9–10) | 14–16 | Board exam pressure, dense textbooks, language-of-instruction issues (English-medium in non-English countries). | Past-paper practice, syllabus-aligned summaries, mark-scheme-style answer drills, language scaffolding. |
| **Higher secondary / A-Level / FSc / 12th** (Grade 11–12) | 16–18 | Heavy syllabus, university entrance exams (SAT/JAMB/JEE/UKMT/A-Level), career stakes. | Topic-focused past papers, derivation walkthroughs, cross-board practice (CBSE → JEE-aligned, etc.). |
| **Undergraduate** | 18–22 | Lecture notes are too dense or too sparse; reading lists are huge; assessment is essay/lab/project-based. | Lecture-PDF summarization, "explain this paper in plain English", question-bank generation from slides, citation-anchored Q&A. |
| **Postgraduate / professional** | 22+ | Specialist literature, time-pressured exams (medical boards, bar, CFA, ACCA), self-pacing. | Spaced-repetition decks for high-stakes recall, long-document summarization, mock-exam generation. |

---

## 2. Why "upload a PDF/photo and explain it" is the killer feature

What students actually do today, observed in tutoring forums and TikTok study communities:
- Snap a photo of a textbook page and ask ChatGPT, Gemini, or Photomath to explain.
- Drop a lecture-slide PDF into Claude/ChatGPT and ask for a summary or quiz.
- Upload a marked exam paper and ask "what did I do wrong here?"

**Common failure modes today:**
1. **OCR wrong on handwriting / equations** → AI hallucinates the question, gives wrong answer.
2. **Explanation pitched at the wrong level** → 9-year-old gets a college lecture, college student gets a kindergarten analogy.
3. **AI answers a different question than the one in the image** because the layout (multiple sub-questions on one page) confuses it.
4. **No memory** — student has to re-paste their grade/board every time.
5. **Off-syllabus terminology** — explanation uses US units to a UK student doing GCSE, or uses CBSE terminology to a Cambridge student.
6. **One-shot only** — student cannot quickly turn an explanation into 5 practice questions.

**How this app fixes each:**
1. Gemini 2.5 Flash multimodal handles printed text + simple equations natively. We add a "did I read this right?" preview step in v2 for handwriting.
2. Profile (age + grade + curriculum) is in the system prompt on every call — explanations always pitched right.
3. Prompt instructs the model to identify the specific question being asked when multiple are visible.
4. Profile persists in localStorage / Supabase across sessions.
5. Curriculum-aware system prompt: "this is a CBSE Class 9 student" → AI uses CBSE terminology and units.
6. One-tap "make a quiz from this" / "make flashcards from this" buttons after every explanation.

---

## 3. Curriculum landscape — what we must support

| Region | Boards / Frameworks | Notes |
|---|---|---|
| **Pakistan** | Federal (FBISE), Punjab, Sindh, KPK, Balochistan, AKU-EB, Aga Khan, Cambridge IGCSE/O/A, IB | Heavy private-school overlap with Cambridge. Matric/FSc terminology dominates state schools. |
| **India** | CBSE, ICSE/ISC, NIOS, all 30+ State boards (Maharashtra, Tamil Nadu, UP, etc.), JEE/NEET prep | CBSE is most-searched curriculum globally on Google. Hindi-medium ↔ English-medium toggle critical. |
| **UK** | National Curriculum (KS1–KS5), GCSE, IGCSE (Cambridge + Edexcel), A Level (AQA, OCR, Edexcel, WJEC, CCEA), Scottish (Nat 5, Higher, Adv Higher), BTEC | Exam-board variation matters enormously — past papers are board-specific. |
| **USA** | Common Core (most states), Texas TEKS, California CCSS, AP (College Board), SAT/ACT prep, IB | Curriculum varies by state; AP is national. 50-state breakout is overkill — group as "US Common Core" + AP + state-specific only on request. |
| **Canada** | Ontario, BC, Quebec MELS, Alberta — provincial | Group as "Canadian (provincial)". |
| **Australia** | Australian Curriculum (ACARA), VCE (Victoria), HSC (NSW), QCE (Queensland), WACE (WA), ATAR | National framework + state senior certificates. |
| **New Zealand** | NZ Curriculum (Years 1–13), NCEA (Levels 1–3), Cambridge International | NCEA is unique — credit-based not exam-only. |
| **GCC** | UAE (MoE national curriculum), Saudi Vision 2030 curriculum, Qatar, Kuwait, Oman, Bahrain | Most private schools follow CBSE/Cambridge/British/American. Native curricula increasingly important. |
| **Wider Middle East** | Egypt Thanaweya Amma, Jordan Tawjihi, Iran national, Iraq | Often dual-track with Cambridge in private schools. |
| **EU — UK already covered above** | | |
| **Germany** | Abitur (varies by Bundesland), Realschulabschluss, Hauptschulabschluss | 16 states, slight variations. |
| **France** | Programme scolaire (École, Collège, Lycée), Baccalauréat (Général / Technologique / Pro) | National. |
| **Italy** | Indicazioni Nazionali, Maturità (Esame di Stato) | National. |
| **Spain** | LOMLOE, Bachillerato + Selectividad (EvAU) | National + autonomous community variation. |
| **Netherlands** | VMBO, HAVO, VWO | Three secondary tracks. |
| **Poland** | Podstawa Programowa, Matura | National. |
| **Nordics** | Sweden (Lgr22 / Gy22), Norway (LK20), Finland (POPS 2014), Denmark (Folkeskole + STX) | National. |
| **Brazil** | BNCC, ENEM (entrance exam) | National since 2018. |
| **LatAm** | Mexico SEP, Argentina (varies by province), Colombia (Saber 11), Chile (PSU/PAES), Peru (currículo nacional) | Provincial variation in some. |
| **Africa** | Nigeria (WAEC, NECO, UBE), South Africa (CAPS, NSC/Matric), Kenya (CBC), Ghana (WASSCE), Egypt (above) | WAEC covers many West African countries jointly. |
| **East Asia** | China Gaokao-aligned national curriculum, Japan MEXT, South Korea KSAT/Suneung, Taiwan, Vietnam | China + Korea + Japan are exam-driven monoliths. |
| **SEA** | Indonesia (Kurikulum Merdeka), Philippines (K-12), Malaysia (KSSR/KSSM, SPM, STPM), Singapore (PSLE, O-Level, A-Level), Thailand, Vietnam | Singapore is its own Cambridge-aligned thing. |
| **South Asia (others)** | Bangladesh NCTB, Sri Lanka (G.C.E. O/L + A/L), Nepal (NEB) | Often dual with Cambridge in private. |
| **International** | IB PYP / MYP / DP, Cambridge International (IGCSE / O / AS / A), Edexcel International, French AEFE, German DSD, American international schools | **The most globally portable curricula.** Always offer alongside local. |

**Design implication**: We do NOT pre-load syllabus content for all of these (legal, scope, freshness). Instead we:
1. Show a **searchable** list of curricula filtered by selected country.
2. Use the chosen curriculum as **context in the AI system prompt** — so explanations match terminology, units, and examination style.
3. Let students **upload their own syllabus** and we extract + save it locally, so AI answers are grounded.

---

## 4. Specific challenges by content type

| Input | Challenge | Mitigation in this app |
|---|---|---|
| **Photo of textbook page** | Glare, skew, multi-column, multi-question | Gemini handles well. We auto-detect and ask "which question do you want help with?" if many present. |
| **PDF of textbook chapter** | 50+ pages, mixed text + diagrams | 20 MB / 50-page cap. Gemini reads PDFs natively; no separate OCR step needed for typed PDFs. |
| **Handwritten notes** | OCR errors, math symbols misread | Disclaimer + "tap to correct" UI in v2. |
| **Math equations** | LaTeX vs image vs handwritten | Gemini reads typed math reliably. We render replies in markdown so $...$ math shows as math. |
| **Diagrams / chemistry structures / physics circuits** | Vision models miss subtle labels | Profile-aware prompt asks AI to describe what it sees first, then explain. |
| **Multi-language pages** (English + Urdu / Arabic / Hindi) | Code-switching | Gemini 2.5 Flash handles this; reply language defaults to English (configurable later). |
| **Marked / annotated exam scripts** | Teacher's red ink mixed with student's writing | AI explicitly told to attempt to separate "teacher feedback" from "student answer". |

---

## 5. Feature ideas — researched and ranked

Ranked by **impact / build cost** ratio. Tier 1 = ship next; Tier 2 = high impact but harder; Tier 3 = nice to have.

### Tier 1 — should be in v1.1
1. **Searchable curriculum picker** during onboarding (in this release). Critical UX, low cost.
2. **Interest-based explanations** ("relate it to football", "use cooking analogies"). _You already shipped this._
3. **Answer length toggle (Short / Long)** per response. _You already shipped this._
4. **One-tap "make quiz from this explanation"** — reuses existing quiz endpoint.
5. **One-tap "make flashcards from this"** — already wired through `/api/flashcards` action: "generate".
6. **Syllabus extractor** — upload syllabus PDF → AI returns structured outline (units → topics → subtopics) → saved to user library (in this release).
7. **Topic + decade past papers** — student picks a topic ("Photosynthesis") and a decade range, AI synthesizes practice (in this release).
8. **Reading-level slider** at the top of every explanation (already wired via age, expose explicit slider).
9. **"I don't get it, simpler"** button — reroll the same explanation at a lower reading level.
10. **Language toggle on reply** — keep UI English but reply in Urdu / Hindi / Arabic for the explanation.

### Tier 2 — significant but high value
11. **Google Classroom integration** — OAuth, list courses, list assignments, AI surfaces "what's overdue, what's due in 3 days, what would take you longest to finish". (Skeleton in this release.)
12. **Microsoft Teams for Education / OneNote Class Notebook** — same idea, different vendor.
13. **Canvas LMS / Moodle / Google Drive folder** integration.
14. **Diagnostic quiz** — 10 questions across the curriculum that surface the student's weakest 2–3 topics, then auto-generate study plan.
15. **Photo math** — kid writes a math problem on paper, app gives step-by-step solution + checks each step.
16. **Voice mode** — kid speaks the question, AI reads back the answer (great for under-10 + accessibility).
17. **Parent dashboard** — weekly summary email of streak, topics covered, weak areas, and 3 questions parent could ask the kid at dinner.
18. **Group study rooms** — 2–4 students share a chat session; AI is a moderator, not a cheat tool (homework-help flag).
19. **Past-paper grading** — student writes/types an exam answer; AI marks it against board mark-scheme conventions.
20. **Concept map view** — visualize the syllabus as a graph; click a node, get an explanation.

### Tier 3 — nice-to-have
21. Camera-based real-time tutor (point camera at a problem, audio walkthrough).
22. AR overlays for diagrams (point at a chemistry structure, atoms light up).
23. Gamified "boss battles" (timed quiz challenge against AI).
24. Multiplayer flashcard duels.
25. Teacher mode — generate worksheets + answer keys for a class.

### Things we deliberately do NOT build
- A proprietary chat moat — we use Gemini and let users walk if they want.
- Ads to under-13s. Period.
- "AI write my essay for me" mode. (Cheating risk → school bans → store removal.)
- Selling student data. We export it on request and delete on request.

---

## 6. Country-specific go-to-market notes

| Country | Why it matters | What to highlight |
|---|---|---|
| **India** | Largest single student market. CBSE search volume + huge JEE/NEET coaching industry. | CBSE + JEE/NEET prep + Hindi-English toggle. |
| **Pakistan** | Founder market. Federal/Punjab boards + Cambridge co-existence. | Past-paper drills for FBISE/Punjab + Cambridge. |
| **USA** | Highest per-user willingness to pay later (when we add Pro). AP and SAT prep. | AP, SAT, Common Core. |
| **UK** | GCSE / A-Level past-paper culture is massive — kids actively buy past papers. | Board-specific past-paper synthesis. |
| **GCC** | Affluent + multi-curriculum (CBSE/Cambridge/American/MoE). | Multi-curriculum support is the moat. |
| **Brazil** | ENEM is the single national exam — focus everything there. | ENEM-style question generator. |
| **Australia / NZ** | English-speaking, smaller markets, but lower competition for local-curriculum AI tutors. | NCEA + ATAR-aligned. |
| **Nigeria + West Africa** | Massive young population, mobile-first, WAEC is unifying exam. | WAEC past papers + offline mode (later). |
| **EU** | Smaller per-country but high quality. GDPR sensitive. | Privacy-first messaging; data stays in EU once we add region routing. |

---

## 7. Risks & ethical guardrails (what reviewers and parents will ask)

- **Hallucinations**: Disclaimer on every answer. "Show source page" feature deferred to v2.
- **Cheating concerns**: We mark AI-generated essay help OFF by default in school-classroom mode (when we ship integrations).
- **Bias**: Gemini default safety on; we add a secondary filter for under-13 accounts before shipping kids mode.
- **Data**: Free tier; we collect minimum needed; one-click export and delete.
- **Accessibility**: Dyslexia-friendly font option (planned). Voice mode (planned).
- **Offline / low-bandwidth**: Crucial for African + South Asian rural users. Cache explanations on-device (planned).

---

## 8. North-star product principle

> **One thumb, one tap to a real explanation pitched exactly right.**

If a child has to think about three menus before they understand their photosynthesis question, we lost. Every screen we build should be testable against that sentence.
