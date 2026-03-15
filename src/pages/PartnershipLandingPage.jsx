import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, Zap, Users, Globe, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RevenueShareCalculator from '@/components/RevenueShareCalculator';
import PartnershipApplicationForm from '@/components/PartnershipApplicationForm';
import PartnershipTiers from '@/components/PartnershipTiers';
import PartnershipSuccessStories from '@/components/PartnershipSuccessStories';
import PartnershipFAQ from '@/components/PartnershipFAQ';

// Sub-components defined inline for simplicity, or could be separate files
const PartnershipHero = ({ scrollToForm }) => (
  <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 bg-slate-900 overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa?auto=format&fit=crop&q=80" 
        alt="Modern office collaborative workspace" 
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
    </div>
    
    <div className="container-max relative z-10">
      <div className="max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
           <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 font-medium text-sm mb-6">
             For CPA Firms & Agencies
           </span>
           <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
             Scale Your Firm with <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">White-Label AI</span>
           </h1>
           <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
             Add high-margin bookkeeping and advisory services without hiring more staff. 
             We provide the infrastructure; you keep the client relationship and 30-40% of the revenue.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
             <Button size="lg" onClick={scrollToForm} className="bg-blue-600 hover:bg-blue-500 text-white h-14 px-8 text-lg">
               Become a Partner
             </Button>
             <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-white/10 h-14 px-8 text-lg">
               View Tiers
             </Button>
           </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const PartnershipOpportunity = () => (
  <section className="py-24 bg-white">
    <div className="container-max">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-3xl font-bold text-slate-900 mb-6">The Scalability Trap</h2>
           <p className="text-lg text-slate-600 mb-8">
             Most CPA firms are stuck. To grow revenue, you need more clients. To handle more clients, you need more staff. 
             Margins stay flat while management headaches grow.
           </p>
           <ul className="space-y-4">
             {["Staff burnout & turnover", "Low-margin compliance work", "Capacity constraints"].map((item, i) => (
               <li key={i} className="flex items-center text-slate-700">
                 <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                   <span className="text-red-500 font-bold">✕</span>
                 </div>
                 {item}
               </li>
             ))}
           </ul>
        </div>
        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">The Partnership Advantage</h2>
           <p className="text-lg text-slate-600 mb-8">
             FinxisAI breaks the linear growth model. Leverage our AI infrastructure to handle the heavy lifting, allowing you to focus on high-value advisory.
           </p>
           <ul className="space-y-4">
             {["Infinite scalability", "40%+ profit margins", "Focus on advisory"].map((item, i) => (
               <li key={i} className="flex items-center text-slate-700">
                 <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                   <Check className="w-4 h-4 text-green-600" />
                 </div>
                 {item}
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-slate-50">
     <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
           <p className="text-slate-600">A seamless extension of your firm.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
           {[
             { icon: Users, title: "1. You Onboard", desc: "Sign up clients using your white-label portal." },
             { icon: Zap, title: "2. We Automate", desc: "Our AI + human team handles the bookkeeping." },
             { icon: Shield, title: "3. You Review", desc: "Get clean, reconciled books ready for review." },
             { icon: Globe, title: "4. You Grow", desc: "Keep the client relationship and the profit." }
           ].map((step, i) => (
             <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                   <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
             </div>
           ))}
        </div>
     </div>
  </section>
);

const PartnershipLandingPage = () => {
  const formRef = useRef(null);
  
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>CPA White-Label Partnership Program | FinxisAI</title>
        <meta name="description" content="Partner with FinxisAI to offer white-label bookkeeping and advisory services. Scale your CPA firm with our AI infrastructure." />
      </Helmet>
      
      <Header />
      
      <main>
        <PartnershipHero scrollToForm={scrollToForm} />
        <PartnershipOpportunity />
        <HowItWorks />
        
        <section className="py-24 bg-white">
          <div className="container-max">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Calculate Your Revenue Share</h2>
              <p className="text-slate-600">See the potential impact on your bottom line.</p>
            </div>
            <RevenueShareCalculator />
          </div>
        </section>

        <section className="py-24 bg-slate-900 text-white">
           <div className="container-max">
              <div className="grid lg:grid-cols-2 gap-16">
                 <div>
                    <h2 className="text-3xl font-bold mb-6">Dedicated Support Team</h2>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                       You're not just getting software; you're getting a team. Every partner is assigned a dedicated account manager and a team of US-based bookkeeping reviewers to ensure quality.
                    </p>
                    <ul className="space-y-4">
                       <li className="flex items-center"><Check className="text-green-400 mr-3" /> Dedicated Account Manager</li>
                       <li className="flex items-center"><Check className="text-green-400 mr-3" /> US-Based Review Team</li>
                       <li className="flex items-center"><Check className="text-green-400 mr-3" /> Priority Slack Support</li>
                    </ul>
                 </div>
                 <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                      alt="Support Team" 
                      className="rounded-2xl shadow-2xl"
                    />
                 </div>
              </div>
           </div>
        </section>

        <section className="py-24 bg-white">
           <div className="container-max">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Partnership Tiers</h2>
                <p className="text-slate-600">Flexible options for firms of all sizes.</p>
             </div>
             <PartnershipTiers />
           </div>
        </section>

        <section className="py-24 bg-slate-50">
           <div className="container-max">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner Success Stories</h2>
                 <p className="text-slate-600">See how other firms are scaling with FinxisAI.</p>
              </div>
              <PartnershipSuccessStories />
           </div>
        </section>

        <section className="py-24 bg-white">
           <div className="container-max">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              </div>
              <PartnershipFAQ />
           </div>
        </section>

        <section ref={formRef} className="py-24 bg-blue-50">
           <div className="container-max">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Scale Your Firm?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                       Join the partner program today and start offering high-margin AI services to your clients. Application takes less than 2 minutes.
                    </p>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 mb-6">
                       <div className="flex items-start">
                          <Lock className="w-5 h-5 text-green-600 mt-1 mr-3" />
                          <div>
                             <h4 className="font-bold text-slate-900">No Commitment Required</h4>
                             <p className="text-sm text-slate-600">Applying doesn't lock you into anything. It simply starts the conversation.</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <PartnershipApplicationForm />
              </div>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PartnershipLandingPage;