import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users } from 'lucide-react';

const WhoIsThisFor = ({ profiles, title = "Who Is This For?" }) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4 text-emerald-600">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Our solution is optimized for specific business stages and needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{profile.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;