"use client";

import { useState } from "react";
import JsonLd from "./JsonLd";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      <JsonLd data={faqSchema} />
      <div className="divide-y divide-[var(--brand-tan)]" role="list">
        {items.map((item, index) => (
          <div key={index} className="py-5" role="listitem">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between text-left group"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="font-sans text-base font-medium text-[var(--brand-text)] group-hover:text-[var(--brand-teal)] transition-colors pr-4">
                {item.question}
              </span>
              <span
                className={`text-[var(--brand-gold)] text-xl transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[var(--brand-text-secondary)] text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
