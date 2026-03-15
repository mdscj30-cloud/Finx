import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Bot, Users } from 'lucide-react';

const ServiceIndustryDescription = ({ description }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg text-slate-600"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Built for Your Industry</h2>
            <p className="leading-relaxed whitespace-pre-line">{description}</p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="grid gap-6"
          >
             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-4">
               <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                 <Bot className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-bold text-slate-900 mb-2">AI-Powered Efficiency</h3>
                 <p className="text-sm text-slate-600">Automating 90% of routine data processing specific to your sector.</p>
               </div>
             </div>
             
             <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 flex items-start gap-4">
               <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                 <Users className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-bold text-slate-900 mb-2">Human Oversight</h3>
                 <p className="text-sm text-slate-600">Expert CPAs review every transaction to ensure accuracy and context.</p>
               </div>
             </div>
             
             <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex items-start gap-4">
               <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                 <CheckCircle2 className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-bold text-slate-900 mb-2">Compliance First</h3>
                 <p className="text-sm text-slate-600">Adhering strictly to industry regulations and accounting standards.</p>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIndustryDescription;