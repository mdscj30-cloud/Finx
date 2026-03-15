import React from 'react';
import HowWeThinkLayout from '@/components/HowWeThinkLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const QualityControlFrameworkPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "FinxisAI 5-Layer Quality Control Framework",
    "description": "Our rigorous multi-layered system for ensuring financial accuracy, combining automated checks with expert professional review.",
    "author": { "@type": "Organization", "name": "FinxisAI" },
    "publisher": { "@type": "Organization", "name": "FinxisAI" }
  };

  const toc = [
    { id: "intro", label: "Introduction" },
    { id: "five-layers", label: "The 5 Layers" },
    { id: "metrics", label: "Metrics & Standards" },
    { id: "correction", label: "Error Correction" },
    { id: "faq", label: "FAQs" }
  ];

  const relatedLinks = [
    { title: "AI Responsibility", desc: "Our ethical AI principles.", path: "/how-we-think/ai-responsibility" },
    { title: "Professional Oversight", desc: "The humans performing the reviews.", path: "/how-we-think/professional-oversight" },
    { title: "Data Security", desc: "How we secure the QC process.", path: "/how-we-think/data-security-privacy" }
  ];

  return (
    <HowWeThinkLayout 
      title="Our Quality Control Framework"
      description="Accuracy isn't an accident. It's the result of a rigorous, 5-layer system designed to catch errors before they ever reach your financial statements."
      toc={toc}
      relatedLinks={relatedLinks}
      schemaData={schemaData}
    >
      <section id="intro">
        <p className="lead text-xl text-slate-600 mb-8">
          In accounting, "mostly right" is wrong. A single misplaced decimal or misclassified expense can trigger tax audits or skew investor decisions. At FinxisAI, we do not rely on hope; we rely on a <strong>5-Layer Quality Control Framework</strong>. This system combines the tireless vigilance of software with the nuanced judgment of CPAs.
        </p>
      </section>

      <section id="five-layers">
        <h2>The 5-Layer Defense System</h2>
        <div className="space-y-8 not-prose my-10">
          {[
            {
              layer: "Layer 1",
              title: "Input Validation & Sanity Checks",
              desc: "Before data even enters the ledger, automated scripts check for formatting errors, duplicate transactions, and date anomalies. If a receipt says 2025 but the current year is 2024, it is blocked immediately.",
              tech: "Regex scripts, Duplicate detection algorithms"
            },
            {
              layer: "Layer 2",
              title: "AI Confidence Scoring",
              desc: "Our AI models assign a confidence score (0-100%) to every categorization decision. Any transaction scoring below 95% is automatically routed to a human work queue for manual verification.",
              tech: "Machine Learning Probability Models"
            },
            {
              layer: "Layer 3",
              title: "Automated Reconciliation",
              desc: "Every night, our system compares the General Ledger balance against the bank feed balance. If there is a variance of even $0.01, an alert is triggered for the morning account team.",
              tech: "API Bank Integrations"
            },
            {
              layer: "Layer 4",
              title: "Professional Month-End Review",
              desc: "A dedicated Accountant reviews the preliminary P&L and Balance Sheet. They look for 'analytical variances'—e.g., why did Marketing expense double this month? This catches errors that are mathematically correct but contextually wrong.",
              tech: "Human CPA / Senior Accountant"
            },
            {
              layer: "Layer 5",
              title: "Senior Partner Sign-Off",
              desc: "For tax filings and final year-end reports, a Senior Partner or Tax Manager performs a final 'cold review' to ensure compliance with GAAP/tax law before release.",
              tech: "Senior Tax Professional"
            }
          ].map((item, i) => (
            <div key={i} className="relative pl-8 border-l-4 border-blue-200">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 mb-2">{item.desc}</p>
              <p className="text-sm font-semibold text-blue-600">Powered by: {item.tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="metrics">
        <h2>Quality Metrics & Standards</h2>
        <p>We measure quality obsessively. Our internal dashboard tracks:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>First-Pass Yield:</strong> Percentage of transactions correctly coded without human intervention (Target: &gt;95%).</li>
          <li><strong>Reconciliation Variance:</strong> Unexplained difference between bank and book balance (Target: $0.00).</li>
          <li><strong>Review Catch Rate:</strong> Number of errors caught in Layer 4 vs. Layer 5 (Target: Layer 4 should catch 99% of remaining issues).</li>
          <li><strong>Client Reported Errors:</strong> Errors found by the client after release (Target: 0).</li>
        </ul>
      </section>

      <section id="correction">
        <h2>Error Detection & Correction Protocol</h2>
        <p>
          If an error is detected post-release, we trigger a <strong>Root Cause Analysis (RCA)</strong>. We do not just fix the error; we fix the system.
        </p>
        <p>
          <em>Example:</em> If a human reviewer misses a misclassified software expense, we update the AI training set with that specific vendor to ensure the model catches it next time. We also update our month-end checklist to explicitly check that vendor category. This creates a "virtuous cycle" where the system gets smarter with every anomaly.
        </p>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full not-prose">
          <AccordionItem value="item-1">
            <AccordionTrigger>How often are books reviewed?</AccordionTrigger>
            <AccordionContent>Automated checks (Layers 1-3) happen daily. Professional review (Layer 4) happens monthly during the close process.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Who performs the reviews?</AccordionTrigger>
            <AccordionContent>Layer 4 reviews are done by US-based Staff or Senior Accountants. Layer 5 is done by CPAs or Tax Managers.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you use offshore teams for QC?</AccordionTrigger>
            <AccordionContent>No. Our final quality control layers are strictly US-based to ensure context and compliance alignment.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="bg-slate-100 p-8 rounded-2xl mt-12 text-center not-prose border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Sleep Soundly with FinxisAI</h2>
        <p className="mb-6 text-slate-600 max-w-2xl mx-auto">Our 5-layer safety net ensures your numbers are right, every time.</p>
        <Link to="/contact" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors">Schedule a Consultation</Link>
      </div>
    </HowWeThinkLayout>
  );
};

export default QualityControlFrameworkPage;