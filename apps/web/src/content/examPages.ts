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
  // @@EXAM_PAGES_INSERT@@
];

export const examPagesByBoard = (board: ExamPage["board"]) =>
  EXAM_PAGES.filter((p) => p.board === board);

export const findExamPage = (board: ExamPage["board"], slug: string) =>
  EXAM_PAGES.find((p) => p.board === board && p.slug === slug);

export const examPagesForHub = (subject: string) =>
  EXAM_PAGES.filter((p) => p.hubSubjects.includes(subject));
