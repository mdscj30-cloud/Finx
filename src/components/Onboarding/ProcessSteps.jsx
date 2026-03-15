import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, UploadCloud, Settings, BarChart3, Rocket, CheckCircle } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: UserPlus,
      title: '1. Schedule a Consultation',
      description: 'Start with a free, no-obligation consultation. We\'ll learn about your business and show you exactly how FinxisAI can help.',
    },
    {
      icon: Settings,
      title: '2. Seamless Integration',
      description: 'Our onboarding specialists connect FinxisAI to your existing bank accounts and financial software. It\'s fast, secure, and hands-free for you.',
    },
    {
      icon: UploadCloud,
      title: '3. Historical Data Sync',
      description: 'We securely import your past financial data, so your books are accurate and complete from day one. No manual data entry required.',
    },
    {
      icon: BarChart3,
      title: '4. Personalized Training',
      description: 'Your dedicated bookkeeper walks you and your team through your new dashboard, ensuring you know how to get the most out of FinxisAI.',
    },
    {
      icon: Rocket,
      title: '5. Go Live with Confidence',
      description: 'Your financial operations are now on autopilot. Enjoy real-time insights, automated bookkeeping, and more time to focus on your business.',
    },
    {
      icon: CheckCircle,
      title: '6. Ongoing Strategic Support',
      description: 'Your finance team is always available for questions, strategic advice, and regular financial check-ins to help you reach your goals.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Your Effortless Onboarding <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We've designed a white-glove onboarding experience to get you up and running in no time.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-1 bg-slate-200 -translate-x-1/2" aria-hidden="true" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start mb-12"
            >
              <div className="absolute left-8 -translate-x-1/2 bg-white z-10">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 shadow-lg flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="pl-24 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                {index % 2 !== 0 && (
                  <div className="p-8 bg-white rounded-2xl shadow-lg card-hover">
                    <h3 className="text-2xl font-display font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                )}
              </div>
              <div className="pl-24 md:pl-0 md:w-1/2 md:pl-12">
                 {index % 2 === 0 && (
                  <div className="p-8 bg-white rounded-2xl shadow-lg card-hover">
                    <h3 className="text-2xl font-display font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;