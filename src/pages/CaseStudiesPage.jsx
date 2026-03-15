import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { getAllCaseStudies, formatReadTime } from '@/lib/caseStudyHelpers';
import { Search, Filter, ArrowRight, X, Briefcase, TrendingUp, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudiesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const allStudies = getAllCaseStudies();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedIndustry, setSelectedIndustry] = useState(searchParams.get('industry') || 'All');
  const [selectedService, setSelectedService] = useState(searchParams.get('service') || 'All');
  const [selectedSize, setSelectedSize] = useState(searchParams.get('size') || 'All');
  const [filteredStudies, setFilteredStudies] = useState(allStudies);

  const industries = ['All', 'SaaS', 'E-Commerce', 'Healthcare', 'Agency', 'Small Business'];
  const services = ['All', 'AI Accounting', 'Virtual CFO', 'Payroll', 'Tax Planning', 'AI Bookkeeping'];
  const sizes = ['All', 'Startup', 'Growth', 'Enterprise', 'Small Business', 'Mature'];

  useEffect(() => {
    // Update URL when filters change
    const params = {};
    if (searchQuery) params.search = searchQuery;
    if (selectedIndustry !== 'All') params.industry = selectedIndustry;
    if (selectedService !== 'All') params.service = selectedService;
    if (selectedSize !== 'All') params.size = selectedSize;
    setSearchParams(params);

    // Filter Logic
    let results = allStudies;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(s => 
        s.title.toLowerCase().includes(q) || 
        s.industry.toLowerCase().includes(q) ||
        s.executiveSummary.toLowerCase().includes(q)
      );
    }

    if (selectedIndustry !== 'All') results = results.filter(s => s.industry === selectedIndustry);
    if (selectedService !== 'All') results = results.filter(s => s.service === selectedService);
    if (selectedSize !== 'All') results = results.filter(s => s.companySize === selectedSize);

    setFilteredStudies(results);
  }, [searchQuery, selectedIndustry, selectedService, selectedSize, setSearchParams, allStudies]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedIndustry('All');
    setSelectedService('All');
    setSelectedSize('All');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Case Studies | FinxisAI Success Stories</title>
        <meta name="description" content="See how businesses automate finance with FinxisAI. Real results from SaaS, E-commerce, and Agencies using our AI platform." />
        <meta property="og:title" content="FinxisAI Case Studies" />
        <meta property="og:description" content="Real results from real businesses. Discover how AI finance transforms operations." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 z-0"></div>
          <div className="container-max text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Real-World Results
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Discover how companies across industries are transforming their financial operations with FinxisAI.
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search case studies..." 
                className="pl-12 py-6 bg-white/10 border-slate-700 text-white placeholder:text-slate-400 rounded-full focus:bg-white/20 transition-all focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        <div className="container-max">
          {/* Filters */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-10">
             <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-6">
               <h2 className="text-lg font-bold flex items-center text-slate-800">
                 <Filter className="w-5 h-5 mr-2 text-blue-600" /> Filters
               </h2>
               <div className="text-sm text-slate-500">
                 Showing {filteredStudies.length} of {allStudies.length} results
               </div>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
               <div>
                 <label className="text-xs font-semibold text-slate-500 uppercase mb-2 block">Industry</label>
                 <div className="flex flex-wrap gap-2">
                   {industries.map(ind => (
                     <button
                       key={ind}
                       onClick={() => setSelectedIndustry(ind)}
                       className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedIndustry === ind ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                     >
                       {ind}
                     </button>
                   ))}
                 </div>
               </div>
               <div>
                 <label className="text-xs font-semibold text-slate-500 uppercase mb-2 block">Service</label>
                 <div className="flex flex-wrap gap-2">
                   {services.map(svc => (
                     <button
                       key={svc}
                       onClick={() => setSelectedService(svc)}
                       className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedService === svc ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                     >
                       {svc}
                     </button>
                   ))}
                 </div>
               </div>
               <div>
                 <label className="text-xs font-semibold text-slate-500 uppercase mb-2 block">Company Size</label>
                  <div className="flex flex-wrap gap-2">
                   {sizes.map(sz => (
                     <button
                       key={sz}
                       onClick={() => setSelectedSize(sz)}
                       className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedSize === sz ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                     >
                       {sz}
                     </button>
                   ))}
                 </div>
               </div>
             </div>
             
             {(selectedIndustry !== 'All' || selectedService !== 'All' || selectedSize !== 'All' || searchQuery) && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                   <Button variant="ghost" size="sm" onClick={clearFilters} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                     <X className="w-4 h-4 mr-2" /> Clear All Filters
                   </Button>
                </div>
             )}
          </div>

          {/* Grid */}
          {filteredStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredStudies.map((study) => (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={`/case-studies/${study.slug}`} className="group h-full flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 overflow-hidden">
                       <div className="h-48 bg-slate-100 relative overflow-hidden">
                         {/* Placeholder colorful pattern */}
                         <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 to-${study.industry === 'Healthcare' ? 'emerald' : study.industry === 'SaaS' ? 'purple' : 'orange'}-100`}></div>
                         <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                           <Badge className="bg-white/90 text-slate-800 hover:bg-white backdrop-blur-sm shadow-sm">{study.industry}</Badge>
                         </div>
                       </div>
                       <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 uppercase font-semibold tracking-wide">
                             <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {study.companySize}</span>
                             <span>•</span>
                             <span>{formatReadTime(study.wordCount)}</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {study.title}
                          </h3>
                          <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                            {study.executiveSummary}
                          </p>
                          <div className="mt-auto pt-4 border-t border-slate-100">
                             <span className="text-blue-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                               View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                             </span>
                          </div>
                       </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
              <h3 className="text-lg font-semibold text-slate-900">No case studies found</h3>
              <p className="text-slate-500 mb-4">Try adjusting your filters or search terms.</p>
              <Button onClick={clearFilters} variant="outline">Reset Filters</Button>
            </div>
          )}

          {/* CTA */}
          <section className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-10 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-bold mb-4">Ready to achieve similar results?</h2>
               <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                 Join hundreds of businesses using FinxisAI to automate their finance and accelerate growth.
               </p>
               <div className="flex justify-center gap-4">
                 <Link to="/contact">
                   <Button size="lg" variant="secondary" className="font-bold text-blue-700">
                     Get Your Custom Plan
                   </Button>
                 </Link>
                 <Link to="/pricing">
                   <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                     View Pricing
                   </Button>
                 </Link>
               </div>
             </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;