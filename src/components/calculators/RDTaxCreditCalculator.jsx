import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const RDTaxCreditCalculator = () => {
  const [employeeCosts, setEmployeeCosts] = useState('');
  const [subcontractorCosts, setSubcontractorCosts] = useState('');
  const [softwareCosts, setSoftwareCosts] = useState('');

  const formatCurrency = (value) => {
    if (isNaN(value) || !isFinite(value)) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const { totalQRE, estimatedCredit } = useMemo(() => {
    const empCosts = parseFloat(employeeCosts) || 0;
    const subCosts = parseFloat(subcontractorCosts) || 0;
    const swCosts = parseFloat(softwareCosts) || 0;

    const totalQRE = empCosts + subCosts + swCosts;
    const estimatedCredit = totalQRE * 0.10; // Simplified 10% estimate

    return { totalQRE, estimatedCredit };
  }, [employeeCosts, subcontractorCosts, softwareCosts]);

  const handleReset = () => {
    setEmployeeCosts('');
    setSubcontractorCosts('');
    setSoftwareCosts('');
  };

  return (
    <div className="p-2">
      <div className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="employee-costs">Qualifying Employee Costs ($)</Label>
            <Input id="employee-costs" type="number" placeholder="e.g., 250000" value={employeeCosts} onChange={(e) => setEmployeeCosts(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subcontractor-costs">Qualifying Subcontractor Costs ($)</Label>
            <Input id="subcontractor-costs" type="number" placeholder="e.g., 50000" value={subcontractorCosts} onChange={(e) => setSubcontractorCosts(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="software-costs">Qualifying Software Costs ($)</Label>
            <Input id="software-costs" type="number" placeholder="e.g., 20000" value={softwareCosts} onChange={(e) => setSoftwareCosts(e.target.value)} />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-100 p-6 rounded-lg space-y-4"
        >
          <h3 className="text-lg font-semibold text-center mb-4">Your Estimated R&D Tax Credit</h3>
          <div className="text-center">
            <p className="text-sm text-slate-500">Total Qualifying R&D Expenditure (QRE)</p>
            <p className="text-2xl font-bold text-slate-700">{formatCurrency(totalQRE)}</p>
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-slate-500">Estimated Tax Credit (approx. 10%)</p>
            <p className="text-4xl font-bold text-green-600">
              {formatCurrency(estimatedCredit)}
            </p>
          </div>
          <p className="text-xs text-slate-500 text-center pt-2">This is an estimate for informational purposes only. Consult with a tax professional for an accurate calculation.</p>
        </motion.div>

        <Button onClick={handleReset} variant="outline" className="w-full">Reset Calculator</Button>
      </div>
    </div>
  );
};

export default RDTaxCreditCalculator;