import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const DashboardMetricCard = ({ icon: Icon, title, value, change, trend, color, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80"
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <Icon className={`w-5 h-5 ${color || 'text-slate-400'}`} />
      </div>
      <p className="text-4xl font-bold text-slate-800 mb-1">{value}</p>
      <div className="flex items-center text-sm">
        {change && (
          <span className={`flex items-center font-semibold ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {change}
          </span>
        )}
        {description && <span className="text-slate-400 ml-2">{description}</span>}
      </div>
    </motion.div>
  );
};

export default DashboardMetricCard;