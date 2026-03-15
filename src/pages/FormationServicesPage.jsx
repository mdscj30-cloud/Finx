import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Globe, Shield, FileText, CreditCard, Building2, HelpCircle, Star, Scale, Calculator, Receipt, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from '@/components/ui/use-toast';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const FormationCalculator = () => {
  const [businessType, setBusinessType] = useState('LLC');
  const [selectedServices, setSelectedServices] = useState(['formation', 'ein', 'agent']);
  
  const servicesList = [
    { id: 'formation', label: 'Entity Formation Filing', price: 599, required: true },
    { id: 'ein', label: 'EIN Application', price: 199 },
    { id: 'agent', label: 'Registered Agent (1 Year)', price: 299 },
    { id: 'compliance', label: 'State Compliance & BOI', price: 499 },
    { id: 'bookkeeping', label: 'AI Bookkeeping (1 Year)', price: 2400 },
    { id: 'taxes', label: 'Annual Tax Filing', price: 1000 },
  ];

  const toggleService = (id) => {
    if (id === 'formation') return; // Cannot uncheck required
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = servicesList.find(s => s.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);
  };

  const getRecommendedPlan = () => {
    const hasFinancials = selectedServices.includes('bookkeeping') || selectedServices.includes('taxes');
    const hasCompliance = selectedServices.includes('compliance');
    
    if (hasFinancials) return { name: 'Total Compliance', price: 2999 };
    if (hasCompliance) return { name: 'Essential', price: 1999 };
    return { name: 'Starter', price: 999 };
  };

  const totalCost = calculateTotal();
  const recommendedPlan = getRecommendedPlan();
  const savings = totalCost - recommendedPlan.price;

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-900 text-white p-6 md:p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">Cost Calculator</h3>
        <p className="text-slate-300">Customize your services to see your estimated costs and savings.</p>
      </div>
      
      <div className="grid md:grid-cols-2">
        {/* Left Column: Selections */}
        <div className="p-6 md:p-8 border-r border-slate-100">
          <div className="mb-8">
            <Label className="text-base font-bold text-slate-900 mb-4 block">1. Select Business Type</Label>
            <div className="flex gap-4">
              {['LLC', 'C-Corp'].map((type) => (
                <button
                  key={type}
                  onClick={() => setBusinessType(type)}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                    businessType === type
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-base font-bold text-slate-900 mb-4 block">2. Select Services Needed</Label>
            <div className="space-y-3">
              {servicesList.map((service) => (
                <div 
                  key={service.id}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                    selectedServices.includes(service.id) 
                      ? 'border-blue-200 bg-blue-50/50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => toggleService(service.id)}
                      disabled={service.required}
                      className="data-[state=checked]:bg-blue-600"
                    />
                    <label 
                      htmlFor={service.id} 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {service.label}
                      {service.required && <span className="ml-2 text-xs text-blue-600 font-bold bg-blue-100 px-2 py-0.5 rounded-full">Required</span>}
                    </label>
                  </div>
                  <span className="font-semibold text-slate-700">${service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Results */}
        <div className="bg-slate-50 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Estimated Cost Breakdown</h4>
            <div className="space-y-3 mb-8">
              <AnimatePresence>
                {selectedServices.map(serviceId => {
                  const service = servicesList.find(s => s.id === serviceId);
                  return (
                    <motion.div 
                      key={serviceId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex justify-between text-sm text-slate-600"
                    >
                      <span>{service.label}</span>
                      <span>${service.price}</span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <div className="border-t border-slate-200 pt-3 flex justify-between font-bold text-lg text-slate-900">
                <span>Total Value</span>
                <span>${totalCost.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-blue-100 shadow-sm mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Recommended Plan</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{recommendedPlan.name}</h3>
              <p className="text-slate-500 text-sm mb-4">Includes all your selected features and more.</p>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-blue-700">${recommendedPlan.price.toLocaleString()}</span>
                {savings > 0 && (
                  <span className="text-sm text-slate-400 line-through">${totalCost.toLocaleString()}</span>
                )}
              </div>
              
              {savings > 0 && (
                <div className="bg-green-100 text-green-700 text-sm font-bold px-3 py-2 rounded-lg mb-4 inline-flex items-center">
                  <Receipt className="w-4 h-4 mr-2" />
                  You save ${savings.toLocaleString()} with this bundle!
                </div>
              )}
            </div>
          </div>

          <Button 
            className="w-full h-12 text-lg font-bold btn-primary shadow-lg hover:shadow-xl transition-all"
            onClick={() => {
              toast({ title: `Selected ${recommendedPlan.name} Plan`, description: "Proceeding to checkout..." });
            }}
          >
            Get Started with {recommendedPlan.name}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const FormationServicesPage = () => {
  const [billingCycle, setBillingCycle] = useState('one-time');

  const handleStartFormation = (plan) => {
    toast({
      title: `Starting Formation: ${plan}`,
      description: "Redirecting to secure checkout...",
    });
  };

  const features = [
    {
      icon: Globe,
      title: "Global Access",
      description: "Form a US company from anywhere in the world. No US residency required. We support founders from 175+ countries."
    },
    {
      icon: FileText,
      title: "EIN & Documentation",
      description: "We handle the IRS paperwork to get your Employer Identification Number (EIN) and draft your Operating Agreement."
    },
    {
      icon: Calculator,
      title: "AI Bookkeeping",
      description: "Automate your financial record-keeping from day one. Our AI categorizes transactions and prepares audit-ready financials."
    },
    {
      icon: Receipt,
      title: "Tax Filing Included",
      description: "Don't stress about tax season. Our Total Compliance package includes annual Federal and State tax filings."
    },
    {
      icon: Shield,
      title: "Registered Agent",
      description: "We provide a registered agent address in your state of formation to receive legal documents and keep your privacy."
    },
    {
      icon: Scale,
      title: "Compliance Calendar",
      description: "Never miss a deadline. We track your Annual Reports, Franchise Tax due dates, and tax filing deadlines automatically."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "999",
      description: "The complete foundation for your new US business.",
      features: [
        "Business Formation (LLC or C-Corp)",
        "Employer Identification Number (EIN)",
        "Registered Agent (1st Year Included)",
        "Operating Agreement & Bylaws",
        "US Business Bank Account Fast-Track"
      ],
      popular: false
    },
    {
      name: "Essential",
      price: "1,999",
      description: "Ensures your business stays compliant with state and federal regulations.",
      features: [
        "Everything in Starter",
        "Annual State Compliance Filing",
        "BOI Report Filing (FinCEN)",
        "Expedited Filing Speed (2-3 Days)",
        "Dedicated Account Manager",
        "Compliance Alerts & Calendar"
      ],
      popular: true
    },
    {
      name: "Total Compliance",
      price: "2,999",
      description: "The ultimate all-in-one package: Formation, Bookkeeping, and Taxes.",
      features: [
        "Everything in Essential",
        "Full Year of AI Bookkeeping",
        "Annual Federal Tax Filing (1120/1120S)",
        "Annual State Tax Filing",
        "CPA Tax Consultation (60 mins)",
        "IRS Tax Resolution Support"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      q: "What is included in the Bookkeeping service?",
      a: "Our AI Bookkeeping service automatically connects to your business bank account, categorizes transactions, and generates monthly financial statements (Profit & Loss, Balance Sheet) so you are always ready for tax season."
    },
    {
      q: "Does the Total Compliance package cover both Federal and State taxes?",
      a: "Yes! The Total Compliance package includes preparation and filing for both your Annual Federal Income Tax Return and one State Income Tax Return."
    },
    {
      q: "Do I need to be a US resident to form a company?",
      a: "No! You can form a US company from anywhere in the world. You do not need a US visa, social security number, or residency."
    },
    {
      q: "How long does the process take?",
      a: "With our Expedited service (included in Essential & Total Compliance), we prioritize your filing, often completing formation in 2-3 business days. EIN processing for non-residents typically takes 10-14 business days."
    },
    {
      q: "Are state fees included in the price?",
      a: "No, state filing fees are separate and go directly to the state. These vary by state (e.g., Wyoming is $100, Delaware is $90+). We will calculate the exact total before you checkout."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>US Company Formation | FinxisAI</title>
        <meta name="description" content="Form your US LLC or C-Corp from anywhere in the world. Includes Bookkeeping, Tax Filing, EIN, Registered Agent, and US Bank Account support." />
      </Helmet>
      
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center" />
          <div className="container-max relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-blue-100">Now including Bookkeeping & Tax Filing</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Launch & Manage Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">US Business</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                More than just formation. We handle your EIN, Registered Agent, Bookkeeping, and Tax Filings so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })} className="h-14 px-8 text-lg bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-full">
                  Calculate Cost
                </Button>
                <Button variant="outline" className="h-14 px-8 text-lg text-white border-white/30 hover:bg-white/10 rounded-full" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                  View Packages
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-10 border-b border-slate-200 bg-white">
          <div className="container-max">
            <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8">Founders from 175+ countries trust FinxisAI</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
               <div className="text-xl font-bold font-display">TechStart</div>
               <div className="text-xl font-bold font-display">GlobalVentures</div>
               <div className="text-xl font-bold font-display">IndieMaker</div>
               <div className="text-xl font-bold font-display">SaaS Collective</div>
               <div className="text-xl font-bold font-display">NomadList</div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="section-padding bg-white relative z-20">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Build Your Plan</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Select exactly what you need, and we'll recommend the best package for you.
              </p>
            </div>
            <FormationCalculator />
          </div>
        </section>

        {/* New Service Section: Bookkeeping */}
        <section className="section-padding bg-slate-50 overflow-hidden">
          <div className="container-max">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <img alt="Dashboard showing financial metrics and bookkeeping data" className="rounded-2xl shadow-2xl border border-slate-200" src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  New Service Included
                </div>
                <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
                  Automated Bookkeeping from Day One
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Most founders struggle with keeping their books in order after formation. We solve that. Our "Total Compliance" package includes a full year of AI-powered bookkeeping.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Automatic bank transaction import & categorization",
                    "Monthly Profit & Loss and Balance Sheet generation",
                    "Receipt capture and expense management",
                    "Seamless handoff to tax preparation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="btn-primary" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                  Get Total Compliance
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Complete Business Management</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Navigating US bureaucracy is complex. We make it simple, fast, and fully compliant—from formation to tax season.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-slate-900 text-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Transparent Formation Pricing</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Choose the package that fits your stage. From basic registration to complete financial peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-2xl border flex flex-col ${
                    plan.popular 
                      ? 'bg-slate-800 border-blue-500 shadow-2xl scale-105 z-10' 
                      : 'bg-slate-900/50 border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Best Value
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-slate-400 text-sm h-12">{plan.description}</p>
                  </div>
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-slate-400 text-sm">+ State Fees</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-green-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => handleStartFormation(plan.name)}
                    className={`w-full py-6 rounded-xl font-bold mt-auto ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-white text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Entity Comparison */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Comparison: LLC vs. C-Corp</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="text-left py-4 px-6 text-slate-500 font-medium w-1/4">Feature</th>
                    <th className="text-left py-4 px-6 text-blue-900 font-bold text-xl w-1/3">LLC</th>
                    <th className="text-left py-4 px-6 text-indigo-900 font-bold text-xl w-1/3">C-Corporation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-4 px-6 font-medium text-slate-700">Best For</td>
                    <td className="py-4 px-6 text-slate-600">Small businesses, lifestyle businesses, e-commerce</td>
                    <td className="py-4 px-6 text-slate-600">Startups raising venture capital, issuing stock</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-slate-700">Taxation</td>
                    <td className="py-4 px-6 text-slate-600">Pass-through (taxed at individual level)</td>
                    <td className="py-4 px-6 text-slate-600">Double taxation (Corporate tax + Dividend tax)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-slate-700">Bookkeeping Needs</td>
                    <td className="py-4 px-6 text-slate-600">Standard (Income/Expense tracking required)</td>
                    <td className="py-4 px-6 text-slate-600">Complex (Strict GAAP standards often required)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-slate-700">Tax Filing</td>
                    <td className="py-4 px-6 text-slate-600">Form 1065 (Partnership) or Schedule C</td>
                    <td className="py-4 px-6 text-slate-600">Form 1120 (Corporate Tax Return)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-max max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg mb-4 px-4 shadow-sm">
                  <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container-max text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Ready to make it official?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of founders who started their US business with FinxisAI. Fast, secure, and fully compliant.
            </p>
            <Button onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })} className="h-14 px-10 text-lg bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-full shadow-lg">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FormationServicesPage;