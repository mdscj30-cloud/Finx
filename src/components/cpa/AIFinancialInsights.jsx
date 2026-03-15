import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DollarSign, TrendingDown, Zap, FileWarning, Search, Lightbulb, CheckCircle, AlertCircle, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAIChat } from '@/contexts/AIChatContext';

const insightIcons = {
  "Cash Flow": <TrendingDown className="h-5 w-5 text-orange-500" />,
  "Expense": <DollarSign className="h-5 w-5 text-red-500" />,
  "Revenue": <Zap className="h-5 w-5 text-green-500" />,
  "Receivables": <AlertCircle className="h-5 w-5 text-yellow-500" />,
  "Tax": <FileWarning className="h-5 w-5 text-blue-500" />,
  "Profitability": <TrendingDown className="h-5 w-5 text-purple-500" />,
  "Bookkeeping": <Search className="h-5 w-5 text-gray-500" />,
};

const insightTags = {
  "Urgent": "bg-red-100 text-red-800 border-red-200",
  "New": "bg-blue-100 text-blue-800 border-blue-200",
  "Opportunity": "bg-green-100 text-green-800 border-green-200",
};

const mockInsights = [
  {
    id: 1,
    title: "Burn Rate Alert",
    category: "Cash Flow",
    tag: "Urgent",
    description: "Client may run out of cash in 4.2 months at the current burn rate.",
    recommendation: "Reduce vendor payments, slow hiring, and accelerate invoicing.",
    benefit: "Extends cash runway by an estimated 2 months.",
  },
  {
    id: 2,
    title: "Expense Optimization",
    category: "Expense",
    tag: "New",
    description: "₹12,000/month is being spent on duplicate SaaS subscriptions (Project Mgmt tools).",
    recommendation: "Consolidate on a single platform and cancel overlapping subscriptions.",
    benefit: "Potential monthly savings: ₹12,000",
  },
  {
    id: 3,
    title: "Revenue Opportunity",
    category: "Revenue",
    tag: "Opportunity",
    description: "Recurring revenue from 'Innovate Inc.' has dropped 18% in the last 3 months.",
    recommendation: "Contact the client to discuss their needs and explore potential churn causes.",
    benefit: "Potential to recover ₹35,000 in ARR.",
  },
  {
    id: 4,
    title: "Accounts Receivable Red Flag",
    category: "Receivables",
    tag: "Urgent",
    description: "Over 65% of invoices are overdue by more than 45 days.",
    recommendation: "Implement automated payment reminders and offer early payment incentives.",
    benefit: "Improves cash flow by an estimated 30%.",
  },
  {
    id: 5,
    title: "Tax Prep Warning",
    category: "Tax",
    tag: "New",
    description: "No expense categorization found for ₹2.1L in transactions — potential audit risk.",
    recommendation: "Categorize all uncategorized transactions before tax filing deadline.",
    benefit: "Reduces audit risk and ensures accurate filing.",
  },
];

const AIFinancialInsights = () => {
  const { setIsAIChatOpen } = useAIChat();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-sm border w-full"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-slate-800">AI-Powered Financial Insights</h3>
        <Button variant="ghost" size="sm" onClick={() => setIsAIChatOpen(true)}>
          <Bot className="w-4 h-4 mr-2" />
          Ask AI
        </Button>
      </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        {mockInsights.map((insight) => (
          <AccordionItem value={`item-${insight.id}`} key={insight.id}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                {insightIcons[insight.category]}
                <span className="font-semibold text-slate-700">{insight.title}</span>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-md border ${insightTags[insight.tag]}`}>
                  {insight.tag}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 space-y-3">
              <p className="text-sm text-slate-600">{insight.description}</p>
              <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                <Lightbulb className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-blue-800">AI Recommendation</p>
                  <p className="text-sm text-blue-700">{insight.recommendation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-green-50/50 p-3 rounded-lg border border-green-100">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-green-800">Estimated Benefit</p>
                  <p className="text-sm text-green-700">{insight.benefit}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default AIFinancialInsights;