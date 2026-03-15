import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const BurnRateCalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [cashBalance, setCashBalance] = useState('');

  const formatCurrency = (value) => {
    if (isNaN(value) || !isFinite(value)) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const { netBurn, grossBurn, runway } = useMemo(() => {
    const revenue = parseFloat(monthlyRevenue) || 0;
    const expenses = parseFloat(monthlyExpenses) || 0;
    const balance = parseFloat(cashBalance) || 0;

    const grossBurn = expenses;
    const netBurn = expenses - revenue;
    const runway = netBurn > 0 ? balance / netBurn : Infinity;

    return { netBurn, grossBurn, runway };
  }, [monthlyRevenue, monthlyExpenses, cashBalance]);

  const handleReset = () => {
    setMonthlyRevenue('');
    setMonthlyExpenses('');
    setCashBalance('');
  };

  return (
    <div className="p-2">
      <div className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="cash-balance">Current Cash Balance ($)</Label>
            <Input id="cash-balance" type="number" placeholder="e.g., 500000" value={cashBalance} onChange={(e) => setCashBalance(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthly-revenue">Average Monthly Revenue ($)</Label>
            <Input id="monthly-revenue" type="number" placeholder="e.g., 50000" value={monthlyRevenue} onChange={(e) => setMonthlyRevenue(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthly-expenses">Average Monthly Expenses ($)</Label>
            <Input id="monthly-expenses" type="number" placeholder="e.g., 75000" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-100 p-6 rounded-lg space-y-4"
        >
          <h3 className="text-lg font-semibold text-center mb-4">Your Results</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm text-slate-500">Gross Burn</p>
              <p className="text-2xl font-bold text-red-500">{formatCurrency(grossBurn)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Net Burn</p>
              <p className={`text-2xl font-bold ${netBurn > 0 ? 'text-red-500' : 'text-green-500'}`}>{formatCurrency(netBurn)}</p>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-slate-500">Cash Runway</p>
            <p className="text-4xl font-bold text-blue-600">
              {isFinite(runway) ? `${runway.toFixed(1)} months` : 'Infinite ✨'}
            </p>
          </div>
        </motion.div>

        <Button onClick={handleReset} variant="outline" className="w-full">Reset Calculator</Button>
      </div>
    </div>
  );
};

export default BurnRateCalculator;