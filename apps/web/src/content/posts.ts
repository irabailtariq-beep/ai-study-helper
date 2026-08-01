// 120+ blog articles, hand-written for SEO + human voice.
// Originals are below; further articles are appended from posts-batch-2, posts-batch-3, etc.

import { POSTS_BATCH_2 } from "./posts-batch-2";
import { POSTS_BATCH_3 } from "./posts-batch-3";

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  tags: string[];
  body: string;
};

const today = "2026-05-08";

const POSTS_ALL: Post[] = [
  // ─────────────── PILLAR / EVERGREEN ───────────────
  {
    slug: "best-free-ai-study-helper-2026",
    title: "The Best Free AI Study Helper in 2026 (Tested with Real Homework)",
    description: "We tested every popular free AI study helper with real GCSE, CBSE, AP, Cambridge and WAEC homework. Here is what works for math, essays, past papers, and revision.",
    publishedAt: today, readTime: "9 min",
    tags: ["AI study helper", "free AI tutor", "study help AI", "best AI tutor"],
    body: `
Most "AI tutors" today are general chatbots wearing a school costume. They can answer questions, but they do not know your country, your board, or what your teacher will mark you on. That gap is why answers feel off.

We tried every popular free AI helper this term with four real student tasks:

1. A GCSE biology essay on enzymes
2. A CBSE class 9 word problem on simple interest
3. An AP US History DBQ
4. A Cambridge A-Level physics derivation on capacitors

The pattern was the same every time. Generic AI gets close. A tutor that knows your context gets the answer in your board's voice.

## What we measured

- **Accuracy.** Did the answer match what the mark scheme would accept?
- **Curriculum fit.** Did it use AQA / CBSE / Cambridge phrasing rather than American defaults?
- **Step quality.** For math, did it skip steps?
- **Adaptability.** Did the tone match the student's age?

## What worked

The best results came from tools that ask for your country, age and curriculum *before* you ask anything. Once that profile lives inside every prompt, the AI naturally writes the way your teacher would.

This is what [Help in Study](/onboarding) does. You finish a 30-second wizard, and from then on every reply is shaped to your board.

## What did not work

- Pasting a question into a generic chatbot without saying "I am studying CBSE Class 10". The reply comes back in US units and skips the steps that earn you marks in India.
- Using AI for homework you have not read. You get an answer, you do not learn the technique, and you fail the next test on the same idea.
- Pretending it is just a search engine. Search engines get you links. AI gets you a wrong answer that sounds right. Always sense check.

## How to actually use a free AI study helper

1. Pick a tool that knows your curriculum.
2. Ask for the *method*, not just the answer.
3. After you understand a question, generate three more using [/problem-variants](/problem-variants).
4. Make a flashcard from anything you got wrong.
5. Two days later, redo the question without the AI.

That loop beats every other study habit we tested.

[Start with the free study helper →](/onboarding)
`,
  },
  {
    slug: "ai-study-helper-math",
    title: "AI Study Helper for Math: How to Actually Get Faster (and Stop Hating It)",
    description: "How to use a free AI study helper for math homework without becoming dependent on it. Step-by-step solutions, formula sheets, and practice variants — done right.",
    publishedAt: today, readTime: "8 min",
    tags: ["AI study helper math", "math help AI", "step by step math", "math homework help"],
    body: `
If a math problem makes your stomach drop, you are not bad at math. You are missing the *method* behind the question. Once you spot the pattern, the same problem becomes boring. That is the goal.

Here is the loop that works.

## 1. Stop reading the textbook three times

Rereading the chapter is the worst common study habit. Cognitive science is firm on this. What works is **active recall** — closing the book and trying to do the problem from memory, getting it wrong, then checking.

A photo math solver helps because it shows you the *steps*. Not the answer. Use [Math Solver](/math-solver) and read the working as if a friend was talking you through it.

## 2. Drill the variant, not the original

Once you understand a worked example, paste it into [Problem Variants](/problem-variants) and ask for ten new versions with different numbers. Do them in one sitting. The first three will feel slow. By the seventh you will recognise the pattern.

That is the moment math becomes fun.

## 3. Build a personal formula sheet

Don't memorise blindly. For every formula learn:

- What it does in plain English
- When to use it (a one-line trigger)
- One worked example
- One trap

[Formula Sheet builder](/formula-sheet) outputs exactly that format from your subject and grade.

## 4. Do mock exams under time

The reason students freeze in exams is not that they don't know the math. It is that they have only ever practiced with no clock. Set a 20-minute timer in [Mock Exam](/mock-exam) once a week.

## 5. The "explain it back" rule

If you can't teach the method to a younger sibling, you don't really get it. Use [Explain anything](/explain) to translate a topic to a 10-year-old. If your simpler version makes sense, you understand the topic.

That is the whole loop.
`,
  },
  {
    slug: "help-in-study-english",
    title: "Help in Study: English — Writing Better Essays Without Cheating",
    description: "How to use AI to write better English essays without losing your voice or your marks. Outline, thesis, and edit help that still leaves the work yours.",
    publishedAt: today, readTime: "7 min",
    tags: ["help in study english", "AI essay coach", "english homework help"],
    body: `
There is a wrong way to use AI for English. You paste the prompt, ask for the essay, copy it, hand it in. You get a B and you learned nothing.

There is a right way. You use AI as a coach, not a ghostwriter.

## The right loop

1. **You** read the prompt, twice.
2. **You** brainstorm three angles for ten minutes. Pen and paper if possible.
3. Ask the [Essay Coach](/essay-coach) for thesis options. You pick one. The AI does not pick for you.
4. **You** write the first paragraph yourself.
5. Ask the coach for line edits. Accept the ones that make your voice sharper. Reject the ones that flatten you.
6. **You** write the rest. Repeat the line-edit step on each paragraph.
7. Submit. Your voice. Your argument. Sharper because of the coach.

## What examiners actually reward

UK boards (AQA, Edexcel, OCR) use command words: *describe* gets fewer marks than *evaluate*. AP US History rewards historical thinking, not opinions. Cambridge rewards specific evidence. CBSE rewards clear structure and neat handwriting.

A generic AI does not know any of this. A tool with your curriculum baked in does. That is why the [Mark My Answer](/grade) tool grades in your board's style.

## A simple essay shape that works for almost everything

- One-sentence thesis at the end of the introduction
- Three body paragraphs, each starting with a topic sentence
- Each body paragraph follows the PEEL pattern (Point, Evidence, Explanation, Link)
- A conclusion that does not just repeat the introduction

If your essay does not follow this shape, you will lose easy marks even when your ideas are good.

## The honest catch

If you let AI write your essay, you will fail the in-class one. Use it to *think faster*, not to *think less*.
`,
  },

  // ─────────────── SUBJECT-SPECIFIC HOW-TO ───────────────
  {
    slug: "help-in-study-calculus",
    title: "Help in Study: Calculus — From \"What Is dy/dx\" to Confident",
    description: "A calmer way into calculus. How to think about limits, derivatives, and integrals without panicking — and how AI can show every step.",
    publishedAt: today, readTime: "8 min",
    tags: ["help in study calculus", "calculus help", "AI calculus", "derivatives"],
    body: `
Calculus is the first time many students hit math that feels like a different language. The trick is that the new language is mostly four ideas dressed up in symbols.

## The four ideas

1. **Limit** — what value something approaches as you sneak up on it.
2. **Derivative** — how fast something is changing right now.
3. **Integral** — the total of a tiny effect added up over time.
4. **Fundamental theorem** — the link that says derivatives and integrals undo each other.

Everything else in your textbook is one of those four wearing a costume.

## Why the symbols look scary

The notation is older than your textbook. \`dy/dx\` is just "tiny change in y divided by tiny change in x". A definite integral \`∫f(x) dx\` from a to b is "add up f(x) for every tiny dx step from a to b". You can read each symbol like a word.

Try it. Open a problem and read it out loud as a sentence. The fear shrinks fast.

## How to drill it

1. [Math Solver](/math-solver) for one problem from each new technique. Read the steps.
2. [Problem Variants](/problem-variants) for ten more like it. Do them by hand.
3. Make flashcards for the *triggers* — "if you see x², the derivative is 2x".
4. After three weeks, do a [Mock Exam](/mock-exam) on derivatives only.

## The integration mistake everyone makes

Forgetting the constant of integration when you integrate without limits. Lose one mark every time. Set a flashcard for it on day one.

## What good calculus practice looks like

Twenty minutes a day, five days a week, beats two hours on Sunday. You are not training for endurance, you are training for pattern recognition.
`,
  },
  {
    slug: "help-in-study-physics",
    title: "Help in Study: Physics — How to Stop Drowning in Formulas",
    description: "Physics has fewer ideas than your textbook makes it look. Here is the way to spot the underlying physics behind any question, with AI tools to help.",
    publishedAt: today, readTime: "7 min",
    tags: ["help in study physics", "physics help AI", "physics formulas"],
    body: `
Most students fail physics for one reason. They memorise formulas instead of memorising **what each formula is for**.

Look at any past paper. Each question is a tiny scenario asking, "which physics situation is this?" If you spot the situation in five seconds, you know which formula to reach for. The math becomes the easy part.

## The question filter

When you read a question, ask in this order:

1. Is something moving? → kinematics
2. Is energy changing form? → work / energy / power
3. Is there a force? → Newton's laws
4. Is electricity involved? → circuits, fields, induction
5. Is light or sound involved? → waves
6. Is heat involved? → thermal physics

Most A-Level / IGCSE / CBSE / WAEC questions sit cleanly in one of these.

## Build a one-page identity card per topic

For each topic write:

- The two or three formulas that matter
- A single sentence about when each applies
- The one classic trap question
- A worked example

[Formula Sheet](/formula-sheet) generates this for your board. Print it. Tape it to your desk.

## Past papers, every weekend

Past papers are not about memorising answers. They are about pattern recognition for the question filter above. Use [Past Papers](/mock-exam) every weekend. After ten weekends you have seen almost every type of question your board uses.

## Common pitfalls

- Mixing up scalar and vector quantities. Speed and velocity are not the same.
- Wrong units. Always check the unit on the answer line.
- Forgetting g = 9.81 m/s² or 10 m/s² depending on what the paper specifies.
- Treating derivations as memorisation. They are stories. Each line follows from the one above.

[Try a physics worked example →](/math-solver)
`,
  },
  {
    slug: "help-in-study-chemistry",
    title: "Help in Study: Chemistry — A Sane Way to Learn the Reactions",
    description: "Chemistry is mostly pattern recognition. Here is how to learn the patterns without drowning in notation, with AI study tools to back you up.",
    publishedAt: today, readTime: "7 min",
    tags: ["help in study chemistry", "chemistry help AI", "organic chemistry"],
    body: `
Chemistry breaks people because the textbooks pile notation on top of patterns. If you can spot the pattern, the notation becomes easy.

## The three big patterns

1. **Acids and bases** — proton donors and acceptors. Everything in this chapter is "where did the H+ go?"
2. **Redox** — electrons moving. Every redox question is "who lost electrons, who gained them?"
3. **Equilibrium** — Le Chatelier's principle. "If I push this side, where does it move to relieve pressure?"

If you can answer those three questions on any reaction, you know more chemistry than half your class.

## Organic chemistry the painless way

Do not memorise reactions. Memorise functional groups and what they do.

- Alkenes love to be attacked
- Alkanes are boring (substitution only)
- Carbonyls love nucleophiles
- Aromatics resist most things, but EAS is the main move

Once you know what each group *wants*, you can predict almost any reaction without a lookup table.

## Tools that help

- [Concept Map](/concept-map) for organising a chapter into a graph
- [Math Solver](/math-solver) for stoichiometry calculations
- [Past Papers](/mock-exam) for pattern drills
- [Flashcards](/flashcards) for functional groups (perfect spaced repetition material)

## The mole trap

The mole always feels weird until you treat it as a unit of counting, like "dozen" or "ream". A mole is just \`6.022 × 10²³\` of something. Once it clicks, mass-mole-volume questions become a bookkeeping exercise.
`,
  },
  {
    slug: "help-in-study-biology",
    title: "Help in Study: Biology — Memorise Less, Understand More",
    description: "Biology asks for a lot of names. Here is how to use story and structure to learn it faster, plus AI tools for diagrams and recall.",
    publishedAt: today, readTime: "6 min",
    tags: ["help in study biology", "biology help AI", "GCSE biology", "AP biology"],
    body: `
Biology is the subject most students try to brute-force memorise. It is also the subject where memorisation works the worst. Every pathway has a *story* — what is the cell trying to do, and what could go wrong?

If you learn the story, the names attach themselves.

## Try this on the cell cycle

Old way: list the phases (G1, S, G2, M).

Story way: a cell wakes up (G1), copies its DNA carefully (S), checks the copy (G2), divides into two (M). Each phase has a checkpoint. Skip a checkpoint, you risk cancer.

That paragraph is more useful than ten flashcards because it answers *why* each phase is there.

## Diagrams from textbooks

Use [Whiteboard to Notes](/whiteboard) to convert any textbook diagram into clean notes. The AI describes what is shown and labels the important arrows.

## Three weeks before the exam

1. Build a [Concept Map](/concept-map) of the syllabus
2. Tag the topics you can teach without notes
3. Tag the topics where you freeze
4. Drill only the freeze topics
5. Mock paper at the end of each week

## The exam-day mistake

Writing too much. Most biology exam answers want a tight, technical sentence. A vague paragraph loses you marks. Look at the [past paper mark scheme](/mock-exam) language and copy that style.
`,
  },
  {
    slug: "help-in-study-history",
    title: "Help in Study: History — Why Dates Are the Easy Part",
    description: "History exams are not about dates. They are about argument. Here is how to write the kind of answer your examiner is hunting for.",
    publishedAt: today, readTime: "6 min",
    tags: ["help in study history", "history essay help", "AP history", "GCSE history"],
    body: `
A good history student is not the one with the most dates in their head. It is the one who can take a question they have never seen and turn it into an argument with evidence.

## The PEEL paragraph for history

- **Point** — your claim, in one sentence
- **Evidence** — a specific fact (date, name, statistic, quote)
- **Explanation** — why this evidence supports the claim
- **Link** — how this paragraph connects to your overall thesis

Most B-grade essays skip Explanation and Link. The marks live there.

## What to memorise

- Five dates per topic, max
- Three causes per event
- Two consequences per event
- One historian's argument per topic (for A Level / AP)

That is enough to write any essay your board can throw at you.

## How AI helps

- [Essay Coach](/essay-coach) gives you outline + thesis options before you start writing
- [Mark My Answer](/grade) grades in your board's style (AQA / Edexcel / Cambridge / AP)
- [Past Papers](/mock-exam) gets you used to your board's question phrasing

## The exam-day checklist

1. Underline the command word (*describe* vs *evaluate* vs *to what extent*)
2. Spend 5 minutes planning before you write
3. Three body paragraphs, one argument each
4. Concrete evidence in every paragraph
5. Link back to the question every paragraph
`,
  },
  {
    slug: "help-in-study-geography",
    title: "Help in Study: Geography — Case Studies That Stick",
    description: "Geography lives or dies by your case studies. Here is how to learn them properly so you can pull a perfect one in any exam.",
    publishedAt: today, readTime: "6 min",
    tags: ["help in study geography", "geography case studies", "GCSE geography"],
    body: `
Geography questions almost always sound like "explain X using a case study you have studied". The students who win are the ones with *one really sharp case study* per topic, not five vague ones.

## What a usable case study has

- The name and location
- Key statistics (population, area, dates)
- Three causes
- Three consequences
- Two responses (and whether they worked)

Five bullets per case study. Memorise them cold.

## Pick your weapon per topic

- Tectonic hazards: Haiti 2010 *or* Tōhoku 2011 — pick one and learn it deeply
- Climate change impacts: Bangladesh delta *or* the Maldives
- Urbanisation: Mumbai *or* Lagos *or* São Paulo
- Coastal erosion: Holderness coast (UK boards love this)

Trying to learn five case studies for one topic is the trap. One sharp case study beats five blurry ones every time.

## Tools

- [Flashcards](/flashcards) for the five-bullet case study format
- [Past Papers](/mock-exam) for question style
- [Mark My Answer](/grade) to check you are using the case study correctly

## The map skill question

Almost every geography paper has a map skill question. It is free marks. Practice ten of them and you will never lose marks on it again.
`,
  },

  // ─────────────── LANGUAGES ───────────────
  {
    slug: "ai-arabic-tutor",
    title: "Learn Arabic Faster With an AI Study Helper",
    description: "How to use AI to learn Arabic — vocabulary drills, grammar explanations in plain English, and translation tools that keep technical terms intact.",
    publishedAt: today, readTime: "5 min",
    tags: ["AI arabic tutor", "learn arabic", "arabic vocabulary"],
    body: `
Arabic is hard for the same reason it is rewarding: the script is unfamiliar, the grammar is logical but dense, and the gap between Modern Standard Arabic and dialects is real.

A free AI tutor closes the gap for daily practice.

## What to use it for

1. **Vocabulary** — paste a word into [Vocabulary Builder](/vocab) and get root, meaning, three example sentences, and a memory tip.
2. **Translation with intact technical terms** — use [Translation Mode](/translate) to translate a textbook page from Arabic to English while keeping scientific terms in Arabic so you do not lose them.
3. **Dialect awareness** — explain a phrase in MSA, then ask the AI to render it in Egyptian / Levantine / Gulf so you can hear how speakers would actually say it.

## What it cannot replace

- A real conversation with a native speaker
- Listening to news in Arabic at slow speed
- Writing by hand to lock the script in your motor memory

Use AI for the deliberate-practice slot. Use real conversation for the speaking slot. The combination is unbeatable.
`,
  },
  {
    slug: "ai-french-tutor",
    title: "Learn French With AI: Verbs, Vocabulary, and a Painless Way to Drill Them",
    description: "Smart drills for French verb conjugations, idiom translation, and exam writing — all with a free AI study helper that grades in your school's style.",
    publishedAt: today, readTime: "5 min",
    tags: ["AI french tutor", "learn french", "french verbs"],
    body: `
French verbs eat up half your study time and earn most of your marks. The trick is to drill them as triggers, not lists.

## Verb drill loop

1. Pick five verbs you got wrong on the last quiz.
2. Make a flashcard per tense per verb in [Flashcards](/flashcards).
3. Drill ten minutes a day for a week.
4. Take a [Mock Exam](/mock-exam) on those verbs only.
5. Move on.

## Vocabulary that sticks

Use [Vocab Builder](/vocab) and pick "French". You get the meaning, three example sentences, synonyms, and a memory tip in one tap. Add the words that surprised you to flashcards.

## Writing the exam essay

French exam writing rewards specific vocabulary and varied tenses. The students who score top use the imperfect, conditional and subjunctive in the right places. Use [Essay Coach](/essay-coach) → "Improve my draft" with your essay pasted in. The AI will point at sentences that could lift their tense or vocabulary.

## A note on accents

Always type the accents. Lose marks every time. Set up your keyboard in advance so you are not fighting it during the exam.
`,
  },
  {
    slug: "ai-spanish-tutor",
    title: "AI Help for Spanish: From Verb Tables to Real Sentences",
    description: "How to use a free AI tutor for Spanish without becoming dependent on it. Drill, translate, and write better sentences faster.",
    publishedAt: today, readTime: "5 min",
    tags: ["AI spanish tutor", "learn spanish", "spanish verbs"],
    body: `
Spanish is a forgiving language. You can be slightly wrong and still be understood. That is exactly why students plateau — they speak well enough to function but never push for the next level.

AI is good at the deliberate-practice push.

## Three habits that work

1. **One sentence a day, written by you, then reviewed.** Use [Essay Coach](/essay-coach) → "Improve my draft" with your single sentence. The AI suggests sharper vocabulary or a better tense.
2. **Ten flashcards a week from your reading.** Use [Flashcards](/flashcards). Spanish vocabulary is huge but the high-frequency 2,000 words cover most of what you read.
3. **Subjunctive practice every Sunday.** It is the topic that separates B from A grades. Drill it in [Mock Exam](/mock-exam) until the triggers are automatic.

## The "ser" vs "estar" trap

If a student is going to lose marks somewhere, it is here. Quick rule: ser for permanent identity, estar for temporary state or location. Make a flashcard with five examples and review it for one minute every day until it is muscle memory.
`,
  },

  // ─────────────── EXAM PREP & STUDY METHOD ───────────────
  {
    slug: "how-to-study-for-exams",
    title: "How to Study for Exams Properly (the Research-Backed Way)",
    description: "Forget rereading. Real exam prep uses retrieval, spaced repetition, mock exams, and worked examples. Here is the weekly plan.",
    publishedAt: today, readTime: "7 min",
    tags: ["how to study for exams", "study tips", "exam prep", "spaced repetition"],
    body: `
Exam prep is mostly about *what you stop doing*, not what you start. Here are the five things to stop, and the five things to do instead.

## Stop

1. **Rereading the chapter.** It feels productive. It is not.
2. **Highlighting in three colours.** Same problem.
3. **Studying for five hours on Sunday.** You forget it by Wednesday.
4. **Watching study-with-me videos as a substitute for studying.**
5. **Memorising past paper answers.**

## Start

1. **Active recall.** Close the book, write what you remember, then check.
2. **Spaced repetition.** Use [Flashcards](/flashcards) — review on day 1, 3, 7, 14, 30.
3. **Twenty minutes a day, five days a week.** Beats two hours on Sunday by 4×.
4. **Mock exams under time.** Use [Mock Exam](/mock-exam) once a week.
5. **Worked examples first.** Use [Math Solver](/math-solver) for two examples before drilling.

## The seven-day plan

- **Sun** — diagnostic quiz to find weak topics ([Diagnostic + plan](/diagnostic))
- **Mon** — worked example on weakest topic, three flashcards
- **Tue** — practice questions on same topic
- **Wed** — same topic via flashcards
- **Thu** — past paper question on the topic
- **Fri** — second weak topic, repeat
- **Sat** — full mock exam, mixed topics

Rinse for three weeks before the exam.

## What to do the day before

Two things: a 30-minute light review of flashcards, and sleep. No new material. No five-hour cram.
`,
  },
  {
    slug: "spaced-repetition-explained",
    title: "Spaced Repetition: Why It Works and How to Use It Without Fancy Apps",
    description: "Spaced repetition is the only memory hack with serious science behind it. Here is how it works and how to set up a free system that takes ten minutes a week.",
    publishedAt: today, readTime: "6 min",
    tags: ["spaced repetition", "active recall", "flashcards", "memory"],
    body: `
Memory is not a hard drive. It is a leaky bucket. The trick is to top it up at exactly the right moment — not too soon (waste of time) and not too late (you've forgotten everything).

That is what spaced repetition does.

## The forgetting curve, in plain English

After learning something, your retention drops fast for a day or two, then levels off. Each time you successfully recall the thing, the curve flattens. Review it at the right interval and you can hold information for years with five minutes of work a week.

## The intervals that work

- Review on day 1
- Review on day 3
- Review on day 7
- Review on day 14
- Review on day 30
- Review every two months after that

You do not need to track this manually. [Flashcards](/flashcards) uses the SM-2 algorithm to push each card at the right gap.

## Three rules

1. **Make atomic flashcards.** One idea per card. "Capital of France: Paris" is good. A whole essay on the French Revolution is bad.
2. **Active recall, always.** Read the front, try to answer, then flip. Never just stare at both sides.
3. **Review even when you are confident.** That is when the curve does the most work.

## What to put on cards

- Vocabulary (any language)
- Formulas + when to use them
- Historical dates that matter
- Definitions
- Code syntax

What not to put on cards: anything you do not understand yet. Cards reinforce understanding, they do not create it.
`,
  },
  {
    slug: "active-recall-vs-rereading",
    title: "Active Recall vs Rereading: Why Your Highlighter Is Lying to You",
    description: "Highlighting and rereading feel productive but barely work. Active recall does. Here is the difference and how to switch over this week.",
    publishedAt: today, readTime: "5 min",
    tags: ["active recall", "study tips", "memory"],
    body: `
Highlighting is a feeling, not a study method. It tricks you into believing you are learning because your eyes are moving and the page looks colourful. Cognitive scientists have tested this for decades. Highlighting performs about as well as just reading. Both perform poorly.

What works is **active recall** — closing the book and forcing your brain to fetch the answer.

## How to switch this week

1. **After every paragraph you read, look up.** Try to summarise the paragraph in your own words.
2. **Cover-the-page technique.** Read a section, cover it, write what you remember, check.
3. **Ask the AI to quiz you.** Use [Quiz me](/quiz). Paste any chapter, get questions, attempt them before checking.
4. **Teach a chapter to a wall.** Out loud. If you can't, you don't get it yet.
5. **End every study session with three minutes of recall.** No notes.

## Why this is hard

Active recall feels uncomfortable because it surfaces what you don't know. Rereading is comfortable because it hides what you don't know.

That is exactly the point. Discomfort is the signal that your brain is forming the memory. If your study session feels effortless, you are not learning much.

## The five-minute rule

Every time you finish a study block, set a five-minute timer. Write everything you remember. No notes. Then check what you missed.

That five minutes does more than the previous hour.
`,
  },
  {
    slug: "study-plan-for-exams",
    title: "How to Build a Study Plan That Actually Works",
    description: "Most study plans are wishful thinking. Here is how to build one based on your weak topics, with daily tasks and realistic time blocks.",
    publishedAt: today, readTime: "6 min",
    tags: ["study plan", "study schedule", "exam prep"],
    body: `
The reason most study plans fail is that they are built backwards. Students start with the calendar and try to fit topics into it. The right way is to start with the diagnosis and build the calendar around the gaps.

## Step 1 — diagnose

Take a 10-question [Diagnostic quiz](/diagnostic). It gives you a ranked list of your weak topics in 5 minutes. This is the only thing you need to plan around.

## Step 2 — pick a realistic time budget

If you have three weeks until the exam, that is 21 days. If you can do 30 minutes a day on weekdays and 90 minutes on weekend days, that is 21 hours of study. Plan for 18 of them — leave 3 hours for buffer.

## Step 3 — alternate subjects

Studying one subject for two weeks is the worst pattern. Your brain consolidates better when you switch. Mix in 30-minute blocks of two or three different subjects each day.

## Step 4 — every Sunday is a mock

Once a week, do a [Mock Exam](/mock-exam) under time. Without this you will be slow on exam day even if your knowledge is fine.

## Step 5 — leave the last week alone

Do not learn new material in the last seven days. Just review flashcards, redo three past papers, and sleep nine hours a night.

## A working template

| Day | Slot 1 (30 min) | Slot 2 (30 min) | Notes |
|---|---|---|---|
| Mon | Weak topic A | Flashcards | |
| Tue | Weak topic B | Practice questions | |
| Wed | Worked examples | Flashcards | |
| Thu | Past paper question | Light review | |
| Fri | Weak topic C | Flashcards | |
| Sat | Mock exam | | 1 hour, timed |
| Sun | Review mistakes | Plan next week | |

Print this. Stick it on your wall. Tick it off.
`,
  },
  {
    slug: "test-anxiety",
    title: "Test Anxiety: Seven Tactics That Beat the Brain Freeze",
    description: "Test anxiety is real but solvable. Here are seven research-backed tactics for calming the panic in the exam hall and getting back to the question.",
    publishedAt: today, readTime: "5 min",
    tags: ["test anxiety", "exam stress", "study tips"],
    body: `
Test anxiety is not a sign that you are weak. It is a sign that your brain treats the exam like a threat. The good news is that you can train it out of that response.

## The seven tactics

1. **Box breathing.** Four seconds in, four hold, four out, four hold. Two cycles before walking into the exam.
2. **Power posture.** One minute of standing tall with shoulders back drops cortisol measurably.
3. **Read the whole paper first.** Then start with the easiest question. Quick wins put you in flow.
4. **The 90-second rule.** If a question still feels impossible after 90 seconds, skip it. Come back at the end.
5. **Eat carbs at breakfast.** Eggs and toast beat coffee alone.
6. **Sleep before, not after.** Pulling an all-nighter destroys your retrieval. Sleep is when the memory consolidates.
7. **Talk to one person you trust about the anxiety.** Saying it out loud weakens it.

## What does not work

- "Just calm down."
- Caffeine on an empty stomach.
- Cramming during the breakfast hour before the exam.
- Comparing notes with classmates two minutes before the bell.

## On exam day, the 60-second reset

If your hand is shaking and you can feel the panic rising:

1. Put your pen down
2. Look at the wall for ten seconds
3. Two box breaths
4. Read the next question slowly, out loud in your head
5. Underline the command word
6. Begin

That sequence breaks the panic loop most of the time.

## In the longer term

Practice under exam conditions weekly. Use [Mock Exam](/mock-exam). Anxiety drops as the situation becomes familiar.
`,
  },
  {
    slug: "best-study-habits-students",
    title: "Eight Habits That Top Students Actually Have (Not the Ones in Reels)",
    description: "Aesthetic study reels are mostly fiction. The students who consistently top their class share eight quiet habits.",
    publishedAt: today, readTime: "6 min",
    tags: ["study habits", "best students", "study tips"],
    body: `
The students at the top of every class do not have a secret notebook brand. They have habits.

## 1. They sleep
Eight hours, almost every night. Memory consolidation happens during sleep. Cutting sleep to study more is the worst trade.

## 2. They use one notebook per subject, not five
One place to look. Less time spent organising, more time spent learning.

## 3. They write notes in their own words
If a passage in the textbook ends up word-for-word in their notebook, they crossed it out. Notes are for *processing*, not copying.

## 4. They explain things out loud
Some out loud to themselves, some to a friend. The act of teaching is the act of learning.

## 5. They do past papers, weekly
Not the night before. Weekly, all year. By exam day they have seen every type of question.

## 6. They make mistakes happily
A wrong answer is data, not shame. They write it down and review it.

## 7. They sit near the front
Easier to focus, harder to phone-scroll.

## 8. They take Saturdays off
Rest beats grind. The students who never rest get sick in week 8.

The pattern under all of these is simple: do less, more often, and process actively. Use AI tools to support that — [Quiz me](/quiz), [Mock Exam](/mock-exam), [Flashcards](/flashcards) — not to replace it.
`,
  },
  {
    slug: "study-with-adhd",
    title: "Studying With ADHD: How to Use AI Tools That Actually Fit Your Brain",
    description: "ADHD makes traditional study advice useless. Here are five strategies that match how an ADHD brain actually works, with AI tools that help.",
    publishedAt: today, readTime: "6 min",
    tags: ["ADHD study", "adhd students", "study tips ADHD"],
    body: `
"Just sit still and concentrate" is the worst advice anyone with ADHD has ever heard. ADHD brains do not lack focus — they lack steady access to it. The aim is not to fight the brain, it is to set it up to win.

## 1. Two-minute starts

Your job is not to study for an hour. Your job is to start for two minutes. Set a two-minute timer. Open the book. Write one sentence. After two minutes, decide whether to keep going. Most days you will. Some days you will not. Both are fine.

## 2. Externalise the to-do list

ADHD working memory is leaky. If a task is in your head, it will not happen. Write it on paper or in a single app. Cross things off out loud.

## 3. Body doubling

Studying near another person who is also studying — even silently — is a documented productivity boost for ADHD. A study group, a parent at the table, a Discord study room. Pick one.

## 4. Movement before, not during

Five minutes of jumping or a brisk walk before sitting down works for many ADHD students. Movement floods the brain with dopamine and helps the next 30 minutes feel possible.

## 5. AI tools that match your brain

- [Diagnostic + plan](/diagnostic) gives a 7-day plan with small daily tasks. Decision fatigue gone.
- [Whiteboard to Notes](/whiteboard) means you do not have to take notes in real time during class. Take photos, process later.
- [Flashcards](/flashcards) gives short hits of focused practice — perfect for ADHD-sized attention windows.
- [Math Solver](/math-solver) shows every step, so you don't have to track the whole problem in your working memory.

## What does not help

- Long study sessions
- Pretty notebooks (the prep takes longer than the study)
- Pomodoro 25/5 if 25 minutes is too long for you — use 10/2
- Studying with the phone on the desk

## The honest truth

You will have days where nothing works. That is part of having ADHD, not a personal failing. Tomorrow is a new day. The streak that matters is the year, not the week.
`,
  },

  // ─────────────── EXAM-SPECIFIC ───────────────
  {
    slug: "gcse-revision-guide",
    title: "GCSE Revision Without Burning Out (UK Boards: AQA, Edexcel, OCR)",
    description: "GCSE revision plan that respects your other subjects, your sleep, and your weekends. Tested with real GCSE students.",
    publishedAt: today, readTime: "8 min",
    tags: ["GCSE revision", "AQA", "Edexcel", "OCR", "GCSE"],
    body: `
GCSE revision tends to fall into two camps. Camp one starts at Christmas. Camp two starts at Easter. Both are wrong. The students who hit grade 9s start in October — but with twenty minutes a day, not a death march.

## The October-to-May plan

- **Oct–Dec.** Twenty minutes a day per subject. Active recall on what you cover in lessons that week.
- **Jan–Feb.** One past paper a week. Use [Past Papers](/mock-exam) to generate fresh ones in your board's style.
- **Mar–Apr.** Two past papers a week. Mock exams under time. Drill weak topics.
- **May.** Light review only. No new material. Sleep nine hours.

## What to use

- [Mark My Answer](/grade) — grades in AQA / Edexcel / OCR style
- [Math Solver](/math-solver) — for the maths and physics calculation papers
- [Flashcards](/flashcards) — for English literature quotes, biology vocab, history dates
- [Mock Exam](/mock-exam) — once a week from January

## Per-subject quick rules

- **Maths:** the calculator paper is mostly about reading the question carefully. Half the lost marks are not maths errors.
- **English Lit:** memorise five quotes per text. That is enough for any question they ask.
- **English Lang:** Paper 2 Question 5 (writing) is worth 40 marks. It is the most underprepped question of all of GCSE.
- **History:** four-mark questions are about *describe*. Eight-mark are *explain*. Sixteen-mark are *evaluate*. Different command, different structure.
- **Science:** the practicals come up. Memorise the method for each required practical, not just the outcome.

## What burnout actually looks like

Forgetting things you knew last week. Not enjoying anything. Sleeping badly. Snapping at your family. If three of those four hit, you need a day off, not a longer study session.
`,
  },
  {
    slug: "a-level-revision-guide",
    title: "A Level Revision: How to Hit A* in Three Subjects Without Losing Your Mind",
    description: "A Level is harder than GCSE. The revision pattern that worked then will not work now. Here is what does.",
    publishedAt: today, readTime: "8 min",
    tags: ["A Level revision", "A Level", "AQA A Level", "OCR A Level"],
    body: `
A Level rewards depth. The grade boundary between A and A* is usually one mark. The students who get the * have the same content as the A students — they just write more precise sentences.

## What changes from GCSE

- Mark schemes are stricter. "Almost right" is not right.
- Exam questions are unfamiliar by design. You cannot just memorise past answers.
- Synoptic links between topics are tested explicitly.

## What to do differently

1. **Read the examiner's reports.** Each exam board publishes them after every series. They tell you exactly where students lost marks. Worth more than any study guide.
2. **One subject per study block.** Two subjects in a row at A Level fries your brain.
3. **Write in the mark scheme's language.** Use [Mark My Answer](/grade) to grade your essay in AQA / OCR / Edexcel style.
4. **Synoptic flashcards.** Cards that link two topics from different parts of the spec. The hardest questions live there.
5. **Past papers from at least two specs.** A papers from a different board often expose gaps you didn't know you had.

## Per-subject quick wins

- **Maths:** the new content from year 13 is graded harder. Drill mechanics and statistics — they're the bookable marks.
- **Physics:** memorise *every* derivation. Examiners ask for them straight.
- **Chemistry:** the practical questions are worth 20% of your grade and almost always come from the required practicals list.
- **Biology:** the genetics and statistics topics are the swing topics. If you nail them, A* is doable.
- **English Lit:** unseen poetry is the question most students underprepare. Practice it weekly.
- **History:** know your historians. Two named historians per topic, with a one-line summary of their argument.

## Three weeks before exams

Do nothing new. Mock papers under time. Sleep. Repeat.
`,
  },
  {
    slug: "ib-diploma-prep",
    title: "IB Diploma Prep: How to Survive (and Win) the Two Hardest Years",
    description: "IB rewards process more than any other curriculum. Here is how to nail the IAs, the EE, TOK, and the exams without burning out.",
    publishedAt: today, readTime: "8 min",
    tags: ["IB diploma", "IB exam prep", "IB", "international baccalaureate"],
    body: `
The IB is harder than most curricula because the assessment is spread over two years and most of it is internal. You can be brilliant and still drop a grade by mishandling an IA.

## The IB calendar that works

- **DP1 Aug–Oct:** settle in, attend everything, build flashcard habit
- **DP1 Nov–Feb:** start IAs early, especially the science ones
- **DP1 Mar–May:** finish first drafts of IAs, full revision for May mocks
- **DP1 May–Aug:** EE first draft over the summer
- **DP2 Aug–Dec:** finalise IAs, EE second draft, TOK essay
- **DP2 Jan–Apr:** past papers, mocks, target weak topics
- **DP2 May:** the exams

## Where students lose marks

1. **Not reading the IB criteria for each IA.** They look like generic rubrics but each criterion is specific.
2. **TOK essays that argue too late.** Get to a clear position by paragraph 2.
3. **EE topic too broad.** Narrow makes the difference between a B and an A.
4. **Maths IA without exploration.** Just doing maths is not enough — you must explore *why* the maths matters.

## Tools

- [Mark My Answer](/grade) — gives feedback in IB criterion language
- [Concept Map](/concept-map) — for HL biology and HL history especially
- [Past Papers](/mock-exam) — IB papers are scarce; generate similar-style practice
- [Diagnostic + plan](/diagnostic) — useful before mock exams

## The TOK secret

TOK essays score on knowledge questions, not on philosophy showmanship. Pick a clear knowledge question, take a position, defend it with two areas of knowledge, address one counter argument, conclude with nuance. That is the formula.
`,
  },
  {
    slug: "cbse-class-10-board-exam",
    title: "CBSE Class 10 Boards: A Two-Month Plan That Actually Works",
    description: "How to prep for CBSE Class 10 boards in two months. Subject-by-subject priorities, common pitfalls, and AI tools to help.",
    publishedAt: today, readTime: "7 min",
    tags: ["CBSE class 10", "CBSE board exam", "CBSE", "class 10 revision"],
    body: `
The CBSE Class 10 board is your first big public exam. The good news: the pattern is consistent, the syllabus is fixed, and the past papers are abundant. With the right two-month plan, 90+ is realistic.

## Month 1 — coverage

- Review NCERT thoroughly. The board favours NCERT phrasing.
- Make one chapter summary per chapter.
- Solve every example question in NCERT.
- Twenty minutes of [Flashcards](/flashcards) a day.

## Month 2 — practice

- Three full past papers a week. Use [Past Papers](/mock-exam) for fresh practice.
- Time yourself.
- Mark your own work using the official marking scheme phrasing — use [Mark My Answer](/grade).
- Drill the topics where you lost the most marks.

## Per-subject priorities

- **Math:** every chapter has at least three high-mark question types. Drill them with [Problem Variants](/problem-variants).
- **Science:** diagrams are easy marks. Practice them clean and labelled.
- **Social Science:** map work and case-study answers. Learn the four required maps cold.
- **English:** Paper 1 grammar is mark-bookable. Paper 2 writing requires structure.
- **Hindi / Regional language:** vocabulary breadth wins. Use [Vocab Builder](/vocab) daily.

## Two days before

- Do not learn anything new
- Re-read your one-page summaries
- Sleep
- Eat normally
- Do not compare with friends

## What to bring to the exam hall

Two pens. Two pencils. A working geometry box. Aadhaar card. Admit card. Water bottle. That is it.
`,
  },
  {
    slug: "matric-fsc-pakistan-exam-prep",
    title: "Matric and FSc Exam Prep in Pakistan: A Practical Plan",
    description: "How to prepare for Matric and FSc exams under Federal, Punjab, Sindh, KPK and Aga Khan boards — what works, what doesn't, AI tools that help.",
    publishedAt: today, readTime: "7 min",
    tags: ["matric exam pakistan", "FSc exam", "FBISE", "Punjab board"],
    body: `
Matric and FSc papers in Pakistan reward two things: textbook fluency and tidy, structured answers. The students who score 90+ are not memorising more, they are organising better.

## What every Matric / FSc student should be doing

1. **Read the Punjab Textbook Board / FBISE textbook chapter once carefully.**
2. **Answer every chapter-end question in your own words.**
3. **Use past papers from your specific board** — Federal, Punjab, Sindh, KPK, Balochistan, Aga Khan, AKU-EB. Each has its own style. [Past Papers](/mock-exam) generates fresh practice in your board's style.
4. **Practice neat handwriting.** Pakistani boards mark for presentation visibly.

## Subject-specific priorities

- **Math:** the long questions are predictable. Drill the previous five years.
- **Physics:** numerical problems carry serious marks. Use [Math Solver](/math-solver) for worked examples.
- **Chemistry:** memorise the reactions. Use [Flashcards](/flashcards).
- **Biology:** diagrams need to be neat *and* fully labelled. Practice them on plain paper.
- **English:** essays follow a structure: introduction, three body paragraphs, conclusion. Examiners reward structure.
- **Urdu:** quotation memorisation. Two quotations per topic is enough.
- **Pakistan Studies:** dates and pacts. Memorise the top 20.
- **Islamiat:** the standard answer structure works every time.

## A board-specific note

Federal Board (FBISE) tends to ask straighter questions. Punjab Board favours longer subjective answers. Sindh Board questions are often the closest to the textbook. Aga Khan and AKU-EB ask more analytical questions. Pick past papers from *your* board.

## Tools for Pakistani students

- [Help in Study Math →](/help-in-study/math)
- [Help in Study Physics →](/help-in-study/physics)
- [Mark My Answer](/grade) (set curriculum to your board)
- [Past Papers](/mock-exam)
`,
  },
  {
    slug: "jee-mains-prep",
    title: "JEE Mains Prep: How to Plan One Year Without Burning Out",
    description: "A realistic JEE Mains prep plan. What to actually drill, when to take mocks, and how AI study tools fit into the year.",
    publishedAt: today, readTime: "8 min",
    tags: ["JEE mains", "JEE prep", "engineering entrance", "JEE math"],
    body: `
JEE Mains is a math-physics-chemistry paper that rewards speed *and* accuracy. You cannot improve both at once. Train them in phases.

## Months 1–4: accuracy

- Cover the NCERT thoroughly first
- Add a coaching textbook for depth (Cengage, MS Chauhan, etc.)
- No timed papers yet. Untimed practice with full step-by-step working.
- Use [Math Solver](/math-solver) when you get stuck — read the steps, then redo by hand.
- Build a personal mistake log. Re-read it weekly.

## Months 5–8: speed

- Two timed sectional papers a week
- One full mock paper a fortnight
- Drill the questions where you waste time
- Use [Problem Variants](/problem-variants) on your weakest chapters
- Aim for 90% accuracy at full pace before moving on

## Months 9–12: tactics

- Three full mocks a week
- Track *which questions you skip first* — that is your weakest pattern
- Drop topics that consistently take more than 4 minutes per question
- Sleep 8 hours, exercise three times a week
- The students who get 99+ percentile sleep more than the ones who get 95

## The four mistakes to avoid

1. Doing easy questions for ego boosts. Hard topics will eat you in the exam.
2. Watching coaching lectures as a substitute for doing problems.
3. Not revising a chapter for two months because "I already covered it".
4. Solving from a coaching app for hours without a mistake log.

## On exam day

Read the whole paper for 5 minutes first. Skip every question that doesn't open in 30 seconds. Do the easy ones. Come back to the medium. Leave the hard for last. This single tactic adds 8–12 marks to most students' scores.
`,
  },
  {
    slug: "neet-biology-strategy",
    title: "NEET Biology: How to Memorise the Encyclopedia Without Crying",
    description: "NEET biology has more facts than any other entrance exam. Here is how to learn them once and remember them.",
    publishedAt: today, readTime: "7 min",
    tags: ["NEET biology", "NEET prep", "medical entrance"],
    body: `
NEET biology is mostly NCERT. About 95% of questions can be traced to specific lines in NCERT Class 11 and 12 textbooks. The students who score 350+ in biology have read NCERT cover to cover four times.

## The four-pass method

1. **Pass 1:** read the textbook chapter at normal pace. No notes. Just read.
2. **Pass 2:** make a one-page summary of each chapter.
3. **Pass 3:** make flashcards from your summary. Use [Flashcards](/flashcards) — spaced repetition handles the rest.
4. **Pass 4:** past papers and full mock tests under time.

The order matters. Most students try to make notes before they have understood the chapter, and end up copying the textbook into a notebook.

## What deserves memorisation

- Plant kingdom classification (where every plant sits)
- Animal kingdom up to phylum + class
- Human anatomy diagrams
- Genetics calculations (Punnett squares, dihybrid)
- Plant physiology pathways
- Photosynthesis and respiration in detail
- Nervous system, endocrine system

## What does not need brute memorisation

- Examples and numbers in passing — they are usually not asked
- Etymology of scientific names
- The history of science sections

Sift before you memorise.

## On exam day

The biology section is the easiest to score in. Do biology first. The mental energy boost carries you through the harder physics and chemistry sections. Many high-rank students adopt this strategy.
`,
  },

  // ─────────────── TOOLS HOW-TO ───────────────
  {
    slug: "how-to-use-ai-flashcards",
    title: "How to Use AI Flashcards Without Wasting Three Hours Making Them",
    description: "Manual flashcards take ages. AI-generated flashcards from any chapter take seconds. Here is how to use them well.",
    publishedAt: today, readTime: "5 min",
    tags: ["AI flashcards", "flashcards study", "spaced repetition"],
    body: `
Flashcards work. The problem is that making them is boring, and making them well takes ages. That is why most students give up by week three.

AI flashcards solve the make problem. You still have to do the review.

## How to make them right

1. Take a chapter or a set of notes.
2. Paste it into [Flashcards](/flashcards) → Generate from material.
3. Get 10–20 atomic cards back automatically.
4. Delete any that are too vague or repeat the same idea.
5. Review them.

## Atomic, not encyclopedic

A bad flashcard front: "Explain the French Revolution"
A good flashcard front: "What year did the Bastille fall?"
Another good one: "Who wrote the Declaration of the Rights of Man?"
Another: "Why did the Estates General fail in May 1789?"

The AI usually gets this right but check.

## Review rhythm

- Day 1, 3, 7, 14, 30, 60. The app handles this for you.
- Five minutes at a time, twice a day, beats an hour once a week.
- Do them on your phone while waiting (bus, queue, between classes).

## What flashcards are not for

- Concepts you don't understand yet — they reinforce understanding, not create it
- Long answers — make a summary instead
- Practice questions that need working out — those go in [Problem Variants](/problem-variants)

[Generate your first deck →](/flashcards)
`,
  },
  {
    slug: "ai-quiz-generator-guide",
    title: "AI Quiz Generator: Turn Any Chapter Into a Practice Test in 20 Seconds",
    description: "How to use an AI quiz generator to drill any topic. MCQ, true/false, short answer — what works, when to use each.",
    publishedAt: today, readTime: "5 min",
    tags: ["AI quiz generator", "quiz me", "practice questions"],
    body: `
A textbook chapter is something to *read*. A quiz on that chapter is something to *retrieve*. That difference is what makes the quiz so much more useful.

## The right way to use it

1. Read a chapter normally.
2. Paste it into [Quiz me](/quiz). Pick 10 questions, mixed types.
3. Attempt before checking. No skipping. If you don't know, write your best guess.
4. Check after all 10.
5. For every wrong one, read the relevant section again and add a flashcard.

## Question type cheat sheet

- **MCQ:** good for fact recall and quick drills
- **True/False:** good for definitions and misconceptions
- **Short answer:** good for *explaining* concepts in your own words
- **Fill in the blank:** good for vocabulary and formulas

Mix all four. That is how real exams work.

## When AI quizzes go wrong

- The AI sometimes invents details not in your textbook. Always sense-check answers against your source.
- Questions that are too easy. If you got 10/10, increase the count or pick a deeper chapter.
- Questions that are too vague. Re-paste your source with more context.

The fix in all three cases: paste a more specific chunk of source material.

## How often

A weekly quiz on every active topic works well. Not too often (you fatigue) and not too rare (you forget).
`,
  },
  {
    slug: "concept-map-study-method",
    title: "Concept Maps: The Underrated Study Tool That Beats Highlighters",
    description: "Concept maps turn a flat chapter into a graph of ideas. Why they work, how to draw them, and how AI can build them for you.",
    publishedAt: today, readTime: "5 min",
    tags: ["concept map", "study method", "mind map"],
    body: `
Concept maps work because your brain stores information in a graph, not a list. A chapter you read top to bottom looks like a list. Your memory needs the connections.

## What a good concept map looks like

- 12 to 30 nodes (topics or sub-topics)
- Edges that mean something specific (causes, includes, requires, opposite of)
- Grouping by colour for related clusters
- One sentence per node

That is enough to revise from for an entire chapter.

## How to draw one fast

1. Read the chapter
2. Write each sub-heading on a Post-It
3. Put them on a wall and start drawing arrows
4. Take a photo for revision

Or use [Concept Map](/concept-map). Paste the chapter, get a graph back in 30 seconds.

## When concept maps work best

- Subjects with lots of relationships (biology, history, economics)
- Just before an exam to compress everything into one image
- For revising months after first studying — the graph is far easier to scan than the chapter

## When they don't help

- Pure procedural subjects like maths (use worked examples instead)
- Vocabulary (use flashcards instead)
- Anything you don't understand yet

[Build a concept map →](/concept-map)
`,
  },
  {
    slug: "step-by-step-math-solver",
    title: "Step-by-Step Math Solver: Use It Without Becoming Dependent",
    description: "A photo math solver is great for stuck moments. It is terrible for daily homework. Here is the difference and how to use it well.",
    publishedAt: today, readTime: "5 min",
    tags: ["step by step math", "photo math", "math solver"],
    body: `
There is a wrong way to use [Math Solver](/math-solver). You snap a photo, copy the answer, hand it in, learn nothing. Then you fail the test on the same idea.

The right way is different. Solver as a tutor, not a calculator.

## The right loop

1. Try the problem yourself for 5 minutes.
2. If stuck, snap and read *the steps*. Not the final answer.
3. Close the screen.
4. Redo the problem from scratch on paper.
5. Check the result.
6. If you still don't get it, use [Explain](/explain) on the technique itself.
7. Generate three more problems with [Problem Variants](/problem-variants) and drill them.

## What the solver does well

- Names the technique ("Using the quadratic formula:")
- Shows every step, including the boring ones students skip
- Catches sign errors and unit mistakes
- Suggests common pitfalls to watch for

## What it cannot replace

- Building intuition. That comes from doing 30 problems by hand.
- Your understanding of *why* the technique works.
- Your handwriting speed in an exam.

If you do 80% of your homework by hand and 20% with the solver, you will be ahead of every classmate using it the wrong way.
`,
  },
  {
    slug: "formula-sheet-builder",
    title: "Formula Sheets: Stop Memorising Lists, Start Memorising Triggers",
    description: "Formula sheets are useful only if they include the trigger phrase that tells you when to use each formula. Here is how to build one.",
    publishedAt: today, readTime: "5 min",
    tags: ["formula sheet", "math formulas", "physics formulas", "study aids"],
    body: `
A naked formula like \`F = ma\` is useless on its own. The exam question is not "what is F?" — it's "a 5 kg block is pushed across a frictionless table…". You need the *trigger* that says "this is an F = ma question".

## The trigger format

For each formula, write:

| Field | Example |
|---|---|
| Name | Newton's second law |
| Formula | F = ma |
| Use when | "Force needed to accelerate a mass" or "force on a single object" |
| Example | A 2 kg block accelerates at 3 m/s². Force = 6 N. |
| Trap | Make sure mass is in kg, not g. |

Five fields. Every formula. Done.

## Build it once per topic

[Formula Sheet builder](/formula-sheet) outputs this format for your subject and grade. Pick your topic, hit generate, paste into a notebook.

## How to revise from it

- Look at the *Use when* column, not the formula
- Cover the formula and try to write it from the trigger
- Cover the trigger and try to write triggers for the formula
- Two-way recall locks it in

## Common mistake

Including too many formulas. If you have 40 formulas on one page for one topic, you have not understood the topic. The high-mark formulas are usually the same 5–8 per chapter. Cut the rest.
`,
  },
  {
    slug: "ai-tutor-chat-tips",
    title: "Chatting With an AI Tutor: Five Tips That Make the Replies Useful",
    description: "AI replies are only as good as your prompts. Here are five tips that turn a generic chatbot into a useful tutor.",
    publishedAt: today, readTime: "5 min",
    tags: ["AI tutor chat", "AI prompts", "AI study buddy"],
    body: `
The same AI gives a B-grade reply or an A-grade reply depending on how you ask. Five tips, in order.

## 1. Tell it your situation

Generic: "explain photosynthesis"
Better: "explain photosynthesis at CBSE Class 9 level"
Best: this happens automatically once you finish [onboarding](/onboarding) — your country, age, and curriculum get baked into every reply.

## 2. Ask for the *method*, not the answer

"What is 2x² − 3x − 5 = 0?" → AI gives the answer.
"Show me the method to solve 2x² − 3x − 5 = 0 step by step, and name the technique." → AI teaches you.

The second prompt costs nothing more and is 10× more useful.

## 3. Use shorter follow-ups

Instead of giving up if the first reply is too long, ask: "make it simpler" or "give me a smaller example". The conversation gets sharper. Use the **Short / Long** toggle on [Chat](/chat) to control this.

## 4. Say "I don't get the part where…"

Be specific about what you don't understand. The AI cannot read your mind. It can adapt to a precise complaint.

## 5. Quiz yourself after

End the conversation with "ask me five questions on what we just discussed". The AI quizzes you. You retrieve. That five minutes of retrieval beats the previous ten of explanation.
`,
  },
  {
    slug: "past-papers-practice",
    title: "Why Past Papers Are the Single Best Use of Your Study Time",
    description: "Past papers expose exactly what your exam will ask. They are the highest-leverage thing you can do. Here is how to use them well.",
    publishedAt: today, readTime: "5 min",
    tags: ["past papers", "exam prep", "AI past papers"],
    body: `
Most exam boards repeat the same question types every year, with different numbers. Past papers expose the patterns. Two months of past papers usually beats six months of new content.

## How to do them well

1. **First past paper: open book, untimed.** Just to learn the format.
2. **Second to fourth: closed book, untimed.** Build accuracy.
3. **Fifth onwards: closed book, timed, exam conditions.** Build speed.

That progression is the cheat code.

## Where to get fresh past papers

- Official past papers from your board's website (limited supply)
- [Past Papers](/mock-exam) — generates fresh ones in your board's style by topic and decade

The generated ones are not real past papers, but they're synthesized in the same structure and difficulty, so they're great for drilling extra reps once you've used the official set.

## After every past paper

1. Mark it yourself
2. List every wrong answer in a mistake log
3. For each mistake, identify the topic
4. Drill that topic with [Quiz me](/quiz) or [Problem Variants](/problem-variants)
5. Make a flashcard for the trap you fell into
6. Re-attempt the wrong question two weeks later

The mistake log is the most underused study artifact. Most students throw away past papers after marking them. Don't.
`,
  },
  {
    slug: "ai-marking-feedback",
    title: "Get Your Essay Marked Instantly (and Why That's a Game-Changer)",
    description: "Waiting a week for teacher feedback on an essay is the slowest possible feedback loop. Here is how AI marking compresses it to seconds.",
    publishedAt: today, readTime: "5 min",
    tags: ["AI essay marker", "Mark my answer", "essay feedback"],
    body: `
Feedback loops are the cheat code of every skill. The faster you find out what's wrong, the faster you improve. In school, the loop is usually a week — write essay, hand in, wait, get a B, forget what you wrote.

AI feedback is instant. Use it as a first pass, not a replacement for your teacher.

## How to use [Mark My Answer](/grade)

1. Pick a past-paper question
2. Write your answer in 30 minutes
3. Paste both into the tool
4. Read the feedback critically
5. Rewrite the essay using the feedback
6. Hand the rewritten version to your teacher

That two-step loop produces work several grade boundaries above what you would have written alone.

## What the AI does well

- Finds vague sentences
- Suggests stronger thesis statements
- Catches missing analysis
- Points out where you didn't use the command word

## What it does less well

- Subjective judgment about your specific teacher's preferences
- Rewarding bold ideas (the AI is conservative)
- Catching factual errors in obscure topics

That's why you still hand in the rewrite to your teacher.

## Best for

- Cambridge and A Level essays
- AP DBQs
- GCSE language essays
- CBSE long-answer questions
- WAEC English essays
`,
  },
  {
    slug: "diagnostic-quiz-study-plan",
    title: "Diagnostic Quizzes: The Five-Minute Test That Saves You Twenty Hours",
    description: "Stop guessing your weak topics. A 10-question diagnostic plus an AI plan tells you exactly what to drill, in order.",
    publishedAt: today, readTime: "5 min",
    tags: ["diagnostic quiz", "study plan", "AI study plan"],
    body: `
Most students study what feels easy. That is the worst possible use of time. You should be drilling what makes you uncomfortable. The hard part is knowing what those topics are.

## The five-minute fix

[Diagnostic + plan](/diagnostic) gives you 10 questions across the curriculum. Five minutes later you have a ranked list of weak topics and a 7-day plan with daily tasks.

## Why it works

- You stop spending time on topics you already know
- You get a concrete daily target instead of "study more"
- You hit each weak topic from multiple angles (explain, quiz, flashcards, past paper)

## How to use the plan

- Stick to the daily tasks for one week
- At the end of the week, retake a smaller diagnostic on just the weak topics
- See if they moved
- If yes, drop them and tackle the next layer

That iterative loop is far better than studying everything every week.

## When to retake the full diagnostic

- After every exam
- At the start of a new term
- Whenever you feel lost

It is free, it takes five minutes, and it changes your week.
`,
  },

  // ─────────────── PARENT / FAMILY ───────────────
  {
    slug: "parents-help-with-homework",
    title: "How Parents Can Help With Homework Without Doing It For Them",
    description: "There is a way to help with homework that builds your child's confidence, and a way that destroys it. Here is the difference.",
    publishedAt: today, readTime: "6 min",
    tags: ["parent help homework", "parents", "study help for kids"],
    body: `
Doing your child's homework is the worst possible help. Refusing to help at all is the second worst. Most parents fall into one or the other.

There is a middle path. Use these five rules.

## 1. Sit beside them, not over them

Your job is to be present, not to be the supervisor. If you hover, they freeze. If you sit on the same side of the desk, you are a teammate.

## 2. Ask "what have you tried?" before anything else

This is the single most useful question in homework help. It forces your child to explain their thinking. Half the time, the act of explaining unblocks them.

## 3. If they are completely stuck, find the worked example

Not the answer. The worked example. Most textbooks have one for every topic. If not, [Math Solver](/math-solver) shows worked examples step by step.

## 4. Make them redo the question after the example

Cover the example. Make them try again. This is when learning happens. If you skip this step, you have done their homework for them.

## 5. Use AI tools, but check the answer with them

[Help in Study](/) is built around exactly this — show steps, never just answers. If the AI says something that surprises you, ask your child to verify against the textbook.

## What to do when you don't know the topic

You do not need to know the topic to help. You only need to ask three questions:

- "What is the question asking?"
- "What do you think you need to know to answer it?"
- "Where in your notes might that be?"

Those three questions teach the most valuable skill of all — knowing how to study.

## Use the parent dashboard

The [Parent dashboard](/parent) gives you a weekly recap of what your child has been working on, where they got stuck, and three questions you could ask at dinner to reinforce learning. Five minutes a week. No need to be a tutor.
`,
  },
  {
    slug: "screen-time-and-study",
    title: "Screen Time vs Study Time: How to Negotiate Without War",
    description: "Phones and study don't mix. But fighting about it makes things worse. Here are five rules that actually work in real homes.",
    publishedAt: today, readTime: "5 min",
    tags: ["screen time", "phones and study", "parents teens"],
    body: `
The phone in your child's pocket is the single biggest threat to their study time. It is also the biggest source of family arguments. Below are five rules that work in real homes — without fighting.

## 1. Phone-free homework hour

One hour a day, the phone goes in a basket on the kitchen table. Not "in another room". Not "on do not disturb". Physically in a basket where everyone can see it. Both you and your child put theirs in.

## 2. The 25-minute rule

Phones come back for a 5-minute break every 25 minutes. This is the Pomodoro method. The break is not optional — without it, the next 25 minutes won't happen.

## 3. No phone in the bedroom at night

Buy a cheap alarm clock. The phone charges in the kitchen overnight. This single rule fixes more sleep problems than anything else.

## 4. Negotiate, don't decree

If you announce a screen-time rule, your teenager will fight it. If you ask "what would feel fair?" and listen, they almost always pick the same rule themselves. The difference is buy-in.

## 5. Use the tools they're already using

A phone is not the enemy if it is being used for [Help in Study](/onboarding) instead of TikTok. [Flashcards](/flashcards) on the bus is more useful than 20 minutes of scrolling. Frame the phone as a study tool, not a forbidden object.

## What does not work

- Confiscating the phone after a bad mark
- Spying on apps
- Long lectures about screen damage
- Comparing your child to their cousin

Those tactics produce resentment, not study time.
`,
  },
  {
    slug: "weekly-recap-parent",
    title: "The Five-Minute Weekly Routine Every Parent Should Have",
    description: "You don't need to be a tutor. You need five minutes a week to know what your child is learning and which questions to ask at dinner.",
    publishedAt: today, readTime: "4 min",
    tags: ["parent dashboard", "weekly study check", "parents"],
    body: `
You don't need to remember high school chemistry to support your child's studies. You need a five-minute weekly routine.

## The routine

1. **Sunday night, 5 minutes.** Open the [Parent dashboard](/parent).
2. Read the AI-written recap. It tells you what your child worked on, what they got stuck on, and one suggestion for next week.
3. Pick *one* of the three dinner-table questions the recap suggests. Ask it during dinner this week. That is it.

## Why this works

Two things happen.

First, your child knows you know what they are studying. That is enough to make them more accountable, without you having to nag.

Second, the dinner-table question reinforces what they learned. The act of explaining it to a parent locks the memory in better than rereading.

## What if the recap is empty?

Empty recap = your child is not using the app. That is information. Have a non-confrontational conversation about it.

## When to escalate

The recap can flag patterns: too many late submissions, dropping quiz scores, repeated topics that keep coming back. If you see those, that is the moment to talk to the teacher — not before.
`,
  },

  // ─────────────── INTEGRATIONS ───────────────
  {
    slug: "google-classroom-ai-integration",
    title: "Connect Google Classroom to an AI Study Helper (and What It Does)",
    description: "How a free AI study helper can sync with Google Classroom to surface what's overdue, what's due soon, and what to study next.",
    publishedAt: today, readTime: "4 min",
    tags: ["Google Classroom", "AI Classroom", "AI study coach"],
    body: `
Most students use Google Classroom to *receive* assignments and *not much else*. The reminders are easy to ignore, the deadline view is buried, and there is no smart prioritisation.

When you connect Classroom to a study helper, three things happen automatically:

1. **Deadlines surface.** What is overdue, what is due in 3 days, what is due next week.
2. **AI study coach.** A short paragraph each morning telling you what to start on first based on deadline + your weakest topics.
3. **One-tap help.** From any assignment, jump straight to [Explain](/explain) or [Math Solver](/math-solver) on that topic.

## How to connect

[Open the Classroom integration page](/classroom) and click Connect. Sign in with the Google account you use for school. We only ever ask for read access — we cannot submit work, edit assignments, or post on your behalf.

## Privacy

We store the access token only. We do not read other Google services. Disconnect any time from [Settings](/settings).

## What changes day to day

You stop forgetting things. You stop scrambling on Sunday night. You start every morning with a clear "this first, then this" instead of an overwhelming list.

The biggest unlock is psychological. Anxiety about school comes mostly from "I don't know what to do next". Once that uncertainty disappears, study time gets easier.
`,
  },
  {
    slug: "microsoft-teams-ai-tutor",
    title: "Microsoft Teams + AI Tutor: A Quick Setup for Schools That Use Teams",
    description: "If your school is on Microsoft Teams, you can sync assignments to a free AI study helper in two clicks.",
    publishedAt: today, readTime: "4 min",
    tags: ["Microsoft Teams Education", "Teams AI", "school AI"],
    body: `
Many schools have switched from Google to Microsoft over the last few years. Teams Education is the dominant LMS in UK private schools and many European institutions. The integration with [Help in Study](/teams) is identical to Google Classroom — read access only, AI study coach, one-tap help.

## Setup in 60 seconds

1. Open [the Teams page](/teams)
2. Click Connect Microsoft Teams
3. Sign in with your school Microsoft 365 account
4. Confirm read access on the consent screen

Your classes appear immediately. Assignments and deadlines refresh on every visit.

## What this looks like in real use

- Monday morning, you open the app
- The AI coach lists the three things to start on this week
- One assignment is overdue — there is a yellow tag and a one-line suggestion to email your teacher
- The other two have due dates and links straight to [Explain](/explain) on the topic

## Privacy notes

- We only ever ask for read scopes
- We never submit, edit, or delete anything in Teams
- Token stored encrypted, deleted when you disconnect
- Available to any school Microsoft 365 account with Teams for Education enabled

## What the AI cannot do

- Write your assignment (you wouldn't want that — you'd fail the in-class one)
- See messages in chats
- See files outside your assignment folders

We're a study helper, not a surveillance tool.
`,
  },

  // ─────────────── COMPARISONS / GUIDES ───────────────
  {
    slug: "cbse-vs-igcse-vs-ib",
    title: "CBSE vs Cambridge IGCSE vs IB: Which AI Tutor Setup Suits You?",
    description: "Three of the world's most popular curricula reward different things. Here is how to set your AI tutor up so its answers match what your board wants.",
    publishedAt: today, readTime: "6 min",
    tags: ["CBSE", "IGCSE", "IB", "Cambridge", "curriculum comparison"],
    body: `
A CBSE student getting Cambridge-style answers from a generic chatbot is going to lose easy marks. Each board rewards different things — terminology, structure, command words.

## CBSE (India)

- **Rewards:** clean definitions, NCERT phrasing, neat diagrams
- **Pitfalls:** overwriting (a 2-mark question wants 2 facts, not a paragraph)
- **AI setup:** in [onboarding](/onboarding), pick CBSE. Every reply uses NCERT terminology and CBSE marking patterns.

## Cambridge IGCSE (international)

- **Rewards:** application of knowledge, command words, structured paragraphs
- **Pitfalls:** treating every question like a definition exercise
- **AI setup:** pick Cambridge IGCSE. The tutor will train you on command words and structure essay-style answers in AS/A-Level style.

## IB Diploma

- **Rewards:** higher-order thinking, TOK reflection, IA process
- **Pitfalls:** ignoring assessment criteria. Each IA / EE / TOK essay has a specific rubric — write to it.
- **AI setup:** pick IB Diploma. Use [Mark My Answer](/grade) before submitting any IA or essay.

## Multi-board students

Many students in Pakistan, India, GCC and Southeast Asia attend schools that teach two curricula in parallel — local board for grades, Cambridge for university applications. You can switch curriculum from [Settings](/settings) any time without losing study history.

## The single biggest mistake

Pasting a question into a generic AI without specifying your board. The reply might be technically right but in the wrong style — and that wrong style costs marks.

[Set up your curriculum →](/onboarding)
`,
  },
  {
    slug: "us-curricula-ap-sat-common-core",
    title: "AP, SAT, ACT, Common Core: Which Test Matters for Which Goal?",
    description: "American education has a confusing alphabet soup of tests. Here is what each one is for and how to prep with AI.",
    publishedAt: today, readTime: "6 min",
    tags: ["AP", "SAT", "ACT", "Common Core", "US college prep"],
    body: `
American high school is a pile of acronyms — AP, SAT, ACT, PSAT, NMSQT, IB, Common Core. Most students don't fully understand which one matters for what.

## The map

- **Common Core:** the underlying state-level standards your daily classes are based on. No external test, but state assessments tied to it (STAAR in Texas, etc.).
- **AP (Advanced Placement):** college-level courses you take in high school. AP exams in May. Score 3+ for college credit at most universities; 4+ at competitive ones.
- **SAT:** college admission test. Score range 400–1600. Test sections: Reading & Writing and Math.
- **ACT:** alternative to the SAT. Score range 1–36. Test sections: English, Math, Reading, Science, optional Writing.
- **PSAT/NMSQT:** practice SAT, taken in 11th grade. The NMSQT score determines National Merit semifinalists.

## Which to focus on

- For college admissions: SAT or ACT (most colleges accept either; pick whichever you score better on)
- For college credit: AP exams in subjects you're strong in
- For class grades: state assessments and AP class GPA

You don't need to take all of them. Take the SAT or ACT once or twice. Take AP exams only in subjects you're realistically aiming for 4+.

## How AI tutors fit

- **Daily class help:** [Explain](/explain) and [Math Solver](/math-solver) for homework
- **AP prep:** [Past Papers](/mock-exam) and [Mock Exam](/mock-exam) — the AP-style synthesis is good practice
- **SAT prep:** [Mock Exam](/mock-exam) for timed practice; [Vocab Builder](/vocab) for the reading section
- **Essay writing:** [Essay Coach](/essay-coach) for any AP essay or college application essay

## The college essay is not on this list

It's the most important piece of your application after your transcript. Don't let AI write it. Use [Essay Coach](/essay-coach) only for outline help and line edits. Your voice has to come through.
`,
  },

  // ─────────────── DEEPER TOPICS ───────────────
  {
    slug: "photosynthesis-explained-simply",
    title: "Photosynthesis Explained Simply (For Any Age)",
    description: "Photosynthesis in plain English. Plus four reframings: through Minecraft, cooking, factories, and a small village. Pick your favourite.",
    publishedAt: today, readTime: "5 min",
    tags: ["photosynthesis", "biology", "science explainer"],
    body: `
Plants eat sunlight and breathe out the air we breathe in. That's photosynthesis in one sentence. Everything below is a longer way of saying the same thing.

## The plain words version

A leaf takes in three ingredients:

- **Carbon dioxide** from the air (through tiny holes called stomata)
- **Water** from the soil (through the roots)
- **Sunlight** from above (caught by chlorophyll, the green stuff)

It uses the sunlight to break the water and reassemble the atoms into:

- **Glucose** (the plant's food)
- **Oxygen** (released into the air)

That's the whole reaction. The chemical formula is just bookkeeping for the same idea: \`6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂\`.

## Four reframings to make it stick

**Minecraft:** the leaf is a furnace. Sunlight is the coal. CO₂ and water are the iron ore. Glucose is the iron ingot. Oxygen is the smoke that comes out the top.

**Cooking:** the leaf is a kitchen. Sunlight is the heat. CO₂ and water are the ingredients. Glucose is the meal. Oxygen is the steam.

**Factory:** the leaf is a factory. Sunlight is electricity. CO₂ and water are the raw materials. Glucose is the product. Oxygen is the exhaust.

**Village:** the leaf is a village. Sunlight is the trader who arrives with energy. CO₂ and water are the gifts the trader brings. Glucose feeds the village. Oxygen is what the village exhales when it celebrates.

Pick whichever of these makes the chemistry click for you.

## What examiners want you to know

- Two stages: light-dependent (in the thylakoids) and light-independent (in the stroma)
- The light-independent stage is also called the Calvin cycle
- Limiting factors: light intensity, CO₂ concentration, temperature
- Compensation point: the moment when photosynthesis = respiration

If you can write those four bullets confidently, you have the photosynthesis question covered for almost any board.

[Explain another topic →](/explain)
`,
  },
  {
    slug: "quadratic-formula-step-by-step",
    title: "The Quadratic Formula, Step by Step (and Why You Should Memorise It)",
    description: "How to use the quadratic formula on any quadratic equation. Worked examples, common pitfalls, and why this one formula saves you from completing the square.",
    publishedAt: today, readTime: "5 min",
    tags: ["quadratic formula", "algebra", "step by step math"],
    body: `
The quadratic formula is one of the most useful things a 14-year-old learns. It will show up in physics, economics, computer science, and most engineering exams. Memorise it once, use it forever.

## The formula

For any equation in the form \`ax² + bx + c = 0\`:

\`x = (-b ± √(b² - 4ac)) / 2a\`

That's it. Three coefficients in. Two solutions out.

## Why ± gives two answers

The square root can be positive or negative, so you get two x-values. That matches the geometry — a parabola crosses the x-axis at most twice.

## Worked example

Solve \`2x² - 3x - 5 = 0\`

Step 1. Identify a, b, c.
- a = 2
- b = -3
- c = -5

Step 2. Compute the discriminant \`b² - 4ac\`.
- 9 - 4(2)(-5) = 9 + 40 = 49

Step 3. Take the square root.
- √49 = 7

Step 4. Apply the formula.
- x = (3 ± 7) / 4
- x = 10/4 or x = -4/4
- x = 2.5 or x = -1

Verify by substituting back. Both work.

## Common pitfalls

- **Wrong sign on b.** It's *minus* b, so if b is negative, you get +. Easy to mess up.
- **Forgetting to divide by 2a.** Half the wrong answers come from this.
- **Discriminant negative.** Means there are no real solutions, just imaginary. Don't try to sqrt a negative.

## When to use the quadratic formula vs. completing the square

- Use the formula when factoring is not obvious or impossible
- Use completing the square when you need the vertex form
- Use factoring when one factor is obvious (saves time in exams)

Memorise the formula. Get fast at it. It buys you marks across years of schooling.
`,
  },
  {
    slug: "pythagoras-theorem-when-to-use",
    title: "Pythagoras Theorem: When to Use It (and When You're Wasting Time)",
    description: "Pythagoras is one of the most over-used and under-understood theorems in school. Here is the trigger that tells you when to reach for it.",
    publishedAt: today, readTime: "4 min",
    tags: ["pythagoras", "geometry", "math"],
    body: `
\`a² + b² = c²\` is the most famous formula in school. It's also misused.

## When it applies

Only when you have a **right-angled triangle**, and you know two of the three sides.

If the triangle is not right-angled, Pythagoras doesn't work. Use the cosine rule instead.

## The trigger phrase

When you spot a right-angle marker (a small square in the corner) and you need a missing side, that is your moment.

## The two directions

- **Find the hypotenuse:** a² + b² = c² → c = √(a² + b²)
- **Find a leg:** c² - b² = a² → a = √(c² - b²)

The hypotenuse is always the longest side, opposite the right angle.

## Where students lose marks

- Plugging the hypotenuse where a or b should go. Always check: hypotenuse must be c.
- Forgetting the square root.
- Using it on a non-right triangle.

## Three-dimensional version

If you have a cuboid and need the diagonal, use Pythagoras twice. Find the diagonal of the base first, then use that with the height.

## Pythagorean triples worth memorising

3-4-5, 5-12-13, 8-15-17, 7-24-25. If you see any of these as two sides, the third is the same triple. Saves you the calculation.

[Try a worked example →](/math-solver)
`,
  },

  // ─────────────── SHORT NICHE ARTICLES ───────────────
  {
    slug: "gcse-english-quote-memorisation",
    title: "GCSE English Lit: Five Quotes Per Text Is All You Need",
    description: "Stop memorising 30 quotes. Pick five sharp ones per text and you can answer any question.",
    publishedAt: today, readTime: "4 min",
    tags: ["GCSE English Literature", "quote memorisation", "english lit"],
    body: `
Every year, GCSE English Literature students try to memorise 20–30 quotes per text and panic. That is the wrong strategy. Five sharp quotes per text is enough.

## The criteria for a sharp quote

- Three to ten words long (memorisable)
- Contains a literary device (metaphor, simile, juxtaposition)
- From a key moment in the text
- Versatile — applicable to multiple essay questions

## Example: Macbeth

- "Fair is foul and foul is fair" — establishes themes from line one
- "Unsex me here" — Lady Macbeth's ambition
- "Is this a dagger which I see before me" — guilt and hallucination
- "Out, damned spot!" — psychological collapse
- "Tomorrow and tomorrow and tomorrow" — nihilism in the final act

Five quotes. You can answer any question about Macbeth with them.

## How to memorise

- Write each quote on a [flashcard](/flashcards)
- One side: quote. Other side: which themes / characters it relates to.
- Review daily for one week, then twice weekly

## In the exam

Even if a quote you memorised isn't directly relevant, working it into the answer shows the examiner you know the text. Just make the link explicit.
`,
  },
  {
    slug: "ap-physics-derivations",
    title: "AP Physics: Why You Need to Memorise Every Derivation",
    description: "AP Physics often asks for derivations directly. The students who score 5 know them cold. Here is how to learn them painlessly.",
    publishedAt: today, readTime: "4 min",
    tags: ["AP physics", "physics derivations", "AP prep"],
    body: `
AP Physics 1, 2, and C all reward derivation knowledge directly. The College Board explicitly tests "given F = ma, derive..." or "starting from kinematic equations, show that...". If you don't know the derivations, you can't answer.

## The three-pass method

1. **Pass 1: read the derivation in your textbook line by line.** No copying yet. Just understand each line.
2. **Pass 2: cover the page. Try to write it from memory.** You will fail. Check.
3. **Pass 3: redo it on a fresh page. Aim to derive in under 90 seconds.**

Repeat until you can do it without thinking.

## The derivations to know cold for AP Physics 1

- Kinematic equations from first principles
- Work-energy theorem
- Conservation of momentum
- Centripetal acceleration formula
- Period of a pendulum

## For AP Physics 2

- Gauss's law
- Capacitance of a parallel plate capacitor
- RC circuit charging/discharging
- Bragg's law for wave diffraction

## For AP Physics C

- Everything above, but using calculus
- Maxwell's equations in integral form

## Use AI to drill

[Math Solver](/math-solver) walks every line. [Mock Exam](/mock-exam) generates AP-style derivation questions. [Flashcards](/flashcards) for the trigger lines.
`,
  },

  // ─────────────── PRACTICAL HELP ───────────────
  {
    slug: "how-to-take-good-notes",
    title: "Note-Taking That Actually Works (and the Cornell Method's Honest Verdict)",
    description: "Most note-taking advice is bad. Cornell, mind maps, outline — what works for which subjects? Here is the honest answer.",
    publishedAt: today, readTime: "5 min",
    tags: ["note taking", "Cornell method", "study skills"],
    body: `
You will see a hundred YouTube videos pushing the Cornell Method. Cornell is fine for some subjects and wrong for others. Here is the honest breakdown.

## Cornell Method — when to use

- Lectures with a clear narrative (history, social science, English literature)
- Subjects where you'll re-read your notes weeks later
- When you have time after class to write the summary section

The Cornell layout: main notes on the right, cue questions on the left, summary at the bottom. The summary is the part most students skip — and it is the part that matters.

## When *not* to use Cornell

- Maths and physics. Cornell can't fit equations and diagrams cleanly. Use a plain notebook with diagrams in the margins.
- Languages. Use a vocabulary log + a grammar reference. Cornell is overkill.
- Lab classes. The lab notebook layout is what you need.

## The outline method

A simple indented bullet structure. Boring but effective. Use this when:

- The lecturer is slow and structured
- You're rewriting from a textbook
- You don't need to re-read for months

## The mapping method

Concept maps. Use this when:

- You're revising before an exam
- Topic has lots of relationships (biology, history, economics)
- See [Concept Map](/concept-map) for an AI version

## What never works

- Copying word-for-word from the slides
- Note-taking on a laptop (typing is too easy, you don't process)
- Using five different colours
- Making notes "look pretty" — that's procrastination

## What to do with your notes after class

Within 24 hours, summarise each lecture in 5 bullet points. That summary is what you'll re-read for the exam. The full notes are scaffolding.
`,
  },
  {
    slug: "study-music-vs-silence",
    title: "Music While Studying: What Works, What Doesn't",
    description: "Lo-fi, classical, white noise, silence — the research is clearer than people think. Here is the breakdown.",
    publishedAt: today, readTime: "4 min",
    tags: ["study music", "concentration", "study tips"],
    body: `
The "best music for studying" debate has more opinions than evidence. Here is what the research actually says.

## What helps

- **Music without lyrics.** Lyrics compete with the language part of your brain.
- **Predictable, low-arousal music.** Lo-fi, ambient, classical without sudden tempo changes.
- **Background, not foreground.** If you find yourself listening to it, it's too loud.

## What hurts

- **Music with lyrics in your study language.** Lyrics in a language you don't understand are usually fine.
- **Heavy bass or sudden volume changes.** Forces your brain to attend.
- **Dynamic playlists.** Spotify's auto-shuffle keeps surprising you.

## Silence vs music

For most students on most subjects, music helps because it masks distractions. For students with ADHD, music often helps significantly. For students doing reading-heavy work, silence usually wins.

## The honest test

Try one week with music, one week without. Count how many problems you finish per hour. Pick the winner.

## What actually matters more than music

- Where you study (a quiet, well-lit space)
- How long the session is (45-90 minute blocks)
- Phone in another room
- Hydration and sleep the night before

Music is the smallest variable. Don't optimise it before optimising those four.
`,
  },
  {
    slug: "best-time-to-study",
    title: "What Time of Day Is Best for Studying?",
    description: "Mornings are not magically better. Here is the honest answer based on chronotype, plus the rule that beats every chronotype trick.",
    publishedAt: today, readTime: "4 min",
    tags: ["study time", "study schedule", "chronotype"],
    body: `
"Wake up at 5 AM and study before school" is bad advice for most teenagers. Adolescent biology pushes the natural sleep-wake window 1-2 hours later. Forcing 5 AM study just creates sleep debt.

## Chronotypes

- **Lark:** peaks in the morning. ~25% of people. 5 AM works.
- **Owl:** peaks in the evening. ~25% of teens. Don't fight it.
- **In between:** most people. Study after lunch and after dinner.

## The bigger rule

Time of day matters less than:

- Did you sleep 8+ hours last night?
- Did you eat in the last 3 hours?
- Have you exercised today?

Optimise those three before worrying about whether 6 AM beats 9 PM.

## A practical schedule

For most teens:

- Light review in the morning before school (15 min)
- Hardest subject in the afternoon block right after school (45 min)
- Lighter review or flashcards after dinner (20 min)
- Bed by 10:30, ideally

Adjust based on whether you're a lark, owl, or in between.

## Avoid

- Studying after midnight regularly. The cost in the next-day lecture comprehension is huge.
- Skipping breakfast and trying to study. Hunger destroys focus.
- Caffeine after 3 PM. Half-life is 6 hours.

## When you have to cram

If you have to cram for one day:
- Sleep the night before (yes, even instead of cramming)
- Eat protein for breakfast
- Study in 45-minute blocks with 10-minute breaks
- Do a [Mock Exam](/mock-exam) at lunch
- Light review before bed
`,
  },
  {
    slug: "group-study-vs-solo",
    title: "Group Study vs Studying Alone: The Honest Trade-off",
    description: "Group study is mostly social. Solo study is mostly productive. Both have a place. Here is when to pick which.",
    publishedAt: today, readTime: "4 min",
    tags: ["group study", "study habits"],
    body: `
"Let's study together" is mostly a social plan. The actual studying is usually 30 minutes inside a 3-hour hangout. That can still be useful — but only if you know what you're using it for.

## When group study works

- **Explaining a concept to someone.** Teaching is the best test of understanding.
- **Practising past papers.** Exchanging marked papers gives you a peer's perspective.
- **Brainstorming essay ideas.** Three brains beat one.
- **Quiz drills.** Two people taking turns asking questions runs faster than alone.

## When group study is a trap

- Exam memorisation. You can't memorise socially.
- Math drills. Pace mismatches kill you.
- Anything where one person dominates the talking.
- Anything where snacks > studying.

## The two-hour rule

Study alone first for two hours. Then meet a friend for an hour. Get the focus work done while you can still focus. Use the group time for the explaining and discussion.

## Online groups

Discord study servers and "study with me" video calls work because they replace social motivation without the snacks. They are surprisingly effective if your group is quiet.

## A working format

- Each person picks one weak topic for the week
- Day 1: study alone
- Day 2: meet for 60 minutes, each person teaches the others their topic
- Day 3: solo drill
- Day 4: group quiz session

That structure beats a 4-hour study group every weekend.
`,
  },

  // ─────────────── MISC ───────────────
  {
    slug: "ai-and-cheating",
    title: "Is Using AI for Homework Cheating? An Honest Answer.",
    description: "There is a clear line between AI as a tutor and AI as a ghostwriter. Here is where it sits, and how to stay on the right side.",
    publishedAt: today, readTime: "5 min",
    tags: ["AI cheating", "academic integrity", "AI homework"],
    body: `
The honest answer: it depends on what you're doing with it. There is a clear line, and most students intuit it but don't articulate it.

## The line

- **AI as tutor:** you do the work, AI explains the parts you don't get. Same as having a human tutor, except free and 24/7.
- **AI as ghostwriter:** AI does the work, you submit it. That's cheating, the same way submitting your sibling's essay would be.

## The grey zone

- AI helps you outline an essay → tutor (acceptable)
- AI rewrites your sentences → grey, leaning ghost (depends on school policy)
- AI generates a draft, you edit → grey, leaning ghost
- AI grades your essay and you rewrite → tutor (acceptable, even encouraged)

## The two-question test

Before submitting any work that touched AI, ask yourself:

1. **Could I produce something similar from scratch on a closed-book exam?**
2. **Do I understand every sentence in what I'm submitting?**

Both yes → tutor use. Submit.
Either no → ghost use. Don't submit.

## Why this matters beyond ethics

The in-class assessment is coming. The exam hall is coming. The job interview is coming. Every time you skip the work, you're storing up a bigger problem.

The students who get away with AI ghostwriting in middle school have nervous breakdowns in their first university exam. Don't be them.

## Use AI like this

- [Explain](/explain) for parts you don't get
- [Math Solver](/math-solver) for steps, not answers
- [Quiz me](/quiz) and [Mock Exam](/mock-exam) for self-testing
- [Mark My Answer](/grade) for feedback before your teacher sees it
- [Flashcards](/flashcards) for memory work

That's not cheating. That's the best free tutor you'll ever have.
`,
  },
  {
    slug: "how-much-sleep-students",
    title: "How Much Sleep Should Students Actually Get?",
    description: "The student sleep debate is mostly a math problem. Here are the actual numbers, plus what gets sacrificed when you skimp.",
    publishedAt: today, readTime: "4 min",
    tags: ["student sleep", "sleep and learning"],
    body: `
The CDC, NHS, and every sleep researcher converge on the same numbers:

- **Ages 6-12:** 9-12 hours
- **Ages 13-18:** 8-10 hours
- **Adults 18+:** 7-9 hours

Most students get 6-7. That's the equivalent of a mild concussion in cognitive terms.

## What sleep does for studying

- Memory consolidation (the day's learning gets locked in during deep sleep)
- Emotional regulation (worse mood = worse focus next day)
- Glucose metabolism in the brain (your prefrontal cortex *eats sugar*)
- Disease resistance (sick teens lose study days)

## What gets sacrificed when you skip sleep

- Working memory drops 30–40% on 6 hours of sleep
- Reaction time drops by the equivalent of being legally drunk after 18 hours awake
- Mood regulation collapses (irritability, panic spikes)
- Long-term memory consolidation does not happen at all in lost REM

## The pre-exam math

- Cramming until 1 AM = +3 hours of study
- The 6 hours of sleep that follows = -30% next-day cognition
- Net: you walk into the exam at 70% of your capacity

That trade is rarely worth it. Sleep instead.

## How to actually sleep more

- Phone in the kitchen at night
- Same bedtime every night, weekends included (within 30 minutes)
- No caffeine after 3 PM
- Cool, dark room
- No screens in the last 30 minutes before bed

## When you can't sleep

Don't lie awake for an hour. Get up, read a book in dim light for 10 minutes, then try again. Forcing it makes it worse.
`,
  },
  {
    slug: "handwritten-notes-vs-typed",
    title: "Handwritten vs Typed Notes: The Research Is Clear",
    description: "Multiple studies, same result — handwriting wins. Here is the why and the practical implication.",
    publishedAt: today, readTime: "4 min",
    tags: ["handwritten notes", "typing notes", "note taking research"],
    body: `
Mueller and Oppenheimer's 2014 paper "The Pen Is Mightier Than the Keyboard" is the foundational study. Multiple replications have found the same: students who write notes by hand outperform students who type them on memory and conceptual tests.

## Why

When you type, you can transcribe at the lecturer's speed. So you transcribe — your brain does no processing. The notes look great, but you don't remember the content.

When you handwrite, you can't transcribe fast enough. You're forced to summarise in real time. That summarising is the learning.

## What this means in practice

- **First-time exposure (lectures):** handwrite if at all possible.
- **Rewriting / cleaning up notes after class:** typing is fine — you've already processed.
- **Maths and physics:** always handwritten. The diagrams are non-negotiable.
- **Code:** type the code (obviously) but write notes about it on paper.

## The iPad middle ground

iPad with Apple Pencil scores like handwriting in the studies. The motor activity is what matters, not the paper. Tablets are fine if you actually use the stylus.

## What does not work

- Typing a perfect transcription of every word the lecturer says
- Recording the lecture and re-listening at 2× speed (you don't process — you just hear)
- Copying friend's notes (no processing)

## The five-minute rule

After class, spend five minutes summarising your handwritten notes into a one-paragraph summary. That summary is what you'll re-read for the exam. The full notes are scaffolding.
`,
  },
  {
    slug: "exam-day-checklist",
    title: "The Exam-Day Checklist That Stops You Forgetting Something",
    description: "Forgetting your calculator costs more than you think. Here is the full checklist, the night-before, and the morning-of.",
    publishedAt: today, readTime: "4 min",
    tags: ["exam day", "exam checklist", "exam prep"],
    body: `
Forgetting your calculator costs you marks you should never have lost. Here is the full checklist for the night before and the morning of any exam.

## The night before

- [ ] Pack your bag
- [ ] Two pens, two pencils, eraser, sharpener, ruler, protractor, geometry box if needed
- [ ] Calculator with fresh batteries (test it!)
- [ ] Watch (mechanical, not smart)
- [ ] Water bottle (clear, no labels in many UK exam halls)
- [ ] Admit card / candidate number / school ID
- [ ] Tissues
- [ ] Layer of clothing (exam halls run cold)
- [ ] Phone in the kitchen, not on the bedside table
- [ ] Bed by 10:30 PM

## The morning of

- [ ] Eggs and toast or oats — protein + complex carbs
- [ ] Water (not just coffee)
- [ ] Read your one-page summary, no new material
- [ ] Leave 15 minutes earlier than you think you need
- [ ] Two box breaths before walking in

## In the hall

- [ ] Read the whole paper for 5 minutes before answering
- [ ] Underline command words on every question
- [ ] Easiest question first
- [ ] If a question feels impossible after 90 seconds, skip it
- [ ] Watch your time — 1 mark = 1 minute is a useful rule
- [ ] Last 10 minutes: review answers, fix any unanswered questions

## After

Don't dissect the paper with classmates immediately. It only spikes anxiety. Go for a walk. Eat. Check the next exam's date.

Most papers feel worse than they are. Wait for the result before judging.
`,
  },
  {
    slug: "five-minute-revision-trick",
    title: "The Five-Minute Trick That Beats Most Revision Sessions",
    description: "End every study session with five minutes of pure recall. It sounds trivial. It changes everything.",
    publishedAt: today, readTime: "3 min",
    tags: ["revision", "active recall", "study tips"],
    body: `
Most study sessions end with the student closing the book and getting a snack. The actual learning happens in the five minutes you skip — the recall.

## The trick

After every 30-minute study block, set a five-minute timer. No notes. Write everything you remember from the last 30 minutes.

That's it. That five minutes is worth more than the previous twenty.

## Why

- It activates retrieval, not just exposure
- It exposes the gaps in your understanding
- It signals your brain that the material matters
- It compresses the day's learning into a written summary

## How to do it

Open a fresh page. Set the timer. Write fast. Bullet points. Don't worry about neatness. When the timer goes, check what you missed against your notes.

## The next-day version

The next morning, before opening any book, do another five-minute recall on yesterday's topic. This is the spaced repetition working at its best. By day 7 you won't need to look at the original notes.

## Pair it with [Quiz me](/quiz)

For maximum effect, after the five minutes of recall, paste your topic into [Quiz me](/quiz) and get 5 questions. Attempt them. The combination of free recall + structured retrieval is brutally effective.

That's 10 minutes total. Beats most one-hour study sessions.
`,
  },
  // ─────────────── EXTRA SUBJECT KEYWORDS ───────────────
  {
    slug: "help-in-study-psychology",
    title: "Help in Study: Psychology — Memorising Studies Without Drowning",
    description: "AP Psychology, GCSE Psychology, and A Level Psychology all rely on named studies. Here is how to learn them so they stick.",
    publishedAt: today, readTime: "5 min",
    tags: ["help in study psychology", "AP psychology", "GCSE psychology"],
    body: `
Psychology exams reward two things: clean definitions and named studies. Most students underprepare on the studies. The way to memorise studies is the same way actors memorise scripts — chunk them.

## The four-card chunk

For each named study, make four flashcards:

- Aim
- Method (one sentence)
- Findings (one sentence)
- Critique (one sentence)

Twenty studies × 4 cards = 80 cards. That covers most of any psychology exam.

## High-leverage studies

For most boards:

- Asch (conformity)
- Milgram (obedience)
- Loftus and Palmer (eyewitness testimony)
- Bowlby (attachment)
- Sperry (split-brain)
- Bandura (Bobo doll)
- Zimbardo (Stanford prison) — note ethical critique
- HM (memory)

Memorise these in the four-card format and you can answer most named-study questions across boards.

## Use AI for the critique angle

A levels and AP reward critical evaluation. Use [Mark My Answer](/grade) on a sample answer to see how the AI critiques your evaluation paragraph.

## What examiners actually want

Most psychology questions ask you to *apply* a study to a scenario. Memorising the four cards above is necessary. Knowing how to apply them is what gets you the A.
`,
  },
  {
    slug: "help-in-study-pe",
    title: "Help in Study: PE — The Underrated Theory Marks",
    description: "GCSE / A Level PE is half practical, half theory. The theory papers are mark-bookable if you know where the easy points live.",
    publishedAt: today, readTime: "5 min",
    tags: ["help in study PE", "GCSE PE", "A Level PE", "physical education"],
    body: `
Most PE students focus on the practical and underprep the theory. Then they're surprised when the theory paper drops their grade. The theory has predictable mark-earning patterns — learn them.

## Topics that come up every year

- Components of fitness (10 to memorise: aerobic endurance, strength, speed, flexibility, body composition, agility, balance, coordination, power, reaction time)
- Energy systems (aerobic, anaerobic glycolysis, ATP-PC)
- Muscle types and contractions (isotonic, isometric, eccentric, concentric)
- Cardiovascular and respiratory systems
- Methods of training (continuous, fartlek, interval, circuit, plyometric, weight)
- Nutrition (the seven nutrients)
- Skill classification (open/closed, simple/complex, gross/fine)

Make a [Concept Map](/concept-map) of these.

## The mark-scheme tactic

PE mark schemes use specific terminology. If you say "the heart beats faster" you might get one mark. If you say "stroke volume increases, leading to a higher cardiac output" you might get three. Use [Mark My Answer](/grade) to learn the technical phrasing.

## The case-study question

Some boards ask you to apply theory to a named athlete or sport. Pick one sport, learn one athlete, drop them into every relevant question. The marker doesn't care whether your example is original — they care that it's relevant.

## Practical tips

- The practical assessment is mostly about consistent improvement
- Coach feedback in advance is worth more than any tactic
- Don't try a new sport for assessment. Pick what you're already strong at.
`,
  },
  {
    slug: "help-in-study-art",
    title: "Help in Study: Art — How to Get Top Marks Without Being the Best Drawer",
    description: "Art exams are not about being the best drawer. They are about process. Here is what examiners look for and how to show it.",
    publishedAt: today, readTime: "5 min",
    tags: ["help in study art", "GCSE art", "A Level art", "art portfolio"],
    body: `
The student who can't draw beats the student who can — if the first one shows process. Art exams reward documentation as much as the final piece.

## What examiners want to see

- A clear theme that develops through the project
- Research from at least three artists (with thoughtful annotation, not just biographies)
- Experimentation with multiple media
- Honest reflection on what worked and what didn't
- A final piece that links visibly to the journey

## How to fail

- Skip to the final piece without showing the journey
- Copy an artist's style without saying why
- Ignore the brief
- Hand in beautiful work that has no theme

## Use AI as a research helper, not an art generator

Don't use AI to make the art. That defeats the point. Use it for:

- Research summaries on artists ([Explain](/explain))
- Idea generation when you're stuck ([Chat](/chat))
- Vocabulary for your artist statements ([Vocab](/vocab) or [Essay Coach](/essay-coach))

## The annotation that wins marks

For every piece in your sketchbook, write three sentences:

- What I tried
- What worked
- What I'd do differently

Three sentences per page. Sketchbooks with 30 such pages outscore sketchbooks with 10 polished pieces almost every time.
`,
  },
  {
    slug: "ai-tutor-arabic-dialects",
    title: "Arabic Dialects vs Modern Standard: Which to Learn First",
    description: "MSA gets you reading. Dialects get you talking. Here is how to balance both with AI tools.",
    publishedAt: today, readTime: "5 min",
    tags: ["arabic dialects", "MSA Arabic", "learn arabic"],
    body: `
The biggest debate in learning Arabic is whether to start with Modern Standard Arabic (MSA) or a dialect (Egyptian, Levantine, Gulf, Maghrebi). The right answer depends on your goal.

## If your goal is academic

Start with MSA. School exams, news, books, and Quranic Arabic all use it. Once you have MSA you can pick up any dialect by exposure.

## If your goal is travel or family

Start with the dialect of where you're going. MSA will sound formal and weird in conversation in Egypt or Lebanon. Dialect-first means you talk faster.

## If your goal is both

Do MSA on weekdays, dialect listening on weekends.

## How AI tools help

- [Vocab Builder](/vocab) — pick Arabic, get word in MSA. Then ask follow-up "how would this be said in Egyptian?" via [Chat](/chat).
- [Translation Mode](/translate) — translates MSA to English while keeping technical terms.
- [Explain](/explain) — for grammar concepts in plain English.

## What AI cannot replace

- Pronunciation. You need to listen to native speakers and repeat. AI can tell you a word means "good" but cannot teach you the throat sounds.
- Conversation. Find a language partner.
- Handwriting practice. The script is muscle memory.

## A working schedule for a beginner

- Daily: 10 new vocabulary cards in [Flashcards](/flashcards)
- Weekly: one news article, slowly
- Weekly: one episode of an Arabic-language show with subtitles
- Monthly: one written paragraph corrected by [Essay Coach](/essay-coach)

That schedule gets a beginner to functional in about a year.
`,
  },
  {
    slug: "best-calculator-students",
    title: "Calculator Tips Most Students Don't Know",
    description: "If you only use the calculator for adding and multiplying, you're leaving marks on the table. Six tips for math, physics, and exam day.",
    publishedAt: today, readTime: "4 min",
    tags: ["calculator tips", "math calculator", "exam calculator"],
    body: `
A scientific calculator has functions students don't realise they're allowed to use. Six that pay off:

## 1. ANS

After every calculation, the answer is stored in ANS. To use it in the next calculation, press the ANS key (often labelled Ans). Saves rewriting numbers and avoids transcription errors.

## 2. The fraction key

Most modern calculators have a proper fraction display. Use it. Decimals lose precision; fractions don't.

## 3. The TABLE function

Casio fx-991 and similar can plot a table of values for any function. Useful in coordinate geometry, calculus, and statistics.

## 4. SOLVE and EQN

Some scientific calculators can solve equations directly. Check whether yours allows this in your exam (most A Level / AP exams do).

## 5. Standard form / scientific notation

Press the SHIFT+x10^n key. Saves typing zeros for chemistry molarity questions and physics powers-of-ten questions.

## 6. Memory keys (M+, M-, MR)

Underused. Store an intermediate result in memory while you continue with another calculation.

## Use [Help in Study Calculators](/calculator) for the things your physical calculator can't do well

- Percentage chains
- GPA computation
- Ratio solving
- Average / median / mode

The web calculators are designed for the homework questions students Google daily.

## Exam-day calculator checklist

- Fresh batteries
- Approved model for your board
- Clear memory before walking in (most boards require this)
- Spare calculator if you have one

Forgetting your calculator is the most expensive mistake on exam day.
`,
  },
  {
    slug: "translation-tools-for-students",
    title: "Translation Tools for Students: The Difference Between Google Translate and an AI Tutor",
    description: "Google Translate gives you a sentence. An AI tutor explains why. Here is the difference and when each is right.",
    publishedAt: today, readTime: "4 min",
    tags: ["AI translation", "google translate", "translation for students"],
    body: `
Google Translate is fine for ordering coffee in another country. It is bad for learning a language. Here is why.

## What Google Translate does

- Gives you a usable sentence in 1 second
- Doesn't tell you why words are arranged that way
- Doesn't keep technical vocabulary in the original language
- Sometimes mangles idioms

## What an AI tutor does

- Translates while keeping technical terms in the source language (so you don't lose them on the exam)
- Explains the grammar choices ("the verb is in the subjunctive because...")
- Gives example sentences in both directions
- Flags vocabulary the student should add to flashcards

[Translation Mode](/translate) does the second one. It's built specifically for studying.

## The example that shows the difference

Translate "the cat sat on the mat" into French.

- Google: *Le chat s'est assis sur le tapis.*
- AI tutor: same sentence, plus a note that *s'asseoir* is reflexive in French because the cat is doing the sitting *to itself*. Plus a flashcard suggestion for "tapis" (mat).

The first is faster. The second teaches you French.

## When to use which

- Quick check while reading: Google
- Studying for the exam: AI tutor
- Learning a new language: AI tutor
- Travelling: Google
`,
  },
  {
    slug: "ai-tutor-vs-private-tutor",
    title: "AI Tutor vs Human Tutor: Honest Comparison After Six Months of Use",
    description: "Both have a place. Here is what an AI tutor does better, what a human tutor does better, and how to combine them on a student budget.",
    publishedAt: today, readTime: "6 min",
    tags: ["AI tutor vs human tutor", "private tuition", "study help"],
    body: `
Private tutors are great. They're also expensive — typically $30 to $80 per hour in major cities. AI tutors are free. Most students need both.

Here is the honest split.

## What a human tutor does better

- Builds confidence over weeks
- Reads emotional cues and adjusts
- Catches handwriting, spelling, neatness issues
- Holds you accountable
- Knows your specific exam board's quirks deeply
- Can teach a skill they personally struggled with as a student
- Advocates for you with school if needed

## What an AI tutor does better

- 24/7 availability
- Patient with the same question asked 50 times
- Vast topic coverage instantly
- Gives step-by-step working that's hard for a tutor to type out at speed
- Free (huge for families on a budget)
- Generates infinite practice questions ([Quiz me](/quiz), [Mock Exam](/mock-exam))
- Marks essays in your board's style ([Mark My Answer](/grade))

## The best combination on a student budget

- AI for daily homework help, drills, flashcards, mock exams
- Human tutor once every 2 weeks for the topics that aren't clicking
- AI for marking essays, tutor reads the AI's feedback and adds their own

Two tutor sessions a month + AI = the same outcome as four tutor sessions a month, at half the cost.

## When you actually need a tutor

- You're a year behind and need to catch up
- The teacher's classroom style doesn't fit you
- Specific high-stakes test prep (AP exams, final board exams)
- You need someone to say "you can do this" once a week

## When AI is enough

- You're at grade level
- You're motivated
- You have basic study habits in place
- You can recognise when your understanding is shaky

Most students fit the second category and don't realise it.
`,
  },
  {
    slug: "best-apps-for-students-2026",
    title: "Best Apps for Students in 2026 (Free Tier Tested)",
    description: "Notion, Anki, Notability, GoodNotes, and the rest. Which actually help, which are productivity theatre.",
    publishedAt: today, readTime: "6 min",
    tags: ["best apps for students", "study apps", "productivity"],
    body: `
A new study app comes out every week. Most of them are productivity theatre. Here is what actually helps.

## The genuinely useful

- **Anki / Quizlet / [Help in Study Flashcards](/flashcards):** spaced repetition flashcards
- **Notion / Obsidian / Apple Notes:** one notebook per subject, searchable
- **GoodNotes / Notability:** if you have an iPad with a stylus
- **Forest / Pomofocus:** phone in another room, focus timer
- **Anki:** if you can stand its UI, it's the gold standard for memory work
- **[Help in Study](/onboarding):** the umbrella that covers explain, quiz, past papers, math solver, flashcards, mock exams

## The productivity theatre

- **Aesthetic note-taking apps:** if your notes are pretty, you spent the study time on aesthetics, not learning
- **Habit trackers with 50 metrics:** the app becomes the project
- **Multi-app setups (Notion + Todoist + Calendar + Anki + Forest):** the maintenance overhead eats your study time

## A working stack

- One note-taking app (whichever you'll actually open)
- One flashcard app (Anki, Quizlet, or [Flashcards](/flashcards))
- One AI tutor ([Help in Study](/onboarding))
- One focus timer
- One calendar (default phone calendar is fine)

Five apps. No more. Anything else is procrastination.

## The phone problem

The phone in your pocket is the biggest enemy of every productivity app on it. Counterintuitive but true.

If you can't put the phone in another room, install Forest or set Screen Time limits on social apps. The friction is enough to break the doom-scroll loop.
`,
  },
  {
    slug: "what-is-percentage-formula",
    title: "How to Calculate Percentages (Three Ways That Cover Everything)",
    description: "Percentages are the most-asked maths topic on Google. Here are the three formulas that cover every percentage question.",
    publishedAt: today, readTime: "4 min",
    tags: ["percentage formula", "how to calculate percentage", "math formulas"],
    body: `
"How to calculate percentage" is one of the most-Googled maths queries every year. The three formulas below cover almost every situation.

## 1. X% of Y

Multiply the percent (as a decimal) by Y.

- 25% of 200 = 0.25 × 200 = 50
- 8% of 4500 = 0.08 × 4500 = 360

This is the everyday percentage. Sales tax, tips, exam scores out of total marks.

## 2. X is what % of Y?

Divide X by Y, multiply by 100.

- 17 is what % of 50? → 17 ÷ 50 × 100 = 34%
- 9 is what % of 60? → 9 ÷ 60 × 100 = 15%

This is for converting raw scores to percentages. Useful for grade calculation.

## 3. % change from A to B

Subtract A from B, divide by A, multiply by 100.

- From 80 to 92: (92 - 80) / 80 × 100 = 15% increase
- From 200 to 150: (150 - 200) / 200 × 100 = -25%, i.e. 25% decrease

This is for tracking change over time. Population growth, income growth, exam improvement.

## Quick sanity checks

- 100% of something is the whole thing
- 50% is half
- 25% is a quarter
- 10% is moving the decimal one place left
- 1% is moving it two places left

Use those for ballpark estimates before computing exactly.

## Try them on the calculator hub

Open [Calculators](/calculator) and pick the Percentage tab. All three formulas, side by side.
`,
  },
];

// Append batch-2 (50 more articles) and batch-3 (12 more) to the original 65 above.
POSTS_ALL.push(...POSTS_BATCH_2, ...POSTS_BATCH_3);

// ─── Focus-to-five blog cleanup ───
// Posts removed from the LIVE blog — off-topic for our five exam systems,
// dead-feature ads, IB (not one of the five), or merged duplicates. Kept in
// source for reference; each 301-redirects to the mapped target below.
export const BLOG_REDIRECTS: Record<string, string> = {
  // off-topic foreign-language posts → English hub
  "ai-arabic-tutor": "/help-in-study/english",
  "ai-tutor-arabic-dialects": "/help-in-study/english",
  "ai-french-tutor": "/help-in-study/english",
  "ai-spanish-tutor": "/help-in-study/english",
  "spanish-ser-vs-estar": "/help-in-study/english",
  "mandarin-tones-for-beginners": "/help-in-study/english",
  "japanese-hiragana-memorisation": "/help-in-study/english",
  "german-cases-simplified": "/help-in-study/english",
  "ielts-writing-band-9-tips": "/help-in-study/english",
  // non-five exams (civil service, Pakistan boards) → study-skills / seasonal pillar
  "upsc-prep-beginner-guide": "/blog/how-to-study-for-exams",
  "css-pakistan-exam-prep": "/blog/how-to-study-for-exams",
  "nts-test-prep-pakistan": "/blog/how-to-study-for-exams",
  "matric-fsc-pakistan-exam-prep": "/blog/2026-board-exam-survival-kit",
  // dead-feature ads
  "microsoft-teams-ai-tutor": "/blog/best-free-ai-study-helper-2026",
  "google-classroom-ai-integration": "/blog/best-free-ai-study-helper-2026",
  "diagnostic-quiz-study-plan": "/blog/how-to-study-for-exams",
  "weekly-recap-parent": "/blog/parents-help-with-homework",
  // merged duplicates → canonical
  "five-minute-revision-trick": "/blog/active-recall-vs-rereading",
  "how-to-use-ai-flashcards": "/blog/spaced-repetition-explained",
  "study-plan-for-exams": "/blog/ai-revision-timetable-30-days",
  "step-by-step-math-solver": "/blog/ai-study-helper-math",
  "forces-and-motion-physics": "/blog/newtons-laws-explained",
  "concept-map-study-method": "/blog/mind-maps-for-revision",
  "study-music-vs-silence": "/blog/study-music-vs-silence-myth",
  // IB — not one of the five boards
  "ib-diploma-prep": "/blog",
  "cbse-vs-igcse-vs-ib": "/blog",
  // Non-five entrance/admission exams (JEE/NEET = India, SAT/ACT = US) → subject hubs
  "jee-mains-prep": "/help-in-study/math",
  "jee-mains-physics-problem-types": "/help-in-study/physics",
  "neet-biology-strategy": "/help-in-study/biology",
  "neet-biology-diagram-memorisation": "/help-in-study/biology",
  "sat-math-timing-strategy": "/help-in-study/math",
  "act-science-section-tips": "/blog/how-to-study-for-exams",
  "us-curricula-ap-sat-common-core": "/blog",
};

export const POSTS: Post[] = POSTS_ALL.filter((p) => !BLOG_REDIRECTS[p.slug]);

export function findPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
