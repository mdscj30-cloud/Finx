import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, BrainCircuit, Briefcase, Plus, Minus, TrendingUp, Target, Zap, ShieldCheck, Scale, Bot, Link, UserCheck, FileText, Building, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from 'react-router-dom';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seoHelpers';

const FaqItem = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-slate-200 py-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <button 
      onClick={onClick} 
      className="w-full flex justify-between items-center text-left"
      aria-expanded={isOpen}
    >
      <span className="font-semibold text-slate-800" itemProp="name">{q}</span>
      {isOpen ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-slate-400" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
          exit={{ height: 0, opacity: 0, marginTop: 0 }}
          transition={{ duration: 0.3 }}
          itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
        >
          <p className="text-slate-600 leading-relaxed" itemProp="text">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const AddonCard = ({ icon: Icon, title, description, price, onSelect }) => (
  <article className="bg-white p-6 rounded-xl shadow-md border flex flex-col">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 rounded-lg mr-4">
        <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    </div>
    <p className="text-slate-600 text-sm mb-4 flex-grow">{description}</p>
    <div className="flex items-center justify-between mt-auto">
      <p className="text-2xl font-bold gradient-text">{price}</p>
      <Button size="sm" variant="outline" onClick={onSelect} aria-label={`Add ${title}`}>Add</Button>
    </div>
  </article>
);

const PricingPage = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('annually');
  const [monthlyExpenses, setMonthlyExpenses] = useState(25000);
  const [openFaq, setOpenFaq] = useState(null);

  const handleGetDemo = (planName) => {
    toast({
      title: `Get a Demo for ${planName}`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  
  const handleAddonSelect = (addonName) => {
    toast({
      title: `${addonName} Added`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const calculatePrice = (base, expenseFactor) => {
    const annualPrice = base + (monthlyExpenses / 1000) * expenseFactor;
    const monthlyPrice = annualPrice * 1.1;
    return billingCycle === 'annually' ? Math.round(annualPrice) : Math.round(monthlyPrice);
  };

  const bookkeepingPlans = {
    core: {
      name: 'Core',
      price: calculatePrice(300, 5),
      description: 'Essential bookkeeping and tax-ready financials for startups.',
      features: ['Daily AI Bookkeeping', 'Accrual Basis Accounting', 'Dedicated Bookkeeper', 'Financial Reporting'],
    },
    select: {
      name: 'Select',
      price: calculatePrice(500, 8),
      description: 'Advanced features for growing businesses that need more.',
      features: ['Everything in Core', 'Real-time KPI Dashboards', 'Revenue Recognition', 'Multi-currency Support'],
    },
  };

  const cfoModules = [
    { id: 'strategic', name: 'Strategic Planning & FP&A', price: 750 },
    { id: 'fundraising', name: 'Fundraising Support', price: 1200 },
    { id: 'reporting', name: 'Board & Investor Reporting', price: 500 },
    { id: 'metrics', name: 'SaaS Metrics & Cohort Analysis', price: 600 },
    { id: 'cashflow', name: 'Advanced Cash Flow Management', price: 400 },
  ];

  const [selectedCfoModules, setSelectedCfoModules] = useState([]);

  const handleCfoModuleChange = (moduleId) => {
    setSelectedCfoModules(prev => 
      prev.includes(moduleId) ? prev.filter(id => id !== moduleId) : [...prev, moduleId]
    );
  };

  const totalCfoPrice = useMemo(() => {
    return selectedCfoModules.reduce((total, moduleId) => {
      const module = cfoModules.find(m => m.id === moduleId);
      return total + (module ? module.price : 0);
    }, 0);
  }, [selectedCfoModules]);

  const PlanCompare = () => {
    const features = [
      { feature: 'Dedicated Finance Team', core: true, select: true, enterprise: true },
      { feature: 'Daily AI Bookkeeping', core: true, select: true, enterprise: true },
      { feature: 'Accrual Basis Accounting', core: true, select: true, enterprise: true },
      { feature: 'Financial Reporting', core: true, select: true, enterprise: true },
      { feature: 'Real-time KPI Dashboards', core: false, select: true, enterprise: true },
      { feature: 'Revenue Recognition', core: false, select: true, enterprise: true },
      { feature: 'Multi-currency Support', core: false, select: true, enterprise: true },
      { feature: 'Custom Integrations', core: false, select: false, enterprise: true },
      { feature: 'Multi-Entity Support', core: false, select: false, enterprise: true },
      { feature: 'Dedicated Controller', core: false, select: false, enterprise: true },
    ];

    return (
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center mb-8">Compare Plans</h3>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border p-6">
          <div className="grid grid-cols-4 gap-4 font-bold text-center border-b pb-4 mb-4">
            <div className="text-left">Feature</div>
            <div>Core</div>
            <div>Select</div>
            <div>Enterprise</div>
          </div>
          {features.map((item, index) => (
            <div key={index} className={`grid grid-cols-4 gap-4 text-center py-3 ${index % 2 === 0 ? 'bg-slate-50' : ''} rounded-md`}>
              <div className="text-left font-medium text-slate-700">{item.feature}</div>
              <div>{item.core ? <Check className="w-5 h-5 text-green-500 mx-auto" aria-label="Included" /> : <span className="text-slate-400" aria-label="Not included">-</span>}</div>
              <div>{item.select ? <Check className="w-5 h-5 text-green-500 mx-auto" aria-label="Included" /> : <span className="text-slate-400" aria-label="Not included">-</span>}</div>
              <div>{item.enterprise ? <Check className="w-5 h-5 text-green-500 mx-auto" aria-label="Included" /> : <span className="text-slate-400" aria-label="Not included">-</span>}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const includedFeatures = [
    { icon: Bot, title: 'AI-Powered Automation', description: 'Our core AI engine automates over 90% of your bookkeeping tasks.' },
    { icon: ShieldCheck, title: 'Bank-Grade Security', description: 'SOC 2 Type II compliance and 256-bit encryption to keep your data safe.' },
    { icon: Link, title: 'Seamless Integrations', description: 'Connect with your existing accounting software, banks, and payment processors.' },
    { icon: UserCheck, title: 'Dedicated Support', description: 'Access to our team of finance professionals and support specialists.' },
  ];

  const howItWorksSteps = [
    { number: '01', title: 'Choose Your Plan', description: 'Select the service level that fits your business needs.' },
    { number: '02', title: 'Connect Your Accounts', description: 'Securely link your bank accounts and financial software in minutes.' },
    { number: '03', title: 'Get Real-time Insights', description: 'Our AI gets to work, providing you with actionable financial data from day one.' },
  ];
  
  const addOnServices = [
    { icon: Building, title: 'Company Formation', description: 'Launch your US business with an LLC or C Corp. Includes EIN & all state filings.', price: '$999', onSelect: () => handleAddonSelect('Company Formation') },
    { icon: Shield, title: 'Registered Agent', description: 'Satisfy legal requirements with a registered agent in your state of formation.', price: '$199/yr', onSelect: () => handleAddonSelect('Registered Agent') },
    { icon: FileText, title: 'Annual Compliance', description: 'We handle your annual state compliance filings to keep your business in good standing.', price: '$299/yr', onSelect: () => handleAddonSelect('Annual Compliance') },
    { icon: Zap, title: 'Bookkeeping Catch-up', description: 'Need to get your books in order? We can clean up and organize your past financials.', price: 'Custom', onSelect: () => handleAddonSelect('Bookkeeping Catch-up') },
  ];

  const bookkeepingFaqs = [
    { q: "What does 'monthly expenses' include?", a: "It includes all money out from your bank accounts, such as payroll, vendor payments, and other operating costs. It does not include transfers between your own accounts." },
    { q: "Can I change my plan later?", a: "Absolutely! You can upgrade or downgrade your plan at any time. Your billing will be prorated accordingly." },
    { q: "What accounting software do you integrate with?", a: "We seamlessly integrate with QuickBooks Online, Xero, and Sage. We can also connect to hundreds of other apps via our integration partners." }
  ];

  const taxFaqs = [
    { q: "Is FinxisAI a replacement for my CPA?", a: "FinxisAI is a powerful tool that can automate much of the tax preparation process. We recommend working with a qualified CPA to file your taxes, and our platform makes collaboration with them seamless." },
    { q: "What's the difference between Compliance and Strategy?", a: "The Compliance plan covers the preparation and filing of your annual tax returns. The Strategy plan is a proactive, year-round service where our experts work with you to minimize your tax liability through strategic planning." }
  ];

  const cfoFaqs = [
    { q: "What if I need a service not listed in the modules?", a: "Our Virtual CFO services are highly customizable. Contact our sales team to discuss your specific needs, and we can create a bespoke package for you." },
    { q: "Is there a minimum commitment for CFO services?", a: "Our CFO modules are billed monthly, and you can add or remove them as your business needs change, offering you maximum flexibility." }
  ];

  const payrollFaqs = [
    { q: "Does your payroll service handle tax filings?", a: "Yes, our full-service payroll automatically calculates, files, and pays federal, state, and local payroll taxes on your behalf." },
    { q: "Can you handle both employees and contractors?", a: "Yes, our platform can manage payments and tax forms (W-2s and 1099s) for both full-time employees and independent contractors." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...bookkeepingFaqs, ...taxFaqs, ...cfoFaqs, ...payrollFaqs
    ].map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>Pricing Plans | FinxisAI</title>
        <meta name="description" content="Transparent pricing for AI bookkeeping, tax preparation, and Virtual CFO services. Scalable plans for startups and agencies." />
        <meta name="keywords" content="bookkeeping pricing, accounting software cost, virtual CFO rates, tax preparation fees, payroll pricing" />
        <link rel="canonical" href="https://finxisai.com/pricing" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finxisai.com/pricing" />
        <meta property="og:title" content="FinxisAI Pricing - Transparent & Scalable" />
        <meta property="og:description" content="Choose the perfect plan for your business. From automated bookkeeping to full-service CFO support." />
        <meta property="og:image" content="https://finxisai.com/images/pricing-og.jpg" />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
             { name: "Home", url: "https://finxisai.com" },
             { name: "Pricing", url: "https://finxisai.com/pricing" }
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateServiceSchema("Bookkeeping & CFO Services", "AI-powered financial automation and virtual CFO services for businesses."))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />
      <main>
        <section aria-label="Pricing Hero" className="pt-32 pb-20 section-padding bg-white text-center">
          <div className="container-max">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Pricing That <span className="gradient-text">Scales With You</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                No surprises, no hidden fees. Just powerful financial automation that grows with your business. Choose a plan that fits your needs today and scale as you grow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ... (Rest of the component remains the same) ... */}
        {/* I'll include the rest for completeness but abbreviate repetitive parts if necessary, though strict instructions say full file content. */}
        {/* Included Features Section */}
        <section aria-label="Included Features" className="section-padding bg-slate-100">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">What's Included in Every Plan</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Every FinxisAI plan comes with these core features to power your financial operations.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {includedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl text-center shadow-md"
                >
                  <div className="feature-icon bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto mb-4">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tables Section */}
        <section aria-label="Pricing Tables" className="section-padding">
          <div className="container-max">
            <Tabs defaultValue="bookkeeping" className="w-full">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-4xl grid-cols-2 sm:grid-cols-5 h-auto p-2">
                  <TabsTrigger value="bookkeeping">AI Bookkeeping</TabsTrigger>
                  <TabsTrigger value="taxes">Taxes</TabsTrigger>
                  <TabsTrigger value="cfo">Virtual CFO</TabsTrigger>
                  <TabsTrigger value="payroll">Payroll</TabsTrigger>
                  <TabsTrigger value="formation">Formation</TabsTrigger>
                </TabsList>
              </div>
              
              <AnimatePresence mode="wait">
                <TabsContent value="bookkeeping" asChild>
                  <motion.div key="bookkeeping" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                    <div className="max-w-4xl mx-auto mt-12">
                      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                        <div className="text-center mb-8">
                          <h2 className="text-3xl font-bold mb-2">Estimate Your Bookkeeping Price</h2>
                          <p className="text-slate-600">Based on your monthly expenses.</p>
                        </div>
                        <div className="flex justify-center items-center space-x-4 mb-8">
                          <div className="relative flex w-fit items-center rounded-full bg-slate-200 p-1">
                            {['annually', 'monthly'].map((item) => (
                              <button
                                key={item}
                                onClick={() => setBillingCycle(item)}
                                className={`${billingCycle === item ? 'text-white' : 'text-slate-600'} relative block text-sm font-medium px-4 py-1.5 rounded-full z-10 transition-colors`}
                              >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                              </button>
                            ))}
                            <motion.div
                              layoutId="billing-cycle-active"
                              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                          </div>
                          <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Save 10% Annually</div>
                        </div>
                        <div className="mb-8">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">Monthly Expenses:</span>
                            <span className="font-bold text-xl gradient-text">${monthlyExpenses.toLocaleString()}</span>
                          </div>
                          <Slider defaultValue={[monthlyExpenses]} max={200000} step={1000} onValueChange={(value) => setMonthlyExpenses(value[0])} aria-label="Monthly Expenses Slider" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                          {[bookkeepingPlans.core, bookkeepingPlans.select].map(plan => (
                            <article key={plan.name} className={`p-6 rounded-xl border-2 ${plan.name === 'Select' ? 'border-blue-500 bg-blue-50' : 'bg-white'}`}>
                              <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                              <p className="text-slate-600 mb-4">{plan.description}</p>
                              <div className="mb-4">
                                <span className="text-4xl font-bold gradient-text">${plan.price.toLocaleString()}</span>
                                <span className="text-slate-500">/mo</span>
                              </div>
                              <ul className="space-y-2 mb-6">
                                {plan.features.map(feature => (
                                  <li key={feature} className="flex items-center">
                                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" aria-label="Included" />
                                    <span className="text-slate-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <Button onClick={() => handleGetDemo(plan.name)} className="w-full btn-primary group">Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                            </article>
                          ))}
                        </div>
                        <div className="mt-8 text-center">
                          <div className="p-6 rounded-xl border-2 border-dashed bg-slate-50">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Enterprise</h3>
                            <p className="text-slate-600 mb-4">For businesses with over $200k in monthly expenses or complex needs like multi-entity support.</p>
                            <Button onClick={() => handleGetDemo('Enterprise')} variant="outline" className="group">Contact Sales <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
                          </div>
                        </div>
                      </div>
                      <PlanCompare />
                      <div className="mt-16 max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
                        <h3 className="text-2xl font-bold text-center mb-4">Bookkeeping FAQs</h3>
                        {bookkeepingFaqs.map((faq, index) => <FaqItem key={index} {...faq} isOpen={openFaq === `bk-${index}`} onClick={() => setOpenFaq(openFaq === `bk-${index}` ? null : `bk-${index}`)} />)}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="taxes" asChild>
                  <motion.div key="taxes" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-5xl mx-auto mt-12">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-display font-bold mb-4">Stress-Free Taxes, Powered by AI</h2>
                      <p className="text-lg text-slate-600">From simple filings to complex R&D credits, we have a plan for you.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                      <article className="bg-white p-8 rounded-2xl shadow-xl border flex flex-col">
                        <div className="flex-shrink-0 mb-4"><Target className="w-10 h-10 text-blue-500" aria-hidden="true" /></div>
                        <h3 className="text-2xl font-bold mb-2">Tax Compliance</h3>
                        <p className="text-slate-600 mb-4 flex-grow">Federal & State tax filings prepared and filed for you.</p>
                        <ul className="space-y-2 mb-6">
                          {['Annual Tax Filing', 'Quarterly Estimates', 'Dedicated Tax Expert'].map(item => (
                            <li key={item} className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" aria-label="Included" />{item}</li>
                          ))}
                        </ul>
                        <p className="text-3xl font-bold mt-auto"><span className="gradient-text">$1,500</span><span className="text-base font-normal text-slate-500">/year</span></p>
                        <Button onClick={() => handleGetDemo('Tax Compliance')} className="w-full mt-4 btn-primary group">Get Started</Button>
                      </article>
                      <article className="bg-white p-8 rounded-2xl shadow-xl border flex flex-col">
                        <div className="flex-shrink-0 mb-4"><TrendingUp className="w-10 h-10 text-blue-500" aria-hidden="true" /></div>
                        <h3 className="text-2xl font-bold mb-2">Tax Strategy</h3>
                        <p className="text-slate-600 mb-4 flex-grow">Proactive, year-round tax advice to maximize savings.</p>
                        <ul className="space-y-2 mb-6">
                          {['Everything in Compliance', 'R&D Tax Credit Studies', 'Year-Round Advisory', 'Scenario Modeling'].map(item => (
                            <li key={item} className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" aria-label="Included" />{item}</li>
                          ))}
                        </ul>
                        <p className="text-3xl font-bold mt-auto"><span className="gradient-text">Custom</span></p>
                        <Button onClick={() => handleGetDemo('Tax Strategy')} className="w-full mt-4 btn-primary group">Contact Sales</Button>
                      </article>
                    </div>
                     <div className="mt-16 max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
                        <h3 className="text-2xl font-bold text-center mb-4">Tax FAQs</h3>
                        {taxFaqs.map((faq, index) => <FaqItem key={index} {...faq} isOpen={openFaq === `tax-${index}`} onClick={() => setOpenFaq(openFaq === `tax-${index}` ? null : `tax-${index}`)} />)}
                      </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="cfo" asChild>
                  <motion.div key="cfo" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-5xl mx-auto mt-12">
                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
                      <div className="text-center mb-10">
                        <div className="inline-block bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-full mb-6">
                          <BrainCircuit className="w-10 h-10 text-blue-600" aria-hidden="true" />
                        </div>
                        <h2 className="text-4xl font-display font-bold mb-4">Strategic Financial Guidance, On-Demand</h2>
                        <p className="text-lg text-slate-600">Build your own Virtual CFO plan with the modules you need.</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                          {cfoModules.map(module => (
                            <div key={module.id} className="flex items-center p-4 border rounded-lg has-[:checked]:bg-blue-50 has-[:checked]:border-blue-300 transition-colors">
                              <Checkbox id={module.id} onCheckedChange={() => handleCfoModuleChange(module.id)} className="w-5 h-5 mr-4" />
                              <label htmlFor={module.id} className="flex-grow font-medium text-slate-800 cursor-pointer">{module.name}</label>
                              <span className="text-slate-600 font-semibold">${module.price}</span>
                            </div>
                          ))}
                        </div>
                        <div className="sticky top-24 bg-slate-50 p-8 rounded-xl">
                          <h3 className="text-2xl font-bold mb-6">Your Custom CFO Plan</h3>
                          <div className="space-y-3 mb-6">
                            <AnimatePresence>
                              {selectedCfoModules.length > 0 ? selectedCfoModules.map(id => {
                                const module = cfoModules.find(m => m.id === id);
                                return (
                                  <motion.div key={id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex justify-between items-center">
                                    <span className="text-slate-700">{module.name}</span>
                                    <span className="font-semibold text-slate-800">${module.price}</span>
                                  </motion.div>
                                )
                              }) : <p className="text-slate-500 text-center py-4">Select modules to build your plan.</p>}
                            </AnimatePresence>
                          </div>
                          <div className="border-t pt-4">
                            <div className="flex justify-between items-center text-xl font-bold">
                              <span>Monthly Total</span>
                              <span className="gradient-text">${totalCfoPrice}</span>
                            </div>
                          </div>
                          <Button onClick={() => handleGetDemo('Virtual CFO')} className="btn-primary w-full group mt-6" disabled={totalCfoPrice === 0}>
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-16 max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
                      <h3 className="text-2xl font-bold text-center mb-4">Virtual CFO FAQs</h3>
                      {cfoFaqs.map((faq, index) => <FaqItem key={index} {...faq} isOpen={openFaq === `cfo-${index}`} onClick={() => setOpenFaq(openFaq === `cfo-${index}` ? null : `cfo-${index}`)} />)}
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="payroll" asChild>
                  <motion.div key="payroll" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-4xl mx-auto mt-12">
                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 text-center">
                      <div className="inline-block bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-full mb-6">
                        <Briefcase className="w-10 h-10 text-blue-600" aria-hidden="true" />
                      </div>
                      <h2 className="text-4xl font-display font-bold mb-4">Effortless, Full-Service Payroll</h2>
                      <p className="text-lg text-slate-600 mb-8">Run payroll in minutes with our fully integrated, AI-powered solution.</p>
                      <div className="bg-slate-50 p-8 rounded-xl">
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-left mb-8">
                          {['Automated Payroll Runs', 'Direct Deposit & Checks', 'W-2 & 1099 Filings', 'Benefits Integration', 'Multi-State Payroll', 'Employee Self-Onboarding'].map(item => (
                            <div key={item} className="flex items-center">
                              <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" aria-label="Included" />
                              <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-slate-200 pt-6">
                          <p className="text-2xl font-bold text-slate-800">
                            <span className="gradient-text">$40</span>/month <Plus className="inline w-5 h-5 mx-1" /> <span className="gradient-text">$6</span>/employee
                          </p>
                        </div>
                      </div>
                      <Button onClick={() => handleGetDemo('Payroll')} className="btn-primary group mt-8">
                        Add Payroll to Your Plan
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    <div className="mt-16 max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
                      <h3 className="text-2xl font-bold text-center mb-4">Payroll FAQs</h3>
                      {payrollFaqs.map((faq, index) => <FaqItem key={index} {...faq} isOpen={openFaq === `pay-${index}`} onClick={() => setOpenFaq(openFaq === `pay-${index}` ? null : `pay-${index}`)} />)}
                    </div>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="formation" asChild>
                  <motion.div key="formation" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="max-w-4xl mx-auto mt-12">
                     <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 text-center">
                      <div className="inline-block bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-full mb-6">
                        <Globe className="w-10 h-10 text-blue-600" aria-hidden="true" />
                      </div>
                      <h2 className="text-4xl font-display font-bold mb-4">Launch Your US Business</h2>
                      <p className="text-lg text-slate-600 mb-8">Comprehensive formation packages including EIN, Registered Agent, and Banking for global founders.</p>
                      
                      <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                          <div className="border p-4 rounded-xl">
                              <h3 className="font-bold text-lg mb-1">Starter</h3>
                              <p className="text-2xl font-bold text-blue-600 mb-2">$999</p>
                              <p className="text-sm text-slate-500 mb-4">+ State Fees</p>
                              <ul className="text-sm space-y-2 mb-4">
                                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Formation</li>
                                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Name Check</li>
                              </ul>
                          </div>
                          <div className="border border-blue-200 bg-blue-50 p-4 rounded-xl relative">
                               <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">Popular</div>
                              <h3 className="font-bold text-lg mb-1">Essential</h3>
                              <p className="text-2xl font-bold text-blue-600 mb-2">$1,999</p>
                              <p className="text-sm text-slate-500 mb-4">+ State Fees</p>
                              <ul className="text-sm space-y-2 mb-4">
                                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> EIN Included</li>
                                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Operating Agreement</li>
                              </ul>
                          </div>
                          <div className="border p-4 rounded-xl">
                              <h3 className="font-bold text-lg mb-1">Total Compliance</h3>
                              <p className="text-2xl font-bold text-blue-600 mb-2">$2,999</p>
                              <p className="text-sm text-slate-500 mb-4">+ State Fees</p>
                              <ul className="text-sm space-y-2 mb-4">
                                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Expedited Speed</li>
                                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Tax Filing Included</li>
                              </ul>
                          </div>
                      </div>

                      <Button onClick={() => navigate('/formation')} className="btn-primary group w-full max-w-md">
                        View Full Formation Details
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </div>
        </section>

        <section aria-label="Add-on Services" className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">Powerful Add-on Services</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Customize your plan with these one-time or recurring services to fit your business needs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOnServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AddonCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="How It Works" className="section-padding bg-slate-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">How It Works</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Get started with FinxisAI in three simple steps.</p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="relative md:grid md:grid-cols-2 md:gap-12 items-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`p-8 bg-white rounded-xl border border-slate-200 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}
                  >
                    <h3 className="text-2xl font-bold font-display mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </motion.div>
                  <div className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border-2 border-slate-200 hidden md:block">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;