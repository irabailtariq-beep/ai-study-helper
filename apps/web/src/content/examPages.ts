// Exam-structure pages — the content system the 2026-08-24 research called for:
// pages that mirror the exam itself (textbook question families, board practice
// sets, pass-mark facts, score calculators) instead of generic topic explainers.
// Every question stem here is paraphrased/original — never verbatim textbook or
// past-paper text (NCERT and the UK boards are copyrighted; facts are free).
// Populated by tools/exam-pages/* from reviewed agent output.

export type ExamProblem = {
  question: string;
  steps: string[];
  answer: string;
  /** one sentence: where students lose marks on exactly this */
  markTip: string;
  /** an original practice variant for the reader (answer in brackets) */
  variant: string;
};

export type ApCalcData = {
  name: string;
  mcqCount: number;
  mcqWeightPercent: number;
  frqCount: number;
  frqWeightPercent: number;
  frqMaxPoints: number;
  /** percent of total composite needed, conservative estimates */
  cutoffs: { five: number; four: number; three: number; two: number };
  sourceNote: string;
};

export type ExamPage = {
  board: "cbse" | "gcse" | "waec" | "ap" | "cambridge";
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  quickAnswer: string;
  intro: string;
  sections: { heading: string; body: string }[];
  problems: ExamProblem[];
  faqs: { q: string; a: string }[];
  targetQuery: string;
  hubSubjects: string[];
  calculator?: ApCalcData;
};

export const EXAM_PAGES: ExamPage[] = [
  {
    "board": "cbse",
    "slug": "class-8-maths-profit-loss-word-problems",
    "metaTitle": "Madhu and Kavitha Purchased a New House: Solved",
    "metaDescription": "The Madhu and Kavitha house problem solved step by step, plus five more Class 8 profit and loss questions on CP, SP, loss percent and discount.",
    "h1": "Madhu and Kavitha's House: Class 8 Profit and Loss Word Problems Solved",
    "quickAnswer": "Madhu and Kavitha bought the house for Rs 3,20,000 and sold it for Rs 2,80,000, so the loss is 320000 - 280000 = Rs 40,000. Loss percent = (40000/320000) × 100 = 12.5 percent, because loss percent is always calculated on the cost price, never the selling price.",
    "intro": "If you searched for Madhu and Kavitha, you almost certainly have a Class 8 Comparing Quantities exercise open in front of you. The standard version of the question uses Rs 3,20,000 as the purchase price and Rs 2,80,000 as the selling price, and the whole thing rests on two formulas: loss = CP - SP, and loss percent = (loss/CP) × 100. The question is paraphrased below, since the original wording is copyrighted, and solved the way CBSE examiners like to see it: given, formula, substitution, answer with units. After it come five more profit, loss and discount problems of the same type, each with a fresh variant for you to try.",
    "sections": [
      {
        "heading": "The three formulas that run all of Chapter 8",
        "body": "Cost price (CP) is what the seller paid; selling price (SP) is what the buyer pays. If SP is bigger you have a profit, SP - CP. If CP is bigger you have a loss, CP - SP. Percentages are always taken on the cost price: profit percent = (profit/CP) × 100 and loss percent = (loss/CP) × 100. Discount is the odd one out. It is a reduction on the marked price, the number printed on the tag, so discount = (discount percent/100) × marked price, and what the customer pays is marked price minus discount. Every question on this page, including Madhu and Kavitha, is one of these three moves or two of them chained together. If you read a question and cannot name which formula it wants, underline the numbers and label each one CP, SP, MP or percent before you touch your calculator."
      },
      {
        "heading": "Where the Madhu and Kavitha question comes from",
        "body": "This question circulates with Class 8 Comparing Quantities practice sets, and the version everyone searches uses Rs 3,20,000 as the purchase price and Rs 2,80,000 as the sale price, which is why those are the numbers solved above. Some guidebooks change the figures, and that is fine, because the numbers are not the point. The structure is: two people buy an asset, circumstances force a sale below cost, find the loss and the loss percent. Swap the house for a shop, a plot or a car and the method is identical: subtract to get the loss, divide by the cost price, multiply by 100. If your textbook's version shows different amounts, run the same three steps with your numbers and you will land on the right answer."
      },
      {
        "heading": "Setting out a full-marks answer",
        "body": "CBSE maths marking rewards visible structure. For a 3-mark word problem the split is typically one mark for correctly identifying what is given and the formula, one for the substitution and arithmetic, and one for the final answer with units and a closing statement. So write: Given, with the values labelled CP and SP; the formula before any numbers; the substitution on its own line; and a sentence at the end like therefore the loss percent is 12.5 percent. Two habits cost marks repeatedly: doing the subtraction mentally so the examiner cannot see where 40,000 came from, and leaving a bare number without Rs or percent. Neither habit saves real time. Written out properly, the Madhu and Kavitha solution is six short lines."
      }
    ],
    "problems": [
      {
        "question": "Madhu and Kavitha bought a new house together for Rs 3,20,000. Money troubles later forced them to sell it, and the buyer paid Rs 2,80,000. Work out (i) how much money they lost and (ii) the loss percent.",
        "steps": [
          "Given: cost price CP = Rs 3,20,000 and selling price SP = Rs 2,80,000. To find: the loss and the loss percent.",
          "Since SP is less than CP, this is a loss. Formula: Loss = CP - SP.",
          "Loss = 320000 - 280000 = Rs 40,000.",
          "Formula for the percentage: Loss percent = (Loss/CP) × 100, always taken on the cost price.",
          "Loss percent = (40000/320000) × 100 = (1/8) × 100 = 12.5 percent.",
          "Answer: they lost Rs 40,000, which is a loss of 12.5 percent."
        ],
        "answer": "Loss = Rs 40,000; loss percent = 12.5 percent",
        "markTip": "The classic slip here is dividing by the selling price 2,80,000 instead of the cost price, which gives about 14.3 percent and loses the accuracy mark, so anchor the percent to CP every time.",
        "variant": "Two sisters bought a shop for Rs 4,50,000 and had to sell it for Rs 4,05,000. Find the loss and the loss percent. (Answer: Rs 45,000 and 10 percent)"
      },
      {
        "question": "A stationery shop owner buys 80 notebooks at Rs 12 each and manages to sell every one of them at Rs 15 each. Find the total profit and the profit percent.",
        "steps": [
          "Given: 80 notebooks, cost Rs 12 each, sold at Rs 15 each. To find: profit and profit percent.",
          "Total CP = 80 × 12 = Rs 960 and total SP = 80 × 15 = Rs 1,200.",
          "Formula: Profit = SP - CP, so profit = 1200 - 960 = Rs 240.",
          "Profit percent = (240/960) × 100 = 25 percent, calculated on the cost price.",
          "Answer: profit Rs 240 and profit percent 25 percent."
        ],
        "answer": "Profit = Rs 240; profit percent = 25 percent",
        "markTip": "Students often use the per-notebook prices for the profit but the totals for the percent, or the other way round; either route gives 25 percent, but mixing them mid-solution is where the arithmetic goes wrong.",
        "variant": "A fruit seller buys 50 melons at Rs 8 each and sells them all at Rs 9 each. Find her profit percent. (Answer: 12.5 percent)"
      },
      {
        "question": "Ravi paid Rs 2,400 for a second-hand bicycle. After a few months he sold it at a loss of 15 percent. What price did he sell it for?",
        "steps": [
          "Given: CP = Rs 2,400 and loss = 15 percent of CP. To find: the selling price.",
          "Formula: SP = CP × (100 - loss percent)/100.",
          "SP = 2400 × 85/100 = 2400 × 0.85.",
          "SP = Rs 2,040.",
          "Answer: Ravi sold the bicycle for Rs 2,040."
        ],
        "answer": "Selling price = Rs 2,040",
        "markTip": "Working out 15 percent of 2,400 and then forgetting to subtract it from the cost price is the usual error, so either use the 85/100 multiplier in one move or clearly show the subtraction 2400 - 360.",
        "variant": "Ayesha bought a study table for Rs 3,600 and sold it at a 10 percent loss. Find the selling price. (Answer: Rs 3,240)"
      },
      {
        "question": "A trader sells a watch for Rs 1,725 and makes a profit of 15 percent on it. How much had the watch cost him?",
        "steps": [
          "Given: SP = Rs 1,725 and profit = 15 percent. To find: the cost price.",
          "Formula: SP = CP × (100 + profit percent)/100, so CP = SP × 100/115.",
          "CP = 1725 × 100/115 = 172500/115 = Rs 1,500.",
          "Check: 15 percent of 1500 is 225, and 1500 + 225 = 1725, which matches the given SP.",
          "Answer: the watch cost the trader Rs 1,500."
        ],
        "answer": "Cost price = Rs 1,500",
        "markTip": "Taking 15 percent of the selling price and subtracting it (1725 - 258.75) is the trap; the 15 percent is defined on the unknown CP, so you must divide by 115/100 rather than subtract.",
        "variant": "A dealer sold a chair for Rs 2,760 at a profit of 20 percent. Find the cost price. (Answer: Rs 2,300)"
      },
      {
        "question": "A winter jacket has a price tag of Rs 1,850, and the store is running a 20 percent discount on it. Find the discount in rupees and the price a customer actually pays.",
        "steps": [
          "Given: marked price MP = Rs 1,850 and discount = 20 percent. To find: the discount amount and the sale price.",
          "Formula: Discount = (discount percent/100) × MP, taken on the marked price, not the cost price.",
          "Discount = (20/100) × 1850 = Rs 370.",
          "Sale price = MP - discount = 1850 - 370 = Rs 1,480.",
          "Answer: the discount is Rs 370 and the customer pays Rs 1,480."
        ],
        "answer": "Discount = Rs 370; sale price = Rs 1,480",
        "markTip": "Discount always comes off the marked price, so if you catch yourself using CP anywhere in a pure discount question, stop and reread it, because that mix-up costs the whole method mark.",
        "variant": "A school bag marked at Rs 2,400 carries a 15 percent discount. What does the buyer pay? (Answer: Rs 2,040)"
      },
      {
        "question": "A shop marks a pair of shoes at Rs 900 and offers a 10 percent discount on the tag. Even after the discount, the shopkeeper makes a 12.5 percent profit. What was the cost price of the shoes?",
        "steps": [
          "Given: MP = Rs 900, discount = 10 percent, profit after discount = 12.5 percent. To find: the cost price.",
          "First find the actual selling price: SP = 900 × (100 - 10)/100 = 900 × 90/100 = Rs 810.",
          "The profit percent connects SP and CP: SP = CP × (100 + 12.5)/100 = CP × 112.5/100.",
          "So CP = 810 × 100/112.5 = 81000/112.5 = Rs 720.",
          "Check: 12.5 percent of 720 is 90, and 720 + 90 = 810, which matches the discounted price.",
          "Answer: the shoes cost the shopkeeper Rs 720."
        ],
        "answer": "Cost price = Rs 720",
        "markTip": "This is a two-stage question and the marks are split that way: one for getting SP = Rs 810 from the marked price, and the rest for connecting SP to CP, so never try to jump from 900 straight to CP.",
        "variant": "A kettle is marked Rs 600 and sold at a 5 percent discount, still giving the seller a 14 percent profit. Find the cost price. (Answer: Rs 500)"
      }
    ],
    "faqs": [
      {
        "q": "What is the answer to the Madhu and Kavitha house question?",
        "a": "In the standard version, the house is bought for Rs 3,20,000 and sold for Rs 2,80,000. The loss is 320000 - 280000 = Rs 40,000, and the loss percent is (40000/320000) × 100 = 12.5 percent. If your book uses different figures, apply the same two steps: subtract for the loss, then divide by the cost price and multiply by 100."
      },
      {
        "q": "Is loss percent calculated on the cost price or the selling price?",
        "a": "On the cost price, always, unless a question explicitly says otherwise. Profit and loss are measured against what the seller originally invested, so the denominator is CP. Dividing by SP gives a different number, about 14.3 percent in the house problem instead of 12.5, and it will be marked wrong even though the subtraction step was fine."
      },
      {
        "q": "What is the difference between a discount and a loss?",
        "a": "A discount is a reduction on the marked price, the tag price a shop displays, and it may still leave the seller in profit. A loss compares selling price with cost price, what the seller actually paid. A question can involve both at once: problem 6 above discounts a Rs 900 tag to Rs 810 while the shopkeeper still earns 12.5 percent profit on a Rs 720 cost."
      },
      {
        "q": "How should I set out profit and loss answers in the exam?",
        "a": "Use the pattern in the solutions above: state what is given with labels CP, SP or MP, write the formula before substituting, show the substitution as its own line, and finish with the answer carrying units, Rs or percent, plus a short closing statement. Markers award the formula, the working and the final statement separately, so each visible line protects a mark."
      }
    ],
    "targetQuery": "madhu and kavitha purchased a new house",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "cbse",
    "slug": "class-10-maths-quadratic-word-problems",
    "metaTitle": "Arushi and Devesh Painting Question Solved",
    "metaDescription": "The Arushi and Devesh painting question solved in full, then five Class 10 quadratic word problems on area, speed, ages and taps, each worked out.",
    "h1": "Arushi and Devesh's Painting, Plus Real Class 10 Quadratic Word Problems",
    "quickAnswer": "Arushi alone finishes the painting in 30 minutes and the pair together take 20, so Devesh's one-minute share is 1/20 - 1/30 = 1/60. Ten minutes of joint work completes half the painting, so Devesh needs 30 more minutes, which is 40 minutes from the start. Full working is below, followed by genuine quadratic word problems.",
    "intro": "Here is something most pages will not tell you: the Arushi and Devesh painting question is not actually a quadratic equations problem. It is a time and work question, usually set in Class 8, and it solves with simple fractions. It gets searched alongside Class 10 Chapter 4 because painting, tank and journey setups also appear there, so this page does both jobs. The painting question is solved first, in full, and after it come five genuine quadratic word problems, area, speed, ages, taps and numbers, laid out the way CBSE wants working shown. I sit Cambridge exams myself, not CBSE, so everything here follows the NCERT method rather than personal exam memory.",
    "sections": [
      {
        "heading": "The painting question is not actually quadratic",
        "body": "Search traffic sends a lot of people looking for Arushi and Devesh to quadratic equations pages, but the question itself is a time and work problem, the kind usually met in Class 8. There is no x^2 anywhere in it: you convert each painter to a per-minute work rate, subtract to isolate Devesh, and divide the leftover work by his rate. It is still solved in full above, because it is what you came for. The genuinely quadratic relatives of this question are the tap and pipe problems, like problem 5 on this page, where the two times are unknown and related, say x and x + 5, and the rate equation 1/x + 1/(x + 5) = 1/6 multiplies out into a quadratic. If your teacher set the painting question inside a quadratic worksheet, that is probably the connection they had in mind."
      },
      {
        "heading": "A four-move routine for every quadratic word problem",
        "body": "Move one: name the unknown, in writing, with units. Let the speed be x km/h. Move two: translate the story into one equation, keeping fractions as fractions. Move three: clear denominators and rearrange into ax^2 + bx + c = 0, and only then decide whether to factorise or use the formula; if you can spot two numbers multiplying to ac and adding to b, factorising is faster, otherwise x = (-b ± sqrt(b^2 - 4ac))/2a always works. Move four: solve, then test both roots against the story and reject the impossible one with a written reason. The four moves matter more than speed, because CBSE marking gives most of the credit to the setup and the rearrangement, not the final number. A perfect answer with no visible equation can earn less than a wrong answer with a correct setup."
      },
      {
        "heading": "Rejecting a root is a scoring line, not an apology",
        "body": "Almost every quadratic word problem produces one answer that fits the story and one that does not: a breadth of -12 m, a speed of -60 km/h, an age of -10 years. Writing both roots and circling the positive one is not enough; the marking scheme wants a reason, one short sentence like speed cannot be negative, so x = 50. This costs five seconds and is often a dedicated mark. The second habit worth building is substituting your accepted root back into the original story, not into your own equation, since your equation might be the thing that is wrong. For the bus problem above, checking means computing 300/50 = 6 hours and 300/60 = 5 hours and seeing the difference really is 1 hour. When the check works, say so in one line."
      }
    ],
    "problems": [
      {
        "question": "Arushi and Devesh are working on a painting together. Arushi on her own could finish the whole painting in 30 minutes, while the two of them working together can finish it in 20 minutes. After 10 minutes of painting together they argue, and Arushi walks off. How much longer does Devesh need to finish the painting alone?",
        "steps": [
          "Given: Arushi alone takes 30 minutes, both together take 20 minutes, and they work jointly for the first 10 minutes. To find: Devesh's remaining time alone.",
          "In one minute the pair completes 1/20 of the painting and Arushi alone completes 1/30, so Devesh's one-minute share is 1/20 - 1/30.",
          "1/20 - 1/30 = 3/60 - 2/60 = 1/60, so Devesh alone would need 60 minutes for a whole painting.",
          "In the first 10 minutes together they finish 10 × (1/20) = 1/2 of the painting, leaving 1/2 undone.",
          "Time for Devesh = work left divided by his rate = (1/2) ÷ (1/60) = 30 minutes.",
          "Answer: Devesh needs 30 more minutes, so the painting is completed 40 minutes after they first started."
        ],
        "answer": "30 minutes more for Devesh (40 minutes from the start)",
        "markTip": "Half the wrong answers to this question come from not saying which clock you are reading: 30 is the time after Arushi leaves and 40 is the total, so state in words which one the question asked for.",
        "variant": "Sana alone can weed a garden in 40 minutes, and Sana and Bilal together take 24 minutes. They work together for 12 minutes, then Sana leaves. How long does Bilal need to finish alone? (Answer: 30 minutes)"
      },
      {
        "question": "A rectangular community hall has a length 4 m greater than its breadth, and its floor area is 96 square metres. Find the length and breadth of the hall.",
        "steps": [
          "Given: length = breadth + 4 and area = 96 m^2. To find: both dimensions. Let the breadth be x metres, so the length is (x + 4) metres.",
          "Formula: area of a rectangle = length × breadth, so x(x + 4) = 96.",
          "Expand and rearrange into standard form: x^2 + 4x - 96 = 0.",
          "Factorise: x^2 + 12x - 8x - 96 = 0 gives (x + 12)(x - 8) = 0, so x = -12 or x = 8.",
          "A breadth cannot be negative, so reject x = -12 and keep x = 8.",
          "Answer: breadth = 8 m and length = 8 + 4 = 12 m. Check: 8 × 12 = 96 m^2."
        ],
        "answer": "Breadth = 8 m, length = 12 m",
        "markTip": "The mark scheme expects you to reject the negative root with a written reason such as breadth cannot be negative, and leaving both roots standing without comment usually drops a mark.",
        "variant": "A rectangular garden has its length 6 m more than its breadth and an area of 91 square metres. Find its dimensions. (Answer: 7 m by 13 m)"
      },
      {
        "question": "A bus covers 300 km at a steady speed. If it had travelled 10 km/h faster, the same trip would have taken 1 hour less. Find the actual speed of the bus.",
        "steps": [
          "Given: distance = 300 km, and raising the speed by 10 km/h cuts the time by 1 hour. To find: the speed. Let the speed be x km/h, so time = 300/x hours.",
          "Set up the time difference: 300/x - 300/(x + 10) = 1.",
          "Multiply every term by x(x + 10): 300(x + 10) - 300x = x(x + 10), which simplifies to 3000 = x^2 + 10x.",
          "Standard form: x^2 + 10x - 3000 = 0.",
          "By the quadratic formula, x = (-10 ± sqrt(100 + 12000))/2 = (-10 ± 110)/2, giving x = 50 or x = -60.",
          "Speed cannot be negative, so x = 50. Check: 300/50 = 6 hours and 300/60 = 5 hours, a difference of exactly 1 hour.",
          "Answer: the bus travels at 50 km/h."
        ],
        "answer": "Speed = 50 km/h",
        "markTip": "Most marks vanish in the clearing-fractions line, so multiply every term by x(x + 10) in one visible step before simplifying, and keep the plus-minus until you reject the negative root.",
        "variant": "A van covers 200 km at a uniform speed. Going 10 km/h faster would save 1 hour. Find its speed. (Answer: 40 km/h)"
      },
      {
        "question": "The product of Aisha's age 4 years ago and her age 6 years from now is 56. How old is Aisha now?",
        "steps": [
          "Given: (age 4 years ago) × (age 6 years from now) = 56. To find: her present age. Let the present age be x years.",
          "Translate: (x - 4)(x + 6) = 56.",
          "Expand: x^2 + 2x - 24 = 56, so x^2 + 2x - 80 = 0.",
          "Factorise: (x + 10)(x - 8) = 0, giving x = -10 or x = 8.",
          "An age cannot be negative, so x = 8. Check: 4 years ago she was 4, in 6 years she will be 14, and 4 × 14 = 56.",
          "Answer: Aisha is 8 years old."
        ],
        "answer": "Present age = 8 years",
        "markTip": "Expanding (x - 4)(x + 6) with a middle term of -2x is the recurring slip; the middle term is 6x - 4x = +2x, so slow down on exactly that line.",
        "variant": "The product of Rohan's age 3 years ago and his age 5 years from now is 105. Find his present age. (Answer: 10 years)"
      },
      {
        "question": "Two taps running together can fill a water tank in 6 hours. On its own, the smaller tap takes 5 hours longer than the larger tap to fill the same tank. How long does each tap take alone?",
        "steps": [
          "Given: together they take 6 hours, and the smaller tap's time is 5 hours more than the larger tap's. To find: each tap's time. Let the larger tap take x hours, so the smaller takes (x + 5) hours.",
          "Rates add in a filling problem: 1/x + 1/(x + 5) = 1/6.",
          "Multiply every term by 6x(x + 5): 6(x + 5) + 6x = x(x + 5).",
          "Simplify: 12x + 30 = x^2 + 5x, so x^2 - 7x - 30 = 0.",
          "Factorise: (x - 10)(x + 3) = 0, so x = 10 or x = -3; a time cannot be negative, so x = 10.",
          "Answer: the larger tap takes 10 hours and the smaller takes 15 hours. Check: 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6."
        ],
        "answer": "Larger tap = 10 hours, smaller tap = 15 hours",
        "markTip": "This is the quadratic cousin of the painting question, and the standard error is writing the smaller tap as x - 5; the smaller, slower tap takes more time, so it must be x + 5.",
        "variant": "Two pipes fill a tank together in 4 hours, and the narrower pipe alone needs 6 hours more than the wider one. Find each pipe's time. (Answer: 6 hours and 12 hours)"
      },
      {
        "question": "The squares of two consecutive positive odd numbers add up to 130. Find the two numbers.",
        "steps": [
          "Given: two consecutive odd numbers whose squares sum to 130. To find: the numbers. Let them be x and x + 2.",
          "Translate: x^2 + (x + 2)^2 = 130.",
          "Expand: x^2 + x^2 + 4x + 4 = 130, so 2x^2 + 4x - 126 = 0.",
          "Divide the whole equation by 2 to keep the numbers small: x^2 + 2x - 63 = 0.",
          "Factorise: (x + 9)(x - 7) = 0, and since the numbers are positive, x = 7.",
          "Answer: the numbers are 7 and 9. Check: 49 + 81 = 130."
        ],
        "answer": "The numbers are 7 and 9",
        "markTip": "Dividing the whole equation by 2 before factorising is worth doing every time, because most sign errors on this question happen while factorising 2x^2 + 4x - 126 directly.",
        "variant": "The squares of two consecutive positive even numbers add up to 164. Find them. (Answer: 8 and 10)"
      }
    ],
    "faqs": [
      {
        "q": "Is the Arushi and Devesh painting question really a quadratic problem?",
        "a": "No. It is a time and work question solved with fractions: rates of 1/30 and 1/20 per minute, with no squared term anywhere. It usually gets filed under quadratics because tap-and-pipe questions, which look similar, genuinely do produce quadratics when the two times are unknown. The full non-quadratic solution is the first problem on this page."
      },
      {
        "q": "Is the answer to the painting question 30 minutes or 40 minutes?",
        "a": "Both numbers are correct answers to different questions. Devesh needs 30 minutes of solo work after Arushi leaves. Since the pair had already painted together for 10 minutes, the painting is finished 40 minutes after the start. Read the final sentence of the question carefully and state in words which duration your number represents."
      },
      {
        "q": "Should I factorise or use the quadratic formula?",
        "a": "Factorise when two numbers multiplying to ac and adding to b jump out, as in x^2 + 2x - 80 = (x + 10)(x - 8); it is faster and less error-prone. When nothing jumps out within about twenty seconds, switch to x = (-b ± sqrt(b^2 - 4ac))/2a, which always works. Both methods receive full credit in CBSE marking."
      },
      {
        "q": "Why do quadratic word problems give two answers?",
        "a": "The algebra cannot see the story, so it returns every x satisfying the equation, including physically impossible ones like negative speeds or ages. One root usually fits the situation and one does not. You are expected to reject the invalid root with a written reason, and that rejection line frequently carries its own mark in the scheme."
      }
    ],
    "targetQuery": "arushi and devesh are making a painting",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "cbse",
    "slug": "class-10-maths-linear-equations-word-problems",
    "metaTitle": "Fraction Becomes 9/11 Question: Full Solution",
    "metaDescription": "Solve the fraction that becomes 9/11 when 2 is added to top and bottom, plus four more pair of linear equations word problems solved in CBSE style.",
    "h1": "The Fraction That Becomes 9/11: Class 10 Linear Equations Word Problems",
    "quickAnswer": "Call the fraction x/y. Adding 2 to both parts gives 11x - 9y = -4, and adding 3 to both parts gives 6x - 5y = -3. Eliminating y gives x = 7, then y = 9, so the fraction is 7/9. Check: 9/11 and 10/12 = 5/6, so both conditions hold.",
    "intro": "A fraction becomes 9/11 if 2 is added to both the numerator and the denominator: this is one of the most-searched lines from Class 10 Chapter 3, Pair of Linear Equations in Two Variables. The trick is to stop thinking of it as a fraction problem at all. Call the numerator x and the denominator y, cross multiply each condition, and you get two straight linear equations you can solve by elimination. The full solution is below, followed by four more word problems of the kinds that turn up again and again: two-digit numbers, ages, taxi fares with a fixed charge, and hostel charges with a daily rate.",
    "sections": [
      {
        "heading": "Turning a sentence into a pair of equations",
        "body": "Every Chapter 3 word problem hides two unknowns and two facts about them. The whole game is naming the unknowns precisely and translating each fact separately. For fractions, call the numerator x and the denominator y, never the fraction f, because the conditions act on the parts. For two-digit numbers, the number itself is 10x + y where x is the tens digit. For fare and hostel questions, the unknowns are a fixed charge and a per-unit rate. Then take the sentences one at a time: becomes 9/11 when 2 is added to both is exactly (x + 2)/(y + 2) = 9/11, nothing more. Cross multiply, collect terms on one side, and you have a clean linear equation. Do the same with the second sentence, and the setup is finished before any solving starts."
      },
      {
        "heading": "Elimination or substitution?",
        "body": "Both methods are accepted and both earn full marks, so the choice is purely practical. Substitution shines when one equation already gives a variable alone, like y - x = 3 from the digit problem, where y = x + 3 drops straight into the other equation. Elimination is better when both equations are in the form ax + by = c with awkward coefficients, which is exactly the shape the fraction problem produces: 11x - 9y = -4 and 6x - 5y = -3. There, multiplying to match the y coefficients at 45 kills y in one subtraction. A useful habit is to glance at both equations before choosing and ask which variable is cheapest to remove. Whichever route you take, keep the multiplication step visible, because that line carries a method mark of its own."
      },
      {
        "heading": "The verification line examiners look for",
        "body": "A pair of linear equations gives you two numbers, and the fastest way to be certain of them is to push both back through the original words of the question, not through your own equations. For the fraction problem, that means actually computing (7 + 2)/(9 + 2) and (7 + 3)/(9 + 3) and confirming 9/11 and 5/6 appear. This catches the most common failure in the whole chapter, a single sign flipped during rearrangement, which produces tidy-looking but wrong values that satisfy your corrupted equation perfectly. It also earns the closing statement mark that CBSE schemes routinely attach to word problems. One sentence is enough: both conditions are satisfied, so the fraction is 7/9. If a check fails, do not start over; recheck the rearrangement lines first, because that is where the slip nearly always lives."
      }
    ],
    "problems": [
      {
        "question": "There is a fraction with this property: add 2 to both its numerator and its denominator and it becomes 9/11, but add 3 to both instead and it becomes 5/6. Find the fraction.",
        "steps": [
          "Given: (x + 2)/(y + 2) = 9/11 and (x + 3)/(y + 3) = 5/6, where the fraction is x/y. To find: x and y.",
          "Cross multiply the first condition: 11(x + 2) = 9(y + 2), which gives 11x - 9y = -4.",
          "Cross multiply the second condition: 6(x + 3) = 5(y + 3), which gives 6x - 5y = -3.",
          "Eliminate y: multiply the first equation by 5 and the second by 9 to get 55x - 45y = -20 and 54x - 45y = -27.",
          "Subtract: (55x - 54x) = -20 - (-27), so x = 7.",
          "Substitute into 6x - 5y = -3: 42 - 5y = -3, so 5y = 45 and y = 9.",
          "Check both conditions: (7 + 2)/(9 + 2) = 9/11 and (7 + 3)/(9 + 3) = 10/12 = 5/6. Both hold.",
          "Answer: the fraction is 7/9."
        ],
        "answer": "The fraction is 7/9",
        "markTip": "Nearly every dropped mark here is a sign slip while rearranging 11x + 22 = 9y + 18 into 11x - 9y = -4, so move the terms one at a time and then verify both original conditions at the end.",
        "variant": "A fraction becomes 3/4 when 2 is added to both numerator and denominator, and 2/3 when 1 is subtracted from both. Find the fraction. (Answer: 7/10)"
      },
      {
        "question": "The digits of a two-digit number add up to 11. If the digits are swapped, the new number is 27 more than the original one. What is the original number?",
        "steps": [
          "Given: digit sum 11, and reversing the digits raises the number by 27. To find: the number. Let the tens digit be x and the units digit be y, so the number is 10x + y.",
          "First equation from the digit sum: x + y = 11.",
          "Second equation from reversing: (10y + x) - (10x + y) = 27, which simplifies to 9(y - x) = 27, so y - x = 3.",
          "Add the equations x + y = 11 and y - x = 3: 2y = 14, so y = 7 and then x = 4.",
          "Check: the number 47 reversed is 74, and 74 - 47 = 27, with digits summing to 11.",
          "Answer: the original number is 47."
        ],
        "answer": "The number is 47",
        "markTip": "Writing the two-digit number as xy or x + y instead of 10x + y is the error examiners see most; the place-value form 10x + y is the whole point of the question.",
        "variant": "A two-digit number has digits adding to 9, and the number formed by reversing its digits is 45 less than the original. Find the original number. (Answer: 72)"
      },
      {
        "question": "A father is currently four times as old as his daughter. Six years from now, he will be three times as old as she will be then. Find their present ages.",
        "steps": [
          "Given: father = 4 × daughter now, and in 6 years father = 3 × daughter. To find: both ages. Let the daughter be x years old, so the father is 4x years old.",
          "In 6 years: 4x + 6 = 3(x + 6).",
          "Expand and solve: 4x + 6 = 3x + 18, so x = 12.",
          "Then the father is 4 × 12 = 48 years old.",
          "Check: in 6 years they will be 54 and 18, and 54 = 3 × 18.",
          "Answer: the daughter is 12 years old and the father is 48 years old."
        ],
        "answer": "Daughter = 12 years, father = 48 years",
        "markTip": "The near-universal slip is writing 4x + 6 = 3x + 6, forgetting that the daughter also ages 6 years; the +6 must sit inside the bracket on the right-hand side.",
        "variant": "A mother is five times as old as her son. In 4 years she will be four times as old. Find their present ages. (Answer: son 12 years, mother 60 years)"
      },
      {
        "question": "A taxi service charges a fixed booking fee plus a set rate for every kilometre. A 10 km journey costs Rs 205 and a 15 km journey costs Rs 280. Find the fixed fee and the per-km rate, and then the cost of a 25 km journey.",
        "steps": [
          "Given: 10 km costs Rs 205 and 15 km costs Rs 280. To find: the fixed fee, the rate, and the 25 km fare. Let the fixed fee be Rs f and the rate be Rs r per km.",
          "Equations: f + 10r = 205 and f + 15r = 280.",
          "Subtract the first from the second: 5r = 75, so r = 15.",
          "Substitute back: f + 10 × 15 = 205, so f = 205 - 150 = 55.",
          "Fare for 25 km = 55 + 25 × 15 = 55 + 375 = Rs 430.",
          "Answer: fixed fee Rs 55, rate Rs 15 per km, and a 25 km journey costs Rs 430."
        ],
        "answer": "Fixed fee = Rs 55, rate = Rs 15 per km, 25 km fare = Rs 430",
        "markTip": "Subtracting the equations the wrong way round gives r = -15 and everything collapses from there, so subtract the smaller-distance equation from the larger one and sanity-check that both unknowns come out positive.",
        "variant": "A cab company charges a fixed fee plus a per-km rate; 8 km costs Rs 156 and 12 km costs Rs 220. Find the fixed fee and the rate. (Answer: Rs 28 fixed and Rs 16 per km)"
      },
      {
        "question": "A hostel bills each student a fixed monthly charge plus a daily food charge. A student who took food for 22 days paid Rs 4,250 in total, while another who took food for 28 days paid Rs 5,150. Find the fixed charge and the cost of food per day.",
        "steps": [
          "Given: 22 days costs Rs 4,250 and 28 days costs Rs 5,150. To find: the fixed monthly charge and the per-day food cost. Let the fixed charge be Rs f and the food cost Rs d per day.",
          "Equations: f + 22d = 4250 and f + 28d = 5150.",
          "Subtract: 6d = 900, so d = 150.",
          "Substitute: f + 22 × 150 = 4250, so f = 4250 - 3300 = 950.",
          "Check with the second student: 950 + 28 × 150 = 950 + 4200 = Rs 5,150, which matches.",
          "Answer: the fixed charge is Rs 950 per month and food costs Rs 150 per day."
        ],
        "answer": "Fixed charge = Rs 950, food cost = Rs 150 per day",
        "markTip": "This question is almost always worth a verification mark, so after finding f and d, plug them into the equation you did not use for substitution and state that the totals match.",
        "variant": "A hostel charges a fixed amount plus a per-day mess fee; 20 days costs Rs 3,900 and 26 days costs Rs 4,860. Find both charges. (Answer: fixed Rs 700, mess Rs 160 per day)"
      }
    ],
    "faqs": [
      {
        "q": "What fraction becomes 9/11 when 2 is added to both the numerator and denominator?",
        "a": "The fraction is 7/9. Adding 2 to both parts gives 9/11 directly, and adding 3 to both gives 10/12, which simplifies to 5/6, matching the second condition in the question. The two conditions convert to the linear equations 11x - 9y = -4 and 6x - 5y = -3, which solve to x = 7 and y = 9."
      },
      {
        "q": "Which is better for this chapter, substitution or elimination?",
        "a": "Both earn full marks, so choose by shape. If a variable is already almost alone, like y = x + 3, substitute. If both equations look like ax + by = c with clumsy coefficients, eliminate by matching one coefficient and subtracting. The fraction problem is a textbook elimination case, since multiplying by 5 and 9 matches the y terms at 45y."
      },
      {
        "q": "Do I need to verify my answer at the end?",
        "a": "Yes, and against the original wording rather than your own equations. Substituting 7 and 9 back into the story confirms both conditions and catches sign slips made during rearrangement, which are the most common error in this chapter. CBSE schemes also routinely reserve a mark for the final statement, so the checking sentence pays for itself."
      },
      {
        "q": "Can I solve these word problems graphically?",
        "a": "In principle yes, since every pair of linear equations is two lines whose intersection is the answer, but in practice it is slow and imprecise for values like 7 and 9 unless the question demands a graph. Use algebra unless the paper explicitly asks for a graphical solution, and expect graph questions to be flagged clearly with grid space provided."
      }
    ],
    "targetQuery": "a fraction becomes 9/11 if 2 is added to both numerator and denominator",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "cbse",
    "slug": "class-10-science-electricity-numericals",
    "metaTitle": "Class 10 Electricity Numericals With Solutions",
    "metaDescription": "Six Class 10 electricity numericals with solutions: Ohm's law, series and parallel resistance, heating effect, power and cost of energy in units.",
    "h1": "Class 10 Electricity Numericals With Full Solutions",
    "quickAnswer": "Class 10 electricity numericals come down to a short toolkit: V = IR, series resistances add, parallel resistances combine by reciprocals, heat H = I^2Rt, power P = VI = V^2/R, and 1 unit = 1 kWh for energy costs. Below are six numericals solved in the CBSE layout of given, formula, substitution, answer.",
    "intro": "Electricity numericals are the most predictable marks in the Class 10 science paper: the same handful of formulas gets dressed up in different household settings. This page works through six numericals covering Ohm's law, series and parallel combinations, the heating effect of current, power ratings, and the cost of electrical energy in units. Each one is set out the way CBSE marking schemes reward: state what is given, write the formula, substitute with units, then give the final answer with its unit. The unit conversion traps are flagged as they appear, minutes to seconds and watts to kilowatts, because that is where most of the lost marks actually go.",
    "sections": [
      {
        "heading": "The complete formula kit for electricity numericals",
        "body": "Six relationships cover every numerical in this chapter. Ohm's law: V = IR. Series circuits: resistances simply add, and the current is the same everywhere. Parallel circuits: 1/Rp = 1/R1 + 1/R2, and the answer is always smaller than the smallest branch. Heating: H = I^2Rt joules, with time in seconds. Power: P = VI, with the variants P = I^2R and P = V^2/R derived by substituting Ohm's law. Energy billing: units on the meter are kilowatt-hours, energy in kWh = power in kW × time in hours, and cost = units × tariff. Notice the two different worlds here: heat in joules lives in SI seconds, while billing lives in kilowatts and hours. Numericals mix the worlds deliberately, and choosing the right world before substituting is most of the skill."
      },
      {
        "heading": "Unit conversions are where the marks actually go",
        "body": "Almost every lost mark in electricity numericals is a unit slip rather than a physics misunderstanding. The big four: minutes must become seconds before H = I^2Rt (5 minutes is 300 s); watts must become kilowatts before counting units (400 W is 0.4 kW); commercial units are kilowatt-hours, and one unit equals 3.6 × 10^6 J if a question bridges the two systems; and milliamperes must become amperes before Ohm's law. Build the habit of converting in a labelled line of its own, t = 5 × 60 = 300 s, before touching the formula. It is also worth writing the unit next to every substituted number, because that makes a mismatched unit look wrong on the page while there is still time to fix it."
      },
      {
        "heading": "How a 3-mark numerical is actually marked",
        "body": "CBSE science marking schemes for numericals usually split three ways: the formula, the substitution, and the answer with its unit. That split has practical consequences. Writing H = I^2Rt earns its mark even before any numbers appear, so never skip straight to arithmetic. Substituting with visible values, H = 4 × 20 × 300, earns the second even if a multiplication then goes wrong. The final mark needs both the number and the unit, and 24000 on its own does not get it; 24,000 J does. This is why the solved numericals above all follow the same skeleton of given, formula, substitution, answer. It looks slightly ceremonial, but the ceremony is literally where the marks are attached, and it takes maybe twenty extra seconds per question."
      }
    ],
    "problems": [
      {
        "question": "An electric iron draws a current of 4 A when plugged into a 220 V household supply. Calculate the resistance of its heating element.",
        "steps": [
          "Given: V = 220 V and I = 4 A. To find: the resistance R.",
          "Formula: Ohm's law, V = IR, rearranged to R = V/I.",
          "R = 220/4 = 55.",
          "Answer: the resistance of the element is 55 ohm."
        ],
        "answer": "R = 55 ohm",
        "markTip": "A surprising number of scripts compute I/V here instead of V/I; picture the V-I-R triangle with V on top and I, R below, and the rearrangement comes out right every time.",
        "variant": "A filament bulb draws 0.5 A from a 220 V supply. Find its resistance. (Answer: 440 ohm)"
      },
      {
        "question": "Resistors of 5 ohm, 10 ohm and 15 ohm are joined in series across a 6 V battery. Find the total resistance of the circuit and the current flowing through it.",
        "steps": [
          "Given: R1 = 5 ohm, R2 = 10 ohm and R3 = 15 ohm in series, with V = 6 V. To find: total resistance and current.",
          "Formula: in series, total resistance Rs = R1 + R2 + R3.",
          "Rs = 5 + 10 + 15 = 30 ohm.",
          "Current from Ohm's law: I = V/Rs = 6/30 = 0.2 A.",
          "The same 0.2 A flows through every resistor, because current is common in a series circuit.",
          "Answer: total resistance 30 ohm and current 0.2 A."
        ],
        "answer": "Total resistance = 30 ohm; current = 0.2 A",
        "markTip": "If a follow-up asks for the potential difference across one resistor, use V = IR with that resistor alone, for example 0.2 × 10 = 2 V; applying the full 6 V to a single resistor is the standard giveaway error.",
        "variant": "Resistors of 2 ohm, 3 ohm and 7 ohm are connected in series with a 6 V battery. Find the current. (Answer: 0.5 A)"
      },
      {
        "question": "A 6 ohm resistor and a 3 ohm resistor are connected in parallel to a 4 V battery. Work out the equivalent resistance of the pair and the total current drawn from the battery.",
        "steps": [
          "Given: R1 = 6 ohm and R2 = 3 ohm in parallel, with V = 4 V. To find: equivalent resistance and total current.",
          "Formula: 1/Rp = 1/R1 + 1/R2.",
          "1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, so Rp = 2 ohm.",
          "Total current: I = V/Rp = 4/2 = 2 A.",
          "Notice Rp = 2 ohm is smaller than either resistor, which is always true for a parallel pair.",
          "Answer: equivalent resistance 2 ohm and total current 2 A."
        ],
        "answer": "Equivalent resistance = 2 ohm; total current = 2 A",
        "markTip": "The classic mistake is stopping at 1/Rp = 1/2 and writing the resistance as 1/2 ohm; you must flip the reciprocal at the end, and the quick sanity check is that a parallel answer is always below the smallest branch.",
        "variant": "A 4 ohm and a 12 ohm resistor are in parallel across a 6 V battery. Find the equivalent resistance and the total current. (Answer: 3 ohm and 2 A)"
      },
      {
        "question": "A current of 2 A passes through a 20 ohm resistor for 5 minutes. How much heat is produced in the resistor?",
        "steps": [
          "Given: I = 2 A, R = 20 ohm and t = 5 minutes. To find: the heat produced H.",
          "Convert time to SI units first: t = 5 × 60 = 300 s.",
          "Formula: Joule's law of heating, H = I^2Rt.",
          "H = (2)^2 × 20 × 300 = 4 × 20 × 300.",
          "H = 24000 J = 24 kJ.",
          "Answer: the heat produced is 24,000 J, that is 24 kJ."
        ],
        "answer": "H = 24,000 J (24 kJ)",
        "markTip": "Leaving the time in minutes is the single biggest mark-loser on heating numericals; convert to seconds before substituting, and squaring only the current, not IR, is the other trap.",
        "variant": "A 3 A current flows through a 10 ohm resistor for 2 minutes. Find the heat produced. (Answer: 10,800 J)"
      },
      {
        "question": "An electric kettle is rated 2200 W at 220 V. Find the current it draws in normal use and the resistance of its heating element.",
        "steps": [
          "Given: P = 2200 W and V = 220 V. To find: the current I and the resistance R.",
          "Formula: P = VI, so I = P/V.",
          "I = 2200/220 = 10 A.",
          "Resistance from Ohm's law: R = V/I = 220/10 = 22 ohm, or directly R = V^2/P = 48400/2200 = 22 ohm.",
          "Answer: the kettle draws 10 A and its element has a resistance of 22 ohm."
        ],
        "answer": "I = 10 A; R = 22 ohm",
        "markTip": "The rating plate gives P and V, never I, so start from P = VI; students who begin with V = IR and invent a current get no method marks.",
        "variant": "A room heater is rated 1100 W at 220 V. Find the current it draws and the element's resistance. (Answer: 5 A and 44 ohm)"
      },
      {
        "question": "A refrigerator rated at 400 W runs for 8 hours every day. If electricity costs Rs 6 per unit, what is the cost of running it for a 30-day month?",
        "steps": [
          "Given: P = 400 W = 0.4 kW, running 8 hours daily for 30 days, tariff Rs 6 per unit. To find: the monthly cost.",
          "Formula: energy in units (kWh) = power in kW × time in hours.",
          "Energy per day = 0.4 × 8 = 3.2 kWh.",
          "Energy for the month = 3.2 × 30 = 96 kWh, which is 96 units.",
          "Cost = 96 × 6 = Rs 576.",
          "Answer: running the refrigerator costs Rs 576 for the month."
        ],
        "answer": "Monthly cost = Rs 576",
        "markTip": "The whole question hinges on converting 400 W to 0.4 kW before multiplying; if your unit count comes out in the thousands you have forgotten the kilo, so pause and check the order of magnitude.",
        "variant": "A 100 W television runs 6 hours a day for 30 days in a home where a unit costs Rs 5. Find the monthly cost. (Answer: Rs 90)"
      }
    ],
    "faqs": [
      {
        "q": "What is 1 unit of electricity?",
        "a": "One unit is one kilowatt-hour, the energy a 1 kW appliance uses in one hour, and it is what domestic meters count. In SI terms 1 kWh = 3.6 × 10^6 J. For billing questions, convert power to kilowatts, multiply by hours to get units, then multiply by the tariff to get the cost in rupees."
      },
      {
        "q": "Which formulas cover all Class 10 electricity numericals?",
        "a": "Six: V = IR; series resistance Rs = R1 + R2 + R3; parallel resistance 1/Rp = 1/R1 + 1/R2; heat H = I^2Rt with time in seconds; power P = VI along with the derived forms I^2R and V^2/R; and energy in kWh = kW × hours for cost questions. Every numerical on this page uses only these."
      },
      {
        "q": "Will I lose marks for missing units?",
        "a": "Usually yes: the final mark in a numerical is generally tied to the answer with its correct unit, so 55 alone earns less than 55 ohm. Get in the habit of carrying units through the substitution line as well, because a stray minute or watt spotted there can be fixed before it corrupts the final answer."
      },
      {
        "q": "Why does a parallel combination have less resistance than either resistor?",
        "a": "Adding a branch gives the current an extra path, so more total current flows for the same voltage, which by R = V/I means a lower effective resistance. This is also your best sanity check: if your parallel answer comes out bigger than the smallest branch resistance, the reciprocal step went wrong, most often by forgetting to flip 1/Rp at the end."
      }
    ],
    "targetQuery": "class 10 electricity numericals with solutions",
    "hubSubjects": [
      "math",
      "physics"
    ]
  },
  {
    "board": "cbse",
    "slug": "class-10-maths-arithmetic-progression-case-study",
    "metaTitle": "Case Study Questions: Class 10 Arithmetic Progression",
    "metaDescription": "Three original arithmetic progression case study questions for Class 10 maths, on theatre seats, a savings plan and ladder rungs, fully solved.",
    "h1": "Class 10 Arithmetic Progression Case Study Questions, Solved",
    "quickAnswer": "CBSE case study questions give a real-life setting, then three or four sub-parts that all use an = a + (n - 1)d or Sn = n/2 × (2a + (n - 1)d). Below are three original scenarios, theatre seats, a monthly savings plan and ladder rungs, each solved sub-part by sub-part with the formula stated first.",
    "intro": "Since CBSE moved towards competency-based papers, the arithmetic progression chapter almost always shows up as a case study: a paragraph about seats, savings or steps, followed by three or four short sub-parts. Past paper questions cannot be reproduced here, so the three scenarios below, a theatre, a monthly savings plan and a carpenter's ladder, are original, but they are built to the same shape and difficulty as the real thing. Each sub-part is solved with the formula stated before the substitution, the way marking schemes reward. If you can do these three cold, the exam version should not surprise you.",
    "sections": [
      {
        "heading": "What the case study format looks like",
        "body": "A case study question opens with a short real-world paragraph, seats in a stadium, instalments on a loan, steps of a staircase, and then asks three or four sub-parts that escalate: typically identify a or d, find a particular term, then find a sum, sometimes with a small twist in the last part. The sub-parts are marked separately, usually adding to 4 or 5 marks, so a blank part (iii) does not erase your (i) and (ii). The scenarios on this page are original, because real past-paper questions cannot be republished, but they follow the same escalation and the same mark shape. Train yourself to extract three things from the paragraph before answering anything: the first term, the common difference, and what n means in this particular story."
      },
      {
        "heading": "Three formulas, and how to pick between the two sums",
        "body": "Everything here runs on the nth term formula an = a + (n - 1)d and the two sum formulas Sn = n/2 × (2a + (n - 1)d) and Sn = n/2 × (a + l). The nth term answers questions about one position: how many seats in row 10, one deposit, one rung. The sums answer questions about totals: capacity, savings so far, wood needed. Choosing between the two sum forms is simple: if you already know the last term l, as in the ladder scenario where both end rungs are given, use n/2 × (a + l) and finish in one line; if you only know a and d, use the longer form. Writing the formula before substituting is worth an explicit mark in most schemes, so never skip that line even under time pressure."
      },
      {
        "heading": "Error carried forward, and why sub-parts reward method",
        "body": "Case studies chain sub-parts, so students worry that a slip in part (i) poisons everything after it. In practice CBSE marking generally applies error carried forward: if your d is wrong but your part (ii) method correctly uses your d, the method credit in (ii) survives. That changes how you should play the question. Never abandon later sub-parts because an earlier answer feels doubtful, and never erase working, because visible method is what the carried-forward credit attaches to. Do sanity-check magnitudes as you go: 30 rows starting at 12 seats cannot plausibly hold 40,000 people, and a negative number of seats means a sign slipped somewhere. A ten-second reality check between sub-parts catches most disasters while they are still worth only one mark."
      }
    ],
    "problems": [
      {
        "question": "Case study: A new theatre hall has 30 rows of seats. The first row, nearest the stage, has 12 seats, and every row after it has 3 seats more than the row in front of it. (i) How many seats are in the 10th row? (ii) Which row has exactly 57 seats? (iii) How many seats does the theatre hold in total?",
        "steps": [
          "Given: the seat counts form an AP with first term a = 12, common difference d = 3, and n = 30 rows in all.",
          "(i) Formula: an = a + (n - 1)d, so a10 = 12 + 9 × 3 = 12 + 27 = 39 seats.",
          "(ii) Set an = 57: 12 + (n - 1) × 3 = 57, so (n - 1) × 3 = 45, n - 1 = 15 and n = 16.",
          "(iii) Formula: Sn = n/2 × (2a + (n - 1)d), so S30 = 30/2 × (2 × 12 + 29 × 3).",
          "S30 = 15 × (24 + 87) = 15 × 111 = 1665.",
          "Answer: (i) 39 seats, (ii) the 16th row, (iii) 1,665 seats in total."
        ],
        "answer": "(i) 39 seats (ii) 16th row (iii) 1,665 seats",
        "markTip": "In part (ii) students solve (n - 1) × 3 = 45 correctly and then forget the final plus one, answering row 15; the n you want is 15 + 1 = 16, so always finish the rearrangement.",
        "variant": "An open-air theatre has 25 rows, with 10 seats in the first row and 2 extra seats in each row after it. Find the seats in the last row and the total capacity. (Answer: 58 seats and 850 seats)"
      },
      {
        "question": "Case study: Priya opens a savings account in January and deposits Rs 200 that month. Each month after that, she deposits Rs 50 more than she did the month before. (i) How much does she deposit in the 12th month? (ii) In which month does she deposit exactly Rs 600? (iii) How much has she saved in total after one full year?",
        "steps": [
          "Given: the deposits form an AP with a = 200 and d = 50. To find: the 12th deposit, the month of the Rs 600 deposit, and the 12-month total.",
          "(i) Formula: an = a + (n - 1)d, so a12 = 200 + 11 × 50 = 200 + 550 = Rs 750.",
          "(ii) Set an = 600: 200 + (n - 1) × 50 = 600, so (n - 1) × 50 = 400 and n = 9, the 9th month.",
          "(iii) Formula: Sn = n/2 × (2a + (n - 1)d), so S12 = 12/2 × (2 × 200 + 11 × 50) = 6 × (400 + 550).",
          "S12 = 6 × 950 = Rs 5,700.",
          "Answer: (i) Rs 750, (ii) the 9th month, (iii) Rs 5,700 saved over the year."
        ],
        "answer": "(i) Rs 750 (ii) 9th month (iii) Rs 5,700",
        "markTip": "Mixing up an and Sn is the killer here: part (i) asks for one deposit, the nth term, while part (iii) asks for the running total, the sum, so label which formula you are using before substituting.",
        "variant": "Arjun saves Rs 150 in the first month and increases his saving by Rs 25 each month. How much has he saved in total after 24 months? (Answer: Rs 10,500)"
      },
      {
        "question": "Case study: A carpenter is building a ladder with 15 rungs whose lengths decrease evenly from bottom to top. The bottom rung is 60 cm long and the top rung is 32 cm long. (i) Explain why the rung lengths form an AP and find the common difference. (ii) How long is the 8th rung from the bottom? (iii) What total length of wood is needed for all 15 rungs?",
        "steps": [
          "Given: 15 rungs, first term a = 60 cm, last term l = 32 cm, with the lengths decreasing evenly.",
          "(i) Because the lengths change by the same amount each step, they form an AP; d = (l - a)/(n - 1) = (32 - 60)/14 = -28/14 = -2 cm.",
          "(ii) Formula: an = a + (n - 1)d, so a8 = 60 + 7 × (-2) = 60 - 14 = 46 cm.",
          "(iii) Since the last term is known, use Sn = n/2 × (a + l): S15 = 15/2 × (60 + 32).",
          "S15 = 15/2 × 92 = 15 × 46 = 690 cm.",
          "Answer: (i) d = -2 cm, (ii) 46 cm, (iii) 690 cm of wood, which is 6.9 m."
        ],
        "answer": "(i) d = -2 cm (ii) 46 cm (iii) 690 cm (6.9 m)",
        "markTip": "When both the first and last terms are given, Sn = n/2 × (a + l) finishes in one line; students who insist on the 2a + (n - 1)d version often slip on the negative d, so pick the shorter formula.",
        "variant": "A ladder has 11 rungs shrinking evenly from 50 cm at the bottom to 30 cm at the top. Find the total length of wood in the rungs. (Answer: 440 cm)"
      }
    ],
    "faqs": [
      {
        "q": "Are case study questions compulsory in the Class 10 maths paper?",
        "a": "Recent CBSE papers include a dedicated case-based section, and arithmetic progression is one of its most frequent settings, so treat it as effectively certain rather than optional. The exact structure, typically 4 marks split across three or four sub-parts, sometimes with internal choice, is set each year in the official sample paper, which is worth checking before the exam."
      },
      {
        "q": "Which formulas do AP case studies actually use?",
        "a": "Three: the nth term an = a + (n - 1)d for any single-position question, and the sums Sn = n/2 × (2a + (n - 1)d) or Sn = n/2 × (a + l) for totals. Case studies rarely go beyond these three; the difficulty is extracting a, d and n from the story, not the algebra itself."
      },
      {
        "q": "If I get part (i) wrong, are the later parts lost too?",
        "a": "Generally no. CBSE marking normally applies error carried forward, so a later sub-part solved with a correct method using your earlier wrong value still collects its method credit. This only works if your working is visible, so write every formula and substitution out and never erase an attempt, even when you suspect the number feeding into it."
      },
      {
        "q": "Are these real past paper questions?",
        "a": "No. Past CBSE questions are copyrighted and cannot be republished, so all three scenarios here are original, written to match the pattern, difficulty and mark structure of the real case studies. For exam-authentic wording, pair this page with the official CBSE sample papers for the current year, which are free on the board's website."
      }
    ],
    "targetQuery": "case study questions class 10 maths arithmetic progression",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "gcse",
    "slug": "gcse-maths-pass-mark-foundation",
    "metaTitle": "How Many Marks to Pass GCSE Maths Foundation (2026)",
    "metaDescription": "Summer 2026 grade 4 boundaries for GCSE maths foundation: AQA 154/240, Edexcel 151/240, OCR 133/300. What a standard pass means and how to reach it.",
    "h1": "How Many Marks Do You Need to Pass GCSE Maths Foundation?",
    "quickAnswer": "In summer 2026 a grade 4 pass on GCSE maths foundation needed 154 out of 240 marks with AQA (about 64 percent), 151 out of 240 with Edexcel (about 63 percent) and 133 out of 300 with OCR (about 44 percent). Boundaries change every year, so treat these as a guide, not a promise.",
    "intro": "Grade boundaries move every year, so a pass mark question only has an honest answer if it names the exam series. This page uses the summer 2026 boundaries, published by the boards on 20 August 2026, the most recent real numbers available as I write. I sit Cambridge IGCSE rather than the UK boards, so nothing here comes from my own results; it is all taken from AQA, Edexcel and OCR's published boundary documents. The short version: grade 4 on foundation needed 154 out of 240 with AQA, 151 out of 240 with Edexcel and 133 out of 300 with OCR. Here is what those numbers mean and how to plan around them.",
    "sections": [
      {
        "heading": "The summer 2026 grade 4 boundaries, board by board",
        "body": "All three boards assess foundation maths with three papers. AQA and Edexcel papers are 80 marks each, so the total is 240. OCR papers are 100 marks each, so the total is 300, which is why OCR numbers look so different at first glance. In summer 2026, grade 4 needed 154 out of 240 with AQA (about 64 percent), 151 out of 240 with Edexcel (about 63 percent) and 133 out of 300 with OCR (about 44 percent). Grade 5, the strong pass, needed 187 with AQA, 181 with Edexcel and 183 out of 300 with OCR. The OCR percentage is not a loophole. Boundaries are set after marking so that a grade 4 represents the same standard everywhere; OCR's foundation papers simply played harder, so the boundary landed lower. Picking a board because its boundary looks lower does not work, and in any case your school chooses the board, not you."
      },
      {
        "heading": "What a grade 4 actually is",
        "body": "England treats grade 4 as a standard pass and grade 5 as a strong pass. Most sixth forms and colleges ask for at least a 4 in maths to start their courses, and many apprenticeships and university offers treat it as a minimum too. If you finish year 11 without a grade 4 in maths, government funding rules mean you normally keep studying maths alongside whatever you do next, usually as a resit in November or the following June. That is why the grade 4 boundary gets so much attention: it is the line between being done with GCSE maths and carrying it with you. Grade 5 matters for competitive sixth forms, and courses like A-Level maths usually ask for a 6 or 7, which foundation cannot award. On foundation tier the highest grade available is a 5, however well you score on the papers."
      },
      {
        "heading": "How much boundaries move year to year",
        "body": "Boundaries are set after everyone's papers are marked, so they absorb the difficulty of that year's questions. In 2026 the AQA foundation grade 4 boundary fell from 160 to 154, a drop of six marks, while Edexcel's rose from 144 to 151, a rise of seven. Same grade, same summer, opposite directions, because AQA's 2026 papers were judged harder than its 2025 papers and Edexcel's were judged easier. Across recent series AQA's grade 4 has sat in the mid 150s to 160 out of 240, and Edexcel's in the mid 140s to low 150s. The practical conclusion: never revise to hit last year's number exactly. If you build a plan around 151 and next year's boundary is 158, you have planned to fail by seven marks. Aim comfortably above the recent range, something like 170 out of 240, and the year to year movement stops mattering to you."
      },
      {
        "heading": "A realistic plan for reaching the pass mark",
        "body": "On AQA and Edexcel foundation you need roughly two thirds of the marks, but you do not need the hard two thirds. Foundation papers ramp up: the early questions are one and two mark skills like rounding, percentages of amounts, reading charts and simple algebra, and that is where a pass is actually won. Aim to make the first half of each paper close to untouchable through repetition of basics, because an easy mark dropped costs exactly as much as a hard question failed. Show working on every calculation, since method marks are awarded even when the final answer is wrong, and never leave blanks. Practise with a mark tally rather than a feeling: three past papers scored honestly against the 2026 boundaries tell you precisely how far from 154 or 151 you are. If you are consistently clearing grade 5 territory, around 187 with AQA, ask your teacher whether higher tier makes sense for you."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is 50 percent enough to pass GCSE maths foundation?",
        "a": "Not usually. In summer 2026 a grade 4 needed about 64 percent with AQA and 63 percent with Edexcel. OCR was the exception at about 44 percent, because its foundation papers were harder that year. Since boundaries shift each series, aiming for a steady 70 percent on past papers gives you a real margin rather than a coin flip."
      },
      {
        "q": "What happens if I do not get a grade 4 in maths?",
        "a": "You can still enrol at most colleges, but funding rules in England mean you normally continue studying maths alongside your course, usually resitting GCSE in November or the following June. Resit boundaries are set separately for each series. Plenty of students pass on the resit, and the standard required does not go up just because it is a second attempt."
      },
      {
        "q": "Is it easier to get a grade 4 on higher tier?",
        "a": "The boundary is much lower, 63 out of 240 with AQA and 50 with Edexcel in summer 2026, but the questions are much harder and there are fewer accessible marks for a grade 4 student. Fall below the grade 3 boundary on higher and you are ungraded entirely. If your target is a 4 or 5, foundation is normally the safer tier."
      },
      {
        "q": "Where do these numbers come from, and when do new ones appear?",
        "a": "They are the official June 2026 boundaries published by AQA, Edexcel and OCR on GCSE results morning, 20 August 2026. Each board posts a boundaries document on its website the day results come out, every August for the summer series and each winter for November resits. Whichever year you are reading this, check your board's page for the latest series before relying on any single number."
      }
    ],
    "targetQuery": "how many marks to pass gcse maths foundation",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "gcse",
    "slug": "gcse-grade-percentages",
    "metaTitle": "What Percentage Is a Grade 7 GCSE? 2026 Numbers",
    "metaDescription": "What percentage is a grade 7 at GCSE? Real summer 2026 boundaries from AQA, Edexcel and OCR for maths, the sciences and English, grade by grade.",
    "h1": "What Percentage Is a Grade 7 at GCSE?",
    "quickAnswer": "Using summer 2026 boundaries, a grade 7 needed roughly 69 percent in AQA higher maths, 61 percent in Edexcel higher maths, and 54 to 62 percent in higher tier combined science depending on the board. In untiered AQA English Language it was 64 percent. There is no single fixed percentage per grade.",
    "intro": "There is no official percentage for any GCSE grade. Boundaries are set separately for every subject, board, tier and year, after all the papers are marked. What you can do is look at the most recent real boundaries and read off what each grade actually took. Everything below uses the summer 2026 series, published on 20 August 2026, taken from the boards' own boundary documents. I sit Cambridge IGCSE rather than the UK boards, so this page is research, not memory, and I have stated which board and tier every figure belongs to. Treat each percentage as a snapshot of one summer, not a rule.",
    "sections": [
      {
        "heading": "Maths, summer 2026: grade by grade",
        "body": "On higher tier out of 240, AQA wanted 219 marks for a 9 (91 percent), 192 for an 8 (80 percent) and 166 for a 7 (69 percent). Edexcel sat lower: 208 for a 9 (87 percent), 177 for an 8 (74 percent) and 146 for a 7 (61 percent). OCR marks out of 300: 264 for a 9 (88 percent), 217 for an 8 (72 percent) and 170 for a 7 (57 percent). On foundation, grade 4 took about 64 percent with AQA, 63 with Edexcel and 44 with OCR, while grade 5 took roughly 78, 75 and 61 percent respectively. Notice the spread: a maths 7 was 57 percent on one board and 69 percent on another in the same summer. That is not one board being generous. Their papers differ in difficulty, and boundaries are set afterwards so the grade standard stays level."
      },
      {
        "heading": "Sciences, summer 2026: combined and separate",
        "body": "Combined science on higher tier: AQA Trilogy is out of 420 and wanted 228 for a 7-7 (54 percent), 262 for an 8-8 (62 percent) and 298 for a 9-9 (71 percent). Edexcel, out of 360, wanted 221 for a 7-7 (61 percent), 251 for an 8-8 (70 percent) and 282 for a 9-9 (78 percent). OCR Gateway, also out of 360, sat at 222 for a 7-7 (62 percent) and 275 for a 9-9 (76 percent). Separate sciences vary even more. AQA Biology higher, out of 200, needed 107 for a 7, just 54 percent, while OCR Gateway Chemistry higher, out of 180, needed 139 for a 7, which is 77 percent, and 163 for a 9, a striking 91 percent. So a student scoring 60 percent could be sitting on a grade 8 in one science and a grade 5 in another. The subject and board on the front of the paper change everything."
      },
      {
        "heading": "Why the same grade needs a different percentage on each tier",
        "body": "Grades 4 and 5 exist on both tiers, and the percentages behind them are wildly different. In 2026 maths, a grade 4 needed about 63 or 64 percent of a foundation paper with AQA or Edexcel, but only about 26 and 21 percent of their higher papers, and 19 percent with OCR. That looks absurd until you remember the papers are different. Higher tier questions start at roughly grade 4 difficulty and climb to grade 9, so scraping a quarter of a higher paper demonstrates about the same maths as two thirds of a foundation paper. This is also the hidden risk in tier choice. On higher tier there is a small safety net below grade 4, a grade 3 awarded at reduced marks, and then a U, so a bad day on higher can leave you with nothing while the same performance on foundation would have banked a pass. A percentage only means something with the tier attached."
      },
      {
        "heading": "Why English boundaries look different from maths",
        "body": "AQA English Language in summer 2026, out of 160, needed 75 for a 4 (47 percent), 103 for a 7 (64 percent) and 122 for a 9 (76 percent). Compare maths higher on the same board: 26 percent for a 4 and 91 percent for a 9. English compresses the range for two reasons. It is untiered, so a single paper has to separate grade 1 from grade 9, and it is marked in levels rather than right or wrong answers. Level based marking pulls scores toward the middle: almost nobody scores below 30 percent, because writing anything relevant earns low level marks, and almost nobody scores above 85, because the top of the top level is awarded cautiously. In maths an answer is simply right or wrong, so the full mark range gets used. This is why comparing your percentage across subjects tells you very little, and comparing it to that subject's own boundary tells you everything."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is 70 percent a grade 7 at GCSE?",
        "a": "Sometimes, and that is exactly the problem with rules of thumb. In summer 2026, 70 percent of AQA higher maths was just above the grade 7 boundary, 70 percent of Edexcel combined science higher was already an 8-8, and 70 percent of OCR Gateway chemistry higher was below that grade 7 line of 77 percent. The subject and board decide, not the percentage."
      },
      {
        "q": "What percentage is a grade 9 in GCSE maths?",
        "a": "In the summer 2026 series, on higher tier, a 9 needed 219 out of 240 with AQA (91 percent), 208 out of 240 with Edexcel (87 percent) and 264 out of 300 with OCR (88 percent). So roughly nine marks in every ten, on the hardest tier, and there is no grade 9 available on foundation."
      },
      {
        "q": "What percentage is a grade 4 pass?",
        "a": "It depends heavily on tier. In 2026 maths, foundation grade 4 sat at about 64 percent with AQA, 63 with Edexcel and 44 with OCR, while on higher tier the same grade needed only about 26, 21 and 19 percent. In untiered AQA English Language it was 47 percent. There is no universal pass percentage, which is why boundary tables exist."
      },
      {
        "q": "Can I use these percentages to grade my mock exams?",
        "a": "Roughly, and only if the mock was a real past paper from the same board and you use that paper's own published boundaries rather than a generic percentage. Applying 2026 maths boundaries to a different year's paper, or to a test your teacher wrote, gives a false reading in either direction. Most schools apply recent boundaries to real papers, which is about as fair as mocks get."
      },
      {
        "q": "Why do grade boundaries change every year?",
        "a": "Because the papers change. Boards cannot make every exam equally difficult, so Ofqual has them set boundaries after marking, using statistics plus examiner judgement to hold the grade standard steady across years. A harder paper gets lower boundaries and an easier one gets higher boundaries. That is why revising to beat last summer's exact number means planning around a stale figure."
      }
    ],
    "targetQuery": "what percentage is a grade 7 gcse",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "gcse",
    "slug": "gcse-6-mark-questions-science",
    "metaTitle": "How to Answer 6 Mark Questions GCSE Science",
    "metaDescription": "How 6 mark questions are levelled in GCSE science, what examiners want at level 3, and a worked biology 6 marker on vaccination with a model answer.",
    "h1": "How to Answer 6 Mark Questions in GCSE Science",
    "quickAnswer": "Six mark questions in GCSE science are marked by level, not by ticking six separate points. Examiners place your whole answer in level 1, 2 or 3, then pick a mark inside that level. To reach level 3 you need a linked, logical chain of scientific reasoning that answers the exact command word.",
    "intro": "The six mark extended response questions are the ones students fear most on GCSE science papers, and the marking system behind them really is different from everything else on the paper. They are not marked point by point. The examiner reads your whole answer, decides which level it sits in, then chooses a mark within that level. Once you know what moves an answer up a level, they stop being scary. I sit Cambridge IGCSE, where extended answers are marked in a similar spirit, but everything below about the UK boards comes from their published mark schemes and examiner reports rather than personal experience of sitting their papers.",
    "sections": [
      {
        "heading": "How level marking actually works",
        "body": "AQA, Edexcel and OCR all mark six markers with a levels grid, usually three levels worth two marks each. Level 1, one to two marks, means you have written some relevant scientific points but they sit as isolated fragments. Level 2, three to four marks, means mostly correct science with some linking, but the chain of logic has gaps. Level 3, five to six marks, means a coherent, logically ordered chain of correct science that answers the exact question asked. Alongside the grid sits indicative content, a list of points examiners expect to see, but here is the crucial part: you do not get a mark per point. Six correct facts in a random pile is a level 1 or 2 answer. Four facts connected with because, so and this means, in a sensible order, is level 3. The examiner is grading the reasoning, not counting the facts."
      },
      {
        "heading": "Command words set the job",
        "body": "The first word of the question tells you what the examiner is allowed to reward. Describe means say what happens, no reasons needed. Explain means give reasons: every statement should be followed by because or so that. Compare means every sentence must mention both things, and one sided answers cap themselves below the top level. Evaluate means give points for and against and finish with a judgement, and the judgement is often the difference between level 2 and level 3. The most common mismatch is writing a describe answer to an explain question: a student writes out everything that happens during vaccination, accurately, and scores 3, because nothing is linked to why it happens. Before writing, underline the command word and the actual subject of the question. If the question says explain how vaccination protects a population, then the population, not just one person, has to appear in your answer."
      },
      {
        "heading": "The failure patterns examiners keep reporting",
        "body": "Examiner reports mention the same handful of problems every year. Answers that list facts without connecting them, which caps you at level 2 however much you know. Answers that drift to the topic instead of the question, like explaining how white blood cells fight infection when the question asked about protecting a population. Answers that repeat the stem of the question back in different words, which earns nothing. Answers with no order, where the marker cannot follow the logic from start to finish. And answers that run out of time because the student wrote half a page of introduction first. There is also the opposite failure: one line answers. A six marker cannot reach level 3 in a single sentence, because a chain of reasoning needs several links. Five to eight short, ordered sentences is usually about right. None of these failures come from not knowing the science; they come from not managing the answer."
      },
      {
        "heading": "A method to use every time",
        "body": "Spend thirty seconds planning before you write. Read the command word and circle what the question is actually about. Jot four to six key points in the margin, then number them into a logical order, cause before effect. Write them as short sentences joined with because, so, this means and therefore, and cross out each margin note as you use it. Finish by rereading the question, not your answer: check that the thing the question asked about genuinely appears in what you wrote. Practising this on real past papers with the mark scheme open teaches you faster than anything else, because you start recognising what indicative content looks like and how little of it a level 3 answer actually needs. Below is an original question written in the style the boards use, with the model answer broken into separate marking points so you can watch the chain being built link by link."
      }
    ],
    "problems": [
      {
        "question": "Exam style question, written by us in the style of the UK boards: Explain how a vaccination programme can protect a population from a communicable disease, including people who have not been vaccinated themselves. (6 marks)",
        "steps": [
          "The vaccine introduces a dead or inactive form of the pathogen, or its antigens, into the body. Naming what a vaccine contains is the correct first link and shows the examiner the chain starts with real science.",
          "White blood cells recognise these antigens and produce antibodies against them. This is the first cause and effect pair, connecting the vaccine to the immune response.",
          "Some white blood cells remain in the body as memory cells after the response ends. Memory cells are the point weak answers skip, and without them nothing later in the chain works.",
          "If the live pathogen infects the person later, memory cells produce antibodies much faster and in greater quantity, so the person is protected before they become ill. The comparison with the slower first response is the explain step examiners look for.",
          "When most of the population is vaccinated, the pathogen has very few hosts it can infect and reproduce in. This sentence moves the answer from one person to the population, which the question explicitly demands.",
          "Transmission falls so far that unvaccinated people rarely meet an infected person, so they are protected too; this is called herd immunity. Closing the loop back to the unvaccinated answers the final part of the question and secures level 3."
        ],
        "answer": "Level 3, 6 marks: a linked chain from vaccine antigens to memory cells to reduced transmission protecting the unvaccinated (herd immunity)",
        "markTip": "Most answers stall at 3 or 4 marks because they explain one vaccinated person perfectly and never mention the population, so they cannot enter level 3 no matter how accurate the immunology is.",
        "variant": "Try this original variant yourself: Explain why a fall in vaccination rates for measles can lead to outbreaks that affect babies too young to receive the vaccine. (Answer outline: fewer vaccinated people means more hosts, so the virus spreads more easily; herd immunity breaks down; unvaccinated babies are far more likely to meet an infected person, and they have no antibodies or memory cells to respond quickly.)"
      }
    ],
    "faqs": [
      {
        "q": "Do I need to make six separate points to get six marks?",
        "a": "No. The mark comes from the level, not a count. Four or five correct points, linked logically and covering the whole question, can reach level 3 and full marks, while eight disconnected facts can sit in level 1. Depth of linking beats quantity of content every time, which is why planning the order matters more than remembering everything."
      },
      {
        "q": "How long should a 6 mark answer be?",
        "a": "Usually five to eight short sentences, around a third of a page. One line cannot hold a chain of reasoning, and a full page usually means repetition and lost time on the rest of the paper. The number of answer lines printed on the exam paper is a reasonable guide to the length the board expects."
      },
      {
        "q": "Do all the boards mark 6 markers the same way?",
        "a": "The machinery is very close. AQA, Edexcel and OCR all use a three level grid with indicative content for extended response questions, and all reward a linked, ordered argument over a list of facts. Command word definitions are published separately by each board and differ slightly in wording, so it is worth reading your own board's list once."
      },
      {
        "q": "Are six markers marked for spelling and grammar?",
        "a": "In GCSE science the levels are awarded for scientific content and how coherently it is organised, not for spelling. Your answer does need to be readable and clearly ordered, because an examiner who cannot follow your logic cannot place it in level 3. Chemical symbols, equations and units still need to be correct, since those are science, not spelling."
      }
    ],
    "targetQuery": "how to answer 6 mark questions gcse science",
    "hubSubjects": [
      "biology",
      "chemistry",
      "physics"
    ]
  },
  {
    "board": "waec",
    "slug": "waec-maths-quadratic-equations-practice",
    "metaTitle": "WAEC Past Questions on Quadratic Equations (Solved)",
    "metaDescription": "Six original WASSCE-style quadratic equation questions with full worked solutions, WAEC M and A mark tips, plus Paper 1 vs Paper 2 and calculator rules.",
    "h1": "WAEC Quadratic Equations Practice Questions, Fully Solved",
    "quickAnswer": "Real WAEC past papers are copyrighted, so this page gives you the next best thing: six original questions written in the exact WASSCE format, covering factorisation, the formula, completing the square, word problems, roots relationships and graph reading. Each is fully solved with WAEC-style M (method) and A (accuracy) mark tips.",
    "intro": "Most pages ranking for WAEC quadratic questions are scanned PDFs on document-sharing sites, half of them behind download walls. This page does it differently. Because real past papers are copyrighted, I wrote six original questions matched to the WASSCE format in topic, difficulty and structure, then solved each in full with the marking logic shown. One honesty note: I sit Cambridge IGCSE and A-Levels, not WAEC, so this comes from studying the WASSCE General Mathematics syllabus, paper structure and chief examiners' reports, not from sitting the paper myself. Work each question before reading the solution, then check where the M and A marks would have landed in your attempt.",
    "sections": [
      {
        "heading": "How quadratics appear in Paper 1 vs Paper 2",
        "body": "WASSCE General Mathematics has two written papers, and quadratics behave differently in each. Paper 1 is 50 objective questions in 1 hour 30 minutes. Quadratic items there are short: pick the roots of a factorisable equation, spot the equation whose roots are given, or find a sum or product of roots. Speed matters, so factorisation and the sum-and-product results are the tools to drill. Paper 2 lasts 2 hours 30 minutes and splits into Section A (five compulsory questions) and Section B (choose five from ten). Quadratics in Paper 2 come as multi-part questions: solve by completing the square or the formula to a stated number of decimal places, form an equation from a word problem, or build a table of values, plot the curve and read solutions off the graph. The graph question is a popular Section B choice because a large slice of its marks sits in the table and the plot rather than in algebra."
      },
      {
        "heading": "How WAEC marks a quadratic question",
        "body": "WAEC marking schemes label most marks M or A. An M mark is for method: substituting into the quadratic formula, a correct factorisation attempt, adding the right constant to both sides when completing the square. You keep it even if a later arithmetic slip spoils the answer. An A mark is for accuracy: the correct value, in the demanded form, following correct method. A marks usually cannot be earned without the M mark in front of them, which is why working matters even when you can see the answer in your head. Some schemes also award B marks for an independent correct statement, such as roots written straight from a graph. The practical consequences: quote the formula before substituting into it, show the factor pair you tried, state rejected roots and why you rejected them, and round only at the final line. A bare answer scores fully in Paper 1, where only the shaded option counts, but in Paper 2 it collects one mark at best."
      },
      {
        "heading": "Calculator rules in WASSCE maths",
        "body": "WAEC allows silent, cordless, non-programmable calculators in both mathematics papers, and phones are banned outright, even as clocks. So a calculator handles sqrt(41) in a formula question with no trouble. Two traps come with that permission. First, when a question says give your answers correct to two decimal places, carry at least three or four decimal places through the working and round once at the end; rounding a square root early gives answers a hundredth off and costs the A mark. Second, when a question says leave your answer in surd form, a decimal is wrong even though the calculator offers one: 3 + sqrt(5) is the answer, 5.24 is not. Many scientific calculators now solve quadratics outright in an equation mode. Use that to check your roots, never to replace working, because in Paper 2 the marks are attached to visible method, not to the final number."
      }
    ],
    "problems": [
      {
        "question": "Solve the equation x^2 - 5x - 14 = 0.",
        "steps": [
          "Look for two numbers that multiply to -14 and add to -5: they are -7 and +2. Factorising needs exactly this pair.",
          "Write x^2 - 5x - 14 = (x - 7)(x + 2) = 0. Expanding the brackets back confirms the factorisation.",
          "Set each bracket equal to zero: x - 7 = 0 or x + 2 = 0. A product is zero only when one of its factors is zero.",
          "Solve each: x = 7 or x = -2. Both values satisfy the original equation."
        ],
        "answer": "x = 7 or x = -2",
        "markTip": "The M mark here is for a visible factorisation, so writing only the two answers with no brackets shown risks losing everything if either root is wrong.",
        "variant": "Solve x^2 - 3x - 10 = 0 by factorisation. (Answer: x = 5 or x = -2)"
      },
      {
        "question": "Using the quadratic formula, solve 2x^2 + 3x - 4 = 0, giving your answers correct to two decimal places.",
        "steps": [
          "Compare with ax^2 + bx + c = 0 to get a = 2, b = 3, c = -4. Identifying a, b and c correctly is the first method step.",
          "Quote the formula: x = (-b + or - sqrt(b^2 - 4ac)) / (2a). Writing it before substituting lets the marker follow your work.",
          "Substitute: x = (-3 + or - sqrt(9 - 4(2)(-4))) / 4 = (-3 + or - sqrt(41)) / 4. The discriminant is 9 + 32 = 41 because subtracting a negative adds.",
          "Evaluate sqrt(41) = 6.403 to three decimal places. Keep an extra decimal place so the final rounding is safe.",
          "Compute both roots: x = (-3 + 6.403)/4 = 0.85 and x = (-3 - 6.403)/4 = -2.35, each to two decimal places."
        ],
        "answer": "x = 0.85 or x = -2.35 (to 2 decimal places)",
        "markTip": "There is an M mark for correct substitution and an A mark for each root, and rounding sqrt(41) too early is the single most common way candidates lose both A marks.",
        "variant": "Use the quadratic formula to solve 3x^2 - 5x - 1 = 0, correct to two decimal places. (Answer: x = 1.85 or x = -0.18)"
      },
      {
        "question": "The product of two consecutive positive odd numbers is 195. Find the two numbers.",
        "steps": [
          "Let the smaller number be n, so the next odd number is n + 2. Defining the variable in words earns the setup mark.",
          "Form the equation n(n + 2) = 195, which gives n^2 + 2n - 195 = 0. Expand and bring every term to one side before factorising.",
          "Factorise: (n + 15)(n - 13) = 0, since 15 and -13 multiply to -195 and add to 2.",
          "So n = -15 or n = 13, and n = -15 is rejected because the numbers are positive. Write the rejection down rather than silently dropping it.",
          "The numbers are 13 and 15, and checking gives 13 x 15 = 195. A one-line check protects the final answer mark."
        ],
        "answer": "13 and 15",
        "markTip": "Chief examiners repeatedly note candidates leaving both roots standing; the mark for rejecting n = -15 with a reason is only given when the rejection is written.",
        "variant": "The product of two consecutive positive even numbers is 168. Find the two numbers. (Answer: 12 and 14)"
      },
      {
        "question": "Solve x^2 - 6x + 4 = 0 by completing the square, leaving your answer in surd form.",
        "steps": [
          "Move the constant across: x^2 - 6x = -4. Completing the square works on the x terms alone.",
          "Halve the coefficient of x to get -3, then add (-3)^2 = 9 to both sides: x^2 - 6x + 9 = 5. Adding to both sides keeps the equation balanced.",
          "Write the left side as a perfect square: (x - 3)^2 = 5. This is the completed-square form the M marks are attached to.",
          "Take square roots of both sides: x - 3 = sqrt(5) or x - 3 = -sqrt(5). The negative root must appear or one solution is lost.",
          "Add 3 to both: x = 3 + sqrt(5) or x = 3 - sqrt(5). Surd form means leave sqrt(5) exactly as it is."
        ],
        "answer": "x = 3 + sqrt(5) or x = 3 - sqrt(5)",
        "markTip": "Two habits lose marks on exactly this question: forgetting the negative square root (one A mark gone) and converting to decimals when surd form was demanded (both A marks gone).",
        "variant": "Solve x^2 + 4x - 3 = 0 by completing the square, leaving your answer in surd form. (Answer: x = -2 + sqrt(7) or x = -2 - sqrt(7))"
      },
      {
        "question": "If alpha and beta are the roots of the equation 3x^2 - 5x - 2 = 0, find the values of (a) alpha + beta, (b) alpha x beta, (c) 1/alpha + 1/beta.",
        "steps": [
          "For ax^2 + bx + c = 0, the sum of roots is -b/a and the product is c/a. Quote these standard results before using them.",
          "Here a = 3, b = -5, c = -2, so alpha + beta = -(-5)/3 = 5/3. The two minus signs cancel.",
          "The product is alpha x beta = c/a = -2/3. Keep the negative sign with the fraction.",
          "Combine the reciprocals over a common denominator: 1/alpha + 1/beta = (alpha + beta)/(alpha x beta). This identity turns part (c) into pure substitution.",
          "Substitute: (5/3) divided by (-2/3) = 5/3 x 3/(-2) = -5/2. Dividing by a fraction means multiplying by its reciprocal."
        ],
        "answer": "(a) alpha + beta = 5/3 (b) alpha x beta = -2/3 (c) 1/alpha + 1/beta = -5/2",
        "markTip": "The classic slip is a sign error in -b/a when b is already negative, and it forfeits the accuracy marks in every later part, so check part (a) twice.",
        "variant": "If alpha and beta are the roots of 2x^2 - 3x - 5 = 0, find 1/alpha + 1/beta. (Answer: -3/5)"
      },
      {
        "question": "The graph of y = x^2 - 2x - 8 is drawn for values of x from -4 to 6. The curve cuts the x-axis at x = -2 and at x = 4, and has a minimum turning point. (a) Write down the roots of x^2 - 2x - 8 = 0. (b) Find the coordinates of the minimum point. (c) Explain how the same graph can be used to solve x^2 - 2x - 8 = 7, and state the solutions.",
        "steps": [
          "(a) The roots are the x-values where the curve cuts the x-axis, so x = -2 and x = 4. Graphically, a root is a crossing point on the x-axis.",
          "(b) By symmetry the minimum lies midway between the roots: x = (-2 + 4)/2 = 1. A parabola is symmetric about its turning point.",
          "Substitute x = 1 into the equation: y = 1 - 2 - 8 = -9, so the minimum point is (1, -9). Substituting the axis of symmetry gives the least value of y.",
          "(c) Draw the horizontal line y = 7 on the same axes and read off the x-values where it crosses the curve. The equation x^2 - 2x - 8 = 7 asks where the curve has height 7.",
          "Checking by algebra: x^2 - 2x - 15 = 0 factorises to (x - 5)(x + 3) = 0, so x = 5 or x = -3. The graph readings should match these values."
        ],
        "answer": "(a) x = -2 and x = 4 (b) minimum point (1, -9) (c) draw the line y = 7 and read the crossings: x = 5 or x = -3",
        "markTip": "In WAEC graph questions there is usually a mark for the drawn line y = 7 itself, so candidates who solve part (c) purely by algebra without touching the graph leave that mark on the table.",
        "variant": "The graph of y = x^2 - 4x - 5 cuts the x-axis at x = -1 and x = 5. Find the minimum point and use the graph method to solve x^2 - 4x - 5 = 7. (Answer: minimum (2, -9); x = 6 or x = -2)"
      }
    ],
    "faqs": [
      {
        "q": "Where can I find real WAEC past questions on quadratic equations?",
        "a": "The official route is WAEC's own e-learning portal, which hosts a selection of past questions with chief examiner commentary, and licensed printed past-question books are sold across West Africa. Random PDF and document-site uploads are usually incomplete scans. This page takes a different approach: original questions in the exact WASSCE format, which is legal to publish and just as useful for practice."
      },
      {
        "q": "Which quadratic techniques does WASSCE actually examine?",
        "a": "The syllabus expects solving by factorisation, completing the square and the formula, forming quadratic equations from word problems, sum and product of roots, and graphical solution, including reading roots from a plotted curve. Simultaneous equations where one equation is quadratic also appear. The six questions above cover each of these at the difficulty the real papers use."
      },
      {
        "q": "Can I lose marks for using the formula when the question says factorise?",
        "a": "Yes. When a question names a method, the method marks are tied to that method: solve by completing the square means the M marks are for completing-the-square steps, and a formula solution earns the answer marks at most. When the question just says solve, any valid method scores fully, so read the command words before starting."
      },
      {
        "q": "How many marks is a quadratic question worth in Paper 2?",
        "a": "WAEC does not fix a single value. A quadratic part inside a compulsory Section A question commonly carries around 4 to 6 marks, while a Section B graph question spreads its marks across the table of values, the plotted curve, any drawn line and the readings. Whatever the total, the method and accuracy split follows the pattern shown in the six solutions above."
      }
    ],
    "targetQuery": "waec past questions on quadratic equations",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "waec",
    "slug": "waec-biology-genetics-practice",
    "metaTitle": "WAEC Biology Past Questions on Genetics (Solved)",
    "metaDescription": "Five original WASSCE-style genetics questions with full answers in the phrasing WAEC markers reward, plus cross-drawing tips and common errors to avoid.",
    "h1": "WAEC Biology Genetics Practice Questions, Fully Answered",
    "quickAnswer": "WAEC past questions cannot legally be republished, so these five genetics questions are original but written in the exact WASSCE format: a monohybrid cross, sex linkage, definitions, a pedigree and blood groups. Each answer uses the phrasing WAEC markers reward, with a tip on where candidates typically drop marks.",
    "intro": "Genetics is one of the highest-yield topics in WAEC Biology and one of the worst answered, going by the chief examiners' own reports. This page gives you five original questions in the WASSCE style, each solved in full using the layout and wording markers look for. A note on honesty: I sit Cambridge exams, not WAEC, so nothing here is exam-hall memory. It comes from working through the WASSCE Biology syllabus, the paper format and several years of chief examiners' reports. And because real past questions are copyrighted, every question below is original, matched to the real papers in topic, difficulty and structure.",
    "sections": [
      {
        "heading": "Where genetics sits in the WAEC Biology exam",
        "body": "WASSCE Biology comes in three papers. Paper 1 is 50 objective questions, Paper 2 is the essay paper, and Paper 3 tests practical work. Genetics lives mainly in Papers 1 and 2. In the objective paper you get quick items: identify the genotypic ratio of a cross, pick the correct definition of an allele, or work out the possible blood groups of children in one step. In the essay paper, genetics arrives as a full question or half a question with labelled parts, typically a cross to draw and interpret, definitions to state in contrast, and a ratio or probability to calculate. The syllabus area is heredity and variation: dominant and recessive traits, monohybrid inheritance, codominance in the human ABO blood groups, sex determination, and sex-linked characters such as haemophilia and colour blindness. Chief examiners' reports say genetics questions are attempted in large numbers but scored poorly, which means a clean, well-laid-out answer genuinely stands out."
      },
      {
        "heading": "Drawing genetic crosses the way markers want",
        "body": "A genetic cross in WAEC Biology is marked line by line, so the layout is worth learning as a fixed routine. Start with the parental phenotypes, written in words. Under them, the parental genotypes. Next line, the gametes, and circle each one: the circle shows you know a gamete carries a single allele, and marking schemes regularly attach a mark to it. Then show fertilisation, either with crossing lines or a Punnett square, and write the offspring genotypes. Finish with the offspring phenotypes and the ratio stated with labels, for example 3 black : 1 white, not a bare 3:1 floating alone. Use one letter for the gene, capital for dominant and small for recessive, and state at the start which allele is which. In sex-linked crosses, put the allele on the chromosome, written XH or Xh, never a bare H and h, because the point being tested is that the gene rides on the X chromosome."
      },
      {
        "heading": "Mistakes chief examiners keep reporting",
        "body": "WAEC publishes chief examiners' reports after each series, and the genetics complaints repeat almost yearly. Candidates confuse gene with allele and genotype with phenotype, so definition marks vanish in pairs. Crosses are drawn without gametes, with gametes left uncircled, or with two different letters used for one gene, which makes the offspring line meaningless. Ratios are stated without phenotypes attached, or a probability is given as a ratio when a fraction was demanded. In sex-linkage questions, many candidates write Hh instead of placing the alleles on the X chromosome and lose most of the question at a stroke. In blood group questions, naming IA and IB as codominant earns credit, while vague phrases like both are strong earn nothing. The fix is mechanical rather than clever: define both terms of every pair in contrast, follow the fixed cross layout every single time, and end every cross with phenotypes plus a labelled ratio. The five solutions above model exactly that phrasing."
      }
    ],
    "problems": [
      {
        "question": "In guinea pigs, black coat colour (B) is dominant to white (b). A homozygous black guinea pig is crossed with a white one. (a) State the genotype and phenotype of the F1 offspring. (b) If two F1 offspring are crossed, work out the phenotypic ratio of the F2 generation, showing the cross in full.",
        "steps": [
          "(a) Write the parents as BB (black) x bb (white). Homozygous means both alleles are identical, and white must be bb because it is recessive.",
          "List the gametes: every gamete from BB carries B, every gamete from bb carries b. Meiosis places one allele of the pair into each gamete.",
          "All F1 offspring are Bb and all appear black. The dominant B allele masks b in the heterozygote.",
          "(b) Cross F1 x F1, which is Bb x Bb, with each parent producing B and b gametes. Circle the gametes when drawing this.",
          "Combine the gametes: the offspring genotypes are BB, Bb, Bb and bb, a genotypic ratio of 1 BB : 2 Bb : 1 bb.",
          "State the phenotypes with labels: 3 black : 1 white. BB and Bb both look black, and only bb is white."
        ],
        "answer": "(a) F1 all Bb, all black (b) F2 phenotypic ratio 3 black : 1 white (genotypic ratio 1 BB : 2 Bb : 1 bb)",
        "markTip": "WAEC allocates separate marks to parental genotypes, circled gametes, offspring genotypes and the labelled phenotypic ratio, so skipping the gamete line quietly loses a mark even when the final ratio is right.",
        "variant": "In mice, grey fur (G) is dominant to albino (g). A heterozygous grey mouse is crossed with an albino mouse. Show the cross and state the expected ratio of offspring. (Answer: 1 grey : 1 albino)"
      },
      {
        "question": "Haemophilia in humans is controlled by a recessive allele carried on the X chromosome. A woman who is a carrier for haemophilia marries a man with normal blood clotting. (a) Give the genotypes of the couple. (b) Work out what proportion of their sons is expected to have haemophilia. (c) State, with a reason, whether any of their daughters could have haemophilia.",
        "steps": [
          "(a) Write the mother as XHXh and the father as XHY. Sex-linked alleles must be shown attached to the X chromosome, and Y carries no allele for this gene.",
          "List the gametes: the mother produces XH or Xh, the father produces XH or Y. Circle all four when drawing the cross.",
          "Combine them: the possible children are XHXH (normal daughter), XHXh (carrier daughter), XHY (normal son) and XhY (son with haemophilia).",
          "(b) Of the sons, half receive Xh from the mother, so 1/2 of sons are expected to have haemophilia. A son's only X chromosome always comes from his mother.",
          "(c) No daughter can be affected, because every daughter receives XH from the father, though half the daughters are expected to be carriers. An affected daughter would need Xh from both parents."
        ],
        "answer": "(a) Mother XHXh, father XHY (b) 1/2 (50 percent) of sons (c) no affected daughters, but half are expected to be carriers",
        "markTip": "Writing the genotypes as bare Hh instead of on the X chromosome (XHXh) is the single error WAEC reports most often here, and it usually costs the whole cross.",
        "variant": "Red-green colour blindness is X-linked recessive. A colour-blind man marries a woman carrying no allele for the condition. What proportion of their daughters will be carriers, and will any child be colour blind? (Answer: all daughters are carriers; no child is colour blind)"
      },
      {
        "question": "Distinguish clearly between the members of each of the following pairs of genetic terms: (a) gene and allele (b) genotype and phenotype (c) dominant allele and recessive allele.",
        "steps": [
          "(a) A gene is a unit of heredity, a segment of DNA occupying a fixed position on a chromosome and controlling a character, whereas an allele is one of the alternative forms of that gene. Both halves must appear for the pair mark.",
          "(b) Genotype is the genetic constitution of an organism, the set of alleles it carries, whereas phenotype is the observable physical or physiological appearance produced by the genotype interacting with the environment. Mentioning the environment strengthens the phenotype half.",
          "(c) A dominant allele expresses itself in both the homozygous and the heterozygous state, whereas a recessive allele expresses itself only in the homozygous state. Avoid the word stronger, which markers do not credit."
        ],
        "answer": "Three contrasting definitions as set out in the steps, each pair defined with a linking word such as whereas",
        "markTip": "WAEC gives the mark for the contrast, not for one term alone, so a perfect definition of gene with nothing on allele scores zero for that pair.",
        "variant": "Distinguish between homozygous and heterozygous, giving one example genotype of each. (Answer: homozygous means two identical alleles, for example TT or tt; heterozygous means two different alleles, for example Tt)"
      },
      {
        "question": "A man and his wife both have normal skin pigmentation. Of their four children, three have normal pigmentation but one daughter is albino. Using suitable symbols, (a) state with a reason whether the allele for albinism is dominant or recessive, (b) give the genotypes of the parents and of the albino daughter, (c) calculate the probability that their next child will be albino.",
        "steps": [
          "(a) The allele is recessive, because both parents show normal pigmentation yet produced an albino child; if the allele were dominant, at least one parent would show the condition. The reason must be stated to earn the mark.",
          "(b) Let A represent normal pigmentation and a represent albinism. The albino daughter must be aa, since a recessive character only shows when homozygous.",
          "Each parent gave her one a allele but appears normal, so both parents are Aa. Unaffected parents of an affected child are carriers by definition.",
          "(c) Cross Aa x Aa: the offspring genotypes come out 1 AA : 2 Aa : 1 aa, so the probability of an albino child is 1/4. Each pregnancy is an independent event, so earlier children do not change this."
        ],
        "answer": "(a) Recessive, because unaffected parents produced an affected child (b) both parents Aa, albino daughter aa (c) 1/4",
        "markTip": "Candidates commonly write recessive with no reason and lose that mark, and giving part (c) as a ratio like 1:3 instead of the probability 1/4 loses another.",
        "variant": "Two parents with normal hearing have a child with an inherited form of deafness caused by a recessive allele. Give the parents' genotypes and the probability that their next child is deaf. (Answer: both parents Dd; probability 1/4)"
      },
      {
        "question": "A man of blood group AB marries a woman of blood group O. (a) Give the genotypes of the couple. (b) Using a suitable cross, determine the possible blood groups of their children. (c) Explain why none of their children can belong to group AB or group O.",
        "steps": [
          "(a) The father is IAIB and the mother is ii. Group AB carries the two codominant alleles IA and IB, while group O is homozygous for the recessive allele i.",
          "List the gametes: the father produces IA or IB, the mother produces only i. Circle them in the drawn cross.",
          "(b) Combine the gametes: the children can be IAi, which is group A, or IBi, which is group B, in a ratio of 1 group A : 1 group B.",
          "(c) No child can be group AB because the mother cannot supply an IA or IB allele, and no child can be group O because the father always supplies IA or IB while group O requires two i alleles."
        ],
        "answer": "(a) Father IAIB, mother ii (b) group A (IAi) or group B (IBi) in a 1 : 1 ratio (c) as explained: the mother cannot give IA or IB, and the father cannot give i twice over",
        "markTip": "Naming IA and IB as codominant earns a specific mark, while loose wording like both alleles are equally strong earns nothing, so use the technical term.",
        "variant": "A heterozygous group A man (IAi) marries a heterozygous group B woman (IBi). What blood groups are possible among their children? (Answer: all four groups, A, B, AB and O, in equal proportions)"
      }
    ],
    "faqs": [
      {
        "q": "Where can I get genuine WAEC Biology past questions on genetics?",
        "a": "WAEC runs an official e-learning platform with a bank of past questions and chief examiner feedback, and licensed past-question booklets are sold widely across West Africa. Free PDFs circulating on social media are often mislabelled or missing diagrams. The five questions on this page are original but written to match the real format, so they are safe to practise from alongside official material."
      },
      {
        "q": "Do I have to use a Punnett square, or can I draw crossing lines?",
        "a": "Either is accepted. WAEC marks the same points regardless: parental genotypes, circled gametes, offspring genotypes, and phenotypes with a labelled ratio. A Punnett square is safer in blood-group or dihybrid crosses because it keeps the combinations tidy, but a neat line cross earns full marks in a monohybrid question. Whichever you pick, never skip the gamete line."
      },
      {
        "q": "Does genetics appear in the WAEC practical paper?",
        "a": "Rarely as a direct practical. Paper 3 concentrates on specimens, biological drawings and experiments, but variation can surface there, for example classifying continuous and discontinuous variation from data such as heights or fingerprint patterns. The genetics you revise for definitions, crosses and probability calculations is examined almost entirely in the objective and essay papers."
      },
      {
        "q": "What symbols should I use for blood group alleles?",
        "a": "Use IA, IB and i, writing the A and B raised against the capital I in your script. State at the start that IA and IB are codominant and that i is recessive to both; that single sentence is regularly worth a mark before the cross is even drawn. Some textbooks write IO instead of i, and WAEC accepts that too if used consistently."
      }
    ],
    "targetQuery": "waec biology past questions on genetics",
    "hubSubjects": [
      "biology"
    ]
  },
  {
    "board": "ap",
    "slug": "ap-biology-score-calculator",
    "metaTitle": "AP Biology Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP Biology score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP Biology Score Calculator (2027)",
    "quickAnswer": "Slide in your AP Biology section scores below and the calculator estimates your AP score instantly. As a rough guide, about 70 percent of the total composite has been enough for a 5 in recent estimates, 57 percent for a 4, and 41 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP Biology exam has 60 multiple-choice questions worth 50 percent of your score and 6 free-response questions worth 50 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. Biology FRQs reward claim-evidence-reasoning structure, so a middling MCQ day can still be rescued by disciplined free responses.",
    "sections": [
      {
        "heading": "How the AP Biology exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 50 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 50 percent across 6 questions totalling 36 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board (60 MCQ, 2 long FRQs scored 8-10 points treated as 10 here, 4 short FRQs at 4 points); cutoffs are a conservative middle of Albert, PrepScholar and num8ers estimates built on released curves, and official cutoffs change every year."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 70 percent of the composite earns a 5, 57 percent a 4, 41 percent a 3, and 25 percent a 2 on AP Biology. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP Biology score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP Biology?",
        "a": "Recent estimates put a 5 at roughly 70 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap biology score calculator",
    "hubSubjects": [
      "biology"
    ],
    "calculator": {
      "name": "AP Biology",
      "mcqCount": 60,
      "mcqWeightPercent": 50,
      "frqCount": 6,
      "frqWeightPercent": 50,
      "frqMaxPoints": 36,
      "cutoffs": {
        "five": 70,
        "four": 57,
        "three": 41,
        "two": 25
      },
      "sourceNote": "Structure per College Board (60 MCQ, 2 long FRQs scored 8-10 points treated as 10 here, 4 short FRQs at 4 points); cutoffs are a conservative middle of Albert, PrepScholar and num8ers estimates built on released curves, and official cutoffs change every year."
    }
  },
  {
    "board": "ap",
    "slug": "ap-chemistry-score-calculator",
    "metaTitle": "AP Chemistry Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP Chemistry score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP Chemistry Score Calculator (2027)",
    "quickAnswer": "Slide in your AP Chemistry section scores below and the calculator estimates your AP score instantly. As a rough guide, about 72 percent of the total composite has been enough for a 5 in recent estimates, 58 percent for a 4, and 42 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP Chemistry exam has 60 multiple-choice questions worth 50 percent of your score and 7 free-response questions worth 50 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. The three long FRQs carry 10 points each, so showing units and significant figures matters as much as the chemistry.",
    "sections": [
      {
        "heading": "How the AP Chemistry exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 50 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 50 percent across 7 questions totalling 46 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board (60 MCQ, 3 long FRQs at 10 points, 4 short FRQs at 4 points); cutoffs follow the widely cited prep-site estimate of roughly 72 percent for a 5 and 42 percent for a 3, and official cutoffs are re-equated each year."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 72 percent of the composite earns a 5, 58 percent a 4, 42 percent a 3, and 27 percent a 2 on AP Chemistry. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP Chemistry score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP Chemistry?",
        "a": "Recent estimates put a 5 at roughly 72 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap chemistry score calculator",
    "hubSubjects": [
      "chemistry"
    ],
    "calculator": {
      "name": "AP Chemistry",
      "mcqCount": 60,
      "mcqWeightPercent": 50,
      "frqCount": 7,
      "frqWeightPercent": 50,
      "frqMaxPoints": 46,
      "cutoffs": {
        "five": 72,
        "four": 58,
        "three": 42,
        "two": 27
      },
      "sourceNote": "Structure per College Board (60 MCQ, 3 long FRQs at 10 points, 4 short FRQs at 4 points); cutoffs follow the widely cited prep-site estimate of roughly 72 percent for a 5 and 42 percent for a 3, and official cutoffs are re-equated each year."
    }
  },
  {
    "board": "ap",
    "slug": "ap-calculus-ab-score-calculator",
    "metaTitle": "AP Calculus AB Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP Calculus AB score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP Calculus AB Score Calculator (2027)",
    "quickAnswer": "Slide in your AP Calculus AB section scores below and the calculator estimates your AP score instantly. As a rough guide, about 65 percent of the total composite has been enough for a 5 in recent estimates, 50 percent for a 4, and 39 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP Calculus AB exam has 45 multiple-choice questions worth 50 percent of your score and 6 free-response questions worth 50 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. Each FRQ is scored out of 9, and method points are earned even when the final number is wrong — set up the integral and you collect.",
    "sections": [
      {
        "heading": "How the AP Calculus AB exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 50 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 50 percent across 6 questions totalling 54 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board's current hybrid digital format (42 MCQ, 6 FRQs at 9 points each); cutoffs are conservative middles of Albert and Test Ninjas estimates based on released curves, and the official conversion shifts slightly each year."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 65 percent of the composite earns a 5, 50 percent a 4, 39 percent a 3, and 26 percent a 2 on AP Calculus AB. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP Calculus AB score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP Calculus AB?",
        "a": "Recent estimates put a 5 at roughly 65 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap calculus ab score calculator",
    "hubSubjects": [
      "math",
      "calculus"
    ],
    "calculator": {
      "name": "AP Calculus AB",
      "mcqCount": 45,
      "mcqWeightPercent": 50,
      "frqCount": 6,
      "frqWeightPercent": 50,
      "frqMaxPoints": 54,
      "cutoffs": {
        "five": 65,
        "four": 50,
        "three": 39,
        "two": 26
      },
      "sourceNote": "Structure per College Board's current hybrid digital format (42 MCQ, 6 FRQs at 9 points each); cutoffs are conservative middles of Albert and Test Ninjas estimates based on released curves, and the official conversion shifts slightly each year."
    }
  },
  {
    "board": "ap",
    "slug": "ap-calculus-bc-score-calculator",
    "metaTitle": "AP Calculus BC Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP Calculus BC score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP Calculus BC Score Calculator (2027)",
    "quickAnswer": "Slide in your AP Calculus BC section scores below and the calculator estimates your AP score instantly. As a rough guide, about 60 percent of the total composite has been enough for a 5 in recent estimates, 48 percent for a 4, and 36 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP Calculus BC exam has 45 multiple-choice questions worth 50 percent of your score and 6 free-response questions worth 50 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. BC also reports an AB subscore, so a rough series day does not erase your AB-level work.",
    "sections": [
      {
        "heading": "How the AP Calculus BC exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 50 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 50 percent across 6 questions totalling 54 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board's current hybrid digital format (42 MCQ, 6 FRQs at 9 points each); BC has one of the most generous curves, with prep-site estimates putting a 5 near 57 to 63 percent, and official cutoffs vary by year."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 60 percent of the composite earns a 5, 48 percent a 4, 36 percent a 3, and 27 percent a 2 on AP Calculus BC. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP Calculus BC score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP Calculus BC?",
        "a": "Recent estimates put a 5 at roughly 60 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap calculus bc score calculator",
    "hubSubjects": [
      "math",
      "calculus"
    ],
    "calculator": {
      "name": "AP Calculus BC",
      "mcqCount": 45,
      "mcqWeightPercent": 50,
      "frqCount": 6,
      "frqWeightPercent": 50,
      "frqMaxPoints": 54,
      "cutoffs": {
        "five": 60,
        "four": 48,
        "three": 36,
        "two": 27
      },
      "sourceNote": "Structure per College Board's current hybrid digital format (42 MCQ, 6 FRQs at 9 points each); BC has one of the most generous curves, with prep-site estimates putting a 5 near 57 to 63 percent, and official cutoffs vary by year."
    }
  },
  {
    "board": "ap",
    "slug": "ap-physics-1-score-calculator",
    "metaTitle": "AP Physics 1 Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP Physics 1 score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP Physics 1 Score Calculator (2027)",
    "quickAnswer": "Slide in your AP Physics 1 section scores below and the calculator estimates your AP score instantly. As a rough guide, about 70 percent of the total composite has been enough for a 5 in recent estimates, 54 percent for a 4, and 40 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP Physics 1 exam has 40 multiple-choice questions worth 50 percent of your score and 4 free-response questions worth 50 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. Physics 1 has the lowest 5-rate of the sciences most years, so the cutoffs sit lower than students expect.",
    "sections": [
      {
        "heading": "How the AP Physics 1 exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 50 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 50 percent across 4 questions totalling 40 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board's revised 2025 format (40 MCQ, 4 FRQs worth 10, 12, 10 and 8 points for 40 total); cutoffs are a slightly conservative version of calculator estimates near 69 percent for a 5, and official cutoffs are re-equated each year."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 70 percent of the composite earns a 5, 54 percent a 4, 40 percent a 3, and 27 percent a 2 on AP Physics 1. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP Physics 1 score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP Physics 1?",
        "a": "Recent estimates put a 5 at roughly 70 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap physics 1 score calculator",
    "hubSubjects": [
      "physics"
    ],
    "calculator": {
      "name": "AP Physics 1",
      "mcqCount": 40,
      "mcqWeightPercent": 50,
      "frqCount": 4,
      "frqWeightPercent": 50,
      "frqMaxPoints": 40,
      "cutoffs": {
        "five": 70,
        "four": 54,
        "three": 40,
        "two": 27
      },
      "sourceNote": "Structure per College Board's revised 2025 format (40 MCQ, 4 FRQs worth 10, 12, 10 and 8 points for 40 total); cutoffs are a slightly conservative version of calculator estimates near 69 percent for a 5, and official cutoffs are re-equated each year."
    }
  },
  {
    "board": "ap",
    "slug": "ap-us-history-score-calculator",
    "metaTitle": "AP US History Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP US History score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP US History Score Calculator (2027)",
    "quickAnswer": "Slide in your AP US History section scores below and the calculator estimates your AP score instantly. As a rough guide, about 74 percent of the total composite has been enough for a 5 in recent estimates, 61 percent for a 4, and 47 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP US History exam has 55 multiple-choice questions worth 40 percent of your score and 5 free-response questions worth 60 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. The DBQ is 7 points and the rubric is public — contextualisation and thesis points are the cheapest marks on the whole exam.",
    "sections": [
      {
        "heading": "How the AP US History exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 40 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 60 percent across 5 questions totalling 22 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board (55 MCQ at 40 percent, 3 SAQs at 3 points each for 20 percent, a 7 point DBQ for 25 percent and a 6 point LEQ for 15 percent); cutoffs are conservative middles of Albert and num8ers 150 point composite estimates, and official curves vary yearly."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 74 percent of the composite earns a 5, 61 percent a 4, 47 percent a 3, and 35 percent a 2 on AP US History. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP US History score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP US History?",
        "a": "Recent estimates put a 5 at roughly 74 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap us history score calculator",
    "hubSubjects": [
      "history"
    ],
    "calculator": {
      "name": "AP US History",
      "mcqCount": 55,
      "mcqWeightPercent": 40,
      "frqCount": 5,
      "frqWeightPercent": 60,
      "frqMaxPoints": 22,
      "cutoffs": {
        "five": 74,
        "four": 61,
        "three": 47,
        "two": 35
      },
      "sourceNote": "Structure per College Board (55 MCQ at 40 percent, 3 SAQs at 3 points each for 20 percent, a 7 point DBQ for 25 percent and a 6 point LEQ for 15 percent); cutoffs are conservative middles of Albert and num8ers 150 point composite estimates, and official curves vary yearly."
    }
  },
  {
    "board": "ap",
    "slug": "ap-psychology-score-calculator",
    "metaTitle": "AP Psychology Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP Psychology score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP Psychology Score Calculator (2027)",
    "quickAnswer": "Slide in your AP Psychology section scores below and the calculator estimates your AP score instantly. As a rough guide, about 78 percent of the total composite has been enough for a 5 in recent estimates, 64 percent for a 4, and 51 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP Psychology exam has 75 multiple-choice questions worth 66.7 percent of your score and 2 free-response questions worth 33.3 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. Since the 2025 redesign there are just two FRQs, the AAQ and EBQ, each scored out of 7 — one weak response moves your estimate a lot.",
    "sections": [
      {
        "heading": "How the AP Psychology exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 66.7 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 33.3 percent across 2 questions totalling 14 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board's revised 2025 format (75 MCQ, then a 7 point Article Analysis Question and a 7 point Evidence Based Question); cutoffs blend the old released curve near 75 percent for a 5 with higher new-format calculator estimates, and College Board does not publish exact yearly cut points."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 78 percent of the composite earns a 5, 64 percent a 4, 51 percent a 3, and 42 percent a 2 on AP Psychology. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP Psychology score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP Psychology?",
        "a": "Recent estimates put a 5 at roughly 78 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap psychology score calculator",
    "hubSubjects": [],
    "calculator": {
      "name": "AP Psychology",
      "mcqCount": 75,
      "mcqWeightPercent": 66.7,
      "frqCount": 2,
      "frqWeightPercent": 33.3,
      "frqMaxPoints": 14,
      "cutoffs": {
        "five": 78,
        "four": 64,
        "three": 51,
        "two": 42
      },
      "sourceNote": "Structure per College Board's revised 2025 format (75 MCQ, then a 7 point Article Analysis Question and a 7 point Evidence Based Question); cutoffs blend the old released curve near 75 percent for a 5 with higher new-format calculator estimates, and College Board does not publish exact yearly cut points."
    }
  },
  {
    "board": "ap",
    "slug": "ap-statistics-score-calculator",
    "metaTitle": "AP Statistics Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP Statistics score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP Statistics Score Calculator (2027)",
    "quickAnswer": "Slide in your AP Statistics section scores below and the calculator estimates your AP score instantly. As a rough guide, about 70 percent of the total composite has been enough for a 5 in recent estimates, 57 percent for a 4, and 44 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP Statistics exam has 40 multiple-choice questions worth 50 percent of your score and 6 free-response questions worth 50 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. Every FRQ is scored 0 to 4 on completeness of communication, not just the calculation, so writing in context pays.",
    "sections": [
      {
        "heading": "How the AP Statistics exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 50 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 50 percent across 6 questions totalling 24 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board (40 MCQ, 5 short FRQs plus 1 Investigative Task each scored 0 to 4, with the task officially weighted at a quarter of the section); cutoffs use the commonly cited released-curve line of 70, 57, 44 and 33 percent, and official cutoffs shift each year."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 70 percent of the composite earns a 5, 57 percent a 4, 44 percent a 3, and 33 percent a 2 on AP Statistics. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP Statistics score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP Statistics?",
        "a": "Recent estimates put a 5 at roughly 70 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap statistics score calculator",
    "hubSubjects": [
      "math"
    ],
    "calculator": {
      "name": "AP Statistics",
      "mcqCount": 40,
      "mcqWeightPercent": 50,
      "frqCount": 6,
      "frqWeightPercent": 50,
      "frqMaxPoints": 24,
      "cutoffs": {
        "five": 70,
        "four": 57,
        "three": 44,
        "two": 33
      },
      "sourceNote": "Structure per College Board (40 MCQ, 5 short FRQs plus 1 Investigative Task each scored 0 to 4, with the task officially weighted at a quarter of the section); cutoffs use the commonly cited released-curve line of 70, 57, 44 and 33 percent, and official cutoffs shift each year."
    }
  },
  {
    "board": "ap",
    "slug": "ap-english-language-score-calculator",
    "metaTitle": "AP English Language Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP English Language score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP English Language Score Calculator (2027)",
    "quickAnswer": "Slide in your AP English Language section scores below and the calculator estimates your AP score instantly. As a rough guide, about 72 percent of the total composite has been enough for a 5 in recent estimates, 62 percent for a 4, and 50 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP English Language exam has 45 multiple-choice questions worth 45 percent of your score and 3 free-response questions worth 55 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. Each essay is scored out of 6 (thesis 1, evidence 4, sophistication 1) — the sophistication point is rare, so bank thesis and evidence.",
    "sections": [
      {
        "heading": "How the AP English Language exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 45 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 55 percent across 3 questions totalling 18 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board's fully digital format (45 MCQ at 45 percent, 3 essays scored 0 to 6 for 55 percent); cutoffs are a conservative middle of prep-site estimates anchored to the released curve of roughly 69 percent for a 5, and official conversions vary yearly."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 72 percent of the composite earns a 5, 62 percent a 4, 50 percent a 3, and 35 percent a 2 on AP English Language. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP English Language score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP English Language?",
        "a": "Recent estimates put a 5 at roughly 72 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap english language score calculator",
    "hubSubjects": [
      "english"
    ],
    "calculator": {
      "name": "AP English Language",
      "mcqCount": 45,
      "mcqWeightPercent": 45,
      "frqCount": 3,
      "frqWeightPercent": 55,
      "frqMaxPoints": 18,
      "cutoffs": {
        "five": 72,
        "four": 62,
        "three": 50,
        "two": 35
      },
      "sourceNote": "Structure per College Board's fully digital format (45 MCQ at 45 percent, 3 essays scored 0 to 6 for 55 percent); cutoffs are a conservative middle of prep-site estimates anchored to the released curve of roughly 69 percent for a 5, and official conversions vary yearly."
    }
  },
  {
    "board": "ap",
    "slug": "ap-human-geography-score-calculator",
    "metaTitle": "AP Human Geography Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP Human Geography score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Based on published curve estimates.",
    "h1": "AP Human Geography Score Calculator (2027)",
    "quickAnswer": "Slide in your AP Human Geography section scores below and the calculator estimates your AP score instantly. As a rough guide, about 74 percent of the total composite has been enough for a 5 in recent estimates, 62 percent for a 4, and 51 percent for a 3 — but the College Board moves the real cut points every year.",
    "intro": "The AP Human Geography exam has 60 multiple-choice questions worth 50 percent of your score and 3 free-response questions worth 50 percent. This calculator combines both sections the same way the composite score does, then maps the result onto conservative cut-point estimates drawn from released curves and prep-community data. Each FRQ is 7 single-point parts, so the fastest gains come from answering every part in the verb the prompt uses.",
    "sections": [
      {
        "heading": "How the AP Human Geography exam is actually scored",
        "body": "Your raw marks are combined into a weighted composite: multiple choice contributes 50 percent (there is no penalty for wrong answers, so never leave blanks) and the free-response section contributes 50 percent across 3 questions totalling 21 raw points. The College Board then converts the composite to the 1-5 scale using cut points set after each administration, which is why no calculator can be exact: the real boundaries shift with the difficulty of that year's paper. Structure per College Board (60 MCQ, 3 FRQs scored 0 to 7 each); Human Geography has one of the toughest curves, so cutoffs follow calculator bands near 74 percent for a 5 and about half the composite for a 3, and official cutoffs change every year."
      },
      {
        "heading": "What score should you aim for in practice?",
        "body": "Working from recent estimates, roughly 74 percent of the composite earns a 5, 62 percent a 4, 51 percent a 3, and 40 percent a 2 on AP Human Geography. If a practice exam puts you within about five points of a boundary, treat yourself as on the boundary — single-year swings of that size are normal. The most reliable way up is usually the free-response section: rubrics are published, points are itemised, and practising against them converts directly into composite percentage. Generate targeted practice with the quiz tool on this site, then mark your answers against the rubric language."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP Human Geography score calculator?",
        "a": "No — there is no official calculator. The College Board never publishes the current year's curve in advance. This estimator uses the real 2026-format section structure and weights, with cut points drawn from released past curves and reputable prep-site estimates, deliberately on the conservative side."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. If your composite lands near a boundary, the real result could go either way, because the College Board adjusts boundaries for each year's exam difficulty after marking. Use it for targeting your revision, not for promising yourself a score."
      },
      {
        "q": "What percentage do I need for a 5 on AP Human Geography?",
        "a": "Recent estimates put a 5 at roughly 74 percent of the weighted composite. That usually means you can drop a meaningful number of multiple-choice questions and still reach it if your free responses are solid — check the calculator above with your own practice numbers."
      }
    ],
    "targetQuery": "ap human geography score calculator",
    "hubSubjects": [
      "geography"
    ],
    "calculator": {
      "name": "AP Human Geography",
      "mcqCount": 60,
      "mcqWeightPercent": 50,
      "frqCount": 3,
      "frqWeightPercent": 50,
      "frqMaxPoints": 21,
      "cutoffs": {
        "five": 74,
        "four": 62,
        "three": 51,
        "two": 40
      },
      "sourceNote": "Structure per College Board (60 MCQ, 3 FRQs scored 0 to 7 each); Human Geography has one of the toughest curves, so cutoffs follow calculator bands near 74 percent for a 5 and about half the composite for a 3, and official cutoffs change every year."
    }
  },
  {
    "board": "cbse",
    "slug": "class-11-accountancy-basic-terms-practice",
    "metaTitle": "TS Grewal Class 11 Chapter 2: Basic Terms Practice",
    "metaDescription": "Original practice questions matched to TS Grewal Class 11 Chapter 2 (Basic Accounting Terms), 2025-26 edition, with full solutions and CBSE marking notes.",
    "h1": "Basic Accounting Terms: Class 11 Practice in TS Grewal Chapter 2 Style",
    "quickAnswer": "In the 2025-26 TS Grewal Class 11 book, Chapter 2 is Basic Accounting Terms: assets, liabilities, capital, drawings, expenses, revenue, debtors, creditors and expenditure. Below are original practice questions on those exact terms with full worked answers. They are not copied from the book; they cover the same ground at the same difficulty, free.",
    "intro": "TS Grewal is the book almost every commerce student uses for Class 11 Accountancy, and its questions are copyrighted, so I have not reproduced them here. What I have done instead is write my own questions that test the same terms Chapter 2 tests, at the same level, and solve each one fully. I sit Cambridge exams myself, not CBSE, so everything on this page comes from the 2025-26 edition's contents and CBSE's own syllabus documents rather than from memory of the paper. Work through the seven questions with a notebook, then try the variant under each solution before you check the bracketed answer.",
    "sections": [
      {
        "heading": "What Chapter 2 actually covers in the 2025-26 edition",
        "body": "The 2025-26 edition keeps Basic Accounting Terms as Chapter 2, straight after the introduction chapter. The terms it defines and tests: business transaction, capital, drawings, liabilities split into non-current and current, assets split into non-current and current with tangible, intangible and fictitious types, expenditure split into capital and revenue, expense, income, profit, gain, loss, purchases and purchases return, sales and sales return, stock, trade receivables including debtors and bills receivable, trade payables including creditors and bills payable, goods, cost, vouchers, and discount split into trade and cash. That list looks long, but nearly every question is one of three moves: define a term, classify an item into a category, or compute a small figure such as capital or cost of goods sold. The seven questions below cover all three moves."
      },
      {
        "heading": "How CBSE marks these questions",
        "body": "Class 11 papers are set by schools on the CBSE pattern rather than by the board itself, so the exact split varies, but the format is consistent: terms show up as 1-mark objective items, as 3-mark classify-with-reason questions, and hidden inside longer problems where using the wrong term costs presentation marks. From the sample papers I worked through while writing this page, two habits reliably earn full marks. First, answer classification questions with the category plus a because clause, since the reason usually carries its own mark. Second, when a question involves a rupee figure, state the relationship in words before substituting numbers, the way the solutions below do. Definitions should use the key phrase examiners look for: drawings needs for personal use, capital expenditure needs benefit beyond one accounting year."
      },
      {
        "heading": "The distinctions students actually lose marks on",
        "body": "Three pairs cause most of the damage. Expense versus expenditure: expenditure is any amount spent or liability incurred, while expense is only the portion consumed in earning this year's revenue; buying a machine is expenditure but not an expense, though its depreciation is. Profit versus gain: profit arises from normal operations, gain from incidental events like selling a fixed asset above book value. Debtor versus creditor: the firm's debtor owes the firm, while the firm's creditor is owed by the firm, and swapping them reverses the whole answer. If you can talk through these three pairs without hesitating, Chapter 2 is essentially banked. Questions 3, 4 and 7 below drill exactly these pairs, and each variant swaps the angle so you cannot answer from memory."
      }
    ],
    "problems": [
      {
        "question": "Classify each item as a non-current asset, current asset, non-current liability or current liability: machinery, stock of goods, bank overdraft, a loan repayable after five years, debtors, furniture, creditors and cash in hand.",
        "steps": [
          "Ask two questions of every item: does the business own it (asset) or owe it (liability), and will it convert to cash or fall due within one year (current) or after one year (non-current).",
          "Machinery and furniture are bought to use for years, not to sell, so both are non-current assets.",
          "Stock, debtors and cash in hand are held to convert into cash within the operating cycle, so all three are current assets.",
          "A bank overdraft and creditors are repayable within a year, so both are current liabilities.",
          "The five-year loan falls due after more than a year, so it is a non-current liability."
        ],
        "answer": "Non-current assets: machinery, furniture. Current assets: stock, debtors, cash in hand. Current liabilities: bank overdraft, creditors. Non-current liability: the five-year loan.",
        "markTip": "CBSE classification questions usually award half a mark or one mark per item, and reasons are not needed unless asked, but write the category clearly against each item rather than in a jumbled list.",
        "variant": "Classify: computer software bought for office use, prepaid insurance, outstanding salaries. (Answer: non-current intangible asset, current asset, current liability)"
      },
      {
        "question": "A firm's position on 31 March 2026 shows total assets of Rs 8,60,000. It owes Rs 1,40,000 to creditors and Rs 2,20,000 on a bank loan. Work out the owner's capital.",
        "steps": [
          "Capital is what remains for the owner after outsiders are paid, so rearrange Assets = Liabilities + Capital into Capital = Assets minus External Liabilities.",
          "External liabilities are creditors Rs 1,40,000 plus bank loan Rs 2,20,000, which is Rs 3,60,000.",
          "Capital = Rs 8,60,000 minus Rs 3,60,000 = Rs 5,00,000."
        ],
        "answer": "Capital is Rs 5,00,000.",
        "markTip": "Write the equation in words before substituting numbers. In a 3-mark question the stated relationship typically carries a mark on its own, so it is free credit even if the subtraction slips.",
        "variant": "Total assets are Rs 6,40,000 and capital is Rs 4,10,000. Find the external liabilities. (Answer: Rs 2,30,000)"
      },
      {
        "question": "The owner of a stationery shop takes home goods that cost Rs 12,000 for family use and also pays Rs 8,000 rent for the shop from the till. Which of these is drawings and which is an expense, and why?",
        "steps": [
          "Drawings means value taken out of the business by the owner for personal use, whether in cash or in goods.",
          "The goods worth Rs 12,000 went to the owner's family, not towards earning revenue, so they are drawings and reduce capital.",
          "The shop rent of Rs 8,000 was paid to keep the business running and earning revenue, so it is an expense of the business."
        ],
        "answer": "Goods taken home, Rs 12,000, are drawings; shop rent, Rs 8,000, is an expense.",
        "markTip": "The reason is worth as much as the label here. Say who received the benefit: the owner personally means drawings, the business means expense.",
        "variant": "The owner pays her home electricity bill of Rs 3,000 from the business bank account. Drawings or expense? (Answer: drawings, because the benefit is personal)"
      },
      {
        "question": "During April, a trader sells goods on credit worth Rs 45,000 to Mohan and buys goods on credit worth Rs 30,000 from Sohan. State who is a debtor and who is a creditor of the firm, with amounts.",
        "steps": [
          "A debtor owes money to the firm because the firm sold to them on credit.",
          "Mohan received goods worth Rs 45,000 and has not yet paid, so Mohan is a debtor for Rs 45,000.",
          "A creditor is someone the firm owes money to because the firm bought from them on credit.",
          "Sohan supplied goods worth Rs 30,000 that remain unpaid, so Sohan is a creditor for Rs 30,000."
        ],
        "answer": "Mohan is a debtor for Rs 45,000; Sohan is a creditor for Rs 30,000.",
        "markTip": "The direction of the debt decides everything. Money owed to the firm makes a debtor; money owed by the firm makes a creditor. Mixing them up usually costs the full mark, not half.",
        "variant": "The firm borrows Rs 50,000 from Priya and lends Rs 20,000 to Aman. Who is the firm's creditor? (Answer: Priya for Rs 50,000; Aman is a debtor for Rs 20,000)"
      },
      {
        "question": "A courier business buys a delivery van for Rs 3,50,000, spends Rs 6,000 on its routine servicing during the year, and spends Rs 40,000 building a permanent shed for it. Classify each amount as capital expenditure or revenue expenditure.",
        "steps": [
          "Capital expenditure buys or improves an asset whose benefit lasts beyond one accounting year; revenue expenditure keeps the business running for the current year only.",
          "The van, Rs 3,50,000, will be used for several years, so it is capital expenditure.",
          "The shed, Rs 40,000, is a new lasting structure, so it is also capital expenditure.",
          "Routine servicing of Rs 6,000 only maintains the van in working order for the current year, so it is revenue expenditure."
        ],
        "answer": "Van Rs 3,50,000 and shed Rs 40,000 are capital expenditure; servicing Rs 6,000 is revenue expenditure.",
        "markTip": "Use the benefit test in your reason: benefit beyond one year means capital, benefit this year only means revenue. Examiners look for that phrase, not just the label.",
        "variant": "Rs 15,000 spent repainting the shop and Rs 90,000 spent adding a new storeroom. Classify both. (Answer: repainting is revenue expenditure, the storeroom is capital expenditure)"
      },
      {
        "question": "A shop began the year with stock of Rs 40,000, bought goods for Rs 2,10,000 during the year, and counted closing stock of Rs 35,000. What was the cost of goods sold?",
        "steps": [
          "Cost of goods sold = opening stock + purchases minus closing stock.",
          "Goods available for sale were Rs 40,000 plus Rs 2,10,000, which is Rs 2,50,000.",
          "Of these, Rs 35,000 remained unsold at the year end, so cost of goods sold = Rs 2,50,000 minus Rs 35,000 = Rs 2,15,000."
        ],
        "answer": "Cost of goods sold is Rs 2,15,000.",
        "markTip": "Write the formula line first. If the subtraction slips, the formula and the goods-available subtotal still collect the method marks.",
        "variant": "Opening stock Rs 25,000, purchases Rs 1,80,000, closing stock Rs 30,000. Find the cost of goods sold. (Answer: Rs 1,75,000)"
      },
      {
        "question": "A furniture dealer sells furniture from its showroom for Rs 60,000 and separately sells an old delivery truck at Rs 9,000 above its book value. Which amount is revenue and which is a gain?",
        "steps": [
          "Revenue comes from the normal, recurring operations of the business, which for a furniture dealer means selling furniture.",
          "So the Rs 60,000 of showroom sales is revenue.",
          "A gain is an incidental profit arising outside normal operations, such as selling a fixed asset above its book value.",
          "So the Rs 9,000 made on the truck is a gain, not revenue."
        ],
        "answer": "Rs 60,000 is revenue; the Rs 9,000 profit on the truck sale is a gain.",
        "markTip": "Anchor your reason to the nature of the business. The same truck sale would be revenue for a truck dealer, and an answer that notices this reads as understanding rather than recall.",
        "variant": "A bakery earns Rs 4,000 interest on a fixed deposit. Is this revenue from operations or other income? (Answer: other income, because it is incidental to baking)"
      }
    ],
    "faqs": [
      {
        "q": "Are these the actual TS Grewal Chapter 2 solutions?",
        "a": "No. TS Grewal is a copyrighted commercial textbook, so its questions cannot be republished here. These are original questions written to cover the same terms at the same difficulty as Chapter 2 of the 2025-26 edition, each with a full solution. Use them as extra practice alongside the book itself."
      },
      {
        "q": "Which chapter is Basic Accounting Terms in the 2025-26 edition?",
        "a": "Chapter 2, immediately after Chapter 1, Introduction of Accounting. Several solution websites still follow older editions where the numbering differs, so if a site's chapter list looks shifted, match by topic name rather than by chapter number."
      },
      {
        "q": "How many marks do basic terms carry in the CBSE Class 11 exam?",
        "a": "Class 11 papers are set by individual schools on the CBSE pattern, so there is no fixed allocation. Typically the terms appear as 1-mark objective questions and 3-mark classification questions, and they quietly affect longer answers too, because using the wrong term in a journal or equation question costs presentation marks."
      },
      {
        "q": "What is the quickest way to remember debtor versus creditor?",
        "a": "Follow the direction of the debt. A debtor owes the firm because the firm sold to them on credit. A creditor is owed by the firm because the firm bought on credit. Fix one concrete example in your head, like Mohan the customer and Sohan the supplier from question 4, and rebuild the rule from it whenever you hesitate."
      }
    ],
    "targetQuery": "ts grewal class 11 solutions chapter 2 basic accounting terms",
    "hubSubjects": [
      "accounting"
    ]
  },
  {
    "board": "cbse",
    "slug": "class-11-accountancy-accounting-equation-practice",
    "metaTitle": "TS Grewal Class 11 Accounting Equation Practice",
    "metaDescription": "Work the accounting equation the TS Grewal Class 11 way: Chapter 5 style questions with transaction-by-transaction workings and CBSE marking notes.",
    "h1": "Accounting Equation: Class 11 Practice in TS Grewal Chapter 5 Style",
    "quickAnswer": "Accounting Equation is Chapter 5 in the 2025-26 TS Grewal Class 11 book. Every transaction must keep Assets = Liabilities + Capital in balance. Below are original equation questions worked transaction by transaction the way CBSE expects, with a running check after each step. They match the book's chapter and difficulty without copying its questions.",
    "intro": "Accounting equation questions are where Class 11 marks are either banked or bled. The method is completely mechanical once you see it: write the equation, push each transaction through it, and prove both sides agree after every line. I cannot copy TS Grewal's own Chapter 5 questions here because the book is copyrighted, so I wrote fresh ones covering the same transaction types the 2025-26 chapter drills: cash and credit purchases, sales at a profit, drawings, expenses, outstanding items and capital brought in kind. Every running total below has been checked twice. Do each question on paper first, then read the working.",
    "sections": [
      {
        "heading": "How to lay out an equation answer",
        "body": "TS Grewal style answers use a statement with a column for each asset and each liability plus capital, and one row per transaction. On paper, draw it exactly that way: list the transactions down the side, and after each one write the new balance of every column plus a total for each side. The solutions below say the same thing in sentences because this site publishes plain text, but the sequence is identical: state the effect of the transaction, update the affected items, then prove assets equal liabilities plus capital. Two rules cover ninety percent of entries. Anything the business owns or is owed sits on the asset side; anything it owes sits on the other side along with capital. And every expense, income, profit, loss or drawing lands in the capital column, because the owner absorbs whatever outsiders do not."
      },
      {
        "heading": "The four shapes every transaction takes",
        "body": "Each transaction does one of four things to the equation. One asset can replace another, like buying goods for cash, and the totals stand still. Both sides can rise together, like a credit purchase or a loan received. Both sides can fall together, like paying a creditor or the owner withdrawing cash. Or the right side can rearrange within itself, like an outstanding salary that raises a liability while lowering capital. When a question asks for the effect of a transaction, name the shape and the specific accounts. When you build a full statement and a line refuses to balance, the fault is nearly always a forgotten capital adjustment: profit not added, or an expense or drawing not subtracted. Question 5 below is pure shape-spotting practice, and the FAQ has a repair checklist."
      },
      {
        "heading": "Where Chapter 5 sits in the book",
        "body": "In the 2025-26 edition the accounting equation is Chapter 5, following Bases of Accounting and immediately before Accounting Procedures, the rules of debit and credit. That ordering is deliberate. Debit and credit are the equation with names attached: every debit records what the next chapter calls an increase in assets or expenses, every credit an increase in liabilities, capital or income, and the equality you prove line by line here becomes the reason a trial balance must tally in Chapter 14. Some solution websites still number this chapter as 2 or 6 from older editions, so match by topic name if your book looks different. Whenever you get stuck, the fastest repair is to go back to the last line that balanced and push one transaction through at a time."
      }
    ],
    "problems": [
      {
        "question": "Show the effect of these transactions on the accounting equation: Ritu starts business with cash Rs 3,00,000; buys goods for cash Rs 80,000; sells goods costing Rs 30,000 for Rs 42,000 cash; pays rent Rs 5,000.",
        "steps": [
          "Start: cash Rs 3,00,000 = capital Rs 3,00,000. Assets Rs 3,00,000, liabilities nil.",
          "Buying goods for cash swaps one asset for another: cash falls to Rs 2,20,000 and stock rises to Rs 80,000. Totals unchanged at Rs 3,00,000.",
          "The cash sale brings in Rs 42,000 and removes stock of Rs 30,000, so the Rs 12,000 difference is profit added to capital. Now cash Rs 2,62,000 plus stock Rs 50,000 = Rs 3,12,000, and capital is Rs 3,12,000.",
          "Rent reduces cash by Rs 5,000 and, being an expense, reduces capital by Rs 5,000. Cash Rs 2,57,000 plus stock Rs 50,000 = Rs 3,07,000, and capital is Rs 3,07,000.",
          "Final check: assets Rs 3,07,000 = liabilities nil + capital Rs 3,07,000. It balances."
        ],
        "answer": "Closing equation: cash Rs 2,57,000 + stock Rs 50,000 = capital Rs 3,07,000.",
        "markTip": "Write the fresh totals after every transaction, not just at the end. In the usual 4 to 6 mark equation question, each correctly updated line carries marks even if a later line slips.",
        "variant": "Start with cash Rs 1,50,000; buy goods for cash Rs 40,000; sell all of them for Rs 55,000 cash. Find the closing capital. (Answer: Rs 1,65,000)"
      },
      {
        "question": "A business has cash Rs 1,00,000 and capital Rs 1,00,000. Show the equation after it buys goods on credit for Rs 60,000, pays creditors Rs 25,000, and buys furniture for cash Rs 15,000.",
        "steps": [
          "The credit purchase raises stock and creates a liability: cash Rs 1,00,000 + stock Rs 60,000 = creditors Rs 60,000 + capital Rs 1,00,000. Both sides Rs 1,60,000.",
          "Paying creditors Rs 25,000 reduces cash and creditors together: cash Rs 75,000 + stock Rs 60,000 = creditors Rs 35,000 + capital Rs 1,00,000. Both sides Rs 1,35,000.",
          "Buying furniture swaps cash for furniture: cash Rs 60,000 + stock Rs 60,000 + furniture Rs 15,000 = creditors Rs 35,000 + capital Rs 1,00,000. Both sides still Rs 1,35,000."
        ],
        "answer": "Closing equation: cash Rs 60,000 + stock Rs 60,000 + furniture Rs 15,000 = creditors Rs 35,000 + capital Rs 1,00,000.",
        "markTip": "Notice which transactions change the totals: a payment to creditors shrinks both sides, while an asset swap changes neither. Saying this in a sentence shows the examiner understanding, not just arithmetic.",
        "variant": "From the closing position above, the firm returns goods costing Rs 5,000 to a creditor. New creditors figure? (Answer: Rs 30,000, with stock falling to Rs 55,000)"
      },
      {
        "question": "On 31 March 2026 a trader has cash Rs 24,000, debtors Rs 56,000, stock Rs 90,000 and machinery Rs 2,30,000. He owes creditors Rs 70,000 and a loan of Rs 50,000. Use the accounting equation to find his capital.",
        "steps": [
          "Total the assets: Rs 24,000 + Rs 56,000 + Rs 90,000 + Rs 2,30,000 = Rs 4,00,000.",
          "Total the external liabilities: Rs 70,000 + Rs 50,000 = Rs 1,20,000.",
          "Capital = assets minus liabilities = Rs 4,00,000 minus Rs 1,20,000 = Rs 2,80,000."
        ],
        "answer": "Capital is Rs 2,80,000.",
        "markTip": "Label the two subtotals clearly. Examiners award the asset total and the liability total separately before the final figure, so a slip in one does not sink all three marks.",
        "variant": "Assets are Rs 5,25,000 and capital is Rs 3,45,000. Find the liabilities. (Answer: Rs 1,80,000)"
      },
      {
        "question": "Meera's capital was Rs 2,50,000 on 1 April 2025 and Rs 3,10,000 on 31 March 2026. During the year she withdrew Rs 40,000 and brought in fresh capital of Rs 25,000. Find her profit for the year.",
        "steps": [
          "Closing capital already reflects profit, drawings and fresh capital, so unwind them: profit = closing capital + drawings minus fresh capital minus opening capital.",
          "Substitute: Rs 3,10,000 + Rs 40,000 minus Rs 25,000 minus Rs 2,50,000.",
          "That is Rs 3,50,000 minus Rs 2,75,000 = Rs 75,000."
        ],
        "answer": "Profit for the year is Rs 75,000.",
        "markTip": "Get the signs by reasoning, not memory: drawings made closing capital smaller, so add them back; fresh capital made it bigger, so take it out. One line of that reasoning protects you if the layout is unfamiliar.",
        "variant": "Opening capital Rs 1,80,000, closing capital Rs 2,44,000, drawings Rs 20,000, no fresh capital. Find the profit. (Answer: Rs 84,000)"
      },
      {
        "question": "State the effect of each on the accounting equation: (a) received Rs 18,000 from a debtor, (b) salary of Rs 7,000 is outstanding at the year end, (c) depreciation of Rs 4,000 is charged on machinery.",
        "steps": [
          "(a) Cash rises by Rs 18,000 and debtors fall by Rs 18,000. One asset replaces another and the totals do not change.",
          "(b) The outstanding salary creates a liability of Rs 7,000, and being an expense it cuts capital by Rs 7,000. Assets are untouched; the right side rearranges within the same total.",
          "(c) Depreciation reduces machinery by Rs 4,000 and capital by Rs 4,000, so both sides fall together."
        ],
        "answer": "(a) no change in totals; (b) liabilities up Rs 7,000 and capital down Rs 7,000; (c) assets and capital both down Rs 4,000.",
        "markTip": "These one-line effect questions are quick marks. Always name the specific asset or liability involved, not just the side of the equation.",
        "variant": "Goods costing Rs 2,000 are given away as charity. Effect? (Answer: stock down Rs 2,000 and capital down Rs 2,000)"
      },
      {
        "question": "Prepare the accounting equation: Manu starts business with cash Rs 2,00,000 and his own furniture worth Rs 50,000; buys goods on credit Rs 40,000; withdraws cash Rs 10,000 for personal use; sells goods costing Rs 25,000 on credit for Rs 35,000.",
        "steps": [
          "Start: cash Rs 2,00,000 + furniture Rs 50,000 = capital Rs 2,50,000. Personal assets brought in count as capital just like cash.",
          "Credit purchase: add stock Rs 40,000 and creditors Rs 40,000. Assets Rs 2,90,000 = creditors Rs 40,000 + capital Rs 2,50,000.",
          "Drawings: cash falls to Rs 1,90,000 and capital falls to Rs 2,40,000. Both sides now total Rs 2,80,000.",
          "Credit sale at a profit: debtors rise by Rs 35,000, stock falls by Rs 25,000, and the Rs 10,000 profit lifts capital to Rs 2,50,000.",
          "Check: cash Rs 1,90,000 + furniture Rs 50,000 + stock Rs 15,000 + debtors Rs 35,000 = Rs 2,90,000, and creditors Rs 40,000 + capital Rs 2,50,000 = Rs 2,90,000."
        ],
        "answer": "Closing equation: assets Rs 2,90,000 = creditors Rs 40,000 + capital Rs 2,50,000, made up of cash Rs 1,90,000, furniture Rs 50,000, stock Rs 15,000 and debtors Rs 35,000.",
        "markTip": "When the owner brings in a personal asset like furniture, it is capital exactly as cash would be. Missing this in the opening line throws every later total off, and examiners mark the opening line first.",
        "variant": "Same start, but Manu also takes a bank loan of Rs 60,000 received in cash. Opening totals? (Answer: assets Rs 3,10,000 = loan Rs 60,000 + capital Rs 2,50,000)"
      }
    ],
    "faqs": [
      {
        "q": "Are these the actual TS Grewal Chapter 5 solutions?",
        "a": "No. The book is copyrighted, so its questions are not reproduced here. These are original questions built to cover the same transaction types and difficulty as the 2025-26 Chapter 5, each solved in full. Work the book's own questions too; the method shown here transfers directly."
      },
      {
        "q": "Does profit really go into the capital column?",
        "a": "Yes. Profit, losses, expenses, incomes, drawings and interest on capital all adjust the capital figure, because the owner ultimately absorbs them. If a statement refuses to balance, the missing piece is almost always one of these capital adjustments."
      },
      {
        "q": "My equation does not balance. What do I check first?",
        "a": "Four things, in order: did you add the profit on any sale (selling price minus cost) to capital; did you subtract drawings from both cash and capital; did you accidentally move cash on a credit transaction; and did every expense reduce capital as well as the asset it was paid from. One of those four fixes it nearly every time."
      },
      {
        "q": "Is the accounting equation Chapter 2 or Chapter 5?",
        "a": "In the 2025-26 TS Grewal edition it is Chapter 5. Some older editions and several solution websites number it differently, which is why chapter lists online disagree. Match by the topic name, Accounting Equation, and you cannot go wrong."
      }
    ],
    "targetQuery": "ts grewal class 11 accounting equation solutions",
    "hubSubjects": [
      "accounting"
    ]
  },
  {
    "board": "cbse",
    "slug": "class-11-accountancy-journal-entries-practice",
    "metaTitle": "TS Grewal Class 11 Journal Entries Practice and Answers",
    "metaDescription": "Original journal entry practice matched to TS Grewal Class 11 Chapter 8, 2025-26 edition: compound entries, GST, bad debts, full solutions, marking notes.",
    "h1": "Journal Entries: Class 11 Practice in TS Grewal Chapter 8 Style",
    "quickAnswer": "Journal is Chapter 8 in the 2025-26 TS Grewal Class 11 edition. Below are original journalising questions of the kind that chapter drills: simple and compound entries, GST, full settlement discounts, bad debts and drawings, each solved with complete debit and credit lines. They are written in the book's style and difficulty, not copied from it.",
    "intro": "Journal is the longest-practised chapter of Class 11, Chapter 8 in the 2025-26 TS Grewal edition, and the entries here mirror the types it drills: simple entries, compound entries, full settlement discounts, insolvency of a debtor, CGST and SGST at 6 percent each, drawings in cash and in goods, year-end adjustments, and asset purchases with installation. The questions are my own, written because reproducing the book's copyrighted questions is not allowed, and each is solved with complete debit and credit lines you can compare against your working. If an entry ever refuses to balance, the solution shows exactly where the missing rupees went.",
    "sections": [
      {
        "heading": "What Chapter 8 drills in the 2025-26 edition",
        "body": "Chapter 8, Journal, is the book's biggest single block of practice, and the question types repeat: simple two-line entries for cash and credit transactions, compound entries where one debit meets several credits or the reverse, opening entries, trade discount netted off before recording, cash discount recorded through Discount Allowed or Discount Received, full settlement payments, insolvency of a debtor with paise in the rupee, drawings in cash and in goods, goods given as samples or charity, basic CGST and SGST entries, year-end adjustments such as outstanding and prepaid items, and asset purchases where installation or cartage is capitalised. The seven questions below cover each of those at the same difficulty as the chapter. Trade discount deserves special mention because it never appears in the books at all: record the net amount and mention the discount only in the narration."
      },
      {
        "heading": "The five-step method for any entry",
        "body": "Every journal entry yields to the same routine. Identify the accounts involved. Classify each one: asset, liability, capital, expense or income. Apply the rules: increases in assets and expenses are debits, increases in liabilities, capital and income are credits, and decreases reverse. Check that the debits equal the credits in rupees. Then write the narration. Where students actually stumble is classification, not the rules: Purchases means goods for resale only, so a machine bought is Machinery, never Purchases; a supplier of goods on credit becomes a personal account in their own name; GST paid on inputs is an asset waiting to be set off, not a cost. Run this routine slowly for a week and it compresses into a reflex. The solutions below name the classification in every step so you can watch the routine at work."
      },
      {
        "heading": "Format and marking",
        "body": "A CBSE-pattern journal answer is a dated entry with the debited account first marked Dr, the credited account on the next line preceded by To, amounts in the debit and credit columns, and a narration in brackets beginning with Being. Schools set their own Class 11 papers so weighting varies, but journal questions commonly run 3 to 6 marks with roughly a mark per entry, and format faults are the cheapest marks lost: missing narrations, a missing Dr, or columns that do not total. Because this site publishes plain text, the solutions below write each entry as a sentence, Debit this account, Credit that account, but you should practise in full ruled format on paper. Before leaving any entry, total its debits and credits; the check takes five seconds and catches nearly every slip this chapter produces."
      }
    ],
    "problems": [
      {
        "question": "Journalise: (i) Aarav commenced business with cash Rs 5,00,000; (ii) purchased goods for cash Rs 1,20,000; (iii) sold goods for cash Rs 90,000; (iv) purchased goods from Ram on credit Rs 70,000; (v) paid salaries Rs 15,000.",
        "steps": [
          "(i) Cash comes in and capital is created: Debit Cash Account Rs 5,00,000; Credit Capital Account Rs 5,00,000.",
          "(ii) Goods bought for resale always go to Purchases, never to a goods account: Debit Purchases Account Rs 1,20,000; Credit Cash Account Rs 1,20,000.",
          "(iii) Debit Cash Account Rs 90,000; Credit Sales Account Rs 90,000.",
          "(iv) A credit purchase creates a personal account for the supplier: Debit Purchases Account Rs 70,000; Credit Ram's Account Rs 70,000.",
          "(v) Debit Salaries Account Rs 15,000; Credit Cash Account Rs 15,000."
        ],
        "answer": "Five entries as above; total debits Rs 7,95,000 equal total credits Rs 7,95,000.",
        "markTip": "Write a one-line narration under every entry, for example: being goods purchased for cash. CBSE format marks hang on narrations and on the debit line carrying Dr.",
        "variant": "Journalise: paid rent Rs 8,000 and received commission Rs 3,500. (Answer: Debit Rent Account Rs 8,000, Credit Cash Account Rs 8,000; Debit Cash Account Rs 3,500, Credit Commission Received Account Rs 3,500)"
      },
      {
        "question": "Journalise: purchased goods for Rs 50,000 within the state, paying CGST 6 percent and SGST 6 percent, all by cheque.",
        "steps": [
          "Work the tax first: CGST = 6 percent of Rs 50,000 = Rs 3,000, and SGST = Rs 3,000, so the total payment is Rs 56,000.",
          "Input GST on purchases is an asset because it can be set off against output GST later, so it is debited separately, not added into Purchases.",
          "Entry: Debit Purchases Account Rs 50,000; Debit Input CGST Account Rs 3,000; Debit Input SGST Account Rs 3,000; Credit Bank Account Rs 56,000."
        ],
        "answer": "Debit Purchases Rs 50,000, Input CGST Rs 3,000 and Input SGST Rs 3,000; Credit Bank Rs 56,000.",
        "markTip": "Keep the tax out of the Purchases figure. Merging GST into Purchases is the most common single-mark loss on this entry, and the examiner checks the Purchases line first.",
        "variant": "Sold goods for Rs 80,000 within the state plus CGST and SGST at 6 percent each, received in cash. (Answer: Debit Cash Rs 89,600; Credit Sales Rs 80,000, Output CGST Rs 4,800, Output SGST Rs 4,800)"
      },
      {
        "question": "The firm owes Mohan Rs 25,000. It pays him Rs 24,500 by cheque in full settlement. Journalise.",
        "steps": [
          "Mohan's account must be closed for the full Rs 25,000 owed, so debit Mohan Rs 25,000.",
          "The bank paid out only Rs 24,500, so credit Bank Rs 24,500.",
          "The Rs 500 the firm no longer has to pay is discount received, an income: credit Discount Received Rs 500.",
          "Entry: Debit Mohan's Account Rs 25,000; Credit Bank Account Rs 24,500; Credit Discount Received Account Rs 500."
        ],
        "answer": "Debit Mohan Rs 25,000; Credit Bank Rs 24,500 and Discount Received Rs 500.",
        "markTip": "The phrase in full settlement always signals a discount entry. Check that the one debit equals the two credits before moving on: Rs 25,000 = Rs 24,500 + Rs 500.",
        "variant": "Received Rs 19,200 from Neha in full settlement of Rs 20,000. (Answer: Debit Cash Rs 19,200 and Discount Allowed Rs 800; Credit Neha Rs 20,000)"
      },
      {
        "question": "Sudhir, who owed the firm Rs 8,000, is declared insolvent and a final payment of 60 paise in the rupee is received in cash. Journalise.",
        "steps": [
          "Cash received = Rs 8,000 x 60/100 = Rs 4,800.",
          "The remaining Rs 3,200 will never arrive and is written off as bad debts, an expense.",
          "Entry: Debit Cash Account Rs 4,800; Debit Bad Debts Account Rs 3,200; Credit Sudhir's Account Rs 8,000."
        ],
        "answer": "Debit Cash Rs 4,800 and Bad Debts Rs 3,200; Credit Sudhir Rs 8,000.",
        "markTip": "Show the paise-in-the-rupee calculation as a working note. The examiner needs to see 60 percent of the debt derived, not a mystery figure appearing in the entry.",
        "variant": "Kiran, owing Rs 12,000, pays 75 paise in the rupee. What is written off as bad debts? (Answer: Rs 3,000, with cash received Rs 9,000)"
      },
      {
        "question": "The proprietor withdraws cash Rs 10,000 and goods costing Rs 6,000 for personal use. Journalise.",
        "steps": [
          "Both withdrawals go to a single Drawings account, totalling Rs 16,000.",
          "Goods withdrawn are recorded at cost and credited to Purchases, because they reduce the goods that were bought for resale.",
          "Entry: Debit Drawings Account Rs 16,000; Credit Cash Account Rs 10,000; Credit Purchases Account Rs 6,000."
        ],
        "answer": "Debit Drawings Rs 16,000; Credit Cash Rs 10,000 and Purchases Rs 6,000.",
        "markTip": "Credit Purchases, not Sales, for goods withdrawn. The owner is not a customer, so no profit can be recognised on goods taken at cost, and crediting Sales invents one.",
        "variant": "Goods costing Rs 4,500 are distributed as free samples. (Answer: Debit Advertisement Account Rs 4,500; Credit Purchases Account Rs 4,500)"
      },
      {
        "question": "Pass entries at year end for: (a) depreciation on machinery Rs 9,000, (b) salaries outstanding Rs 12,000, (c) insurance premium paid in advance Rs 3,000.",
        "steps": [
          "(a) Debit Depreciation Account Rs 9,000; Credit Machinery Account Rs 9,000.",
          "(b) The expense belongs to this year but is unpaid: Debit Salaries Account Rs 12,000; Credit Outstanding Salaries Account Rs 12,000.",
          "(c) Part of the premium belongs to next year: Debit Prepaid Insurance Account Rs 3,000; Credit Insurance Account Rs 3,000.",
          "Note the pattern: an outstanding item creates a liability account, a prepaid item creates an asset account."
        ],
        "answer": "(a) Depreciation debited Rs 9,000 against Machinery; (b) Salaries debited Rs 12,000 against Outstanding Salaries; (c) Prepaid Insurance debited Rs 3,000 against Insurance.",
        "markTip": "Outstanding Salaries is a liability, so it is credited when created. Writing Credit Salaries instead of Credit Outstanding Salaries reverses the meaning and usually forfeits that whole part.",
        "variant": "Commission earned but not yet received Rs 2,500. (Answer: Debit Accrued Commission Account Rs 2,500; Credit Commission Account Rs 2,500)"
      },
      {
        "question": "Bought a second-hand packing machine for Rs 85,000 by cheque and paid Rs 5,000 in cash for its installation. Journalise.",
        "steps": [
          "Installation cost is spent to make the asset usable, so it is capitalised into Machinery rather than treated as an expense.",
          "Machinery total = Rs 85,000 + Rs 5,000 = Rs 90,000.",
          "Entry: Debit Machinery Account Rs 90,000; Credit Bank Account Rs 85,000; Credit Cash Account Rs 5,000."
        ],
        "answer": "Debit Machinery Rs 90,000; Credit Bank Rs 85,000 and Cash Rs 5,000.",
        "markTip": "Any cost up to the point the asset is ready for use is capital: carriage on the machine, installation, first-time fitting. Repairs after use begins are revenue. State this test in a working note.",
        "variant": "Bought furniture for Rs 30,000 and paid Rs 2,000 cartage to bring it to the shop, all in cash. What figure goes to the Furniture Account? (Answer: Rs 32,000)"
      }
    ],
    "faqs": [
      {
        "q": "Are these the actual TS Grewal Chapter 8 solutions?",
        "a": "No. TS Grewal's questions are copyrighted and cannot be republished, so every question here is original, written to match the entry types and difficulty of Chapter 8 in the 2025-26 edition. Solve the book's questions too; the method in these solutions applies to them unchanged."
      },
      {
        "q": "Do narrations carry marks?",
        "a": "Yes, in practice. A journal entry without a narration is treated as incomplete under the CBSE format, and since school-set papers usually award about a mark per entry, a run of missing narrations adds up. One short line beginning with Being is enough."
      },
      {
        "q": "How do I treat trade discount versus cash discount?",
        "a": "Trade discount is never recorded in the books: deduct it and journalise only the net amount, mentioning the discount in the narration. Cash discount is recorded, through Discount Allowed when you receive less from a debtor and Discount Received when you pay less to a creditor."
      },
      {
        "q": "Is GST part of the journal chapter?",
        "a": "Basic entries with CGST and SGST appear inside journal practice, like question 2 above. The full treatment, including IGST and set-off, has its own chapter, Accounting for Goods and Services Tax, which is Chapter 12 in the 2025-26 edition."
      }
    ],
    "targetQuery": "ts grewal class 11 journal entries solutions",
    "hubSubjects": [
      "accounting"
    ]
  },
  {
    "board": "cbse",
    "slug": "class-11-accountancy-ledger-practice",
    "metaTitle": "TS Grewal Class 11 Ledger Practice and Answers",
    "metaDescription": "Ledger posting and balancing practice in TS Grewal Class 11 Chapter 9 style: original questions with full account workings and CBSE marking notes.",
    "h1": "Ledger Posting and Balancing: Class 11 Practice in TS Grewal Chapter 9 Style",
    "quickAnswer": "Ledger is Chapter 9 of the 2025-26 TS Grewal Class 11 book: posting journal entries into accounts and balancing them. Below are original posting and balancing questions with every account worked line by line, debit side and credit side, and each closing balance checked. Same topics and difficulty as the chapter, none of it copied.",
    "intro": "Posting to the ledger is where the double entry system stops being theory. Chapter 9 of the 2025-26 TS Grewal edition takes journal entries and turns them into accounts, then balances them, and that is exactly what these questions practise: a cash account, a debtor, a creditor, a nominal account closed by transfer, and balances read for meaning. I wrote every question myself since the book's own questions are under copyright, and I balanced every account by hand before publishing. Set your answers out in proper T-account form on paper, even though the solutions here are written as lines of prose.",
    "sections": [
      {
        "heading": "From journal to ledger: how posting works",
        "body": "The ledger is the journal re-sorted account by account. For every entry, the account that was debited receives a debit-side posting naming the other account, and the credited account receives the mirror image on its credit side. The convention is To on the debit side and By on the credit side; the words mean nothing by themselves, they are tradition, but examiners expect them. The posting line always names the other account in the transaction, never the account you are writing in. So when cash is received from Hari, the Cash Account shows To Hari's Account on its debit side, and Hari's Account shows By Cash Account on its credit side. Once you see posting as pure re-filing, the chapter becomes clerical rather than conceptual, and speed comes from doing rather than reading."
      },
      {
        "heading": "Balancing, and which accounts you balance",
        "body": "To balance an account, total both sides, find the difference, and write it on the lighter side as Balance c/d so the totals agree, then bring it down on the opposite side as Balance b/d to start the next period. Real and personal accounts, meaning assets, debtors, creditors and capital, are balanced this way, and their balances flow into the trial balance. Nominal accounts, the expenses and incomes, are not balanced at all: at period end they are closed by transfer to the Trading or Profit and Loss Account, as question 4 below shows. Reading a balance is a skill of its own: a debit balance on a personal account means that person owes the firm, a credit balance means the firm owes them, and cash can only ever balance on the debit side."
      },
      {
        "heading": "Where Chapter 9 sits and how it is tested",
        "body": "Ledger is Chapter 9 in the 2025-26 edition, directly after Journal; older editions and some solution sites call it Chapter 6, so go by the topic name. Exam questions come in three forms: post a given set of journal entries into one named account and balance it, prepare the personal account of a debtor or creditor from a list of dealings, or prepare an account and state what its balance means. That final meaning sentence is often a dedicated mark, so end written answers with it: Rohan owes the firm Rs 14,000, or the firm owes Meena Traders Rs 11,000. Every question below finishes with exactly that sentence for exactly that reason, and the variants change the figures so you have to rebuild the account rather than pattern-match."
      }
    ],
    "problems": [
      {
        "question": "Prepare the Cash Account from these transactions: business started with cash Rs 2,00,000; goods purchased for cash Rs 60,000; goods sold for cash Rs 75,000; rent paid Rs 5,000; Rs 20,000 received from Hari, a debtor.",
        "steps": [
          "Cash is a real account: debit what comes in, credit what goes out.",
          "Debit side: To Capital Account Rs 2,00,000, To Sales Account Rs 75,000, To Hari's Account Rs 20,000. Debit total Rs 2,95,000.",
          "Credit side: By Purchases Account Rs 60,000, By Rent Account Rs 5,000. Credit total Rs 65,000.",
          "Balance = Rs 2,95,000 minus Rs 65,000 = Rs 2,30,000, written on the credit side as By Balance c/d and brought down on the debit side as To Balance b/d."
        ],
        "answer": "The Cash Account closes with a debit balance of Rs 2,30,000.",
        "markTip": "Cash can never show a credit balance. If yours does, hunt for a posting on the wrong side before you do anything else; that is nearly always the fault.",
        "variant": "Same transactions plus wages paid Rs 12,000. New closing balance? (Answer: Rs 2,18,000 debit)"
      },
      {
        "question": "Prepare Rohan's Account in the books of the firm: goods sold to him on credit Rs 48,000; cash received from him Rs 30,000; discount allowed to him Rs 1,000; goods returned by him Rs 3,000. Balance the account.",
        "steps": [
          "Rohan is a debtor, so the sale goes on the debit side: To Sales Account Rs 48,000.",
          "Credit side: By Cash Account Rs 30,000, By Discount Allowed Account Rs 1,000, By Sales Return Account Rs 3,000. Credit total Rs 34,000.",
          "Balance = Rs 48,000 minus Rs 34,000 = Rs 14,000, a debit balance: By Balance c/d Rs 14,000, brought down as To Balance b/d.",
          "Read the result: Rohan still owes the firm Rs 14,000."
        ],
        "answer": "Rohan's Account shows a debit balance of Rs 14,000, the amount he still owes the firm.",
        "markTip": "When cash arrives together with a discount, post both on the credit side as separate lines. Netting them into a single figure loses the discount mark.",
        "variant": "Sold goods to Tara on credit Rs 36,000; received Rs 33,500 from her in full settlement. What discount was allowed? (Answer: Rs 2,500, and her account closes at nil)"
      },
      {
        "question": "Prepare the account of Meena Traders, a supplier: goods bought from them on credit Rs 55,000; paid them Rs 40,000; discount received from them Rs 1,500; goods returned to them Rs 2,500.",
        "steps": [
          "Meena Traders is a creditor, so the purchase sits on the credit side: By Purchases Account Rs 55,000.",
          "Debit side: To Cash Account Rs 40,000, To Discount Received Account Rs 1,500, To Purchases Return Account Rs 2,500. Debit total Rs 44,000.",
          "Balance = Rs 55,000 minus Rs 44,000 = Rs 11,000, a credit balance: To Balance c/d Rs 11,000, brought down as By Balance b/d.",
          "Read the result: the firm still owes Meena Traders Rs 11,000."
        ],
        "answer": "Meena Traders' Account closes with a credit balance of Rs 11,000, which the firm still owes.",
        "markTip": "A creditor's account is the mirror of a debtor's. Learn Rohan's account from question 2, swap every side, and you have this one; papers often set one of each to catch students who only drilled one direction.",
        "variant": "Bought goods from Vikram on credit Rs 28,000 and returned Rs 4,000. Balance owed to him? (Answer: Rs 24,000 credit balance)"
      },
      {
        "question": "Post these into the Purchases Account for July and close it: cash purchases Rs 30,000; credit purchases from Karan Rs 35,000 and from Divya Rs 25,000.",
        "steps": [
          "Purchases is a nominal account and collects only goods bought for resale, whatever the mode of payment.",
          "Debit side: To Cash Account Rs 30,000, To Karan's Account Rs 35,000, To Divya's Account Rs 25,000. Total Rs 90,000.",
          "A nominal account is not balanced; at period end it is closed by transfer: By Trading Account Rs 90,000."
        ],
        "answer": "The Purchases Account totals Rs 90,000 on the debit side and is closed by transfer to the Trading Account.",
        "markTip": "Balancing a nominal account instead of transferring it is a classic error. Only real and personal accounts carry balances forward to the next period.",
        "variant": "The Sales Account shows cash sales Rs 52,000 and credit sales Rs 41,000. What is transferred, and where? (Answer: Rs 93,000 to the Trading Account)"
      },
      {
        "question": "State whether each account normally shows a debit or a credit balance: cash, creditors, sales, machinery, rent paid, capital.",
        "steps": [
          "Assets and expenses live on the debit side: cash, machinery and rent paid carry debit balances.",
          "Liabilities, incomes and capital live on the credit side: creditors, sales and capital carry credit balances.",
          "Sanity check for the trial balance: debit balances are things owned or costs suffered, credit balances are amounts owed or earned."
        ],
        "answer": "Debit balances: cash, machinery, rent paid. Credit balances: creditors, sales, capital.",
        "markTip": "This feeds directly into the trial balance chapter, and examiners test it as one-mark items, so it is cheap revision with a high payoff. Answer with the side and the reason in a phrase.",
        "variant": "Bank overdraft and drawings: which side does each balance sit on? (Answer: overdraft is a credit balance, drawings a debit balance)"
      },
      {
        "question": "Journalise and post to the Furniture Account: bought furniture for cash Rs 20,000 on 1 August; bought more furniture on credit from Wood Mart for Rs 18,000 on 20 August. Balance the account on 31 August.",
        "steps": [
          "Entries: Debit Furniture Account Rs 20,000, Credit Cash Account Rs 20,000; then Debit Furniture Account Rs 18,000, Credit Wood Mart's Account Rs 18,000.",
          "Posting: the Furniture Account debit side shows To Cash Account Rs 20,000 and To Wood Mart's Account Rs 18,000.",
          "There are no credit entries, so the balance is Rs 38,000: By Balance c/d Rs 38,000 on 31 August, brought down as To Balance b/d Rs 38,000 on 1 September."
        ],
        "answer": "The Furniture Account closes at a debit balance of Rs 38,000.",
        "markTip": "The posting line names the other account in the entry, never the account you are writing in. A line reading To Furniture inside the Furniture Account is an instant giveaway of guesswork.",
        "variant": "Same account, but on 30 August furniture costing Rs 6,000 is returned to Wood Mart. Closing balance? (Answer: Rs 32,000 debit)"
      }
    ],
    "faqs": [
      {
        "q": "Are these the actual TS Grewal Chapter 9 solutions?",
        "a": "No. The book is a copyrighted commercial text, so these are original questions written to cover the same posting and balancing skills at the same difficulty as Chapter 9 of the 2025-26 edition. Every account here was balanced by hand before publishing."
      },
      {
        "q": "What do To and By actually mean?",
        "a": "Nothing by themselves; they are a labelling convention. Entries on the debit side start with To, entries on the credit side start with By. Examiners expect the convention, so use it, but do not look for meaning in the words."
      },
      {
        "q": "Which accounts are balanced and which are transferred?",
        "a": "Real and personal accounts, assets, debtors, creditors and capital, are balanced with Balance c/d and carried forward. Nominal accounts, meaning expenses and incomes such as purchases, sales, rent and commission, are closed at period end by transfer to the Trading or Profit and Loss Account."
      },
      {
        "q": "Can the Cash Account ever have a credit balance?",
        "a": "No. You cannot pay out more physical cash than you hold, so cash always balances on the debit side or at nil. A bank account can go credit through an overdraft, which is one reason cash and bank columns must be kept separate in your head."
      }
    ],
    "targetQuery": "ts grewal class 11 ledger solutions",
    "hubSubjects": [
      "accounting"
    ]
  },
  {
    "board": "cbse",
    "slug": "class-11-accountancy-trial-balance-practice",
    "metaTitle": "TS Grewal Class 11 Trial Balance Practice and Answers",
    "metaDescription": "Trial balance practice in TS Grewal Class 11 style, 2025-26 edition: prepare, balance and error questions with full workings and CBSE marking notes.",
    "h1": "Trial Balance: Class 11 Practice in TS Grewal Chapter 14 Style",
    "quickAnswer": "In the 2025-26 TS Grewal Class 11 edition, Trial Balance is Chapter 14. Below are original questions on preparing a trial balance from ledger balances, finding capital as the balancing figure, placing awkward items like overdrafts and returns in the right column, and spotting the errors an agreed trial balance cannot catch, all fully worked.",
    "intro": "A trial balance question is free marks if your ledger knowledge is solid, and a slow puncture if it is not. In the 2025-26 TS Grewal edition this is Chapter 14, coming after the ledger and the subsidiary books. These original questions cover the whole examinable range: building a trial balance from a list of balances, deriving capital as the balancing figure, placing the trick items like overdrafts and returns, explaining the four errors an agreed trial balance hides, and using the doubling test to trace a difference. Each addition below is shown figure by figure, so check your running totals against mine as you go.",
    "sections": [
      {
        "heading": "Which column each balance belongs in",
        "body": "Everything in a trial balance follows from the nature of the account. Debit column: assets of every kind, expenses and losses, drawings, and sales returns. Credit column: liabilities including bank overdraft, capital, incomes and gains, purchases returns, and provisions such as provision for doubtful debts. The pairs that reverse student expectations are the returns, which always take the opposite column of their parent account, and the overdraft, which is a bank balance that belongs to the bank. Opening stock sits in the debit column, but closing stock normally stays out of the trial balance entirely, because it is not a ledger balance yet; it is a valuation made after the books close. If you can place all eight items in question 3 below without pausing, the preparation questions become pure addition."
      },
      {
        "heading": "What an agreed trial balance proves, and what it cannot",
        "body": "Agreement proves one thing only: the total of debit balances equals the total of credit balances, so the arithmetic of posting and balancing is internally consistent. It does not prove the books are correct. Four whole families of error leave the totals untouched: complete omission, where a transaction was never recorded on either side; errors of principle, where an amount sits in the wrong class of account but on the correct side, like repairs debited to Machinery; errors of commission, where the right side of the wrong personal account is used; and compensating errors that cancel each other out. CBSE-pattern papers use this as a 3 or 4 mark theory question, and the route to full marks is naming each error type and then saying explicitly why the two column totals still agree, which is what the model answer in question 4 does."
      },
      {
        "heading": "Tracing a difference fast",
        "body": "When your columns disagree in an exam, do not re-add everything from scratch. Find the difference first. If it divides by two, halve it and search for a balance of that size sitting in the wrong column, which is the situation in question 5. If it divides by nine, suspect a transposition, such as 2,700 written as 7,200. If it equals a whole balance from the list, an item was probably left out altogether. Check the column additions last, not first. This search order follows from how each error actually distorts the totals, and stating the test you are applying, for example the difference is twice Rs 2,700 so I am looking for a wrongly placed Rs 2,700 balance, earns method marks even before you find the culprit. Practise the order twice and it sticks."
      }
    ],
    "problems": [
      {
        "question": "From these balances on 31 March 2026, prepare a trial balance: capital Rs 3,00,000; machinery Rs 1,80,000; furniture Rs 40,000; opening stock Rs 40,000; purchases Rs 2,10,000; sales Rs 3,25,000; debtors Rs 65,000; creditors Rs 45,000; cash Rs 35,000; rent Rs 18,000; salaries Rs 52,000; drawings Rs 30,000.",
        "steps": [
          "Sort every balance by nature: assets, expenses and drawings go in the debit column; capital, liabilities and incomes go in the credit column.",
          "Debit column: machinery Rs 1,80,000, furniture Rs 40,000, opening stock Rs 40,000, purchases Rs 2,10,000, debtors Rs 65,000, cash Rs 35,000, rent Rs 18,000, salaries Rs 52,000, drawings Rs 30,000.",
          "Add in order: 1,80,000 + 40,000 = 2,20,000; + 40,000 = 2,60,000; + 2,10,000 = 4,70,000; + 65,000 = 5,35,000; + 35,000 = 5,70,000; + 18,000 = 5,88,000; + 52,000 = 6,40,000; + 30,000 = 6,70,000.",
          "Credit column: capital Rs 3,00,000, sales Rs 3,25,000, creditors Rs 45,000. Total = Rs 6,70,000.",
          "Both columns agree at Rs 6,70,000, so the trial balance tallies."
        ],
        "answer": "The trial balance totals Rs 6,70,000 in each column.",
        "markTip": "Two slips cost most marks here: drawings placed in the credit column next to capital, and opening stock forgotten because it feels like an old figure. Both belong in the debit column.",
        "variant": "Add a bank loan of Rs 55,000 and a computer costing Rs 55,000 to the list above. New totals? (Answer: Rs 7,25,000 in both columns)"
      },
      {
        "question": "A trader's ledger shows: plant Rs 2,50,000; stock Rs 60,000; debtors Rs 80,000; cash at bank Rs 45,000; wages Rs 35,000; purchases Rs 1,90,000; sales Rs 2,80,000; creditors Rs 70,000; bank loan Rs 90,000. The capital balance is missing. Prepare the trial balance and find capital.",
        "steps": [
          "Total the debit balances: plant, stock, debtors, bank, wages and purchases.",
          "Running total: 2,50,000 + 60,000 = 3,10,000; + 80,000 = 3,90,000; + 45,000 = 4,35,000; + 35,000 = 4,70,000; + 1,90,000 = 6,60,000.",
          "Total the known credit balances: sales Rs 2,80,000 + creditors Rs 70,000 + bank loan Rs 90,000 = Rs 4,40,000.",
          "Capital is whatever makes the credit column equal the debit column: Rs 6,60,000 minus Rs 4,40,000 = Rs 2,20,000."
        ],
        "answer": "Capital is Rs 2,20,000, and the trial balance totals Rs 6,60,000 in each column.",
        "markTip": "Say in words that capital is taken as the balancing figure. The examiner should see that you know it was derived from the totals, not given in the question.",
        "variant": "Debit balances total Rs 5,10,000, and the only known credits are sales Rs 2,05,000 and creditors Rs 65,000. Find capital. (Answer: Rs 2,40,000)"
      },
      {
        "question": "State the trial balance column for each item: purchases return, sales return, carriage inwards, commission received, bank overdraft, prepaid insurance, outstanding wages, drawings.",
        "steps": [
          "Returns take the opposite column of the account they reduce: purchases return goes to the credit column, sales return to the debit column.",
          "Carriage inwards is an expense, so debit. Commission received is an income, so credit.",
          "A bank overdraft is money owed to the bank, so credit. Prepaid insurance is an asset, so debit.",
          "Outstanding wages are a liability, so credit. Drawings reduce capital but carry a debit balance of their own."
        ],
        "answer": "Debit column: sales return, carriage inwards, prepaid insurance, drawings. Credit column: purchases return, commission received, bank overdraft, outstanding wages.",
        "markTip": "The returns pair is the favourite trap. Tie each return to its parent account and take the opposite side, and you will never mix them again.",
        "variant": "Which column for accrued income, and which for provision for doubtful debts? (Answer: accrued income debit, provision for doubtful debts credit)"
      },
      {
        "question": "A firm's trial balance agrees, yet the books contain all four of these: a credit sale to Asha never recorded anywhere; a machine repair of Rs 7,000 debited to the Machinery Account; Rs 3,000 received from Ravi credited to Kavi; purchases overcast by Rs 500 with sales also overcast by Rs 500. Explain why the trial balance still tallied.",
        "steps": [
          "Complete omission: the Asha sale touched neither side of the books, so both columns are equally understated and still agree.",
          "Error of principle: the Rs 7,000 sits in the wrong class of account, an asset instead of an expense, but on the correct debit side, so the totals are unaffected.",
          "Error of commission: the credit went to the wrong personal account, Kavi instead of Ravi, but a credit of Rs 3,000 exists either way.",
          "Compensating errors: the two Rs 500 overcasts fall on opposite sides and cancel each other out.",
          "Conclusion: an agreed trial balance proves arithmetic equality, not correctness of the books."
        ],
        "answer": "All four are errors a trial balance cannot disclose: complete omission, error of principle, error of commission to the wrong account, and compensating errors.",
        "markTip": "Name the error type, then state which totals it leaves untouched. The naming alone usually earns half the marks; the explanation collects the rest.",
        "variant": "Wages of Rs 10,000 were posted twice to the debit of the Wages Account. Would the trial balance still agree? (Answer: no, the debit column would exceed the credit column by Rs 10,000)"
      },
      {
        "question": "A trial balance shows a debit total of Rs 4,82,300 and a credit total of Rs 4,87,700. On checking, the rent account's debit balance of Rs 2,700 was found listed in the credit column. Show that correcting this makes the columns agree.",
        "steps": [
          "The difference is Rs 4,87,700 minus Rs 4,82,300 = Rs 5,400, which is exactly twice Rs 2,700. A balance on the wrong side always creates a difference of double its amount.",
          "Remove rent from the credit column: Rs 4,87,700 minus Rs 2,700 = Rs 4,85,000.",
          "Add rent to the debit column: Rs 4,82,300 + Rs 2,700 = Rs 4,85,000.",
          "Both columns now read Rs 4,85,000, so the trial balance agrees."
        ],
        "answer": "The corrected totals are Rs 4,85,000 in each column.",
        "markTip": "When a difference is even, halve it and hunt for a balance of that size on the wrong side. Writing the doubling test into your working earns method credit before you even find the culprit.",
        "variant": "Totals differ by Rs 1,800 because one balance sits on the wrong side. What size of balance do you search the ledger for? (Answer: Rs 900)"
      },
      {
        "question": "From these balances, prepare a trial balance and name the item most often misplaced: cash Rs 22,000; bank overdraft Rs 15,000; capital Rs 1,00,000; purchases Rs 88,000; sales Rs 1,26,000; wages Rs 14,000; furniture Rs 70,000; creditors Rs 18,000; drawings Rs 9,000; sales return Rs 6,000; purchases return Rs 2,000; stock on 1 April Rs 52,000.",
        "steps": [
          "Debit column: cash Rs 22,000, purchases Rs 88,000, wages Rs 14,000, furniture Rs 70,000, drawings Rs 9,000, sales return Rs 6,000, opening stock Rs 52,000.",
          "Running total: 22,000 + 88,000 = 1,10,000; + 14,000 = 1,24,000; + 70,000 = 1,94,000; + 9,000 = 2,03,000; + 6,000 = 2,09,000; + 52,000 = 2,61,000.",
          "Credit column: bank overdraft Rs 15,000, capital Rs 1,00,000, sales Rs 1,26,000, creditors Rs 18,000, purchases return Rs 2,000. Total = Rs 2,61,000.",
          "Both sides agree at Rs 2,61,000. The most commonly misplaced item is the bank overdraft, which students list as a debit out of habit because bank balances usually are debits."
        ],
        "answer": "The trial balance totals Rs 2,61,000 in each column; the bank overdraft is the classic misplaced item.",
        "markTip": "An overdraft is the bank's money sitting in your business, so it is a credit balance. Expect at least one twist item like this in any full-length trial balance question.",
        "variant": "Add machinery Rs 45,000 and a loan from Dev Rs 45,000 to the list. New totals? (Answer: Rs 3,06,000 in both columns)"
      }
    ],
    "faqs": [
      {
        "q": "Are these the actual TS Grewal Chapter 14 solutions?",
        "a": "No. The book's questions are copyrighted, so these are original questions written to test the same skills at the same difficulty as the 2025-26 Chapter 14. The methods shown, especially the running additions and the doubling test, apply to the book's questions unchanged."
      },
      {
        "q": "Is a trial balance an account?",
        "a": "No. It is a statement, a list of ledger balances drawn up on a particular date to check arithmetical accuracy. It is not part of the double entry system itself, which is why an item can be missing from it without any account being wrong."
      },
      {
        "q": "Does closing stock appear in the trial balance?",
        "a": "Normally no. Closing stock is a valuation made after the books are closed, so it is not a ledger balance and is given as additional information below the trial balance. It only enters the trial balance in the special case where purchases have been adjusted through a closing stock account."
      },
      {
        "q": "What should I do in an exam if my trial balance refuses to agree?",
        "a": "Run the ordered tests: difference divisible by two suggests a balance on the wrong side, divisible by nine suggests a transposition, equal to a listed balance suggests an omission, and only then re-add the columns. If time is short, state the difference, show the tests you ran, and move on; the method itself carries marks."
      }
    ],
    "targetQuery": "ts grewal class 11 trial balance solutions",
    "hubSubjects": [
      "accounting"
    ]
  },
  {
    "board": "cbse",
    "slug": "class-11-accountancy-depreciation-practice",
    "metaTitle": "TS Grewal Class 11 Depreciation Practice and Answers",
    "metaDescription": "Depreciation practice matched to TS Grewal Class 11 Chapter 15: SLM and WDV questions, asset sale workings, every calculation checked, marking notes.",
    "h1": "Depreciation: Class 11 Practice in TS Grewal Chapter 15 Style",
    "quickAnswer": "Depreciation is Chapter 15 in the 2025-26 TS Grewal Class 11 edition. It tests the straight line and written down value methods, part-year depreciation, asset accounts run over several years, and profit or loss on sale. Below are original questions on each of those, solved in full, with every calculation checked twice by hand.",
    "intro": "Depreciation, Chapter 15 in the 2025-26 TS Grewal edition, is the first Class 11 chapter where a single early slip quietly wrecks every later figure, so working discipline matters as much as method. The questions below are original, since the book's questions are copyrighted, but they test the identical skills: straight line and written down value calculations, part-year charges, a machinery account run over three years, and profit or loss on the sale of an asset. I recomputed every figure on this page twice, once forwards and once backwards from the answer, before it went up.",
    "sections": [
      {
        "heading": "The two methods, cleanly separated",
        "body": "Straight line method: depreciation = cost minus estimated scrap value, divided by useful life, or a fixed percent of original cost, and the charge is identical every year. Cost includes everything spent to make the asset usable: purchase price, freight, installation. Written down value method: a fixed percent applied to the opening book value of each year, so the charge is largest in year one and falls every year after, and the asset never quite reaches zero. The exam tells you which method and which rate to use; your job is to apply it without slipping. The single most valuable habit is a working note that builds the cost figure first, then a year-by-year line showing the base, the rate, the charge and the closing book value. Questions 1 to 3 below model exactly that layout."
      },
      {
        "heading": "Part years, sales, and the machinery account",
        "body": "Whenever an asset is bought or sold partway through the year, depreciation runs only for the months of ownership: the annual charge times months over twelve. On a sale, the order of operations is fixed and worth memorising: charge depreciation from the start of the year to the date of sale, compute book value as cost minus all depreciation to date, then compare book value with the sale proceeds. Proceeds above book value give a profit on sale; below it, a loss. In the Machinery Account the sale year shows the part-year depreciation, By Bank for the proceeds, and the profit or loss line that closes the asset out. Questions 4 and 5 walk through both situations, and the variant under question 5 flips the loss into a profit so you can test the comparison in both directions."
      },
      {
        "heading": "What Chapter 15 covers in 2025-26",
        "body": "In the 2025-26 edition, Depreciation is Chapter 15, sitting after Trial Balance. The chapter examines the meaning and causes of depreciation, the straight line and written down value methods with their merits, asset accounts prepared over several years, part-year calculations, the sale or disposal of an asset, and the alternative of keeping the asset at cost while accumulating charges in a Provision for Depreciation Account. The questions on this page use the direct method, crediting the asset itself, because that is where most exam marks sit, but the provision approach is examinable and the FAQ below sketches how it changes the accounts. Some solution sites number this chapter 13 or 14 following older editions, so match by topic name. Theory questions worth around 3 marks on the causes of depreciation or a comparison of the methods appear regularly, so keep one crisp paragraph ready for each."
      }
    ],
    "problems": [
      {
        "question": "A machine is bought for Rs 5,00,000 and Rs 20,000 is spent on its installation. Its estimated scrap value after 8 years is Rs 40,000. Compute the annual straight line depreciation and the rate of depreciation on original cost.",
        "steps": [
          "Total cost = Rs 5,00,000 + Rs 20,000 = Rs 5,20,000, because installation is capitalised into the asset.",
          "Depreciable amount = cost minus scrap value = Rs 5,20,000 minus Rs 40,000 = Rs 4,80,000.",
          "Annual depreciation = Rs 4,80,000 divided by 8 years = Rs 60,000.",
          "Rate on original cost = 60,000 divided by 5,20,000, times 100 = 11.54 percent, rounded to two decimals."
        ],
        "answer": "Annual depreciation is Rs 60,000; the rate is approximately 11.54 percent of original cost.",
        "markTip": "Forgetting to add installation to cost is the most common error here, and it corrupts both the annual charge and the rate. Show the cost build-up as its own working note.",
        "variant": "Cost Rs 2,50,000, scrap value Rs 10,000, useful life 6 years. Annual straight line depreciation? (Answer: Rs 40,000)"
      },
      {
        "question": "On 1 April 2023 a firm buys machinery for Rs 3,00,000 and charges depreciation at 10 percent per annum on original cost. Books close on 31 March each year. Show the Machinery Account for three years.",
        "steps": [
          "Annual depreciation = 10 percent of Rs 3,00,000 = Rs 30,000, the same every year under the straight line method.",
          "Year to 31 March 2024: debit side To Bank Rs 3,00,000; credit side By Depreciation Rs 30,000 and By Balance c/d Rs 2,70,000.",
          "Year to 31 March 2025: opens To Balance b/d Rs 2,70,000; credit side By Depreciation Rs 30,000 and By Balance c/d Rs 2,40,000.",
          "Year to 31 March 2026: opens at Rs 2,40,000; By Depreciation Rs 30,000 and By Balance c/d Rs 2,10,000.",
          "Check: three years at Rs 30,000 is Rs 90,000, and Rs 3,00,000 minus Rs 90,000 = Rs 2,10,000."
        ],
        "answer": "Closing balances: Rs 2,70,000 on 31 March 2024, Rs 2,40,000 on 31 March 2025, Rs 2,10,000 on 31 March 2026.",
        "markTip": "Under straight line on original cost the charge never changes. If your year two figure differs from year one, you have drifted into the written down value method without noticing.",
        "variant": "Same machine depreciated at 15 percent per annum on original cost. Balance after two years? (Answer: Rs 2,10,000)"
      },
      {
        "question": "Equipment costing Rs 4,00,000 is depreciated at 15 percent per annum by the written down value method. Compute the depreciation for each of the first three years and the book value at the end of year three.",
        "steps": [
          "Year 1: 15 percent of Rs 4,00,000 = Rs 60,000; closing book value Rs 3,40,000.",
          "Year 2: 15 percent of Rs 3,40,000 = Rs 51,000; closing book value Rs 2,89,000.",
          "Year 3: 15 percent of Rs 2,89,000 = Rs 43,350; closing book value Rs 2,45,650.",
          "Notice the charge falls each year because the base is the shrinking book value, not the original cost."
        ],
        "answer": "Depreciation is Rs 60,000, Rs 51,000 and Rs 43,350; the book value at the end of year three is Rs 2,45,650.",
        "markTip": "Carry the exact book value forward each year. Rounding early is how answers drift by a few rupees and lose the accuracy mark at the final figure.",
        "variant": "A machine costing Rs 1,00,000 is depreciated at 20 percent written down value. Year 2 depreciation? (Answer: Rs 16,000)"
      },
      {
        "question": "A machine is bought on 1 October 2024 for Rs 2,40,000. Depreciation is 10 percent per annum on original cost and books close on 31 March. Find the depreciation for 2024-25 and 2025-26 and the book value on 31 March 2026.",
        "steps": [
          "2024-25 holds the machine for only six months, October to March, so depreciation = Rs 2,40,000 x 10 percent x 6/12 = Rs 12,000.",
          "Book value on 31 March 2025 = Rs 2,40,000 minus Rs 12,000 = Rs 2,28,000.",
          "2025-26 is a full year, so depreciation = Rs 24,000.",
          "Book value on 31 March 2026 = Rs 2,28,000 minus Rs 24,000 = Rs 2,04,000."
        ],
        "answer": "Depreciation is Rs 12,000 for 2024-25 and Rs 24,000 for 2025-26; the book value on 31 March 2026 is Rs 2,04,000.",
        "markTip": "Write the fraction of the year into the calculation line, 6/12 here. Examiners award the time apportionment separately from the arithmetic, so showing it protects the mark.",
        "variant": "A machine bought on 1 January 2025 for Rs 1,80,000, at 10 percent per annum on cost. Depreciation for 2024-25? (Answer: Rs 4,500, for three months)"
      },
      {
        "question": "A machine bought on 1 April 2023 for Rs 1,60,000 is depreciated at 10 percent per annum on original cost. It is sold on 30 September 2025 for Rs 1,10,000. Find the profit or loss on sale.",
        "steps": [
          "Annual depreciation = 10 percent of Rs 1,60,000 = Rs 16,000. Charge it in full for 2023-24 and 2024-25: Rs 32,000.",
          "In 2025-26 the machine is used for six months up to the sale: Rs 16,000 x 6/12 = Rs 8,000.",
          "Total depreciation to the date of sale = Rs 40,000, so book value at sale = Rs 1,60,000 minus Rs 40,000 = Rs 1,20,000.",
          "Sale proceeds of Rs 1,10,000 against a book value of Rs 1,20,000 give a loss on sale of Rs 10,000.",
          "In the Machinery Account the final year shows By Depreciation Rs 8,000, By Bank Rs 1,10,000 and By Loss on Sale Rs 10,000, which together close the account."
        ],
        "answer": "There is a loss on sale of Rs 10,000.",
        "markTip": "The step everyone skips is depreciation from 1 April to the sale date. Charge it first, then compare book value with the price received; doing the comparison on last year's book value is the classic error.",
        "variant": "The same machine is sold on the same date for Rs 1,27,000 instead. Result? (Answer: a profit on sale of Rs 7,000)"
      },
      {
        "question": "An asset costs Rs 2,00,000 and the rate of depreciation is 20 percent per annum. Compare the year 2 depreciation under the straight line method and the written down value method.",
        "steps": [
          "Straight line: 20 percent of original cost every year, so year 2 = Rs 40,000, identical to year 1.",
          "Written down value: year 1 = Rs 40,000, leaving a book value of Rs 1,60,000; year 2 = 20 percent of Rs 1,60,000 = Rs 32,000.",
          "The year 2 difference is Rs 8,000, and the gap widens every year after because the WDV base keeps shrinking."
        ],
        "answer": "Year 2 depreciation is Rs 40,000 under the straight line method and Rs 32,000 under the written down value method.",
        "markTip": "In compare-the-methods questions, one sentence on why the WDV charge falls, the shrinking base, earns the theory mark that pure numbers miss.",
        "variant": "Same asset: what is the year 3 depreciation under the written down value method? (Answer: Rs 25,600)"
      }
    ],
    "faqs": [
      {
        "q": "Are these the actual TS Grewal Chapter 15 solutions?",
        "a": "No. The book's questions are copyrighted, so every question here is original, written to match the calculation types and difficulty of Chapter 15 in the 2025-26 edition. The layouts shown, cost build-up first, then year-by-year lines, work directly on the book's own questions."
      },
      {
        "q": "Which method does CBSE prefer, straight line or written down value?",
        "a": "Neither. The question always states the method and the rate, and both are examinable. What is worth preparing is one short comparison paragraph, equal charge versus falling charge, and the reason the written down value base shrinks, because that turns up as a 3-mark theory question."
      },
      {
        "q": "What is the provision for depreciation method?",
        "a": "Instead of crediting the asset each year, the asset stays in the books at original cost and the yearly charge accumulates in a separate Provision for Depreciation Account. On a sale, both the cost and the accumulated provision are transferred to an Asset Disposal Account, which then reveals the profit or loss. It is part of the Class 11 chapter and worth one careful practice run."
      },
      {
        "q": "Why is my written down value answer off by a few rupees?",
        "a": "Almost always early rounding. Carry the exact book value from year to year, keep paise if they arise, and round only the final answer. If a question gives an awkward rate, the examiner expects the unrounded chain and a sensibly rounded final figure."
      }
    ],
    "targetQuery": "ts grewal class 11 depreciation solutions",
    "hubSubjects": [
      "accounting"
    ]
  },
  {
    "board": "waec",
    "slug": "wassce-2025-maths-theory-practice",
    "metaTitle": "WAEC 2025 Mathematics Theory Questions and Solutions",
    "metaDescription": "Free WASSCE 2025 maths theory practice: what the paper covered, its 13-question structure, how marks are awarded, and original solved questions.",
    "h1": "WASSCE 2025 Maths Theory: Practice Questions and Solutions",
    "quickAnswer": "The WASSCE 2025 core mathematics theory paper had 13 questions: five compulsory in Section A worth 40 marks, then five from eight in Section B worth 60 marks, in 2 hours 30 minutes. Candidates reported questions on average speed, simple interest, mensuration, trigonometry and coordinate geometry. Below is that structure explained, plus original practice questions solved in full.",
    "intro": "I should be upfront: I sit Cambridge exams, not WASSCE, so nothing on this page is exam-hall memory. I built it from what candidates and prep sites reported about the 2025 core mathematics theory paper, then wrote original practice questions matching that style and difficulty. The real past questions belong to WAEC and I do not copy them. What you get instead are questions testing the same topics the 2025 paper is reported to have tested, solved line by line the way an examiner wants to see working. Read the structure notes first, then attempt each question before opening the solution.",
    "sections": [
      {
        "heading": "What the 2025 theory paper reportedly covered",
        "body": "WAEC does not publish a topic list, so this comes from candidate discussions and prep sites such as Kuulchat that walk through each paper after the sitting. For 2025, the compulsory Section A is reported to have tested an average speed word problem, simple interest on an investment, the volume of a hemisphere, an angle of depression problem, and coordinate geometry using midpoint and distance. Reported Section B questions include ratio with percentage increase, areas and perimeters of triangles, work rates, and a distance question using latitude and longitude. The usual WAEC staples, statistics, probability, bearings and circle geometry, fill out the choice section in most years. One caution: Ghana and Nigeria sit different series of the WASSCE, and first and second series papers differ too, so treat any reported list as a guide rather than a guarantee."
      },
      {
        "heading": "Paper structure, marks and timing",
        "body": "The theory paper, Paper 2, lasts 2 hours 30 minutes and carries 100 marks. There are 13 questions in two sections. Section A has five shorter compulsory questions worth 40 marks in total, roughly 8 marks each. Section B has eight longer questions of about 12 marks each, and you answer any five of them for 60 marks. So you answer ten questions in 150 minutes. A workable budget is about 10 minutes per Section A question and 18 to 20 minutes per Section B question, which leaves a few minutes to read all of Section B before choosing. Choosing well is a skill: pick the five topics you have actually drilled, not the five questions that look shortest on the page."
      },
      {
        "heading": "How WAEC marks theory answers",
        "body": "WAEC marking schemes award M marks for method, A marks for accuracy and B marks for independent correct statements. An A mark usually cannot be earned without the M mark before it, which is why a bare answer with no working can score almost nothing even when it is right. The flip side is generous: a wrong final answer with correct method keeps most of the marks, and many schemes allow follow-through, so an early slip is not fatal if your later working stays consistent. Give answers to the accuracy asked for, often three significant figures, use the value of pi the paper tells you to use, and always write units. These are small habits that are worth real marks over ten questions."
      }
    ],
    "problems": [
      {
        "question": "A lorry travels the first 100 km of a journey at an average speed of 50 km/h and the remaining 120 km at an average speed of 40 km/h. Calculate the average speed for the whole journey.",
        "steps": [
          "Time for the first stage: 100 divided by 50 equals 2 hours.",
          "Time for the second stage: 120 divided by 40 equals 3 hours.",
          "Total distance is 100 plus 120 equals 220 km, and total time is 2 plus 3 equals 5 hours.",
          "Average speed equals total distance over total time: 220 divided by 5 equals 44 km/h."
        ],
        "answer": "44 km/h",
        "markTip": "Section A style, about 8 marks: M1 for each stage time, M1 for total distance over total time, A1 for 44 km/h with units. Averaging the two speeds to get 45 km/h is the classic error and loses the final marks.",
        "variant": "A cyclist covers 120 km at 40 km/h and then 60 km at 60 km/h. Find the average speed for the whole journey. [Answer: 45 km/h]"
      },
      {
        "question": "Efua invests GHc 8,000 in an account paying simple interest. After 3 years the amount in the account is GHc 9,440. Find (a) the rate of interest per annum, (b) how many years in total the money must stay invested for the amount to reach GHc 10,400 at the same rate.",
        "steps": [
          "Interest earned in 3 years: 9,440 minus 8,000 equals GHc 1,440.",
          "Interest per year: 1,440 divided by 3 equals GHc 480.",
          "Rate: 480 divided by 8,000, times 100, equals 6 percent per annum.",
          "For part (b), total interest needed: 10,400 minus 8,000 equals GHc 2,400.",
          "Time: 2,400 divided by 480 equals 5 years."
        ],
        "answer": "(a) 6 percent per annum (b) 5 years",
        "markTip": "M1 for finding the interest, M1 for the rate formula, A1 for 6 percent; then M1 A1 for the time. If you misread amount as interest, the follow-through rule usually protects your part (b) method marks.",
        "variant": "N50,000 invested at simple interest amounts to N59,000 in 4 years. Find the rate per annum. [Answer: 4.5 percent]"
      },
      {
        "question": "The volume of a solid hemisphere is 2,425.5 cm^3. Taking pi as 22/7, calculate (a) the radius of the hemisphere, (b) its total surface area.",
        "steps": [
          "Volume of a hemisphere is (2/3) pi r^3, so (2/3) times (22/7) times r^3 equals 2,425.5.",
          "Rearrange: r^3 equals 2,425.5 times 21 divided by 44 equals 1,157.625.",
          "Cube root: r equals 10.5 cm.",
          "Total surface area of a solid hemisphere is the curved surface plus the flat circular face: 2 pi r^2 plus pi r^2 equals 3 pi r^2.",
          "Substitute: 3 times (22/7) times 10.5^2 equals 3 times (22/7) times 110.25 equals 1,039.5 cm^2."
        ],
        "answer": "(a) 10.5 cm (b) 1,039.5 cm^2",
        "markTip": "M1 for the volume formula, M1 for isolating r^3, A1 for 10.5 cm; then M1 for 3 pi r^2 and A1. Forgetting the flat face and giving 2 pi r^2 is the most common way to lose the last two marks.",
        "variant": "A solid hemisphere has radius 7 cm. Taking pi as 22/7, find its volume. [Answer: approximately 718.7 cm^3]"
      },
      {
        "question": "From the top of a vertical cliff 60 m high, the angle of depression of a boat at sea is 35 degrees. The boat sails on a straight line towards the foot of the cliff until the angle of depression becomes 55 degrees. Calculate, correct to three significant figures, the distance the boat sailed.",
        "steps": [
          "The angle of depression from the top equals the angle of elevation from the boat, so each position forms a right triangle with the 60 m cliff.",
          "First distance from the cliff: 60 divided by tan 35 equals 60 divided by 0.7002 equals 85.7 m.",
          "Second distance: 60 divided by tan 55 equals 60 divided by 1.4281 equals 42.0 m.",
          "Distance sailed: 85.7 minus 42.0 equals 43.7 m."
        ],
        "answer": "43.7 m (3 s.f.)",
        "markTip": "B1 for a correct diagram with both angles marked at the boat positions, M1 A1 for each distance, A1 for the subtraction. Mixing up which distance is larger, or putting the angle at the top of the triangle, costs heavily, so draw first.",
        "variant": "From the top of a tower 45 m high, the angle of depression of a car is 40 degrees. How far is the car from the foot of the tower, to three significant figures? [Answer: 53.6 m]"
      }
    ],
    "faqs": [
      {
        "q": "Are these the real WAEC 2025 theory questions?",
        "a": "No. WAEC past questions are copyrighted, so this site never reproduces them. These are original questions written in the same format and difficulty, based on the topics the 2025 paper is reported to have covered. For the official questions, use WAEC's own past question booklets or platforms."
      },
      {
        "q": "How many questions do I answer in the WASSCE core maths theory paper?",
        "a": "Ten out of 13: all five compulsory questions in Section A, worth 40 marks, and any five of the eight questions in Section B, worth 60 marks. The paper lasts 2 hours 30 minutes and carries 100 marks."
      },
      {
        "q": "Does WAEC give marks for working even if the final answer is wrong?",
        "a": "Yes. Marking schemes award M marks for correct method and A marks for accuracy, and many parts allow follow-through from an earlier slip. Showing every step protects most of the marks; a correct answer with no working can score very little."
      },
      {
        "q": "Which topics should I revise first for the theory paper?",
        "a": "The recurring ones: algebra, mensuration, statistics, probability, bearings with trigonometry, and circle geometry. This site has a solved practice page for each of those topics written in the same WASSCE style as this one."
      }
    ],
    "targetQuery": "waec 2025 mathematics theory questions and solutions",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "waec",
    "slug": "wassce-maths-algebra-practice",
    "metaTitle": "WAEC Past Questions on Algebra: Solved WASSCE Practice",
    "metaDescription": "Original WAEC algebra practice: simultaneous equations, quadratics, variation and change of subject, solved step by step with WASSCE marking notes.",
    "h1": "WAEC Algebra Practice Questions, Solved in WASSCE Style",
    "quickAnswer": "WAEC algebra theory questions usually test simultaneous linear equations, quadratic equations by factorisation, change of subject, variation, and word problems about prices or ages that turn into equations. This page gives five original questions in that exact WASSCE style, each solved step by step with notes on how the method and accuracy marks are shared.",
    "intro": "Algebra is the most predictable part of the WASSCE core maths theory paper, which is exactly why it is worth drilling. Simultaneous equations, quadratics and change of subject appear in some form nearly every year, either directly or hidden inside a word problem about prices, ages or a journey. The five questions below are my own, written in WASSCE style at WASSCE difficulty, not copied from any past paper. Each is solved in full, with a note on where the method marks sit, because in a WAEC theory paper the working earns more than the final answer does.",
    "sections": [
      {
        "heading": "How algebra shows up in the theory paper",
        "body": "Algebra rarely gets a whole Section B question to itself; instead it is spread through the paper. A Section A question might ask you to solve a pair of simultaneous equations or make a variable the subject of a formula. A Section B question often opens with a word problem, two unknowns and two conditions, that you must translate into equations before solving. Quadratics appear both as solve-this equations and inside area or number problems. Variation, y varies directly as x and inversely as z squared, is a WAEC favourite because it tests whether you can find the constant first. If you can translate words into equations quickly, algebra becomes the most reliable marks on the paper."
      },
      {
        "heading": "Showing working the way examiners want",
        "body": "For simultaneous equations, state your method, elimination or substitution, and show the step where one variable disappears; that line usually carries an M mark. For quadratics, show the factorised form before writing the roots, because the factorisation is where the method mark lives. When changing the subject, write one manipulation per line rather than jumping three steps at once; a skipped step that goes wrong loses both the M and the A mark. Finally, substitute your answers back into an original equation when you have a spare minute. WAEC does not award marks for checking, but it catches the sign slips that otherwise cost accuracy marks silently."
      }
    ],
    "problems": [
      {
        "question": "Solve the simultaneous equations 3x + 2y = 12 and 2x - y = 1.",
        "steps": [
          "From the second equation, y equals 2x minus 1.",
          "Substitute into the first: 3x plus 2(2x minus 1) equals 12.",
          "Expand: 3x plus 4x minus 2 equals 12, so 7x equals 14 and x equals 2.",
          "Then y equals 2(2) minus 1 equals 3.",
          "Check in the first equation: 3(2) plus 2(3) equals 12. Correct."
        ],
        "answer": "x = 2, y = 3",
        "markTip": "M1 for a correct substitution or elimination step, A1 for x, A1 for y. Writing only the answers with no visible method can score just one mark out of three or four.",
        "variant": "Solve 2x + y = 7 and 3x - y = 8. [Answer: x = 3, y = 1]"
      },
      {
        "question": "Solve the equation 2x^2 - 5x - 3 = 0.",
        "steps": [
          "Look for two numbers that multiply to 2 times negative 3, which is negative 6, and add to negative 5: they are negative 6 and 1.",
          "Rewrite: 2x^2 minus 6x plus x minus 3 equals 0.",
          "Factor in pairs: 2x(x minus 3) plus 1(x minus 3) equals 0, so (2x plus 1)(x minus 3) equals 0.",
          "Set each factor to zero: x equals negative 1/2 or x equals 3."
        ],
        "answer": "x = -1/2 or x = 3",
        "markTip": "M1 for a correct factorisation or correct use of the quadratic formula, A1 for each root. Unless the question says by factorisation, the formula is equally acceptable, but show the substitution line.",
        "variant": "Solve 3x^2 + x - 2 = 0. [Answer: x = 2/3 or x = -1]"
      },
      {
        "question": "Make x the subject of the formula y = (2x + 3)/(x - 5).",
        "steps": [
          "Multiply both sides by (x minus 5): y(x minus 5) equals 2x plus 3.",
          "Expand: xy minus 5y equals 2x plus 3.",
          "Collect x terms on one side: xy minus 2x equals 5y plus 3.",
          "Factor out x: x(y minus 2) equals 5y plus 3.",
          "Divide: x equals (5y plus 3)/(y minus 2)."
        ],
        "answer": "x = (5y + 3)/(y - 2)",
        "markTip": "M1 for clearing the fraction, M1 for collecting the x terms together, A1 for the final form. The mark scheme wants x isolated once, so leaving an x on both sides scores no A mark.",
        "variant": "Make t the subject of s = (3t - 1)/(t + 2). [Answer: t = (2s + 1)/(3 - s)]"
      },
      {
        "question": "y varies directly as x and inversely as the square of z. When x = 4 and z = 1, y = 8. Find (a) the equation connecting x, y and z, (b) the value of y when x = 27 and z = 3.",
        "steps": [
          "Write the relationship with a constant: y equals kx/z^2.",
          "Substitute the given values: 8 equals k times 4 divided by 1, so k equals 2.",
          "The equation is y equals 2x/z^2.",
          "For part (b): y equals 2 times 27 divided by 3^2 equals 54 divided by 9 equals 6."
        ],
        "answer": "(a) y = 2x/z^2 (b) y = 6",
        "markTip": "B1 for the correct relationship with k, M1 A1 for finding k, M1 A1 for part (b). Skipping straight to numbers without ever writing y = kx/z^2 forfeits the first mark.",
        "variant": "y varies directly as x^2 and inversely as z. When x = 2 and z = 1, y = 12. Find y when x = 4 and z = 6. [Answer: y = 8]"
      },
      {
        "question": "Four pens and three exercise books cost N1,100. Two pens and five exercise books cost N900. Find the cost of one pen and of one exercise book.",
        "steps": [
          "Let a pen cost p naira and a book cost b naira: 4p plus 3b equals 1,100 and 2p plus 5b equals 900.",
          "Multiply the second equation by 2: 4p plus 10b equals 1,800.",
          "Subtract the first equation: 7b equals 700, so b equals 100.",
          "Substitute back: 4p plus 300 equals 1,100, so 4p equals 800 and p equals 200."
        ],
        "answer": "A pen costs N200 and an exercise book costs N100",
        "markTip": "B1 for defining variables and forming both equations, that step alone often carries two marks, then M1 for elimination, A1 for each value. Always answer in words with units at the end.",
        "variant": "Three oranges and two mangoes cost GHc 13, while one orange and four mangoes cost GHc 11. Find the cost of each fruit. [Answer: orange GHc 3, mango GHc 2]"
      }
    ],
    "faqs": [
      {
        "q": "Can I use the quadratic formula instead of factorising?",
        "a": "Yes, unless the question explicitly says by factorisation or by completing the square. Write the formula, show the substitution line, then simplify. The method mark attaches to that substitution, not to the memorised formula."
      },
      {
        "q": "How many marks is a typical WAEC algebra question worth?",
        "a": "A Section A algebra question is usually around 8 marks; inside Section B, algebra is often one part of a 12 or 13 mark question. Forming the equations from a word problem typically carries two or three marks before you solve anything."
      },
      {
        "q": "Are these real WAEC past questions on algebra?",
        "a": "No. They are original questions I wrote in the WASSCE format at the same difficulty, because real past papers are WAEC copyright. The topics and mark structure mirror what the theory paper tests year after year."
      }
    ],
    "targetQuery": "waec past questions on algebra",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "waec",
    "slug": "wassce-maths-geometry-circle-practice",
    "metaTitle": "WAEC Questions on Circle Geometry: Solved Practice",
    "metaDescription": "Circle geometry practice in WASSCE style: angle at centre, cyclic quadrilaterals, tangents and chords, all solved step by step with marking notes.",
    "h1": "WAEC Circle Geometry Practice Questions, Fully Solved",
    "quickAnswer": "WAEC circle geometry questions test a small set of theorems: the angle at the centre is twice the angle at the circumference, angles in the same segment are equal, opposite angles of a cyclic quadrilateral sum to 180 degrees, the angle in a semicircle is 90 degrees, and tangent properties. Here are five original questions in WASSCE style, solved with reasons stated the way examiners expect.",
    "intro": "Circle geometry frightens people because the diagrams look busy, but the theory behind a WAEC circle question is a short list of theorems that never changes. Once you can name which theorem a diagram is using, the marks come quickly, and WAEC actually awards marks for stating the reason, not just the number. The five questions below are original, written in the WASSCE style rather than copied from past papers. I sit Cambridge exams myself, and circle theorems are one of the few topics that are almost identical across both systems, so this is familiar ground.",
    "sections": [
      {
        "heading": "The circle theorems WAEC actually tests",
        "body": "Five theorems cover nearly every WASSCE circle question. First, the angle a chord subtends at the centre is twice the angle it subtends at the circumference on the same arc. Second, angles in the same segment, standing on the same chord, are equal. Third, opposite angles of a cyclic quadrilateral add up to 180 degrees. Fourth, the angle in a semicircle is a right angle. Fifth, tangent facts: a tangent is perpendicular to the radius at the point of contact, and the angle between a tangent and a chord equals the angle in the alternate segment. Add the isosceles triangle formed by two radii and you can unlock almost any diagram WAEC draws."
      },
      {
        "heading": "How to earn the marks, not just the answer",
        "body": "WAEC circle questions usually say give reasons for your answers, and the mark scheme splits marks between the value and the reason. So write angle ACB equals 64 degrees, angle at centre is twice angle at circumference, on one line. The exact wording is flexible but there must be a recognisable theorem, not just because of the circle. Second habit: diagrams in the paper are not drawn to scale, so never measure with a protractor; an answer that only a measurement could produce scores zero. Third, when a diagram has two radii to points on the circle, mark the isosceles triangle immediately. That one observation is the hidden step in a large share of these questions."
      }
    ],
    "problems": [
      {
        "question": "A, B and C are points on a circle with centre O, with C on the major arc AB. Angle AOB = 128 degrees. Find, with reasons, (a) angle ACB, (b) angle OAB.",
        "steps": [
          "Part (a): the angle at the centre is twice the angle at the circumference standing on the same arc AB.",
          "So angle ACB equals 128 divided by 2 equals 64 degrees.",
          "Part (b): OA and OB are radii, so triangle OAB is isosceles with angle OAB equal to angle OBA.",
          "Angles in a triangle sum to 180: angle OAB equals (180 minus 128) divided by 2 equals 26 degrees."
        ],
        "answer": "(a) angle ACB = 64 degrees (b) angle OAB = 26 degrees",
        "markTip": "Each part is typically value plus reason: A1 for 64 with B1 for naming the centre theorem, then M1 for the isosceles observation and A1 for 26. Reasons left out can cost half the marks.",
        "variant": "With the same setup, angle AOB = 146 degrees. Find angle ACB. [Answer: 73 degrees]"
      },
      {
        "question": "PQRS is a cyclic quadrilateral. Angle QPS = 74 degrees and angle PQR = 112 degrees. Find, with reasons, angle QRS and angle PSR.",
        "steps": [
          "Opposite angles of a cyclic quadrilateral are supplementary, they add to 180 degrees.",
          "Angle QRS is opposite angle QPS: 180 minus 74 equals 106 degrees.",
          "Angle PSR is opposite angle PQR: 180 minus 112 equals 68 degrees.",
          "Check: 74 plus 112 plus 106 plus 68 equals 360, the angle sum of a quadrilateral. Correct."
        ],
        "answer": "angle QRS = 106 degrees, angle PSR = 68 degrees",
        "markTip": "A1 plus reason for each angle. The quickest self-check is that all four angles must total 360 degrees; if they do not, one of your opposite pairs is wrong.",
        "variant": "In cyclic quadrilateral ABCD, angle A = 81 degrees and angle B = 95 degrees. Find angles C and D. [Answer: angle C = 99 degrees, angle D = 85 degrees]"
      },
      {
        "question": "TA is a tangent to a circle at A, and AB is a chord. C is a point on the major arc AB, and O is the centre. Angle TAB = 58 degrees. Find, with reasons, (a) angle ACB, (b) angle AOB.",
        "steps": [
          "Part (a): the angle between a tangent and a chord equals the angle in the alternate segment.",
          "So angle ACB equals angle TAB equals 58 degrees.",
          "Part (b): the angle at the centre is twice the angle at the circumference on the same arc.",
          "So angle AOB equals 2 times 58 equals 116 degrees."
        ],
        "answer": "(a) angle ACB = 58 degrees (b) angle AOB = 116 degrees",
        "markTip": "The alternate segment theorem is the least-known theorem on the list, and examiners reward naming it. A1 plus B1 for each part; quoting tangent perpendicular to radius here is the wrong reason and loses the reason mark.",
        "variant": "A tangent at P makes an angle of 47 degrees with chord PQ. Find the angle in the alternate segment. [Answer: 47 degrees]"
      },
      {
        "question": "AB is a diameter of a circle and C is a point on the circle. Angle CAB = 37 degrees. Find, with reasons, angle CBA.",
        "steps": [
          "The angle in a semicircle is a right angle, so angle ACB equals 90 degrees.",
          "Angles in a triangle sum to 180 degrees.",
          "Angle CBA equals 180 minus 90 minus 37 equals 53 degrees."
        ],
        "answer": "angle CBA = 53 degrees",
        "markTip": "B1 for stating angle ACB is 90 with the semicircle reason, then A1 for 53. The word diameter in a question is almost always a signal to use this theorem first.",
        "variant": "AB is a diameter and angle CAB = 29 degrees. Find angle CBA. [Answer: 61 degrees]"
      },
      {
        "question": "A chord of a circle is 16 cm long and its distance from the centre is 6 cm. Calculate (a) the radius of the circle, (b) the circumference, taking pi = 3.142, correct to one decimal place.",
        "steps": [
          "The perpendicular from the centre bisects the chord, giving half-length 8 cm.",
          "The radius, half-chord and distance form a right triangle: r^2 equals 8^2 plus 6^2 equals 64 plus 36 equals 100.",
          "So r equals 10 cm.",
          "Circumference equals 2 pi r equals 2 times 3.142 times 10 equals 62.84, which is 62.8 cm to one decimal place."
        ],
        "answer": "(a) 10 cm (b) 62.8 cm",
        "markTip": "B1 for the bisected chord, M1 A1 for Pythagoras, M1 A1 for the circumference. Using 16 instead of 8 in Pythagoras is the standard error and it kills both accuracy marks.",
        "variant": "A chord 24 cm long is 5 cm from the centre. Find the radius. [Answer: 13 cm]"
      }
    ],
    "faqs": [
      {
        "q": "Do I have to quote circle theorems word for word?",
        "a": "No, but you must give a recognisable reason for each angle when the question says with reasons. Something like angle at centre is twice angle at circumference is enough; a bare number is not."
      },
      {
        "q": "Can I measure angles from the diagram in the exam?",
        "a": "No. WAEC diagrams are not drawn to scale, and the mark scheme only credits values obtained by reasoning. If your answer could only come from measuring, it scores nothing."
      },
      {
        "q": "Are these actual WAEC circle geometry past questions?",
        "a": "No, they are original questions in the WASSCE format and difficulty. WAEC owns its past papers, so I write fresh questions that exercise exactly the same theorems the real paper uses."
      }
    ],
    "targetQuery": "waec questions on circle geometry",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "waec",
    "slug": "wassce-maths-statistics-practice",
    "metaTitle": "WAEC Past Questions on Statistics: Solved Practice",
    "metaDescription": "Statistics practice in WASSCE style: mean, median and mode, frequency tables, grouped data, cumulative frequency and pie charts, all fully solved.",
    "h1": "WAEC Statistics Practice Questions, Solved Step by Step",
    "quickAnswer": "WAEC statistics theory questions ask for the mean, median and mode from raw data or frequency tables, means of grouped data using midpoints, medians and quartiles from cumulative frequency, and pie chart calculations. This page works through five original questions in WASSCE style with every table and formula shown in full.",
    "intro": "Statistics is the closest thing the WASSCE theory paper has to guaranteed marks, because the methods are procedures: build the table, apply the formula, state the answer with units. Almost every year Section B carries a statistics question worth around 12 marks, often with a cumulative frequency curve or a grouped frequency table. The five questions below are original, written to match that style and difficulty rather than copied from any WAEC paper. I have laid out every table in words so you can rebuild it on paper, which is honestly how you should practise, since the table itself carries marks.",
    "sections": [
      {
        "heading": "What WAEC statistics questions look like",
        "body": "The progression is predictable. Easiest: a list of raw numbers, find the mean, median and mode. Next: an ungrouped frequency table, where the mean is the sum of fx divided by the sum of f, and the median needs cumulative counting. Then grouped data: you take class midpoints, multiply by frequencies and divide, and the median or quartiles come from an interpolation formula or from reading a cumulative frequency curve drawn at upper class boundaries. Pie charts appear regularly too, converting sector angles to amounts and back. A full Section B question often chains these: complete a table, calculate the mean, draw the ogive, then read off the median and interquartile range."
      },
      {
        "heading": "Table marks and boundary traps",
        "body": "In a WAEC statistics question the table is not scratch work, it is marked. Columns for midpoint, fx and cumulative frequency each attract B marks, so draw them neatly and total them visibly. The classic trap is class boundaries: for classes like 21 to 30, the true boundaries are 20.5 and 30.5, and both the interpolation formula and the ogive must use them. Plotting an ogive against upper class limits instead of upper boundaries loses marks even when the shape looks right. Give means to the accuracy demanded, usually one or two decimal places, keep units like marks or kg on final answers, and remember the median position for grouped work is n over 2, not n plus 1 over 2."
      }
    ],
    "problems": [
      {
        "question": "The marks of ten students in a test are 4, 6, 5, 8, 6, 7, 6, 9, 5 and 4. Find (a) the mean, (b) the median, (c) the mode.",
        "steps": [
          "Sum the marks: 4 plus 6 plus 5 plus 8 plus 6 plus 7 plus 6 plus 9 plus 5 plus 4 equals 60.",
          "Mean equals 60 divided by 10 equals 6.",
          "Arrange in order: 4, 4, 5, 5, 6, 6, 6, 7, 8, 9. With ten values the median is the average of the 5th and 6th: (6 plus 6) divided by 2 equals 6.",
          "The mode is the most frequent value: 6 appears three times."
        ],
        "answer": "(a) mean = 6 (b) median = 6 (c) mode = 6",
        "markTip": "M1 A1 for the mean, B1 for ordering before finding the median, A1 for the median, B1 for the mode. Forgetting to reorder the data before taking the middle is the classic dropped mark.",
        "variant": "Find the mean, median and mode of 2, 3, 7, 3, 5, 3, 7, 2, 8, 5. [Answer: mean 4.5, median 4, mode 3]"
      },
      {
        "question": "The table shows the scores of 20 students: score 1 with frequency 3, score 2 with frequency 5, score 3 with frequency 6, score 4 with frequency 4, score 5 with frequency 2. Calculate (a) the mean score, (b) the median, (c) the mode.",
        "steps": [
          "Compute fx for each row: 3, 10, 18, 16 and 10. The sum of fx is 57 and the sum of f is 20.",
          "Mean equals 57 divided by 20 equals 2.85.",
          "Cumulative frequencies are 3, 8, 14, 18, 20. The median is the average of the 10th and 11th values, and both fall where the cumulative frequency first reaches 14, at score 3.",
          "So the median is 3, and the mode is the score with the largest frequency, which is 3."
        ],
        "answer": "(a) mean = 2.85 (b) median = 3 (c) mode = 3",
        "markTip": "B1 for a correct fx column, M1 A1 for the mean, M1 A1 for locating the median by cumulative frequency. Dividing 57 by 5, the number of rows, instead of 20 is the error the question is designed to catch.",
        "variant": "Scores 0 to 4 have frequencies 2, 4, 7, 5 and 2. Find the mean. [Answer: 2.05]"
      },
      {
        "question": "The masses, in kg, of 30 students are grouped as: 40 to 44 with frequency 4, 45 to 49 with frequency 8, 50 to 54 with frequency 10, 55 to 59 with frequency 6, 60 to 64 with frequency 2. Calculate the mean mass.",
        "steps": [
          "Take class midpoints: 42, 47, 52, 57 and 62.",
          "Multiply by frequencies to get fx: 168, 376, 520, 342 and 124.",
          "Sum of fx equals 1,530 and sum of f equals 30.",
          "Mean equals 1,530 divided by 30 equals 51 kg."
        ],
        "answer": "51 kg",
        "markTip": "B1 for correct midpoints, B1 for the fx column, M1 for sum fx over sum f, A1 for 51 kg with units. A wrong midpoint like 42.5 shifts every product, so check midpoints before multiplying anything.",
        "variant": "Classes 10 to 14, 15 to 19, 20 to 24 and 25 to 29 have frequencies 3, 7, 8 and 2. Find the mean. [Answer: 19.25]"
      },
      {
        "question": "The marks of 40 students are grouped as: 1 to 10 with frequency 5, 11 to 20 with frequency 9, 21 to 30 with frequency 12, 31 to 40 with frequency 8, 41 to 50 with frequency 6. Using the interpolation method, estimate (a) the median, (b) the lower quartile, (c) the interquartile range, correct to one decimal place.",
        "steps": [
          "Cumulative frequencies: 5, 14, 26, 34, 40.",
          "Median position is n over 2 equals 20, which falls in the class 21 to 30 with lower boundary 20.5, frequency 12 and cumulative frequency before it of 14.",
          "Median equals 20.5 plus ((20 minus 14) divided by 12) times 10 equals 20.5 plus 5 equals 25.5.",
          "Lower quartile position is n over 4 equals 10, in class 11 to 20: 10.5 plus ((10 minus 5) divided by 9) times 10 equals 16.1 to one decimal place.",
          "Upper quartile position is 30, in class 31 to 40: 30.5 plus ((30 minus 26) divided by 8) times 10 equals 35.5.",
          "Interquartile range equals 35.5 minus 16.1 equals 19.4."
        ],
        "answer": "(a) median = 25.5 marks (b) lower quartile = 16.1 marks (c) interquartile range = 19.4 marks",
        "markTip": "B1 for the cumulative frequency column, then M1 A1 per measure. The whole question hinges on class boundaries: using 21 instead of 20.5 as the lower boundary loses the accuracy mark in every part.",
        "variant": "For 30 students with classes 1 to 10, 11 to 20, 21 to 30, 31 to 40 and frequencies 4, 8, 10, 8, estimate the median. [Answer: 23.5]"
      },
      {
        "question": "A family's monthly income of GHc 5,400 is shown on a pie chart. The sectors are food 150 degrees, rent 90 degrees, school fees 70 degrees and savings x degrees. Find (a) the value of x, (b) the amount spent on food, (c) the amount saved.",
        "steps": [
          "Angles in a pie chart sum to 360 degrees: x equals 360 minus (150 plus 90 plus 70) equals 50 degrees.",
          "Each degree represents 5,400 divided by 360 equals GHc 15.",
          "Food: 150 times 15 equals GHc 2,250.",
          "Savings: 50 times 15 equals GHc 750."
        ],
        "answer": "(a) x = 50 degrees (b) GHc 2,250 (c) GHc 750",
        "markTip": "M1 A1 for x, then M1 for the fraction of 360 method and A1 for each amount. Writing the value per degree, GHc 15, as its own line is the cleanest way to secure the method mark.",
        "variant": "In a pie chart of N18,000, the transport sector is 80 degrees. How much goes on transport? [Answer: N4,000]"
      }
    ],
    "faqs": [
      {
        "q": "Do I have to draw the cumulative frequency curve, or can I just interpolate?",
        "a": "Do what the question asks. If it says draw a cumulative frequency curve and use it, the graph itself carries marks, scales, plotted points at upper class boundaries, and a smooth curve. If it says calculate or estimate, interpolation is fine."
      },
      {
        "q": "What accuracy should statistics answers be given to?",
        "a": "Follow the instruction in the question, commonly one or two decimal places for means and quartiles. If no accuracy is stated, one decimal place is a safe habit, and exact values like 51 kg should be left exact."
      },
      {
        "q": "Are these genuine WAEC past questions on statistics?",
        "a": "No. They are original questions built in the WASSCE format, same table styles, same mark weighting, because real past questions are WAEC copyright. Practising these prepares you for the real ones without copying them."
      }
    ],
    "targetQuery": "waec past questions on statistics",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "waec",
    "slug": "wassce-maths-trigonometry-practice",
    "metaTitle": "WAEC Questions on Bearings and Trigonometry Solved",
    "metaDescription": "Bearings and trigonometry practice in WASSCE style: back bearings, sine and cosine rule, elevation and depression, every question solved step by step.",
    "h1": "WAEC Bearings and Trigonometry Practice Questions, Solved",
    "quickAnswer": "WAEC bearings questions use three-figure bearings measured clockwise from north, and usually combine a journey diagram with Pythagoras, the sine rule or the cosine rule. Angles of elevation and depression appear almost every year too. Below are five original questions in WASSCE style, each solved with the diagram described in words and the marking explained.",
    "intro": "Bearings and trigonometry make up one of the most reliable Section B questions on the WASSCE core maths paper, and also one of the most failed, usually because candidates skip the diagram. Every solution below starts by describing the diagram you should draw, because in WAEC marking the sketch itself often carries a mark and a wrong sketch poisons everything after it. These five questions are original, written in the WASSCE style at exam difficulty, not reproduced from past papers. Work each one with a pencil, ruler and calculator, drawing north lines at every point before touching any formula.",
    "sections": [
      {
        "heading": "What WAEC asks on bearings and trigonometry",
        "body": "Bearings questions follow a pattern: a journey with two or three legs, each on a stated bearing, then find the distance and bearing of the finish from the start. If the legs meet at a right angle you use Pythagoras and basic tan; if not, the cosine rule finds the distance and the sine rule finds the angle for the bearing. Separately, the paper loves angles of elevation and depression, a mast, a cliff, a boat, which are single right triangles once drawn. Pure triangle questions also appear: given two sides and the included angle, find the third side and the area using half ab sin C. The trigonometry itself is never deep; the marks are for setting up the right triangle."
      },
      {
        "heading": "Diagrams first, three figures always",
        "body": "Write every bearing with three figures: 065 degrees, not 65 degrees. Draw a north arrow at each point of the journey, because the back bearing rule, add 180 degrees if the bearing is under 180, subtract 180 if it is over, only makes sense on a diagram with parallel north lines. When a question mixes bearings with the cosine rule, the hardest step is finding the angle inside the triangle from the two bearings; do it on the diagram with alternate angles rather than in your head. For elevation and depression, remember the angle of depression from the top equals the angle of elevation from the bottom. Check answers for sense: a bearing must be between 000 and 360 and a distance can never be negative."
      }
    ],
    "problems": [
      {
        "question": "The bearing of Q from P is 065 degrees and the bearing of R from P is 158 degrees. Find (a) the bearing of P from Q, (b) the bearing of P from R, (c) the angle QPR.",
        "steps": [
          "Back bearing rule: if a bearing is less than 180 degrees, add 180; if more, subtract 180.",
          "Bearing of P from Q: 065 plus 180 equals 245 degrees.",
          "Bearing of P from R: 158 plus 180 equals 338 degrees.",
          "Angle QPR is the angle between the two directions at P: 158 minus 65 equals 93 degrees."
        ],
        "answer": "(a) 245 degrees (b) 338 degrees (c) 93 degrees",
        "markTip": "A1 for each back bearing, M1 A1 for the angle between the bearings. Writing 65 instead of 065 is untidy rather than fatal, but a bearing over 360 shows the rule was applied twice and scores zero.",
        "variant": "The bearing of B from A is 132 degrees. Find the bearing of A from B. [Answer: 312 degrees]"
      },
      {
        "question": "A man walks 5 km due east from A to B, then 12 km due north from B to C. Calculate (a) the distance AC, (b) the bearing of C from A, correct to the nearest degree.",
        "steps": [
          "The path forms a right angle at B, with AC as the hypotenuse.",
          "AC equals sqrt(5^2 plus 12^2) equals sqrt(25 plus 144) equals sqrt(169) equals 13 km.",
          "From A, C lies 5 km east and 12 km north. The angle from north satisfies tan of the angle equals 5 divided by 12 equals 0.4167.",
          "The angle is 22.6 degrees, so the bearing of C from A is 023 degrees to the nearest degree."
        ],
        "answer": "(a) 13 km (b) 023 degrees",
        "markTip": "B1 for the sketch, M1 A1 for Pythagoras, M1 A1 for the bearing. The trap is using tan as 12 over 5, which gives the angle from east, not from north; the bearing must be measured from north, clockwise.",
        "variant": "A woman walks 9 km east then 12 km north. Find how far she is from her start and the bearing of her position from it. [Answer: 15 km, approximately 037 degrees]"
      },
      {
        "question": "In triangle PQR, angle P = 52 degrees, angle Q = 68 degrees and PR = 14 cm. Calculate (a) angle R, (b) the length QR, correct to three significant figures.",
        "steps": [
          "Angles in a triangle sum to 180: angle R equals 180 minus 52 minus 68 equals 60 degrees.",
          "Side PR is opposite angle Q, and side QR is opposite angle P.",
          "By the sine rule: QR divided by sin 52 equals 14 divided by sin 68.",
          "QR equals 14 times sin 52 divided by sin 68 equals 14 times 0.7880 divided by 0.9272 equals 11.9 cm."
        ],
        "answer": "(a) 60 degrees (b) 11.9 cm (3 s.f.)",
        "markTip": "A1 for angle R, M1 for a correctly paired sine rule statement, A1 for 11.9. Pairing a side with the wrong opposite angle is the whole danger of the sine rule; label opposite pairs on your sketch first.",
        "variant": "In triangle PQR, angle P = 40 degrees, angle Q = 75 degrees and PR = 10 cm. Find QR. [Answer: approximately 6.7 cm]"
      },
      {
        "question": "In triangle XYZ, XY = 8 cm, XZ = 5 cm and angle X = 60 degrees. Calculate (a) the length YZ, (b) the area of the triangle, correct to three significant figures.",
        "steps": [
          "YZ is opposite the known angle X, so use the cosine rule.",
          "YZ^2 equals 8^2 plus 5^2 minus 2 times 8 times 5 times cos 60 equals 64 plus 25 minus 80 times 0.5 equals 49.",
          "YZ equals 7 cm.",
          "Area equals half times 8 times 5 times sin 60 equals 20 times 0.8660 equals 17.3 cm^2."
        ],
        "answer": "(a) 7 cm (b) 17.3 cm^2 (3 s.f.)",
        "markTip": "M1 for the cosine rule with correct substitution, A1 for 7, then M1 A1 for the area formula half ab sin C. The commonest slip is adding the 80 cos 60 term instead of subtracting; a distance longer than 13 cm should ring alarm bells.",
        "variant": "Two sides of a triangle are 6 cm and 10 cm with an included angle of 60 degrees. Find the third side. [Answer: approximately 8.7 cm]"
      },
      {
        "question": "From a point A on level ground, 24 m from the foot of a vertical mast, the angle of elevation of the top of the mast is 30 degrees. B is a point between A and the foot of the mast, on the same straight line, where the angle of elevation is 60 degrees. Calculate (a) the height of the mast, (b) the distance AB, each correct to three significant figures where necessary.",
        "steps": [
          "Height: h equals 24 times tan 30 equals 24 times 0.5774 equals 13.9 m to three significant figures.",
          "From B: the horizontal distance is h divided by tan 60 equals 13.856 divided by 1.7321 equals 8.00 m.",
          "AB equals 24 minus 8.00 equals 16.0 m."
        ],
        "answer": "(a) 13.9 m (b) 16.0 m",
        "markTip": "B1 for a single diagram carrying both angles, M1 A1 for the height, M1 A1 for AB. Keep the unrounded height, 13.856, in your calculator for part (b); rounding early is exactly how accuracy marks leak away.",
        "variant": "From a point 20 m from the foot of a tower, the angle of elevation of the top is 45 degrees. Find the height of the tower. [Answer: 20 m]"
      }
    ],
    "faqs": [
      {
        "q": "Must bearings always be written with three figures?",
        "a": "Yes, that is the convention WAEC expects: 065 degrees, not 65 degrees. Bearings are measured clockwise from north and run from 000 to 360 degrees."
      },
      {
        "q": "When do I use the sine rule and when the cosine rule?",
        "a": "Cosine rule when you know two sides and the included angle, or all three sides. Sine rule when you have a matching pair, a side and its opposite angle, plus one more piece. In bearings journeys, the cosine rule usually finds the distance and the sine rule the angle for the bearing."
      },
      {
        "q": "Are these real WAEC bearings past questions?",
        "a": "No, they are original questions in the WASSCE style and difficulty. The real papers are WAEC copyright, so I write fresh questions that use the same setups the exam repeats: journeys, back bearings, elevation and depression, and triangle rules."
      }
    ],
    "targetQuery": "waec questions on bearings and trigonometry",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "waec",
    "slug": "wassce-maths-probability-practice",
    "metaTitle": "WAEC Past Questions on Probability: Solved Practice",
    "metaDescription": "Probability practice in WASSCE style: dice, balls without replacement, independent events and primes, each question solved with WAEC marking notes.",
    "h1": "WAEC Probability Practice Questions, Solved Step by Step",
    "quickAnswer": "WAEC probability questions stay close to a few setups: picking balls from a bag with or without replacement, throwing two dice, independent events like two students passing an exam, and choosing numbers with a property such as prime. This page solves five original questions in that style, with answers left as fractions the way WAEC expects.",
    "intro": "Probability on the WASSCE theory paper is narrower than the textbook chapter suggests. The same handful of situations rotate through the years: a bag of coloured balls, two dice, two independent people passing or failing, numbers picked from a range. The arithmetic is short, so the marks really test whether you can classify the situation, with replacement or without, independent or not, and or or. The five questions below are original, written in WASSCE style at the exam's difficulty. I have kept every answer as a fraction, which is the safest form in a WAEC paper unless the question asks for a decimal.",
    "sections": [
      {
        "heading": "The probability setups WAEC repeats",
        "body": "Learn four templates and you have covered most papers. One: a single draw from a bag, probability is favourable outcomes over total outcomes. Two: two dice or a die thrown twice, where the 36-outcome sample space answers everything, and questions ask for a sum or at least conditions. Three: two draws without replacement, where the denominator drops by one on the second draw and you must add the branches that satisfy the event. Four: independent events, two candidates passing an exam, where you multiply along and add across, and the phrase exactly one means two products added. A fifth, smaller template hides algebra inside: a bag holds x red balls, the probability of red is given, find x."
      },
      {
        "heading": "Presenting answers so the marks stick",
        "body": "Write the sample space size before any fraction; for two dice, state that there are 36 equally likely outcomes, because that line often carries a mark on its own. For without replacement questions, a tree diagram is the cheapest insurance available: each correctly labelled branch pair earns method credit even if a final addition slips. Leave answers as fractions, simplified if easy, though WAEC generally accepts unsimplified correct fractions. Two checks cost nothing: every probability must sit between 0 and 1, and where your cases cover all possibilities, both pass, exactly one passes, neither passes, the total must be exactly 1. If it is not, one branch is wrong, and the check tells you before the examiner does."
      }
    ],
    "problems": [
      {
        "question": "A bag contains 5 red, 3 blue and 4 green balls. A ball is picked at random. Find the probability that it is (a) red, (b) not green.",
        "steps": [
          "Total number of balls: 5 plus 3 plus 4 equals 12.",
          "P(red) equals 5/12.",
          "Balls that are not green: 5 plus 3 equals 8, so P(not green) equals 8/12 equals 2/3.",
          "Check: P(green) equals 4/12 equals 1/3, and 1 minus 1/3 equals 2/3. Consistent."
        ],
        "answer": "(a) 5/12 (b) 2/3",
        "markTip": "B1 for the total of 12, A1 for each probability. The complement route, 1 minus P(green), earns the same marks and is faster; either way, show the total before the fraction.",
        "variant": "A bag has 6 red, 4 blue and 2 white balls. Find the probability of picking a blue ball. [Answer: 1/3]"
      },
      {
        "question": "Two fair dice are thrown once. Find the probability that (a) the sum of the scores is 8, (b) the sum is at least 10.",
        "steps": [
          "There are 6 times 6 equals 36 equally likely outcomes.",
          "Sums of 8: (2,6), (3,5), (4,4), (5,3), (6,2), which is 5 outcomes, so P equals 5/36.",
          "Sums of at least 10: (4,6), (5,5), (6,4), (5,6), (6,5), (6,6), which is 6 outcomes.",
          "P(at least 10) equals 6/36 equals 1/6."
        ],
        "answer": "(a) 5/36 (b) 1/6",
        "markTip": "B1 for the 36-outcome sample space, then M1 A1 per part for listing or counting outcomes. Forgetting that (3,5) and (5,3) are different outcomes is the error this question exists to punish.",
        "variant": "Two fair dice are thrown once. Find the probability that the sum is 7. [Answer: 1/6]"
      },
      {
        "question": "A box contains 4 white and 6 black identical balls. Two balls are drawn one after the other without replacement. Find the probability that (a) both are black, (b) they are of different colours.",
        "steps": [
          "First draw black: 6/10. Second draw black, with one black gone: 5/9.",
          "P(both black) equals 6/10 times 5/9 equals 30/90 equals 1/3.",
          "Different colours happens two ways: white then black is 4/10 times 6/9 equals 24/90, and black then white is 6/10 times 4/9 equals 24/90.",
          "P(different colours) equals 24/90 plus 24/90 equals 48/90 equals 8/15."
        ],
        "answer": "(a) 1/3 (b) 8/15",
        "markTip": "M1 for reducing both numerator and denominator on the second draw, A1 for 1/3; then M1 for adding both orders and A1 for 8/15. Counting white-black but not black-white halves the answer and loses the A mark.",
        "variant": "A bag has 3 white and 5 black balls. Two are drawn without replacement. Find the probability that both are black. [Answer: 5/14]"
      },
      {
        "question": "The probability that Kofi passes an examination is 3/4 and the probability that Ama passes the same examination is 2/3. Their results are independent. Find the probability that (a) both pass, (b) exactly one of them passes, (c) neither passes.",
        "steps": [
          "P(both pass) equals 3/4 times 2/3 equals 6/12 equals 1/2.",
          "Exactly one passes: Kofi passes and Ama fails, 3/4 times 1/3 equals 3/12, or Kofi fails and Ama passes, 1/4 times 2/3 equals 2/12.",
          "P(exactly one) equals 3/12 plus 2/12 equals 5/12.",
          "P(neither) equals 1/4 times 1/3 equals 1/12.",
          "Check: 1/2 plus 5/12 plus 1/12 equals 12/12 equals 1. Consistent."
        ],
        "answer": "(a) 1/2 (b) 5/12 (c) 1/12",
        "markTip": "M1 A1 for each part, with the failing probabilities 1/4 and 1/3 shown explicitly. The three cases must total 1, and writing that check line can rescue you if a branch is wrong.",
        "variant": "P(A passes) = 2/5 and P(B passes) = 1/2, independently. Find the probability that both pass. [Answer: 1/5]"
      },
      {
        "question": "A number is chosen at random from the integers 10 to 30 inclusive. Find the probability that the number is (a) a prime number, (b) a multiple of 4.",
        "steps": [
          "Count the integers from 10 to 30 inclusive: 30 minus 10 plus 1 equals 21.",
          "Primes in the range: 11, 13, 17, 19, 23, 29, which is 6 numbers.",
          "P(prime) equals 6/21 equals 2/7.",
          "Multiples of 4 in the range: 12, 16, 20, 24, 28, which is 5 numbers, so P equals 5/21."
        ],
        "answer": "(a) 2/7 (b) 5/21",
        "markTip": "B1 for the count of 21, then A1 per part with the lists shown. The inclusive count is the trap: writing 20 instead of 21 shifts every answer, and listing the primes visibly protects your method credit.",
        "variant": "A number is picked at random from the integers 1 to 20 inclusive. Find the probability that it is a multiple of 3. [Answer: 3/10]"
      }
    ],
    "faqs": [
      {
        "q": "Should probability answers be fractions or decimals?",
        "a": "Either is accepted unless the question specifies, but fractions are safer because they are exact. If you give a decimal, use at least the accuracy the question asks for elsewhere, and never round a probability to something above 1 or below 0."
      },
      {
        "q": "What is the difference between with replacement and without replacement?",
        "a": "With replacement, the first ball goes back, so the second draw has the same probabilities. Without replacement, both the numerator for that colour and the total drop by one on the second draw. Misreading this one phrase is the single biggest source of lost marks on these questions."
      },
      {
        "q": "Are these actual WAEC probability past questions?",
        "a": "No. They are original questions written in the WASSCE format at matching difficulty, because WAEC's own past papers are copyrighted. The setups, bags, dice, independent candidates, number ranges, are the same families the real paper draws from."
      }
    ],
    "targetQuery": "waec past questions on probability",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "cambridge",
    "slug": "igcse-chemistry-0620-paper-4",
    "metaTitle": "IGCSE Chemistry 0620 Paper 4 Notes: Structure & Tips",
    "metaDescription": "IGCSE Chemistry 0620 Paper 4 notes from a student who sits it: paper structure, timings, topic weighting, three solved exam-style questions and technique.",
    "h1": "IGCSE Chemistry 0620 Paper 4: Structure, Question Styles and Technique",
    "quickAnswer": "Paper 4 is the Extended theory paper for IGCSE Chemistry 0620: 1 hour 15 minutes, 80 marks, worth 50 percent of your grade. It mixes short answers, calculations and longer structured questions across both Core and Supplement content. Moles, organic chemistry and electrochemistry carry the most marks in most sessions.",
    "intro": "I sit Cambridge IGCSE, and Paper 4 is the paper that decides whether the sciences go well for me. It covers everything in the Extended syllabus, it moves fast, and it punishes vague answers. When I started past-paper practice I kept losing marks on questions I understood, purely because my answers were not specific enough for the mark scheme. This page is the set of notes I wish I had at the start: exactly how the paper is built, which topics come up heaviest, three original exam-style questions worked through properly, and the technique habits that stopped me bleeding marks.",
    "sections": [
      {
        "heading": "How Paper 4 is structured",
        "body": "Paper 4 is 1 hour 15 minutes for 80 marks, which means you are working at nearly a mark a minute once you allow reading time. It is 50 percent of the whole qualification, and it examines the full Extended syllabus, so Core content appears alongside Supplement content in the same question. Expect around 6 to 8 long structured questions, each broken into parts that climb in difficulty: a definition or recall part, then application, then a calculation or an extended explanation worth 3 to 5 marks. The other papers in the Extended route are Paper 2, the 45 minute multiple choice paper worth 40 marks and 30 percent, and Paper 5 or Paper 6 for practical skills at 20 percent. There is no choice of questions on Paper 4, and you answer directly in the booklet. I check the mark total in brackets before writing anything, because a 1 mark part wants one clear point, not a paragraph, and a 4 mark part is asking for four separate scoring statements."
      },
      {
        "heading": "Topic weighting: what actually comes up",
        "body": "Cambridge does not publish a fixed percentage per topic, but after working through several years of past papers a pattern is obvious. Stoichiometry is the most reliable heavy scorer: mole calculations, limiting reagents, percentage yield and empirical formulas appear every session, often hiding inside other topics. Organic chemistry is usually a full question, covering homologous series, isomers, addition and substitution reactions, and polymers. Electrochemistry and chemical energetics both lean Supplement, so they turn up on Paper 4 in a way they barely do on Core papers, with electrode half-equations a regular 2 to 3 marks. Acids, bases and salt preparation reappear constantly, usually with a practical flavour. The Periodic Table, metals and reactivity, and rates of reaction fill out the middle of the paper, and there is nearly always a data or graph interpretation part. My rule from practice: if I could not do moles, organic reactions and half-equations cold, I was giving up 20 or more marks before the paper started."
      },
      {
        "heading": "Question styles you need to recognise",
        "body": "Every part of every question starts with a command word, and the command word tells you what the mark scheme wants. State and give want a short factual answer with no explanation. Describe wants what happens; explain wants why it happens, usually in terms of particles, electrons or energy. Deduce and predict mean the answer is reachable from the data in front of you. Suggest is the one that used to scare me: it means the situation is unfamiliar on purpose, and you are meant to apply known chemistry to it, so a sensible application scores even if you have never seen the example before. Calculations must show working, because method marks are real: a wrong final answer sitting on correct working can still take most of the marks. The longer 4 to 6 mark explanation parts are marked as separate scoring points, so I write them as short, separate sentences rather than one flowing paragraph, which makes it easier for the examiner to find each point."
      },
      {
        "heading": "Exam technique I actually use",
        "body": "Three habits changed my Paper 4 scores. First, I answer in the language of the syllabus. If the question is about rate, the scheme wants collision frequency and energy of collisions, not it reacts faster. If it is about bonding, it wants precise phrases like electrostatic attraction, delocalised electrons and intermolecular forces. Second, I never leave a calculation blank. Writing the relevant equation, converting to moles, or even just converting units can score method marks. Third, I write charges and state symbols carefully, because half-equations and ionic equations lose the mark for a single missing charge. On timing, I aim to be at 40 marks by 35 minutes, which leaves slack for the long organic or electrolysis question near the end. And I read the whole question stem before part (a), because later parts often reuse the same data, and the stem usually contains the exact substance names the mark scheme expects."
      }
    ],
    "problems": [
      {
        "question": "A student heats 6.4 g of copper(II) oxide with excess carbon. The equation for the reaction is 2CuO + C -> 2Cu + CO2. Calculate the maximum mass of copper that could be produced. (Ar: Cu = 64, O = 16, C = 12) [3]",
        "steps": [
          "Find the moles of CuO: Mr of CuO = 64 + 16 = 80, so moles = 6.4 / 80 = 0.08 mol.",
          "Use the ratio from the equation: 2CuO -> 2Cu, so the ratio is 1 to 1 and moles of Cu = 0.08 mol.",
          "Convert to mass: mass = moles x Ar = 0.08 x 64 = 5.12 g."
        ],
        "answer": "5.12 g of copper.",
        "markTip": "One mark for moles of CuO, one for using the 1 to 1 ratio, one for the final mass. Show every step: if the arithmetic slips, correct working still earns the first two marks.",
        "variant": "Try the same question with 12.0 g of iron(III) oxide reduced by carbon monoxide: Fe2O3 + 3CO -> 2Fe + 3CO2 (Ar: Fe = 56, O = 16). The ratio is no longer 1 to 1, which is exactly where most people slip."
      },
      {
        "question": "Concentrated aqueous sodium chloride is electrolysed using inert electrodes. (a) Name the product at the negative electrode (cathode). (b) Write the ionic half-equation for the reaction at the positive electrode (anode). (c) Explain why sodium metal is not produced in this electrolysis. [4]",
        "steps": [
          "(a) At the cathode, hydrogen gas is produced, not sodium. In aqueous electrolysis the less reactive species is discharged.",
          "(b) At the anode, chloride ions are oxidised: 2Cl- -> Cl2 + 2e-. Check the equation balances for both atoms and charge.",
          "(c) Sodium is more reactive than hydrogen, so hydrogen ions from the water are discharged in preference to sodium ions.",
          "The sodium ions stay in solution, which is why the liquid left behind is sodium hydroxide solution."
        ],
        "answer": "(a) Hydrogen. (b) 2Cl- -> Cl2 + 2e-. (c) Sodium is more reactive than hydrogen, so H+ ions from the water are discharged instead of Na+ ions.",
        "markTip": "The half-equation mark needs correct species, balancing and electrons on the correct side. Writing 2Cl- - 2e- -> Cl2 is also accepted, but a missing charge loses the mark instantly.",
        "variant": "Repeat for dilute sulfuric acid with inert electrodes: name both products and write both half-equations. Then try concentrated hydrochloric acid and note what changes at the anode."
      },
      {
        "question": "Ethene reacts with steam to form ethanol. (a) Name this type of reaction and give the essential conditions used in industry. (b) State the general formula of the homologous series that ethanol belongs to. (c) Ethanol is also made by fermentation. Give one advantage and one disadvantage of fermentation compared with the reaction of ethene with steam. [6]",
        "steps": [
          "(a) It is an addition reaction, specifically hydration, because water adds across the C=C double bond. Conditions: about 300 degrees C, 60 atm, phosphoric acid catalyst.",
          "(b) Ethanol is an alcohol, and the general formula of the alcohols is CnH2n+1OH.",
          "(c) Advantage of fermentation: it uses renewable plant material such as sugars, and it runs at low temperature, so energy costs are lower.",
          "Disadvantage: it is slow, it is a batch process, and it produces impure ethanol that needs fractional distillation.",
          "In comparison answers, make both sides explicit: renewable compared with a finite crude oil feedstock scores; the single word renewable may not."
        ],
        "answer": "(a) Addition (hydration); around 300 degrees C, 60 atm, phosphoric acid catalyst. (b) CnH2n+1OH. (c) For example: fermentation uses renewable sugars, but it is slow and gives impure ethanol that needs distilling.",
        "markTip": "Condition marks are all or nothing per condition, so learn the catalyst by name. One advantage plus one disadvantage means exactly two clearly separated points, each a genuine comparison of the two methods.",
        "variant": "Try the parallel question for cracking: describe how alkanes are cracked to produce alkenes, give the conditions, and explain why cracking matters to the petrochemical industry."
      }
    ],
    "faqs": [
      {
        "q": "How long is IGCSE Chemistry 0620 Paper 4 and how many marks is it worth?",
        "a": "It is 1 hour 15 minutes, 80 marks, and counts for 50 percent of the whole IGCSE. Extended candidates sit it alongside Paper 2, the multiple choice paper worth 30 percent, and Paper 5 or 6 for practical skills at 20 percent."
      },
      {
        "q": "Is Paper 4 only Supplement content?",
        "a": "No. It examines the whole Extended syllabus, which is Core plus Supplement. Plenty of marks come from Core ideas asked with more depth, so do not skip Core topics when revising for it."
      },
      {
        "q": "Do I lose marks for wrong significant figures in calculations?",
        "a": "Usually not, provided your value rounds correctly and you have not truncated too early. Give at least 3 significant figures unless told otherwise, and keep the full calculator value between steps of a multi-part calculation."
      },
      {
        "q": "Can I sit Paper 4 if I have only studied Core content?",
        "a": "No. Paper 4 is part of the Extended route. Core-only candidates sit Papers 1 and 3 instead, which cap the available grade at C. Your school decides the entry, usually based on mock results."
      }
    ],
    "targetQuery": "igcse chemistry 0620 paper 4 notes",
    "hubSubjects": [
      "chemistry"
    ]
  },
  {
    "board": "cambridge",
    "slug": "igcse-physics-0625-paper-4",
    "metaTitle": "IGCSE Physics 0625 Paper 4 Notes: Structure & Technique",
    "metaDescription": "IGCSE Physics 0625 Paper 4 notes: structure, timings, topic weighting and command words, with three original exam-style questions solved in full.",
    "h1": "IGCSE Physics 0625 Paper 4: Structure, Question Styles and Technique",
    "quickAnswer": "Paper 4 is the Extended theory paper for IGCSE Physics 0625: 1 hour 15 minutes, 80 marks, 50 percent of the qualification. It covers all six syllabus topics with structured questions mixing definitions, calculations and explanations. Motion, forces and energy plus electricity and magnetism usually carry the largest share of marks.",
    "intro": "Physics Paper 4 was the exam I was most nervous about, because knowing the formula is maybe a third of each calculation mark and the rest is setup, substitution and units. I sit Cambridge IGCSE myself, and the difference between my early practice scores and my later ones was almost entirely technique rather than extra physics. These notes cover the structure of Paper 4, the topics that dominate it, three original exam-style questions solved with full working, and the specific habits, like rearranging in symbols before substituting, that reliably convert understanding into marks.",
    "sections": [
      {
        "heading": "How Paper 4 is structured",
        "body": "Paper 4 runs 1 hour 15 minutes for 80 marks and counts for 50 percent of the qualification. The Extended route pairs it with Paper 2, multiple choice at 30 percent, and Paper 5 or 6 for practical skills at 20 percent. The paper is a run of structured questions, usually around 9 to 11 of them, each anchored in one topic but happy to pull in another: a motion question can end in an energy calculation, and a circuits question can finish with magnetism. All six syllabus areas appear: motion, forces and energy; thermal physics; waves; electricity and magnetism; nuclear physics; and space physics. There is no formula sheet, so every equation on the syllabus has to be memorised, and a good chunk of marks each session are effectively free if you can recall, rearrange and substitute correctly with units. Space physics is the newest section of the syllabus and examiners use it regularly, including Supplement-only ideas like redshift and orbital speed."
      },
      {
        "heading": "Topic weighting: where the marks sit",
        "body": "Motion, forces and energy is the biggest topic in the syllabus and it behaves that way in Paper 4, often spanning two or three questions: motion graphs, resultant force, momentum, moments, work, power and efficiency. Electricity and magnetism is the second pillar, with circuit analysis, resistance calculations, electromagnetic induction and transformers appearing in some form nearly every session. Waves gives reliable marks through the wave equation, refraction and refractive index, and the electromagnetic spectrum. Thermal physics leans on specific heat capacity calculations and particle explanations. Nuclear physics questions are usually shorter: decay equations, half-life from data, and uses of isotopes. Space physics rounds out the paper with orbits, the life cycle of stars and redshift. My practical takeaway from past papers: momentum, specific heat capacity and transformers are the three calculation types I drilled hardest, because they reappear constantly and each has a classic trap, which is direction, unit conversion and the ideal transformer assumption respectively."
      },
      {
        "heading": "Question styles and command words",
        "body": "Cambridge physics questions climb in a predictable way. Parts begin with state or define, worth 1 mark, where the syllabus definition word for word is the safest answer. Describe and explain parts want the mechanism: for thermal questions that means particles, spacing and energy transfer; for induction it means field lines being cut and an induced e.m.f. Calculations dominate the middle of each question, and Cambridge marks them in stages: correct equation, correct substitution, correct answer with unit. Writing the symbol equation first is not decoration, it is usually the first mark. Show that questions give you the answer and ask for the route, so show every step and quote your final value to more significant figures than the value given. Graph parts want labelled axes, sensible scales and a best fit line. The 4 to 6 mark extended explanations are credited as separate points, so short separate sentences beat paragraphs. Suggest means apply known physics to an unfamiliar setup, and sensible attempts score."
      },
      {
        "heading": "Technique that actually moves your score",
        "body": "Units and rearrangement are where I lost marks early on. Now I rearrange in symbols before substituting numbers, and I convert units before anything else: grams to kilograms, centimetres to metres, minutes to seconds. Second habit: significant figures. I keep the full calculator value through multi-step calculations and round only the final answer, usually to 3 significant figures. Third: direction. Momentum and force questions on Extended expect a stated direction, and defining one direction as positive at the start of the working prevents sign chaos. Fourth: graphs. Gradient and area have physical meanings, the gradient of a distance-time graph is speed and the area under a speed-time graph is distance, and Paper 4 asks you to extract one of them nearly every session. Finally, timing: 80 marks in 75 minutes means the big calculations cannot each eat five minutes. If a part stalls, I write the equation and the substitution for partial credit, move on, and come back at the end."
      }
    ],
    "problems": [
      {
        "question": "A trolley of mass 2.0 kg moving at 3.0 m/s collides with a stationary trolley of mass 1.0 kg. The trolleys stick together and move off in the same direction. (a) Calculate the velocity of the trolleys immediately after the collision. (b) State whether the collision is elastic or inelastic and justify your answer with a calculation. [6]",
        "steps": [
          "(a) Total momentum before = (2.0 x 3.0) + (1.0 x 0) = 6.0 kg m/s.",
          "Momentum is conserved, so after the collision: 6.0 = (2.0 + 1.0) x v.",
          "v = 6.0 / 3.0 = 2.0 m/s in the original direction of the moving trolley.",
          "(b) KE before = 1/2 x 2.0 x 3.0^2 = 9.0 J. KE after = 1/2 x 3.0 x 2.0^2 = 6.0 J.",
          "Kinetic energy falls from 9.0 J to 6.0 J, so the collision is inelastic. Momentum is conserved but kinetic energy is not."
        ],
        "answer": "(a) 2.0 m/s in the original direction. (b) Inelastic: kinetic energy falls from 9.0 J to 6.0 J.",
        "markTip": "State conservation of momentum explicitly and give the direction of the final velocity. In part (b) the mark is for comparing the two kinetic energy values, not just for the word inelastic.",
        "variant": "Rerun the numbers with the second trolley moving at 1.0 m/s towards the first. Choosing a positive direction before you start is what keeps the signs honest."
      },
      {
        "question": "A transformer connects a 240 V mains supply to a 12 V lamp rated at 24 W. The primary coil has 4000 turns. (a) Calculate the number of turns on the secondary coil. (b) Assuming the transformer is 100 percent efficient, calculate the current in the primary coil. (c) Explain why a transformer only works with alternating current. [7]",
        "steps": [
          "(a) Use Vp / Vs = Np / Ns: 240 / 12 = 4000 / Ns.",
          "Ns = 4000 x 12 / 240 = 200 turns.",
          "(b) For 100 percent efficiency, power in = power out, so Ip x Vp = 24 W.",
          "Ip = 24 / 240 = 0.10 A.",
          "(c) Alternating current in the primary produces a continuously changing magnetic field in the core.",
          "This changing field links the secondary coil and induces an e.m.f. in it. With direct current the field is constant, no field lines are cut, so no e.m.f. is induced."
        ],
        "answer": "(a) 200 turns. (b) 0.10 A. (c) A.c. gives a changing magnetic field in the core, which induces an e.m.f. in the secondary; d.c. gives a constant field, so nothing is induced.",
        "markTip": "Part (c) is a classic 3 marker: changing field, field linking or cutting the secondary coil, e.m.f. induced. The word changing is the single most important word in the answer.",
        "variant": "Try a step-up version: a power station transformer raising 25 kV to 400 kV for transmission. Then explain, using P = I^2 R, why transmitting at high voltage reduces power loss in the cables."
      },
      {
        "question": "An electric heater rated at 50 W heats a 0.50 kg aluminium block for 4.0 minutes. The temperature of the block rises from 20 degrees C to 45 degrees C. (a) Calculate the energy supplied by the heater. (b) Use the data to calculate a value for the specific heat capacity of aluminium. (c) The accepted value is 900 J/(kg degrees C). Explain why the experimental value is higher. [6]",
        "steps": [
          "(a) Convert the time first: 4.0 minutes = 240 s. Then E = P x t = 50 x 240 = 12000 J.",
          "(b) The equation is E = m x c x (change in temperature), rearranged to c = E / (m x change in temperature).",
          "Temperature change = 45 - 20 = 25 degrees C.",
          "c = 12000 / (0.50 x 25) = 960 J/(kg degrees C).",
          "(c) Some of the electrical energy is transferred to the surroundings and the apparatus, not the block, so the energy absorbed by the aluminium is less than 12000 J.",
          "The calculation assumes all 12000 J entered the block, so it divides too large an energy by the true temperature rise, which inflates the value of c."
        ],
        "answer": "(a) 12000 J. (b) 960 J/(kg degrees C). (c) Thermal energy is lost to the surroundings, so less than 12000 J actually heats the block; using the full 12000 J makes the calculated value too big.",
        "markTip": "The minutes to seconds conversion is a whole mark in disguise: miss it and parts (a) and (b) both fall. For (c), name where the energy went and link it to the effect on the calculated value.",
        "variant": "Invert it: given c = 900 J/(kg degrees C), a 0.25 kg block and a 60 W heater, find how long it takes to raise the temperature by 30 degrees C if 20 percent of the energy is lost."
      }
    ],
    "faqs": [
      {
        "q": "How long is Physics 0625 Paper 4 and how many marks is it worth?",
        "a": "It is 80 marks in 1 hour 15 minutes, and it is 50 percent of the IGCSE. You sit it with Paper 2, the multiple choice paper worth 30 percent, and a practical paper worth 20 percent."
      },
      {
        "q": "Is there a formula sheet for IGCSE Physics 0625?",
        "a": "No. Every equation on the syllabus must be memorised, including Supplement-only ones like orbital speed. I keep a single sheet of every equation and rewrite it from memory once a week until the blanks disappear."
      },
      {
        "q": "Does Paper 4 include space physics?",
        "a": "Yes, regularly. Orbits, the Sun as a star, stellar life cycles and redshift are all fair game, and several parts of the topic are Supplement-only, which concentrates them on Paper 4 rather than the Core paper."
      },
      {
        "q": "What are the hardest parts of Paper 4?",
        "a": "For most people it is multi-step calculations that cross topics, explain questions where the scheme wants precise mechanism words, and anything involving unit conversions or directions. All three improve with drills rather than more content revision."
      }
    ],
    "targetQuery": "igcse physics 0625 paper 4 notes",
    "hubSubjects": [
      "physics"
    ]
  },
  {
    "board": "cambridge",
    "slug": "igcse-biology-0610-paper-4",
    "metaTitle": "IGCSE Biology 0610 Paper 4 Notes: Structure & Technique",
    "metaDescription": "IGCSE Biology 0610 Paper 4 notes: how the Extended theory paper works, which topics dominate, and three original exam-style questions solved step by step.",
    "h1": "IGCSE Biology 0610 Paper 4: Structure, Question Styles and Technique",
    "quickAnswer": "Paper 4 is the Extended theory paper for IGCSE Biology 0610: 1 hour 15 minutes, 80 marks, 50 percent of your final grade. Structured questions cover the whole Extended syllabus, mixing recall, data interpretation and longer explanations. Transport, enzymes, coordination, inheritance and ecology are the areas I see most often in past sessions.",
    "intro": "Biology Paper 4 has the most content behind it of any of my IGCSE sciences: twenty one topics, and any of them can appear. What took me longest to learn is that Paper 4 is not really a memory test. Most marks come from using the right technical terms in the right order, reading data honestly, and answering the question that was actually asked. These are my notes on how the paper is put together, which topics dominate it, and three original exam-style questions with worked answers, plus the wording habits that took my explain answers from half marks to full marks.",
    "sections": [
      {
        "heading": "How Paper 4 is structured",
        "body": "Paper 4 is 1 hour 15 minutes, 80 marks, and 50 percent of the qualification, examining the full Extended syllabus of Core plus Supplement content. In the Extended route it sits alongside Paper 2, the 40 mark multiple choice paper worth 30 percent, and Paper 5 or 6 for practical skills at 20 percent. Expect around six long structured questions, each roughly 10 to 15 marks, and each usually built around a figure: a diagram to label or interpret, a graph, a table of experimental results, or a genetic cross. Parts escalate from 1 mark recall to explain parts worth 3 to 5 marks, and there is often an extended writing part late in the paper, frequently on something synoptic like homeostasis or a nutrient cycle. Nothing is optional and there is no question choice, so revision has to cover the whole syllabus rather than betting on topics. The mark in brackets is the contract: a 3 mark explain needs three distinct biological points, not one point written three ways."
      },
      {
        "heading": "Topic weighting: what shows up most",
        "body": "With twenty one topics and only 80 marks, not everything appears each session, but patterns hold. Transport in plants and in humans is close to guaranteed: xylem and phloem, translocation, the heart, and blood vessels. Enzymes appear either directly or inside digestion, respiration or biotechnology questions, always with the active site model and the effect of temperature and pH. Coordination and response is a Paper 4 favourite because so much of it is Supplement: reflex arcs, synapses, hormones and homeostasis with negative feedback. Inheritance brings the reliable genetic cross worth 4 to 6 marks, plus codominance and sex linkage on the Extended side. Ecology and human influences have grown in weight, with food webs, nutrient cycles and eutrophication turning up regularly. Photosynthesis and respiration underpin the data questions about limiting factors and gas exchange. My honest advice from practice: master the figures. The heart, the eye, the kidney and nephron, the villus and the reflex arc are drawn, labelled or interpreted constantly."
      },
      {
        "heading": "Question styles and command words",
        "body": "Describe means say what the data or process shows; explain means give the biological reason, and muddling the two is the most common way to lose marks on this paper. In data questions, quote figures with units and name the trend before explaining it: comparative words like increases, faster and higher score, while vague words like changes do not. Suggest signals an unfamiliar context, often a strange organism or experiment, and the examiner wants known biology applied to it, so a sensible application scores even if you have never met the organism. Genetic crosses are almost a ritual: parental genotypes, gametes clearly shown, a completed Punnett square, then phenotypes and their ratio, and every one of those stages carries a mark. Calculations are few but predictable: magnification, percentage change, and rates read from graphs. For magnification, image size divided by actual size, with both in the same units, is worth checking twice, because unit conversion is where those marks die. Extended response parts are credited point by point, so write short separate sentences."
      },
      {
        "heading": "Wording habits that earn the explain marks",
        "body": "Biology mark schemes are lists of accepted phrases, and the fastest improvement I made was learning to write in those phrases. Water moves by osmosis from a dilute solution to a more concentrated solution through a partially permeable membrane: that sentence has three scoring ideas in it, and each is a syllabus phrase. Active transport needs movement against a concentration gradient using energy from respiration, and missing either half loses the mark. In enzyme answers, denatured means the active site changes shape so the substrate no longer fits; enzymes are never killed. In homeostasis, name the receptor, the change detected, the effector and the corrective response, in that order. And in any question about exchange surfaces, the trio of large surface area, short diffusion distance, and a steep concentration gradient maintained by blood supply or ventilation covers most sites in the syllabus. None of this is extra content. It is the same biology, written the way the examiner is instructed to reward."
      }
    ],
    "problems": [
      {
        "question": "Cylinders of potato of equal mass were placed in sucrose solutions of different concentrations for two hours. The percentage changes in mass were: 0.0 mol/dm3, +12 percent; 0.2 mol/dm3, +4 percent; 0.4 mol/dm3, -3 percent; 0.6 mol/dm3, -10 percent. (a) Explain the result at 0.0 mol/dm3. (b) Estimate the concentration of the potato cell sap and explain your reasoning. [5]",
        "steps": [
          "(a) In distilled water the external solution is more dilute than the cell sap, so water moves into the cells by osmosis through the partially permeable cell membranes, increasing the mass.",
          "Mention all three elements: osmosis, the direction in terms of concentration, and the partially permeable membrane. That is usually the shape of the 3 marks.",
          "(b) The cell sap concentration is the point where the potato neither gains nor loses mass, because the concentrations inside and outside are equal.",
          "The change in mass crosses zero between 0.2 and 0.4 mol/dm3, so a sensible estimate from these numbers is about 0.3 mol/dm3.",
          "Justify with the data: at 0.2 the potato still gains mass and at 0.4 it loses mass, so the balance point must lie between them."
        ],
        "answer": "(a) Water enters the cells by osmosis, from the more dilute external solution to the more concentrated sap, through partially permeable membranes. (b) About 0.3 mol/dm3, where percentage change in mass would be zero.",
        "markTip": "Estimate questions want you to interpolate and say why. Quoting the two data points either side of zero is what turns a guess into a scoring answer.",
        "variant": "Sketch the graph of these results, then predict and explain the appearance of the cells at 0.6 mol/dm3 using the terms plasmolysis and turgor."
      },
      {
        "question": "In mice, black coat (B) is dominant to brown coat (b). Two black mice are crossed and produce eight offspring: six black and two brown. (a) State the genotypes of the parents and explain how you know. (b) Draw a Punnett square for the cross and state the expected ratio of phenotypes. (c) Suggest why the observed numbers do not exactly match the expected ratio. [6]",
        "steps": [
          "(a) Brown offspring must be bb, so each parent must carry one b allele. Both parents show black coats, so both are Bb, heterozygous.",
          "(b) Gametes from each parent are B or b. The Punnett square gives the genotypes BB, Bb, Bb and bb.",
          "Phenotypes: BB and both Bb mice are black, bb is brown, so the expected ratio is 3 black to 1 brown.",
          "(c) Fertilisation is random, and eight offspring is a small sample, so chance produces deviations from the expected 3 to 1 ratio."
        ],
        "answer": "(a) Both parents are Bb; the brown (bb) offspring must have received one b allele from each parent. (b) 3 black to 1 brown. (c) Random fertilisation and a small sample size.",
        "markTip": "Set out genotypes, gametes, offspring genotypes and phenotypes as separate labelled lines. Each line scores, and examiners cannot award what they cannot find.",
        "variant": "Try the follow-up: one brown offspring is crossed with a heterozygous black mouse. Predict the ratio, then rewrite the whole cross for a codominant case such as red, white and roan cattle."
      },
      {
        "question": "After a meal, a healthy person's blood glucose concentration rises and then returns to normal within about two hours. (a) Name the organ that detects the rise and the hormone it releases. (b) Explain how this hormone returns the blood glucose concentration to normal. (c) Explain why this control system is described as negative feedback. [6]",
        "steps": [
          "(a) The pancreas detects the rise in blood glucose concentration and releases insulin.",
          "(b) Insulin travels in the blood plasma to target organs, mainly the liver and muscles.",
          "It increases the uptake of glucose by cells, and in the liver glucose is converted to glycogen for storage, so the blood glucose concentration falls.",
          "(c) The change, rising glucose, triggers a response that reverses the change, bringing the level back towards the normal set point.",
          "When glucose falls back to normal, insulin secretion decreases, so the correction switches itself off. A change producing the opposite, corrective effect is negative feedback."
        ],
        "answer": "(a) Pancreas; insulin. (b) Insulin increases glucose uptake by cells and drives conversion of glucose to glycogen in the liver, lowering blood glucose. (c) The response opposes the original change and shuts down once normal levels return.",
        "markTip": "Name the storage molecule, glycogen, and keep it clearly separate from glucagon. Confusing glycogen and glucagon in one answer is the most common own goal on this topic.",
        "variant": "Write the mirror version for a fall in blood glucose using glucagon, then the equivalent negative feedback answer for body temperature control on a hot day."
      }
    ],
    "faqs": [
      {
        "q": "How long is Biology 0610 Paper 4 and what does it cover?",
        "a": "It is 1 hour 15 minutes, 80 marks, and 50 percent of the IGCSE. It examines the whole Extended syllabus, Core plus Supplement, across all twenty one topics, and is sat alongside Paper 2 multiple choice and a practical paper."
      },
      {
        "q": "Is Paper 4 harder than the Core theory paper?",
        "a": "It examines extra Supplement content and asks for more depth, but it also unlocks the full grade range, while the Core route caps the grade at C. If your mocks are comfortably at grade C or above, Extended entry is usually the right call."
      },
      {
        "q": "How should I revise for the long 5 and 6 mark questions?",
        "a": "Practise writing them as separate short statements, one biological point per sentence, then mark yourself against real mark schemes. The scoring points are usually syllabus phrases, so revising from syllabus wording beats revising from paraphrased notes."
      },
      {
        "q": "Do I need to memorise diagrams for Paper 4?",
        "a": "You need to interpret and label them more than draw them from scratch. The heart, the eye, the kidney and nephron, the villus, a leaf section and the reflex arc are the ones I would know cold."
      }
    ],
    "targetQuery": "igcse biology 0610 paper 4 notes",
    "hubSubjects": [
      "biology"
    ]
  },
  {
    "board": "cambridge",
    "slug": "igcse-maths-0580-paper-4",
    "metaTitle": "IGCSE Maths 0580 Paper 4 Questions: Extended Calculator",
    "metaDescription": "IGCSE Maths 0580 Paper 4 questions and structure for the 2025 onward format: 2 hours, 100 marks, calculator allowed, with four original solved examples.",
    "h1": "IGCSE Maths 0580 Paper 4: The Extended Calculator Paper, With Practice Questions",
    "quickAnswer": "Paper 4 is the Extended calculator paper for IGCSE Maths 0580: 2 hours, 100 marks, half the qualification, sat alongside the non-calculator Paper 2. Since 2025 both Extended papers carry equal weight. Expect multi-part structured questions across number, algebra, geometry, mensuration, trigonometry, probability and statistics, with method marks for shown working.",
    "intro": "I sit the Extended papers for 0580, and Paper 4 is the one where preparation pays off most directly, because the question types repeat so reliably that you can rehearse almost the entire paper in advance. The syllabus changed for 2025 exams onwards: Paper 4 is now 2 hours for 100 marks with a calculator, paired with a non-calculator Paper 2 of equal weight, so the old 130 mark marathon is gone. Below is how the paper is built, what examiners look for in working, and four original exam-style questions solved step by step, written to match the current format.",
    "sections": [
      {
        "heading": "The current Paper 4 format (2025 onwards)",
        "body": "Paper 4 Calculator (Extended) is 2 hours long, worth 100 marks, and counts for 50 percent of the IGCSE. The other half is Paper 2 Non-calculator (Extended), also 2 hours and 100 marks. This structure started with the 2025 examinations, replacing the old pairing of a 70 mark short paper and a 130 mark long paper, so be careful with past papers: anything from 2024 or earlier follows the old format, and the old Paper 2s were short-answer papers. Cambridge has published specimen papers in the new format, and real sessions in the new style now exist too. You need a scientific calculator and geometry instruments, and tracing paper is allowed. Questions are structured and grow as the paper progresses: early questions spread 4 to 8 marks across parts, later ones can carry 10 or more, often built around one scenario such as a journey, a container or a sequence. A mark every 72 seconds sounds generous, but the late algebra and trigonometry questions absorb time, so banking the early number work quickly matters."
      },
      {
        "heading": "What comes up and how marks are given",
        "body": "The whole Extended syllabus can appear, but certain question families are close to permanent residents of Paper 4. Percentages with compound interest or exponential growth. Simultaneous and quadratic equations, including forming the equation yourself from a wordy setup. The sine rule, cosine rule and the area formula 1/2 ab sin C, often wrapped in a bearings diagram. Mensuration with cylinders, cones and spheres, including similar shapes where areas scale with the square and volumes with the cube of the length ratio. Cumulative frequency, histograms and averages from grouped data. Tree diagrams and conditional probability. Functions, sequences and graphs fill the gaps. Marking is method plus accuracy: method marks for a correct approach even with wrong numbers, accuracy marks for correct values, and independent marks for statements like a correct reason. That is why working is never optional. Give non-exact answers to 3 significant figures unless the question says otherwise, give angles to 1 decimal place, and never round in the middle of a calculation, because accuracy marks die at the rounding step more than anywhere else."
      },
      {
        "heading": "Technique for a 2 hour calculator paper",
        "body": "My routine: a first pass through the paper doing everything that yields, flagging anything that stalls, then a second pass with the remaining time. Write down more than you think you need: the formula before the substitution, the substitution before the answer, because method marks attach to visible method. Use the calculator properly: store intermediate values in memory instead of retyping rounded versions, bracket the numerator and denominator of every fraction, and work in degrees mode, checking the mode symbol whenever a trig answer looks alien. When a question says show that, the target value is a gift for the next part, but your working must derive it rather than assume it, and you can still use the given value in later parts even if you could not derive it. Draw on the diagram: mark given lengths and angles, and for bearings sketch the north line at every point before calculating anything. Finally, sanity-check magnitudes: a ladder is not 400 m long, a probability never exceeds 1, and a percentage profit of 3000 usually means a factor slip."
      }
    ],
    "problems": [
      {
        "question": "Amira invests 5000 dollars in an account paying 3.2 percent per year compound interest. (a) Calculate the value of the investment at the end of 6 years. (b) Find the least number of complete years for the investment to be worth more than 7000 dollars. [5]",
        "steps": [
          "(a) Compound interest formula: value = 5000 x 1.032^6.",
          "1.032^6 = 1.20803..., so value = 5000 x 1.20803 = 6040.16 dollars, to the nearest cent.",
          "(b) You need 5000 x 1.032^n > 7000, which simplifies to 1.032^n > 1.4.",
          "Test values on the calculator: 1.032^10 = 1.370 and 1.032^11 = 1.414, so 11 years is the first time the value passes 1.4.",
          "Answer the actual question asked: the least number of complete years is 11."
        ],
        "answer": "(a) 6040.16 dollars. (b) 11 years.",
        "markTip": "In part (b), show the trial values either side: 1.032^10 = 1.370 and 1.032^11 = 1.414. That comparison is the method mark, and an unsupported 11 can lose it.",
        "variant": "Same account, but now the value after 6 years is given as 6040.16 dollars and the rate is unknown: find it. Reverse percentage setups reuse the identical formula, rearranged."
      },
      {
        "question": "A rectangular garden has length 3 m greater than its width, w m. The area of the garden is 40 m2. (a) Show that w^2 + 3w - 40 = 0. (b) Solve the equation to find the dimensions of the garden. [5]",
        "steps": [
          "(a) The length is w + 3, so the area gives w(w + 3) = 40.",
          "Expand: w^2 + 3w = 40, then bring everything to one side: w^2 + 3w - 40 = 0, as required.",
          "(b) Factorise: two numbers multiplying to -40 and adding to 3 are 8 and -5, so (w + 8)(w - 5) = 0.",
          "w = -8 or w = 5. A width cannot be negative, so w = 5.",
          "State the dimensions asked for: width 5 m and length 5 + 3 = 8 m."
        ],
        "answer": "(a) Area = w(w + 3) = 40 leads directly to w^2 + 3w - 40 = 0. (b) Width 5 m, length 8 m.",
        "markTip": "In show that parts, every algebraic line must appear; jumping from w(w + 3) = 40 straight to the target equation can drop a mark. Always reject the negative root in words.",
        "variant": "Rebuild it with a border: a path of width x m surrounds a 6 m by 4 m pond, and the area of the path is 39 m2. Form and solve the quadratic in x."
      },
      {
        "question": "Ship A leaves port P and sails 12 km on a bearing of 070 degrees to point Q. Ship B leaves P and sails 15 km on a bearing of 130 degrees to point R. (a) Show that angle QPR = 60 degrees. (b) Calculate the distance QR. (c) Calculate the bearing of R from Q, correct to the nearest degree. [7]",
        "steps": [
          "(a) Both bearings are measured clockwise from north at P, so angle QPR = 130 - 70 = 60 degrees.",
          "(b) Cosine rule: QR^2 = 12^2 + 15^2 - 2 x 12 x 15 x cos 60 = 144 + 225 - 180 = 189.",
          "QR = sqrt(189) = 13.7 km to 3 significant figures. Keep the full value 13.7477... for part (c).",
          "(c) Sine rule for angle PQR: sin Q / 15 = sin 60 / 13.7477, so sin Q = 0.9449 and angle PQR = 70.9 degrees.",
          "From Q, the bearing of P is the back bearing of 070, which is 070 + 180 = 250 degrees.",
          "Draw the north line at Q. Bearing of R from Q = 250 - 70.9 = 179.1, so 179 degrees to the nearest degree. A sketch confirms R is almost due south of Q."
        ],
        "answer": "(a) 130 - 70 = 60 degrees. (b) 13.7 km. (c) 179 degrees.",
        "markTip": "Part (c) separates the grades: draw a north line at Q, use the back bearing of 250, and keep the unrounded 13.7477 in the sine rule. Using the rounded 13.7 can shift the final bearing.",
        "variant": "Change ship B to 10 km on a bearing of 200 degrees, then find QR and the bearing of Q from R. Working the reverse direction is the best rehearsal for bearings."
      },
      {
        "question": "A bag contains 5 red and 3 blue counters. Two counters are taken at random without replacement. (a) Find the probability that both counters are red. (b) Find the probability that the two counters are different colours. (c) Given that at least one counter is red, find the probability that both are red. [7]",
        "steps": [
          "(a) First pick: P(red) = 5/8. Second pick changes because there is no replacement: after a red, P(red) = 4/7.",
          "P(both red) = 5/8 x 4/7 = 20/56 = 5/14.",
          "(b) Different colours happens two ways: red then blue = 5/8 x 3/7 = 15/56, and blue then red = 3/8 x 5/7 = 15/56.",
          "Add the two routes: 15/56 + 15/56 = 30/56 = 15/28.",
          "(c) P(at least one red) = 1 - P(both blue) = 1 - (3/8 x 2/7) = 1 - 6/56 = 50/56.",
          "Conditional probability: P(both red given at least one red) = (20/56) / (50/56) = 20/50 = 2/5."
        ],
        "answer": "(a) 5/14. (b) 15/28. (c) 2/5.",
        "markTip": "Multiply along branches, add between branches, and keep fractions unsimplified until the end: 20/56 over 50/56 cancels far more safely than decimals. The denominator dropping from 8 to 7 is the without replacement mark.",
        "variant": "Same bag, three counters drawn: find the probability of exactly two reds. Then redo part (c) with the condition that the first counter is red, and notice why the answer changes."
      }
    ],
    "faqs": [
      {
        "q": "Is IGCSE Maths 0580 Paper 4 still 130 marks?",
        "a": "Not any more. From the 2025 examinations, Paper 4 is 2 hours and 100 marks with a calculator, paired with a 2 hour, 100 mark non-calculator Paper 2. Papers from 2024 and earlier use the old format, so treat them as topic practice rather than timing practice."
      },
      {
        "q": "What calculator should I use for Paper 4?",
        "a": "A scientific calculator; check the current syllabus and your school's guidance for what is permitted. Fluency matters more than the model: memory keys for intermediate values, fraction display, degrees mode and disciplined brackets are what actually save marks."
      },
      {
        "q": "Do I lose marks if my final answer is wrong but my method is right?",
        "a": "You keep the method marks if the method is visible. That is the whole argument for writing the formula, the substitution and each stage: an arithmetic slip then costs one accuracy mark instead of the whole question."
      },
      {
        "q": "Are old past papers still worth doing after the format change?",
        "a": "Yes, for content. The mathematics itself barely changed, so old Paper 4 questions remain excellent practice. Add the 2025 onward specimen and recent papers for timing, and remember old short-answer Paper 2s do not represent the new non-calculator paper."
      }
    ],
    "targetQuery": "igcse maths 0580 paper 4 questions",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "cambridge",
    "slug": "igcse-english-0500-directed-writing",
    "metaTitle": "0500 Directed Writing Model Answer: IGCSE Paper 2",
    "metaDescription": "0500 directed writing model answer for IGCSE Paper 2: a full original letter, the 15 and 25 mark split, examiner criteria and speech, letter, article tips.",
    "h1": "IGCSE English 0500 Directed Writing: A Full Model Answer and How It Is Marked",
    "quickAnswer": "In 0500 Paper 2 Section A, you write 250 to 350 words as a speech, letter or article, responding to one or two short texts. It is worth 40 marks: 15 for reading, which means using, developing and evaluating the ideas in the texts, and 25 for writing. A full original model answer is below.",
    "intro": "Directed writing is the strangest task on the 0500 papers, because it is a writing question where a large share of the marks are reading marks. I sit Cambridge exams myself, and my directed writing scores only moved when I stopped treating it as a persuasive writing exercise and started treating it as an evaluation of the texts wearing a costume: the costume being a speech, a letter or an article. This page breaks down the task and the three forms, shows a complete original model answer written to the 250 to 350 word limit, and lists what examiners actually reward at each level.",
    "sections": [
      {
        "heading": "The task: what Section A actually asks",
        "body": "Paper 2 is 2 hours and 80 marks; Section A is one compulsory directed writing task worth half of that. You are given one or two reading texts, 650 to 750 words in total, usually presenting opinions or arguments about an issue. The task tells you who you are, who you are writing to, and the form: a discursive, argumentative or persuasive speech, letter or article. You write 250 to 350 words. The 40 marks split into 15 for reading and 25 for writing. The reading marks come from using, developing and evaluating the ideas in the texts, not from your own unrelated arguments, and the writing marks come from register, structure, vocabulary and accuracy. That split explains the classic failure: a fluent, passionate piece that barely touches the texts caps its reading mark low, while a text-hugging summary with no voice caps the writing mark. The examiners want both at once: a response recognisably built from the material, and recognisably yours in voice."
      },
      {
        "heading": "Speech, letter or article: what changes between forms",
        "body": "The content engine is identical in all three forms; what changes is the frame. A speech needs direct address to a named audience, a strong opening that acknowledges the occasion, rhetorical devices used sparingly, and a closing call or reflection; you do not need stage directions or constant crowd greetings. A letter needs a salutation and sign-off matched to the recipient, formal for a head teacher or a newspaper, warmer for a known adult, and a clear purpose stated early. An article needs a headline, an engaging first paragraph that frames the issue, and a slightly more balanced, considered register even when it argues a side. In every form, the register question to ask is: who am I meant to be, and who is reading this? Marks live in consistency, so a formal letter that lapses into slang, or a speech that reads like an essay, loses writing marks. I keep one habit for all three: plan three body paragraphs, each anchored to a different idea from the texts, evaluated rather than repeated."
      },
      {
        "heading": "How examiners level your answer",
        "body": "For the 15 reading marks, the levels climb roughly like this: at the bottom, answers copy or lightly reword chunks of the text; in the middle, answers select relevant ideas and use them straightforwardly; at the top, answers evaluate, questioning assumptions, spotting weaknesses or implications, and developing ideas into new but rooted territory. Evaluation is the top-band trigger. If a text claims a scheme will be popular, a top answer asks popular with whom, and at what cost, using details from the text as evidence. For the 25 writing marks, examiners reward a consistent register appropriate to the audience, a structure with a clear opening, progression and close, varied and precise vocabulary and sentence shapes, and technical accuracy; errors matter most when they slow the reader. The practical version of all this: engage with both texts if two are given, challenge at least two ideas rather than accepting everything, and hold the persona steady from first word to sign-off. Word count discipline helps too, because past 350 words quality usually thins and accuracy slips."
      }
    ],
    "problems": [
      {
        "question": "Task in the style of Paper 2 Section A. Your school has proposed banning phones entirely during the school day. You have read two texts: Text A, a head teacher's notice arguing the ban will improve focus and friendships and claiming most parents support it; Text B, a student blog arguing phones support learning, safety and independence, while admitting distraction is real. Write a letter to your head teacher giving your views on the proposal. Base your letter on the ideas in both texts. Write 250 to 350 words. [40 marks: 15 reading, 25 writing]",
        "steps": [
          "Salutation and opening, stating purpose and setting a respectful register: Dear Mrs Danvers, I am writing in response to the proposed ban on phones during the school day. I understand the intention behind it, but I believe a complete ban solves the wrong problem, and I would like to explain why.",
          "Paragraph 2 concedes Text A's strongest point, then challenges its evidence: Your notice argues that phones damage focus, and honestly, the student blog published this week concedes the same point: distraction is real. Nobody who has sat in a lesson while a screen lights up would deny it. But it does not follow that the only cure is total removal. The notice says most parents support a ban, yet it does not say how many were asked, or whether they were offered any alternative besides a ban or nothing. Support for doing something is not the same as support for this.",
          "Paragraph 3 develops Text B's ideas rather than repeating them: The blog makes a stronger case than perhaps it realises. It points out that many of us travel home alone and that parents rely on being reachable; a phone locked away at 3 pm protects nobody at 5 pm on a dark bus route. It also describes lessons where teachers direct us to use phones for research and revision. A ban would not remove distraction so much as remove the useful half of the device.",
          "Paragraph 4 synthesises both texts into a proposal: May I suggest a middle path: phones off and away during lessons, with clear sanctions, but available at break and after school. This targets the harm your notice identifies, keeps the safety benefits the blog describes, and, unlike a total ban, is a rule students might actually respect, which is what makes any rule work.",
          "Close and sign-off, holding the register to the end: Thank you for considering a student's view. Yours sincerely, Rabail.",
          "The letter runs to about 280 words, comfortably inside the 250 to 350 limit, with each body paragraph anchored to a specific claim from one of the texts and evaluated rather than repeated."
        ],
        "answer": "A complete letter of about 280 words that concedes the strongest point of Text A, challenges its evidence (the unquantified parent survey), develops Text B's safety and learning points, and proposes a compromise built from both texts, in a consistent formal register.",
        "markTip": "The reading marks hide in the challenges: questioning how many parents were asked is evaluation, and evaluation is what separates the top band from competent middle-band answers. Keep the register formal from salutation to sign-off.",
        "variant": "Rewrite the same material as a speech to a school assembly, then as an article for the school magazine. The ideas stay; the opening, the address and the ending change. This is the fastest directed writing practice there is."
      }
    ],
    "faqs": [
      {
        "q": "How many marks is directed writing and how is it split?",
        "a": "It is 40 of the 80 marks on Paper 2: 15 for reading and 25 for writing on the current syllabus. The reading marks come from using, developing and evaluating the ideas in the printed texts, so an answer that ignores the texts caps itself immediately."
      },
      {
        "q": "Do I have to use both texts?",
        "a": "When two texts are given, yes, engage with both. The strongest answers play the texts against each other, using one to challenge the other, which is exactly the evaluation the top band rewards."
      },
      {
        "q": "Does going over 350 words lose marks?",
        "a": "There is no automatic penalty, but examiners stop rewarding length quickly. Overlong answers usually drift from the texts and pick up accuracy errors, which costs marks indirectly. Practise landing between about 280 and 350 words."
      },
      {
        "q": "Is the directed writing format changing?",
        "a": "Yes. For examinations from 2027 the task changes: a separate short reading question comes first and the directed writing task's reading marks reduce to 10, with 25 still for writing. If you sit in 2026, the current 15 plus 25 format applies, so check which syllabus year you are entered for."
      }
    ],
    "targetQuery": "0500 directed writing model answer",
    "hubSubjects": [
      "english"
    ]
  },
  {
    "board": "gcse",
    "slug": "gcse-evaluate-questions-how-to-answer",
    "targetQuery": "how to answer evaluate questions gcse",
    "metaTitle": "How to Answer Evaluate Questions GCSE: Method + Example",
    "metaDescription": "Evaluate, justify and discuss questions at GCSE all want two sides plus a judgement. Here is the structure, how level marking works, and a worked example.",
    "h1": "How to Answer Evaluate Questions at GCSE",
    "quickAnswer": "Evaluate questions want three things: a developed argument for, a developed argument against, and a judgement that actually follows from what you wrote. They are level-marked, so two explained points beat five listed ones. Use any data you are given, and never bolt on a conclusion you have not earned.",
    "intro": "I lost marks on evaluate questions for a full year before anyone explained how they are actually marked. I sit Cambridge IGCSE rather than AQA or Edexcel, but the command word rules are nearly identical across boards, and the marking method is the same: examiners read your whole answer and place it in a level, not tick individual points. Once you know what pushes an answer from Level 2 to Level 3, these questions stop being scary and start being predictable. This page covers what evaluate, justify and discuss each demand, how level marking works, and a worked six-mark example with a model answer you can compare against your own attempt.",
    "sections": [
      {
        "heading": "What evaluate, justify and discuss each ask for",
        "body": "Evaluate means weigh up. You need points on both sides and a judgement about which side wins, ideally tied to the context or data in the question. Discuss is softer: present both sides in a balanced way, and check whether the question says reach a conclusion, because sometimes the judgement is optional and sometimes it is where the last marks sit. Justify means the decision is already made, or you make it in your first line, and the whole answer defends it using the evidence provided. The common trap is treating all three the same and writing a list of facts. None of these command words rewards knowledge on its own. A six-mark evaluate answer with four accurate facts and no weighing up usually scores two or three, while an answer with two facts argued properly on each side plus a supported judgement can take full marks."
      },
      {
        "heading": "How level marking actually works",
        "body": "Nobody told me this until Year 10: on these questions, examiners do not tick points, they read the whole answer and match it to a level descriptor. A typical six-mark grid looks like this. Level 1 answers make simple, separate statements. Level 2 answers explain points on one or both sides but do not connect them into an argument. Level 3 answers build a coherent line of reasoning on both sides and finish with a judgement that follows from it. Two things push answers up a level. First, chains of reasoning: this happens, which causes this, which means this. Second, using the actual data or context in the question rather than writing a generic answer that could fit any question. If the question gives you numbers, quote them and do something with them. A sentence like the sample size of ten is too small to rule out chance moves you up a level almost by itself."
      },
      {
        "heading": "A structure that works under time pressure",
        "body": "Spend thirty seconds planning three boxes: for, against, judgement. Write one developed paragraph for each. In the for paragraph, make a point and push it two steps further with because and this means. Do the same against. Then write a judgement that names the deciding factor, not just a side. The phrase it depends on is genuinely useful here: the claim might be reliable if the study were repeated with a control group, or the strongest factor is the sample size because everything else could be fixed. Do not introduce brand new points in the conclusion, because examiners read that as an unfinished argument rather than a judgement. And do not hedge into nothing. Both sides have merit is not a judgement, it is a shrug. Commit to a side, name your reason, and stop writing. On a six-marker this whole routine fits comfortably into eight or nine minutes."
      }
    ],
    "problems": [
      {
        "question": "A drinks company claims that its new isotonic sports drink improves sprint performance. To test the claim, the company gave the drink to ten of its own employees and timed them running 100 m before and after drinking it. The average time improved by 0.2 seconds. There was no control group. Evaluate whether the evidence supports the company's claim. (6 marks)",
        "steps": [
          "Plan three boxes before writing: what supports the claim, what weakens it, and your judgement. Aim for two developed points on each side.",
          "For the claim: the times did improve on average, and the improvement was measured with a before-and-after comparison of the same runners, which removes differences between individuals.",
          "Against the claim: the sample is only ten people, so the 0.2 second change could easily be chance. There is no control group drinking water or a placebo, so the improvement could be caused by being warmed up on the second run or by expecting to be faster, not by the drink itself.",
          "Also against: the runners were the company's own employees, so there is a risk of bias in who was chosen and how times were recorded, and 0.2 seconds may sit within normal variation between repeat sprints anyway.",
          "Judgement: weigh the sides and commit. The weaknesses in the method matter more than the result itself, because a repeat run is usually faster regardless of what you drink."
        ],
        "answer": "Model judgement: the evidence does not support the claim. The improvement is small, the sample of ten employees is too small to rule out chance, and without a control group the faster second run could be caused by practice or expectation rather than the drink. The claim could only be tested properly with a larger, independent sample and a placebo control group.",
        "markTip": "Level 3 needs both sides plus a judgement that follows from your reasoning. A conclusion the examiner could delete without losing anything, like I think the drink is good, keeps you in Level 2.",
        "variant": "A toothpaste company claims its new formula reduces cavities. It surveyed 15 customers who bought the toothpaste, and 12 reported fewer cavities over one year. There was no comparison group. Evaluate whether the evidence supports the claim. (6 marks)"
      }
    ],
    "faqs": [
      {
        "q": "Do I always need a conclusion in an evaluate answer?",
        "a": "Yes. For evaluate and justify, the top level of the mark scheme is effectively closed to answers without a supported judgement. For discuss, read the question: if it says reach a conclusion, treat it as compulsory. Either way, a one-line judgement costs thirty seconds and can be worth two marks."
      },
      {
        "q": "How long should a 6 mark evaluate answer be?",
        "a": "Around three short paragraphs, roughly 120 to 180 words. Length is not marked, reasoning is. A tight answer with two developed points per side and a judgement beats a full page of listed facts, because level marking rewards the quality of the argument, not coverage."
      },
      {
        "q": "Is evaluate the same as discuss?",
        "a": "Close but not identical. Both want balance. Evaluate always requires you to weigh the sides and commit to a judgement. Discuss sometimes lets you present both sides without picking one, though many mark schemes still reserve the top marks for a conclusion, so committing is the safer habit."
      },
      {
        "q": "Do I lose marks for writing in bullet points?",
        "a": "You will not be penalised directly, but bullets push you toward listing instead of linking, and level marking rewards connected reasoning. Full sentences with because, so and which means make your chain of logic visible to the examiner. I only use bullet-style notes for the thirty-second plan."
      }
    ],
    "hubSubjects": [
      "biology",
      "chemistry",
      "physics"
    ]
  },
  {
    "board": "gcse",
    "slug": "gcse-business-9-mark-question",
    "targetQuery": "gcse business 9 mark question structure",
    "metaTitle": "GCSE Business 9 Mark Question: Structure + Model Answer",
    "metaDescription": "The GCSE Business 9 mark question rewards two developed chains of analysis and a justified judgement. Structure, timing, and an original worked answer.",
    "h1": "How to Structure the GCSE Business 9 Mark Question",
    "quickAnswer": "The 9 marker wants two developed chains of analysis and a justified conclusion. Make a point, explain it with because, develop it with this means, then do the same for the other side or a second factor. Finish with a judgement that answers the question and names what it depends on.",
    "intro": "Nine markers decide GCSE Business grades more than any other question type, because they carry the most marks and most people answer them the same mediocre way: a list of advantages and disadvantages with I think it is a good idea stapled to the end. That scores Level 2 forever. I sit Cambridge IGCSE Business, where the equivalent evaluation questions work the same way, and the fix that moved my marks was embarrassingly simple: fewer points, longer chains. This page gives you the structure, shows how the levels split, and works through a full original 9 marker with a model answer.",
    "sections": [
      {
        "heading": "The formula: point, explain, develop, twice, then judge",
        "body": "A 9 marker needs two chains of analysis and a conclusion, and nothing else. Chain one: make a point that answers the question, explain it with because, then push it at least one step further with this means or this leads to. A proper chain reads like: buying a second van increases capacity, because two teams can clean cars at the same time, which means revenue can grow without turning customers away, which matters because the owner is currently refusing bookings. Chain two: either the strongest point on the other side, or a second factor, built exactly the same way. Then the judgement. On Edexcel the command word is usually evaluate or justify; AQA often phrases it as recommend, or analyse and evaluate. The wording changes, the structure does not. Two chains and a real conclusion in about twelve minutes. Writing a third chain is almost always a worse use of time than deepening the two you already have."
      },
      {
        "heading": "How the levels split, and why chains beat lists",
        "body": "The mark scheme has three levels of three marks. Level 1 answers show knowledge: accurate points, no development. Level 2 answers explain points but leave them disconnected, or develop one side only. Level 3 answers sustain chains of reasoning on both sides, root them in the context given, and reach a supported judgement. Notice what is missing: there is no reward for quantity. Six accurate advantages of opening a second shop, each one sentence long, is a Level 1 answer worth two or three marks. Two points argued four steps deep is Level 3 territory. Context is the other separator. If your answer would work for any business, you are capped around the middle. Use the names, the numbers and the situation in the case study. Every time you write a general point, ask what it means for this specific business and add that sentence. That single habit is worth more than memorising twenty theory definitions."
      },
      {
        "heading": "The judgement paragraph: what it depends on really means",
        "body": "The conclusion is where Level 3 lives, and it has three jobs. First, answer the actual question with a side: yes she should buy the van, or no she should not. Second, give the deciding reason, chosen from your chains, not a new point. Third, name what the decision depends on. This is not a magic phrase, it is a real condition: the second van makes sense if demand stays high enough to keep two teams busy, but if bookings are seasonal the extra fixed costs could turn profit into loss. Depends-on factors examiners reward include the business's cash position, how competitors might react, the state of the market, and the owner's objectives. Weak conclusions restate both sides and refuse to choose. Strong ones commit, justify, and qualify in three or four sentences. If you are short on time, skip developing chain two further and write the judgement. An unfinished argument with a conclusion outscores a finished one without."
      }
    ],
    "problems": [
      {
        "question": "Priya runs a mobile car valeting business in a mid-sized town. She works alone with one van and is fully booked three weeks ahead, regularly turning new customers away. A second van would cost £14,000, and hiring a valeter would cost around £22,000 a year. Priya has £16,000 saved in the business and no debts. Evaluate whether Priya should buy the second van and hire a valeter. You should use the information provided as well as your knowledge of business. (9 marks)",
        "steps": [
          "Plan for one minute: chain for, chain against, judgement with a depends-on factor. Circle the numbers in the case study, because Level 3 answers use them.",
          "Chain one, for: expansion meets proven demand. Priya is fully booked three weeks ahead and turning customers away, so a second van adds capacity, because two vans can serve two customers at once, which means revenue could roughly double while the demand she already refuses fills the new capacity, so the £22,000 salary could be covered by work she currently cannot take.",
          "Chain two, against: the finances are tight and the risk is fixed costs. The van costs £14,000 and she has £16,000, so the purchase nearly empties the business's savings, which means one quiet season or a breakdown could leave her unable to cover a £22,000 salary commitment, and unlike her own labour, an employee must be paid whether or not bookings hold up.",
          "Judgement: commit to a side, pick the deciding factor from your chains, and add the condition. Here the proven, excess demand is the strongest single piece of evidence in the case."
        ],
        "answer": "Model judgement: Priya should buy the van and hire, because the strongest evidence in the case is three weeks of bookings and refused customers, which shows the extra capacity would be used rather than sitting idle. The decision depends on demand being year-round rather than seasonal, and she could reduce the risk by financing part of the £14,000 van cost instead of spending nearly all her savings at once.",
        "markTip": "Examiners can only award Level 3 if both your chains use the case study. Copying Priya's numbers into your reasoning, £14,000 against £16,000 saved, is the fastest visible way to show context.",
        "variant": "Marcus owns a small bakery with £11,000 saved. His rent is rising 20 percent next year. He is deciding whether to move to a cheaper unit on the edge of town, losing passing trade, or stay and raise his prices. Evaluate whether Marcus should move. You should use the information provided as well as your knowledge of business. (9 marks)"
      }
    ],
    "faqs": [
      {
        "q": "How long should a 9 mark answer be in GCSE Business?",
        "a": "Roughly a page of normal handwriting, about 250 to 350 words, written in 12 to 13 minutes. That is enough for two developed chains and a proper judgement. Longer answers usually mean more points with less development, which is exactly the pattern the mark scheme punishes."
      },
      {
        "q": "Do I need to write about both sides in a 9 marker?",
        "a": "For the top level, yes, in effect. Level 3 descriptors ask for balanced, sustained analysis, and a judgement can only be justified if you have shown what you weighed it against. One strong chain each way beats three chains on the same side."
      },
      {
        "q": "Can I use real business examples in my answer?",
        "a": "On case-study 9 markers, the context that scores is the case study itself, so use Priya's numbers, not Tesco's. Real examples only help on the rare theory-only questions. Dropping in a famous company where the question gave you a specific business usually signals a generic answer."
      },
      {
        "q": "What should I do if I am running out of time on the 9 marker?",
        "a": "Write the judgement anyway. A short chain for, one sentence against, and a committed conclusion with a depends-on factor can still land in Level 3, because the scheme rewards the shape of the argument. An abandoned answer with no conclusion almost never gets past Level 2."
      }
    ],
    "hubSubjects": [
      "economics",
      "accounting"
    ]
  },
  {
    "board": "gcse",
    "slug": "aqa-english-paper-1-question-5",
    "targetQuery": "aqa english language paper 1 question 5 model answer",
    "metaTitle": "AQA English Language Paper 1 Question 5 Model Answer",
    "metaDescription": "AQA English Language Paper 1 Question 5 is worth 40 marks: 24 for AO5, 16 for AO6. What examiners reward, structure tricks, and an original model answer.",
    "h1": "AQA English Language Paper 1 Question 5: Structure and a Full Model Answer",
    "quickAnswer": "Question 5 is worth 40 marks: 24 for content and organisation (AO5) and 16 for technical accuracy (AO6). Examiners reward deliberate structure, controlled vocabulary and accurate, varied punctuation, not complicated plots. Plan for five minutes, write around 500 words with a clear shape, and keep three minutes to proofread.",
    "intro": "Half your marks on AQA English Language Paper 1 come from one question, and it is the one most people wing. I did the same until I read the level descriptors and realised examiners are not looking for imagination, they are looking for control: a structure that was clearly chosen on purpose, vocabulary that is precise rather than showy, and sentences that are punctuated correctly. I take Cambridge IGCSE English rather than AQA, but I practised this paper alongside friends who sit it, and the same habits lifted both our marks. Below: how the 40 marks split, the structure tricks that reliably reach the top bands, and a complete original model answer to an original prompt.",
    "sections": [
      {
        "heading": "How the 40 marks split: AO5 and AO6",
        "body": "AO5 is content and organisation, worth 24 marks. It rewards a piece that matches the task and audience, uses deliberate structural features, links paragraphs so the whole thing feels shaped, and picks vocabulary and imagery for effect rather than decoration. The word the top band keeps circling is crafted: the examiner should feel that every choice was made on purpose. AO6 is technical accuracy, worth 16 marks. It rewards a range of punctuation used correctly, controlled sentence variety, accurate spelling including ambitious words, and secure grammar. Sixteen marks is huge, more than most whole questions on this paper, and it is the cheapest place to gain because nothing in it requires talent, only habits. The split also explains a pattern teachers see constantly: imaginative students who never proofread lose to average writers who are accurate and organised. You do not need a brilliant idea. You need a controlled one."
      },
      {
        "heading": "Structure tricks the top band rewards",
        "body": "Three moves reliably read as crafted. First, the zoom: open wide like a camera taking in a whole scene, then narrow to one small detail, a rusted ladder, a single locker, and let that detail carry the description. Second, the loop: end by returning to your opening image, changed slightly, which makes the piece feel designed rather than abandoned. Third, the pivot: a one-sentence paragraph placed deliberately for emphasis, once or maybe twice, never more. Pick one motif and thread it through, water, light, a repeated sound, so the paragraphs feel connected instead of being five unrelated descriptions. Plan all of this in five minutes before writing: five boxes, one image each, opening image repeated in box five with a change. If you choose the story option, keep the plot tiny, one event, one character, a narrow window of time, because 40-mark stories fail from ambition far more often than from dullness."
      },
      {
        "heading": "AO6: accuracy beats ambition",
        "body": "Sixteen marks sit on things you can control completely. Use a genuine range of punctuation: semicolons where two sentences share one thought, colons to open a list or land an idea, dashes sparingly, commas that actually mark clauses. One correct semicolon outscores three decorative ones. Vary sentence length on purpose, following a long accumulating sentence with a short one. Ambitious vocabulary only earns marks when it is the right word: incandescent is only better than bright when the thing really is burning with light. Keep three minutes at the end to proofread, and read your last paragraph first, because errors cluster where you were rushing. In practice pieces I keep a list of my own repeat offenders, its and it is, missing commas after fronted adverbials, and check just those. Fixing your five habitual errors is worth more than any thesaurus."
      }
    ],
    "problems": [
      {
        "question": "Original practice prompt, written for this page and not taken from any past paper: Write a description of an empty swimming pool in winter, long after the season has ended. (24 marks for content and organisation, 16 marks for technical accuracy: 40 marks total)",
        "steps": [
          "The five-minute plan, five boxes: one, wide shot of the drained pool. Two, zoom to the painted depth markings. Three, the changing rooms. Four, a single found object. Five, return to the opening image, changed. Motif: water that is no longer there.",
          "Model answer, paragraph one: The pool holds its breath. Twenty-five metres of nothing, tiled in a blue that believed in summer, now cupped under a sky the colour of dishwater. Rain has gathered in the deep end, a puddle pretending to be what the pool used to be. Around the edges, the lane ropes lie coiled like something hibernating.",
          "Paragraph two: Up close, the tiles tell the truth. The painted numbers, 0.9, 1.8, 3.6, still measure depths that no longer exist; they are rulers for a ghost. Frost has found the grout and picked at it all night, patient as a habit. Where a thousand feet once queued for the ladder, one brown leaf performs a slow cartwheel and settles.",
          "Paragraph three: The changing rooms have forgotten how to echo. Doors hang open on their hinges, a row of yawns. A poster about verruca socks peels from the wall at one corner, curling in on itself as if embarrassed to still be here. Somewhere a tap drips, keeping a time nobody is counting.",
          "Paragraph four, a deliberate one-sentence paragraph: Nobody has laughed here for months.",
          "Paragraph five: In the shallow end lies a single armband, sun-bleached from orange to the pink of old plasters. It must have been dropped in September, in that last chlorine-smelling week, by a child who cried all the way to the car. The pool has kept it the way an empty house keeps a glove.",
          "Paragraph six: The pool holds its breath, still. But under the dishwater sky the rain keeps arriving, millimetre by millimetre, filling the deep end without permission. Winter, it turns out, is not the opposite of swimming; it is the slow, cold rehearsal for June."
        ],
        "answer": "Why this reaches the top bands: the structure is visibly deliberate, a wide shot, a zoom, a one-sentence pivot, one symbolic object, and an ending that loops back to the opening line with a change. One motif, the absent water, threads through every paragraph. The vocabulary is controlled rather than showy, and the punctuation range, semicolons, colons, commas marking clauses, is used correctly, which is exactly what AO6 pays for.",
        "markTip": "AO5 and AO6 are marked separately, so a technically clean answer with a simple idea can outscore a wild, error-filled one by ten marks. Protect the last three minutes for proofreading even if it costs you a sentence of the ending.",
        "variant": "Original practice prompt: Write a description of a school hall on the evening after exam results day, once everyone has gone home. (40 marks)"
      }
    ],
    "faqs": [
      {
        "q": "Should I choose the story or the description in Question 5?",
        "a": "Examiners have no preference, so choose whichever you have practised more. Under time pressure, description is usually safer: stories collapse when the plot outgrows 45 minutes. If you do write the story, keep it to one event, one character, and a short window of time."
      },
      {
        "q": "How long should my Question 5 answer be?",
        "a": "Around 450 to 600 words. There is no length requirement, and the top bands reward control, not volume. A shaped 500-word piece with time left to proofread will nearly always outscore an 800-word piece that unravels and never gets checked."
      },
      {
        "q": "Can I memorise a model answer and use it in the exam?",
        "a": "Memorising a whole piece is risky, because your answer must clearly fit the prompt or picture on the day, and examiners recognise pre-learned writing that does not. What does transfer is technique: a practised structure, a bank of images you have refined, and your own reliable sentences. Adapt, do not transplant."
      },
      {
        "q": "Do I have to describe the picture exactly?",
        "a": "No. The task says a description suggested by the picture, so it is a springboard. You can zoom in on one detail, move beyond the frame, or shift the time of day, as long as the connection stays recognisable. Ignoring the stimulus completely is what costs marks against the task-matching part of AO5."
      }
    ],
    "hubSubjects": [
      "english"
    ]
  },
  {
    "board": "gcse",
    "slug": "gcse-compare-questions-technique",
    "targetQuery": "how to answer compare questions gcse",
    "metaTitle": "How to Answer Compare Questions GCSE: Technique + Example",
    "metaDescription": "Compare questions at GCSE need linked sentences that hold both things at once, not two separate answers. The technique, with a worked example and data.",
    "h1": "How to Answer Compare Questions at GCSE",
    "quickAnswer": "A compare answer must hold both things in every sentence. Use linked sentences: a statement about the first, a connective like whereas or similarly, a statement about the second, then evidence or data. If any sentence still makes sense with one side deleted, it is describing, not comparing, and it will not score.",
    "intro": "Compare questions appear everywhere: two poems in English, two graphs in geography, two experimental methods in science. The mistake is identical everywhere too, and I made it for years: writing a paragraph about the first thing, a paragraph about the second, and hoping the examiner connects them. Mark schemes are blunt about this, separate descriptions score in the bottom level no matter how accurate they are. The fix is a sentence-level habit called the linked sentence, and once it is automatic you can lift it between subjects. This page shows the technique, how it flexes across English, science and geography, and a worked data example with a model answer.",
    "sections": [
      {
        "heading": "The mistake that caps everyone at the bottom level",
        "body": "Most compare answers are two mini-essays wearing a trench coat. Everything about graph A, then everything about graph B, then maybe a final line saying so they are quite different. Examiners cannot award comparison marks for that, because the comparing never actually happens on the page; it happens, if at all, in the reader's head. Mark schemes for compare questions typically describe the bottom level as separate or descriptive points and the top level as clear, developed comparisons, which means the linking is the skill being assessed, not the knowledge. The test I run on my own answers: pick any sentence and cover the half about one of the two things. If the sentence still works, it was description. This also means you do not need more content to score higher. The same four facts, rearranged into linked sentences, can move an answer from the bottom level to the top."
      },
      {
        "heading": "The linked sentence, step by step",
        "body": "One linked sentence has four parts: a claim about the first thing, a comparing connective, the matching claim about the second thing, and evidence. Connectives for differences: whereas, while, however, by contrast. For similarities: similarly, likewise, both, just as. So: Country X's renewable share rose steeply, whereas Country Y's barely moved, rising 36 percentage points against 6. In English the evidence is a short quotation from each text; in geography and science it is data, and the strongest answers manipulate the numbers rather than repeating them: twice as high, four times faster, 19 degrees warmer. Two more habits finish the job. Compare like with like: pair the trend in one with the trend in the other, not a trend with a single value. And when the marks allow, go past the surface: after the linked sentence, add a because line suggesting why the difference exists. That developed comparison is what the top level of most schemes describes."
      },
      {
        "heading": "How the technique flexes across subjects",
        "body": "English: compare questions usually want attitudes or methods, so the linked sentence pairs a method and quotation from each text: the first writer presents the sea as an enemy clawing at the boat, whereas the second treats it almost as a companion. Stems like both writers, but only the second, and while the first are worth drilling until they come out automatically. Geography: compare means patterns and data, so quote figures from both sides and manipulate them, and keep description separate from explanation unless the question asks why. Science: you might compare two sets of results, two methods, or two processes such as mitosis and meiosis, and precision matters more than flow, one variable per sentence, both sides named. In every subject, the mark allocation tells you the workload: roughly one mark per clear linked point, two where it is developed with data or explanation. Four marks usually means two developed comparisons or three simple ones, not six."
      }
    ],
    "problems": [
      {
        "question": "Figure 1 shows the percentage of electricity generated from renewable sources in two countries. Country X: 12 percent in 2010, rising to 48 percent in 2024. Country Y: 10 percent in 2010, rising to 16 percent in 2024. Using Figure 1, compare the change in renewable electricity generation in Country X and Country Y. (4 marks)",
        "steps": [
          "Find the similarity first, because most people jump straight to differences and miss an easy mark: both countries increased their renewable share over the period, from similar starting points.",
          "Find the headline difference: the size of the increase. Country X rose by 36 percentage points, Country Y by only 6.",
          "Manipulate the data instead of repeating it: X's share quadrupled while Y's grew by about half, and X ended three times higher than Y.",
          "Write it as linked sentences, both countries plus whereas, with the figures inside the sentences. Two developed comparisons is enough for four marks."
        ],
        "answer": "Model answer: Both countries increased their share of renewable electricity between 2010 and 2024, and they started from similar points of 12 percent and 10 percent. However, Country X's share rose far faster, quadrupling to 48 percent, whereas Country Y's rose by only 6 percentage points to 16 percent, meaning that by 2024 Country X generated three times as much of its electricity from renewables as Country Y.",
        "markTip": "Examiners award compare marks only for sentences that mention both sides. Starting every sentence with Both, or Country X... whereas Country Y, forces the link, and quoting manipulated figures turns a simple comparison into a developed one.",
        "variant": "Two students measured the cooling of 100 cm3 of hot water over ten minutes. Insulated beaker: 80 C falling to 61 C. Uninsulated beaker: 80 C falling to 42 C. Compare the results of the two experiments. (4 marks)"
      }
    ],
    "faqs": [
      {
        "q": "Do compare questions want similarities, differences, or both?",
        "a": "Read the exact wording. A plain compare credits both, and differences usually carry more of the marks because there are more of them to find. If the question says compare the differences, similarities score nothing. Starting with one clear similarity, then moving to differences, covers you either way."
      },
      {
        "q": "How many comparisons do I need for a 4 mark compare question?",
        "a": "Usually two developed comparisons or three to four simple ones. A developed comparison is a linked sentence plus data manipulation or a because line. Six rushed surface points is the wrong trade: the scheme runs out of things to credit and you have burned time you needed elsewhere."
      },
      {
        "q": "Is it okay to use whereas in every sentence?",
        "a": "You will still score, because examiners mark the link, not the vocabulary. But rotating a small set, whereas, while, however, by contrast, similarly, both, makes the writing feel controlled and stops you noticing mid-exam that every sentence has the same hinge. I drill about six connectives and no more."
      },
      {
        "q": "Can I answer a compare question as a table?",
        "a": "In science and geography a two-column table with paired points is usually credited, but it nudges you toward surface matching and makes developed comparisons with data manipulation harder to show. In English essays, never. Full linked sentences are the safer habit in every subject."
      }
    ],
    "hubSubjects": [
      "english",
      "geography"
    ]
  },
  {
    "board": "gcse",
    "slug": "edexcel-gcse-maths-grade-boundaries",
    "metaTitle": "Edexcel GCSE Maths Grade Boundaries 2026 (Real Marks)",
    "metaDescription": "Official summer 2026 Edexcel GCSE Maths grade boundaries: grade 9 at 208, grade 4 at 50 on Higher, plus Foundation marks, percentages and 2025 comparison.",
    "h1": "Edexcel GCSE Maths Grade Boundaries 2026: Higher and Foundation",
    "quickAnswer": "In summer 2026, Edexcel GCSE Maths (1MA1) Higher tier needed 208 out of 240 for a grade 9, 146 for a 7, 82 for a 5 and 50 for a 4. Foundation needed 181 for a 5 and 151 for a 4. Boundaries are set fresh every year, so 2027 will differ.",
    "intro": "Pearson published the summer 2026 grade boundaries for GCSE Maths (1MA1) on results day, 20 August 2026, and the numbers below come straight from that official document. The qualification is marked out of 240 across three papers of 80 marks each, and boundaries apply to your combined total, not to individual papers. One thing to be clear about before the numbers: boundaries are set after marking each year, so the 2026 figures tell you how the 2026 papers were judged. They are a useful guide for 2027 students, not a target that will stay put. That said, the 2026 set moved in interesting ways against 2025, and the movement itself tells you something about the papers.",
    "sections": [
      {
        "heading": "The summer 2026 boundaries in full",
        "body": "Higher tier, out of 240: grade 9 needed 208 marks, grade 8 needed 177, grade 7 needed 146, grade 6 needed 114, grade 5 needed 82 and grade 4 needed 50. There is also an allowed grade 3 at 34 marks, which acts as a safety net for students who narrowly miss a 4. In rough percentages, that is 87 percent for a 9, 61 percent for a 7, 34 percent for a 5 and just 21 percent for a 4. Foundation tier, also out of 240: grade 5 needed 181 marks, grade 4 needed 151, grade 3 needed 110, grade 2 needed 69 and grade 1 needed 29. As percentages, a 5 took 75 percent and a 4 took 63 percent. Notice the gap: the same grade 5 costs 34 percent on Higher and 75 percent on Foundation, because the two tiers test very different ranges of content and difficulty. These figures are for the June 2026 series only and will not carry over unchanged to 2027."
      },
      {
        "heading": "How the 2026 boundaries moved against 2025",
        "body": "Every Higher boundary dropped in 2026. Grade 9 fell from 217 to 208, grade 8 from 186 to 177, grade 7 from 156 to 146, grade 6 from 121 to 114, grade 5 from 87 to 82 and grade 4 from 53 to 50. A drop of around ten marks at the top grades usually means the papers were genuinely harder, because boundaries are lowered to keep outcomes comparable year on year rather than to punish a cohort for a nasty paper. Foundation moved the other way: grade 5 rose from 175 to 181 and grade 4 from 144 to 151, which suggests the Foundation papers sat slightly more comfortably than the year before. If you walked out of a 2026 Higher paper feeling battered, this is the mechanism that protected you. The lesson for 2027 students is not to memorise these numbers but to learn the range: a Higher grade 7 has lived between roughly 146 and 156 marks over the last two series."
      },
      {
        "heading": "What this means for revision strategy",
        "body": "The most useful number on this page is 50. That was a Higher grade 4 in 2026, which works out at around 17 marks per paper out of 80. If you are a borderline Higher student, the pass is more reachable than the raw papers feel, but the risk cuts the other way too: score below the allowed grade 3 at 34 marks and you are ungraded, where a Foundation entry would have banked a solid grade. Choose tier on your mock evidence, not your pride. For grade 7 chasers, 146 out of 240 means you can drop almost 40 percent of the marks and still get there, so stop trying to master every topic and instead make the routine method marks automatic. For the grade 9, 208 out of 240 leaves room for about ten dropped marks per paper, so accuracy under time pressure matters more than extra content. Whatever your target, aim comfortably above the most recent boundary, because next year's could sit higher."
      },
      {
        "heading": "Why boundaries change, in plain terms",
        "body": "Boundaries are not decided before the exam. Senior examiners set them after every script is marked, using statistics about the cohort's prior attainment plus judgement about the quality of work at each grade, a system Ofqual calls comparable outcomes. The aim is that a grade 7 student in a hard year and a grade 7 student in an easy year end up with the same grade. That is why the Higher boundaries fell in 2026 while Foundation rose slightly: two different sets of papers, two different judgements. It is also why no website, this one included, can tell you the 2027 boundaries in advance. Anyone publishing predicted boundaries before results day is guessing. Treat past boundaries as a rough map of the territory, check Pearson's official grade boundaries page on results day, and plan your revision around comfortable margins rather than exact marks."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "What percentage is a grade 9 in Edexcel GCSE Maths?",
        "a": "In summer 2026 it was 208 out of 240 on Higher tier, which is about 87 percent. In 2025 it was 217, about 90 percent. It changes every series, so treat 85 to 90 percent as the realistic zone rather than a fixed line."
      },
      {
        "q": "What mark do you need to pass Edexcel GCSE Maths?",
        "a": "A standard pass is grade 4. In summer 2026 that meant 50 out of 240 on Higher tier, about 21 percent, or 151 out of 240 on Foundation, about 63 percent. The Higher figure looks tiny because Higher papers contain much harder material."
      },
      {
        "q": "Are grade boundaries per paper or overall?",
        "a": "Overall. Edexcel adds your marks from all three papers into a total out of 240 and applies the boundary to that. A weak Paper 1 can be rescued by a strong Paper 3."
      },
      {
        "q": "Will the 2027 boundaries be the same as 2026?",
        "a": "No. Boundaries are set after marking each year and typically move by a few marks, occasionally more. Use 2026 as a guide, then check the official Pearson document on results day 2027."
      },
      {
        "q": "Is it easier to get a grade 5 on Foundation or Higher?",
        "a": "Neither is free. In 2026 a Foundation 5 took 181 out of 240, around 75 percent of easier papers, while a Higher 5 took 82, around 34 percent of much harder ones. Pick the tier where your mocks say you are safest, remembering Foundation caps you at a 5."
      }
    ],
    "targetQuery": "edexcel gcse maths grade boundaries 2026",
    "hubSubjects": [
      "math"
    ]
  },
  {
    "board": "gcse",
    "slug": "aqa-gcse-science-grade-boundaries",
    "metaTitle": "AQA GCSE Combined Science Grade Boundaries (2026 Marks)",
    "metaDescription": "AQA Combined Science Trilogy boundaries, summer 2026: 9-9 at 298 of 420, 4-4 at 111 on Higher, Foundation marks, and how the double grade works.",
    "h1": "AQA GCSE Combined Science Grade Boundaries: How the Double Grade Works",
    "quickAnswer": "In summer 2026, AQA Combined Science Trilogy Higher tier needed 298 out of 420 for a 9-9, 228 for a 7-7 and 111 for a 4-4. Foundation needed 276 for a 5-5 and 238 for a 4-4. Combined Science awards two grades, and boundaries change every year.",
    "intro": "AQA published the summer 2026 grade boundaries for Combined Science Trilogy (8464) on results day, 20 August 2026, and every number here comes from that official document. Combined Science is the version most students sit, it is worth two GCSEs, and it uses a double-grade scale from 9-9 down to 1-1 that confuses almost everyone the first time they see it. Six papers of 70 marks each make a total of 420, and one overall boundary table decides both grades at once. Boundaries are reset after marking every year, so the 2026 figures below are a guide to the territory, not a promise about 2027.",
    "sections": [
      {
        "heading": "How the double grade actually works",
        "body": "Combined Science gives you two grades because it counts as two GCSEs, but you do not get separate grades for biology, chemistry and physics. All six papers, two per science, feed one total out of 420, and that single total is looked up in one boundary table. The scale runs 9-9, 9-8, 8-8, 8-7, 7-7 and so on down to 1-1, seventeen steps in all. The two grades are always identical or adjacent: you can get an 8-7 but never an 8-5, and there is no mechanism for a brilliant physicist to pull a 9 in physics while sitting on a 5 in biology, because the qualification never separates them. Higher tier covers 9-9 down to 4-4, with 4-3 as an allowed safety-net grade just below. Foundation covers 5-5 down to 1-1. On results day you see something like 5-4, which counts as two grades, a 5 and a 4, when sixth forms and colleges add up your results."
      },
      {
        "heading": "Summer 2026 Higher tier boundaries, and how they moved",
        "body": "Out of 420: 9-9 needed 298 marks, 9-8 needed 280, 8-8 needed 262, 8-7 needed 245, 7-7 needed 228, 7-6 needed 208, 6-6 needed 188, 6-5 needed 168, 5-5 needed 149, 5-4 needed 130, 4-4 needed 111 and the allowed 4-3 needed 101. In percentages, a 9-9 was about 71 percent, a 7-7 about 54 percent, a 5-5 about 35 percent and a 4-4 about 26 percent. Compared with summer 2025, the top barely moved: 9-9 was 299 then, and 7-7 was exactly 228 in both years. The bottom rose sharply, though. The 4-4 jumped from 96 to 111 and the 5-5 from 140 to 149, which usually means the papers were more accessible at the lower end. If you are a borderline Higher student, note that trend, because the pass that cost 23 percent in 2025 cost 26 percent in 2026, and it may drift again next summer."
      },
      {
        "heading": "Summer 2026 Foundation tier boundaries",
        "body": "Out of 420: the top available grade, 5-5, needed 276 marks, 5-4 needed 257, 4-4 needed 238, 4-3 needed 208, 3-3 needed 178, 3-2 needed 149, 2-2 needed 120, 2-1 needed 91 and 1-1 needed 62. In percentages, a 5-5 took about 66 percent, a 4-4 about 57 percent and a 3-3 about 42 percent. Against 2025 everything nudged up a little: 5-5 rose from 271, 4-4 from 231 and 3-3 from 173. Movements of five to seven marks out of 420 are small, under two percent, so Foundation difficulty was essentially stable. The number worth staring at is 238 for a 4-4: to bank the double standard pass on Foundation you need well over half the marks, whereas on Higher the same 4-4 sat at 26 percent. That is not a trick, it reflects how much harder the Higher papers are, but it should shape which tier you enter."
      },
      {
        "heading": "Foundation or Higher: honest strategy",
        "body": "The tier decision matters more in Combined Science than almost anywhere else because it covers two GCSEs at once: get it wrong and both grades suffer. Foundation caps you at 5-5, so if a sixth form course wants 6s in science, Foundation cannot deliver them no matter how well you perform. Higher's floor is the allowed 4-3, 101 marks in 2026; fall below that and the result is unclassified, where the same performance on Foundation would have earned solid grades. A sensible test from the 2026 numbers: if your timed mocks on Higher papers sit reliably above roughly 30 percent, you had margin over the 4-4 line with room for a bad day. If you are scraping 25 percent, you are betting two GCSEs on the boundary staying put, and 2026 proved it can rise by fifteen marks in a year. Sit real past papers under exam conditions, mark them harshly, and let that evidence pick the tier. And remember these boundaries reset every summer."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "What does a 4-3 mean in GCSE Combined Science?",
        "a": "It is two grades, a 4 and a 3, across the two GCSE slots. On Higher tier, 4-3 is the allowed safety-net grade for students who narrowly miss 4-4; in summer 2026 it sat at 101 marks out of 420."
      },
      {
        "q": "What percentage is a 9-9 in AQA Combined Science?",
        "a": "In summer 2026, 298 out of 420 on Higher tier, which is about 71 percent. That is lower than the grade 9 threshold in many single subjects, but the boundary changes each series, so do not treat it as fixed."
      },
      {
        "q": "Can you get different grades in biology, chemistry and physics?",
        "a": "Not independently. All six papers feed one total and one boundary table, so the two grades are always equal or adjacent, like 6-6 or 6-5. If you want a separate grade for each science, you need Triple Science instead."
      },
      {
        "q": "Does Combined Science count as two GCSEs?",
        "a": "Yes. A 6-6 counts as two GCSEs at grade 6, and a 5-4 counts as one 5 and one 4 when colleges add up your results for entry requirements."
      },
      {
        "q": "Are the 2026 boundaries a safe target for 2027?",
        "a": "No. AQA sets boundaries after marking each summer. The Higher 4-4 rose from 96 to 111 marks between 2025 and 2026, so build a margin above the most recent numbers rather than aiming exactly at them."
      }
    ],
    "targetQuery": "aqa gcse combined science grade boundaries",
    "hubSubjects": [
      "chemistry",
      "physics",
      "biology"
    ]
  },
  {
    "board": "gcse",
    "slug": "what-grade-is-60-percent-gcse",
    "metaTitle": "What Grade Is 60 Percent at GCSE? It Depends (2026 Data)",
    "metaDescription": "What 60 percent gets you at GCSE using real summer 2026 boundaries: a grade 6 in maths Higher, 8-7 in Higher combined science, a 3 on maths Foundation.",
    "h1": "What Grade Is 60 Percent at GCSE? Honest Answer: It Depends",
    "quickAnswer": "There is no fixed answer: 60 percent at GCSE in summer 2026 was a grade 6 in Edexcel Higher maths, a 6 in AQA English Language, roughly a 7 in AQA history, an 8-7 in Higher combined science, but only a 3 on maths Foundation. It varies by subject, tier and year.",
    "intro": "Type this question into a search engine and you will find confident answers that are wrong, because GCSE grades are not percentage-based. Boundaries are set separately for every subject, every tier and every exam series, after marking is finished. So 60 percent has no fixed meaning: in summer 2026 it stretched from a grade 3 to nearly an 8-8 depending on where you scored it. What I can do is show you exactly what 60 percent earned in the summer 2026 series, using the official boundary documents Edexcel and AQA published on results day, 20 August 2026, and then give you honest rules of thumb for reading your own mock scores.",
    "sections": [
      {
        "heading": "What 60 percent earned in summer 2026, subject by subject",
        "body": "Take 60 percent of each qualification's maximum and look it up in the June 2026 boundary tables. Edexcel Maths Higher: 144 out of 240 was a grade 6, agonisingly two marks short of the grade 7 at 146. Edexcel Maths Foundation: the same 144 was only a grade 3, because a Foundation 4 needed 151. AQA English Language: 96 out of 160 was a grade 6. AQA English Literature: 96 was a grade 5, one mark below the 6 at 97. AQA Combined Science Higher: 252 out of 420 landed on 8-7. AQA Biology Higher: 120 out of 200 was exactly the grade 8 boundary. AQA Physics Higher: the same 120 out of 200 was a grade 6. AQA History: around 100 out of 168 was a grade 7 on most options. So 60 percent in 2026 meant anything from a 3 to an 8, sometimes within the same subject at different tiers. That spread is the whole answer."
      },
      {
        "heading": "Why there is no fixed conversion",
        "body": "Grade boundaries exist to keep grades fair across years, not to reward a fixed percentage. Every summer, senior examiners set boundaries after all scripts are marked, using prior-attainment statistics and scrutiny of real scripts, so a harder paper gets lower boundaries and an easier one gets higher ones. That is why Edexcel Maths Higher needed 146 out of 240 for a 7 in 2026 but 156 in 2025: same grade, different papers. Tier matters even more than year. Higher papers contain the hardest content, so their boundaries sit low; in 2026 a Higher grade 4 in Edexcel Maths cost just 21 percent while a Foundation grade 4 cost 63 percent. And subjects differ by design: English Literature's grade 9 sat at 89 percent while Higher Combined Science's 9-9 sat at 71 percent, partly because science papers are built with harder marks to separate the top grades. Any chart claiming one universal percentage-to-grade table for GCSE is fiction."
      },
      {
        "heading": "Rough rules of thumb, with the caveat attached",
        "body": "With the yearly-change warning stamped on everything, recent series do show stable patterns. On Foundation tiers, a standard pass at grade 4 usually needs somewhere around 55 to 65 percent, and the capped grade 5 around 65 to 78 percent. On Higher tier maths and science, a grade 4 tends to live between about 20 and 30 percent, a grade 7 between about 50 and 70 percent, and a grade 9 between about 70 and 90 percent depending on the subject. Essay subjects cluster differently: in 2026 a grade 4 in AQA English Language was 47 percent and a grade 9 was 76 percent. If you are marking your own mock, the honest method is not a percentage rule at all: find last summer's boundary table for your exact board, subject and tier, apply it to your raw mark, then assume the real boundary could sit five marks either side of where it was."
      },
      {
        "heading": "So is 60 percent good at GCSE?",
        "body": "It depends what you are aiming at and where you scored it. On a Higher tier science or maths paper, 60 percent is a genuinely strong performance, comfortably grade 6 to 8 territory in 2026. On a Foundation paper it is more fragile: it cleared the grade 4 line in AQA Combined Science Foundation, which sat at 57 percent, but fell short of it in Edexcel Maths Foundation, which sat at 63 percent. That last case is worth repeating, because students on Foundation maths sometimes assume 60 percent guarantees the pass, and in 2026 it did not. If your mocks are landing around 60 percent, the useful move is not celebrating or panicking but checking the specific boundary for your board, subject and tier, then targeting ten marks above it. Boundaries move every year, and a margin is the only prediction that never goes out of date."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is 60 percent a pass at GCSE?",
        "a": "On Higher tier papers, comfortably, since grade 4 boundaries sat far below 60 percent in 2026. On Foundation it is marginal: 60 percent passed AQA Combined Science Foundation but missed the grade 4 in Edexcel Maths Foundation, which needed 63 percent. Always check your own board and tier."
      },
      {
        "q": "What grade is 70 percent at GCSE?",
        "a": "In summer 2026, 70 percent was a grade 4 on Edexcel Maths Foundation, a 6 in AQA English Literature (one mark below the 7), and a 9-8 in Higher Combined Science. The spread is the point: there is no universal conversion."
      },
      {
        "q": "What percentage is a grade 9 at GCSE?",
        "a": "In summer 2026 it varied from about 66 percent in AQA Biology Higher to 89 percent in AQA English Literature, with Edexcel Maths Higher at 87 percent. Expect roughly 70 to 90 percent depending on subject, and expect it to move each year."
      },
      {
        "q": "Do all exam boards have the same grade boundaries?",
        "a": "No. Each board sets boundaries independently for its own papers each series. In summer 2026 a Higher maths grade 7 was 146 out of 240 with Edexcel and 166 out of 240 with AQA, because the papers were different."
      },
      {
        "q": "Where do I find official grade boundaries?",
        "a": "On the exam board websites: Pearson Edexcel, AQA and OCR all publish boundary documents on results day each August. Search the board name plus grade boundaries and the series, and check the document is for the exact year and qualification you want."
      }
    ],
    "targetQuery": "what grade is 60 percent gcse",
    "hubSubjects": [
      "math",
      "english"
    ]
  },
  {
    "board": "ap",
    "slug": "ap-precalculus-score-calculator",
    "metaTitle": "AP Precalculus Score Calculator 2027 — Free Estimate",
    "metaDescription": "Free AP Precalculus score calculator: slide your multiple-choice and free-response marks and see your estimated AP score for 2027. Real 2026 exam structure.",
    "h1": "AP Precalculus Score Calculator (2027)",
    "quickAnswer": "Slide in your AP Precalculus section scores below for an instant estimate. As a rough guide, about 70 percent of the weighted composite has been enough for a 5 in recent estimates, 58 percent for a 4 and 46 percent for a 3 — the College Board resets the real cut points every year.",
    "intro": "The AP Precalculus exam has 40 multiple-choice questions worth 62.5 percent of your score and 4 free-response questions worth 37.5 percent. As one of the newest AP courses, its score distributions are still settling, so the cut-point estimates here are deliberately conservative. Each FRQ rewards shown work: setting up the function model correctly earns points even when the final value slips.",
    "sections": [
      {
        "heading": "How the AP Precalculus exam is scored",
        "body": "Your raw marks combine into a weighted composite: multiple choice contributes 62.5 percent (no penalty for wrong answers — never leave blanks) and the free-response section contributes 37.5 percent across 4 questions totalling 24 raw points, split between calculator and non-calculator parts. The College Board converts the composite to the 1-5 scale with cut points set after each administration. Verified Aug 2026 on College Board's AP Central and AP Students exam pages: Section I is now 42 MCQs (29 no-calculator + 13 calculator; up from the original 40-question format) at 62.5 percent and Section II is 4 FRQs at 37.5 percent scored 6 points each (24 raw) per the official 2025 scoring guidelines, with cutoffs set as conservative estimates slightly above published calculator benchmarks (67/54/42/31) since College Board releases no official conversion."
      },
      {
        "heading": "What to aim for in practice",
        "body": "Working from recent estimates, roughly 70 percent of the composite earns a 5, 58 percent a 4 and 46 percent a 3. Because Precalculus is new, treat any practice result within five points of a boundary as sitting on the boundary. The fastest gains are usually in the free-response section: the rubrics reward labelled models, correct notation and interpretation sentences, all of which are learnable technique. Generate targeted practice with the quiz tool on this site and mark your answers against rubric-style criteria."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is this the official AP Precalculus score calculator?",
        "a": "No — no official calculator exists, because the College Board never publishes the current year's conversion in advance. This estimator uses the real exam structure and weights with conservative cut-point estimates from released information and prep-community data."
      },
      {
        "q": "How accurate is the estimate?",
        "a": "Within about one score point. AP Precalculus is a newer exam, so its curves have moved more between years than older subjects. If your composite lands near a boundary, prepare as if you are just below it."
      },
      {
        "q": "What percentage do I need for a 5 on AP Precalculus?",
        "a": "Recent estimates put a 5 at roughly 70 percent of the weighted composite. Check the calculator above with your own practice-exam numbers to see how your sections combine."
      }
    ],
    "targetQuery": "ap precalculus score calculator",
    "hubSubjects": [
      "math"
    ],
    "calculator": {
      "name": "AP Precalculus",
      "mcqCount": 40,
      "mcqWeightPercent": 62.5,
      "frqCount": 4,
      "frqWeightPercent": 37.5,
      "frqMaxPoints": 24,
      "cutoffs": {
        "five": 70,
        "four": 58,
        "three": 46,
        "two": 33
      },
      "sourceNote": "Verified Aug 2026 on College Board's AP Central and AP Students exam pages: Section I is now 42 MCQs (29 no-calculator + 13 calculator; up from the original 40-question format) at 62.5 percent and Section II is 4 FRQs at 37.5 percent scored 6 points each (24 raw) per the official 2025 scoring guidelines, with cutoffs set as conservative estimates slightly above published calculator benchmarks (67/54/42/31) since College Board releases no official conversion."
    }
  },
  {
    "board": "waec",
    "slug": "waec-gce-2026-second-series-timetable",
    "metaTitle": "WAEC GCE Timetable 2026: Second Series Dates and CBT Format",
    "metaDescription": "The WAEC GCE 2026 second series timetable is out: exams run 4 Sept to 28 Oct 2026. Real dates, CBT format, NGN 37,000 fee, and free computer-based practice.",
    "h1": "WAEC GCE 2026 Second Series: Timetable, Dates and CBT Format",
    "quickAnswer": "The WAEC GCE 2026 second series timetable is officially out: WAEC's registration portal hosts the final timetable, and exams run from Friday 4 September to Wednesday 28 October 2026. Practical planning sessions open the window on 4 September, orals and practicals run 14 to 25 September at individually arranged times, and the main written papers start on Tuesday 22 September with Further Mathematics. WAEC has described the series as computer-based, with objective papers reportedly answered fully on screen and essays following a hybrid format of on-screen questions and handwritten answers. Registration is still open; the portal currently states it closes Thursday 10 September 2026, and the fee is NGN 37,000. Download the official timetable from registration.waecdirect.org rather than trusting aggregator dates, some of which are still showing 2025 information.",
    "intro": "If you typed waec gce timetable 2026 into a search box this week, you got a mess: one site says the exams start in late October, another insists the timetable is not out yet, and the official portal quietly hosts the real document. This page sorts it out. The timetable for the 2026 WASSCE for Private Candidates second series is officially released, exams run from 4 September to 28 October 2026, and registration is still open for a few more days. Below: what the second series actually is, the real dates and the fake ones still circulating, what computer-based WASSCE means once you are sitting in front of the machine, what it costs, and how to rehearse for a screen-based exam for free.",
    "sections": [
      {
        "heading": "What the second series is, and why this one matters",
        "body": "The WASSCE for Private Candidates, which most people still call WAEC GCE, is the exam you sit outside the school system. No principal signs you up: you register yourself, choose your subjects, and sit at a centre WAEC assigns. It runs twice a year, and this second series matters more than usual because of what happened on 5 August. WAEC released the school candidates' results that day: of the 1,950,726 candidates who sat, 1,200,514 obtained credits in at least five subjects including English Language and Mathematics. That is 61.54 percent, which sounds respectable until you flip it around. Roughly 750,000 students missed the five-credits benchmark that university admission depends on. On top of that, Vanguard reported that 167,486 results were withheld over suspected malpractice. If you are in either group, the second series is your fastest route to fixing things, because as a private candidate you can enter just the subjects you need to improve rather than repeating the whole slate, and the results should land in time to be useful for the next admission cycle. It is also the standard route for anyone who left school years ago and needs a WASSCE certificate now, whether for admission, work, or professional registration. Same certificate, same standard, different door."
      },
      {
        "heading": "The real timetable and dates, and the wrong ones still circulating",
        "body": "This needs saying clearly, because sources openly conflict. WAEC's official registration portal hosts a document titled the final timetable for the 2026 second series, internally dated August 2026, and it is the only version to trust. According to that document, the window runs from Friday 4 September to Wednesday 28 October 2026. The first entry, on 4 September, is the practical planning session for Foods and Nutrition 3 and Home Management 3. Orals and practicals run from 14 to 25 September, at times WAEC arranges individually and communicates to candidates directly. The main written papers start on Tuesday 22 September with Further Mathematics and finish on Wednesday 28 October. Meanwhile, at least one popular timetable site still claims the series runs from 25 October to 20 December and that no timetable has been released. That page itself admits its subject schedule is the 2025 edition shown for reference; it was simply overtaken when WAEC published the real document in late August. Two useful notes from the official timetable: where a question paper states a different duration from the timetable, the question paper wins, and candidates with special needs get one and a half times the allotted time. Download your own copy from registration.waecdirect.org, check each of your subjects against it, and confirm anything unclear with WAEC rather than with aggregator sites, including this one."
      },
      {
        "heading": "Registration is still open, and what it costs",
        "body": "Registration has been a moving target this year, so here is the state of play as of 30 August. It opened on 4 May 2026 and was originally meant to close on 31 July. WAEC extended it to 28 August, and the portal now states that registration ends Thursday 10 September 2026; myschool.ng reports the same, with PIN generation and biometric registration closing at 11:59pm that day. Notice the odd wrinkle: registration closes six days after the first practical planning session on 4 September, so if your subjects include Foods and Nutrition or Home Management, register now rather than at the deadline. The fee is NGN 37,000, as WAEC announced in May 2026. Some reports quote NGN 37,500 in total, which is consistent with a NGN 500 bank or agent commission on top, so budget for that. If you see NGN 27,000 anywhere, that is last cycle's figure and it is stale. There are also reports of walk-in registration up to 24 hours before a paper at a higher fee, around NGN 45,000, but that amount is not verified, so treat it as a rumour with a price tag and confirm on the portal before you rely on it. Register at registration.waecdirect.org or through the WAECKONNECT app, and note for later that results are checked at waecdirect.org."
      },
      {
        "heading": "What the computer-based exam looks like on the day",
        "body": "WAEC has described this series as fully computer-based, and both myschool.ng and myschoolgist call the released document the CBT timetable, so plan for screens. Based on how WAEC has run its computer-based WASSCE since late 2025, the format reportedly splits by paper type: objective papers are answered entirely on screen, clicking through multiple-choice questions, while essay and practical papers are hybrid, with questions displayed on screen and answers written by hand in physical answer booklets. The official timetable document does not spell out the mode itself, so treat those details as reported rather than guaranteed, and expect your centre to brief you before your first paper. Practically, this changes how you should approach exam day. Arrive early, because computer-based sessions involve identity verification before you get a seat, and a queue at check-in is harder to absorb than at a paper exam. Bring your registration details and whatever identification your centre asks for, plus good pens, because the hybrid essay format still lives or dies on handwriting. Expect the software to let you move between objective questions and change answers before submitting, but do not assume any specific feature until you have seen the centre's own demonstration. One more detail from the official timetable worth knowing: Visual Art 3B question papers are given to candidates two weeks before the paper, so if you entered for it, ask your centre about collection."
      },
      {
        "heading": "How to prepare for an exam you sit at a screen",
        "body": "Most candidates prepare on paper and then meet the exam on a screen, and that mismatch costs marks. Reading a passage on a monitor is slower than on paper until you have practised it, and clicking through fifty objective questions has its own rhythm: answer what you know, flag what you doubt, come back at the end. So build screen practice into your revision instead of only drilling past topics in a notebook. The free mock exam generator on this site will build you a timed, WASSCE-style paper for any subject, and sitting it at a computer under the clock is close rehearsal for the objective papers without paying for a CBT centre session. The quiz tool suits shorter daily drills, ten or twenty objective questions clicked through the way you will click through the real thing. For essay papers, remember the hybrid format: you read on screen but write by hand, so practise handwritten answers under time, then run them through the AI marking tool to see where the marks leak. For mathematics, the math solver checks your working line by line, which matters because WAEC marking rewards method, not just final answers. A little over three weeks separate 30 August from the first written papers on 22 September, though the full window runs to the last paper on 28 October, about eight and a half weeks away. One full mock a week plus a daily quiz still fits that runway, so long as your first mocks cover the subjects that come earliest."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Is the WAEC GCE timetable for 2026 out?",
        "a": "Yes. WAEC's official registration portal at registration.waecdirect.org hosts the final timetable for the 2026 second series, internally dated August 2026. Sites still saying it has not been released are running stale 2025 information. Download the document yourself from the portal rather than relying on any aggregator, including this page."
      },
      {
        "q": "When does the WAEC GCE 2026 second series start?",
        "a": "The window runs from Friday 4 September to Wednesday 28 October 2026. The 4 September entry is a practical planning session for Foods and Nutrition and Home Management, orals and practicals run 14 to 25 September at times WAEC arranges individually, and the main written papers start Tuesday 22 September with Further Mathematics."
      },
      {
        "q": "Is the exam fully computer-based?",
        "a": "WAEC has described the series as computer-based, and reports consistently describe objective papers answered entirely on screen while essay and practical papers are hybrid: questions on screen, answers handwritten in booklets. The official timetable does not state the mode itself, so confirm the exact arrangements with your centre before your first paper."
      },
      {
        "q": "How much is registration, and can I still register?",
        "a": "The fee is NGN 37,000, as announced by WAEC in May 2026, and some reports quote NGN 37,500 including bank commission. As of 30 August the portal states registration ends Thursday 10 September 2026, after two extensions. Walk-in registration at a higher fee, reported around NGN 45,000, appears in some summaries but is unverified, so confirm on registration.waecdirect.org."
      },
      {
        "q": "When will the second series results come out?",
        "a": "Going by recent computer-based series, expect roughly six to nine weeks after the last paper. The 2026 first series results came 41 days after the final exam and the school series took 47 days, though the 2025 second series took 62. With papers ending 28 October, that points to roughly December 2026 to January 2027. Check waecdirect.org, and treat any promised date from unofficial sites with suspicion."
      }
    ],
    "targetQuery": "waec gce timetable 2026",
    "hubSubjects": [
      "math",
      "english"
    ]
  },
  {
    "board": "waec",
    "slug": "how-to-pass-waec-gce-english-and-maths",
    "metaTitle": "How to Pass WAEC GCE English and Maths (2026 Second Series)",
    "metaDescription": "A two-month plan to pass WAEC GCE English and Maths: paper structure, high-frequency topics, command words and free computer-based practice.",
    "h1": "How to Pass WAEC GCE English and Maths (2026 Second Series)",
    "quickAnswer": "Diagnose your weak topics in the first week, then spend the runway before the 4 September to 28 October exam window drilling the places you actually lose marks. In English, that means daily objective practice plus at least two marked essays and two summaries a week; in Maths, it means full-working practice on high-frequency topics like algebra, mensuration, trigonometry and statistics. Because WAEC has described this series as computer-based, do a large share of your practice on a computer, not just on paper. Learn WAEC's command words so you answer exactly what is asked. There is no shortcut, but two focused months of targeted practice can realistically move you from a fail to a credit in both subjects.",
    "intro": "Five credits including English Language and Mathematics is the line that unlocks university admission, and those two subjects are exactly where most private candidates fall. In the 2025 second series, only 42.17 percent of candidates got five credits including English and Maths, against 61.54 percent in the 2026 school exam. The gap is not talent; school candidates simply get more structured practice and more feedback. With the 2026 second series written papers running from 22 September to 28 October, you have roughly two months, which is enough to change your result if you spend it on diagnosis, high-frequency topics and computer-based practice rather than passive rereading. This guide lays out what actually moves marks in each subject, plus two practice tasks you can start on today.",
    "sections": [
      {
        "heading": "Count your runway, then diagnose before you study",
        "body": "The main written papers for the 2026 second series run from Tuesday 22 September to Wednesday 28 October, with orals and practicals slotted in from 14 September, so from the end of August you have roughly three working weeks before written papers begin and about eight until the window closes. That is enough time to move a grade in English and Maths, but only if you spend the first three days finding out exactly where you lose marks. Take a full-length practice paper in each subject under timed conditions, or use the free quiz tool on this site to test yourself topic by topic and let the results show you the pattern. Most candidates who miss a credit do not fail everywhere; they fail in two or three recurring places, such as summary writing in English or geometry in Maths. Write those weak topics down and build your plan around them, not around a generic syllabus checklist. If you have not yet registered, the official portal currently states that registration ends Thursday 10 September 2026, with the fee fixed at NGN 37,000, so sort that out this week and download the official final timetable from registration.waecdirect.org while you are there, because your paper dates decide which subject gets priority in your final fortnight."
      },
      {
        "heading": "Learn WAEC's command words before anything else",
        "body": "WAEC marks what you were asked to do, not what you know. Every question is built on a command word, and each one demands a different depth of answer. State and list want short, direct points with no explanation. Mention is similar: name the point and move on. Explain and describe want developed sentences that show how or why something works. Calculate, evaluate and simplify in Maths want full working, not just a final figure. Compare wants both similarities and differences, handled in pairs. Illustrate usually wants an example or a diagram. Candidates throw away marks in two directions: writing three-line explanations where state would earn full marks in ten words, and writing one-word answers where explain needed a because. Before the exam, go through your notes and practice questions and label each one with its command word, then check whether your answer actually matches the instruction. When you practise with the free mock exam generator on this site, read the command word twice before you write anything. It is the cheapest habit in exam technique, and in a two-month runway, cheap habits are the ones worth building first because they pay out in every single paper you sit."
      },
      {
        "heading": "English: where the marks actually sit in each section",
        "body": "The English Language paper follows a structure WAEC has kept stable for years: an objective paper testing lexis, structure and oral forms, and a written paper made up of an essay, a comprehension passage and a summary. Treat them as four different games. The objectives reward vocabulary in context and grammar patterns, and they respond quickly to daily drilling; twenty questions a day for six weeks beats two hundred in the last week. The essay is marked for content, organisation, expression and mechanics, which means a clean, well-paragraphed letter or article with few grammar slips beats an ambitious essay full of errors. Pick two formats you can execute well, usually the formal letter and the argumentative essay, and rehearse those rather than trying to master every type. Comprehension is about answering from the passage, in your own words, at the length the question asks for. Summary is the section that decides most borderline grades: examiners want the required number of points, one sentence each, in your own words, with no examples, no illustrations and no lifting of whole phrases from the passage. Write at least two practice essays and two summaries every week and run them through the AI marking tool on this site so you get feedback the same day instead of guessing whether your expression is costing you marks."
      },
      {
        "heading": "Maths: drill the high-frequency topics first",
        "body": "You do not need the whole syllabus to reach a credit in Maths; you need reliable marks in the topics that appear year after year. Across recent WASSCE papers the heavy hitters are number bases, indices and logarithms, sets and Venn diagrams, simple and compound interest, ratio and variation, algebraic simplification, linear and quadratic equations, mensuration of circles, cylinders and cones, trigonometry with bearings, statistics with mean, median and mode, and probability. Geometry theorems and construction appear too, but if you are weak there, secure the algebra and statistics marks first because they are more predictable. Work topic by topic: study one worked example, then do five questions of the same type without looking, showing full working every time, because WAEC awards method marks even when the final answer slips. When you get stuck, put the question into the math solver on this site and study the steps rather than copying the answer; the point is to see where your method diverged. Keep a single sheet of formulas you personally keep forgetting, such as the cosine rule or the volume of a cone, and rewrite it from memory every few days. Two focused hours a day on high-frequency topics for eight weeks is a realistic route from an F9 or E8 to a credit."
      },
      {
        "heading": "Practise on a computer, because WAEC says the exam is on one",
        "body": "WAEC has said the second series runs in computer-based format, and press reports describe objective papers as fully on screen with essay papers hybrid, meaning questions appear on screen while you write answers in a physical booklet. Confirm the details for your own subjects with your exam centre, but plan for one certainty: you will be reading questions on a monitor under time pressure, and that is a skill in itself. Candidates who have only ever practised on paper consistently misread on-screen questions, lose their place in long passages and burn time moving between items. The fix is simply to do a serious share of your practice on a computer. The mock exam generator and the quiz tool on this site are free and run in the browser, so you can rehearse the exact experience of reading, deciding and answering on screen, including skipping hard questions and returning to them. For English, practise reading a full-length comprehension passage on screen while making point notes on paper, since that split is what the hybrid format demands of you. Ten computer-based practice sessions between now and your first paper will do more for your speed and accuracy than any amount of extra passive reading, and they cost you nothing."
      },
      {
        "heading": "A week-by-week shape for the two months",
        "body": "Here is a shape that fits the runway between now and the written papers. Week one, ending early September: diagnose both subjects, register or confirm your registration before the portal's stated 10 September deadline, and download the official timetable so you know your exact paper dates. Weeks two and three: alternate days between English and Maths, with each day split into one hour learning a weak topic and one hour of timed questions on it, while the daily twenty English objectives keep running in the background. Weeks four and five: shift toward full sections, a complete summary plus essay one day, a full Maths theory section the next, marked honestly against the AI marking tool or your own checklist. From week six, move to full timed mocks on a computer, one per subject per week, and spend the day after each mock re-doing every question you missed, which is where the real learning happens. Protect sleep in the final week; a tired candidate misreads command words. Two months is genuinely enough. In the 2026 school WASSCE, 61.54 percent of candidates got five credits including English and Maths, while the 2025 private second series managed 42.17 percent, and that gap is mostly preparation and technique, not ability. Your job is to be on the right side of it."
      }
    ],
    "problems": [
      {
        "question": "Maths practice (sets and Venn diagrams). In a class of 50 students, 30 offer Economics, 25 offer Government, and 7 offer neither subject. (a) How many students offer both subjects? (b) How many offer Economics only?",
        "steps": [
          "Find how many students offer at least one subject: 50 - 7 = 43.",
          "Let n be the number offering both. Use the rule n(at least one) = n(Economics) + n(Government) - n(both), so 43 = 30 + 25 - n.",
          "Solve: n = 55 - 43 = 12, so 12 students offer both subjects.",
          "Economics only = all Economics students minus those doing both: 30 - 12 = 18.",
          "Check the totals: Economics only 18 + Government only 13 + both 12 + neither 7 = 50, which matches the class size, so the answer is consistent."
        ],
        "answer": "(a) 12 students offer both subjects. (b) 18 students offer Economics only.",
        "markTip": "Draw the Venn diagram even when the question does not demand one; examiners award method marks for the set-up 30 + 25 - n = 43, and part (b) usually carries a follow-through mark, so a slip in (a) does not have to sink (b) as long as your working is visible.",
        "variant": "In a market survey of 60 traders, 35 sell yams, 40 sell beans, and 5 sell neither. Find how many sell both, and how many sell beans only. (Answers: 20 sell both; 20 sell beans only.)"
      },
      {
        "question": "English practice (summary writing). Read this passage, then answer in your own words. Passage: Many students treat sleep as wasted time, but the hours you spend asleep are when your brain does its filing. During deep sleep, the day's lessons are moved from short-term storage into long-term memory, which is why a topic revised before a good night's rest is remembered better than one crammed at dawn. Sleep also restores concentration, so a rested candidate reads questions more carefully and makes fewer careless slips. Finally, regular sleep steadies mood: anxious, exhausted students panic in exam halls, while rested ones stay calm enough to think. Task: In three sentences, one for each, state three benefits of adequate sleep that the writer mentions.",
        "steps": [
          "Read the task before the passage so you know you are hunting for exactly three benefits and nothing else.",
          "Read the passage once straight through, then again slowly, ticking each sentence that states a benefit rather than an example or an explanation of one.",
          "Identify the three ideas: memory, concentration, and steadier mood. The lines about filing, careless slips and panicking are illustrations, so leave them out.",
          "Write one complete sentence per benefit in your own words, for example: Adequate sleep helps students store what they have learned in lasting memory.",
          "Check each sentence for lifting: if four or more consecutive words match the passage, rephrase before you move on."
        ],
        "answer": "A strong response: (1) Adequate sleep helps the brain transfer what a student has learned into lasting memory. (2) It restores concentration, so candidates read and answer questions more accurately. (3) It keeps students emotionally steady, helping them stay calm during examinations.",
        "markTip": "Summary marks are split between content and expression: each correct point scores fully only as a complete sentence in your own words, so lifting whole phrases from the passage or padding with examples costs you the expression marks even when the point itself is right.",
        "variant": "Do the same drill with any newspaper editorial: in one sentence each, state three problems the writer identifies and three solutions the writer proposes, without copying more than three consecutive words from the text."
      }
    ],
    "faqs": [
      {
        "q": "Is two months really enough to pass WAEC GCE English and Maths?",
        "a": "Yes, if you spend it on targeted practice rather than rereading notes. The written papers run 22 September to 28 October 2026, so a candidate starting at the end of August has time for a diagnosis week, five to six weeks of topic work, and full mocks before each paper. Candidates who miss a credit usually lose marks in a handful of recurring areas, not everywhere, and those are fixable in weeks."
      },
      {
        "q": "What mark do I need for a credit in English or Maths?",
        "a": "WAEC does not publish the raw-mark boundaries behind its grades, and they can shift between sittings, so nobody can honestly tell you that a specific percentage guarantees a C6. The practical approach is to attempt every question, show full working in Maths for method marks, and hit the required number of points in the English summary. Chasing every available mark beats guessing at a target."
      },
      {
        "q": "Is the GCE second series harder than the school WASSCE?",
        "a": "The syllabus and paper format are the same, but private-candidate pass rates have historically been lower: 42.17 percent of 2025 second-series candidates got five credits including English and Maths, against 61.54 percent in the 2026 school exam, and press reports put the 2026 first private series at around 33 percent. The likeliest explanation is preparation, since private candidates often study alone, which is exactly what a structured plan fixes."
      },
      {
        "q": "When exactly are the English and Maths papers?",
        "a": "The main written papers for the 2026 second series run from Tuesday 22 September to Wednesday 28 October 2026. Exact dates and times for each subject are on the official final timetable, which you can download from registration.waecdirect.org, and it is worth rechecking close to the exam in case of updates. Note WAEC's own rule that where a question paper's stated duration differs from the timetable, the question paper prevails."
      },
      {
        "q": "Can I still register for the 2026 second series?",
        "a": "As of late August 2026, yes: the official portal states registration ends Thursday 10 September 2026, after earlier deadlines were extended. The fee was fixed at NGN 37,000, with some reports quoting NGN 37,500 including bank commission, and aggregator sites also report walk-in registration at a higher fee of around NGN 45,000, though that figure is unverified. Confirm everything on registration.waecdirect.org before paying anyone."
      },
      {
        "q": "When will the results come out?",
        "a": "WAEC has not announced a results date, but recent computer-based series have been released roughly six to nine weeks after the final paper: about 41 days for the 2026 first private series and 62 days for the 2025 second series. With papers ending 28 October, that points to sometime between December 2026 and January 2027. Check waecdirect.org with your examination number once WAEC announces the release."
      }
    ],
    "targetQuery": "how to pass waec gce english and maths",
    "hubSubjects": [
      "English Language",
      "Mathematics"
    ]
  },
  {
    "board": "gcse",
    "slug": "gcse-november-2026-resits",
    "metaTitle": "GCSE Resit November 2026: Dates, Entry Deadline and Costs",
    "metaDescription": "GCSE resit November 2026: Maths and English Language dates (3-9 Nov), the 4 October entry deadline, costs, results day and an 8-week revision plan.",
    "h1": "GCSE November 2026 Resits: Dates, Deadlines, Costs and the 8-Week Plan",
    "quickAnswer": "The GCSE resit series in November 2026 covers two subjects only at AQA, Edexcel and OCR: English Language and Mathematics. English papers are on 3 and 5 November, maths papers on 4, 6 and 9 November 2026, all morning sessions. The JCQ final entry date is 4 October 2026, but your school, college or exam centre will set an earlier internal deadline, so speak to your exams officer in early September. Entry is post-16 only — you must be 16 or over on 31 August 2026. Results reach students on Thursday 14 January 2027.",
    "intro": "A grade 3 in August does not have to mean a whole extra year of waiting. The November 2026 series gives post-16 students a second attempt at GCSE English Language and Maths roughly ten weeks after enrolment, with results in mid-January — early enough to update a university application or stop resit classes before spring. This page pulls everything into one place: who is allowed to enter, how and when entries happen (the real deadline is earlier than the official one), the exact paper dates for AQA, Edexcel and OCR, what it costs if you are a private candidate, and an eight-week revision plan weighted towards the topics that carry the most marks. Dates below come from the boards' published final timetables and the JCQ key-dates document, but always confirm your own entry and timetable with your exams officer, because every centre sets its own internal cut-offs.",
    "sections": [
      {
        "heading": "Who actually sits GCSEs in November",
        "body": "The November series is a resit window, not a second chance at everything. AQA's timetable states it is only open to students aged 16 or over on 31 August 2026, so Year 11s cannot use it — it exists for people who have already had a summer attempt. The biggest group is students covered by the 16-19 condition of funding: if you started a sixth form or college course without a grade 4 in English or maths, government rules say you must keep studying the subject. A full-time student holding a grade 3 has to work towards the GCSE itself, while a student on grade 2 or below can take Functional Skills Level 2 instead. One nuance worth knowing: the funding rule requires continued study, not automatic November entry. Your college decides whether you are ready to improve your grade now or better off waiting for summer 2027, so if you want the November sitting, make your case to your teacher early and back it up with evidence. The other group is private candidates — adults fixing a grade for a job or a university offer, home-educated students, and anyone no longer enrolled anywhere. Many exam centres accept external entries for the November series, but you arrange it yourself, and popular centres fill up well before the official deadline."
      },
      {
        "heading": "Only two subjects, and the entry clock is already ticking",
        "body": "For AQA, Edexcel and OCR — the three England boards — the November 2026 timetables contain exactly two GCSE subjects: English Language and Mathematics. Nothing else. If you need to resit science, history or anything else, that happens in summer 2027. Entries go through an exam centre, never directly to the board. If you are enrolled at a sixth form or college, your exams officer makes the entry — normally funded by the institution, so free to you, but ask rather than assume. The JCQ final entry date for the November 2026 series is 4 October 2026. Two warnings about that date. First, it falls on a Sunday, so every school and college sets an internal deadline days or weeks earlier — one London centre reportedly closes its November bookings as early as 8 September. Second, boards charge steep late-entry surcharges once the deadline passes; tutoring-industry reports suggest late fees can double the cost or worse. So treat the first week of September as your real deadline: talk to your exams officer or phone private-candidate centres this week, not in October. If you are entering privately, get written confirmation that the centre will accept your entry, because acceptance policies and cut-off dates genuinely vary from centre to centre."
      },
      {
        "heading": "The paper dates, board by board",
        "body": "Every English Language and Maths paper falls between 3 and 9 November 2026, all morning sessions, and the dates are identical across AQA, Edexcel and OCR. English Language: Paper 1 on Tuesday 3 November, Paper 2 on Thursday 5 November. Maths: papers on Wednesday 4 November, Friday 6 November and Monday 9 November, each 1 hour 30 minutes. The two subjects never clash, so if you are resitting both you simply alternate days from the 3rd to the 9th. The details that differ by board matter for planning. English durations: AQA papers are 1 hour 45 each, Edexcel's Paper 2 runs 2 hours 5 minutes, and OCR's papers are 2 hours each. In maths, AQA and Edexcel run the non-calculator paper first, on 4 November, with calculator papers on 6 and 9 November. OCR is the reverse: calculator papers on 4 and 9 November, non-calculator on 6 November. That changes what you drill in the final week, so find out which board your centre enters you with before building a timetable. The dates above come from the boards' published final timetables and the JCQ key-dates document at jcq.org.uk, but the statement of entry your centre gives you is the version that counts — check it as soon as it arrives."
      },
      {
        "heading": "Results day, and what a November resit costs",
        "body": "Results go to schools and colleges on Wednesday 13 January 2027 under restricted release, then to students on Thursday 14 January 2027. That January date is the whole point of the November series: pass, and resit classes stop months before summer, and university applicants can show the grade before decisions are made. If a result looks wrong, the deadline for reviews of marking is 18 February 2027, requested through your centre. Costs depend entirely on who you are. Enrolled 16-18 students under the condition of funding normally pay nothing — the college makes and funds the entry — though you should confirm with your exams officer. Private candidates pay the board fee plus the centre's charges, and the centre's charges are the bigger number. AQA's published entry fee is around GBP 51 per subject, but according to published exam-centre price lists for November 2026, one London centre charges GBP 230 for English Language and GBP 250 for Maths, a booking agency charges over GBP 350 per subject, and admin fees of roughly GBP 25-75 on top of board fees are common elsewhere. A realistic range is about GBP 150-350 per subject, and there is no standard price. Get a written quote from two or three centres before you book, and book before late-entry surcharges begin."
      },
      {
        "heading": "An 8-week revision plan that respects the November clock",
        "body": "Count back from 3 November and you have roughly eight full weeks from the start of September, so do not spread them evenly across the specification — put them where the marks are. In Foundation maths, number, ratio and proportion carry a large share of the paper, and a grade 4 has typically sat somewhere near half marks in recent series (boundaries move every year, so treat that as a working target, not a promise). Weeks 1-2: sit one full timed paper per subject to find your gaps — the free mock exam generator on this site builds timed papers in your board's style, so you are not burning real past papers this early. Weeks 3-6: two focused sessions per weak topic, using the quiz tool for quick retrieval practice and the math solver whenever a worked step refuses to make sense. In English Language, give most of this block to the writing questions, which typically carry around half the marks on each paper (check your own board's split), and put every practice answer through the AI marking tool so you get band-by-band feedback instead of guessing how you did. Weeks 7-8: one full timed paper every three days, alternating subjects the way the real week will, with non-calculator practice positioned to match your board's paper order. Marks come from rehearsing the exam, not re-reading notes."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "Can I resit only maths in November 2026?",
        "a": "Yes. English Language and Maths are separate entries, and you can enter either one on its own or both together. The two subjects never share a day — English on 3 and 5 November, maths on 4, 6 and 9 November — so sitting both is manageable if you need to. Remember the November series offers nothing else at AQA, Edexcel and OCR: any other subject has to wait for summer 2027."
      },
      {
        "q": "What grade do I need to pass a November resit?",
        "a": "Grade 4 is the standard pass and grade 5 the strong pass, in the government's own terminology. Reaching grade 4 or above ends the requirement to keep studying English and maths post-16, which makes it the target for almost every November resitter. Some next steps ask for more — nursing, teaching and certain apprenticeships often want specific grades — so check what your course or employer actually requires before deciding whether a 4 is enough."
      },
      {
        "q": "What happens if I fail again in November?",
        "a": "Nothing is lost — your best grade is the one that counts, and a lower resit result does not overwrite a higher one. You would carry on studying under the condition of funding and enter again for the summer 2027 series, and getting your result in mid-January gives you a four-month head start on targeted revision. Many colleges deliberately hold candidates back for summer anyway, because November entry is a readiness judgement rather than an automatic right."
      },
      {
        "q": "Do universities care that I resat GCSE English or maths?",
        "a": "In almost all cases they care that you have the grade, not how many sittings it took. Entry requirements are usually written as a minimum grade in English and maths, and a November 2026 pass appears on your record like any other GCSE grade — usefully, before most university decisions are finalised. A small number of highly competitive courses, such as medicine at certain universities, do look at resit history, so check each course's entry page if that applies to you."
      },
      {
        "q": "Can Year 11 students enter the November 2026 series?",
        "a": "No. AQA's timetable states the November series is only available to students aged 16 or over on 31 August 2026, and across the boards it is restricted to post-16 resitters. A current Year 11 student takes GCSEs in summer 2027 as normal. The November window exists for college students, school leavers, adults and private candidates who have already had at least one attempt at the exam."
      }
    ],
    "targetQuery": "gcse resit november 2026",
    "hubSubjects": [
      "math",
      "english"
    ]
  },
  {
    "board": "gcse",
    "slug": "gcse-resit-results-day-january-2027",
    "metaTitle": "GCSE Resit Results Day January 2027: Date, Time, Next Steps",
    "metaDescription": "GCSE resit results day is Thursday 14 January 2027. When results come out, how to collect them, what grade 4 means, and what to do if you miss it again.",
    "h1": "GCSE Resit Results Day: Thursday 14 January 2027",
    "quickAnswer": "GCSE resit results for the November 2026 series come out on Thursday 14 January 2027. Exam boards release grades to schools and colleges a day earlier, on Wednesday 13 January, under restricted release, and centres pass them to students the following morning — many from around 8.00am, though each school or college sets its own time. Results normally reach you through the centre where you sat the exams, in person, by email or through its portal; AQA and OCR have no student results portal, and Edexcel students can only view grades online through the ResultsPlus Direct service if their exams officer has registered them for it. Grade 4 is the standard pass, and it is the number that ends the post-16 requirement to keep studying English or maths.",
    "intro": "If you sat GCSE English Language or maths this November, the wait for results is mercifully short compared with the summer — but January still feels a long way off when a college place, an apprenticeship or a funding requirement hangs on a grade 4. Here is exactly when results come out, how you will get them, and what to do next whichever number is on the paper.",
    "sections": [
      {
        "heading": "The date is settled: 13 January for centres, 14 January for you",
        "body": "The exam boards release November 2026 results to schools and colleges on Wednesday 13 January 2027 under what is called restricted release — staff can see your grades, but they are not allowed to share them with you yet. Students get their results the next day, Thursday 14 January 2027. Both dates come straight from the JCQ key dates document for the series and AQA's own timetable, so the date itself is settled; the time is the local variable. Most centres hand out results in the morning, and many open their doors or send emails from around 8.00am, but there is no national rule — one college might email at 8, another might ask you to collect from reception at 10. Ask your exams officer before Christmas exactly how and when your centre releases results, so you are not refreshing your inbox at dawn for a message that was never coming before mid-morning. If you sat both English Language and maths in November, both grades arrive together on the same morning — there is no separate results day per subject."
      },
      {
        "heading": "How you actually get your grades",
        "body": "Results normally reach you through the exam centre where you sat the papers. AQA and OCR have no student results portal, and Edexcel students can only use the ResultsPlus Direct online service to view their grades if their exams officer has registered them for it — so ask your centre in advance how you will get your grades. If you are enrolled at a school, sixth form or college, you will either collect a printed statement of results in person or receive it by email or through the centre's own portal, depending on how they run the day. If you entered as a private candidate, the centre you booked through is responsible for passing your result on — agree with them in advance whether that happens by email, post or collection, because practice varies a lot between centres. The statement of results is the piece of paper (or PDF) that matters on the day: it lists each subject and the grade awarded. Your formal certificate follows months later through the same centre, so keep your contact details up to date with them, especially if you have left the course or moved. If nothing has arrived by mid-morning on 14 January, phone the exams office rather than the board — the board will only redirect you back to the centre anyway."
      },
      {
        "heading": "Grades 9 to 1, and why grade 4 is the number that matters",
        "body": "GCSEs are graded 9 to 1, with 9 the highest and U for ungraded. Two grades carry official labels: grade 4 is the standard pass and grade 5 is the strong pass — that is the government's own wording, and it appears on the exam boards' grading pages too. For a resit student, 4 is the number that matters. Under the 16 to 19 condition of funding, reaching grade 4 or above in English or maths ends the requirement to keep studying that subject — the government's 2026-27 guidance is explicit about this. Most employers, apprenticeships and university courses that ask for GCSE English and maths also ask for grade 4, not 5. One tier note for maths: Foundation tier papers award grades 1 to 5 at most, while Higher tier covers roughly 4 to 9. Most resit candidates sit Foundation because it is the most accessible route to a grade 4 — a sensible call, not a lesser one. And the subjects are judged separately: a grade 4 in maths ends the maths requirement even if English needs another attempt, and the other way round."
      },
      {
        "heading": "Under a grade 4 again? Here is the honest plan",
        "body": "First, breathe — the November series exists precisely because plenty of people need more than one attempt, and a near-miss in January is a very different starting point from a near-miss last summer. The next opportunity is the summer 2027 series in May and June, and entries go through your school or college in the spring, so raise it with your teacher or exams officer soon after results day rather than waiting to be asked. If you are 16 to 18 (or up to 25 with an EHC plan) and on a study programme or T Level, the condition of funding means you continue studying the subject until you reach grade 4: a full-time student holding a grade 3 stays on the GCSE route, while grade 2 or below can switch to Functional Skills Level 2, which also satisfies the requirement — worth an honest conversation with your college about which path fits you. Then get diagnostic. Go through your performance with a teacher and find the specific marks that got away. The free mock exam generator on this site can rebuild your weakest paper as many times as you need, and the AI marking tool will show you where answers leak marks — four focused months to summer is genuinely enough to move a grade 3 to a 4."
      },
      {
        "heading": "Think your mark is wrong? Reviews of marking",
        "body": "If a grade lands well below what your mocks and teacher predictions suggested, you can ask for a review of marking — but you apply through your exam centre, not the board directly. For the November 2026 series, JCQ's deadline for reviews of marking and other post-results services is 18 February 2027, and centres need time to process requests, so do not sit on the decision for weeks. Two things to weigh before you apply. First, grades can go down as well as up in a review — if you are sitting comfortably inside a grade, a review carries real risk for little gain, so it makes most sense when you are likely within a mark or two of a boundary. A teacher can help you judge that. Second, there is usually a fee, set by the board and passed on by the centre, and it is commonly refunded only if your grade changes — ask your exams officer for the current amount rather than trusting any figure you read online. It is also worth asking about getting a copy of your marked paper: even if you decide not to challenge the grade, seeing exactly where the marks went missing is excellent intelligence for a summer resit."
      },
      {
        "heading": "Nine weeks of waiting — use them well",
        "body": "The last November paper is sat on 9 November 2026 and results arrive on 14 January 2027 — about nine weeks, with Christmas in the middle. How to use them depends on how the exams felt. If you walked out reasonably confident, park it: give your energy to your main course and let January bring what it brings. If you are genuinely unsure, do not grind through full revision for a grade you may already have — but do not go completely cold either, because if a summer resit turns out to be needed, the students who restart in January beat the ones who restart in April every time. Twenty minutes a few times a week is plenty: the quiz tool is built for exactly this kind of light topic check, and the math solver will walk you through any problem step by step so the methods stay fresh without a full textbook session. For English, read something — anything — and occasionally summarise it in a paragraph from memory. Then sort the logistics: put the 18 February 2027 review deadline in your phone, and if you entered privately, make sure your centre has your current email address before everyone disappears for the holidays."
      }
    ],
    "problems": [],
    "faqs": [
      {
        "q": "What time do GCSE resit results come out on 14 January 2027?",
        "a": "There is no single national release time for students. Boards release grades to centres on Wednesday 13 January under restricted release, and centres share them with students on the morning of Thursday 14 January — many from around 8.00am, but the exact time and method (collection, email or portal) is your school or college's decision, so ask your exams officer in advance."
      },
      {
        "q": "Can I check my November GCSE results online?",
        "a": "It depends on your board and your centre. AQA and OCR have no student results portal, so results normally reach you through the centre where you sat the exams. Edexcel students can view results online through the ResultsPlus Direct service, but only if their exams officer has registered them for it. Your school, college or exam centre may also email results or use its own portal — so confirm the arrangement with your exams office before results day."
      },
      {
        "q": "I got a grade 4 in one subject but not the other — what happens?",
        "a": "The subjects are treated separately. A grade 4 or above in maths ends the requirement to keep studying maths, even if English still needs another attempt, and vice versa. You would carry on with only the subject still below grade 4, with the summer 2027 series as the next sitting."
      },
      {
        "q": "When is the next chance to resit if I miss grade 4 again?",
        "a": "The summer 2027 series, in May and June — entries go through your school or college in the spring. There is normally also a November series each year for English Language and maths, but confirm next year's arrangements with your exams officer nearer the time."
      },
      {
        "q": "How do I challenge a grade I think is wrong?",
        "a": "Ask your exam centre to submit a review of marking — you cannot apply to the board yourself. The JCQ deadline for post-results services for this series is 18 February 2027. Grades can go down as well as up, and there is usually a fee unless the grade changes, so talk it through with a teacher first."
      },
      {
        "q": "Do private candidates get results the same day?",
        "a": "Yes — 14 January 2027 applies to everyone, but your result comes via the centre where you entered, so agree in advance how they will send it. If nothing has arrived by mid-morning, contact that centre's exams office; the board will only refer you back to them."
      }
    ],
    "targetQuery": "gcse resit results day 2027",
    "hubSubjects": [
      "Maths",
      "English Language"
    ]
  },
  // @@EXAM_PAGES_INSERT@@
];

export const examPagesByBoard = (board: ExamPage["board"]) =>
  EXAM_PAGES.filter((p) => p.board === board);

export const findExamPage = (board: ExamPage["board"], slug: string) =>
  EXAM_PAGES.find((p) => p.board === board && p.slug === slug);

export const examPagesForHub = (subject: string) =>
  EXAM_PAGES.filter((p) => p.hubSubjects.includes(subject));
