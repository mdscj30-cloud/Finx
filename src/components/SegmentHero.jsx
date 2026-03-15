import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SegmentHero = ({ segment, scrollToCTA }) => {
  const content = {
    smb: {
      headline: "Accounting Made Simple for Growing Businesses",
      subheading: "Automate 90% of your bookkeeping. Get accurate, tax-ready financials without the headache of spreadsheets or expensive hourly billings.",
      cta: "Get Free Assessment",
      badge: "Rated #1 for Small Business",
      trust: ["99.8% Accuracy", "Save 15+ Hours/Mo", "Tax-Ready Financials"]
    },
    cpa: {
      headline: "Scale Your CPA Firm Without Hiring",
      subheading: "White-label AI bookkeeping that allows you to handle 2-3x more clients. Eliminate the grunt work and focus on high-value advisory.",
      cta: "Schedule Demo",
      badge: "Partnered with 50+ Firms",
      trust: ["SOC 2 Compliant", "White-Label Ready", "Seamless Integration"]
    },
    startup: {
      headline: "Accounting Built for Startups",
      subheading: "Investor-ready financials from Day 1. Track burn rate, runway, and KPIs automatically while you focus on finding product-market fit.",
      cta: "Get Started Free",
      badge: "Trusted by YC Founders",
      trust: ["Investor Reporting", "R&D Credit Prep", "Real-Time Burn Rate"]
    },
    saas: {
      headline: "Financial Operations for Scaling SaaS",
      subheading: "Automated revenue recognition (ASC 606) and subscription metrics. Get real-time visibility into MRR, Churn, and LTV/CAC.",
      cta: "Schedule Demo",
      badge: "SaaS Metrics Expert",
      trust: ["ASC 606 Ready", "Stripe Integration", "Unit Economics"]
    },
    ecommerce: {
      headline: "Accounting Built for E-Commerce",
      subheading: "Conquer multi-channel complexity. Automatically reconcile sales across Shopify, Amazon, and Walmart with accurate COGS tracking.",
      cta: "Get Free Analysis",
      badge: "Shopify Plus Partner",
      trust: ["Sales Tax Auto-Pilot", "Inventory Sync", "Profitability by SKU"]
    }
  };

  const data = content[segment] || content.smb;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 font-medium text-sm mb-8"
          >
            <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
            {data.badge}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8"
          >
            {data.headline}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            {data.subheading}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              onClick={scrollToCTA}
              className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 h-14 px-8 text-lg"
            >
              {data.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 text-sm font-medium"
          >
            {data.trust.map((item, i) => (
              <div key={i} className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SegmentHero;