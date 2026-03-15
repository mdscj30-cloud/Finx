import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, FileCheck, Target, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AIAnswerBox from '@/components/AIAnswerBox';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import WhenNotToUse from '@/components/WhenNotToUse';
import ExpertInsight from '@/components/ExpertInsight';
import SEOHead from '@/components/SEOHead';
import { generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/seoHelpers';

const AIBookkeepingPage = () => {
  const faqs = [
    {
      q: "How does AI bookkeeping differ from traditional bookkeeping?",
      a: "Traditional bookkeeping relies heavily on manual data entry, which is prone to human error and time lag. FinxisAI uses artificial intelligence to ingest, categorize, and reconcile transactions in real-time. This means your books are always up-to-date, accurate, and available for review instantly, rather than waiting for the end of the month."
    },
    {
      q: "Is human oversight still involved?",
      a: "Absolutely. While our AI handles 90%+ of the routine transaction processing, every account is overseen by a dedicated financial expert. They handle complex transactions, review anomalies flagged by the AI, and ensure your financial statements are GAAP compliant."
    },
    {
      q: "Is my financial data secure?",
      a: "Security is our top priority. We utilize bank-grade 256-bit encryption, SOC 2 Type II compliance standards, and strict access controls. Your data is never sold and is only accessed by authorized personnel and our secure AI systems."
    },
    {
      q: "Can FinxisAI handle catch-up bookkeeping?",
      a: "Yes. Our AI is particularly powerful at processing historical data. We can ingest months or years of bank statements and categorize thousands of past transactions rapidly to bring your books current in a fraction of the time it would take a human bookkeeper."
    }
  ];

  const relatedServices = [
    {
      title: "AI Bookkeeping for CPAs",
      description: "White-label bookkeeping for firms.",
      icon: Briefcase,
      color: "purple",
      path: "/services/cpa-bookkeeping"
    },
    {
      title: "Tax Preparation",
      description: "AI-assisted filing and strategic planning.",
      icon: FileCheck,
      color: "emerald",
      path: "/services/tax-preparation"
    },
    {
      title: "Virtual CFO",
      description: "Fractional CFO leadership for growth.",
      icon: Target,
      color: "violet",
      path: "/services/virtual-cfo"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead 
        title="AI Bookkeeping Services | Real-time Reconciliation | FinxisAI"
        description="Transform your financial operations with FinxisAI's AI-enabled bookkeeping. Real-time reconciliation, 99.9% accuracy, and expert human oversight for modern businesses."
        keywords="AI bookkeeping, automated accounting, real-time reconciliation, financial automation, bookkeeping services"
        url="https://finxisai.com/services/ai-bookkeeping"
        schema={[
          generateFAQPageSchema(faqs),
          generateBreadcrumbSchema([
            { name: "Home", url: "https://finxisai.com" },
            { name: "Services", url: "https://finxisai.com/services" },
            { name: "AI Bookkeeping", url: "https://finxisai.com/services/ai-bookkeeping" }
          ])
        ]}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="container-max relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 font-medium text-sm mb-6">
                <BrainCircuit className="w-4 h-4 mr-2 text-blue-300" />
                The Future of Financial Record Keeping
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
                Bookkeeping on <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Autopilot</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
                Stop drowning in data entry. FinxisAI combines advanced machine learning with expert human review to deliver accurate, tax-ready financials in real-time.
              </p>
              
              <AIAnswerBox 
                serviceName="AI-Enabled Bookkeeping"
                definition="A hybrid service that uses artificial intelligence to categorize transactions and reconcile bank feeds instantly, paired with human expert review for complex accounting judgments."
                bestFor="Small to Mid-sized businesses (1-100 employees) using QBO/Xero."
                cost="Starts at $250/mo"
                timeline="Real-time (Daily updates)"
                icon={BrainCircuit}
              />

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/onboarding">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg shadow-blue-900/50">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-white/10 hover:text-white">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <WhoIsThisFor 
          title="Who Needs AI Bookkeeping?"
          profiles={[
            {
              title: "Growth-Stage Startups",
              description: "Founders who need real-time burn rate data to report to investors, not month-old PDFs."
            },
            {
              title: "E-Commerce Merchants",
              description: "Sellers with high transaction volumes across Shopify, Amazon, and Stripe that break manual workflows."
            },
            {
              title: "Service Agencies",
              description: "Consultancies needing project-level profitability tracking without the overhead of a full-time controller."
            }
          ]}
        />

        {/* Process Section */}
        <section className="py-20 bg-white">
           <div className="container-max">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-display font-bold mb-4">How Our AI Bookkeeping Works</h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                 A seamless blend of technology and expertise to keep your books pristine.
               </p>
             </div>
             <div className="grid md:grid-cols-4 gap-8">
               <div className="text-center">
                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">1</div>
                 <h3 className="font-bold text-lg mb-2">Connect</h3>
                 <p className="text-sm text-slate-600">Securely link your bank accounts, credit cards, and payment processors in minutes.</p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">2</div>
                 <h3 className="font-bold text-lg mb-2">Process</h3>
                 <p className="text-sm text-slate-600">Our AI ingests transactions, categorizes expenses, and matches receipts automatically.</p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">3</div>
                 <h3 className="font-bold text-lg mb-2">Review</h3>
                 <p className="text-sm text-slate-600">Your dedicated bookkeeper reviews anomalies and complex entries for 100% accuracy.</p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-xl">4</div>
                 <h3 className="font-bold text-lg mb-2">Report</h3>
                 <p className="text-sm text-slate-600">Access real-time financial dashboards and receive monthly closing packages.</p>
               </div>
             </div>
           </div>
        </section>
        
        <div className="container-max">
            <ExpertInsight 
                insight="The single biggest source of tax overpayment for small businesses is uncategorized expenses. AI doesn't just save time; it saves tax dollars by catching every deductible item 24/7."
                attribution={{ name: "Sarah Chen", role: "Head of AI Financial Products" }}
                source="FinxisAI Internal Data 2024"
            />
        </div>

        {/* CPA Section */}
        <section className="py-20 bg-indigo-50 border-t border-indigo-100">
           <div className="container-max text-center">
             <Briefcase className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Are you a CPA Firm?</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
               We offer a specialized white-label version of our AI bookkeeping platform designed specifically for accounting firms to streamline client work and improve margins.
             </p>
             <Link to="/services/cpa-bookkeeping">
               <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                 Learn how CPAs use AI bookkeeping
                 <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
             </Link>
           </div>
        </section>

        <WhenNotToUse 
          scenarios={[
            {
              title: "Cash-Only Businesses",
              description: "If you operate primarily with physical cash without digital bank trails, automated feeds won't work effectively.",
              alternative: "Traditional Local Bookkeeper"
            },
            {
              title: "Complex Enterprise ERPs",
              description: "If you use SAP or Oracle NetSuite with highly custom modules, our QBO/Xero integrations may be insufficient.",
              alternative: "Enterprise Implementation Firm"
            }
          ]}
        />

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="container-max max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-slate-900">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200">
                  <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:text-blue-600 hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Services Links */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="container-max">
            <h2 className="text-2xl font-bold mb-8 text-slate-900">Explore Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => (
                <Link key={index} to={service.path} className="group">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="h-full bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className={`flex items-center text-sm font-semibold text-${service.color}-600 group-hover:gap-2 transition-all`}>
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIBookkeepingPage;