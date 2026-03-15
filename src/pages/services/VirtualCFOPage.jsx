import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Target, BrainCircuit, FileCheck, Briefcase } from 'lucide-react';
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

const VirtualCFOPage = () => {
  const faqs = [
    {
      q: "What is a Virtual CFO?",
      a: "A Virtual CFO (Chief Financial Officer) provides high-level financial strategy, forecasting, and analysis for your business on a fractional basis. You get the expertise of a seasoned executive without the cost of a full-time salary and benefits."
    },
    {
      q: "How does this differ from bookkeeping?",
      a: "Bookkeeping focuses on recording historical transactions accurately. Virtual CFO services focus on the future: budgeting, cash flow forecasting, capital planning, and strategic decision-making to drive growth."
    },
    {
      q: "What kind of reports will I receive?",
      a: "You'll receive customized monthly management reporting packs, including budget vs. actuals, 13-week cash flow forecasts, unit economics analysis (CAC, LTV), and executive summaries with actionable recommendations."
    },
    {
      q: "Can you help with fundraising?",
      a: "Yes. We specialize in preparing startups for fundraising. We help build your financial model, create your data room, and craft the financial narrative for your pitch deck to instill confidence in investors."
    },
    {
      q: "How often do we meet?",
      a: "Typically, we have a monthly financial review meeting to go over performance and strategy. However, we are available for ad-hoc calls and advice whenever you have a critical decision to make."
    },
    {
      q: "Do you help with budgeting?",
      a: "Yes, we lead the annual budgeting process, helping you set realistic targets for revenue and expenses. We then track performance against this budget throughout the year, adjusting forecasts as needed."
    },
    {
      q: "Is AI involved in CFO services?",
      a: "Yes. We use AI to run complex scenario modeling (e.g., 'What happens if we hire 5 sales reps?') and to detect trends in your data that might not be immediately obvious, providing data-backed confidence for decisions."
    },
    {
      q: "Who is this service right for?",
      a: "It's ideal for companies generating $1M - $20M in revenue that are growing quickly and have complex financial needs but aren't yet ready to hire a full-time CFO (which can cost $200k+)."
    }
  ];

  const relatedServices = [
    {
      title: "Outsourced CFO Support",
      description: "White-label CFO services for firms.",
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
      title: "Tax Preparation",
      description: "AI-assisted filing and strategic planning.",
      icon: FileCheck,
      color: "emerald",
      path: "/services/tax-preparation"
    }
  ];

  useSchemaMarkup({
    organization: true,
    service: {
      name: "Virtual CFO Services",
      description: "Fractional CFO services providing strategic financial planning, budgeting, and forecasting for growth-stage companies.",
      serviceType: "Financial Management",
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
<title>Virtual CFO Services | Strategic Financial Leadership | FinxisAI</title>
        <meta name="description" content="Get high-level financial strategy without the full-time cost. FinxisAI's Virtual CFO services provide forecasting, budgeting, and growth planning powered by AI." />
        <meta name="keywords" content="Virtual CFO, fractional CFO, financial forecasting, startup finance, strategic planning, cash flow management" />
        <link rel="canonical" href="https://finxisai.com/services/virtual-cfo" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-violet-950 via-slate-900 to-violet-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="container-max relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-violet-500/20 backdrop-blur-sm border border-violet-400/30 rounded-full text-violet-200 font-medium text-sm mb-6">
                <Target className="w-4 h-4 mr-2" />
                Strategic Vision for Growth
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
                Executive Leadership, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Fractional Cost</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
                Unlock the insights of a Fortune 500 CFO. We combine expert guidance with AI-powered modeling to help you forecast, budget, and scale with confidence.
              </p>

              <AIAnswerBox 
                serviceName="Virtual CFO Services"
                definition="Executive-level financial strategy on a fractional basis. We handle budgeting, forecasting, and board reporting to help you scale, without the full-time C-suite salary."
                bestFor="Companies with $1M - $20M revenue looking to raise capital or optimize margins."
                cost="Starts at $1,500/mo"
                timeline="Weekly or Monthly Cadence"
                icon={Target}
              />

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white border-0 shadow-lg shadow-violet-900/50">
                    Talk to an Expert
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
          title="Who Needs a Virtual CFO?"
          profiles={[
            {
              title: "Fundraising Startups",
              description: "Founders preparing for Series A/B who need professional financial models and data rooms to pass due diligence."
            },
            {
              title: "Scaling SaaS",
              description: "Companies needing rigorous tracking of unit economics (LTV:CAC, Churn) to optimize marketing spend."
            },
            {
              title: "Margin-Focused Brands",
              description: "E-commerce or manufacturing businesses needing deep inventory analysis and cash flow forecasting."
            }
          ]}
        />
        
        <div className="container-max">
            <ExpertInsight 
                insight="Startups that perform monthly re-forecasting grow 30% faster than those using static annual budgets. Agility in finance is no longer optional—it's a survival trait."
                attribution={{ name: "Elena Rodriguez", role: "VP of Strategic Finance" }}
                source="FinxisAI Growth Benchmark 2024"
            />
        </div>

        {/* New CPA Section */}
        <section className="py-20 bg-violet-50 border-t border-violet-100">
           <div className="container-max text-center">
             <Briefcase className="w-12 h-12 text-violet-600 mx-auto mb-4" />
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Virtual CFO for CPA Firms</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
               Expand your firm's advisory capabilities. We offer white-label Virtual CFO services to help you provide deeper strategic value to your clients.
             </p>
             <Link to="/services/cpa-outsourced-support">
               <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
                 Outsourced CFO support for firms
                 <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
             </Link>
           </div>
        </section>

        <WhenNotToUse 
          scenarios={[
            {
              title: "Early-Stage Pre-Revenue",
              description: "If you haven't found product-market fit, a CFO is overkill. Focus on sales first.",
              alternative: "Basic Bookkeeping"
            },
            {
              title: "Massive Enterprises",
              description: "If you have $50M+ revenue, you need a full-time, in-house CFO for daily operational leadership.",
              alternative: "Full-Time Executive Search"
            },
            {
              title: "Administrative Only",
              description: "If you just need someone to pay bills and run payroll, you need a controller, not a strategic CFO.",
              alternative: "Controller Services"
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
                  <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:text-violet-600 hover:no-underline py-6">
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

export default VirtualCFOPage;