import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServiceIndustryFAQ = ({ faqs }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-max max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-slate-900">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm">
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
    </section>
  );
};

export default ServiceIndustryFAQ;