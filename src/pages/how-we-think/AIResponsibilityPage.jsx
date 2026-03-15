import React from 'react';
import HowWeThinkLayout from '@/components/HowWeThinkLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const AIResponsibilityPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How FinxisAI Uses AI Responsibly in Accounting",
    "description": "Our comprehensive framework for responsible AI use, ensuring 99.9% accuracy through rigorous human oversight and ethical guidelines.",
    "author": { "@type": "Organization", "name": "FinxisAI" },
    "publisher": { "@type": "Organization", "name": "FinxisAI" }
  };

  const toc = [
    { id: "principles", label: "Core Principles" },
    { id: "what-we-automate", label: "Automation Scope & Accuracy" },
    { id: "oversight", label: "Human Oversight" },
    { id: "bias", label: "Bias Mitigation" },
    { id: "faq", label: "FAQs" }
  ];

  const relatedLinks = [
    { title: "Quality Control Framework", desc: "Dive deeper into our 5-layer quality assurance system.", path: "/how-we-think/quality-control-framework" },
    { title: "Data Security", desc: "How we protect your financial data with enterprise-grade encryption.", path: "/how-we-think/data-security-privacy" },
    { title: "Professional Oversight", desc: "Meet the humans behind the AI.", path: "/how-we-think/professional-oversight" },
    { title: "Regulatory Compliance", desc: "Staying compliant in a changing world.", path: "/how-we-think/regulatory-compliance" }
  ];

  return (
    <HowWeThinkLayout 
      title="How FinxisAI Uses AI Responsibly"
      description="Our commitment to ethical AI, transparency, and the perfect synergy between machine efficiency and human judgment."
      toc={toc}
      relatedLinks={relatedLinks}
      schemaData={schemaData}
    >
      <section id="introduction">
        <p className="lead text-xl text-slate-600 mb-8">
          Artificial Intelligence is reshaping the accounting landscape, offering unprecedented speed and accuracy. However, power without responsibility is a liability. At FinxisAI, we view AI not as a replacement for professional judgment, but as a powerful tool that amplifies it. Our "Responsible AI" framework is the bedrock of our operations, ensuring that every automated action is transparent, explainable, and verified.
        </p>
        <p>
          We do not believe in "black box" accounting. Financial data is the lifeblood of your business, and you deserve to know exactly how it is being processed. This document outlines our rigorous approach to using AI ethically, securely, and effectively.
        </p>
      </section>

      <section id="principles">
        <h2>AI Responsibility Principles</h2>
        <p>Our approach is guided by four immutable principles:</p>
        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-900 mb-2">1. Human-in-the-Loop</h3>
            <p className="text-slate-600">AI proposes; humans dispose. No financial statement is ever finalized or filed without review by a qualified US-based accounting professional.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-900 mb-2">2. Deterministic Accuracy</h3>
            <p className="text-slate-600">We prioritize rule-based and deterministic AI models over generative probabilistic models for core accounting tasks to prevent hallucinations.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-900 mb-2">3. Radical Transparency</h3>
            <p className="text-slate-600">We clearly delineate what is automated and what is manual. Our audit trails show exactly which system or person made every entry.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-900 mb-2">4. Data Sovereignty</h3>
            <p className="text-slate-600">Your data is yours. We do not use your proprietary financial data to train public models without explicit consent and anonymization.</p>
          </div>
        </div>
      </section>

      <section id="what-we-automate">
        <h2>What We Automate (And How Accurate It Is)</h2>
        <p>We deploy AI strategically in areas where machines outperform humans in speed and pattern recognition. Our current accuracy benchmarks—verified by internal audit—are industry-leading:</p>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                <th className="p-4 font-bold text-slate-800">Process Area</th>
                <th className="p-4 font-bold text-slate-800">AI Function</th>
                <th className="p-4 font-bold text-slate-800">Verified Accuracy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="p-4">Transaction Categorization</td>
                <td className="p-4">Coding bank feeds to GL accounts</td>
                <td className="p-4 font-bold text-emerald-600">99.2%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4">Bank Reconciliation</td>
                <td className="p-4">Matching ledger entries to bank statements</td>
                <td className="p-4 font-bold text-emerald-600">99.8%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4">Invoice Processing</td>
                <td className="p-4">OCR extraction and AP entry</td>
                <td className="p-4 font-bold text-emerald-600">98.5%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4">Payroll Calculation</td>
                <td className="p-4">Gross-to-net calculations based on inputs</td>
                <td className="p-4 font-bold text-emerald-600">99.9%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Note:</strong> Even with 99% accuracy, that 1% error rate is unacceptable in finance. That is why our <Link to="/how-we-think/quality-control-framework">Quality Control Framework</Link> catches the remaining variance.
        </p>
      </section>

      <section id="limitations">
        <h2>What We Do NOT Automate</h2>
        <p>AI is a tool for efficiency, not strategy. We strictly prohibit full automation in areas requiring subjective judgment, ethical reasoning, or high-stakes advisory. These include:</p>
        <ul>
          <li><strong>Tax Strategy & Planning:</strong> While AI can suggest potential credits, the strategic decision to pursue aggressive vs. conservative tax positions is a human conversation.</li>
          <li><strong>Forensic Fraud Investigation:</strong> While AI flags anomalies, the investigation of potential employee fraud requires human sensitivity and legal awareness.</li>
          <li><strong>Complex Entity Structuring:</strong> Decisions about C-Corp vs. LLC status involve legal nuance beyond current AI capabilities.</li>
          <li><strong>Client Communication:</strong> We do not use AI chatbots for complex advisory queries. You will always speak to a human expert.</li>
        </ul>
      </section>

      <section id="oversight">
        <h2>Professional Oversight Model</h2>
        <p>
          Every AI output is treated as a "draft." It only becomes a "record" after validation. Our oversight model ensures that:
        </p>
        <ol>
          <li><strong>Confidence Scoring:</strong> Our AI assigns a confidence score to every categorization. Any entry below 95% confidence is automatically flagged for human review.</li>
          <li><strong>Random Sampling:</strong> Even high-confidence entries are subject to random statistical sampling by Senior Accountants to prevent model drift.</li>
          <li><strong>Final Sign-Off:</strong> Monthly financial statements must be digitally signed by a dedicated Account Manager before release to the client.</li>
        </ol>
      </section>

      <section id="data-security">
        <h2>Data Security & Privacy</h2>
        <p>
          Responsible AI requires responsible data stewardship. Our <Link to="/how-we-think/data-security-privacy">security protocols</Link> ensure that your data is encrypted at rest and in transit. We strictly adhere to the principle of "Least Privilege," meaning AI models only access the specific data fields required for their task, without exposing PII (Personally Identifiable Information) unnecessarily.
        </p>
      </section>

      <section id="bias">
        <h2>Bias Detection & Mitigation</h2>
        <p>
          Algorithmic bias can creep into financial models (e.g., credit risk assessments). We actively audit our models for disparate impact. For accounting categorization, bias is less of a risk than "hallucination," where generative models invent transactions. To mitigate this, we use <strong>deterministic</strong> models for record-keeping—meaning `if X, then Y`—rather than generative models that predict `what looks like Y`.
        </p>
      </section>

      <section id="case-studies">
        <h2>Case Studies in Responsible AI</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-slate-50 p-6 rounded-xl">
            <h4 className="font-bold mb-2">The "Hallucination" Catch</h4>
            <p className="text-sm text-slate-600">An early generative model attempted to categorize a generic "Amazon" purchase as "Office Supplies." Our human reviewer noticed the price ($2,400) was unusual. Investigation revealed it was a laptop (Capital Asset). The model was retrained to flag high-value Amazon purchases for review.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl">
            <h4 className="font-bold mb-2">Privacy First</h4>
            <p className="text-sm text-slate-600">When training our invoice OCR model, we stripped all vendor names and addresses, training only on layout and total amounts. This ensured that no client vendor relationships were exposed to the model's training data.</p>
          </div>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full not-prose">
          <AccordionItem value="item-1">
            <AccordionTrigger>Does AI replace my accountant?</AccordionTrigger>
            <AccordionContent>No. AI replaces the data entry clerk. Your accountant is now freed from typing numbers to focus on analyzing what those numbers mean for your business growth.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is my data used to train ChatGPT?</AccordionTrigger>
            <AccordionContent>No. We use private, isolated instances of LLMs. Your data does not leave our secure environment to train public models like ChatGPT or Claude.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What if the AI makes a mistake?</AccordionTrigger>
            <AccordionContent>Our Quality Control Framework is designed to catch this. If an error slips through to a final report, we take full responsibility and correct it at no cost, often covering any resulting penalties.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I opt out of AI processing?</AccordionTrigger>
            <AccordionContent>We offer manual-only tiers for clients with specific regulatory requirements that prohibit automated processing, though this typically incurs higher fees.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="bg-blue-600 text-white p-8 rounded-2xl mt-12 text-center not-prose">
        <h2 className="text-2xl font-bold mb-4 text-white">Value Responsible Innovation?</h2>
        <p className="mb-6 text-blue-100 max-w-2xl mx-auto">Join hundreds of forward-thinking businesses who trust FinxisAI to handle their finances with speed, accuracy, and integrity.</p>
        <div className="flex justify-center gap-4">
          <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">Start a Conversation</Link>
          <Link to="/how-we-think/what-we-automate" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">See What We Automate</Link>
        </div>
      </div>
    </HowWeThinkLayout>
  );
};

export default AIResponsibilityPage;