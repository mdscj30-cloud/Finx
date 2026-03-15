import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const OnboardingHero = () => {
  return (
    <section className="pt-32 pb-20 section-padding bg-white">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium text-sm mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Your Journey to Automation Starts Here
          </div>
          <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            A Seamless Onboarding{' '}
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We've designed a simple, guided process to get you up and running with FinxisAI in no time. Our team is here to support you at every stage.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingHero;