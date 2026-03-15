import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Settings } from 'lucide-react';

const icons = [Zap, Shield, BarChart3, Settings];

const IndustryServiceFeatures = ({ features }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Features & Solutions</h2>
          <p className="text-lg text-slate-600">Powerful tools designed specifically for your operational needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryServiceFeatures;