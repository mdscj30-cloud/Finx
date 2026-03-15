import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, DollarSign, Target, Info } from 'lucide-react';

const AIAnswerBox = ({ 
  serviceName, 
  definition, 
  bestFor, 
  cost, 
  timeline,
  icon: Icon = Sparkles 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full max-w-4xl mx-auto mb-16 relative z-20"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
        {/* Header Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-1"></div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Quick Answer
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">What is {serviceName}?</h3>
              <p className="text-slate-600 mt-2 leading-relaxed text-lg">
                {definition}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold">
                <Target className="w-4 h-4 text-emerald-500" />
                Best For
              </div>
              <p className="text-sm text-slate-600">{bestFor}</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold">
                <DollarSign className="w-4 h-4 text-blue-500" />
                Typical Cost
              </div>
              <p className="text-sm text-slate-600">{cost}</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold">
                <Clock className="w-4 h-4 text-violet-500" />
                Timeline
              </div>
              <p className="text-sm text-slate-600">{timeline}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAnswerBox;