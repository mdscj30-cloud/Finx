import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const plans = [
  {
    name: 'Essentials',
    price: '499',
    description: 'For growing firms that need core automation and client management tools.',
    features: [
      'Financial Dashboards',
      'Document AI (up to 500 docs/mo)',
      'Basic Client Portal',
      'Standard Support',
    ],
    isPopular: false,
  },
  {
    name: 'Professional',
    price: '999',
    description: 'For established firms looking for advanced AI and collaboration features.',
    features: [
      'Everything in Essentials',
      'Advanced AI Insights',
      'Document AI (up to 2000 docs/mo)',
      'Full-featured Client Portal',
      'Tax Assistant Module',
      'Priority Support',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large firms requiring bespoke solutions and dedicated support.',
    features: [
      'Everything in Professional',
      'Custom AI Model Training',
      'Unlimited Document AI',
      'White-labeled Client Portal',
      'Dedicated Account Manager',
      'API Access & Integrations',
    ],
    isPopular: false,
  },
];

const PlanCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative flex flex-col p-8 rounded-2xl shadow-lg border ${plan.isPopular ? 'bg-blue-600 text-white border-blue-700' : 'bg-white'}`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-blue-200">
          <Star className="w-4 h-4" />
          Most Popular
        </div>
      </div>
    )}
    <h3 className={`text-2xl font-bold ${plan.isPopular ? '' : 'text-slate-800'}`}>{plan.name}</h3>
    <p className={`mt-2 flex-grow ${plan.isPopular ? 'text-blue-200' : 'text-slate-500'}`}>{plan.description}</p>
    <div className="mt-6">
      {plan.price === 'Custom' ? (
        <p className="text-4xl font-bold">Custom</p>
      ) : (
        <p className="text-5xl font-bold">
          ${plan.price}<span className={`text-lg font-medium ${plan.isPopular ? 'text-blue-200' : 'text-slate-500'}`}>/mo</span>
        </p>
      )}
    </div>
    <ul className="mt-8 space-y-4">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-blue-600'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto pt-8">
      <Button
        onClick={() => toast({ title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀' })}
        size="lg"
        className={`w-full ${plan.isPopular ? 'bg-white text-blue-600 hover:bg-blue-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        {plan.price === 'Custom' ? 'Contact Sales' : 'Upgrade Plan'}
      </Button>
    </div>
  </motion.div>
);

const CpaBuyProductsPage = () => {
  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Buy Products - FinxisAI</title>
      </Helmet>
      <div className="p-6 lg:p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">Upgrade Your Firm's Capabilities</h1>
          <p className="text-slate-500 mt-2 max-w-2xl mx-auto">Choose a plan that scales with your needs and unlocks powerful new features for your team and clients.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CpaBuyProductsPage;