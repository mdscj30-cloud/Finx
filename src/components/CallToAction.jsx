import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 relative">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 relative">
            Join hundreds of businesses and accounting firms who trust FinxisAI to automate their finances and unlock strategic insights.
          </p>
          <Button asChild size="lg" className="btn-primary bg-white text-blue-600 hover:bg-blue-50 group text-lg px-8 py-6">
            <Link to="/contact">
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;