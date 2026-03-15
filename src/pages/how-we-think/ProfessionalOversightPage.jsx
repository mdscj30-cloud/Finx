import React from 'react';
import HowWeThinkLayout from '@/components/HowWeThinkLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const ProfessionalOversightPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Professional Oversight at FinxisAI",
    "description": "Meet the human experts behind the AI. How our US-based CPAs and accountants collaborate with technology to deliver superior results.",
    "author": { "@type": "Organization", "name": "FinxisAI" },
    "publisher": { "@type": "Organization", "name": "FinxisAI" }
  };

  const toc = [
    { id: "philosophy", label: "Oversight Philosophy" },
    { id: "roles", label: "Who Reviews Work" },
    { id: "process", label: "Review Process" },
    { id: "accountability", label: "Accountability" },
    { id: "faq", label: "FAQs" }
  ];

  const relatedLinks = [
    { title: "Quality Control", desc: "Our 5-layer QC system.", path: "/how-we-think/quality-control-framework" },
    { title: "Our Team", desc: "Meet our leadership.", path: "/about/team" },
    { title: "AI Responsibility", desc: "How we use tools ethically.", path: "/how-we-think/ai-responsibility" }
  ];

  return (
    <HowWeThinkLayout 
      title="Our Professional Oversight Model"
      description="Technology accelerates accounting; professionals validate it. Discover the human expertise that powers our AI-enabled service."
      toc={toc}
      relatedLinks={relatedLinks}
      schemaData={schemaData}
    >
      <section id="philosophy">
        <p className="lead text-xl text-slate-600 mb-8">
          The fear of "robo-accounting" is that a machine will make a critical mistake and no one will notice. At FinxisAI, that is impossible. Our entire operational model is built on the concept of <strong>AI-Augmented Professionalism</strong>. The AI does the heavy lifting, but the Professional is the pilot.
        </p>
      </section>

      <section id="roles">
        <h2>Who Reviews Our Work?</h2>
        <p>We do not outsource final review to unqualified staff. Our oversight team consists of:</p>
        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2">1. Senior Accountants</h3>
            <p className="text-sm text-slate-600 mb-2"><strong>Role:</strong> Month-end close, variance analysis, GL hygiene.</p>
            <p className="text-sm text-slate-600"><strong>Requirement:</strong> Min. 5 years experience, Accounting degree.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2">2. Tax Managers (CPAs/EAs)</h3>
            <p className="text-sm text-slate-600 mb-2"><strong>Role:</strong> Tax planning, compliance review, filing sign-off.</p>
            <p className="text-sm text-slate-600"><strong>Requirement:</strong> Active CPA or Enrolled Agent license.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2">3. Virtual CFOs</h3>
            <p className="text-sm text-slate-600 mb-2"><strong>Role:</strong> Strategic advisory, forecasting, board reporting.</p>
            <p className="text-sm text-slate-600"><strong>Requirement:</strong> Former Controller/CFO experience.</p>
          </div>
        </div>
      </section>

      <section id="process">
        <h2>How the Review Process Works</h2>
        <p>The "Human-in-the-Loop" isn't just a buzzword; it's a workflow step.</p>
        <ol className="list-decimal pl-6 space-y-4">
            <li><strong>The Exception Queue:</strong> Every morning, our professionals log into a dashboard showing "Exceptions"—items the AI flagged as low confidence or high risk. They clear these first.</li>
            <li><strong>The Analytical Review:</strong> At month-end, the professional doesn't re-check every $5 receipt (the AI did that). Instead, they look at trends. "Why is Travel expense up 40% vs last month?" They investigate the *reasonability* of the numbers.</li>
            <li><strong>The Client Sync:</strong> Finally, the professional communicates with you. They don't just send a report; they add context notes. "Note: Travel is up because of the Vegas conference." This proves a human understood the context.</li>
        </ol>
      </section>

      <section id="accountability">
        <h2>Accountability & Responsibility</h2>
        <p>
          Ultimately, FinxisAI accepts liability for the accuracy of our work. If an algorithm makes a mistake, we own it. We carry professional liability insurance commensurate with a top-tier CPA firm, providing you with a financial backstop that pure software solutions do not offer.
        </p>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full not-prose">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I talk to my accountant?</AccordionTrigger>
            <AccordionContent>Yes. You have a dedicated account manager and can schedule calls with them. We are not a faceless app.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are your accountants in the US?</AccordionTrigger>
            <AccordionContent>Yes, our client-facing and final review teams are US-based to ensure timezone alignment and cultural context.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How many clients does each accountant manage?</AccordionTrigger>
            <AccordionContent>Because AI handles the data entry, our accountants manage a portfolio of 20-30 clients, allowing them to spend meaningful time on advisory rather than data entry.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="bg-blue-50 p-8 rounded-2xl mt-12 text-center not-prose border border-blue-100">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Expertise You Can Trust</h2>
        <p className="mb-6 text-blue-700 max-w-2xl mx-auto">Don't settle for software support. Get professional accounting partners.</p>
        <Link to="/about/team" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors">Meet Our Team</Link>
      </div>
    </HowWeThinkLayout>
  );
};

export default ProfessionalOversightPage;