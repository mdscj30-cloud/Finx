import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, User, BrainCircuit } from 'lucide-react';

const showcaseItems = [
  {
    id: 'cpa',
    icon: LayoutDashboard,
    title: 'CPA Dashboard View',
    description: 'Manage clients, tasks, and firm-wide insights in one powerful command center.',
    subtext: 'Firm Analytics, Task Management, Client Overview',
    image: <img className="w-full h-auto rounded-2xl shadow-2xl" alt="A comprehensive CPA dashboard showing client lists, task progress, and financial analytics charts." src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?auto=format&fit=crop&w=1200&q=80" />
  },
  {
    id: 'client',
    icon: User,
    title: 'Client Portal Experience',
    description: 'Empower your clients with a transparent, collaborative, and easy-to-use portal.',
    subtext: 'Secure Messaging, Document Uploads, Task Tracking',
    image: <img className="w-full h-auto rounded-2xl shadow-2xl" alt="A clean and modern client portal interface displaying messages, pending tasks, and shared documents." src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7?auto=format&fit=crop&w=1200&q=80" />
  },
  {
    id: 'ai',
    icon: BrainCircuit,
    title: 'AI-Powered Finance Assistant',
    description: 'Get automated insights, expense optimization, and proactive tax alerts.',
    subtext: 'Automated Insights, Expense Optimization, Tax Alerts',
    image: <img className="w-full h-auto rounded-2xl shadow-2xl" alt="An AI financial assistant interface showing cards with insights like 'Burn Rate Alert' and 'Expense Optimization Opportunity'." src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" />
  }
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(showcaseItems[0].id);

  const activeItem = showcaseItems.find(item => item.id === activeTab);

  return (
    <section id="product" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            See What <span className="gradient-text">FinxisAI Can Do</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A unified platform for CPAs and their clients, powered by intelligent automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            {showcaseItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                  activeTab === item.id
                    ? 'bg-blue-50 border-blue-200 shadow-lg'
                    : 'bg-slate-50 border-transparent hover:bg-slate-100 hover:border-slate-200'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`feature-icon bg-gradient-to-br from-blue-500 to-indigo-600 !w-12 !h-12`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500">{item.subtext}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  {activeItem.image}
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <h4 className="text-xl font-bold text-slate-800">{activeItem.title}</h4>
                  <p className="text-slate-600 mt-1">{activeItem.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;