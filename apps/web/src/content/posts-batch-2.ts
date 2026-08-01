// Batch 2 — 50 additional blog articles. Concatenated into POSTS in posts.ts.
// Slugs are deliberately distinct from batch 1 — no collisions.

import type { Post } from "./posts";

const today = "2026-05-09";

export const POSTS_BATCH_2: Post[] = [
  // ─── Math deep-dives ───
  {
    slug: "trigonometry-basics-explained",
    title: "Trigonometry Basics: SOH CAH TOA Without the Panic",
    description: "Trig is three letters and three ratios. Here is what they mean and the trigger that tells you which one to use.",
    publishedAt: today, readTime: "5 min",
    tags: ["trigonometry basics", "SOH CAH TOA", "trig help"],
    body: `
Trigonometry boils down to three ratios in a right-angled triangle. Once you know which side is which, the rest is bookkeeping.

## Naming the sides

- **Hypotenuse** — the longest side, opposite the right angle
- **Opposite** — the side facing the angle you're working with
- **Adjacent** — the side next to that angle (not the hypotenuse)

Pick one angle in the triangle and label the other two sides relative to it. The hypotenuse never moves.

## The three ratios

- **sin** = opposite / hypotenuse
- **cos** = adjacent / hypotenuse
- **tan** = opposite / adjacent

That's the whole "SOH CAH TOA" rhyme. Memorise it once, write it on every exam paper before you start.

## When to use which

Look at the question. Identify which two sides you have or want.

- Have hypotenuse + want opposite → use sin
- Have hypotenuse + want adjacent → use cos
- Have opposite + want adjacent (or vice versa) → use tan

That's it. The rest is calculator work.

## Worked example

Right triangle. The angle is 30°. The hypotenuse is 10. Find the opposite side.

- sin(30) = opposite / 10
- 0.5 = opposite / 10
- opposite = 5

## When SOH CAH TOA stops working

Only on right-angled triangles. For non-right triangles, use the **sine rule** or **cosine rule**.

- Sine rule: a / sin A = b / sin B = c / sin C
- Cosine rule: c² = a² + b² - 2ab cos C

You'll use these in IGCSE Year 11, A Level, AP, and any first-year engineering course.

[Try a worked example →](/math-solver)
`,
  },
  {
    slug: "logarithms-explained-simply",
    title: "Logarithms Explained: They Just Reverse Powers",
    description: "Logarithms feel weird until you realise they answer one question: what power do I need? Here is a clean explainer.",
    publishedAt: today, readTime: "4 min",
    tags: ["logarithms", "log help", "math explainer"],
    body: `
A logarithm answers a single question: what power do I need to raise this base to, to get this number?

\`log₁₀(1000) = 3\` because 10 to the power of 3 is 1000.

That's the whole idea. Everything else is rules for manipulating that question.

## The three rules that matter

- **Product rule:** log(a × b) = log(a) + log(b)
- **Quotient rule:** log(a / b) = log(a) - log(b)
- **Power rule:** log(aⁿ) = n × log(a)

Memorise these three. They cover almost every log question.

## When you'll see logs

- Solving exponential equations (when x is in the exponent)
- Acidity (pH is a log scale)
- Sound intensity (decibels)
- Earthquake magnitude (Richter scale)
- Compound interest at long horizons

## Worked example

Solve 2ˣ = 50.

Take log of both sides: x × log(2) = log(50). So x = log(50) / log(2) ≈ 5.64.

That's the power rule in action.

## Common pitfalls

- log(a + b) ≠ log(a) + log(b). Never. The rule is for multiplication, not addition.
- log(0) is undefined. Negative numbers also have no real log.
- ln means log base e (natural log). It behaves the same way.

If logs still feel slippery, [try the math solver](/math-solver) on three problems and watch the steps. The pattern clicks fast.
`,
  },
  {
    slug: "probability-rules-students",
    title: "Probability for Students: Three Rules That Cover Most Questions",
    description: "Probability looks scary because of the notation. The actual rules are simple. Here are the three you need.",
    publishedAt: today, readTime: "5 min",
    tags: ["probability", "math help", "statistics for students"],
    body: `
Probability has more bad notation than any other school topic. The actual ideas are simple. Three rules cover most exam questions.

## 1. The complement rule

P(not A) = 1 - P(A)

If the chance of rain is 0.3, the chance of no rain is 0.7. That obvious fact is one of your most useful tools — when computing "at least one" type questions, find the chance of zero and subtract from 1.

## 2. The addition rule

P(A or B) = P(A) + P(B) - P(A and B)

The minus term catches the overlap. If you forget it, you double-count people who fit both A and B.

For mutually exclusive events (can't happen together) the overlap is 0, so it simplifies to P(A) + P(B).

## 3. The multiplication rule

P(A and B) = P(A) × P(B|A)

P(B|A) is "probability of B given A already happened". For independent events (one doesn't change the other), P(B|A) = P(B).

## Where students lose marks

- Treating events as independent when they aren't (drawing cards without replacement is dependent)
- Forgetting the overlap in the addition rule
- Confusing "at least one" with "exactly one"

## A useful trick

For "at least one" questions:

P(at least one) = 1 - P(none)

It's almost always easier to compute the chance of zero than the chance of one or more.

## Tree diagrams

For multi-step probability, draw a tree. Each branch shows a probability. Multiply along a branch, add between branches. This visual catches mistakes that pure algebra hides.

[Practice probability questions →](/quiz)
`,
  },
  {
    slug: "statistics-mean-median-mode",
    title: "Mean, Median, Mode: When to Use Which",
    description: "Three averages. Three different jobs. Here is the trigger that tells you which one to reach for.",
    publishedAt: today, readTime: "4 min",
    tags: ["mean median mode", "statistics", "math help"],
    body: `
"Average" is a vague word. Statistics has three precise versions, each useful for a different shape of data.

## Mean — the arithmetic average

Add everything, divide by count. Best for symmetric data without extreme values.

Bad for: data with outliers. One billionaire in a town pulls the mean income way up.

## Median — the middle value

Order the data. Pick the middle one. For an even count, average the two middle ones.

Best for: skewed data, especially income, house prices, exam scores with a few absent students at zero.

## Mode — the most common value

Best for: categorical data ("most common shoe size") and bimodal distributions where two values dominate.

A data set can have no mode, one mode, or several.

## Quick worked example

Test scores: 4, 6, 7, 7, 8, 9, 100

- Mean = 141 / 7 = 20.1 (misleading because of the 100)
- Median = 7 (the actual centre)
- Mode = 7 (the most frequent)

The mean here is the worst summary. The median tells the real story.

## Range and standard deviation

Mean and median tell you the centre. Range and standard deviation tell you the spread.

- **Range** = max - min. Easy to compute, sensitive to outliers.
- **Standard deviation** = how spread out the data is from the mean. Harder to compute by hand, far more useful.

## On the calculator

Most scientific calculators have a STAT mode that computes mean, median, and standard deviation in seconds. Learn it before the exam, not during.

[Try the average calculator →](/calculator)
`,
  },
  {
    slug: "calculus-integration-tips",
    title: "Integration Tips: Spotting Which Method to Use",
    description: "Integration is mostly pattern recognition. Here are the four patterns you'll see most, with the trigger for each.",
    publishedAt: today, readTime: "6 min",
    tags: ["integration", "calculus", "AP calculus"],
    body: `
Differentiating is mechanical. Integrating is detective work. The good news is that most integration problems fall into a small number of patterns.

## Pattern 1: standard polynomials

\`∫ xⁿ dx = xⁿ⁺¹ / (n+1) + C\`

If you see a polynomial, this is your tool. Don't forget the +C.

## Pattern 2: substitution (the inner-function trick)

If you see a function inside another function, with the derivative of the inner one nearby, use substitution.

Example: ∫ 2x · cos(x²) dx. The 2x is the derivative of x². Let u = x². Then du = 2x dx. The integral becomes ∫ cos(u) du = sin(u) + C = sin(x²) + C.

## Pattern 3: integration by parts

If you see a product of two unrelated functions, try integration by parts.

\`∫ u dv = uv - ∫ v du\`

The trick is choosing u and dv. Pick u to be something that gets simpler when differentiated (logs, polynomials). Pick dv to be something easy to integrate (exponentials, trig).

LIATE rule for picking u: Logarithms, Inverse trig, Algebraic, Trig, Exponential — in that order.

## Pattern 4: partial fractions

If you see a rational function (polynomial over polynomial) with the denominator factorable, split it into simpler fractions, integrate each separately.

## Common pitfalls

- Forgetting +C
- Wrong sign on negative substitution
- Not checking by differentiating the answer (free check, do it every time)

## When you're stuck

Try in this order:

1. Recognise standard form
2. Try substitution
3. Try integration by parts
4. Try partial fractions
5. Look it up — some integrals don't have elementary forms

[Try a worked integral →](/math-solver)
`,
  },
  {
    slug: "geometry-circle-theorems",
    title: "Circle Theorems: The Eight Rules That Cover Every Question",
    description: "Eight circle theorems sound like a lot. Once you draw them, they feel obvious. Here is the cheat sheet.",
    publishedAt: today, readTime: "5 min",
    tags: ["circle theorems", "geometry", "GCSE math"],
    body: `
Circle theorems trip up GCSE and IGCSE students because they sound abstract on paper. Drawn on a circle, they're obvious. Spend an hour with a compass and a ruler and you've got them.

## The eight you need

1. **Angle at the centre = 2 × angle at the circumference** (when both angles stand on the same arc)
2. **Angle in a semicircle is 90°** (special case of rule 1, where the centre angle is 180°)
3. **Angles in the same segment are equal**
4. **Cyclic quadrilateral: opposite angles sum to 180°**
5. **Tangent meets radius at 90°**
6. **Two tangents from a point are equal length**
7. **Alternate segment theorem** — angle between tangent and chord equals angle in the alternate segment
8. **Perpendicular from centre bisects chord**

## How to learn them

- Draw each one once, by hand, with a compass
- Label every angle and side
- Photograph it for revision later

That fifteen minutes does more than reading the textbook five times.

## How to spot which to use

The exam question gives you a circle with some angles labelled. Look at:

- Where the angles sit (centre vs circumference vs same arc)
- Whether you see a tangent
- Whether you see a cyclic quadrilateral (four points on the circle)

Those three clues will point you at the right theorem in seconds.

## Common pitfalls

- Mixing up theorems 1 and 3 (centre vs same segment)
- Forgetting tangents must touch the circle without crossing it
- Missing that cyclic quadrilateral angles only sum to 180° if all four corners touch the circle

[Try circle theorem questions →](/quiz)
`,
  },
  {
    slug: "algebra-factoring-tricks",
    title: "Factoring Tricks That Save Time on Every Algebra Test",
    description: "Five factoring patterns cover almost every algebra question students see. Here they are, with worked examples.",
    publishedAt: today, readTime: "5 min",
    tags: ["factoring", "algebra", "math tricks"],
    body: `
Factoring is faster than the quadratic formula when the pattern is right. Five patterns cover most of what you'll see.

## 1. Common factor

3x² + 6x = 3x(x + 2)

Pull out the largest thing that divides every term. Check first, every time.

## 2. Difference of squares

a² - b² = (a + b)(a - b)

Spot it when both terms are squares and there's a minus between them.

## 3. Trinomial with leading coefficient 1

x² + 5x + 6 = (x + 2)(x + 3)

Find two numbers that multiply to give the constant and add to give the middle coefficient.

## 4. Trinomial with leading coefficient ≠ 1

2x² + 7x + 3

Use the AC method: multiply 2 × 3 = 6. Find two numbers that multiply to 6 and add to 7. That's 6 and 1. Split the middle term: 2x² + 6x + x + 3. Group: 2x(x+3) + 1(x+3) = (2x+1)(x+3).

## 5. Sum or difference of cubes

a³ + b³ = (a + b)(a² - ab + b²)
a³ - b³ = (a - b)(a² + ab + b²)

Less common, but appears in A Level and AP.

## When factoring fails

Try the quadratic formula. If the discriminant b² - 4ac is not a perfect square, the equation doesn't factor neatly with integers anyway.

## A practice loop

Take ten quadratic equations. Try to factor each. If you can't in 30 seconds, go straight to the quadratic formula. After ten, you'll have built the pattern recognition.

[Practice algebra problems →](/quiz)
`,
  },
  {
    slug: "sets-and-venn-diagrams",
    title: "Sets and Venn Diagrams: Drawing Your Way to the Answer",
    description: "Most set theory questions get easier when you draw a Venn diagram first. Here is how to set them up properly.",
    publishedAt: today, readTime: "4 min",
    tags: ["sets", "venn diagrams", "set theory"],
    body: `
Set theory questions trip up students because the symbols look intimidating. The drawing is the rescue.

## The basics

- A ∪ B means "A or B or both" (union — everything in either circle)
- A ∩ B means "A and B" (intersection — the overlap only)
- A' or A^c means "not A" (complement — everything outside A)

If you draw two overlapping circles, those three regions are visible immediately.

## A working method for word problems

1. Draw the circles
2. Fill in the overlap first (the "both" number)
3. Fill in the rest of A and B
4. Fill in the outside (the "neither" number) if given

Always start from the overlap and work outward. Students who fill in totals first end up with negative numbers somewhere.

## A worked example

In a class of 30, 18 study French, 12 study German, 5 study both.

- Overlap = 5
- French only = 18 - 5 = 13
- German only = 12 - 5 = 7
- Neither = 30 - 13 - 5 - 7 = 5

Total check: 13 + 5 + 7 + 5 = 30. ✓

## Three circles

For three sets, use the Venn diagram with three overlapping circles. Same method: fill the central triple-overlap first, then work outward.

## When not to use Venn diagrams

If the problem has 4+ sets, the Venn gets messy. Use a table instead. Each row is one combination of "in / not in" each set.

[Practice set theory questions →](/quiz)
`,
  },
  {
    slug: "sequences-and-series-basics",
    title: "Sequences and Series: Arithmetic vs Geometric in Plain English",
    description: "An arithmetic sequence adds a constant. A geometric one multiplies. Here are the formulas plus when to spot each.",
    publishedAt: today, readTime: "5 min",
    tags: ["sequences and series", "arithmetic sequence", "geometric sequence"],
    body: `
Sequences and series are pattern questions in disguise. You only need to spot whether it's arithmetic (adding) or geometric (multiplying).

## Arithmetic sequences

Each term is the previous term plus a constant d (the common difference).

- nth term: a + (n-1)d
- Sum of first n terms: n/2 × (2a + (n-1)d)

Where a is the first term, n is how many terms.

## Geometric sequences

Each term is the previous term times a constant r (the common ratio).

- nth term: a × r^(n-1)
- Sum of first n terms: a × (1 - rⁿ) / (1 - r), for r ≠ 1
- Sum to infinity (only if |r| < 1): a / (1 - r)

## Spot which is which

Look at consecutive differences and consecutive ratios.

- 2, 5, 8, 11, ... → differences are 3, 3, 3 (arithmetic, d = 3)
- 2, 6, 18, 54, ... → ratios are 3, 3, 3 (geometric, r = 3)
- 2, 4, 8, 16, ... → ratios are 2, 2, 2 (geometric, r = 2)

If neither differences nor ratios are constant, it's neither — and you'll need a different formula.

## Common pitfalls

- Mixing up nth term and sum
- Forgetting the (n - 1) in the arithmetic formula
- Using the sum-to-infinity formula when |r| ≥ 1 (it doesn't converge)
- Off-by-one errors in counting how many terms

## A worked example

Find the 10th term and the sum of the first 10 terms of 3, 7, 11, 15, ...

This is arithmetic: a = 3, d = 4.

- 10th term: 3 + 9 × 4 = 39
- Sum: 10/2 × (6 + 9 × 4) = 5 × 42 = 210

[Practice sequence questions →](/quiz)
`,
  },
  {
    slug: "matrix-basics-for-students",
    title: "Matrices for Students: Adding, Multiplying, Determinants",
    description: "A matrix is a grid of numbers. Here is what you can do with them and where you will see them in school.",
    publishedAt: today, readTime: "5 min",
    tags: ["matrices", "matrix math", "linear algebra basics"],
    body: `
A matrix is just a rectangular grid of numbers. They're useful because lots of real problems happen in grids — solving systems of equations, computer graphics, statistics.

## Addition and subtraction

Matrices must be the same size. Add or subtract corresponding entries.

[1 2]   [5 6]   [6 8]
[3 4] + [7 8] = [10 12]

## Multiplication

Different from element-wise multiplication. To multiply matrix A by matrix B, the number of columns in A must equal the number of rows in B.

The (i, j) entry of the product is the dot product of row i of A and column j of B.

This sounds complicated. After three worked examples it becomes mechanical.

## Determinant of a 2×2

For [[a, b], [c, d]] the determinant is ad - bc.

The determinant tells you whether the matrix is invertible (non-zero determinant means it is) and whether a system of equations has a unique solution.

## Inverse of a 2×2

If det(A) ≠ 0:

A⁻¹ = (1 / det(A)) × [[d, -b], [-c, a]]

## Where you'll meet matrices

- A Level Further Maths
- CBSE Class 12 Maths
- AP Calculus BC (rare)
- First-year university CS, engineering, economics

## Common pitfalls

- Trying to multiply incompatible matrices
- Confusing element-wise with matrix multiplication
- Wrong sign in the inverse formula
- Computing the determinant of a non-square matrix (only square matrices have one)

[Try matrix questions →](/quiz)
`,
  },

  // ─── Science deep-dives ───
  {
    slug: "newtons-laws-explained",
    title: "Newton's Three Laws Explained Simply",
    description: "Three laws cover most of mechanics. Here are the plain-English versions and the kind of question each one answers.",
    publishedAt: today, readTime: "5 min",
    tags: ["newtons laws", "physics help", "mechanics"],
    body: `
Newton's three laws cover almost every mechanics question on a physics paper. Here they are in plain English, with a question type for each.

## First law (inertia)

An object stays at rest, or keeps moving at constant velocity, unless a force acts on it.

What the question looks like: "A 5 kg block sits on a frictionless surface. What happens when you stop pushing?" Answer: it keeps moving at constant velocity.

## Second law

F = ma. Force equals mass times acceleration.

What the question looks like: "A 2 kg ball accelerates at 3 m/s². What force is acting?" Answer: 6 N.

This is the workhorse. Most numerical mechanics questions are F = ma in disguise.

## Third law

Every action has an equal and opposite reaction.

What the question looks like: "A book sits on a table. Identify the action-reaction pair." Answer: book pushes table down with weight W, table pushes book up with W.

The trap: gravity (book pulled down by Earth) and the table's normal force (table pushes book up) are NOT a Newton's third law pair. They're two forces on the same object. A third law pair always involves two different objects.

## Common pitfalls

- Forgetting that constant velocity (including zero velocity) means net force is zero
- Treating mass like weight. Mass is in kg. Weight is in N (mass × g).
- Mixing up Newton's third law pair vs balanced forces

## Where the three laws are not enough

- Rotational motion (need angular momentum)
- Anything at the speed of light (need special relativity)
- Subatomic scales (need quantum mechanics)

For all of school physics through A Level, the three laws plus energy conservation cover everything.

[Try a mechanics question →](/math-solver)
`,
  },
  {
    slug: "electromagnetism-basics",
    title: "Electromagnetism Basics: Why Electricity and Magnetism Are the Same Thing",
    description: "A moving charge creates a magnetic field. A changing magnetic field creates an electric field. Here is what that means.",
    publishedAt: today, readTime: "6 min",
    tags: ["electromagnetism", "physics help", "Faraday law"],
    body: `
Electricity and magnetism look like two separate topics. They're the same phenomenon seen from different angles. Once that clicks, half of A Level physics gets easier.

## The four big ideas

1. **A static charge creates an electric field** (Coulomb's law)
2. **A moving charge creates a magnetic field** (right-hand rule)
3. **A changing magnetic field creates an electric field** (Faraday's law)
4. **A changing electric field creates a magnetic field** (Maxwell's correction to Ampere)

Idea 3 is how generators work. Idea 4 is how light waves propagate.

## The right-hand rule

For a current-carrying wire: point your right thumb in the direction of conventional current. Your fingers curl in the direction of the magnetic field.

For a force on a charge in a magnetic field: F = qv × B. Use the right-hand rule for the cross product.

## Faraday's law in one sentence

The electromotive force (EMF) induced in a loop equals the negative of the rate of change of magnetic flux through the loop.

EMF = -dΦ/dt

This explains how power stations work, how transformers work, how dynamo lights on bikes work.

## Lenz's law

The minus sign in Faraday's law has a name: Lenz's law. The induced current opposes the change that caused it. If the flux is increasing, the induced current creates a field opposing the increase. If decreasing, opposing the decrease.

This is conservation of energy in disguise.

## What questions ask

- Find the magnetic field at a point (use Biot-Savart for a wire, B = μ₀I / (2πr))
- Find the force on a current-carrying wire (F = BIL)
- Find the EMF in a coil rotating in a field (E = NBA ω sin(ωt))

## Common pitfalls

- Wrong direction from the right-hand rule (always use right hand, not left)
- Forgetting the minus sign in Faraday's law
- Mixing up the field of a current loop with the field of a single wire

[Try a physics question →](/math-solver)
`,
  },
  {
    slug: "periodic-table-explained",
    title: "The Periodic Table Explained: Trends That Predict Everything",
    description: "The periodic table is not a list to memorise. It is a map of how electrons behave. Here is how to read it.",
    publishedAt: today, readTime: "6 min",
    tags: ["periodic table", "chemistry help", "atomic structure"],
    body: `
The periodic table looks like a memorisation nightmare. It's actually a brilliant map of how electrons behave. Once you know how to read it, you can predict reactions you've never seen.

## The two big patterns

1. **Going down a group** — properties change because atoms get bigger
2. **Going across a period** — properties change because protons increase but electrons stay in the same shell

Both patterns make the same physics — atomic radius, ionisation energy, electronegativity, metallic character — change in predictable directions.

## Atomic radius

- Larger going down (more shells)
- Smaller going across (more protons pull electrons in)

## Ionisation energy

The energy to remove the outermost electron.

- Lower going down (electron is farther from nucleus)
- Higher going across (electron is held more tightly)

## Electronegativity

How strongly an atom pulls electrons in a bond.

- Lower going down
- Higher going across (peaks at fluorine)

Fluorine is the most electronegative element. Caesium is one of the least.

## Reactivity

- Group 1 (alkali metals): more reactive going down (Cs > Rb > K > Na > Li)
- Group 17 (halogens): more reactive going up (F > Cl > Br > I)

The reasons are opposite — alkali metals lose an electron more easily as they get bigger, halogens gain an electron more easily as they get smaller.

## What examiners want you to predict

- Ionic vs covalent bonding (large electronegativity difference → ionic)
- Whether a reaction will displace another (more reactive metal displaces less reactive)
- The nature of the oxide (metal oxide → basic, non-metal oxide → acidic)
- The trend in melting points within a group

## Common pitfalls

- Treating noble gases as inert (they used to be called inert gases — modern chemistry has noble gas compounds)
- Confusing first ionisation energy with electron affinity
- Forgetting that hydrogen sits in group 1 but is not a metal

[Practice chemistry questions →](/quiz)
`,
  },
  {
    slug: "dna-replication-step-by-step",
    title: "DNA Replication Step by Step (For Biology Students)",
    description: "DNA replication has four enzymes and one big idea. Here is the play-by-play.",
    publishedAt: today, readTime: "5 min",
    tags: ["dna replication", "biology", "molecular biology"],
    body: `
DNA replication looks like a lot of jargon: helicase, primase, polymerase, ligase. The big idea is simple — copy the genetic code, accurately.

## The big idea (semi-conservative)

When DNA replicates, the two original strands separate. Each old strand becomes the template for a new partner. Result: two double helices, each with one old and one new strand.

## The cast of enzymes

1. **Helicase** unwinds the double helix at the replication fork
2. **Primase** lays down a short RNA primer (DNA polymerase needs something to start from)
3. **DNA polymerase III** adds new nucleotides, base-pairing with the template
4. **DNA polymerase I** removes the RNA primers and replaces them with DNA
5. **Ligase** seals the gaps

## The leading and lagging strand

DNA polymerase only works in one direction (5' to 3'). The two template strands run in opposite directions.

- The strand running the right way is the **leading strand** — copied continuously
- The other one is the **lagging strand** — copied in short pieces called Okazaki fragments

This is why ligase is needed — to stitch the Okazaki fragments together.

## Proofreading

DNA polymerase has a proofreading function. It catches and fixes most errors. Errors that get past proofreading become mutations.

## What examiners ask

- Name the enzymes in order
- Why is DNA replication called semi-conservative?
- Distinguish leading vs lagging strand
- What goes wrong if ligase is faulty?

## Common pitfalls

- Confusing replication with transcription
- Forgetting the RNA primer step
- Saying DNA polymerase works in both directions (it doesn't)

[Practice biology questions →](/quiz)
`,
  },
  {
    slug: "mitosis-vs-meiosis",
    title: "Mitosis vs Meiosis: The Two Cell Divisions That Confuse Everyone",
    description: "Mitosis makes copies. Meiosis makes variation. Here is how they differ stage by stage.",
    publishedAt: today, readTime: "5 min",
    tags: ["mitosis vs meiosis", "biology", "cell division"],
    body: `
Mitosis and meiosis are both types of cell division. They look similar in textbook diagrams. They do completely different jobs.

## Mitosis — copying

Produces two genetically identical daughter cells. Used for growth, repair, and asexual reproduction.

Stages: prophase, metaphase, anaphase, telophase.

One round of division. Result: two diploid cells from one diploid cell.

## Meiosis — variation

Produces four genetically different gametes (egg or sperm cells). Used for sexual reproduction.

Stages: prophase I, metaphase I, anaphase I, telophase I, then prophase II, metaphase II, anaphase II, telophase II.

Two rounds of division. Result: four haploid cells from one diploid cell.

## The variation comes from two events

1. **Crossing over** in prophase I — homologous chromosomes exchange chunks
2. **Independent assortment** in metaphase I — homologous pairs line up randomly

These two events mean every gamete is genetically unique.

## What examiners ask

- Distinguish mitosis from meiosis
- Why is meiosis called reduction division?
- Where does crossing over happen?
- Why do humans have 23 pairs of chromosomes?

## Common pitfalls

- Drawing two rounds of division for mitosis (only one)
- Saying mitosis happens in gametes (it doesn't)
- Confusing chromosome number with chromatid number
- Forgetting that meiosis I separates homologs, meiosis II separates sister chromatids

## A simple memory trick

- Mit-osis = mit-ten = pair of identical hands → identical copies
- Mei-osis = my-osis = my own version → variation

[Practice biology questions →](/quiz)
`,
  },
  {
    slug: "chemical-bonding-types",
    title: "Chemical Bonding: Ionic, Covalent, Metallic in Plain English",
    description: "Three bond types cover most school chemistry. Here is how to spot each one and what it means for properties.",
    publishedAt: today, readTime: "5 min",
    tags: ["chemical bonding", "ionic vs covalent", "chemistry help"],
    body: `
Three bond types cover most of GCSE, IGCSE, A Level, and AP Chemistry. Each one is just a different answer to the same question: what do atoms do with their outer electrons?

## Ionic bonding

One atom gives an electron to another. The donor becomes a positive ion (cation). The receiver becomes a negative ion (anion). They stick together by electrostatic attraction.

- Happens between metals and non-metals
- Big electronegativity difference (>1.7 on the Pauling scale)
- Forms crystals with high melting points
- Conducts electricity when molten or dissolved (ions free to move)

Examples: NaCl, MgO, CaCl₂.

## Covalent bonding

Two atoms share electrons.

- Happens between non-metals
- Small electronegativity difference (<1.7)
- Forms either molecules (H₂O, CO₂) or giant covalent structures (diamond, SiO₂)
- Molecules: low melting points, don't conduct electricity
- Giant covalent: very high melting points, mostly don't conduct (graphite is the exception)

## Metallic bonding

Metal atoms pool their outer electrons into a "sea". The positive ions sit in the sea.

- Happens between metals
- Conducts electricity (delocalised electrons)
- Malleable and ductile (ions can slide past each other)
- Usually high melting points

## How to predict which bond

1. Look at the elements
2. Metal + non-metal → ionic
3. Non-metal + non-metal → covalent
4. Metal + metal → metallic

Then use the Pauling scale electronegativity difference to refine.

## Common pitfalls

- Calling H₂O "ionic" because it's polar (it's covalent — they share electrons unequally, but they share)
- Forgetting that ionic compounds need both a cation and an anion
- Confusing intermolecular forces (between molecules) with intramolecular bonds (within a molecule)

[Practice bonding questions →](/quiz)
`,
  },
  {
    slug: "acids-bases-ph-scale",
    title: "Acids, Bases, and the pH Scale (Without the Confusion)",
    description: "An acid donates protons. A base accepts them. The pH scale measures how acidic or basic something is. Here is how it all fits.",
    publishedAt: today, readTime: "5 min",
    tags: ["acids and bases", "pH scale", "chemistry"],
    body: `
Acid-base chemistry confuses students because of the multiple definitions. Stick with one — the Brønsted-Lowry definition — and most of the topic gets simpler.

## Brønsted-Lowry definition

- An acid is a proton (H⁺) donor
- A base is a proton acceptor

When HCl dissolves in water, it donates H⁺ to water:

HCl + H₂O → H₃O⁺ + Cl⁻

HCl is the acid. Water is the base.

## The pH scale

pH = -log₁₀[H⁺]

- pH 7: neutral (pure water)
- pH < 7: acidic (more H⁺)
- pH > 7: basic (more OH⁻)

Each unit of pH is a 10× change in H⁺ concentration. pH 3 is ten times more acidic than pH 4.

## Strong vs weak

- **Strong acid** completely ionises in water (HCl, HNO₃, H₂SO₄)
- **Weak acid** only partially ionises (CH₃COOH — vinegar)
- **Strong base** completely ionises (NaOH, KOH)
- **Weak base** partially ionises (NH₃)

This is why a 1 M solution of HCl has pH ≈ 0 but a 1 M solution of acetic acid has pH ≈ 2.4 — same concentration, different ionisation.

## Neutralisation

Acid + base → salt + water.

The H⁺ from the acid combines with the OH⁻ from the base to form water. The other ions form a salt.

HCl + NaOH → NaCl + H₂O

## What examiners ask

- Calculate pH from H⁺ concentration
- Identify the conjugate acid/base pair
- Predict the salt from a neutralisation
- Distinguish strong from weak

## Common pitfalls

- Confusing strong/weak with concentrated/dilute. They're independent.
- Forgetting to take the negative log
- Treating all bases as alkalis (alkalis are bases that dissolve in water)

[Try chemistry questions →](/quiz)
`,
  },
  {
    slug: "forces-and-motion-physics",
    title: "Forces and Motion: The Toolkit That Solves Most Mechanics Questions",
    description: "Most A Level mechanics questions are one of five problem types. Here are all five and the technique for each.",
    publishedAt: today, readTime: "5 min",
    tags: ["forces and motion", "mechanics", "physics A Level"],
    body: `
Almost every mechanics question on a physics paper falls into one of five problem types. Recognise the type, reach for the right technique.

## 1. Single object on a flat surface

- Free body diagram with all forces
- Apply F = ma
- Solve

## 2. Inclined plane

- Resolve gravity along the slope (mg sin θ) and perpendicular to it (mg cos θ)
- Friction acts up the slope if the object slides down
- Apply F = ma along the slope

## 3. Pulley problems

- Two objects connected by a rope over a pulley
- Same magnitude of tension in the rope
- Same magnitude of acceleration (one up, the other down)
- Apply F = ma to each object separately, solve simultaneously

## 4. Circular motion

- Net force points toward the centre (centripetal)
- F = mv²/r
- Common cases: car on a banked road, satellite in orbit, ball on a string

## 5. Kinematics with constant acceleration

- Use SUVAT equations: s = ut + ½at², v² = u² + 2as, v = u + at
- Identify which two of s, u, v, a, t are given, pick the equation that uses them

## The four-step routine that works for all five

1. Draw the free body diagram (every force acting on every object)
2. Identify the question type (which of the five above?)
3. Write the equation
4. Solve

## Common pitfalls

- Missing a force on the diagram
- Wrong sign convention (pick a direction as positive and stick to it)
- Mixing up speed and velocity
- Using SUVAT when acceleration isn't constant

[Practice mechanics questions →](/math-solver)
`,
  },
  {
    slug: "energy-conservation-physics",
    title: "Energy Conservation: The Single Idea That Solves Half of Physics",
    description: "Energy is conserved. In every physical process. Here is how to use that one fact to solve problems faster.",
    publishedAt: today, readTime: "5 min",
    tags: ["energy conservation", "physics", "kinetic energy"],
    body: `
The first law of thermodynamics — energy is conserved — is the single most useful idea in physics. Half of mechanics problems and almost all of thermodynamics yield to it.

## What it says

Energy is neither created nor destroyed. It only changes form.

Total energy at the start = total energy at the end + energy lost to heat / sound / friction.

## The forms you'll see in school

- Kinetic energy: KE = ½ mv²
- Gravitational potential energy: GPE = mgh
- Elastic potential energy: EPE = ½ kx²
- Heat
- Sound
- Light

## The setup

For most problems:

- Pick a starting state (point A) and a final state (point B)
- List all energy at A
- List all energy at B
- Set them equal

If energy is lost to friction or air resistance, add that as an extra term on the B side.

## A worked example

A 2 kg ball is dropped from 5 m. What's its speed at the bottom?

At the top: GPE = 2 × 9.81 × 5 = 98.1 J. KE = 0.

At the bottom: GPE = 0. KE = ½ × 2 × v².

Setting them equal: 98.1 = v². So v ≈ 9.9 m/s.

## When energy conservation is faster than F = ma

- When you don't need acceleration
- When forces vary and SUVAT doesn't apply
- For problems involving height changes, springs, or elastic collisions

## When you have to be careful

- Inelastic collisions: kinetic energy is NOT conserved (some becomes heat / sound). Momentum is.
- Friction: energy is "lost" — really converted to heat. Account for it.

## Common pitfalls

- Forgetting that GPE depends on the reference height
- Setting KE equal to GPE without checking the geometry
- Treating elastic and inelastic collisions the same

[Try a physics problem →](/math-solver)
`,
  },
  {
    slug: "cell-biology-overview",
    title: "Cell Biology Overview: The Tour Every Student Should Take Once",
    description: "A cell is a tiny city. Here is what every part does, why it matters, and what gets asked on exams.",
    publishedAt: today, readTime: "5 min",
    tags: ["cell biology", "cells", "biology overview"],
    body: `
Cells are the unit of life. The textbook list of organelles looks like a vocabulary test. The truth is that each one has a specific job and most of them are intuitive.

## The tour

- **Cell membrane** — the gate. Decides what comes in and out.
- **Cytoplasm** — the liquid that fills the cell. Where most reactions happen.
- **Nucleus** — the control room. Holds DNA. Issues instructions.
- **Mitochondria** — the power station. Makes ATP from glucose and oxygen.
- **Ribosomes** — the assembly line. Builds proteins from instructions.
- **Endoplasmic reticulum (rough)** — has ribosomes attached. Builds and folds proteins.
- **Endoplasmic reticulum (smooth)** — makes lipids and detoxifies.
- **Golgi apparatus** — the post office. Packages and ships proteins.
- **Lysosomes** — the waste disposal. Digests broken parts.
- **Vacuoles** — storage. Especially big in plant cells.
- **Chloroplasts** (plants only) — solar panels. Photosynthesis happens here.
- **Cell wall** (plants, bacteria, fungi only) — the outer shell. Gives the cell shape.

## Plant vs animal cells

Plant cells have what animal cells don't: cell wall, chloroplasts, large central vacuole.

Animal cells have what plant cells don't (usually): centrioles, lysosomes, no cell wall.

## Prokaryote vs eukaryote

- **Prokaryote** (bacteria): no nucleus, no membrane-bound organelles, smaller, older
- **Eukaryote** (everything else): nucleus, membrane-bound organelles, bigger, more complex

Most exams expect you to know which kingdom each is.

## What examiners ask

- Match the organelle to its function
- Compare prokaryotic and eukaryotic cells
- Explain how the structure of an organelle suits its function
- Describe what would happen if X organelle was damaged

## Common pitfalls

- Confusing chloroplasts with mitochondria (both involve energy, opposite directions)
- Saying bacteria have nuclei (they don't — just nucleoid)
- Mixing up cell wall (plant) with cell membrane (every cell)

[Practice cell biology questions →](/quiz)
`,
  },

  // ─── English / Lit ───
  {
    slug: "how-to-write-introduction-paragraph",
    title: "How to Write an Introduction Paragraph That Actually Hooks the Reader",
    description: "Most essay introductions are throat-clearing. Here is the four-sentence formula that hooks the reader and sets up your argument.",
    publishedAt: today, readTime: "4 min",
    tags: ["essay introduction", "essay writing", "how to write essay"],
    body: `
Most students write throat-clearing introductions. "Throughout history, people have wondered…" — that sentence loses marks before you've made an argument.

A good introduction does four jobs in four sentences.

## The four-sentence formula

1. **Hook** — a specific fact, image, question, or quotation that grabs attention
2. **Context** — one sentence that frames the topic
3. **Tension** — one sentence that introduces the question or problem
4. **Thesis** — your specific argument

## A worked example

Topic: was the French Revolution worth it?

- Hook: "By 1799, France had executed its king, killed sixteen thousand of its own citizens, and ended up with a military dictator."
- Context: "The Revolution had begun ten years earlier with the highest hopes for liberty and equality."
- Tension: "Whether those ten years were worth the cost is one of history's most enduring debates."
- Thesis: "This essay argues that despite its bloody methods, the Revolution permanently weakened the divine right of kings and laid the foundation for modern democratic government."

Four sentences. Reader knows exactly where the essay is going. Your examiner is happy.

## What to avoid

- "Since the dawn of time…" — vague and lazy
- A definition pulled from a dictionary
- Restating the prompt
- Two pages of throat-clearing

## When to write the introduction

Last. Write your body paragraphs first. Then write the introduction once you actually know what your essay argues.

## When the four sentences don't fit

In timed exams, compress to three. Cut the context if needed.

[Get essay coach feedback →](/essay-coach)
`,
  },
  {
    slug: "literary-devices-cheat-sheet",
    title: "Literary Devices Cheat Sheet: The Twenty That Actually Get Tested",
    description: "Twenty literary devices cover almost every English Literature exam question. Here they are with definitions and examples.",
    publishedAt: today, readTime: "6 min",
    tags: ["literary devices", "english literature", "GCSE english"],
    body: `
The list of literary devices in your textbook is overwhelming. The list that actually gets tested is much shorter. These twenty cover almost every English Literature exam.

## Sound

- **Alliteration** — repeated consonant sounds: "Peter Piper picked"
- **Assonance** — repeated vowel sounds: "the rain in Spain"
- **Onomatopoeia** — words that sound like what they describe: "buzz", "crash"
- **Sibilance** — repeated 's' sounds, often soft and hissing

## Imagery

- **Simile** — comparison using "like" or "as"
- **Metaphor** — comparison without "like" or "as"
- **Personification** — giving human traits to non-human things
- **Imagery** — descriptive language that appeals to the senses

## Structure

- **Foreshadowing** — hints at what's to come
- **Flashback** — a scene set earlier than the main story
- **Cyclical structure** — ends where it began
- **Volta** — a turning point, especially in a sonnet

## Sentence-level

- **Repetition** — repeating a word or phrase for effect
- **Anaphora** — repetition at the start of clauses
- **Juxtaposition** — placing two opposites side by side
- **Caesura** — a pause in the middle of a line of poetry

## Meaning

- **Symbolism** — an object representing a bigger idea
- **Motif** — a repeated theme or image
- **Allegory** — a story where every element symbolises something else
- **Irony** — a gap between what's said and what's meant

## How to use them in essays

Don't just spot the device. Explain what effect it creates.

Bad: "The poet uses a simile."

Good: "The simile 'like a tired soldier' makes the speaker feel weary and battle-worn, which suits the poem's exhausted tone."

The marks live in the second sentence.

[Get essay coach feedback →](/essay-coach)
`,
  },
  {
    slug: "how-to-analyse-a-poem",
    title: "How to Analyse a Poem (the Seven-Step Method That Works on Any Text)",
    description: "Poem analysis feels mystical. It is just seven systematic questions. Here they are.",
    publishedAt: today, readTime: "5 min",
    tags: ["poem analysis", "english literature", "unseen poetry"],
    body: `
Unseen poetry questions terrify students because the poem is, well, unseen. The seven questions below work on any poem you'll meet in an exam.

## 1. What is the poem about?

One sentence. If you can't summarise the poem, you can't analyse it.

## 2. Who is the speaker?

Not the poet — the voice in the poem. Sometimes they're the same. Often they're not.

## 3. What is the tone?

Angry, sad, nostalgic, ironic, celebratory? Pick one or two words. The whole essay flows from this.

## 4. What is the structure?

How long? How many stanzas? Regular or free verse? Any rhyme scheme? Any volta or shift?

## 5. What images stand out?

Pick two or three. Note what senses they appeal to. Note what they connect to.

## 6. What sounds stand out?

Alliteration, assonance, sibilance, harsh consonants? What effect?

## 7. What is the poem really saying?

Beneath the surface. Often this is your thesis.

## A working order for the essay

- Introduction (one sentence on the poem's subject + your thesis)
- Body paragraph 1: structure
- Body paragraph 2: imagery
- Body paragraph 3: sound
- Conclusion: what you think the poem really says

## Common pitfalls

- Confusing speaker with poet
- Listing devices without explaining their effect
- Quoting too much (one or two short quotations per paragraph)
- Not making a clear argument

## The PEEL paragraph for poetry

- **Point**: what device or image you'll discuss
- **Evidence**: short quotation
- **Explanation**: what effect this creates
- **Link**: how this contributes to your overall argument

[Get essay coach feedback →](/essay-coach)
`,
  },
  {
    slug: "how-to-write-thesis-statement",
    title: "Thesis Statement: How to Write One That Actually Argues Something",
    description: "Most thesis statements are not arguments. They are facts. Here is how to make yours debatable, specific, and worth reading.",
    publishedAt: today, readTime: "4 min",
    tags: ["thesis statement", "essay writing", "how to write essay"],
    body: `
A thesis statement is the one sentence in your essay that everything else is trying to defend. If your thesis is weak, your essay can't be saved. If your thesis is strong, half the work is done.

## What makes a thesis strong

1. **It argues something.** Not a fact.
2. **It is specific.** No vague phrases.
3. **It is debatable.** A reasonable person could disagree.
4. **It previews the structure of your essay.**

## Three examples

Bad: "The French Revolution was a complex event."

Why bad: not arguable. Of course it was complex. So what?

Better: "The French Revolution succeeded in destroying the old order but failed in establishing the new one."

Why better: specific, debatable, balanced.

Best: "Although the French Revolution achieved permanent reform of the legal system, its political instability ultimately undermined its democratic ideals, paving the way for Napoleon's rise."

Why best: specific, balanced, previews the essay's structure (legal reform — political instability — Napoleon).

## A simple template

"Although [counterpoint], [thesis] because [reason 1] and [reason 2]."

This template forces you to acknowledge a counterpoint, stake a clear claim, and preview your evidence.

## Where to put it

End of the introduction paragraph. Not the first sentence. Earn the reader's attention with a hook, set up context, then state your thesis.

## How to test a thesis

Read it out loud. If you can imagine someone reading it and saying "yes obviously" or "what does that even mean", rewrite it.

If a reader can read it and disagree, you have a real thesis.

[Get thesis options from the AI coach →](/essay-coach)
`,
  },
  {
    slug: "ielts-writing-band-9-tips",
    title: "IELTS Writing: Five Tips From Examiners That Actually Lift Your Band",
    description: "Most IELTS writing advice repeats the obvious. Here are five tips drawn from examiner reports that move band 6 students to band 7.",
    publishedAt: today, readTime: "6 min",
    tags: ["IELTS writing", "IELTS prep", "english test"],
    body: `
Band 7+ on IELTS Writing is achievable for most students. The gap between band 6 and band 7 is usually narrower than test-takers expect. Five things make the difference.

## 1. Vary your sentence structure

Examiners count complex sentences. A complex sentence has at least one subordinate clause.

Simple: "I went to the shop. It was closed."
Complex: "When I arrived at the shop, it was already closed."

Aim for one complex sentence per paragraph.

## 2. Use precise vocabulary

"Big" and "important" are weak. "Substantial" and "significant" are stronger.

Don't memorise a list of fancy words. Pick five words you'll use in any essay (substantial, significant, advocate, undermine, sustainable) and use them naturally.

## 3. Answer the question, not a related question

The single most common reason for band-6 scores is partial answer. If the prompt has two parts, address both. Underline the prompt before you write.

## 4. Have a clear position from sentence one

For Task 2, examiners want to see a clear opinion immediately. Don't sit on the fence for three paragraphs.

## 5. Proofread the last 30 seconds

Spelling, articles ("a" vs "the"), and subject-verb agreement add up. Five small errors can drop a band.

## What examiners count

- Task achievement (did you fully address the prompt?)
- Coherence and cohesion (linking words, paragraph structure)
- Lexical resource (vocabulary range)
- Grammatical range and accuracy

Each is 25% of your score. Most students focus on vocabulary and ignore the other three.

## Words to avoid

"In a nutshell", "in a nutshell", "every coin has two sides", "as the saying goes" — examiners have heard these a thousand times. They don't lift your band. Original phrasing in plain English does.

[Get essay coach feedback →](/essay-coach)
`,
  },
  {
    slug: "how-to-write-strong-conclusion",
    title: "How to Write a Strong Essay Conclusion (Not Just a Summary)",
    description: "Most conclusions repeat the introduction. A strong conclusion does three things instead. Here they are.",
    publishedAt: today, readTime: "4 min",
    tags: ["essay conclusion", "essay writing", "how to write essay"],
    body: `
The conclusion is the last thing the examiner reads. It should not be a summary. A strong conclusion does three things in three to five sentences.

## 1. Restate the thesis in fresh words

Not copy-paste from the introduction. The same argument expressed differently.

## 2. Synthesise your evidence

Not list your body paragraphs. Show how they fit together. A good conclusion shows the big picture your evidence has built.

## 3. End with a forward-looking sentence

Either a wider implication, a question your essay raises but doesn't answer, or a call to action. This leaves the reader with something to think about.

## A worked example

Essay topic: was the French Revolution worth it?

Bad conclusion: "In conclusion, the French Revolution was a complex event with both positive and negative outcomes."

Strong conclusion: "The Revolution's legacy is uneven. It established legal equality and forever undermined the divine right of kings, but the political instability of its decade cost more lives than any peaceful reform would have. The most important question modern democracies still ask, then, is whether the price of overthrow is ever justifiable when the result might be reform without revolution."

## What to never do

- Start with "In conclusion" — by the conclusion the reader knows where they are
- Add new evidence
- Apologise for your essay
- Quote someone famous out of nowhere

## When you don't know how to end

Try: "What this argument suggests, then, is …" That phrase forces you to synthesise rather than summarise.

## Length

Three to five sentences. Long enough to land. Short enough to leave the reader wanting more.

[Try the essay coach for a sample conclusion →](/essay-coach)
`,
  },
  {
    slug: "shakespeare-essay-tips",
    title: "Shakespeare Essays: How to Sound Like You Actually Read the Play",
    description: "Six tips for writing Shakespeare essays that show real understanding rather than recycled SparkNotes phrases.",
    publishedAt: today, readTime: "5 min",
    tags: ["shakespeare essay", "english literature", "macbeth essay"],
    body: `
Shakespeare essays are the most common GCSE and A Level English Literature task. They're also where students lean hardest on study guides, and examiners can tell.

## 1. Memorise five quotations per text

Three to ten words long. From key moments. Easy to apply to multiple essay questions. We covered this in the [GCSE quote memorisation post](/blog/gcse-english-quote-memorisation).

## 2. Mention the genre

Macbeth is a tragedy. Twelfth Night is a comedy. Genre conventions affect interpretation. A tragic hero must have a fatal flaw. A comedy ends in marriage. Examiners reward this awareness.

## 3. Use technical vocabulary

Soliloquy, aside, dramatic irony, unities, blank verse, iambic pentameter. Five terms you can drop in any Shakespeare essay. Use them naturally, not as decoration.

## 4. Talk about the audience

Shakespeare wrote for an audience, not for readers. The Globe was rowdy. Soliloquies were dramatic asides to standees in the pit. Mentioning audience response in your essay shows you understand the plays as performances.

## 5. Use historical context sparingly

A line on Jacobean fears of regicide for Macbeth, or anti-Semitism for Merchant of Venice, can earn you AO3 marks. But context should never overshadow analysis. Two sentences max per essay.

## 6. Avoid these clichés

- "Shakespeare uses language to convey…"
- "This shows that Shakespeare wanted to…"
- "Shakespeare's audience would have been shocked…"

These phrases mark you as someone who memorised templates. Replace them with specific analysis.

## A working essay structure

- Introduction with thesis
- Body 1: analyse a specific scene or speech
- Body 2: another scene, building on Body 1
- Body 3: a counter-argument or alternative reading
- Conclusion that resolves the tension

## On using quotations

Shorter is better. Three to seven words is ideal. Too long and you can't analyse them.

[Get essay coach feedback →](/essay-coach)
`,
  },

  // ─── Languages ───
  {
    slug: "mandarin-tones-for-beginners",
    title: "Mandarin Tones for Beginners: Why Tones Matter More Than Vocabulary",
    description: "Mandarin tones are the make-or-break of beginner learning. Here is why they matter and how to drill them.",
    publishedAt: today, readTime: "5 min",
    tags: ["mandarin tones", "learn mandarin", "chinese for beginners"],
    body: `
Most beginner Mandarin learners memorise vocabulary and ignore tones. Then they speak and nobody understands them. Tones are not optional. They're how Mandarin distinguishes meaning.

## The four tones (plus neutral)

- 1st tone (mā): high and flat, like singing one note. Means "mother".
- 2nd tone (má): rising, like asking a question in English. Means "hemp".
- 3rd tone (mǎ): dipping down then up. Means "horse".
- 4th tone (mà): falling, like an angry command. Means "scold".
- Neutral (ma): light, no marked tone. Often a question particle.

Same letters, four different meanings. Tones are not decoration.

## How to drill them

1. Listen to native audio of all four tones, daily, for two weeks
2. Record yourself, compare
3. Learn each new word with its tone, never without
4. Use tone marks in your notes always

## The 3rd tone catch

When two 3rd tones come together, the first becomes a 2nd tone. So nǐ hǎo is actually pronounced ní hǎo. This is "tone sandhi" — sounds technical but obvious once you hear it.

## Apps and tools that help

- Pleco for dictionary lookups with audio
- Hello Chinese / Duolingo for daily drilling
- [Vocabulary Builder](/vocab) for individual word lookups
- Native YouTube channels (slow speed, subtitles on)

## What native speakers care about

You won't be perfect on tones. You don't have to be. Native speakers can usually figure out from context. But a learner who has tried to use tones is treated very differently from one who hasn't. The effort signals respect.

## Common pitfalls

- Reading pinyin without tones
- Confusing 2nd and 3rd tones (the dip in 3rd is sharper)
- Speaking flat (treating Mandarin like English)

[Look up a Mandarin word with tones →](/vocab)
`,
  },
  {
    slug: "japanese-hiragana-memorisation",
    title: "How to Memorise Japanese Hiragana in Two Weeks",
    description: "Hiragana is 46 characters. Here is the routine that gets you reading them all in two weeks.",
    publishedAt: today, readTime: "5 min",
    tags: ["japanese hiragana", "learn japanese", "hiragana memorisation"],
    body: `
Hiragana is the foundation of Japanese. Until you can read it, you can't even use a Japanese textbook properly. The good news: it's only 46 characters and you can learn them in two weeks.

## The plan

- Day 1: vowels (あ い う え お)
- Day 2: K-row (か き く け こ)
- Day 3: S-row (さ し す せ そ)
- Day 4: T-row (た ち つ て と)
- Day 5: review days 1-4
- Day 6: N-row (な に ぬ ね の)
- Day 7: H-row (は ひ ふ へ ほ)
- Day 8: M-row (ま み む め も)
- Day 9: review days 6-8
- Day 10: Y-row (や ゆ よ)
- Day 11: R-row (ら り る れ ろ)
- Day 12: W-row + N (わ を ん)
- Day 13: review everything
- Day 14: read your first basic sentence

Five new characters a day, with constant review. This is exactly what spaced repetition is for.

## How to actually memorise each one

1. Look at the character
2. Say its sound out loud
3. Trace it in the air
4. Make a mnemonic (e.g. か looks like a knife = ka)
5. Make a flashcard

## Use [Flashcards](/flashcards) right from day one

Don't wait. Add five cards a day. Spaced repetition handles the rest.

## What to read after week 2

- Children's books (free online)
- Hiragana-only menus
- Tadoku graded readers (free)

## Common pitfalls

- Confusing similar pairs: は (ha) vs ほ (ho), さ (sa) vs ち (chi), ぬ (nu) vs め (me)
- Trying to learn hiragana and katakana at the same time (do hiragana first)
- Skipping the writing practice (the motor memory is part of the learning)

After hiragana comes katakana (another 46 characters, used for foreign words). Then kanji, which is the long road. But hiragana is the foundation.

[Learn a Japanese word →](/vocab)
`,
  },
  {
    slug: "german-cases-simplified",
    title: "German Cases Without Tears: Nominative, Accusative, Dative, Genitive",
    description: "Four cases. Each one answers a specific question. Here is the simplest explanation that actually works.",
    publishedAt: today, readTime: "5 min",
    tags: ["german cases", "learn german", "german grammar"],
    body: `
German cases scare students because the textbooks bury the simple idea under terminology. Each case answers one question.

## The four cases

- **Nominative** — who or what is doing the action? (the subject)
- **Accusative** — who or what is the action being done to? (the direct object)
- **Dative** — to or for whom is the action being done? (the indirect object)
- **Genitive** — whose? (possession)

That's the whole idea. Each case has its own articles (der/die/das changes), but the meaning is just those four questions.

## The articles (the part everyone fears)

| | Masculine | Feminine | Neuter | Plural |
|---|---|---|---|---|
| Nom | der | die | das | die |
| Acc | den | die | das | die |
| Dat | dem | der | dem | den |
| Gen | des | der | des | der |

Memorise this table. It pays off forever.

## A worked example

Ich gebe dem Mann das Buch. (I give the man the book.)

- Ich = nominative (subject)
- dem Mann = dative (indirect object — to whom?)
- das Buch = accusative (direct object — what?)

## Triggers for cases

- Verbs of motion + zu/nach + dative ("ich gehe zu dem Bahnhof")
- Most prepositions are tied to a specific case ("mit" always takes dative; "für" always takes accusative)
- Two-way prepositions take accusative for movement, dative for location ("ich gehe in die Schule" vs "ich bin in der Schule")

## Common pitfalls

- Confusing accusative and dative
- Forgetting that articles change based on case, not just gender
- Treating all prepositions the same

The key insight: don't memorise the cases. Memorise the questions they answer.

[Look up a German word →](/vocab)
`,
  },
  {
    slug: "spanish-ser-vs-estar",
    title: "Spanish Ser vs Estar: The Rule That Settles Everything",
    description: "Both verbs mean to be. Use the wrong one and a Spanish speaker notices immediately. Here is the rule.",
    publishedAt: today, readTime: "4 min",
    tags: ["spanish ser estar", "learn spanish", "spanish grammar"],
    body: `
"Ser" and "estar" both mean "to be" in Spanish. Mixing them up is the most common mistake learners make. The rule below covers most situations.

## The simple version

- **Ser** for permanent identity
- **Estar** for temporary state or location

That's the headline. It covers maybe 80% of cases.

## The detail (DOCTOR / PLACE)

For ser, use the DOCTOR mnemonic:

- **D**escription
- **O**ccupation
- **C**haracteristic
- **T**ime
- **O**rigin
- **R**elationship

For estar, use the PLACE mnemonic:

- **P**osition
- **L**ocation
- **A**ction (right now, in progressive tenses)
- **C**ondition (temporary)
- **E**motion

## Worked examples

- Soy alta. (I am tall.) — characteristic, ser
- Estoy cansada. (I am tired.) — temporary state, estar
- Es médico. (He is a doctor.) — occupation, ser
- Estoy en Madrid. (I am in Madrid.) — location, estar

## When the verb changes the meaning

Some adjectives literally change meaning depending on which verb you use.

- Ser aburrido = to be boring
- Estar aburrido = to be bored

- Ser listo = to be smart
- Estar listo = to be ready

These are worth memorising as flashcards.

## Common pitfalls

- Using ser for location ("Soy en la casa" — wrong)
- Using estar for occupation ("Estoy médico" — wrong)
- Forgetting that emotions are estar, not ser

## Quick test

If you can say "right now" before the sentence and it still makes sense, use estar. Otherwise ser.

"I am tall right now" sounds weird → ser.
"I am tired right now" sounds fine → estar.

[Look up a Spanish word →](/vocab)
`,
  },
  {
    slug: "bilingual-study-tips",
    title: "How to Study in Your Second Language Without Losing Marks",
    description: "If your textbook is in your second language, you are doing two jobs at once. Here is how to do both well.",
    publishedAt: today, readTime: "5 min",
    tags: ["bilingual students", "ESL students", "studying in second language"],
    body: `
If your school teaches in English but you grew up speaking Urdu or Arabic or Spanish at home, every textbook chapter is two jobs: understand the content, and understand the language. Most students try to do both at once and end up doing neither well.

## Separate the two jobs

1. **First pass:** read for vocabulary. Mark every word you don't know. Don't worry about understanding the content yet.
2. **Look up the words.** Use [Vocabulary Builder](/vocab) — it explains words at your reading level.
3. **Second pass:** read for content. Now the language won't get in the way.

This sounds slower but is actually faster than trying both at once.

## Build a personal glossary

For each subject, keep a notebook of technical vocabulary in both languages. "Photosynthesis" in English and your home language. "Mitochondria", "respiration", "force", whatever.

This pays off enormously on exam day. You can think in your stronger language and translate to the exam language as you write.

## Use [Translation Mode](/translate)

It translates while keeping technical terms in the original language. So your notes are in your native language but the exam vocabulary stays intact.

## Study in your stronger language, write in the exam language

Most students try to study in their weaker language. That's backwards. Study in whichever language you understand the concepts in fastest. Then practice expressing them in the exam language.

## Common pitfalls

- Avoiding texts in your weaker language until exam week
- Translating everything (loses technical vocabulary)
- Studying the language separately from the content
- Speaking only your home language at home (you need exposure)

## A working schedule

- 70% of study time in your weaker (exam) language
- 30% in your stronger language for difficult concepts
- Switch back and forth on the same topic

Bilingual students who do this typically outscore monolingual students because they understand more deeply.

[Try the translation tool →](/translate)
`,
  },

  // ─── Exam-specific ───
  {
    slug: "ap-calculus-ab-study-guide",
    title: "AP Calculus AB Study Guide: The Topics That Score Most",
    description: "Six topics dominate the AP Calculus AB exam. Drilling these gives you the highest score per hour of study.",
    publishedAt: today, readTime: "6 min",
    tags: ["AP calculus AB", "AP calculus prep", "calculus exam"],
    body: `
AP Calculus AB rewards depth on a small number of topics. Here are the six that dominate the exam, ranked by how often they show up.

## 1. Derivatives (40% of the exam)

Drill the rules: power, product, quotient, chain. Memorise the derivatives of trig, exponential, and log functions. Use [Math Solver](/math-solver) for worked examples.

Common question types:
- Find the derivative of a complex function
- Implicit differentiation
- Related rates problems

## 2. Integrals (35% of the exam)

Antiderivatives, definite integrals, the fundamental theorem of calculus. Drill u-substitution and integration by parts.

Common question types:
- Definite integrals
- Area between curves
- Volumes of revolution

## 3. Limits and continuity (10% of the exam)

Often combined with derivatives. Know the standard limits, especially limit as x approaches infinity.

## 4. Applications of derivatives (10% of the exam)

- Optimisation problems
- Mean value theorem
- Critical points and inflection points

## 5. Differential equations (5% of the exam)

Separable equations only. Slope fields appear sometimes.

## 6. Series (NOT on AB)

Series are on Calculus BC, not AB. Skip them if you're only taking AB.

## Calculator vs no-calculator

The exam has both sections. Practice both. Calculator section lets you use TI-84. No-calculator section requires you to compute by hand. Most students underprepare for the no-calculator section.

## Three-week plan before the exam

- Week 1: drill derivatives and integrals. One [Mock Exam](/mock-exam) at the end.
- Week 2: applications. Optimisation, related rates, area/volume problems.
- Week 3: full mock exams under timed conditions.

## What examiners reward

- Showing work (free response is 50% of the exam)
- Stating units in answers
- Using calculus notation correctly

## Common pitfalls

- Forgetting +C on indefinite integrals
- Wrong sign on the chain rule
- Not labeling units in physics-style problems
- Treating the calculator as a crutch instead of a tool

[Try AP-style calculus problems →](/quiz)
`,
  },
  {
    slug: "ap-biology-high-yield-topics",
    title: "AP Biology: The Six High-Yield Topics That Score Most",
    description: "AP Biology is huge. Six topics produce most of the questions. Here they are ranked by frequency.",
    publishedAt: today, readTime: "5 min",
    tags: ["AP biology", "AP biology prep", "biology exam"],
    body: `
AP Biology covers almost everything in a college intro bio course. Six topics dominate the exam. Drill these and you cover most of what gets tested.

## 1. Cellular processes (energy and communication)

- Photosynthesis (light-dependent, light-independent)
- Cellular respiration (glycolysis, Krebs, electron transport)
- Cell signalling

This is your top priority. Both pathways come up almost every year.

## 2. Genetics

- Mendelian genetics, Punnett squares
- Pedigrees
- Mutations
- Gene regulation

## 3. Evolution

- Natural selection
- Speciation
- Hardy-Weinberg
- Phylogenetics

## 4. Molecular biology

- DNA structure and replication
- Transcription and translation
- Protein structure

## 5. Ecology

- Population growth
- Food webs and energy flow
- Biogeochemical cycles

## 6. Biochemistry

- Macromolecules (carbs, lipids, proteins, nucleic acids)
- Enzymes

## What the exam looks like

- Multiple choice (60% of score)
- Free response — six questions, mix of long and short
- Lots of data analysis questions (graphs, tables)

## Three-week plan

- Week 1: cellular processes + molecular biology
- Week 2: genetics + evolution
- Week 3: ecology + biochemistry + full mock exam

## What examiners reward

- Specificity (don't say "the cell does X" — say "the chloroplast does X")
- Connecting ideas (this is why evolution and genetics show up together)
- Quantitative reasoning (graphs, calculations)
- Following experimental design (controls, variables)

## Common pitfalls

- Memorising without understanding (the questions are application-heavy)
- Confusing photosynthesis with cellular respiration (they're opposite directions)
- Skipping Hardy-Weinberg (the math comes up)
- Not practicing data analysis

[Try AP biology questions →](/quiz)
`,
  },
  {
    slug: "sat-math-timing-strategy",
    title: "SAT Math Timing Strategy: How to Finish on Time and Not Lose Points",
    description: "SAT Math punishes students who run out of time. Here is the timing strategy that gets you through every question.",
    publishedAt: today, readTime: "5 min",
    tags: ["SAT math", "SAT prep", "SAT timing"],
    body: `
The SAT Math section is winnable on content. Most students lose points to the clock. Here's the strategy.

## The clock

- Module 1: 22 questions, 35 minutes (95 seconds per question)
- Module 2: 22 questions, 35 minutes (95 seconds per question)

Module 2 is adaptive — easier or harder based on Module 1 performance.

## The two-pass strategy

1. **Pass 1:** answer every question that takes under 60 seconds. Skip the hard ones.
2. **Pass 2:** go back to the skipped questions with the time you saved.

This gets you maximum points per minute.

## The 30-second skip rule

If a question hasn't started to make sense in 30 seconds, skip it. Mark it. Come back later. Most students lose more points by getting stuck on one question than by getting it wrong.

## Calculator vs no-calculator

Both modules allow Desmos and a physical calculator. Use Desmos for graphing, your calculator for computation. Practice both before the test.

## What questions to skip first

- Word problems with three or more variables
- Geometry questions you can't visualise
- Questions with weird-looking equations

What to attempt first:

- Anything with a clear formula
- Two-step algebra
- Probability with simple numbers

## The 90/10 rule

You don't need to get every question right. The mapping from raw score to scaled score is generous at the top. Missing two or three hard questions still gets you 750+.

## Three weeks before the test

- Week 1: drill content (algebra, geometry, statistics)
- Week 2: timed practice modules
- Week 3: full mock SATs under exam conditions

## Common pitfalls

- Spending five minutes on one hard question
- Not using Desmos for graphing
- Skipping the no-calculator practice (because calculator ones feel easier)
- Cramming the night before instead of sleeping

[Try SAT-style questions →](/mock-exam)
`,
  },
  {
    slug: "act-science-section-tips",
    title: "ACT Science Section: It Is Reading, Not Science",
    description: "Most ACT Science questions test reading comprehension, not science knowledge. Here is how to score on it.",
    publishedAt: today, readTime: "4 min",
    tags: ["ACT science", "ACT prep", "ACT timing"],
    body: `
The ACT Science section is the most misunderstood part of the test. It barely tests science knowledge. It mostly tests how fast you can read graphs and tables.

## What it actually tests

- Reading data from graphs and tables
- Identifying trends
- Comparing experimental setups
- Inferring conclusions from data

## What it does NOT test

- Memorised facts (you don't need to know what mitochondria do)
- Calculations (mostly)
- Specific science topics

## The strategy

1. Read the question first
2. Find the relevant graph or table
3. Read the question again
4. Answer

Most students read the passage first, then the questions. That's backwards. The passages are dense and you don't need most of them.

## Three passage types

1. **Data Representation** — one graph or table. Easy.
2. **Research Summary** — two or three experiments compared. Medium.
3. **Conflicting Viewpoints** — two scientists disagree. Read the actual prose.

For types 1 and 2, you can answer most questions just by looking at the data.

## The clock

40 questions in 35 minutes. About 50 seconds per question. Tight but workable.

## Common pitfalls

- Reading the passage word-for-word (a waste of time)
- Bringing science knowledge to questions that don't require it
- Misreading axis labels on graphs
- Not noticing that two graphs use different scales

## The conflicting viewpoints passage

This is the only passage that requires careful reading. The questions ask about each scientist's argument. You can't shortcut this one.

## Practice strategy

Take five timed Science sections in the three weeks before the test. The pace becomes natural. Rotate which passage type you start with — most students dread the conflicting viewpoints one and save it for last.

[Try ACT-style passages →](/mock-exam)
`,
  },
  {
    slug: "upsc-prep-beginner-guide",
    title: "UPSC Prep: A Beginner Guide That Won't Waste Your First Year",
    description: "UPSC is the hardest exam in India. Most aspirants waste their first year. Here is what to do instead.",
    publishedAt: today, readTime: "7 min",
    tags: ["UPSC prep", "civil services exam", "IAS prep"],
    body: `
Most UPSC aspirants waste their first year of preparation. They join coaching classes, accumulate book lists, and read aimlessly. The students who clear in two years do something different.

## The big picture

UPSC has three stages:

1. **Prelims** (June) — multiple choice, qualifying
2. **Mains** (September) — nine descriptive papers
3. **Interview** (March-April) — personality test

Most aspirants take 2-3 attempts to clear. The first attempt is mostly learning the format.

## Year 1 priorities

- NCERT class 6-12 cover-to-cover for History, Geography, Polity, Economy, Science
- One newspaper a day (The Hindu or Indian Express)
- Polity by Laxmikanth (one read)
- Modern History by Spectrum
- Geography by GC Leong + Atlas
- Indian Economy by Ramesh Singh

That's the foundation. Most aspirants jump to advanced books before they've covered NCERTs. Don't.

## The newspaper habit

You're not reading for information. You're reading for context. Pick a hard editorial. Read it twice. Make a half-page note in your own words.

## Mains writing practice

Start writing answers from month 4. Even bad answers are better than none. Use [Mark My Answer](/grade) for self-feedback.

## Optional subject

Choose carefully. Pick one you've studied or genuinely enjoy reading about. Most successful aspirants chose Geography, Sociology, or Public Administration.

## Common traps

- Joining three coaching institutes at once
- Buying every book on every list
- Watching coaching videos as a substitute for reading
- Comparing notes obsessively in WhatsApp groups
- Test series before basic preparation

## What clearing aspirants actually do

- Pick a few books and read them cover-to-cover, multiple times
- Make their own notes (handwritten beats typed for retention)
- Answer-write daily from month 4
- Take mock tests but don't obsess over scores
- Stay off WhatsApp groups
- Sleep eight hours

## A working daily schedule

- 6 hours: NCERT + standard books
- 1 hour: newspaper
- 1 hour: answer writing
- 1 hour: revision
- 2 hours: optional subject

That's 11 hours. Beyond that is diminishing returns.

[Get answer writing feedback →](/grade)
`,
  },
  {
    slug: "css-pakistan-exam-prep",
    title: "CSS Pakistan: A Realistic Prep Plan for the Country's Hardest Exam",
    description: "CSS in Pakistan has one of the lowest pass rates of any civil service exam. Here is what actually works.",
    publishedAt: today, readTime: "7 min",
    tags: ["CSS Pakistan", "CSS exam prep", "Pakistan civil services"],
    body: `
The CSS in Pakistan has a pass rate under 3%. Most aspirants fail the written paper. The students who clear share four habits.

## Understanding the format

- Compulsory papers: Essay, English Precis, Pakistan Affairs, Islamiat, GK
- Optional papers: 6 papers from a long list, totaling 600 marks
- Interview at the end for those who clear written

## What separates pass from fail

1. **Essay quality** — many candidates get below the qualifying mark on Essay alone
2. **English precis** — translation and summary skills, often underprepped
3. **Pakistan Affairs depth** — most candidates know facts but can't analyse
4. **Optional subject choice** — pick something you actually understand

## The Essay paper

Worth 100 marks. Many candidates fail this one paper.

- Pick the topic carefully (no scoring breakdown is given for the wrong topic)
- Outline before writing (10 minutes minimum)
- 2500-3000 words is the sweet spot
- Examples and references count
- Practice 30+ essays over the year

Use [Essay Coach](/essay-coach) for outline help and feedback.

## The English Precis paper

- Read the passage three times
- Identify the central thesis
- Write a summary that's one-third the original length
- Maintain the original tone
- Translate the Urdu passage carefully

## Optional subject choice

Top choices for high markers:

- Pakistan Affairs (compulsory anyway)
- Islamic History
- International Relations
- Sociology
- Public Administration

Avoid: Maths, Statistics, Physics — they have lower scoring averages.

## A 12-month plan

- Months 1-3: NCERT and Pakistan studies foundation
- Months 4-6: optional subjects deep dive
- Months 7-9: essay and precis daily practice
- Months 10-11: full-length mock papers
- Month 12: revision only

## Common pitfalls

- Joining coaching academies that promise easy success
- Memorising sample essays (examiners spot them)
- Skipping current affairs
- Not practicing under timed conditions
- Studying alone without any feedback loop

## Mental health note

CSS prep takes a year minimum and is brutally lonely. Build a small group of 2-3 serious peers. Avoid large WhatsApp groups (they're noise).

[Try essay practice →](/essay-coach)
`,
  },
  {
    slug: "nts-test-prep-pakistan",
    title: "NTS Test Prep in Pakistan: A Practical Three-Week Plan",
    description: "NTS tests are used for university admission and government jobs in Pakistan. Here is how to prep efficiently.",
    publishedAt: today, readTime: "5 min",
    tags: ["NTS test prep", "Pakistan", "GAT exam"],
    body: `
The NTS (National Testing Service) runs many of Pakistan's standardised tests, including GAT, NAT, and various job tests. The format and difficulty vary, but the prep approach is similar.

## Test format (most NTS tests)

- Multiple choice questions
- Sections: Quantitative, Verbal, Analytical Reasoning
- Some include subject-specific sections (Engineering, Medical, Computer Science)
- Negative marking on most NTS tests

## Three-week plan

### Week 1: foundation

- Quantitative: arithmetic, basic algebra, geometry. NCERT 6-10 is enough.
- Verbal: vocabulary building. 200 words from common GRE / GAT lists.
- Analytical: logical reasoning puzzles, syllogisms.

### Week 2: practice

- Daily 30-question quizzes
- Time yourself
- Review every wrong answer

### Week 3: mock tests

- Full-length mock tests under timed conditions
- Three mocks minimum
- Drill the topics where you lost the most marks

## Timing strategy

NTS tests are time-pressured. Most candidates run out of time. Practice in this order:

1. Start with the section you're strongest in (confidence boost)
2. Move to the next strongest
3. Save the hardest for last

If a question takes more than 90 seconds, skip and come back.

## Negative marking strategy

Most NTS tests have negative marking. The rule of thumb:

- If you can eliminate 2 of 4 options, guess
- If you can eliminate 1 of 4 options, guess
- If you can eliminate none, skip

## Common pitfalls

- Memorising vocabulary without context (use [Vocabulary Builder](/vocab))
- Skipping practice tests until the last week
- Not reviewing wrong answers
- Cramming in the final week instead of mock testing

## What scores well

- Strong vocabulary (memorise 300 high-frequency words)
- Quick mental math
- Familiarity with logical reasoning patterns

## On exam day

- Sleep 8 hours
- Eat breakfast
- Bring multiple pens, calculator (if allowed), CNIC
- Reach the centre 30 minutes early

[Try NTS-style questions →](/mock-exam)
`,
  },

  // ─── Study tools deep dives ───
  {
    slug: "notion-for-studying-guide",
    title: "Notion for Students: A Setup That Actually Helps",
    description: "Notion is powerful but easy to overcomplicate. Here is a clean setup that takes 30 minutes and lasts a year.",
    publishedAt: today, readTime: "5 min",
    tags: ["notion for studying", "study apps", "productivity"],
    body: `
Notion can be the best study tool you'll use, or the worst. The difference is whether you build a system or fall into the customisation trap.

## The 30-minute setup

1. **Subjects database** — one row per subject. Properties: name, teacher, exam date.
2. **Lectures database** — linked to subjects. One row per lecture with date, summary, notes.
3. **Assignments database** — linked to subjects. Properties: due date, status (not started / in progress / done), priority.
4. **Flashcards database** — one row per card. Front, back, subject, due date.
5. **Daily dashboard** — a single page showing today's tasks, upcoming deadlines, recent lecture notes.

That's it. Five databases. Don't add a sixth in week one.

## What to avoid

- Spending more time customising templates than studying
- Buying premium templates from creators
- Using every feature (formulas, automations, relations) before you've used the basics
- Putting your reading list in Notion and never opening Notion to read

## A working daily routine

- Morning: open the dashboard, look at today's tasks
- After class: 5-minute summary of each lecture into the database
- Evening: review tomorrow's tasks
- Sunday: weekly review, clear out finished items

## When Notion isn't the right tool

- Maths and physics (notebooks beat typing for equations)
- Reading PDFs (use Apple Books or a real PDF reader)
- Long-term spaced repetition (use [Flashcards](/flashcards) or Anki)
- Quick captures while you're moving (use Apple Notes / Google Keep)

## Notion AI

Useful for:

- Summarising your own lecture notes
- Drafting outlines

Not useful for:

- Creating study material from scratch (use [Help in Study](/onboarding) instead)
- Spaced repetition

## The honest catch

If you spend 5 hours a week on Notion and 10 hours studying, your system is too complex. Notion should be invisible. If you notice it daily, simplify.

[Try a structured study plan →](/diagnostic)
`,
  },
  {
    slug: "anki-vs-other-flashcards",
    title: "Anki vs Quizlet vs Help in Study: An Honest Comparison",
    description: "Anki has a steep learning curve but is unbeatable. Quizlet is easy. Here is when to pick which.",
    publishedAt: today, readTime: "5 min",
    tags: ["anki review", "quizlet", "flashcards comparison"],
    body: `
There are three main flashcard tools students use. Each fits a different learner.

## Anki

Free, open source, brutally ugly, brutally effective. Uses the SM-2 algorithm for spaced repetition.

Pros:
- Best spaced repetition implementation
- Free forever
- Works offline
- Massive deck library (medical school, languages)

Cons:
- Steep learning curve
- Phone app costs $25 on iPhone (free on Android)
- Bad UI
- No image generation, AI, or quiz generation

Best for: medical students, language learners, anyone who is willing to invest in setup for years of payoff.

## Quizlet

Pretty UI, easy to use, expensive premium tier.

Pros:
- Easy to start
- Lots of pre-made decks
- Good study modes (matching, learn, test)
- Web + mobile parity

Cons:
- Spaced repetition is locked behind premium ($35/year)
- Free tier shows ads and shuffles cards randomly (not optimal)
- Hard to import bulk content

Best for: high school students, beginners, language learners who don't want to learn Anki.

## Help in Study Flashcards

Free, integrated with the rest of the AI study tools.

Pros:
- Auto-generates flashcards from any material (paste a chapter, get cards)
- Spaced repetition (SM-2) on the free tier
- Integrated with the rest of your study setup
- No app to install (works in any browser)

Cons:
- Cross-device sync requires sign-in
- Smaller community library than Anki

Best for: students who want flashcards without the setup overhead.

## What to use for what

- **Vocabulary in any language**: any of the three works. Quizlet is easiest.
- **Med school**: Anki, full stop. The community decks are too valuable to skip.
- **High school exams**: Help in Study or Quizlet. Anki is overkill.
- **Custom complex cards (cloze deletions, image occlusion)**: Anki only.

## The honest answer

The best flashcard tool is the one you actually use. A perfectly configured Anki deck you check once a month beats no flashcards at all. Whatever tool gets you reviewing daily wins.

[Try AI-generated flashcards →](/flashcards)
`,
  },
  {
    slug: "pomodoro-for-adhd-students",
    title: "Pomodoro for ADHD Students: How to Adapt the Method to Your Brain",
    description: "Standard Pomodoro is 25/5. For ADHD students, that often does not fit. Here is how to adapt it.",
    publishedAt: today, readTime: "5 min",
    tags: ["Pomodoro ADHD", "ADHD study", "productivity ADHD"],
    body: `
Standard Pomodoro is 25 minutes of work, 5 minutes of break. For ADHD brains, those numbers often don't fit. Here's how to adapt the method.

## Why standard Pomodoro fails for ADHD

- 25 minutes is too long when meds are wearing off, too short when you're in hyperfocus
- The 5-minute break gets eaten by the phone
- The fixed timing fights against ADHD attention, which is highly variable

## ADHD-friendly variations

### 10/2 mini-pomodoros

Set a 10-minute timer. Work. 2-minute break. Repeat. Build up to 15/3, then 25/5 if that ever feels right.

### 50/10 long stretches

When you're in hyperfocus mode, don't break it. Set a 50-minute timer. Take a 10-minute break (forced — set an alarm).

### The "two-minute start"

The hardest part for ADHD is starting. Set a 2-minute timer. Do anything study-related for 2 minutes. After 2 minutes, decide to keep going or stop. Most days you'll keep going. Some days you won't. Both are fine.

## What to do during breaks

NOT the phone. Twitter or Instagram restart the dopamine cycle and make returning to work harder.

Better breaks:

- Walk to the kitchen and back
- Stretch
- Drink water
- Look out the window
- Do 10 push-ups

## What to avoid

- Apps with strict gamification (one missed pomo and the streak resets — this is psychologically expensive for ADHD)
- Body doubling apps that monitor you (too much surveillance can backfire)
- Pomodoro music with weird beats

## What works

- Forest app (gentle, plants a tree, hard to argue with)
- A physical timer on the desk (not the phone)
- Body doubling with one quiet friend
- Meds at the start of the session (if prescribed)

## The honest truth

Some days ADHD wins. You'll set the timer, work for 3 minutes, and crash. That's not failure. That's the disorder.

The metric that matters is the week, not the day. If you study 4 of 7 days, you're winning.

[Get an ADHD-friendly study plan →](/diagnostic)
`,
  },
  {
    slug: "cornell-notes-step-by-step",
    title: "Cornell Notes Done Right (Most Students Skip the Important Part)",
    description: "Cornell is the most-recommended note system and the most-misused. Here is how to do it properly.",
    publishedAt: today, readTime: "4 min",
    tags: ["Cornell notes", "note taking", "study method"],
    body: `
The Cornell Method is the most-recommended note-taking system. It's also the most-misused. Most students take notes in the right column and never use the left column or the summary box. They lose 70% of the value.

## The Cornell layout

Divide your page into three sections:

- **Right column (60% of width)** — main notes during class
- **Left column (30% of width)** — cue questions, written AFTER class
- **Bottom (one quarter of height)** — summary of the page in your own words

## How to actually use it

### During class

Take notes in the right column only. Don't worry about being neat. Capture key ideas, examples, dates.

### Within 24 hours of class

This is the part most students skip. Do these two things:

1. **Cue questions in the left column.** For every important note, write a question whose answer is that note. "What are the four DNA bases?" — answer in the right column.

2. **Summary at the bottom.** One paragraph in your own words. What did this page actually teach me?

### When studying for the exam

Cover the right column with your hand. Read the left column. Answer each question from memory. Check.

This is active recall built into the note system. It works, but only if you do the cue questions and summary.

## Why it works

The right column captures information. The left column tests it. The summary forces synthesis. Together they hit three modes of learning in one document.

## When Cornell is not the right tool

- Math and physics (the layout doesn't suit equations)
- Languages (use a vocabulary log)
- Lab classes (use a lab notebook)

## Common pitfalls

- Pretty Cornell pages with no cue questions
- Doing the cue questions but not reviewing them
- Summary that just lists topics rather than synthesising
- Different colour pens that you spend more time selecting than writing

## On paper or digital?

For first-time exposure, paper. Handwriting forces you to summarise. For revision, digital is fine — search makes finding old material easier.

[Get help with study notes →](/whiteboard)
`,
  },
  {
    slug: "mind-maps-for-revision",
    title: "Mind Maps for Revision: The Visual Tool That Actually Helps Memory",
    description: "Mind maps work because the brain stores information in a graph, not a list. Here is how to draw them properly.",
    publishedAt: today, readTime: "4 min",
    tags: ["mind maps", "study method", "revision"],
    body: `
Mind maps work because your brain doesn't store information as a list. It stores it as a graph, with connections between related ideas. A mind map externalises that graph, which is exactly what your brain wants when it's trying to recall.

## How to draw a good mind map

1. Start with the topic in the centre, in a circle
2. Major branches are key sub-topics, written on lines radiating out
3. Sub-branches are details, hanging off the major branches
4. Use single words or very short phrases (not sentences)
5. Use colour to group related ideas
6. Use small drawings or icons where they help

## What makes a mind map work

- Hand-drawn beats digital (the act of drawing is part of the learning)
- Single words trigger memory better than sentences
- Visual hierarchy (major branches thicker, minor branches thinner)
- Limited size (one A4 page per topic max)

## When mind maps shine

- Revising for an exam, after you've done the initial reading
- Connecting topics across chapters
- Subjects with many relationships (biology, history, economics)
- The night before an exam, to compress everything onto one page

## When they don't help

- First-time learning (you need the linear text first)
- Procedural subjects (maths, programming)
- Vocabulary (use flashcards)

## The 30-minute mind map ritual

For each topic, schedule 30 minutes the week before the exam. Draw the mind map from memory first. Then check your notes for what you missed. Add the missing pieces in a different colour.

That single ritual exposes every gap in your understanding.

## Software vs paper

For revision: paper.
For collaborative brainstorming: software (FigJam, Miro).
For storing your final mind maps long-term: photograph the paper one and save it.

## Try the AI version

[Concept Map](/concept-map) generates a topic graph from any chapter. It's a useful starting point, but draw your own from memory after. The drawing is what locks the topic in.

[Try concept map →](/concept-map)
`,
  },

  // ─── Wellbeing / Mindset ───
  {
    slug: "stress-management-students",
    title: "Stress Management for Students: What Actually Works",
    description: "Most stress advice is generic. Here are the five tactics that work specifically for students under exam stress.",
    publishedAt: today, readTime: "5 min",
    tags: ["student stress", "exam stress", "mental health"],
    body: `
Stress is not the enemy. Some stress sharpens focus. Too much stress destroys it. The job is to manage the level, not eliminate it.

## The five things that actually work

### 1. Sleep

Eight hours, ideally nine. Most stress problems in students are sleep problems wearing a different hat. Cut the all-nighters. Sleep is when memory consolidates.

### 2. Movement

Twenty minutes of exercise three times a week reliably lowers cortisol. Doesn't have to be the gym. Walking counts. Dancing in your room counts.

### 3. Sunlight

Twenty minutes of outdoor light in the morning sets your circadian rhythm and improves sleep that night. Yes, even on overcast days.

### 4. Talking to one trusted person

Stress shrinks when shared. Doesn't have to be a therapist. A parent, a sibling, a friend, a teacher. One person you can be honest with.

### 5. The 4-7-8 breath

Four seconds in, hold for seven, out for eight. Two cycles drops your heart rate noticeably. Use before exams, before presentations, before sleep.

## What doesn't work

- Caffeine alone (without protein it spikes cortisol)
- Long study sessions to "get on top of things" (often increases stress)
- Doomscrolling
- Comparing your prep to your classmates'
- Skipping meals

## When stress becomes anxiety

If you're losing sleep for more than two weeks, having panic attacks, or finding it hard to enjoy anything, that's not just stress — that's anxiety. Talk to a school counsellor or your GP. There's no shame in it. Anxiety is treatable.

## A weekly checklist

- Slept 7+ hours each night?
- Moved my body 3 times?
- Talked to someone I trust?
- Spent time outside?
- Eaten three meals on most days?

If three of five are no, your stress is going to spike. Fix the basics first, then worry about study.

[Build a study plan that includes breaks →](/diagnostic)
`,
  },
  {
    slug: "how-to-motivate-yourself-study",
    title: "How to Motivate Yourself to Study (When You Really Don't Want To)",
    description: "Motivation is overrated. Habit beats motivation every time. Here is how to build the habit even when you do not feel like it.",
    publishedAt: today, readTime: "5 min",
    tags: ["study motivation", "study habits", "procrastination"],
    body: `
"I just need motivation" is a trap. Motivation is unreliable — it shows up randomly and disappears when you need it most. Habit beats motivation every time.

## The two-minute rule

You're not committing to study for an hour. You're committing for two minutes. Open the book. Read one paragraph. After two minutes, decide whether to keep going.

Most days, you keep going. Some days you don't. Both are fine. The point is the start, not the duration.

## Make it boring to start

Reduce the friction.

- Have your books on the desk the night before
- Have a pen and notebook ready
- Have a glass of water on the desk
- Have your phone in another room

Removing five steps before "open book" makes the start happen.

## Lower your standards

Studying for 20 perfect minutes beats studying for 0 minutes because you couldn't face an hour. Most days, do less than you think you should. You'll do it more often.

## The "study, even if I'm in pyjamas" rule

If your study sessions require ideal conditions — perfect chair, perfect playlist, perfect mood — they'll happen rarely. Practice studying in less-than-perfect conditions so the bar is low when life gets bumpy.

## Track the streak, not the score

Don't measure how well you studied. Measure whether you studied at all. A wall calendar with a tick for every day you studied is more powerful than any productivity app.

## What to do when the motivation completely vanishes

Two-week rule: if you've struggled to start for two weeks straight, something else is going on. Possible causes:

- Sleep debt
- Poor diet
- Untreated anxiety or depression
- The wrong subject mix
- Burnout from over-studying earlier

Don't try to motivate yourself out of these. Address the cause.

## What you cannot fake

If you genuinely don't care about the subject and the exam, no motivation tactic will sustain you. In that case, ask honest questions about your goals. Sometimes the right answer is a different course, not more motivation.

## A starter routine

- Phone in the kitchen
- Same desk, same time, every day
- Two-minute timer to start
- 25-minute Pomodoro after that
- One day off per week

That routine has compounded into top exam results for thousands of students. It's not glamorous. It works.

[Start with a 7-day plan →](/diagnostic)
`,
  },
  {
    slug: "dealing-with-exam-failure",
    title: "Dealing With Exam Failure: Your Grade Is Not Your Worth",
    description: "Failing an exam feels devastating. It is also recoverable. Here is how to bounce back without spiraling.",
    publishedAt: today, readTime: "5 min",
    tags: ["exam failure", "mental health", "academic recovery"],
    body: `
Failing an exam doesn't make you a failure. It makes you a person with information about what to do differently. The students who eventually do well are not the ones who never fail. They're the ones who fail and respond.

## Day 1: feel it

Don't pretend you're fine. Cry, vent to a friend, take a walk, eat ice cream. Push the feelings down and they come back later as anxiety about the next exam. Process them now.

## Day 2: read the paper

Look at exactly what you got wrong. Sort the mistakes:

1. **I didn't know the content** — fill the gap
2. **I knew the content but ran out of time** — fix exam strategy
3. **I knew the content but misread the question** — slow down on reading
4. **Silly arithmetic / spelling errors** — proofread the last 5 minutes
5. **I panicked and forgot** — exam anxiety, address separately

This sorting tells you exactly what to fix. Most students treat all errors the same. Don't.

## Day 3: make a plan

Address the categories above one at a time. Not all at once. Pick the biggest category first.

## Talk to your teacher

Most teachers respect students who come back asking how to improve, more than they respect students who quietly score A every time. A 10-minute conversation can map your route forward.

## Don't compare to friends

Their grade has nothing to do with yours. Comparison is the thief of joy and the destroyer of recovery.

## What recovery actually looks like

- Two weeks of consistent practice on the weakest topic
- One mock exam under timed conditions
- A check-in with a teacher or tutor
- Sleeping enough

That sequence beats any 10-hour study weekend.

## The honest truth

Sometimes the failure is a sign that the course was wrong for you, not that you were wrong for the course. If you've failed the same subject three times despite genuine effort, that's worth talking through with a parent or counsellor. There's no shame in changing direction.

## A useful reframe

"I failed this exam" is true. "I am a failure" is not. The first sentence is information. The second sentence is a story you're telling yourself.

The people who eventually succeed have just as many failures as everyone else. They tell themselves better stories about what those failures mean.

## What to do tomorrow

One thing. The smallest possible thing that moves you forward. Not a five-hour study session. One worked example. One flashcard. One deep breath. Tomorrow, another small thing.

That's how recovery happens.

[Try a fresh diagnostic →](/diagnostic)
`,
  },
  {
    slug: "imposter-syndrome-students",
    title: "Imposter Syndrome in Students: Why You Feel Like a Fraud (and Why You're Not)",
    description: "Most high-achieving students secretly feel like frauds. Here is what imposter syndrome is and how to deal with it.",
    publishedAt: today, readTime: "5 min",
    tags: ["imposter syndrome", "student mental health", "high achievers"],
    body: `
You got into a top school, top class, or top ranking. Now you walk into the room and everyone seems smarter, more confident, and more "supposed to be there" than you. That feeling has a name: imposter syndrome.

## The pattern

Imposter syndrome usually has four features:

1. You attribute your success to luck, not skill
2. You attribute others' success to skill, not luck
3. You're afraid of being "found out"
4. You overprepare to compensate

Sound familiar?

## Why it happens to high achievers

The exact people most likely to feel imposter syndrome are the ones who actually deserve to be there. People with low skill tend to overestimate themselves (Dunning-Kruger). People with real skill tend to underestimate themselves.

## What works

### Talk about it

Find one person you can be honest with. Discover that they feel the same way. The realisation that everyone is faking it cracks the spell.

### Keep an evidence journal

Every time something goes well — an A on a test, a teacher's compliment, a successful presentation — write it down. When the imposter feeling comes back, read the journal. Your brain wants to dismiss past wins as luck. The journal forces you to confront them.

### Reframe

"I have a lot to learn" is more useful than "I don't deserve to be here". Both might feel true. The first is actionable.

### Accept that everyone feels it

Nobel laureates, CEOs, top doctors, top professors all describe imposter syndrome. The most common reason students feel like a fraud is that they're listening to the same voice everyone successful has heard.

## What doesn't work

- Trying to "earn" your way out by overworking
- Comparing your insides to other people's outsides
- Waiting until you feel confident to act
- Hiding the feeling from everyone

## The honest truth

Imposter syndrome rarely fully goes away. It reduces. The strategy is not to wait for it to leave before doing the thing — it's to do the thing despite it.

## A practical small step

Pick one person at school you assume is "naturally smart". Have one conversation with them about a topic you're both learning. You will discover, almost without exception, that they're as confused as you are. They've just made peace with it earlier.

That single conversation can shift your relationship with the feeling for good.

[Get an honest assessment of your weak areas →](/diagnostic)
`,
  },
  {
    slug: "senior-year-burnout",
    title: "Senior Year Burnout: How to Make It Across the Finish Line",
    description: "Senior year burnout is real. Here is how to push through the last term without your grades, sleep, or sanity collapsing.",
    publishedAt: today, readTime: "5 min",
    tags: ["senior year", "burnout", "final year"],
    body: `
By the spring of senior year, most students are running on fumes. University applications are submitted. Grades feel less urgent. Spring fever is real. But your final exams still happen, and they still matter.

## What burnout actually feels like

- You can't enjoy things you used to enjoy
- Small tasks feel impossibly hard
- Sleep doesn't refresh you
- You're irritable
- You forget things you knew last week
- You start avoiding school

If you tick four of those six, you're burning out. The next steps aren't "study harder."

## What to actually do

### Cut your workload by 30%

Yes, even now. Your top priority is to get through the next three months without breaking. Not to over-deliver on every assignment.

### Sleep nine hours

For at least one week. Watch what happens.

### Move daily

Twenty minutes. Walking, dancing, yoga, anything. Movement is the fastest depression-protective behaviour we have evidence for.

### Talk to someone

Doesn't have to be a therapist. A friend, a parent, a coach. Saying "I'm tired" out loud reduces the load.

### Schedule one fun thing per week

Without studying. Without screens. With another human.

## What about the exams

You don't need to peak in February. You need to peak in May or June. Many students burn out in February precisely because they tried to peak too early.

A senior in May who slept and rested through February will outperform the senior who studied flat out from January.

## The grades you've already got mostly determine your university

If you're applying to UK universities, your predicted grades are mostly set. Your final grades need to meet your offer, but rarely need to exceed it.

If you're applying to US universities, the bulk of your application is already submitted. Your senior year grades matter for not falling off, but rarely for getting in.

This doesn't mean you can stop. It means the marginal return on extra study in your senior year is lower than you think. Rest is more important than usual.

## When burnout becomes depression

If the burnout symptoms last more than four weeks, especially with hopelessness or thoughts of self-harm, it's not just burnout. Talk to a doctor. Depression is treatable.

## A working week for senior spring

- Mon-Fri: 4 hours of focused study, evenings free
- Saturday: half day study, half day off
- Sunday: full day off
- Sleep 9 hours
- One social event per week minimum

That schedule gets you through. The "study 12 hours daily until exams" schedule gets you to the doctor.

[Build a sane study plan →](/diagnostic)
`,
  },

  // ─── Misc ───
  {
    slug: "how-to-read-faster-students",
    title: "How to Read Faster Without Losing Comprehension",
    description: "Speed reading techniques are mostly fake. Here are four methods that actually let you read more in less time.",
    publishedAt: today, readTime: "5 min",
    tags: ["how to read faster", "speed reading", "study skills"],
    body: `
Speed reading courses promise 1000 words per minute. The research is unambiguous — at speeds above 600 wpm, comprehension collapses. So forget the courses. The four techniques below actually work.

## 1. Stop subvocalising

Most readers say each word in their head as they read. That caps you at speaking speed (about 200 wpm). With practice you can reduce subvocalisation to key phrases only, lifting your reading speed to 400-500 wpm without losing comprehension.

To practice: try humming or counting silently while you read. After a few sessions you can read without humming and you'll notice the inner voice has quieted.

## 2. Read in chunks, not words

Your eyes can fixate on 3-4 words at once. Most slow readers fixate on every single word. Practice by intentionally widening your gaze to take in 3-4 words per fixation.

This sounds awkward at first. After a week of practice, it becomes the new default.

## 3. Preview before reading

Before you read a chapter, scan the headings, sub-headings, first sentence of each paragraph, and the conclusion. This 60-second preview tells your brain the structure of what's coming. The actual reading is then 30% faster because nothing is a surprise.

## 4. Skip what you already know

Most textbooks pad heavily. If a paragraph is reviewing material you already know, scan it. If you understand the topic, move on. If you hit something new, slow back down.

This is called "variable speed reading" and it's how skilled readers tackle dense material.

## What doesn't work

- Apps that flash words at you (Spritz, Spreeder). They prevent regression, which is part of how the brain understands.
- Following a finger across the page (might help slow readers, doesn't speed up advanced readers)
- Speed reading "schools" promising 1000+ wpm

## Comprehension test

After every chapter, summarise it in three sentences. Without notes. If you can't, slow down. If you can, your speed is fine.

## A working pace for studying

- Textbook in your subject: 250-350 wpm with full comprehension
- News article: 400-500 wpm
- Light fiction: 500+ wpm
- Speed-skim mode (looking for one fact): 800+ wpm

Don't try to read everything at the same speed. The skill is matching speed to purpose.

## What to read this year

Most students read 2-3 books a year outside school. If you read 12 books outside school, your vocabulary and writing improve dramatically. That single habit shifts grades over time.

[Get vocabulary help →](/vocab)
`,
  },
];
