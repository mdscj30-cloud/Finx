import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Clock, DollarSign, Award, Lock } from 'lucide-react';

const IndustryBenefits = ({ benefits }) => {
  const icons = [TrendingUp, ShieldCheck, Clock, DollarSign, Award, Lock];

  return (
    <section className="py-20 bg-white">
      <div className="container-max">
         <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Key Benefits</h2>
          <p className="text-lg text-slate-600">Why leading companies in your industry choose us.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
             const Icon = icons[index % icons.length];
             return (
              <motion.div 
                key={index}
                className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </motion.div>
             )
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefits;