import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BlogFAQSection = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  // Generate FAQPage Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="my-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200">
            <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:text-blue-600 hover:no-underline py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default BlogFAQSection;