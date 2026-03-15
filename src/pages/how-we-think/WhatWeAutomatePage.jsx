import React from 'react';
import HowWeThinkLayout from '@/components/HowWeThinkLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle } from 'lucide-react';

const WhatWeAutomatePage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What FinxisAI Automates vs. What We Don't",
    "description": "A transparent breakdown of our automation philosophy. See exactly which accounting tasks are handled by AI and which require human expertise.",
    "author": { "@type": "Organization", "name": "FinxisAI" },
    "publisher": { "@type": "Organization", "name": "FinxisAI" }
  };

  const toc = [
    { id: "philosophy", label: "Automation Philosophy" },
    { id: "automated", label: "What We Automate" },
    { id: "manual", label: "What We Don't Automate" },
    { id: "matrix", label: "Decision Matrix" },
    { id: "faq", label: "FAQs" }
  ];

  const relatedLinks = [
    { title: "AI Responsibility", desc: "Our ethical framework for AI use.", path: "/how-we-think/ai-responsibility" },
    { title: "Quality Control", desc: "How we ensure automated accuracy.", path: "/how-we-think/quality-control-framework" },
    { title: "Comparison: AI vs Manual", desc: "See the speed and cost differences.", path: "/comparison/ai-assisted-accounting-vs-manual-accounting" }
  ];

  return (
    <HowWeThinkLayout 
      title="What We Automate vs. What We Don't"
      description="Transparency is key. We define the clear line between machine efficiency and human judgment in our accounting processes."
      toc={toc}
      relatedLinks={relatedLinks}
      schemaData={schemaData}
    >
      <section id="introduction">
        <p className="lead text-xl text-slate-600 mb-8">
          The term "AI Accounting" can be vague. Does it mean a robot does everything? Does it mean a human uses a calculator? At FinxisAI, we believe in precise definitions. We automate tasks that are repetitive, rule-based, and high-volume. We strictly <em>do not</em> automate tasks that require empathy, strategic foresight, or subjective ethical judgment.
        </p>
      </section>

      <section id="philosophy">
        <h2>Automation Philosophy</h2>
        <p>Our philosophy is simple: <strong>Automate the predictable; Humanize the exceptional.</strong></p>
        <p>
          We view automation not as a way to cut corners, but as a way to elevate the role of the accountant. By removing the drudgery of data entry, we free our professionals to become true financial partners. Our decision to automate a process depends on three factors:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Repeatability:</strong> Does this task happen the same way 90% of the time?</li>
          <li><strong>Data Structure:</strong> Is the input data structured (like a bank feed) or unstructured (like a handwritten note)?</li>
          <li><strong>Risk Profile:</strong> What is the consequence of an error? (Low risk = automation candidate; High risk = human review).</li>
        </ul>
      </section>

      <section id="automated">
        <h2>✅ What We Automate</h2>
        <div className="grid gap-6 my-8 not-prose">
          {[
            {
              title: "1. Transaction Categorization & Coding",
              desc: "Recurring expenses (SaaS subscriptions, rent, utilities) are coded instantly. Our AI learns vendor patterns (e.g., 'Starbucks' = 'Meals & Entertainment') across millions of transactions.",
              benefit: "Real-time P&L visibility instead of month-end waiting."
            },
            {
              title: "2. Bank Reconciliation",
              desc: "Matching the bank feed to the general ledger is a mathematical exercise perfect for AI. It detects discrepancies down to the penny instantly.",
              benefit: "Eliminates 'mystery variances' and cash drag."
            },
            {
              title: "3. Accounts Payable (AP) Ingest",
              desc: "OCR (Optical Character Recognition) reads invoices, extracts data (date, amount, vendor, due date), and drafts the bill in the system.",
              benefit: "Reduces manual data entry errors by 99%."
            },
            {
              title: "4. Payroll Tax Calculations",
              desc: "Calculating federal, state, and local withholdings is rule-based and complex. Automation ensures rates are always current with tax law.",
              benefit: "Zero math errors or missed rate updates."
            },
            {
              title: "5. Financial Report Generation",
              desc: "Compiling the Balance Sheet, P&L, and Cash Flow statement from the ledger is automated. The formatting and preliminary variance analysis are machine-generated.",
              benefit: "Consistent, board-ready formatting every month."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 m-0">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-1 mb-2">{item.desc}</p>
                <p className="text-xs font-semibold text-emerald-700">Benefit: {item.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="manual">
        <h2>❌ What We Don't Automate (Human-Led)</h2>
        <div className="grid gap-6 my-8 not-prose">
           {[
            {
              title: "1. Strategic Tax Planning",
              desc: "Deciding whether to accelerate depreciation or defer income involves future-gazing and risk appetite assessment. AI cannot understand your 5-year exit plan.",
              reason: "Requires subjective judgment and strategic alignment."
            },
            {
              title: "2. Complex Classification Judgments",
              desc: "Is that legal fee a deductible business expense or a capitalizable startup cost? The answer often depends on 'intent' and context.",
              reason: "Context-heavy decisions require professional experience."
            },
            {
              title: "3. Investor Communication & Narrative",
              desc: "Explaining *why* margins compressed this quarter requires narrative skill. AI can say margins dropped; humans explain it was a strategic inventory build.",
              reason: "Investors invest in stories backed by numbers, not just numbers."
            },
            {
              title: "4. Forensic Anomaly Investigation",
              desc: "When a number looks wrong, AI flags it. But investigating *why*—calling the vendor, checking the warehouse, interviewing staff—is human work.",
              reason: "Requires real-world interaction and intuition."
            },
            {
              title: "5. Client Relationship Management",
              desc: "We do not use bots for advisory calls. When you have a problem, you talk to a person who knows your name and your business.",
              reason: "Trust is built between people."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-rose-50/50 rounded-xl border border-rose-100">
              <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 m-0">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-1 mb-2">{item.desc}</p>
                <p className="text-xs font-semibold text-rose-700">Reason: {item.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="matrix">
        <h2>Automation Decision Matrix</h2>
        <p>We use this internal matrix to decide how to handle every task:</p>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse border border-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4 border border-slate-200">Task Characteristics</th>
                <th className="p-4 border border-slate-200">Execution Method</th>
                <th className="p-4 border border-slate-200">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-slate-200">High Volume, Low Complexity</td>
                <td className="p-4 border border-slate-200 font-bold text-emerald-600">Fully Automated + Sample Review</td>
                <td className="p-4 border border-slate-200">Categorizing Uber receipts</td>
              </tr>
               <tr>
                <td className="p-4 border border-slate-200">Low Volume, High Complexity</td>
                <td className="p-4 border border-slate-200 font-bold text-rose-600">Manual Execution + Peer Review</td>
                <td className="p-4 border border-slate-200">M&A Purchase Price Allocation</td>
              </tr>
               <tr>
                <td className="p-4 border border-slate-200">High Volume, High Complexity</td>
                <td className="p-4 border border-slate-200 font-bold text-blue-600">AI-Assisted (Human-in-the-loop)</td>
                <td className="p-4 border border-slate-200">Invoicing custom enterprise contracts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full not-prose">
          <AccordionItem value="item-1">
            <AccordionTrigger>Does automation mean I can't talk to a human?</AccordionTrigger>
            <AccordionContent>Absolutely not. Automation happens in the back office. The front office—your Account Manager and CFO—is 100% human and more available because they aren't doing data entry.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is automated bookkeeping accurate?</AccordionTrigger>
            <AccordionContent>Yes, typically more accurate than manual entry because it eliminates typos and fatigue. However, we still review it to catch context errors.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I override the AI?</AccordionTrigger>
            <AccordionContent>Yes. If the AI continually codes a vendor incorrectly, you or your AM can set a specific rule to override the model's default behavior.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="bg-slate-900 text-white p-8 rounded-2xl mt-12 text-center not-prose">
        <h2 className="text-2xl font-bold mb-4 text-white">Experience the Balance</h2>
        <p className="mb-6 text-slate-300 max-w-2xl mx-auto">See how our hybrid model delivers the best of both worlds: machine speed and human wisdom.</p>
        <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors">Get Your Custom Plan</Link>
      </div>
    </HowWeThinkLayout>
  );
};

export default WhatWeAutomatePage;