import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CitationFAQ = ({ faqs }) => {
  // Schema markup automatically generated
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="my-12">
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <HelpCircle className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Expert Q&A</h3>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-white px-6 border border-slate-200 rounded-xl shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-lg text-slate-900 py-4 hover:text-indigo-600">
                    {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                    {faq.answer}
                </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default CitationFAQ;