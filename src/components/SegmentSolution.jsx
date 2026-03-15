import React from 'react';
import { Check, BrainCircuit, LineChart, Shield, Zap } from 'lucide-react';

const SegmentSolution = ({ segment }) => {
  const content = {
    smb: {
      headline: "The Modern Way to Manage Your Books",
      points: [
        "Reduce manual work by 80% with AI automation",
        "Save $10K-$50K annually in missed tax deductions",
        "Get crystal clear financial visibility 24/7"
      ],
      steps: [
        { title: "Connect", desc: "Securely link your bank accounts and credit cards." },
        { title: "Automate", desc: "Our AI categorizes transactions instantly." },
        { title: "Review", desc: "Expert CPAs verify accuracy and compliance." }
      ]
    },
    cpa: {
      headline: "Your White-Label Automation Partner",
      points: [
        "Eliminate 60-70% of routine bookkeeping work",
        "Scale your client base 2-3x without adding headcount",
        "Improve client satisfaction with real-time data"
      ],
      steps: [
        { title: "Onboard", desc: "Migrate client files to our secure portal." },
        { title: "Process", desc: "We handle the monthly reconciliation & coding." },
        { title: "Deliver", desc: "You present the clean financials as your own." }
      ]
    },
    startup: {
      headline: "Financial Infrastructure for Hyper-Growth",
      points: [
        "Board-ready financials delivered automatically",
        "Always-on data room for due diligence prep",
        "Unit economics tracking (LTV, CAC, Burn)"
      ],
      steps: [
        { title: "Setup", desc: "We configure your chart of accounts for SaaS/Tech." },
        { title: "Track", desc: "Real-time burn rate and runway monitoring." },
        { title: "Scale", desc: "Financials that grow with your funding rounds." }
      ]
    },
    saas: {
      headline: "Precision Finance for Subscription Business",
      points: [
        "Recognize revenue 3-5x faster with automation",
        "Reduce billing & reconciliation errors by 60%",
        "Real-time MRR, ARR, and Churn reporting"
      ],
      steps: [
        { title: "Sync", desc: "Direct integration with Stripe/Chargebee." },
        { title: "Defer", desc: "Auto-calculate deferred revenue schedules." },
        { title: "Report", desc: "GAAP-compliant P&L ready for investors." }
      ]
    },
    ecommerce: {
      headline: "Clear Profitability for Every SKU",
      points: [
        "Reduce inventory reconciliation errors by 40-50%",
        "Automate sales tax calculation across all states",
        "True profitability insights per channel/product"
      ],
      steps: [
        { title: "Integrate", desc: "Connect Shopify, Amazon, and Walmart." },
        { title: "Match", desc: "Auto-reconcile payouts to bank deposits." },
        { title: "Analyze", desc: "See your true net margin in real-time." }
      ]
    }
  };

  const data = content[segment] || content.smb;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-medium text-sm mb-6">
              <Zap className="w-4 h-4 mr-2" />
              The Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              {data.headline}
            </h2>
            <div className="space-y-4 mb-10">
              {data.points.map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <p className="text-lg text-slate-700">{point}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
               {data.steps.map((step, idx) => (
                 <div key={idx} className="relative">
                   <div className="text-4xl font-bold text-slate-100 mb-2">0{idx + 1}</div>
                   <h4 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h4>
                   <p className="text-sm text-slate-600">{step.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl rotate-3 opacity-20 transform scale-105"></div>
             <div className="relative bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Financial Health</div>
                    <div className="text-2xl font-bold text-white">98/100</div>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <BrainCircuit className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="space-y-6">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-300">
                        <Shield className="w-5 h-5 mr-3 text-emerald-500" />
                        Compliance Status
                      </div>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">Verified</span>
                   </div>
                   <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-300">
                        <LineChart className="w-5 h-5 mr-3 text-blue-500" />
                        Reconciliation
                      </div>
                      <span className="text-white font-mono">100% Complete</span>
                   </div>
                   <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 mt-4">
                      <div className="flex justify-between text-sm mb-2">
                         <span className="text-slate-400">Tax Savings Found</span>
                         <span className="text-emerald-400 font-bold">+$12,450</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                         <div className="bg-emerald-500 h-2 rounded-full w-[85%]"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentSolution;