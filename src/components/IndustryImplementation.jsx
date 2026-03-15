import React from 'react';
import { motion } from 'framer-motion';

const IndustryImplementation = ({ implementation }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Seamless Implementation</h2>
          <p className="text-lg text-slate-600">Typical Timeline: {implementation.timeline}</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 -z-10"></div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {implementation.steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center relative"
              >
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-lg ring-4 ring-white">
                  {index + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryImplementation;