import React from 'react';
import { motion } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';

const WhenNotToUse = ({ scenarios, title = "Who Is This NOT For?" }) => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 mb-4 text-rose-600">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We believe in honest partnerships. We might not be the best fit if:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((scenario, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-rose-200 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{scenario.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {scenario.description}
                  </p>
                  {scenario.alternative && (
                    <p className="text-xs font-semibold text-rose-700 bg-rose-50 inline-block px-2 py-1 rounded">
                      Alternative: {scenario.alternative}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenNotToUse;