import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, PieChart, Users, Globe, 
  Layers, Activity, FileCheck, Target, TrendingUp, BarChart2, Briefcase, BrainCircuit 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateComprehensiveServiceSchema, generateBreadcrumbSchema } from '@/lib/seoHelpers';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceIndustryBreadcrumb from '@/components/ServiceIndustryBreadcrumb';

const CPAOutsourcedSupportPage = () => {
  const painPoints = [
    {
      title: "Capacity Constraints",
      description: "Turning away new clients during tax season because your team is already at max capacity.",
      icon: Activity
    },
    {
      title: "Hiring & Training Costs",
      description: "The high expense and time commitment required to recruit, onboard, and train new staff.",
      icon: Users
    },
    {
      title: "Staff Retention",
      description: "Burnout during peak seasons leading to turnover and loss of institutional knowledge.",
      icon: Users
    },
    {
      title: "Overhead Pressures",
      description: "Rising software, office, and benefit costs squeezing your firm's profit margins.",
      icon: TrendingUp
    }
  ];

  const servicesIncluded = [
    {
      title: "AI-Assisted Bookkeeping",
      description: "Automated data processing and categorization.",
      icon: Layers
    },
    {
      title: "Financial Prep",
      description: "Preliminary financial statement preparation.",
      icon: FileCheck
    },
    {
      title: "Tax Support",
      description: "Tax return workpaper generation and support.",
      icon: PieChart
    },
    {
      title: "Reconciliation",
      description: "Monthly account reconciliation and cleanup.",
      icon: CheckCircle2
    }
  ];

  const faqs = [
    {
      q: "How does outsourced support maintain quality?",
      a: "We use a rigorous quality assurance process. Every task is performed by qualified accounting professionals and reviewed by senior staff before being delivered to your firm. We also adhere to your specific firm standards and checklists."
    },
    {
      q: "Will this compromise our firm's standards?",
      a: "No. We act as an invisible extension of your team. We adopt your workflow, software, and communication style to ensure a seamless client experience that meets or exceeds your firm's high standards."
    },
    {
      q: "How is client data protected?",
      a: "Data security is paramount. We operate in a secure, SOC 2 Type II compliant environment with restricted access, encrypted data transmission, and comprehensive audit logs. We sign strict NDAs to protect client confidentiality."
    },
    {
      q: "What's the cost structure?",
      a: "We offer flexible engagement models, including fixed monthly fees per client or hourly blocks. This allows you to convert fixed staffing costs into variable costs that align with your revenue."
    },
    {
      q: "Can we scale up or down seasonally?",
      a: "Yes. One of the primary benefits of outsourcing is scalability. You can ramp up support during tax season and scale back during slower months without the HR headaches of hiring and firing."
    },
    {
      q: "How long is the implementation?",
      a: "We can typically integrate with your firm within 2-4 weeks. This involves understanding your processes, setting up secure access, and training our team on your specific requirements."
    },
    {
      q: "What if we need to terminate?",
      a: "We offer flexible contract terms with clear termination clauses. We believe in earning your business every month through performance, not locking you into long-term handcuffs."
    },
    {
      q: "How do you handle complex or unusual situations?",
      a: "For complex issues, our team escalates to your designated firm contact with a detailed summary and proposed solution, ensuring your professional judgment is applied where needed."
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

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Outsourced Accounting Support for CPA Firms | FinxisAI</title>
        <meta name="description" content="Scale your CPA firm without adding overhead. FinxisAI provides outsourced accounting and tax prep support, allowing you to focus on growth and advisory." />
        <meta name="keywords" content="outsourced accounting for CPAs, CPA firm support, tax prep outsourcing, accounting back office, white label accounting" />
        <link rel="canonical" href="https://finxisai.com/services/cpa-outsourced-support" />
        <script type="application/ld+json">
          {JSON.stringify(generateComprehensiveServiceSchema(
            "Outsourced Accounting Support",
            "Scalable back-office accounting and tax preparation support services specifically for CPA firms.",
            "FinxisAI",
            "https://finxisai.com/services/cpa-outsourced-support"
          ))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
             { name: "Home", url: "https://finxisai.com" },
             { name: "Services", url: "https://finxisai.com/services" },
             { name: "Outsourced Support", url: "https://finxisai.com/services/cpa-outsourced-support" }
          ]))}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-indigo-900 text-white relative min-h-[90vh] flex items-center overflow-hidden">
           <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa?auto=format&fit=crop&w=800&q=80" 
               alt="Team collaborating in modern office" 
               className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/90 to-transparent"></div>
          </div>

          <div className="container-max relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
                Outsourced Support for CPA Firms: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Scale Without Overhead</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-10 font-light">
                Expand your capacity, improve margins, and reduce burnout. We handle the production work so you can focus on client relationships and advisory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white border-0 text-lg px-8 py-6 h-auto shadow-lg shadow-indigo-900/50">
                    Partner With Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services/cpa-bookkeeping">
                  <Button size="lg" variant="outline" className="border-slate-400 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 h-auto">
                    View Bookkeeping Services
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
                industryName="CPA Outsourced Support"
                serviceSlug=""
                industrySlug="cpa-outsourced-support"
             />
          </div>
        </div>

        {/* ... (Existing sections) ... */}

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container-max max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Strategic Partner for Firm Growth</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Leading a CPA firm today involves balancing growth ambitions with capacity constraints. Finding, training, and retaining talent is more expensive and difficult than ever. FinxisAI offers a strategic alternative: high-quality, reliable outsourced support. We provide a scalable extension of your team, handling the time-intensive production work—bookkeeping, reconciliations, and tax prep support—with the same attention to quality and compliance that you demand from your internal staff. This model allows you to unlock growth without the risk and overhead of traditional hiring.
            </p>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-50">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Challenges Limiting Firm Growth</h2>
              <p className="text-lg text-slate-600">Why traditional scaling models are failing modern firms.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {painPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{point.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Outsourced Support Solves Challenges */}
        <section className="py-20 bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-slate-900">Unlock Scalable Growth</h2>
                <div className="space-y-6">
                   <p className="text-slate-600 text-lg">
                     By partnering with FinxisAI, you transform your firm's operational model.
                   </p>
                   <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
                       <div>
                         <h3 className="font-bold text-slate-900">Flexible Capacity</h3>
                         <p className="text-slate-600">Scale your workforce up instantly during tax season and down when things slow, aligning costs with revenue.</p>
                       </div>
                     </li>
                     <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
                       <div>
                         <h3 className="font-bold text-slate-900">Reduced Overhead</h3>
                         <p className="text-slate-600">Eliminate recruiting fees, training downtime, benefits, and office space costs associated with internal hires.</p>
                       </div>
                     </li>
                     <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
                       <div>
                         <h3 className="font-bold text-slate-900">Consistent Quality</h3>
                         <p className="text-slate-600">Our standardized processes and AI-assisted reviews ensure deliverables meet your firm's rigorous quality standards every time.</p>
                       </div>
                     </li>
                     <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
                       <div>
                         <h3 className="font-bold text-slate-900">Faster Turnaround</h3>
                         <p className="text-slate-600">With a dedicated support team, you can deliver work to clients faster, improving satisfaction and retention.</p>
                       </div>
                     </li>
                   </ul>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                 <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Services Included</h3>
                 <div className="grid sm:grid-cols-2 gap-4">
                   {servicesIncluded.map((service, index) => (
                     <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                       <service.icon className="w-8 h-8 text-indigo-600 mb-3" />
                       <h4 className="font-bold text-slate-900 mb-1">{service.title}</h4>
                       <p className="text-xs text-slate-600">{service.description}</p>
                     </div>
                   ))}
                 </div>
                 <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                   <p className="text-sm text-slate-600 mb-4">Plus: Client communication support, documentation, and quality review.</p>
                   <Link to="/contact">
                     <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Request Service Detail</Button>
                   </Link>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Compliance Framework */}
        <section className="py-20 bg-slate-900 text-white">
           <div className="container-max text-center max-w-4xl mx-auto">
             <ShieldCheck className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
             <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Framework Built on Trust</h2>
             <p className="text-xl text-slate-300 mb-10 leading-relaxed">
               We understand that outsourcing requires a leap of faith. That's why we've built a compliance framework that mirrors your own. Your firm maintains full accountability and control, while we provide the secure, reliable execution. From SOC 2 security protocols to strict adherence to professional ethics, we operate as a seamless, compliant extension of your practice.
             </p>
             <div className="grid sm:grid-cols-3 gap-6 text-left">
               <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h3 className="font-bold text-lg mb-2 text-indigo-300">Data Security</h3>
                 <p className="text-sm text-slate-300">Bank-level encryption and secure portals ensure client data never leaves protected environments.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h3 className="font-bold text-lg mb-2 text-indigo-300">Human Review</h3>
                 <p className="text-sm text-slate-300">AI is a tool, not a replacement. Experienced professionals review every deliverable.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h3 className="font-bold text-lg mb-2 text-indigo-300">Audit Trails</h3>
                 <p className="text-sm text-slate-300">Comprehensive logs of all activities provide total transparency and accountability.</p>
               </div>
             </div>
           </div>
        </section>

        {/* Implementation & Integration */}
        <section className="py-20 bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                 <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
                    <h3 className="font-bold text-xl text-indigo-900 mb-4">Integration Timeline</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">1</div>
                        <div>
                          <h4 className="font-bold text-slate-900">Discovery (Week 1)</h4>
                          <p className="text-sm text-slate-600">We map your workflows, software stack, and firm standards.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
                        <div>
                          <h4 className="font-bold text-slate-900">Setup & Access (Week 2)</h4>
                          <p className="text-sm text-slate-600">Secure portals are established, and data access is configured.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">3</div>
                        <div>
                          <h4 className="font-bold text-slate-900">Pilot Phase (Week 3)</h4>
                          <p className="text-sm text-slate-600">We process a small batch of clients to calibrate to your quality standards.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">4</div>
                        <div>
                          <h4 className="font-bold text-slate-900">Full Rollout (Week 4+)</h4>
                          <p className="text-sm text-slate-600">We scale support to your full client roster with regular reporting.</p>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">Seamless Implementation</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Disruption is the enemy of efficiency. Our onboarding process is designed to minimize impact on your daily operations.
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  We integrate directly with your existing tools—QuickBooks, Xero, CCH, Thomson Reuters—and adopt your communication protocols. To your clients, it feels like nothing has changed, except that you are more responsive and available.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                    Discuss Integration
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Business Impact */}
        <section className="py-20 bg-slate-50">
           <div className="container-max text-center">
             <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-slate-900">Tangible Business Impact</h2>
             <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                 <div className="text-4xl font-bold text-indigo-600 mb-2">40%</div>
                 <h3 className="font-bold text-slate-900">Margin Improvement</h3>
                 <p className="text-sm text-slate-500 mt-2">On fixed-fee bookkeeping engagements</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                 <div className="text-4xl font-bold text-indigo-600 mb-2">0</div>
                 <h3 className="font-bold text-slate-900">Hiring Headaches</h3>
                 <p className="text-sm text-slate-500 mt-2">Instant access to trained talent</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                 <div className="text-4xl font-bold text-indigo-600 mb-2">2x</div>
                 <h3 className="font-bold text-slate-900">Faster Turnaround</h3>
                 <p className="text-sm text-slate-500 mt-2">Client deliverables completed sooner</p>
               </div>
             </div>
           </div>
        </section>

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

        {/* CTA Section */}
        <section className="py-20 bg-indigo-900 text-white border-t border-indigo-800">
          <div className="container-max text-center">
             <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Scale Your Firm?</h2>
             <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
               Partner with FinxisAI to unlock capacity, improve margins, and deliver exceptional value to your clients.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold border-0 shadow-lg w-full sm:w-auto">
                    Schedule Firm Consultation
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-indigo-400 text-white hover:bg-white/10 w-full sm:w-auto">
                   Request ROI Analysis
                </Button>
                <Button size="lg" variant="ghost" className="text-indigo-200 hover:bg-indigo-800 w-full sm:w-auto">
                   Download Firm Guide
                </Button>
             </div>
             <p className="mt-8 text-sm text-indigo-300">
               Questions? Call us at (800) 555-0199 or email <a href="mailto:partners@finxisai.com" className="text-white underline">partners@finxisai.com</a>
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

export default CPAOutsourcedSupportPage;