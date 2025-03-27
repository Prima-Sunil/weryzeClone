'use client';

import React from 'react';
import { FAQSection } from '@/components/faq/faq-section';
import { faqData } from '@/lib/faq-data';

export default function FAQsPage() {
  return (
    <div className="bg-white">
      <h1 className="text-4xl font-bold text-center mb-8 pt-8">Frequently Asked Questions</h1>
      
      
      <div className="container mx-auto px-4 py-8">
        <FAQSection
          faqs={faqData}
          title=""
        />

        {/* <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#FFF0F1] rounded-lg">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-lg">
            If you have any other questions or need further assistance, please don't hesitate to contact us. Our customer service team is available Monday to Friday, 10:00 AM - 6:00 PM at 01141169451 or via email at hello@weryze.com.
          </p>
        </div> */}
      </div>
      <div className="h-20"></div>
    </div>
  );
}