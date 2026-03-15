import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, ShoppingCart, Plane, Wrench } from 'lucide-react';

const transactions = [
  { icon: ShoppingCart, description: 'Stripe Subscription', amount: '-$49.00', type: 'expense', color: 'bg-red-100 text-red-600' },
  { icon: ArrowDownLeft, description: 'Client Payment INV-004', amount: '+$2,500.00', type: 'income', color: 'bg-green-100 text-green-600' },
  { icon: Plane, description: 'Flight to SFO', amount: '-$450.20', type: 'expense', color: 'bg-red-100 text-red-600' },
  { icon: Wrench, description: 'QuickBooks Online', amount: '-$30.00', type: 'expense', color: 'bg-red-100 text-red-600' },
];

const TransactionsPanel = () => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-2xl shadow-sm border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="font-bold text-lg mb-4 text-slate-800">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.color}`}>
                <tx.icon size={18} />
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-700">{tx.description}</p>
                <p className="text-xs text-slate-500">{tx.type === 'income' ? 'Income' : 'Expense'}</p>
              </div>
            </div>
            <p className={`font-semibold text-sm ${tx.type === 'income' ? 'text-green-600' : 'text-slate-800'}`}>
              {tx.amount}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TransactionsPanel;