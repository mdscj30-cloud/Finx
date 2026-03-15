import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Phone, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PartnershipConfirmationPage = () => {
  const steps = [
    { icon: Phone, title: "Account Manager Contact", desc: "Your dedicated manager will call you within 24 hours.", time: "Day 1" },
    { icon: Calendar, title: "Onboarding Call", desc: "We'll align on your firm's goals and white-label preferences.", time: "Day 2-3" },
    { icon: Globe, title: "Portal Setup", desc: "We configure your branded client portal and dashboards.", time: "Day 4-5" },
    { icon: CheckCircle2, title: "Client Launch", desc: "Begin migrating your first batch of clients to the platform.", time: "Day 7" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-max max-w-4xl text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-12"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Application Received!</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Thank you for applying to the FinxisAI Partner Program. We're excited to help you scale your firm.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Your Next Steps</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-100"></div>
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-200">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{step.time}</span>
                    <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Access Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
             </Link>
             <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                   Contact Support
                </Button>
             </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PartnershipConfirmationPage;