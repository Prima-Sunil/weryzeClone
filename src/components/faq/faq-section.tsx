'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQItem } from './faq-item';

export interface FAQData {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQData[];
  showAllLink?: boolean;
  maxItems?: number;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  faqs,
  showAllLink = false,
  maxItems = faqs.length,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const displayedFaqs = faqs.slice(0, maxItems);

  return (
    <div className="mt-16 mb-16">
      {title && <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>}
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isExpanded={expandedIndex === index}
              toggleExpand={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {showAllLink && (
          <div className="mt-8 text-center">
            <Link href="/pages/faqs" className="inline-block px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition">
              View All FAQs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};