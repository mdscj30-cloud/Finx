import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart } from 'lucide-react';

const IndustryExamples = ({ examples }) => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real-World Scenarios</h2>
          <p className="text-lg text-slate-300">See how businesses like yours have transformed.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <BarChart className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{example.title}</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Challenge</span>
                  <p className="text-slate-200 mt-1">{example.description}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Outcome</span>
                  <p className="text-white font-medium mt-1">{example.result}</p>
                </div>
              </div>
              
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExamples;