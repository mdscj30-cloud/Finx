import React from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  ScanText,
  BrainCircuit,
  Users,
  Landmark,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: PieChart,
      title: 'Financial Dashboards',
      description: 'Real-time insights with customizable dashboards that track KPIs, cash flow, and financial health.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: ScanText,
      title: 'Document AI & OCR',
      description: 'Intelligent document processing that extracts data from invoices, receipts, and financial statements.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: BrainCircuit,
      title: 'AI-Based Insights',
      description: 'Machine learning algorithms provide predictive analytics and automated financial recommendations.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Users,
      title: 'CPA-Client Portal',
      description: 'Secure collaboration platform enabling seamless communication between CPAs and their clients.',
      color: 'from-sky-500 to-cyan-600'
    },
    {
      icon: Landmark,
      title: 'Tax Advisory Assistant',
      description: 'AI-powered tax planning and compliance tools with real-time regulatory updates for IRS and HMRC.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Grade Security',
      description: 'Enterprise-level encryption and compliance with SOC 2, GDPR, and financial regulations.',
      color: 'from-rose-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks like data entry, reconciliation, and report generation.',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced reporting tools with trend analysis and benchmarking against industry standards.',
      color: 'from-lime-500 to-green-600'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Powerful Features for{' '}
            <span className="gradient-text">Modern Finance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to streamline financial operations, enhance client relationships, 
            and make data-driven decisions with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 card-hover"
            >
              <div className={`feature-icon bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-slate-800">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            Ready to experience the future of financial management?
          </p>
          <Link to="/services/ai-bookkeeping" className="btn-primary inline-flex items-center gap-2">
            Explore All Features
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;