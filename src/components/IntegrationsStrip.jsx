import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { name: 'QuickBooks', color: 'text-green-600', bg: 'bg-green-50', letter: 'QB' },
  { name: 'Xero', color: 'text-sky-600', bg: 'bg-sky-50', letter: 'X' },
  { name: 'Stripe', color: 'text-violet-600', bg: 'bg-violet-50', letter: 'S' },
  { name: 'Plaid', color: 'text-blue-600', bg: 'bg-blue-50', letter: 'P' },
  { name: 'Gusto', color: 'text-rose-600', bg: 'bg-rose-50', letter: 'G' },
  { name: 'FreshBooks', color: 'text-emerald-600', bg: 'bg-emerald-50', letter: 'FB' },
  { name: 'Bill.com', color: 'text-orange-600', bg: 'bg-orange-50', letter: 'B' },
  { name: 'Shopify', color: 'text-lime-600', bg: 'bg-lime-50', letter: 'Sh' },
];

const IntegrationsStrip = () => {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-100">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
            Connects with the tools you already use
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all cursor-default"
            >
              <div className={`w-8 h-8 rounded-lg ${integration.bg} flex items-center justify-center`}>
                <span className={`text-xs font-bold ${integration.color}`}>{integration.letter}</span>
              </div>
              <span className="text-sm font-semibold text-slate-700">{integration.name}</span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: integrations.length * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-white border border-dashed border-slate-300 rounded-xl px-5 py-3 text-sm font-medium text-slate-400"
          >
            + 50 more
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsStrip;
