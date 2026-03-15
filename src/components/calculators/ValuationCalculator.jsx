import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { motion } from 'framer-motion';

const ValuationCalculator = () => {
  const [arr, setArr] = useState('');
  const [multiplier, setMultiplier] = useState([10]);

  const formatCurrency = (value) => {
    if (isNaN(value) || !isFinite(value)) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const valuation = useMemo(() => {
    const annualRevenue = parseFloat(arr) || 0;
    return annualRevenue * multiplier[0];
  }, [arr, multiplier]);

  const handleReset = () => {
    setArr('');
    setMultiplier([10]);
  };

  return (
    <div className="p-2">
      <div className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="arr">Annual Recurring Revenue (ARR) ($)</Label>
            <Input id="arr" type="number" placeholder="e.g., 1000000" value={arr} onChange={(e) => setArr(e.target.value)} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="multiplier">Industry Multiplier</Label>
              <span className="text-sm font-medium text-blue-600">{multiplier[0]}x</span>
            </div>
            <Slider
              id="multiplier"
              min={1}
              max={30}
              step={1}
              value={multiplier}
              onValueChange={setMultiplier}
            />
            <p className="text-xs text-slate-500">Adjust based on your industry, growth rate, and market conditions.</p>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-100 p-6 rounded-lg space-y-4"
        >
          <h3 className="text-lg font-semibold text-center mb-4">Your Estimated Valuation</h3>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600">
              {formatCurrency(valuation)}
            </p>
          </div>
          <p className="text-xs text-slate-500 text-center pt-2">This is a simplified pre-money valuation estimate. Valuations are complex and depend on many factors.</p>
        </motion.div>

        <Button onClick={handleReset} variant="outline" className="w-full">Reset Calculator</Button>
      </div>
    </div>
  );
};

export default ValuationCalculator;