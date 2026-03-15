import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustryServiceCTA = () => {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container-max relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Financial Operations?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Schedule a consultation today to see how our industry-specific solutions can accelerate your growth and simplify compliance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-50 border-0 text-lg px-8 py-6 h-auto shadow-xl w-full sm:w-auto">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryServiceCTA;