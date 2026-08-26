// Education Q&A structured data (schema.org Quiz). Unlike FAQPage (rich results
// deprecated May 2026) and Practice Problems (deprecated Jan 2026), the Quiz
// flashcard format still powers Google's education Q&A surfaces and Lens —
// which matters here because students photograph textbook questions.
export function quizJsonLd(topic: string, items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    about: { "@type": "Thing", name: topic },
    educationalAlignment: [{
      "@type": "AlignmentObject",
      alignmentType: "educationalSubject",
      targetName: topic,
    }],
    hasPart: items.map((it) => ({
      "@type": "Question",
      eduQuestionType: "Flashcard",
      text: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
