import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, DollarSign, FileWarning, TrendingDown, Users, XCircle } from 'lucide-react';

const SegmentProblem = ({ segment }) => {
  const content = {
    smb: {
      headline: "Drowning in Spreadsheets & Receipts?",
      subheading: "Traditional bookkeeping is broken for modern businesses.",
      points: [
        { icon: Clock, title: "Wasted Time", desc: "Founders spend 15+ hours/month on manual data entry instead of growing." },
        { icon: FileWarning, title: "Costly Errors", desc: "Manual typos lead to inaccurate books and missed tax deductions." },
        { icon: DollarSign, title: "Expensive Fees", desc: "Traditional CPAs charge $500+/mo just for basic reconciliation." }
      ]
    },
    cpa: {
      headline: "Is Low-Value Work Stifling Your Firm?",
      subheading: "You didn't become a CPA to categorize Uber receipts.",
      points: [
        { icon: Clock, title: "Routine Overload", desc: "Staff spend 70% of time on low-margin bookkeeping tasks." },
        { icon: Users, title: "Staff Burnout", desc: "High turnover due to repetitive, boring data entry work." },
        { icon: TrendingDown, title: "Scaling Cap", desc: "Can't take on new high-value clients because you're buried in cleanup." }
      ]
    },
    startup: {
      headline: "Is Your Financial Data Investor-Ready?",
      subheading: "Messy books can kill your next funding round before it starts.",
      points: [
        { icon: AlertCircle, title: "No Infrastructure", desc: "Running on spreadsheets works until due diligence starts." },
        { icon: FileWarning, title: "Compliance Risk", desc: "Missing payroll taxes or state filings can trigger huge penalties." },
        { icon: DollarSign, title: "Burn Rate Blindness", desc: "Not knowing your true runway leads to fatal cash flow crises." }
      ]
    },
    saas: {
      headline: "Is Revenue Recognition a Nightmare?",
      subheading: "SaaS finance is complex. Generic bookkeeping creates chaos.",
      points: [
        { icon: FileWarning, title: "ASC 606 Errors", desc: "Recognizing annual contracts upfront artificially inflates revenue." },
        { icon: AlertCircle, title: "Messy Metrics", desc: "Can't trust your LTV, CAC, or Churn numbers for decision making." },
        { icon: Clock, title: "Reconciliation Hell", desc: "Matching Stripe deposits to bank feeds takes days every month." }
      ]
    },
    ecommerce: {
      headline: "Multi-Channel Sales Creating Chaos?",
      subheading: "High transaction volume breaks traditional accounting methods.",
      points: [
        { icon: AlertCircle, title: "Inventory Blindspots", desc: "Overselling or overstocking because COGS data is weeks old." },
        { icon: FileWarning, title: "Sales Tax Nexus", desc: "Selling in 20 states without tracking economic nexus thresholds." },
        { icon: TrendingDown, title: "Phantom Profit", desc: "Revenue looks high, but hidden fees and returns are killing margin." }
      ]
    }
  };

  const data = content[segment] || content.smb;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">
            {data.headline}
          </h2>
          <p className="text-xl text-slate-600">
            {data.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-500">
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentProblem;