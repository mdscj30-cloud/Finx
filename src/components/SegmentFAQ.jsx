import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SegmentFAQ = ({ segment }) => {
  const content = {
    smb: {
      items: [
        { q: "How much does it cost?", a: "Plans start at $500/mo for small businesses. Pricing scales based on your monthly expense volume and complexity." },
        { q: "How long does setup take?", a: "We can connect your accounts and start categorizing transactions in under 24 hours. Full onboarding takes about 3-5 days." },
        { q: "Is my data secure?", a: "Yes. We use bank-grade 256-bit encryption and are SOC 2 Type II compliant. We never sell your data." },
        { q: "Do I still need a tax CPA?", a: "We handle the prep work. You can use our tax filing add-on, or we can hand off clean books to your existing CPA." }
      ]
    },
    cpa: {
      items: [
        { q: "Does this integrate with QBO/Xero?", a: "Yes, we integrate seamlessly with QuickBooks Online, Xero, and Sage Intacct." },
        { q: "Is the work done by AI or humans?", a: "It's a hybrid. AI handles 90% of the coding, but a US-based reviewer verifies accuracy before you see it." },
        { q: "Can I white-label the portal?", a: "Yes, the client portal can be branded with your firm's logo and domain." },
        { q: "What if the AI makes a mistake?", a: "Our human review layer catches anomalies. We also learn from your corrections to improve accuracy over time." }
      ]
    },
    startup: {
      items: [
        { q: "Do you support accrual accounting?", a: "Yes, we support both cash and accrual basis, which is critical for SaaS and funded startups." },
        { q: "Can you help with R&D tax credits?", a: "Yes, we tag expenses eligible for R&D credits to make filing easy at year-end." },
        { q: "Is there a contract?", a: "No, our plans are month-to-month. We believe we should earn your business every month." },
        { q: "What about catch-up bookkeeping?", a: "We specialize in catch-up work. We can process 12 months of historical data in about a week." }
      ]
    },
    saas: {
      items: [
        { q: "How do you handle ASC 606?", a: "We automatically create revenue recognition schedules based on your billing terms and service periods." },
        { q: "Do you integrate with Stripe?", a: "Yes, we pull transaction-level data from Stripe to reconcile deposits and fees automatically." },
        { q: "Can you track CAC and LTV?", a: "Yes, our dashboard provides real-time SaaS metrics alongside your standard financial reports." },
        { q: "Do you support multi-entity?", a: "Yes, we can handle consolidated reporting for multiple entities and currencies." }
      ]
    },
    ecommerce: {
      items: [
        { q: "Do you support Amazon FBA?", a: "Yes, we break down Amazon settlement reports to separate sales, FBA fees, shipping, and ads." },
        { q: "How do you handle inventory?", a: "We sync with your inventory management system to track COGS accurately on a monthly basis." },
        { q: "What about sales tax?", a: "We track economic nexus thresholds and can automate filings in all US states." },
        { q: "Do you handle returns?", a: "Yes, returns and refunds are automatically reconciled to ensure net revenue is accurate." }
      ]
    }
  };

  const data = content[segment] || content.smb;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container-max max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {data.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:text-blue-600 hover:no-underline py-6">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SegmentFAQ;