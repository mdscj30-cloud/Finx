import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import IndustryServiceBreadcrumb from './IndustryServiceBreadcrumb';

const IndustryServiceHero = ({ title, headline, tagline, serviceSlug, industrySlug }) => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>

      <div className="relative z-10">
        <IndustryServiceBreadcrumb serviceName={serviceSlug} industryName={industrySlug} />
        
        <div className="container-max mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-6 border border-blue-500/20">
              {title}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-white">
              {headline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 font-light max-w-2xl">
              {tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 text-lg px-8 py-6 h-auto shadow-lg shadow-blue-900/50 w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServiceHero;