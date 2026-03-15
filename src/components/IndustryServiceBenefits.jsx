import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const IndustryServiceBenefits = ({ overview, benefits }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Built for Your Industry</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {overview}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
              >
                <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServiceBenefits;