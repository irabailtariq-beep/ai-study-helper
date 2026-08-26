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
  board: "cbse" | "gcse" | "waec" | "ap";
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
  // @@EXAM_PAGES_INSERT@@
];

export const examPagesByBoard = (board: ExamPage["board"]) =>
  EXAM_PAGES.filter((p) => p.board === board);

export const findExamPage = (board: ExamPage["board"], slug: string) =>
  EXAM_PAGES.find((p) => p.board === board && p.slug === slug);

export const examPagesForHub = (subject: string) =>
  EXAM_PAGES.filter((p) => p.hubSubjects.includes(subject));
