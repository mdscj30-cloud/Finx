import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RelatedIndustryPages = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container-max">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Explore Other Industries</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/services/bookkeeping/ecommerce" className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all">
             <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2 flex items-center">
               E-Commerce Bookkeeping <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
             </h4>
             <p className="text-sm text-slate-600">Automated reconciliation for Shopify & Amazon sellers.</p>
          </Link>
          <Link to="/services/bookkeeping/healthcare" className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all">
             <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2 flex items-center">
               Healthcare Finance <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
             </h4>
             <p className="text-sm text-slate-600">HIPAA-compliant accounting for medical practices.</p>
          </Link>
          <Link to="/services/tax-prep/saas-startups" className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all">
             <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2 flex items-center">
               SaaS Tax Strategy <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
             </h4>
             <p className="text-sm text-slate-600">R&D credits and global compliance for tech.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedIndustryPages;