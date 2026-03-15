import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SegmentPricing = ({ segment, scrollToCTA }) => {
  const content = {
    smb: {
      plans: [
        { name: "Starter", price: "$500", period: "/mo", desc: "For businesses <$500k revenue", features: ["Monthly Bookkeeping", "Cash Basis", "Email Support"] },
        { name: "Growth", price: "$1,500", period: "/mo", desc: "For businesses $500k-$2M", features: ["Accrual Basis", "Monthly Strategy Call", "Bill Pay & Invoicing"], popular: true },
        { name: "Scale", price: "$3,000", period: "/mo", desc: "For businesses >$2M", features: ["Virtual CFO", "Custom Reporting", "Priority Support"] }
      ]
    },
    cpa: {
      plans: [
        { name: "Small Firm", price: "$2,000", period: "/mo", desc: "Up to 10 Clients", features: ["White-Label Portal", "Standard Coding", "Dedicated Acct Mgr"] },
        { name: "Mid Firm", price: "$5,000", period: "/mo", desc: "Up to 30 Clients", features: ["Priority Turnaround", "Complex Reconciliation", "Slack Channel"], popular: true },
        { name: "Large Firm", price: "$10,000", period: "/mo", desc: "Up to 75 Clients", features: ["Volume Discounts", "API Access", "Custom Workflows"] }
      ]
    },
    startup: {
      plans: [
        { name: "Pre-Seed", price: "Free", period: "30 days", desc: "Then $250/mo", features: ["Cash Burn Tracking", "Basic P&L", "Expense Categorization"] },
        { name: "Seed", price: "$500", period: "/mo", desc: "Post-funding growth", features: ["Accrual Basis", "Investor Reports", "Cap Table Mgmt"], popular: true },
        { name: "Series A", price: "$1,500", period: "/mo", desc: "Rapid scaling", features: ["Virtual CFO", "Budget vs Actuals", "Board Meeting Prep"] }
      ]
    },
    saas: {
      plans: [
        { name: "Early Stage", price: "$1,000", period: "/mo", desc: "<$1M ARR", features: ["ASC 606 Revenue Rec", "Stripe Integration", "Basic Metrics"] },
        { name: "Growth", price: "$3,000", period: "/mo", desc: "$1M-$5M ARR", features: ["Deferred Revenue Sched", "Churn Analysis", "Cohort Reporting"], popular: true },
        { name: "Enterprise", price: "Custom", period: "", desc: "$5M+ ARR", features: ["Multi-Entity", "Custom ERP Sync", "Audit Support"] }
      ]
    },
    ecommerce: {
      plans: [
        { name: "Starter", price: "$1,000", period: "/mo", desc: "<$1M GMV", features: ["2 Sales Channels", "Inventory Sync", "Sales Tax Calc"] },
        { name: "Growth", price: "$2,500", period: "/mo", desc: "$1M-$5M GMV", features: ["5 Sales Channels", "SKU Profitability", "Returns Mgmt"], popular: true },
        { name: "Scale", price: "$5,000", period: "/mo", desc: "$5M+ GMV", features: ["Unlimited Channels", "Global Currency", "3PL Integration"] }
      ]
    }
  };

  const data = content[segment] || content.smb;

  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600">No hourly billing. No surprises. Just clear monthly rates.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {data.plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-blue-600 shadow-xl bg-white' : 'border-slate-200 bg-slate-50'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <Check className="w-4 h-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                onClick={scrollToCTA}
                className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-white border border-slate-300 hover:bg-slate-50 text-slate-900'}`}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-slate-500">
           * All plans include 256-bit encryption, daily backups, and unlimited read-only users.
        </div>
      </div>
    </section>
  );
};

export default SegmentPricing;