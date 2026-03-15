import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Calculator, FileText, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BurnRateCalculator from '@/components/calculators/BurnRateCalculator';
import RDTaxCreditCalculator from '@/components/calculators/RDTaxCreditCalculator';
import ValuationCalculator from '@/components/calculators/ValuationCalculator';

const CPAViewModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-slate-50 rounded-2xl w-full max-w-4xl h-[90vh] max-h-[800px] flex flex-col shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-between p-4 border-b bg-white rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white">
                  <Calculator size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">CPA Toolkit</h2>
                  <p className="text-sm text-slate-500">Financial calculators and quick tools.</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </header>
            <div className="flex-grow p-6 overflow-y-auto">
              <Tabs defaultValue="burn-rate" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="burn-rate">Burn Rate</TabsTrigger>
                  <TabsTrigger value="rd-tax">R&D Tax Credit</TabsTrigger>
                  <TabsTrigger value="valuation">Valuation</TabsTrigger>
                </TabsList>
                <TabsContent value="burn-rate">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold mb-4">Burn Rate & Runway Calculator</h3>
                    <BurnRateCalculator />
                  </div>
                </TabsContent>
                <TabsContent value="rd-tax">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold mb-4">R&D Tax Credit Estimator</h3>
                    <RDTaxCreditCalculator />
                  </div>
                </TabsContent>
                <TabsContent value="valuation">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold mb-4">Business Valuation Estimator</h3>
                    <ValuationCalculator />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CPAViewModal;