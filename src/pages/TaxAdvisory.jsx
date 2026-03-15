import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { motion } from 'framer-motion';
import { Calculator, FileSearch, Landmark, Bot, Calendar, Globe, Plus, Minus, SlidersHorizontal, BarChart, Building } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import AIChat from '@/components/AIChat';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BurnRateCalculator from '@/components/calculators/BurnRateCalculator';
import RDTaxCreditCalculator from '@/components/calculators/RDTaxCreditCalculator';
import ValuationCalculator from '@/components/calculators/ValuationCalculator';

const TaxAdvisory = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    { icon: Bot, title: 'AI-Powered Tax Research', description: 'Get instant, accurate answers to complex tax questions for both IRS and HMRC regulations.' },
    { icon: FileSearch, title: 'Automated R&D Tax Credits', description: 'Identify qualifying R&D expenses and generate audit-proof documentation to maximize claims.' },
    { icon: Landmark, title: 'Real-Time Compliance', description: 'Continuously monitor transactions for compliance issues, alerting you to risks before they become problems.' },
    { icon: Calculator, title: 'Proactive Scenario Planning', description: 'Model the tax implications of business decisions like fundraising or M&A to provide strategic advice.' },
    { icon: Calendar, title: 'Centralized Deadline Tracking', description: 'Never miss a filing deadline. Track all local, state, and federal deadlines in one automated dashboard.' },
    { icon: Globe, title: 'International Tax Support', description: 'Effortlessly handle tax complexities for clients operating in the US, UK, and beyond.' },
  ];

  const faqs = [
    { q: 'Which jurisdictions does the Tax Advisory tool support?', a: 'Our AI is trained on the latest tax codes for the United States (IRS) and the United Kingdom (HMRC). We are continuously expanding our jurisdiction support.' },
    { q: 'How does the R&D Tax Credit feature work?', a: 'FinxisAI analyzes your expenses and project data to automatically identify qualifying research and development activities. It then calculates the potential credit and generates the necessary documentation for your claim.' },
    { q: 'Can I use this for my personal taxes?', a: 'FinxisAI Tax Advisory is designed for businesses and CPA firms. While it can handle complex scenarios involving pass-through entities, it is not optimized for individual personal tax filing.' },
    { q: 'How secure is my clients\' data?', a: 'Data security is our top priority. We use bank-grade encryption, are SOC 2 compliant, and adhere to strict data protection regulations like GDPR to ensure all financial data is secure.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <Helmet>
        <title>AI Tax Advisory Platform - FinxisAI</title>
        <meta name="description" content="Transform your tax practice with AI. From automated R&D credits to proactive scenario planning, FinxisAI is the future of tax advisory." />
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-20 section-padding bg-white">
          <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium text-sm mb-6">
                <Calculator className="w-4 h-4 mr-2" />
                Intelligent Tax Advisory
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Go Beyond Compliance. Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Tax Strategist.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Leverage the power of AI to deliver proactive, high-value tax advice that saves your clients money and solidifies your role as a trusted advisor.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="p-8 bg-white rounded-2xl shadow-2xl border border-slate-200">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <h3 className="text-lg font-semibold mb-4 flex items-center"><Bot className="w-6 h-6 mr-3 text-purple-500" /> AI Tax Assistant Demo</h3>
                      <p className="text-slate-600 mb-4">Click here to ask our AI assistant a tax question. Try asking about R&D tax credits in the UK.</p>
                      <div className="bg-slate-100 p-4 rounded-lg text-sm text-slate-700">
                        <p className="font-mono">&gt;&gt; Ask a tax question...</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[625px] p-0">
                    <DialogHeader className="p-4 border-b">
                      <DialogTitle className="flex items-center"><Bot className="mr-2" /> AI Tax Assistant Demo</DialogTitle>
                      <DialogDescription>Ask our AI assistant about tax regulations. This is a functional demo.</DialogDescription>
                    </DialogHeader>
                    <div className="h-[450px]">
                      <AIChat />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">A Smarter Way to Handle Taxes</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our platform is packed with features designed to save you time and uncover savings for your clients.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-2xl bg-white/50 border border-slate-200 card-hover"
                >
                  <div className="feature-icon bg-gradient-to-br from-purple-500 to-pink-600 mb-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium text-sm mb-6">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Interactive Financial Tools
              </div>
              <h2 className="text-4xl font-display font-bold mb-4">Model, Project, and Plan with Confidence</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Empower your advisory services with interactive calculators that provide instant insights.</p>
            </div>
            <Tabs defaultValue="burn-rate" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 h-auto p-2">
                <TabsTrigger value="burn-rate" className="flex items-center gap-2"><BarChart className="w-4 h-4" /> Burn Rate</TabsTrigger>
                <TabsTrigger value="rd-tax" className="flex items-center gap-2"><FileSearch className="w-4 h-4" /> R&D Credit</TabsTrigger>
                <TabsTrigger value="valuation" className="flex items-center gap-2"><Building className="w-4 h-4" /> Valuation</TabsTrigger>
              </TabsList>
              <TabsContent value="burn-rate">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-8 rounded-2xl shadow-xl border mt-8">
                  <BurnRateCalculator />
                </motion.div>
              </TabsContent>
              <TabsContent value="rd-tax">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-8 rounded-2xl shadow-xl border mt-8">
                  <RDTaxCreditCalculator />
                </motion.div>
              </TabsContent>
              <TabsContent value="valuation">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-8 rounded-2xl shadow-xl border mt-8">
                  <ValuationCalculator />
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/80 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center"
                  >
                    <span className="font-semibold text-lg text-slate-800">{faq.q}</span>
                    {openFaq === index ? <Minus className="w-5 h-5 text-purple-500" /> : <Plus className="w-5 h-5 text-slate-500" />}
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-white">
          <div className="container-max">
            <LeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TaxAdvisory;