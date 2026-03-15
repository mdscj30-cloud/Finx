import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlossarySearch from '@/components/GlossarySearch';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { glossaryTerms } from '@/lib/glossaryTermsData';

const GlossaryIndexPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Handle filtering
  const handleFilterChange = (results) => {
    setFilteredTerms(results);
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTerms.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTerms.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Financial Glossary | Accounting & Business Terms | FinxisAI</title>
        <meta name="description" content="Browse our comprehensive glossary of 200+ financial, accounting, and business terms. Clear definitions and examples for business owners and CPAs." />
        <link rel="canonical" href="https://finxisai.com/glossary" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <div className="container-max">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Knowledge Base
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
                Financial <span className="text-blue-600">Glossary</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Master the language of finance. Clear definitions, practical examples, and actionable insights for modern business.
              </p>
            </motion.div>
          </div>

          {/* Search & Filter Component */}
          <GlossarySearch onFilterChange={handleFilterChange} />

          {/* Terms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentItems.length > 0 ? (
              currentItems.map((term, index) => (
                <motion.div
                  key={term.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link to={`/glossary/${term.slug}`} className="group h-full block">
                    <Card className="h-full p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col bg-white">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="outline" className="text-slate-600 border-slate-200 bg-slate-50">
                          {term.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {term.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                        {term.definition}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium text-sm mt-auto">
                        View Definition <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
                <p className="text-slate-500 text-lg">No terms found matching your criteria.</p>
                <Button 
                  variant="link" 
                  onClick={() => window.location.reload()}
                  className="text-blue-600"
                >
                  Reset Search
                </Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 p-0"
              >
                &lt;
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <Button
                  key={number}
                  variant={currentPage === number ? "default" : "outline"}
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 p-0 ${currentPage === number ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                >
                  {number}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 p-0"
              >
                &gt;
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GlossaryIndexPage;