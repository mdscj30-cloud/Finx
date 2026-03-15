import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI-powered bookkeeping.',
    cta: 'Start Free Trial',
    ctaPath: '/onboarding',
    highlighted: false,
    features: [
      'Up to $50K monthly expenses',
      'AI-powered bookkeeping',
      'Monthly financial reports',
      'Document OCR & storage',
      'Real-time dashboard',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$599',
    period: '/month',
    description: 'For scaling businesses that need deeper insights and CPA collaboration.',
    cta: 'Get Started',
    ctaPath: '/onboarding',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Up to $500K monthly expenses',
      'Everything in Starter',
      'Tax advisory assistant',
      'Virtual CFO reporting',
      'CPA-client portal access',
      'QuickBooks integration',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'White-label solutions for CPA firms managing multiple clients.',
    cta: 'Contact Sales',
    ctaPath: '/contact',
    highlighted: false,
    features: [
      'Unlimited monthly expenses',
      'Everything in Growth',
      'White-label CPA portal',
      'Multi-client management',
      'Dedicated account manager',
      'Custom integrations & API',
      'SLA & compliance support',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Pricing That <span className="gradient-text">Scales With You</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Simple, transparent pricing based on your monthly expenses. No hidden fees, no surprises. Start free, scale as you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-2xl p-8 border ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-transparent shadow-2xl scale-105'
                  : 'bg-white text-slate-900 border-slate-200 shadow-lg'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-display font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm mb-2 ${plan.highlighted ? 'text-blue-200' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 flex-grow mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-blue-200' : 'text-blue-600'}`} />
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-slate-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full group ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'btn-primary'
                }`}
              >
                <Link to={plan.ctaPath}>
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 mt-10"
        >
          All plans include a 14-day free trial. No credit card required.{' '}
          <Link to="/pricing" className="text-blue-600 hover:underline font-medium">
            See full plan comparison →
          </Link>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
