import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, PieChart, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const RevenueShareCalculator = () => {
  const [clients, setClients] = useState(50);
  const [pricePerClient, setPricePerClient] = useState(1500);
  const [revenueShare, setRevenueShare] = useState(30);

  const [totalRevenue, setTotalRevenue] = useState(0);
  const [partnerMonthly, setPartnerMonthly] = useState(0);
  const [partnerAnnual, setPartnerAnnual] = useState(0);

  useEffect(() => {
    const monthlyTotal = clients * pricePerClient;
    const monthlyShare = monthlyTotal * (revenueShare / 100);
    const annualShare = monthlyShare * 12;

    setTotalRevenue(monthlyTotal);
    setPartnerMonthly(monthlyShare);
    setPartnerAnnual(annualShare);
  }, [clients, pricePerClient, revenueShare]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <Card className="w-full bg-white shadow-xl border-slate-200 overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6">
        <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
          <DollarSign className="w-6 h-6 mr-2 text-green-600" />
          Revenue Share Calculator
        </CardTitle>
        <p className="text-slate-500">Estimate your potential earnings with our partnership model.</p>
      </CardHeader>
      <CardContent className="p-8 grid lg:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-700 flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-500" /> Number of Clients
              </label>
              <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">{clients}</span>
            </div>
            <Slider 
              value={[clients]} 
              onValueChange={(val) => setClients(val[0])} 
              min={10} 
              max={500} 
              step={5} 
              className="py-4"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>10</span>
              <span>250</span>
              <span>500</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-700 flex items-center">
                <DollarSign className="w-4 h-4 mr-2 text-green-500" /> Avg. Monthly Price / Client
              </label>
              <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">{formatCurrency(pricePerClient)}</span>
            </div>
            <Slider 
              value={[pricePerClient]} 
              onValueChange={(val) => setPricePerClient(val[0])} 
              min={500} 
              max={5000} 
              step={100} 
              className="py-4"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>$500</span>
              <span>$2,750</span>
              <span>$5,000</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-700 flex items-center">
                <PieChart className="w-4 h-4 mr-2 text-purple-500" /> Revenue Share %
              </label>
              <span className="text-purple-600 font-bold bg-purple-50 px-3 py-1 rounded-full">{revenueShare}%</span>
            </div>
            <Slider 
              value={[revenueShare]} 
              onValueChange={(val) => setRevenueShare(val[0])} 
              min={30} 
              max={40} 
              step={1} 
              className="py-4"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>30% (Starter)</span>
              <span>40% (Enterprise)</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 p-24 bg-purple-500/10 rounded-full blur-3xl -ml-12 -mb-12"></div>
          
          <div className="relative z-10 space-y-2">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Total Monthly Revenue Generated</p>
            <p className="text-3xl font-bold text-white">{formatCurrency(totalRevenue)}</p>
          </div>

          <div className="relative z-10 pt-6 border-t border-slate-700 space-y-2">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <p className="text-green-400 text-sm font-bold uppercase tracking-wider">Your Monthly Share</p>
            </div>
            <motion.p 
              key={partnerMonthly}
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl lg:text-5xl font-display font-bold text-white"
            >
              {formatCurrency(partnerMonthly)}
            </motion.p>
          </div>

          <div className="relative z-10 pt-2 space-y-1">
             <p className="text-slate-400 text-sm">Projected Annual Recurring Revenue (ARR)</p>
             <p className="text-2xl font-bold text-blue-300">{formatCurrency(partnerAnnual)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueShareCalculator;