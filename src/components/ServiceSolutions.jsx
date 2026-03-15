import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ServiceSolutions = ({ solutions }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Tailored Solutions</h2>
          <p className="text-lg text-slate-600">How we address your specific needs with precision.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100"
            >
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-slate-600">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSolutions;