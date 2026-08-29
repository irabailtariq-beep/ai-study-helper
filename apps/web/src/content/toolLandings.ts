// Query-matched landing pages that embed an existing tool — the pattern tiny
// sites use to carpet tool-intent SERPs ("ai marker gcse") with one product.
// Populated by tools/exam-pages/* from reviewed agent output.

export type ToolLanding = {
  slug: string;
  tool: "grade" | "essay-coach" | "math-solver" | "quiz" | "explain";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subhead: string;
  quickAnswer: string;
  sections: { heading: string; body: string }[];
  example: { title: string; body: string };
  faqs: { q: string; a: string }[];
  targetQuery: string;
};

export const TOOL_LANDINGS: ToolLanding[] = [
  {
    "slug": "ai-homework-helper",
    "tool": "explain",
    "metaTitle": "AI Homework Helper — Free, Explains Step by Step",
    "metaDescription": "Free AI homework helper: photo or paste any homework question and get it explained step by step, in your exam board's style. No signup, no ads.",
    "h1": "Free AI Homework Helper",
    "subhead": "Photo or paste any homework question and get it explained step by step — so you actually understand it, not just copy an answer.",
    "quickAnswer": "Yes, this homework helper is genuinely free with no signup. Take a photo of the question, upload the page, or just type it, and the AI explains it step by step at your level — maths with full working, science with the reasoning, essays with structure. It teaches you the method; it will not do your assignment for you.",
    "sections": [
      {
        "heading": "How it helps with homework",
        "body": "Type the question, or photograph the textbook page or worksheet — photos are resized automatically, so a normal phone picture works. The helper explains the answer the way a patient tutor would: what the question is really asking, the method, then each step with the reason behind it. For maths you get every line of working; for science, the cause-and-effect chain; for languages and humanities, how to structure the answer. Set your country and exam board once and every explanation matches your syllabus — CBSE, GCSE, AP, Cambridge or WAEC — so the working looks like what your teacher expects, not a random internet version."
      },
      {
        "heading": "Understanding beats copying",
        "body": "Copying an answer gets tonight's homework done and fails next month's exam. That is why this helper is built to explain rather than to just hand over answers: it shows the method, flags the step where students usually slip, and you can ask follow-up questions until it clicks. If you only want the final answer to check your own work, that is there too — but the value is in the steps. Teachers can usually tell copied work anyway; they can never fault you for learning the method and doing it yourself."
      },
      {
        "heading": "Works for every subject and board",
        "body": "Maths and physics get step-by-step working with units. Chemistry gets equations formatted properly. Biology, history and geography get exam-style points rather than essays of waffle. English gets structure and technique. The same helper adapts to whichever exam system you set — including the exact command words and marking style your board uses. On any phone browser, no app download, no account, no ads, no daily paywall trick."
      }
    ],
    "example": {
      "title": "A real homework question, explained",
      "body": "A student photographs this from their maths homework: solve 3x + 7 = 22. The helper does not just say x = 5. It explains: the goal is to get x alone; subtract 7 from both sides because addition is undone by subtraction, giving 3x = 15; divide both sides by 3, giving x = 5; then check by substituting back, 3(5) + 7 = 22, correct. Then it offers a similar practice question to make sure the method stuck. That check-and-practise loop is the difference between finishing homework and actually learning from it."
    },
    "faqs": [
      {
        "q": "Is this homework helper really free?",
        "a": "Yes — no signup, no trial, no ads, no paid tier. There is a daily limit per person so the site can stay free for everyone, and it resets every day."
      },
      {
        "q": "Will it just give me the answers?",
        "a": "It gives the answer with the full method, because the method is what exams test. It will not write essays or complete assignments for you — it explains so you can do it yourself. That is deliberate."
      },
      {
        "q": "Can it read a photo of my homework?",
        "a": "Yes. Photograph the question in decent light and upload it — photos are resized automatically so normal phone pictures work. Blurry or dark photos are the main reason a question gets misread."
      },
      {
        "q": "Is using an AI homework helper cheating?",
        "a": "Using it to understand the method is studying — the same as asking a tutor or reading a worked example. Copying answers into work you submit as your own is cheating, and this tool is built to make the first easy and the second pointless."
      },
      {
        "q": "Which subjects and exams does it cover?",
        "a": "Any school subject — maths, sciences, English, history, geography, economics and more — and it adapts its answers to CBSE, GCSE (AQA, Edexcel, OCR), AP, Cambridge IGCSE/A-Level and WAEC once you set your board."
      }
    ],
    "targetQuery": "ai homework helper free"
  },
  {
    "slug": "gcse-ai-marker",
    "tool": "grade",
    "targetQuery": "ai marker gcse free",
    "metaTitle": "AI Marker GCSE — Free Mark-Scheme Feedback, No Signup",
    "metaDescription": "Paste any GCSE or IGCSE answer and get mark-scheme-style feedback in seconds — levels, command words, AO coverage. Completely free, no signup, no ads.",
    "h1": "Free AI Marker for GCSE Answers",
    "subhead": "Paste your answer, add the question and the mark scheme if you have it, and get feedback the way an examiner would give it: what you hit, what you missed, and why.",
    "quickAnswer": "Yes — this AI marker is genuinely free with no signup. Paste a GCSE or IGCSE answer plus the question (and the mark scheme if you have it), and it returns mark-scheme-style feedback: the points you earned, the ones you missed, and how command words like evaluate or explain change what markers look for.",
    "sections": [
      {
        "heading": "How the marking works",
        "body": "Paste the question, paste your answer, and if you have the mark scheme paste that too. The marker reads your answer the way an examiner reads it: against the command word, the assessment objectives, and the levels or points in the scheme. For a 6-mark science question it will tell you whether your answer reads as level 2 or level 3 and what is missing to move up. For an essay subject it checks whether you answered the question actually asked — evaluate needs a judgement, explain needs a because-chain, compare needs both sides linked in the same sentence. You get the points you earned, the points you missed, and a suggested mark. Without a mark scheme it still marks against typical schemes for that question type, but pasting the real one always gives sharper feedback."
      },
      {
        "heading": "What it will not do (honestly)",
        "body": "It marks typed or pasted text. It cannot read a photo of your handwritten mock paper — you need to type the answer out. Typing is annoying, but it takes a minute and you often spot your own mistakes while doing it. It also does not store your work: there is no account, nothing is saved after you leave the page, and nothing is used to train anything. And the suggested mark is a guide, not a guarantee. Real GCSE papers are marked by trained examiners applying one specific scheme, sometimes after standardisation meetings about single borderline phrases. An AI marker gets you close — usually within the right level — but do not walk into results day quoting it."
      },
      {
        "heading": "Command words are half the battle",
        "body": "Most lost marks are not knowledge gaps — they are command word mismatches. Describe asks what happens; students write why it happens and earn nothing for the extra effort. Evaluate needs strengths, weaknesses and a conclusion that actually commits. Compare answers written as two separate paragraphs about each thing score lower than answers that link them line by line. The marker flags these mismatches explicitly, because that is the fastest mark gain there is: same knowledge, restructured to fit what the question asked. If you do one thing with this tool, paste in three past-paper answers you have already written and count how many marks were lost to structure rather than content. For most people it is a genuinely uncomfortable number."
      },
      {
        "heading": "Boards and subjects",
        "body": "It handles AQA, Edexcel, OCR and Cambridge IGCSE question styles, across essay subjects and sciences. Mark schemes differ between boards more than students expect — AQA science 6-markers are level-marked while many Edexcel questions are point-marked — so the single most useful thing you can do is paste your own board's scheme next to your answer. Schemes are free on the exam board websites under past papers. Maths and other working-based subjects are better served by a step-checking solver; this marker is strongest on written answers, from a one-sentence 2-marker up to a full essay."
      }
    ],
    "example": {
      "title": "A real 6-marker, marked",
      "body": "I pasted an AQA Biology question — explain how water moves from the soil into the root hair cell and up the plant (6 marks) — with an answer that described osmosis correctly but never mentioned the water potential gradient, root hair surface area, or transpiration pull. The feedback came back: level 2, 3 to 4 marks. It listed what earned credit (osmosis defined, movement from dilute to concentrated named correctly), what was missing for level 3 (the continuous transpiration stream, evaporation from the leaf creating the pull), and one command-word note — the answer described the process, but the question asked to explain it, so each stage needed a because. Rewriting with those three additions took five minutes, and the rewrite came back at level 3, 5 to 6 marks."
    },
    "faqs": [
      {
        "q": "Is it actually free, or free until a paywall?",
        "a": "Actually free. No trial, no locked daily limit you hit after three uses, no ads. I am a student and I keep the site running on cheap AI models, which is why it can stay free. If that ever changes I will say so plainly on the site, but there is no plan to charge."
      },
      {
        "q": "Can I upload a photo of my handwritten answer?",
        "a": "No — this tool marks typed or pasted text only. Photos of full handwritten scripts are not supported, and I would rather say that upfront than waste your time. Type the answer out; it takes a minute and you will often catch slips of your own while doing it."
      },
      {
        "q": "How accurate is the suggested mark?",
        "a": "Usually within the right level, or a mark either way, when you paste the real mark scheme — less precise without it. It follows how published schemes award points, but it is not a trained examiner and borderline judgements can go either way. Trust the written feedback more than the number."
      },
      {
        "q": "Is my work stored anywhere?",
        "a": "No. There is no signup, so there is no account to store it under. Your answer is sent to the AI model to be marked and is not saved by the site afterwards. Close the tab and it is gone — which also means copy your feedback somewhere before you leave."
      },
      {
        "q": "Is using an AI marker cheating?",
        "a": "Marking your own practice answers is revision, not cheating — it is the same as someone reading the mark scheme against your work. Cheating would be getting AI to write assessed work for you. This tool marks what you wrote; it does not write anything for you."
      }
    ]
  },
  {
    "slug": "mark-my-english-essay-gcse",
    "tool": "essay-coach",
    "targetQuery": "mark my english essay gcse",
    "metaTitle": "Mark My English Essay GCSE — Free AI Feedback",
    "metaDescription": "Paste your GCSE English essay for feedback on structure, methods and AO coverage — AQA Paper 1 Q5 creative writing or literature essays. Free, no signup.",
    "h1": "Mark My GCSE English Essay — Free AI Feedback",
    "subhead": "Paste a Paper 1 Q5 creative piece or a literature essay and get feedback on structure, methods and your argument. It coaches you to improve the essay — it will not write it for you.",
    "quickAnswer": "Paste your GCSE English essay below and the coach reads it the way a marker would: is the structure deliberate, are your methods actually analysed, does every paragraph earn its place. It gives specific fixes tied to AO-style criteria rather than a vague add more detail. Free, no signup, nothing stored.",
    "sections": [
      {
        "heading": "AQA Paper 1 Question 5: creative writing",
        "body": "The 40-marker rewards control, not length. Markers look for deliberate structure — a shift in focus, a return to the opening image, a three-word paragraph placed on purpose — and vocabulary that is ambitious but accurate. The coach reads your piece for exactly that: it will tell you where the writing drifts into listing events, where a sentence pattern repeats until it goes flat, and where an image is doing real work versus just decorating. It also checks the 16 marks nobody revises: AO6 is spelling, punctuation and sentence variety, and it is nearly half the question. If your piece is strong on ideas but has comma splices everywhere, fixing the splices is worth more than another metaphor."
      },
      {
        "heading": "Literature essays: analysis, not feature-spotting",
        "body": "Priestley uses dramatic irony is a true sentence worth almost nothing on its own. The marks come from the effect: what the audience knows that the Birlings do not, and what that gap makes the audience feel about Mr Birling's confidence. The coach checks every quotation you use for exactly this — did you name a method and move on, or did you follow it into an effect on the reader and a link back to the question. It also flags paragraphs that retell plot, the single biggest mark-loser in literature essays, and points at the one sentence in the paragraph that could become an argument instead. Paste the essay question along with the essay, because half of good feedback is whether you actually answered it."
      },
      {
        "heading": "It coaches. It will not write your essay.",
        "body": "If you ask it to write the essay, it will not — a deliberate choice, not a limitation. A written-for-you essay teaches you nothing, and submitting one as your own work is a real risk now that schools check coursework for AI writing. What it does instead is point at the weakest paragraph and explain why it is weak, suggest what a stronger version would need to do, and let you write it. Then paste the rewrite and it tells you whether it worked. That loop — draft, feedback, redraft — is how writing actually improves, and it is what a good English teacher does when they have the time. This gives you the loop on demand, the night before the mock, for free."
      },
      {
        "heading": "Getting feedback you can actually use",
        "body": "Paste the whole essay, not one paragraph — structure feedback needs to see the shape of the argument. Include the question, and say which board and paper it is: AQA Paper 1 Q5 or Edexcel Macbeth changes what the coach looks for, because boards weight the objectives differently. If you know what you want checked, say so — check my methods analysis gets a deeper read than a general pass. And nothing you paste is stored: no account, no saved history, so copy the feedback somewhere before closing the tab."
      }
    ],
    "example": {
      "title": "One Macbeth paragraph, before and after",
      "body": "A pasted paragraph read: Shakespeare uses the metaphor of clothes to show Macbeth is not suited to being king. This shows he is uncomfortable. The coach flagged it directly: method named, effect asserted twice in different words, no analysis of actual language. Its push was specific — which clothes image? What does borrowed robes suggest that unsuited misses? Whose line is it, and why does that matter? The rewritten paragraph quoted strange garments cleave not to their mould but with the aid of use, argued that even Macbeth's allies frame his new title as something that must be worn in rather than owned, and tied that to the question on appearance versus reality. Same knowledge, one loop of feedback, and a feature-spot became an argument."
    },
    "faqs": [
      {
        "q": "Will it just write the essay if I ask nicely?",
        "a": "No. It refuses to write essays or paragraphs for submission, and that will not change. It quotes your own sentences back at you, explains what is weak and why, and suggests what a stronger version needs — then you write it. Improvement you wrote yourself is the entire point."
      },
      {
        "q": "Which exam boards does it cover?",
        "a": "AQA, Edexcel, OCR and Cambridge IGCSE. The core skills — methods analysis, structure, answering the actual question — are the same everywhere, but tell it your board and paper, because objective weightings and question styles differ and the feedback adjusts to match."
      },
      {
        "q": "Can it tell me what grade my essay is?",
        "a": "It can estimate a level or band from the marking criteria, and it is usually in the right area, but treat it as a rough position, not a prediction. Grade boundaries move every year and real marking involves human judgement on borderline work. The written feedback is the reliable part."
      },
      {
        "q": "Is getting AI feedback on my essay cheating?",
        "a": "Feedback on practice writing is what teachers, parents and revision guides already give — this is the same thing, faster. Cheating would be submitting writing you did not produce. Since this tool will not produce writing for you, using it keeps you on the right side of that line."
      },
      {
        "q": "Is it free? What is the catch?",
        "a": "Free, no signup, no ads, and your essays are not stored or used for anything after the page closes. The honest catch is that it is a small site run by a student on inexpensive AI models — so if it is ever slow at peak revision times, that is why."
      }
    ]
  },
  {
    "slug": "cbse-maths-solver",
    "tool": "math-solver",
    "targetQuery": "cbse maths solver with steps",
    "metaTitle": "CBSE Maths Solver with Steps — Free, NCERT Style",
    "metaDescription": "Type or snap a CBSE maths problem and get full working in NCERT style — Given, To find, Formula, Solution — with the step marks examiners award. Free.",
    "h1": "CBSE Maths Solver with Steps",
    "subhead": "Type a problem or upload a photo of one from your NCERT textbook and get the full working — Given, To find, Formula, Solution, Answer — the way stepwise marking expects it.",
    "quickAnswer": "Type your CBSE maths question or upload a clear photo of the printed problem, and the solver writes out every step in the layout board examiners mark: Given, To find, Formula, Solution, Answer. It explains why each step happens, so you can follow the working instead of just copying it. Free, no signup.",
    "sections": [
      {
        "heading": "Working set out the way boards mark it",
        "body": "CBSE maths is marked stepwise. On a typical 3-mark question, writing the correct formula earns a mark, correct substitution earns a mark, and the accurate answer with units earns the last — which means a wrong final answer can still score 2 out of 3 if the working is on the page. The solver writes every solution in that shape: Given, To find, Formula, then the Solution line by line, then the Answer stated with units. That layout is not decoration. It teaches you where the marks physically live in a solution, so in the board exam you write the formula down even when you are unsure, because that line alone is worth something. Most students lose more marks to skipped steps than to wrong maths."
      },
      {
        "heading": "Photos of textbook problems work",
        "body": "Point your phone at the printed problem in NCERT, RD Sharma or RS Aggarwal, crop tight so only the question is in frame, and upload it — no typing fractions and square roots on a phone keyboard. Printed text reads reliably. Handwritten problems are hit and miss, and I would rather tell you that than pretend otherwise: if your photo is of handwriting, check the solver's restatement of the question before trusting the solution, because a misread minus sign produces a perfectly confident wrong answer. Typing the problem is always the fallback and works for everything, including word problems."
      },
      {
        "heading": "A doubt solver, not an answer machine",
        "body": "Copying the solution finishes your homework and teaches you nothing — the board exam will hand you the same problem with different numbers. The useful habit: attempt the problem first, then compare your working line against line with the solver's. The line where they split is your actual doubt, and you can ask about exactly that — why did we take the LCM here, why check the discriminant before solving, what happens if the common difference is negative. It answers follow-ups in context, which is what a doubt-clearing session with a teacher looks like. Except this one is available at 11pm the night before the exam, and free."
      },
      {
        "heading": "Classes and chapters covered",
        "body": "It follows the NCERT syllabus from Class 6 to Class 12, and it is most used for Class 10 boards: real numbers, polynomials, pair of linear equations, quadratic equations, arithmetic progressions, triangles, coordinate geometry, trigonometry and its applications, circles, surface areas and volumes, statistics, probability. Class 12 calculus, vectors and 3D geometry work too. It also handles problems from reference books beyond NCERT, since a quadratic is a quadratic wherever it is printed. If a problem needs a diagram to state properly, describe the figure in words alongside the photo and it will work with that."
      }
    ],
    "example": {
      "title": "An NCERT Chapter 4 classic, solved properly",
      "body": "The problem: the sum of the squares of two consecutive positive integers is 365; find the integers. The solver returned it board-style. Given: two consecutive positive integers whose squares sum to 365. To find: the integers. Setup: let the integers be x and x+1, so x^2 + (x+1)^2 = 365. Solution: expand to 2x^2 + 2x + 1 = 365, simplify to x^2 + x - 182 = 0, factorise as (x+14)(x-13) = 0, so x = 13 or x = -14. Then the line most students skip and boards actually mark: x must be a positive integer, so x = -14 is rejected. Answer: the integers are 13 and 14. That rejection line is a real step mark, and the solver includes it every time."
    },
    "faqs": [
      {
        "q": "Is it free with full steps, or are steps behind a paywall?",
        "a": "Full steps, free, every time. Several well-known solver apps show the final answer free and lock the working behind a subscription — this one does not, because the working is the whole point. No signup either: open the page and type or snap the problem."
      },
      {
        "q": "Can it read my handwritten problem?",
        "a": "Sometimes, and I will not oversell it. Clear print from a textbook reads reliably; handwriting is less certain. The solver restates the question it read before solving — always check that line first. If it misread your problem, type it instead; typed input works for everything."
      },
      {
        "q": "Is this layout accepted in CBSE board exams?",
        "a": "The Given, To find, Formula, Solution, Answer structure is the standard presentation CBSE stepwise marking is built around — visible stages earn the marks. Your school may add small preferences on top. Treat the solver's output as model working to learn the structure from, not as the only valid format."
      },
      {
        "q": "Does it only cover NCERT problems?",
        "a": "No — NCERT is the spine because that is what boards examine, but you can give it problems from RD Sharma, RS Aggarwal, sample papers or coaching sheets. Maths does not care which book the problem came from; the method and the marking logic stay the same."
      },
      {
        "q": "Will using a solver make me dependent on solutions?",
        "a": "It can, if you use it as an answer machine. Attempt first, compare after — the tool is most useful at showing the exact line where your working went wrong, and answering why. Used that way it builds the habit boards reward: showing every step, every time."
      }
    ]
  },
  {
    "slug": "wassce-practice-questions",
    "tool": "quiz",
    "targetQuery": "wassce practice questions app free",
    "metaTitle": "WASSCE Practice Questions — Free, No App Needed",
    "metaDescription": "Generate WASSCE-style practice questions on any topic, auto-marked with explanations. Works in any phone browser — no download, no registration, no fees.",
    "h1": "WASSCE Practice Questions, Free in Your Browser",
    "subhead": "Pick any subject and topic — Biology, transport in mammals, or Core Maths, indices — and get WASSCE-format objective and theory questions, marked instantly with explanations. No app, no signup, no fees.",
    "quickAnswer": "Type a subject and topic and the quiz tool generates original WASSCE-format questions — multiple choice like Paper 1, structured like Paper 2 — then marks your answers and explains each one. It runs in the browser on any phone, so there is nothing to download and nothing to pay. These are new questions in WASSCE style, not past questions.",
    "sections": [
      {
        "heading": "Real WASSCE format, generated fresh",
        "body": "Ask for any subject and topic — Biology, transport in mammals; Core Mathematics, indices and logarithms; Government, constitutional development — and it generates questions in the structure WAEC actually uses: objective questions with four options A to D, and theory questions broken into (a), (b), (c) parts with mark allocations. Your answers are marked instantly. Every objective explanation tells you why the correct option is correct and why the distractor you picked was designed to catch you — which is where the actual learning happens. Because questions are generated on demand, you can drill one weak topic twenty times and never see a repeat."
      },
      {
        "heading": "These are not past questions — on purpose",
        "body": "Let me be straight about this, because plenty of apps are not: these are original questions written in WASSCE style, not reproduced past papers. For genuine past questions, WAEC publishes official materials, and those are worth using. What generated questions give you that past papers cannot: unlimited fresh practice on exactly the topic you are weak in, with no answer-memorisation. Heavily circulated past papers have a known problem — students recognise questions and recall answers without understanding, which feels like progress and is not. The strongest preparation is both: past papers to learn the exam itself, generated questions to fix the topics the past papers expose."
      },
      {
        "heading": "Any phone browser. Nothing to install, nothing to pay.",
        "body": "The paid CBT practice apps want a download of tens of megabytes, then registration, then a card or mobile money payment to unlock subjects. This runs in the browser your phone already has — no download, no registration, no payment, on any Android that can open a web page. The pages are kept light because I know data is not free. The one honest limit: it needs a connection to generate questions, because the AI writes them live — there is no offline mode. Generate a set while you have data; answering and marking that set happen right on the page."
      },
      {
        "heading": "A practice routine that actually works",
        "body": "Ten objectives on one topic every day beats a hundred questions crammed the week before the exam. Do a set, read every explanation — including for the ones you got right — then regenerate the same topic and see if your score moves. When a topic sits at 8 or more out of 10 twice in a row, move on. In the final month, switch from single topics to mixed sets across the syllabus, because the real Paper 1 jumps between topics and handling that switching is its own skill. The explanations name the concepts you are missing, so your revision list writes itself out of your wrong answers."
      }
    ],
    "example": {
      "title": "One evening, one weak topic",
      "body": "A student preparing for WASSCE Biology knows the circulatory system is her weak spot. On her phone she opens the quiz page, types WASSCE Biology, transport in mammals, 10 objective questions, and answers them on the bus home. She scores 6 out of 10. The explanations show a pattern: both valve questions were missed because she had the semilunar and atrioventricular valves swapped, and one distractor caught her confusing the pulmonary artery with the pulmonary vein — the artery carrying deoxygenated blood is exactly the kind of exception WASSCE objectives love. She regenerates the topic, scores 9, and writes valves plus pulmonary vessels into her revision notes. Total cost: a few minutes of data. No app installed, no account created, and the questions were new both times."
    },
    "faqs": [
      {
        "q": "Is it really free, or free until you pay to unlock subjects?",
        "a": "Really free — every subject, every topic, no unlock, no daily cap, no registration. It stays free because it generates questions with AI on demand instead of licensing question banks. There is no plan to charge, and there are no ads either."
      },
      {
        "q": "Are these actual WAEC past questions?",
        "a": "No, and I will not pretend they are. They are original questions generated in WASSCE format — same objective style, same theory structure. For real past questions, use WAEC's official publications. Generated questions are for unlimited topic drilling, which past papers alone cannot give you."
      },
      {
        "q": "Which subjects can it generate?",
        "a": "Any WASSCE subject: Core and Further Mathematics, English, Biology, Chemistry, Physics, Economics, Government, Geography, Literature, Agricultural Science and more. Name the subject and the syllabus topic — the more specific the topic, the better the questions. Chemistry, electrolysis beats just Chemistry."
      },
      {
        "q": "Does it work offline or on a small data plan?",
        "a": "It needs a connection to generate a set, because the AI writes the questions live — there is no offline mode. The pages are deliberately light on data. Generate a set when you have data; answering and marking that set happen on the page."
      },
      {
        "q": "Do I need to register or download anything?",
        "a": "No. No app, no account, no phone number, no email. Open the page in your browser, type a subject and topic, and start. Nothing you do is stored — which also means scores are not saved between sessions, so keep your own tally in a notebook."
      }
    ]
  },
  // @@TOOL_LANDINGS_INSERT@@
];

export const findToolLanding = (slug: string) =>
  TOOL_LANDINGS.find((p) => p.slug === slug);
