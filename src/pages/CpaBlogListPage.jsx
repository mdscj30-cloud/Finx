import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CpaBlogPostCard from '@/components/CpaBlogPostCard';
import { cpaBlogPosts, cpaCategories } from '@/lib/cpaBlogPostsData';
import { Search, SlidersHorizontal, X, ArrowLeft, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const CpaBlogListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12; // Increased to 12

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const decodedCat = decodeURIComponent(cat).replace(/-/g, ' ');
      // Simple fuzzy match or exact match
      const matchedCat = cpaCategories.find(c => c.toLowerCase() === decodedCat.toLowerCase());
      setSelectedCategory(matchedCat || 'All');
    } else {
      setSelectedCategory('All');
    }
    
    const search = searchParams.get('search');
    if (search) setSearchQuery(search);
    
    setCurrentPage(1);
  }, [searchParams]);

  const filteredPosts = cpaBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.metaDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSearchParams({});
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: encodeURIComponent(cat.toLowerCase().replace(/\s+/g, '-')) });
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Featured post is always the latest one for the hero section if no search
  const featuredPost = !searchQuery && selectedCategory === 'All' ? cpaBlogPosts[0] : null;
  
  // If we show a featured post, we filter it out of the main grid for the first page
  const displayPosts = (featuredPost && currentPage === 1) 
    ? currentPosts.filter(p => p.id !== featuredPost.id) 
    : currentPosts;

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>CPA Knowledge Hub | Strategic Insights & Industry Trends | FinxisAI</title>
        <meta name="description" content="Expert insights for CPAs and accounting firms. Explore guides on tax strategy, practice management, automation, and industry-specific financial services." />
        <link rel="canonical" href="https://finxisai.com/blog/cpa" />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-indigo-900 text-white py-20 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 z-0 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
          
          <div className="container-max relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
               <Badge className="bg-indigo-500/30 text-indigo-100 hover:bg-indigo-500/40 mb-4 border-indigo-400/30 px-4 py-1">
                 CPA Knowledge Hub
               </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
                Elevate Your Practice
              </h1>
              <p className="text-xl text-indigo-100 leading-relaxed">
                Strategic insights, regulatory updates, and practice management guides designed exclusively for forward-thinking accounting professionals.
              </p>
            </div>
            
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search topics like 'Tax Planning', 'Automation'..." 
                className="pl-12 py-7 bg-white/10 border-indigo-400/30 text-white placeholder:text-indigo-200/60 rounded-full focus:bg-white/20 transition-all focus:ring-2 focus:ring-indigo-400 text-lg shadow-lg backdrop-blur-sm"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if(!e.target.value) {
                    const newParams = new URLSearchParams(searchParams);
                    newParams.delete('search');
                    setSearchParams(newParams);
                  }
                }}
              />
            </div>
          </div>
        </section>

        <div className="container-max">
           {/* Breadcrumb */}
           <div className="mb-8 text-sm text-slate-500 flex items-center gap-2">
             <Link to="/" className="hover:text-indigo-600">Home</Link> <ChevronRight className="w-3 h-3" />
             <span className="text-slate-800 font-medium">CPA Knowledge Hub</span>
           </div>

           {/* Featured Post (Only on initial view) */}
           {featuredPost && currentPage === 1 && (
             <div className="mb-16">
               <Link to={`/blog/cpa/${featuredPost.slug}`} className="group relative block rounded-2xl overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                 <img 
                   src={featuredPost.imageUrl} 
                   alt={featuredPost.title} 
                   className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full md:w-2/3 text-white">
                   <Badge className="bg-indigo-600 hover:bg-indigo-700 mb-4 border-0 text-white">
                     Featured Insight
                   </Badge>
                   <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-indigo-200 transition-colors">
                     {featuredPost.title}
                   </h2>
                   <p className="text-lg text-slate-200 mb-6 line-clamp-2">
                     {featuredPost.metaDescription}
                   </p>
                   <div className="flex items-center gap-4 text-sm font-medium">
                     <span className="flex items-center"><BookOpen className="w-4 h-4 mr-2" /> {featuredPost.readingTime}</span>
                     <span className="flex items-center">•</span>
                     <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                   </div>
                 </div>
               </Link>
             </div>
           )}

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-12">
              
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 sticky top-20 bg-slate-50 z-20 pt-2">
                <Button
                    variant={selectedCategory === 'All' ? "default" : "outline"}
                    onClick={() => handleCategoryClick('All')}
                    className={`rounded-full border-slate-200 ${selectedCategory === 'All' ? 'bg-indigo-600 text-white border-indigo-600' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    All Topics
                  </Button>
                {cpaCategories.map(cat => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    onClick={() => handleCategoryClick(cat)}
                    className={`rounded-full border-slate-200 ${selectedCategory === cat ? 'bg-indigo-600 text-white border-indigo-600' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    {cat}
                  </Button>
                ))}
                {(selectedCategory !== 'All' || searchQuery) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="ml-auto text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <X className="w-4 h-4 mr-1" /> Clear Filters
                  </Button>
                )}
              </div>

              {/* Stats Bar */}
              <div className="mb-8 text-sm text-slate-500 font-medium">
                Showing {displayPosts.length} articles {selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}
              </div>

              {/* Posts Grid */}
              {displayPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {displayPosts.map((post, idx) => (
                    <CpaBlogPostCard key={post.id} post={post} index={idx} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-slate-300">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No insights found</h3>
                  <p className="text-slate-500 mb-6">We couldn't find any articles matching your current filters.</p>
                  <Button onClick={clearFilters} className="bg-indigo-600 text-white hover:bg-indigo-700">
                    Clear all filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <Button
                    variant="outline"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="h-10 px-4"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Button
                      key={i}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      onClick={() => paginate(i + 1)}
                      className={`w-10 h-10 p-0 ${currentPage === i + 1 ? 'bg-indigo-600 text-white' : ''}`}
                    >
                      {i + 1}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="h-10 px-4"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Newsletter / CTA Section */}
        <section className="container-max mt-20">
           <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="max-w-2xl">
               <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-3">Stay ahead of the curve</h2>
               <p className="text-indigo-700">
                 Join 5,000+ CPA professionals receiving our weekly digest on practice management, tax strategy, and AI trends.
               </p>
             </div>
             <div className="flex w-full md:w-auto gap-3 flex-col sm:flex-row">
               <Input placeholder="Enter your work email" className="bg-white border-indigo-200" />
               <Button className="bg-indigo-600 hover:bg-indigo-700 text-white whitespace-nowrap">
                 Subscribe Free
               </Button>
             </div>
           </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default CpaBlogListPage;