'use client';

import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  toggleExpand: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div className="bg-[#FFF0F1] rounded-lg overflow-hidden">
      <button
        onClick={toggleExpand}
        className="w-full p-6 flex gap-x-4 items-center text-left focus:outline-none"
      >
        <span className="ml-4 flex-shrink-0">
          {isExpanded ? (
            <Minus className="h-5 w-5 text-[#da0d21]" />
          ) : (
            <Plus className="h-5 w-5 text-[#da0d21]" />
          )}
        </span>
        <h3 className="text-xl font-bold">{question}</h3>
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6">
          <p className="text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};