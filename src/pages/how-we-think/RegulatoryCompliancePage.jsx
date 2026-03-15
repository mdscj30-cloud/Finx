import React from 'react';
import HowWeThinkLayout from '@/components/HowWeThinkLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const RegulatoryCompliancePage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How FinxisAI Stays Current with Regulations",
    "description": "Our proactive approach to monitoring and implementing changes in federal, state, and international tax law and accounting standards.",
    "author": { "@type": "Organization", "name": "FinxisAI" },
    "publisher": { "@type": "Organization", "name": "FinxisAI" }
  };

  const toc = [
    { id: "approach", label: "Proactive Approach" },
    { id: "monitoring", label: "Monitoring Process" },
    { id: "domains", label: "Compliance Domains" },
    { id: "faq", label: "FAQs" }
  ];

  const relatedLinks = [
    { title: "Tax Preparation", desc: "Our compliant tax services.", path: "/services/tax-preparation" },
    { title: "Professional Oversight", desc: "Experts who manage compliance.", path: "/how-we-think/professional-oversight" },
    { title: "Compliance Deadlines", desc: "See upcoming dates.", path: "/resources/compliance-deadlines" }
  ];

  return (
    <HowWeThinkLayout 
      title="How We Stay Current with Regulations"
      description="Tax codes change daily. Our compliance engine—powered by AI and verified by experts—ensures you never miss a beat (or a deduction)."
      toc={toc}
      relatedLinks={relatedLinks}
      schemaData={schemaData}
    >
      <section id="approach">
        <p className="lead text-xl text-slate-600 mb-8">
          Compliance is a moving target. The IRS releases thousands of pages of guidance annually. States change nexus thresholds constantly. At FinxisAI, we don't just react to these changes; we anticipate them.
        </p>
      </section>

      <section id="monitoring">
        <h2>Regulatory Monitoring Process</h2>
        <p>We use a dual-track system to monitor regulatory changes:</p>
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>AI Regulatory Scanning:</strong> Our NLP (Natural Language Processing) bots scan the Federal Register, state revenue department feeds, and accounting standard boards daily. They flag relevant keywords (e.g., "R&D Credit," "Bonus Depreciation") for our research team.</li>
          <li><strong>Professional Research Team:</strong> Our internal tax policy committee reviews these flags weekly. They determine the impact on our client base and update our system rules accordingly.</li>
        </ol>
      </section>

      <section id="domains">
        <h2>Compliance Domains We Cover</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-blue-900">Federal Tax (IRS)</h3>
            <p className="text-sm text-slate-600">Monitoring changes to the Tax Cuts and Jobs Act (TCJA), R&D amortization rules, and 1099 reporting thresholds.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-blue-900">State & Local (SALT)</h3>
            <p className="text-sm text-slate-600">Tracking economic nexus thresholds (Wayfair) for sales tax, and state-specific income tax apportionment rules.</p>
          </div>
           <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-blue-900">Payroll & Labor</h3>
            <p className="text-sm text-slate-600">Updates to minimum wage, overtime rules (FLSA), and state-mandated retirement programs (e.g., CalSavers).</p>
          </div>
           <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-blue-900">GAAP & Reporting</h3>
            <p className="text-sm text-slate-600">Adhering to FASB updates, such as the new lease accounting standards (ASC 842) and revenue recognition (ASC 606).</p>
          </div>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full not-prose">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do you handle multi-state sales tax?</AccordionTrigger>
            <AccordionContent>Yes. Our system monitors your sales volume by state and alerts you when you cross economic nexus thresholds requiring registration.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How fast do you update for new laws?</AccordionTrigger>
            <AccordionContent>For major changes, our systems are typically updated within 72 hours of final legislation passage.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What about international compliance?</AccordionTrigger>
            <AccordionContent>We handle compliance for US entities. For international subsidiaries, we partner with local experts but consolidate reporting in our dashboard.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="bg-slate-900 text-white p-8 rounded-2xl mt-12 text-center not-prose">
        <h2 className="text-2xl font-bold mb-4 text-white">Stay Compliant Automatically</h2>
        <p className="mb-6 text-slate-300 max-w-2xl mx-auto">Stop worrying about the IRS. Let our engine handle the details.</p>
        <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors">Get Compliant</Link>
      </div>
    </HowWeThinkLayout>
  );
};

export default RegulatoryCompliancePage;