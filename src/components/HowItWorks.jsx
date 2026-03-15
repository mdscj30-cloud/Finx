import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Cpu, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Connect Your Accounts',
    description: 'Securely link your bank accounts, accounting software, and financial tools in minutes. We support QuickBooks, Xero, Stripe, Plaid, and 50+ integrations.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI Does the Heavy Lifting',
    description: 'Our AI engine automatically categorizes transactions, reconciles accounts, processes invoices via OCR, and flags anomalies — with human CPA review built in.',
    color: 'from-indigo-500 to-violet-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Get Actionable Insights',
    description: 'Access real-time dashboards, monthly reports, tax-ready financials, and predictive cash flow forecasts — anytime, on any device.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Up and Running in{' '}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From setup to insights in under 15 minutes. No accounting degree required.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-emerald-200" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 z-10`}>
                  <step.icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-slate-100 rounded-full text-xs font-bold text-slate-700 flex items-center justify-center shadow-sm">
                    {index + 1}
                  </span>
                </div>

                <div className={`w-full p-8 rounded-2xl ${step.bg} border ${step.border}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="md:hidden mt-6 text-slate-300">
                    <ArrowRight className="w-6 h-6 mx-auto rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
