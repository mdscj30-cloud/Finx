import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrainCircuit, FileCheck, Target, ArrowRight, ShieldCheck, Lock, Users, Bot, Briefcase } from 'lucide-react';
import { generateOrganizationSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seoHelpers';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import SEOHead from '@/components/SEOHead';

const HomePage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const services = [
    {
      title: "AI-Enabled Bookkeeping",
      description: "Automated reconciliation and transaction coding with expert oversight.",
      icon: BrainCircuit,
      color: "blue",
      path: "/services/ai-bookkeeping"
    },
    {
      title: "CPA Firm Solutions",
      description: "White-label bookkeeping and outsourced support to scale your practice.",
      icon: Briefcase,
      color: "purple",
      path: "/services/cpa-bookkeeping"
    },
    {
      title: "Tax Preparation",
      description: "AI-assisted filing and strategic tax planning for maximum savings.",
      icon: FileCheck,
      color: "emerald",
      path: "/services/tax-preparation"
    },
    {
      title: "Virtual CFO",
      description: "Fractional CFO leadership for strategic growth and forecasting.",
      icon: Target,
      color: "violet",
      path: "/services/virtual-cfo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEOHead 
        title="FinxisAI | Financial Automation for CPAs & SMBs"
        description="Automate bookkeeping, tax prep, and financial reporting with FinxisAI. The all-in-one AI financial platform for CPAs and growing businesses."
        keywords="AI accounting, automated bookkeeping, CPA software, financial automation, virtual CFO, fintech, accounting AI"
        url="https://finxis.ai/"
        schema={[
          generateOrganizationSchema(),
          generateLocalBusinessSchema(),
          generateBreadcrumbSchema([{ name: "Home", url: "https://finxis.ai" }])
        ]}
      />

      <Header />
      <main>
        {/* Updated Hero with CPA CTA */}
        <div className="relative">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
            priority={true}
          />
          <div className="relative z-10">
             <Hero onWatchDemo={() => setIsVideoOpen(true)} />
          </div>
        </div>
        
        <section aria-label="Key Features">
          <Features />
        </section>
        
        <section aria-label="Platform Benefits">
          <Benefits />
        </section>
        
        <section aria-label="Product Showcase">
          <ProductShowcase />
        </section>

        {/* Trust & Transparency Section */}
        <section aria-label="Trust and Transparency" className="py-20 bg-white">
          <div className="container-max">
             <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Why You Can Trust FinxisAI</h2>
               <p className="text-lg text-slate-600">
                 We believe in radical transparency. Our technology is powerful, but our commitment to security and human oversight is what defines us.
               </p>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link to="/about/our-process" className="group">
                  <div className="h-full p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Rigorous Process</h3>
                    <p className="text-sm text-slate-600">Our 5-step workflow ensures every data point is verified by a human expert.</p>
                  </div>
                </Link>

                <Link to="/about/data-security" className="group">
                  <div className="h-full p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Data Security</h3>
                    <p className="text-sm text-slate-600">Bank-grade encryption and SOC 2 Type II compliance standards protect your assets.</p>
                  </div>
                </Link>

                <Link to="/about/team" className="group">
                  <div className="h-full p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Expert Team</h3>
                    <p className="text-sm text-slate-600">Led by seasoned CPAs and financial strategists, not just software engineers.</p>
                  </div>
                </Link>

                <Link to="/about/ai-safety" className="group">
                  <div className="h-full p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 text-purple-600">
                      <Bot className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">AI Safety</h3>
                    <p className="text-sm text-slate-600">Deterministic algorithms and strict privacy controls prevent hallucinations and misuse.</p>
                  </div>
                </Link>
             </div>
          </div>
        </section>

        {/* Services Section */}
        <section aria-label="Our Services" className="section-padding bg-slate-50">
          <div className="container-max">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Comprehensive Financial Services</h2>
              <p className="text-lg text-slate-600">
                From daily bookkeeping to high-level strategy, we have the right solution for your growth stage.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link key={index} to={service.path} className="group">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="h-full bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-${service.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-7 h-7 text-${service.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className={`flex items-center font-semibold text-${service.color}-600 group-hover:gap-2 transition-all`}>
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services/cpa-outsourced-support">
                <Button variant="outline" className="border-slate-300 text-slate-600 hover:text-blue-600">
                  View All CPA Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section aria-label="Client Testimonials">
          <Testimonials />
        </section>
        
        <section aria-label="Pricing Plans">
          <Pricing />
        </section>
        
        <section aria-label="Frequently Asked Questions">
          <FAQ />
        </section>
        
        <section aria-label="Get Started">
          <CallToAction />
        </section>
      </main>
      <Footer />
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="FinxisAI Product Demo"
      />
    </div>
  );
};

export default HomePage;