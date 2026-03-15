import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, FileCheck, BrainCircuit, Target, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AIAnswerBox from '@/components/AIAnswerBox';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import WhenNotToUse from '@/components/WhenNotToUse';
import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';
import ExpertInsight from '@/components/ExpertInsight';

const TaxPreparationPage = () => {
  const faqs = [
    {
      q: "How does AI help with tax preparation?",
      a: "AI analyzes your entire year's financial data to identify deductible expenses that might be missed manually. It also helps categorize transactions to the correct tax lines (Schedule C, Form 1120, etc.) and runs scenarios to optimize your tax position before filing."
    },
    {
      q: "Do you handle both state and federal filings?",
      a: "Yes. We prepare and file federal returns as well as state and local returns for all 50 states, including multi-state nexus issues for e-commerce and remote businesses."
    },
    {
      q: "Is there a real CPA reviewing my return?",
      a: "Always. AI is a tool for efficiency and data gathering, but every single tax return is reviewed and signed by a licensed CPA or Enrolled Agent to ensure compliance and accuracy."
    },
    {
      q: "Can you help with R&D tax credits?",
      a: "Yes. Our platform scans your payroll and expense data to identify qualifying research and development activities, helping startups and tech companies claim valuable R&D tax credits."
    },
    {
      q: "What if I get audited?",
      a: "We provide audit support. Because our system maintains a digital audit trail of all transactions and source documents, we can quickly generate the substantiation needed to respond to IRS inquiries."
    },
    {
      q: "How much does it cost?",
      a: "Pricing depends on the complexity of your return (e.g., entity type, number of states, foreign operations). We offer fixed-fee pricing upfront, so there are no hourly billing surprises."
    },
    {
      q: "Do you file extensions?",
      a: "Yes, we can file an automatic extension for you if needed, giving you more time to organize your documents while ensuring you estimate any tax due to avoid penalties."
    },
    {
      q: "What documents do I need to provide?",
      a: "If you use FinxisAI for bookkeeping, we already have most of what we need! Otherwise, you'll upload prior year returns, entity documents, and any tax forms (1099s, K-1s) to our secure portal."
    }
  ];

  const relatedServices = [
    {
      title: "Tax Prep Support for CPAs",
      description: "Outsourced tax prep support.",
      icon: Briefcase,
      color: "purple",
      path: "/services/cpa-outsourced-support"
    },
    {
      title: "AI-Enabled Bookkeeping",
      description: "Automated reconciliation and coding.",
      icon: BrainCircuit,
      color: "blue",
      path: "/services/ai-bookkeeping"
    },
    {
      title: "Virtual CFO",
      description: "Fractional CFO leadership for growth.",
      icon: Target,
      color: "violet",
      path: "/services/virtual-cfo"
    }
  ];

  useSchemaMarkup({
    organization: true,
    service: {
      name: "AI-Assisted Tax Preparation",
      description: "Professional tax preparation services utilizing AI for deduction maximization and accuracy, reviewed by licensed CPAs.",
      serviceType: "Tax Preparation",
      provider: {
        "@type": "Organization",
        "name": "FinxisAI"
      }
    },
    faq: faqs
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>AI Tax Preparation Services | FinxisAI</title>
        <meta name="description" content="Maximize your tax savings with FinxisAI. AI-powered deduction finding combined with expert CPA filing for error-free tax returns." />
        <meta name="keywords" content="tax preparation, AI tax software, business tax filing, CPA tax services, tax planning" />
        <link rel="canonical" href="https://finxis.ai/services/tax-preparation" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
          <div className="container-max relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-200 font-medium text-sm mb-6">
                <FileCheck className="w-4 h-4 mr-2" />
                Tax Season, Solved.
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
                Maximum Refunds, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Minimum Stress</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
                Leverage AI to uncover every deduction you deserve, backed by the assurance of expert CPA review and filing.
              </p>

              <AIAnswerBox 
                serviceName="AI-Assisted Tax Prep"
                definition="A filing service that uses software to scan your financials for deductions and credits, followed by a CPA review and official filing with the IRS/State."
                bestFor="Businesses claiming R&D credits, depreciation, or multi-state nexus."
                cost="Starts at $800/return"
                timeline="2-3 weeks (Fast turnaround)"
                icon={FileCheck}
              />

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white border-0 shadow-lg shadow-emerald-900/50">
                    Get a Tax Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services/cpa-outsourced-support">
                  <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-white/10 hover:text-white">
                    For CPA Firms
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <WhoIsThisFor 
          title="Who Needs AI Tax Prep?"
          profiles={[
            {
              title: "Tech Startups",
              description: "Companies eligible for complex R&D tax credits that manual accountants often miss or under-calculate."
            },
            {
              title: "Remote Businesses",
              description: "Companies with employees in multiple states triggering economic nexus and payroll tax complexities."
            },
            {
              title: "High-Volume Sellers",
              description: "E-commerce brands with thousands of transactions across states requiring automated sales tax reconciliation."
            }
          ]}
        />

        {/* New Process Section */}
        <section className="py-20 bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">The FinxisAI Tax Process</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A streamlined, stress-free path to compliance and savings.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 font-bold text-xl">1</div>
                <h3 className="font-bold text-lg mb-2">Sync & Scan</h3>
                <p className="text-slate-600">Our AI scans your connected financial data for potential deductions and credits instantly.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 font-bold text-xl">2</div>
                <h3 className="font-bold text-lg mb-2">Expert Review</h3>
                <p className="text-slate-600">A specialized CPA reviews the AI findings, ensures compliance, and finalizes your strategy.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 font-bold text-xl">3</div>
                <h3 className="font-bold text-lg mb-2">File & Forget</h3>
                <p className="text-slate-600">We digitally file your returns with the IRS and states, providing confirmation and secure storage.</p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="container-max">
            <ExpertInsight 
                insight="Tax planning isn't a once-a-year event. By analyzing data continuously, our AI can project tax liabilities quarterly, preventing the 'April Surprise' that plagues growing businesses."
                attribution={{ name: "James Wilson, CPA", role: "Director of Tax Strategy" }}
                source="FinxisAI Tax Advisory Report"
            />
        </div>

        {/* ... (Existing Sections) ... */}

         {/* New CPA Section */}
         <section className="py-20 bg-emerald-50 border-t border-emerald-100">
           <div className="container-max text-center">
             <Briefcase className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Tax Prep Support for CPA Firms</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
               Overwhelmed during tax season? We provide scalable, white-label tax preparation support to help you handle more clients without burnout.
             </p>
             <Link to="/services/cpa-outsourced-support">
               <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                 Outsourced tax prep support
                 <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
             </Link>
           </div>
        </section>

        <WhenNotToUse 
          scenarios={[
            {
              title: "Personal-Only Returns",
              description: "If you only have W-2 income and no business entity, generic software like TurboTax is more cost-effective.",
              alternative: "TurboTax / H&R Block"
            },
            {
              title: "International Headquarters",
              description: "If your HQ is non-US based, you need specialized transfer pricing studies beyond our standard scope.",
              alternative: "Big 4 International Tax"
            },
            {
              title: "Criminal Tax Defense",
              description: "If you are under criminal investigation by the IRS, you need a specialized tax attorney, not a preparer.",
              alternative: "Tax Attorney"
            }
          ]}
        />

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container-max max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-slate-900">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200">
                  <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:text-emerald-600 hover:no-underline py-6">
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
        <section className="py-20 bg-slate-50 border-t border-slate-200">
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

export default TaxPreparationPage;