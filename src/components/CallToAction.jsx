import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id="cta" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 lg:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow" />
          <div className="absolute -bottom-16 -right-10 w-48 h-48 bg-white/10 rounded-full animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full" />

          <div className="relative">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              14-day free trial · No credit card required
            </span>

            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Finances?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Join 1,000+ CPAs and businesses already saving hours every week with FinxisAI's AI-powered accounting platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-6 group">
                <Link to="/onboarding">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 group">
                <Link to="/contact">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book a Demo
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
