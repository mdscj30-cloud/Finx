import React from 'react';
import HowWeThinkLayout from '@/components/HowWeThinkLayout';
import { Link } from 'react-router-dom';

const FutureOfAIAccountingPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Future of AI in Accounting: FinxisAI Vision",
    "description": "Our roadmap for the evolution of the accounting industry, from automated bookkeeping to predictive financial intelligence.",
    "author": { "@type": "Organization", "name": "FinxisAI" },
    "publisher": { "@type": "Organization", "name": "FinxisAI" }
  };

  const toc = [
    { id: "vision", label: "Our Vision" },
    { id: "near-term", label: "Next 3-5 Years" },
    { id: "long-term", label: "10+ Year Horizon" },
    { id: "preparation", label: "Preparing Now" }
  ];

  const relatedLinks = [
    { title: "What We Automate", desc: "Current capabilities.", path: "/how-we-think/what-we-automate" },
    { title: "Our Philosophy", desc: "Why we chose this path.", path: "/how-we-think/our-story-philosophy" }
  ];

  return (
    <HowWeThinkLayout 
      title="The Future of AI in Accounting: Our Vision"
      description="We aren't just building for today. We are architecting the financial operating system of the future. Here is where the industry is going."
      toc={toc}
      relatedLinks={relatedLinks}
      schemaData={schemaData}
    >
      <section id="vision">
        <p className="lead text-xl text-slate-600 mb-8">
          The accounting industry is in the midst of its third great transformation. First came the ledger (1400s). Then came the spreadsheet (1980s). Now comes the Agent (2020s). We envision a future where accounting is not a record of the past, but a navigation system for the future.
        </p>
      </section>

      <section id="near-term">
        <h2>Next 3-5 Years: The "Zero-Data-Entry" Era</h2>
        <p>In the near term, we expect the complete elimination of manual data entry.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Universal APIs:</strong> Bank feeds will be replaced by direct open-banking APIs that carry rich context (receipt images, contract details) alongside the transaction.</li>
          <li><strong>Continuous Close:</strong> The concept of "month-end close" will vanish. Books will be closed continuously, every day.</li>
          <li><strong>Predictive Cash Flow:</strong> Static budgets will be replaced by dynamic, AI-driven rolling forecasts that update daily based on spending patterns.</li>
        </ul>
      </section>

      <section id="long-term">
        <h2>10+ Year Horizon: Autonomous Finance</h2>
        <p>Looking further out, we see the rise of autonomous financial agents.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Self-Negotiating Payables:</strong> Your AI agent will notice a vendor price hike, compare it to market rates, and negotiate a discount—automatically.</li>
          <li><strong>Algorithmic Treasury Management:</strong> Excess cash will be swept automatically into yield-bearing accounts or used to pay down debt dynamically to optimize WACC (Weighted Average Cost of Capital).</li>
          <li><strong>Regulatory Alignment:</strong> Tax returns will be filed in real-time via API to the government, eliminating the annual filing ritual entirely.</li>
        </ul>
      </section>

      <section id="preparation">
        <h2>How We Are Preparing</h2>
        <p>FinxisAI is building the infrastructure for this future today. By cleaning and structuring data now, we ensure our clients are ready to plug into these advanced capabilities as they emerge. We are not just your accountant; we are your bridge to the future of finance.</p>
      </section>

      <div className="bg-indigo-600 text-white p-8 rounded-2xl mt-12 text-center not-prose">
        <h2 className="text-2xl font-bold mb-4 text-white">Build the Future With Us</h2>
        <p className="mb-6 text-indigo-100 max-w-2xl mx-auto">Don't let your finance function get stuck in the spreadsheet era.</p>
        <Link to="/contact" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-indigo-50 transition-colors">Future-Proof Your Business</Link>
      </div>
    </HowWeThinkLayout>
  );
};

export default FutureOfAIAccountingPage;