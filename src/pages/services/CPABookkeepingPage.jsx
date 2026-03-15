import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Clock, Users, FileText, 
  BarChart, Layers, Globe, Lock, AlertTriangle, Workflow, BrainCircuit, Target, Briefcase, TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateComprehensiveServiceSchema, generateBreadcrumbSchema } from '@/lib/seoHelpers';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceIndustryBreadcrumb from '@/components/ServiceIndustryBreadcrumb';
import AIAnswerBox from '@/components/AIAnswerBox';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import WhenNotToUse from '@/components/WhenNotToUse';
import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';

const CPABookkeepingPage = () => {
  const painPoints = [
    {
      title: "Manual Data Entry",
      description: "Hours wasted on data entry and categorization rob your team of billable hours for high-value advisory work.",
      icon: Clock
    },
    {
      title: "Quality Inconsistency",
      description: "Variability in client bookkeeping quality leads to excessive cleanup work during tax season.",
      icon: AlertTriangle
    },
    {
      title: "Seasonal Spikes",
      description: "The compression of workload during tax season creates staff burnout and capacity bottlenecks.",
      icon: BarChart
    },
    {
      title: "Staff Constraints",
      description: "Difficulty hiring and retaining qualified staff makes scaling bookkeeping services challenging.",
      icon: Users
    }
  ];

  const benefits = [
    {
      title: "Increased Capacity",
      description: "Handle more clients without adding headcount by automating routine processing.",
      icon: Layers
    },
    {
      title: "Faster Turnaround",
      description: "Close books in days, not weeks, improving client satisfaction and retention.",
      icon: Clock
    },
    {
      title: "Enhanced Compliance",
      description: "Automated audit trails and documentation ensure rigorous standards are met.",
      icon: ShieldCheck
    },
    {
      title: "Scalable Growth",
      description: "Expand your practice confidently knowing the backend can handle volume.",
      icon: TrendingUpIcon
    }
  ];

  const faqs = [
    {
      q: "How does this integrate with our current workflow?",
      a: "Our platform is designed to sit alongside your existing tech stack (QBO, Xero, etc.). We handle the data ingestion and preliminary categorization, pushing clean data back to your GL. Your team retains full control over the final review and approval, ensuring it fits seamlessly into your established review processes."
    },
    {
      q: "Will this compromise our professional standards?",
      a: "Not at all. FinxisAI operates as a support tool to enhance, not replace, your professional judgment. We adhere to strict quality control protocols, and every automated entry is flagged with a confidence score. Low-confidence items are routed to human review (ours or yours), ensuring accuracy standards are maintained."
    },
    {
      q: "How much time can we save?",
      a: "Firms typically see a 50-70% reduction in time spent on routine data entry and reconciliation tasks. This frees up your staff to focus on higher-margin advisory services, tax planning, and client relationship management."
    },
    {
      q: "What about client data security?",
      a: "We employ bank-grade 256-bit encryption, SOC 2 Type II compliance, and strict access controls. Client data is isolated and never used to train public models. We adhere to all relevant data privacy regulations to ensure client confidentiality is never compromised."
    },
    {
      q: "Can we still maintain quality control?",
      a: "Yes. In fact, our system enhances quality control by providing automated consistency checks and anomaly detection that human eyes might miss. You maintain the final sign-off authority on all deliverables."
    },
    {
      q: "How does pricing work?",
      a: "We offer flexible pricing models for firms, including per-client subscription tiers or volume-based enterprise agreements. This allows you to maintain healthy margins on your bookkeeping services while scaling costs linearly with growth."
    },
    {
      q: "What's the implementation timeline?",
      a: "Implementation is rapid. We can typically onboard a firm and map their first batch of clients within 2-4 weeks. We provide dedicated support to ensure a smooth transition and training for your staff."
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
      name: "AI-Enabled Bookkeeping for CPAs",
      description: "Professional AI-assisted bookkeeping services designed specifically for CPA firms to streamline operations and ensure compliance.",
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
        <title>AI-Enabled Bookkeeping for CPAs | FinxisAI</title>
        <meta name="description" content="Streamline your CPA firm's client work with AI-enabled bookkeeping. Reduce manual entry, improve accuracy, and scale your practice without compromising professional standards." />
        <meta name="keywords" content="CPA bookkeeping, AI for accountants, automated bookkeeping for firms, accounting practice automation" />
        <link rel="canonical" href="https://finxis.ai/services/cpa-bookkeeping" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-slate-900 text-white relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1554224155-a1487473ffd9?auto=format&fit=crop&q=80" 
               alt="Modern accounting firm office" 
               className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          </div>

          <div className="container-max relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
                AI-Enabled Bookkeeping for CPAs: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Streamline Client Work</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-10 font-light">
                Eliminate the bottleneck of manual data entry without compromising your firm's professional standards. Scale your practice with confidence.
              </p>

              <AIAnswerBox 
                serviceName="CPA AI Bookkeeping"
                definition="A production platform for accounting firms that automates client data hygiene, categorization, and reconciliation, allowing your staff to focus on review and advisory."
                bestFor="Firms with 50+ monthly bookkeeping clients."
                cost="Volume Pricing (Per Client)"
                timeline="Rapid Onboarding (2-4 Weeks)"
                icon={BrainCircuit}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 text-lg px-8 py-6 h-auto shadow-lg shadow-blue-900/50">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 h-auto">
                    View Case Study
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        <div className="bg-white pt-8 pb-0">
          <div className="container-max">
             <ServiceIndustryBreadcrumb 
                serviceName="Services"
                industryName="CPA Bookkeeping"
                serviceSlug=""
                industrySlug="cpa-bookkeeping"
             />
          </div>
        </div>

        {/* ... (Existing sections) ... */}

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container-max max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Built for the Modern CPA</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              As a CPA, you understand that the foundation of advisory services is accurate, timely financial data. Yet, the reality of client bookkeeping—inconsistent records, missing documents, and manual cleanup—often consumes valuable staff hours that could be better spent on high-margin work. FinxisAI bridges this gap. We provide an AI-enabled infrastructure that supports your firm's workflow, ensuring data integrity and compliance while drastically reducing manual effort. We are not a replacement for your expertise; we are the force multiplier that allows you to deliver it more effectively.
            </p>
          </div>
        </section>

        <WhoIsThisFor 
          title="Who Is This For?"
          profiles={[
            {
              title: "Scaling Firms",
              description: "Firms growing faster than they can hire, needing automation to handle volume."
            },
            {
              title: "Advisory-First Practices",
              description: "CPAs who want to stop doing data entry and start doing high-value consulting."
            },
            {
              title: "Staff-Constrained Teams",
              description: "Partners tired of the turnover treadmill and training junior staff on basic coding."
            }
          ]}
        />

        {/* Pain Points */}
        <section className="py-20 bg-slate-50">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Challenges Facing Today's Firms</h2>
              <p className="text-lg text-slate-600">The traditional bookkeeping model is breaking under the weight of demand.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {painPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{point.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How AI Solves Challenges */}
        <section className="py-20 bg-white">
          <div className="container-max">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-slate-900">The AI Advantage for Firms</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-blue-600"/></div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">Streamlined Data Processing</h3>
                        <p className="text-slate-600">Our AI ingests data from thousands of sources instantly, categorizing transactions with high accuracy and flagging only exceptions for review.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-blue-600"/></div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">Consistent Quality</h3>
                        <p className="text-slate-600">Automated rules ensure every client's books are treated with the same rigorous logic, eliminating variability between staff members.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-blue-600"/></div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">Compliance & Documentation</h3>
                        <p className="text-slate-600">Every entry is audit-ready, linked to source documents and change logs, significantly reducing the burden of compliance verification.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-blue-600"/></div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">Optimized Margins</h3>
                        <p className="text-slate-600">By reducing manual hours, you improve the profitability of fixed-fee engagements and free up staff for billable advisory work.</p>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="relative">
                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-xl"></div>
                 <div className="relative bg-white border border-slate-100 p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                      <span className="font-bold text-slate-700">Firm Efficiency Metrics</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">+42% Margin</span>
                    </div>
                    <div className="space-y-6">
                       <div>
                         <div className="flex justify-between text-sm mb-2">
                           <span className="text-slate-500">Manual Entry Time</span>
                           <span className="text-slate-900 font-bold">-75%</span>
                         </div>
                         <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-600 w-[25%]"></div>
                         </div>
                       </div>
                       <div>
                         <div className="flex justify-between text-sm mb-2">
                           <span className="text-slate-500">Client Capacity</span>
                           <span className="text-slate-900 font-bold">+2.5x</span>
                         </div>
                         <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-indigo-600 w-[85%]"></div>
                         </div>
                       </div>
                       <div>
                         <div className="flex justify-between text-sm mb-2">
                           <span className="text-slate-500">Accuracy Rate</span>
                           <span className="text-slate-900 font-bold">99.9%</span>
                         </div>
                         <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-emerald-500 w-[99%]"></div>
                         </div>
                       </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Workflow Integration */}
        <section className="py-20 bg-slate-50">
          <div className="container-max">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">Seamless Workflow Integration</h2>
              <p className="text-lg text-slate-600">
                We understand that disrupting your firm's process is not an option. Our solution integrates directly into your existing ecosystem, enhancing it with intelligent automation while keeping you in the driver's seat.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
               
               <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 text-center">
                 <div className="w-16 h-16 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 z-10 relative">
                   <Layers className="w-8 h-8" />
                 </div>
                 <h3 className="font-bold text-lg mb-2">1. Ingestion & Processing</h3>
                 <p className="text-sm text-slate-600">We connect to client bank feeds and receipt capture tools. AI processes the raw data, categorizing based on learned rules.</p>
               </div>
               
               <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 text-center">
                 <div className="w-16 h-16 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 z-10 relative">
                   <ShieldCheck className="w-8 h-8" />
                 </div>
                 <h3 className="font-bold text-lg mb-2">2. Validation & Review</h3>
                 <p className="text-sm text-slate-600">Our system flags anomalies. Your team (or our support staff) reviews exceptions, ensuring human judgment is applied where it matters.</p>
               </div>
               
               <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 text-center">
                 <div className="w-16 h-16 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 z-10 relative">
                   <FileText className="w-8 h-8" />
                 </div>
                 <h3 className="font-bold text-lg mb-2">3. Reporting & Delivery</h3>
                 <p className="text-sm text-slate-600">Clean, reconciled financials are pushed to your dashboard or GL software, ready for tax preparation or advisory meetings.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Trust & Compliance */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Uncompromising Trust & Compliance</h2>
                <div className="space-y-6">
                   <p className="text-blue-100 text-lg leading-relaxed">
                     Your reputation is your most valuable asset. We treat it with the same care you do. Our platform is built on a foundation of professional ethics, regulatory compliance, and data security.
                   </p>
                   <ul className="space-y-4">
                     <li className="flex items-center gap-3">
                       <Lock className="w-5 h-5 text-blue-400" />
                       <span>SOC 2 Type II Certified Security</span>
                     </li>
                     <li className="flex items-center gap-3">
                       <Users className="w-5 h-5 text-blue-400" />
                       <span>Strict Human Oversight Protocols</span>
                     </li>
                     <li className="flex items-center gap-3">
                       <Globe className="w-5 h-5 text-blue-400" />
                       <span>GDPR & CCPA Compliant Data Handling</span>
                     </li>
                     <li className="flex items-center gap-3">
                       <ShieldCheck className="w-5 h-5 text-blue-400" />
                       <span>Full Audit Trails for Every Transaction</span>
                     </li>
                   </ul>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                 <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                 <p className="mb-6 text-blue-100 text-sm">
                   We explicitly acknowledge the limitations of AI. It is a tool for efficiency, not a replacement for professional accountability. We ensure that final responsibility and strategic judgment remain firmly in the hands of qualified professionals.
                 </p>
                 <Link to="/about/ai-safety">
                   <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-900">
                     Read AI Safety Policy
                   </Button>
                 </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-white">
          <div className="container-max">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Benefits for Your Firm</h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-6 border border-slate-100 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
                     <benefit.icon className="w-8 h-8 text-blue-600 mb-4" />
                     <h3 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h3>
                     <p className="text-sm text-slate-600">{benefit.description}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        <WhenNotToUse 
          scenarios={[
            {
              title: "Very Small Firms (<5 Clients)",
              description: "If you have fewer than 5 bookkeeping clients, manual entry might be more cost effective than an enterprise platform.",
              alternative: "QuickBooks Online Accountant"
            },
            {
              title: "Audit-Only Firms",
              description: "If you do not offer CAS (Client Advisory Services) or bookkeeping, our platform's value proposition is limited.",
              alternative: "Audit Software"
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

        {/* CTA Section */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="container-max text-center">
             <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">Ready to Modernize Your Practice?</h2>
             <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
               Join the forward-thinking firms leveraging FinxisAI to deliver better results for clients and better margins for themselves.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg w-full sm:w-auto">
                    Schedule Firm Consultation
                  </Button>
                </Link>
                <Link to="/case-studies">
                   <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 w-full sm:w-auto">
                     Request Case Study
                   </Button>
                </Link>
                <Button size="lg" variant="ghost" className="text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                   Download CPA Guide
                </Button>
             </div>
             <p className="mt-8 text-sm text-slate-500">
               Questions? Call us at (800) 555-0199 or email <a href="mailto:partners@finxis.ai" className="text-blue-600 underline">partners@finxis.ai</a>
             </p>
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

export default CPABookkeepingPage;