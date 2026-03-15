import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart, Briefcase } from 'lucide-react';

const subscriptions = [
  { icon: Zap, name: 'Stripe', amount: '$49/mo', category: 'Payments' },
  { icon: BarChart, name: 'Google Analytics', amount: 'Free', category: 'Analytics' },
  { icon: Briefcase, name: 'QuickBooks', amount: '$30/mo', category: 'Accounting' },
  { icon: Zap, name: 'Framer', amount: '$25/mo', category: 'Design' },
];

const SubscriptionSpending = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-sm border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <h3 className="font-bold text-lg mb-4 text-slate-800">Subscription Spending</h3>
      <div className="space-y-4">
        {subscriptions.map((sub, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <sub.icon className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-700">{sub.name}</p>
                <p className="text-xs text-slate-500">{sub.category}</p>
              </div>
            </div>
            <p className="font-semibold text-sm text-slate-800">{sub.amount}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SubscriptionSpending;