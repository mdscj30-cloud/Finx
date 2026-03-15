import React from 'react';
import { motion } from 'framer-motion';

const SegmentSocialProof = ({ segment }) => {
  const content = {
    smb: {
      stats: [
        { value: "500+", label: "SMB Customers" },
        { value: "99.8%", label: "Accuracy Rate" },
        { value: "35 Hrs", label: "Monthly Time Saved" },
        { value: "$25K", label: "Avg Tax Savings" }
      ],
      logos: ["TechCrunch", "Forbes", "Inc"]
    },
    cpa: {
      stats: [
        { value: "50+", label: "CPA Firm Partners" },
        { value: "100%", label: "AICPA Standards" },
        { value: "3x", label: "Faster Close" },
        { value: "24/7", label: "Support Access" }
      ],
      logos: ["AccountingToday", "CPA Practice Advisor", "Journal of Accountancy"]
    },
    startup: {
      stats: [
        { value: "200+", label: "Startups Funded" },
        { value: "$500M", label: "Capital Raised" },
        { value: "30 Day", label: "Free Trial" },
        { value: "100%", label: "Investor Ready" }
      ],
      logos: ["Y Combinator", "TechStars", "AngelList"]
    },
    saas: {
      stats: [
        { value: "50+", label: "SaaS Companies" },
        { value: "ASC 606", label: "Compliance Expert" },
        { value: "Real-Time", label: "MRR Reporting" },
        { value: "Zero", label: "Spreadsheets" }
      ],
      logos: ["SaaStr", "TechCrunch", "VentureBeat"]
    },
    ecommerce: {
      stats: [
        { value: "300+", label: "E-Com Brands" },
        { value: "50+", label: "Channels Supported" },
        { value: "Auto", label: "Sales Tax Filing" },
        { value: "100%", label: "Inventory Sync" }
      ],
      logos: ["Shopify Plus", "Amazon FBA", "BigCommerce"]
    }
  };

  const data = content[segment] || content.smb;

  return (
    <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="container-max text-center">
        <h3 className="text-slate-400 font-medium uppercase tracking-widest text-sm mb-12">
           Trusted by Industry Leaders
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
           {data.stats.map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700"
             >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
             </motion.div>
           ))}
        </div>

        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholders for logos - in production use real SVGs */}
           {data.logos.map((logo, i) => (
              <span key={i} className="text-xl font-bold text-slate-300">{logo}</span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentSocialProof;