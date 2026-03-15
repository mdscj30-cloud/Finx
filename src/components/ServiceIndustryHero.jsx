import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceIndustryHero = ({ headline, subheading, image }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="Industry Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-white">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 font-light max-w-2xl">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 text-lg px-8 py-6 h-auto shadow-lg shadow-blue-900/50 w-full sm:w-auto">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 h-auto w-full sm:w-auto">
                View Success Stories
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceIndustryHero;