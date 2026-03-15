import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Calendar } from 'lucide-react';

const payrollData = {
  totalPayroll: '$62,500',
  employees: 15,
  nextRun: 'Oct 31, 2025',
};

const PayrollOverview = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-sm border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <h3 className="font-bold text-lg mb-4 text-slate-800">Payroll Overview</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <DollarSign size={20} />
            </div>
            <p className="font-semibold text-sm text-slate-700">Total Payroll (this month)</p>
          </div>
          <p className="font-bold text-lg text-slate-800">{payrollData.totalPayroll}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <Users size={20} />
            </div>
            <p className="font-semibold text-sm text-slate-700">Active Employees</p>
          </div>
          <p className="font-bold text-lg text-slate-800">{payrollData.employees}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <Calendar size={20} />
            </div>
            <p className="font-semibold text-sm text-slate-700">Next Payroll Run</p>
          </div>
          <p className="font-semibold text-sm text-slate-800">{payrollData.nextRun}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PayrollOverview;