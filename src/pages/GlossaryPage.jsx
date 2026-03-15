import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, ChevronDown, ChevronUp, ArrowRight, Lightbulb, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { glossaryTerms } from '@/lib/glossaryData';

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTerm, setExpandedTerm] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(glossaryTerms.map(t => t.category))].sort();

  const toggleTerm = (term) => {
    if (expandedTerm === term) {
      setExpandedTerm(null);
    } else {
      setExpandedTerm(term);
    }
  };

  const filteredTerms = glossaryTerms.filter(t => {
    const matchesSearch = t.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.shortDef.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => a.term.localeCompare(b.term));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "FinxisAI Financial Glossary",
    "description": "A comprehensive dictionary of financial, accounting, tax, and business terms.",
    "hasDefinedTerm": glossaryTerms.map(t => ({
      "@type": "DefinedTerm",
      "name": t.term,
      "description": t.shortDef
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Financial Glossary | Accounting Terms Defined - FinxisAI</title>
        <meta name="description" content="Master the language of finance with our comprehensive glossary. Detailed definitions for accounting, tax, and business terms like EBITDA, Burn Rate, and Accruals." />
        <meta name="keywords" content="financial glossary, accounting terms, business finance definitions, CPA terminology, EBITDA definition, working capital explanation" />
        <link rel="canonical" href="https://finxisai.com/glossary" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finxisai.com/glossary" />
        <meta property="og:title" content="FinxisAI Financial Glossary" />
        <meta property="og:description" content="Decode the language of finance. Comprehensive definitions for modern business." />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Header />
      <main>
        <section className="pt-32 pb-12 section-padding bg-white border-b border-slate-200">
          <div className="container-max text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-emerald-700 font-medium text-sm mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Financial Knowledge Base
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                The Language of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Finance</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
                Don't let jargon hold you back. Explore our in-depth glossary of essential accounting, tax, and business terms.
              </p>

              <div className="max-w-2xl mx-auto space-y-4">
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search for a term (e.g., EBITDA, Accrual)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition shadow-sm"
                  />
                </div>
                
                {/* Category Filter Pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === cat 
                          ? 'bg-emerald-600 text-white shadow-md' 
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-slate-50 min-h-[600px]">
          <div className="container-max max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredTerms.length > 0 ? filteredTerms.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card 
                    className={`border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${expandedTerm === item.term ? 'ring-2 ring-emerald-500' : ''}`}
                  >
                    <div 
                      className="p-6 cursor-pointer bg-white flex items-center justify-between group"
                      onClick={() => toggleTerm(item.term)}
                    >
                      <div className="flex-grow pr-8">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.term}</h2>
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                            {item.category}
                          </Badge>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{item.shortDef}</p>
                      </div>
                      <div className={`flex-shrink-0 text-slate-400 group-hover:text-emerald-500 transition-colors duration-300 ${expandedTerm === item.term ? 'rotate-180' : ''}`}>
                        <ChevronDown size={24} />
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedTerm === item.term && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-slate-100"
                        >
                          <div className="p-8 bg-slate-50/50">
                            <div className="prose prose-slate max-w-none mb-8">
                              <p className="text-lg text-slate-700 leading-relaxed">
                                {item.detailedDefinition}
                              </p>
                              
                              <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div>
                                  <h4 className="font-bold text-lg text-slate-900 mb-2">Why it Matters</h4>
                                  <p className="text-slate-600">{item.whyItMatters}</p>
                                </div>
                                <div>
                                  <h4 className="font-bold text-lg text-slate-900 mb-2">Real-World Example</h4>
                                  <p className="text-slate-600 italic border-l-2 border-emerald-300 pl-4 bg-white p-3 rounded-r-lg">
                                    "{item.realWorldExample}"
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-8">
                               <h5 className="font-bold text-blue-800 flex items-center mb-2">
                                 <Lightbulb className="w-5 h-5 mr-2 text-yellow-500 fill-yellow-500" /> 
                                 Pro Tip
                               </h5>
                               <p className="text-slate-700 font-medium">{item.proTip}</p>
                            </div>
                            
                            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                              <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-sm text-slate-500 font-bold uppercase tracking-wider mr-2">Related:</span>
                                {item.relatedTerms && item.relatedTerms.map((term, i) => (
                                  <span 
                                    key={i} 
                                    className="text-sm bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600 hover:text-emerald-600 hover:border-emerald-200 cursor-pointer transition-colors"
                                    onClick={() => {
                                      setSearchTerm(term);
                                      window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                  >
                                    {term}
                                  </span>
                                ))}
                              </div>
                              <Link to="/contact">
                                <Button size="sm" variant="outline" className="text-emerald-700 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800">
                                  Need help with this? <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              )) : (
                <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">No terms found</h3>
                  <p className="text-slate-500 max-w-md mx-auto mb-6">We couldn't find a definition for "{searchTerm}" in the selected category.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
          
          <div className="container-max text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Knowledge is power.<br/>Automation is freedom.</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Now that you understand the terms, let FinxisAI handle the work. Automate your bookkeeping, taxes, and reporting today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/onboarding">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 h-14 text-lg border-0 shadow-lg shadow-emerald-900/20">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-white/10 px-8 h-14 text-lg">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GlossaryPage;