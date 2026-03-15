import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, PieChart, Users, Globe, Layers, Activity, BrainCircuit, FileCheck, Target, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateComprehensiveServiceSchema, generateBreadcrumbSchema } from '@/lib/seoHelpers';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AIAnswerBox from '@/components/AIAnswerBox';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import WhenNotToUse from '@/components/WhenNotToUse';
import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';

const CPASupportPage = () => {
  const faqs = [
    {
      q: "How does FinxisAI support existing CPA firms?",
      a: "We act as a back-office extension of your firm. By handling the time-consuming tasks of data entry, categorization, and initial reconciliation using our AI platform, we free up your CPAs to focus on high-value advisory, tax strategy, and client relationships."
    },
    {
      q: "Can I outsource my entire accounting department to FinxisAI?",
      a: "Yes. For businesses looking to replace or augment an internal finance team, we offer full-cycle outsourced accounting. This includes AR/AP management, payroll, month-end close, and financial reporting, all managed by our team of experts and AI tools."
    },
    {
      q: "Do you offer white-label services?",
      a: "Yes. CPA firms can white-label our dashboard and reports. Your clients will see your branding while benefiting from our powerful backend automation."
    },
    {
      q: "How do you ensure data accuracy in outsourced tasks?",
      a: "We employ a 'human-in-the-loop' system. AI performs the initial heavy lifting, which is then verified by a dedicated account manager. We also implement strict internal controls and standardized workflows to ensure consistency."
    },
    {
      q: "Are you compliant with SOX and other regulations?",
      a: "Our enterprise tiers support SOX-compliant workflows, including segregation of duties, comprehensive audit trails, and strict access controls suitable for public or pre-IPO companies."
    },
    {
      q: "What is the onboarding process like for a firm?",
      a: "We start with a systems integration phase to connect your existing client files (QBO, Xero, etc.) to our platform. We then map your chart of accounts and workflows. Typically, a firm can be fully onboarded within 2-4 weeks."
    },
    {
      q: "How does communication work?",
      a: "You get a dedicated engagement manager. We use shared Slack/Teams channels for real-time communication and have a built-in portal for document sharing and task management."
    },
    {
      q: "Is this cost-effective compared to hiring?",
      a: "Outsourcing to FinxisAI is typically 30-50% less expensive than hiring full-time senior accountants, considering salary, benefits, training, and software costs."
    }
  ];

  const relatedServices = [
    {
      title: "Outsourced Support",
      description: "Scale your firm without overhead.",
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
      name: "CPA Support & Outsourced Accounting",
      description: "Full-service accounting outsourcing and back-office support for CPA firms and enterprise finance teams.",
      serviceType: "B2B Service",
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
        <title>CPA Support Services | FinxisAI</title>
        <meta name="description" content="Scale your CPA firm or finance department with FinxisAI's outsourced accounting services. AI-driven efficiency meets expert CPA oversight." />
        <meta name="keywords" content="CPA support, outsourced accounting, white label bookkeeping, accounting automation, finance outsourcing" />
        <link rel="canonical" href="https://finxisai.com/services/cpa-support" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white overflow-hidden relative">
          <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-full text-indigo-200 font-medium text-sm mb-6">
                  <Activity className="w-4 h-4 mr-2" />
                  Scale Your Firm Without the Headcount
                </div>
                <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
                  The Ultimate <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Back-Office Engine</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-lg">
                  Empower your CPA firm or enterprise finance team with AI-driven outsourced accounting. We handle the grunt work; you handle the strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white border-0 shadow-lg shadow-indigo-900/50">
                      Partner With Us
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/services/cpa-outsourced-support">
                    <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-white/10 hover:text-white">
                      View CPA Solutions
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
               <div className="relative lg:h-[500px] flex items-center justify-center">
                 <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md w-full">
                     <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold">Firm Performance</h3>
                        <span className="text-emerald-400 text-sm font-bold">+124% Efficiency</span>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Client Capacity</span>
                                <span>High</span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[85%]"></div>
                            </div>
                        </div>
                         <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Data Entry Hours</span>
                                <span>Reduced</span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-[15%]"></div>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">AI</div>
                                <div>
                                    <p className="text-sm font-bold">Automated Reconciliations</p>
                                    <p className="text-xs text-slate-400">Active across 45 clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            
            <AIAnswerBox 
              serviceName="CPA Outsourced Support"
              definition="White-label back-office services for accounting firms. We handle bookkeeping, payroll, and tax prep under your brand so you can scale without hiring."
              bestFor="CPA firms, Enrolled Agents, and Fractional CFOs."
              cost="Volume Pricing (approx 50% of US hire)"
              timeline="2-week onboarding"
              icon={Activity}
            />
          </div>
        </section>

        <WhoIsThisFor 
          title="Who Needs Outsourced Support?"
          profiles={[
            {
              title: "Solo Practitioners",
              description: "CPAs who are maxed out on time and turning away new business because they can't do the grunt work."
            },
            {
              title: "Mid-Sized Firms",
              description: "Firms struggling to hire qualified junior staff in the US to handle routine bookkeeping and prep."
            },
            {
              title: "Enterprise Finance",
              description: "Internal finance departments needing to augment their team during peak seasons or audits."
            }
          ]}
        />
        
        {/* New Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We are not just a vendor; we are your strategic partner in growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                <ShieldCheck className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-slate-600">SOC 2 compliant infrastructure ensures your client data remains protected at all times.</p>
              </div>
              <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                <Globe className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Global Talent Pool</h3>
                <p className="text-slate-600">Access top-tier accounting talent from around the world, vetted and managed by us.</p>
              </div>
              <div className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                <Layers className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Scalable Infrastructure</h3>
                <p className="text-slate-600">Add capacity instantly during tax season without the overhead of full-time hires.</p>
              </div>
            </div>
          </div>
        </section>

         {/* New CPA Section */}
         <section className="py-20 bg-indigo-50 border-t border-indigo-100">
           <div className="container-max text-center">
             <Briefcase className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive CPA Support Solutions</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
               Looking for dedicated outsourced support? We provide white-label tax prep, bookkeeping, and advisory support to help you scale your firm.
             </p>
             <Link to="/services/cpa-outsourced-support">
               <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                 Scale Your Firm
                 <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
             </Link>
           </div>
        </section>

        <WhenNotToUse 
          scenarios={[
            {
              title: "Client-Facing Only",
              description: "If you want us to handle all client communication directly under your brand without your involvement.",
              alternative: "Referral Partner Model"
            },
            {
              title: "Temporary Temp Staffing",
              description: "We provide dedicated teams for long-term partnership, not 1-week temp staffing fills.",
              alternative: "Robert Half / Temp Agencies"
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
                  <AccordionTrigger className="text-left font-semibold text-lg text-slate-800 hover:text-indigo-600 hover:no-underline py-6">
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

export default CPASupportPage;