import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EXPENSE_TIERS = [
  { max: 25000, hoursSaved: 8, costReduction: 0.55 },
  { max: 75000, hoursSaved: 15, costReduction: 0.58 },
  { max: 200000, hoursSaved: 25, costReduction: 0.61 },
  { max: 500000, hoursSaved: 40, costReduction: 0.64 },
  { max: Infinity, hoursSaved: 60, costReduction: 0.68 },
];

const SLIDER_STEPS = [5000, 15000, 50000, 100000, 250000, 500000, 1000000];

function formatCurrency(n) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${Math.round(n / 1000)}K`;
  return `$${n}`;
}

const ROICalculator = () => {
  const [sliderIndex, setSliderIndex] = useState(2); // default $50K

  const monthlyExpenses = SLIDER_STEPS[sliderIndex];

  const { hoursSaved, annualSavings, roiMultiple } = useMemo(() => {
    const tier = EXPENSE_TIERS.find(t => monthlyExpenses <= t.max);
    const hoursSaved = tier.hoursSaved;
    // Conservative bookkeeper cost: $35/hr
    const currentMonthlyCost = hoursSaved * 35 * 4.33;
    const annualSavings = Math.round(currentMonthlyCost * 12 * tier.costReduction);
    // Rough FinxisAI cost based on tier
    const finxisCost = monthlyExpenses <= 50000 ? 299 : monthlyExpenses <= 200000 ? 599 : 1200;
    const roiMultiple = Math.round(annualSavings / (finxisCost * 12));
    return { hoursSaved, annualSavings, roiMultiple };
  }, [monthlyExpenses]);

  return (
    <section id="roi-calculator" className="section-padding bg-gradient-to-br from-slate-900 to-indigo-950 text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-white/10 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ROI Calculator
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            See Your Potential Savings
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Drag the slider to your monthly expenses and see how much time and money FinxisAI saves you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10"
          >
            {/* Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-slate-300">Monthly Business Expenses</label>
                <span className="text-2xl font-display font-bold text-white">{formatCurrency(monthlyExpenses)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={SLIDER_STEPS.length - 1}
                step={1}
                value={sliderIndex}
                onChange={e => setSliderIndex(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-500 bg-white/20"
              />
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>$5K</span>
                <span>$250K</span>
                <span>$1M+</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  label: 'Hours Saved / Week',
                  value: `${hoursSaved}+`,
                  sub: 'in manual bookkeeping',
                  color: 'text-blue-400',
                  bg: 'bg-blue-500/10',
                },
                {
                  icon: DollarSign,
                  label: 'Annual Cost Savings',
                  value: formatCurrency(annualSavings),
                  sub: 'vs. traditional bookkeeper',
                  color: 'text-emerald-400',
                  bg: 'bg-emerald-500/10',
                },
                {
                  icon: TrendingUp,
                  label: 'Return on Investment',
                  value: `${roiMultiple}x`,
                  sub: 'average ROI in year one',
                  color: 'text-violet-400',
                  bg: 'bg-violet-500/10',
                },
              ].map(({ icon: Icon, label, value, sub, color, bg }) => (
                <motion.div
                  key={label}
                  layout
                  className={`rounded-xl p-6 ${bg} border border-white/5 text-center`}
                >
                  <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div className={`text-3xl font-display font-bold ${color} mb-1`}>{value}</div>
                  <div className="text-sm font-semibold text-white mb-1">{label}</div>
                  <div className="text-xs text-slate-500">{sub}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 group">
                <Link to="/onboarding">
                  Start Saving Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <p className="text-xs text-slate-500 mt-3">14-day free trial · No credit card required</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
