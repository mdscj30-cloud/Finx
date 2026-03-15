import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceIndustryCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-max text-center">
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Ready to Transform Your Financial Operations?</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Join the industry leaders leveraging FinxisAI to streamline compliance, reduce costs, and accelerate growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-0 text-lg px-8 py-6 h-auto shadow-lg shadow-blue-900/50 w-full sm:w-auto">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 text-slate-700 w-full sm:w-auto px-8 py-6 h-auto">
            <Download className="mr-2 w-5 h-5" /> Download Industry Guide
          </Button>
          <Button size="lg" variant="ghost" className="text-blue-600 hover:bg-blue-50 w-full sm:w-auto px-8 py-6 h-auto">
            <FileText className="mr-2 w-5 h-5" /> Request Case Study
          </Button>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Questions? Email us at <a href="mailto:industry@finxis.ai" className="text-blue-600 underline">industry@finxis.ai</a>
        </p>
      </div>
    </section>
  );
};

export default ServiceIndustryCTA;