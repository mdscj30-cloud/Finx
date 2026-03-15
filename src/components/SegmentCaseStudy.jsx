import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SegmentCaseStudy = ({ segment }) => {
  const content = {
    smb: {
      title: "$2M Digital Agency Cut Accounting Time by 80%",
      story: "Before FinxisAI, CreativeFlow was spending 40 hours a month on manual invoicing and reconciliation. Their books were always 2 months behind.",
      result: "Within 30 days of onboarding, FinxisAI automated their entire AR/AP process. They now spend <5 hours a month on finance.",
      metrics: ["80% Time Saved", "Zero Late Fees", "Real-Time P&L"],
      quote: "I finally have my weekends back. FinxisAI didn't just clean up my books; they gave me the clarity to double my margins.",
      author: "Sarah Jenkins, Founder"
    },
    cpa: {
      title: "15-CPA Firm Scaled to 2x Clients Without Hiring",
      story: "Miller & Associates was turning away clients because they couldn't find qualified staff to handle the bookkeeping workload.",
      result: "By white-labeling FinxisAI, they offloaded 100% of the transaction coding. They doubled their client base in 12 months with the same staff.",
      metrics: ["2x Client Load", "65% Margin Increase", "Zero Staff Burnout"],
      quote: "The quality of the AI categorization rivals my senior staff. It's the secret weapon that allowed us to scale profitably.",
      author: "David Miller, Managing Partner"
    },
    startup: {
      title: "SaaS Startup Raised $2M with Clean Financials",
      story: "TechNova was prepping for their Seed round but had messy financials kept in random spreadsheets. Investors were skeptical.",
      result: "FinxisAI rebuilt 12 months of historical data in 1 week. The clean, GAAP-compliant reports gave investors the confidence to commit.",
      metrics: ["$2M Seed Raised", "1 Week Setup", "Due Diligence Ready"],
      quote: "We wouldn't have closed our round without FinxisAI. They turned our financial mess into a professional data room overnight.",
      author: "Alex Chen, CEO"
    },
    saas: {
      title: "Series B SaaS Scaled to $25M ARR",
      story: "CloudScale struggled with ASC 606 compliance as they introduced annual contracts and usage-based billing.",
      result: "FinxisAI automated their revenue recognition schedule, ensuring perfect compliance while saving their Controller 20 hours a week.",
      metrics: ["100% Compliant", "20 hrs/wk Saved", "Faster Monthly Close"],
      quote: "Revenue recognition used to be a monthly nightmare. Now it happens automatically in the background. It's magic.",
      author: "Jessica Wu, VP Finance"
    },
    ecommerce: {
      title: "E-Commerce Brand Increased Profitability by 30%",
      story: "LuxeHome was selling on Shopify and Amazon but didn't know their true profit per SKU due to hidden fees and returns.",
      result: "FinxisAI integrated all channels to reveal true unit economics. They cut unprofitable products and boosted net margin by 30%.",
      metrics: ["30% Profit Boost", "Accurate COGS", "Multi-Channel Sync"],
      quote: "For the first time, I know exactly how much money I make on every sale across every channel. It transformed our strategy.",
      author: "Mike Ross, Owner"
    }
  };

  const data = content[segment] || content.smb;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container-max">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
           <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                 <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                    Case Study
                 </div>
                 <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                    {data.title}
                 </h2>
                 <div className="space-y-6 text-lg text-slate-600 mb-8">
                    <p><span className="font-bold text-slate-900">Challenge:</span> {data.story}</p>
                    <p><span className="font-bold text-slate-900">Solution:</span> {data.result}</p>
                 </div>
                 <div className="grid grid-cols-3 gap-4 mb-8">
                    {data.metrics.map((metric, i) => (
                       <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                          <span className="block font-bold text-blue-600 text-lg">{metric.split(' ')[0]}</span>
                          <span className="text-xs text-slate-500 uppercase font-medium">{metric.split(' ').slice(1).join(' ')}</span>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="bg-blue-600 p-10 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-16 opacity-10">
                    <Quote size={200} />
                 </div>
                 <div className="relative z-10">
                    <Quote className="w-12 h-12 mb-6 text-blue-300" />
                    <blockquote className="text-2xl font-medium leading-relaxed mb-8">
                       "{data.quote}"
                    </blockquote>
                    <div>
                       <div className="font-bold text-xl">{data.author}</div>
                       <div className="text-blue-200">FinxisAI Customer</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentCaseStudy;