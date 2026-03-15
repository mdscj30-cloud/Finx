import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, FileWarning } from 'lucide-react';

const IndustryPainPoints = ({ painPoints }) => {
  // Map strings to objects if they are just strings, or use icons if available
  // For simplicity, we'll use a generic set of icons cyclically
  const icons = [AlertTriangle, TrendingDown, Clock, FileWarning];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Common Industry Challenges</h2>
          <p className="text-lg text-slate-600">Navigating the financial complexities of your sector.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-red-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">Challenge {index + 1}</h3>
                <p className="text-slate-600 leading-relaxed">{point}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryPainPoints;