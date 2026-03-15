import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts, allCategories } from '@/lib/blogData';
import { X, ArrowLeft, ArrowRight, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import SidebarNavigation from '@/components/SidebarNavigation';

const BlogListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    const cat = searchParams.get('category');
    // Normalize category comparison
    if (cat) {
      const matchedCat = allCategories.find(c => c.toLowerCase().replace(/\s+/g, '-') === cat);
      setSelectedCategory(matchedCat || 'All');
    } else {
      setSelectedCategory('All');
    }
    
    const search = searchParams.get('search');
    if (search) setSearchQuery(search);
    
    // Always reset to page 1 on new filter params unless it's just a refresh on same params
    // But keeping state consistent is key.
  }, [searchParams]);

  // Filtering Logic
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Ensure current page is valid
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSearchParams({});
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat) => {
    const normalizedCat = cat === 'All' ? 'All' : cat;
    setSelectedCategory(normalizedCat);
    setCurrentPage(1);
    if (normalizedCat === 'All') {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('category');
      setSearchParams(newParams);
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('category', normalizedCat.toLowerCase().replace(/\s+/g, '-'));
      setSearchParams(newParams);
    }
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setCurrentPage(1); 
    const newParams = new URLSearchParams(searchParams);
    if(val === '') {
        newParams.delete('search');
    } else {
        newParams.set('search', val);
    }
    setSearchParams(newParams);
  };

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const sidebarCategories = [
    { label: 'All Articles', value: 'All' },
    ...allCategories.map(cat => ({ label: cat, value: cat }))
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>FinxisAI Blog | Finance & AI Insights</title>
        <meta name="description" content="Expert guides on AI accounting, tax strategy, and business finance. Stay ahead with insights from FinxisAI's financial team." />
        <link rel="canonical" href="https://finxisai.com/blog" />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Breadcrumb Area */}
        <div className="bg-white border-b border-slate-200 py-2">
           <div className="container-max">
             <BreadcrumbNavigation />
           </div>
        </div>

        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 z-0"></div>
          <div className="container-max text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Financial Intelligence Hub
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Expert guides, strategies, and insights to help your business scale efficiently and compliantly.
            </p>
            <div className="max-w-xl mx-auto relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
               <Input 
                 type="text" 
                 placeholder="Search articles..." 
                 value={searchQuery}
                 onChange={handleSearchChange}
                 className="pl-12 h-12 bg-white/10 border-slate-600 text-white placeholder:text-slate-400 focus:bg-white/20"
               />
            </div>
          </div>
        </section>

        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Sidebar (Left) */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
               <div className="sticky top-24 space-y-8">
                 <SidebarNavigation 
                   title="Categories"
                   categories={sidebarCategories.map(cat => ({ label: cat.label, value: cat.value }))}
                   currentCategory={selectedCategory}
                   onCategoryChange={handleCategoryChange}
                 />
               </div>
            </aside>

            {/* Main Content (Right) */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              
              {/* Active Filters Display */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm font-semibold text-slate-500">Active Filters:</span>
                {selectedCategory !== 'All' && (
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                    {selectedCategory}
                    <button onClick={() => handleCategoryChange('All')} className="ml-2 hover:text-blue-900"><X className="w-3 h-3" /></button>
                  </div>
                )}
                {searchQuery && (
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                    Search: "{searchQuery}"
                    <button onClick={() => {setSearchQuery(''); const newParams = new URLSearchParams(searchParams); newParams.delete('search'); setSearchParams(newParams);}} className="ml-2 hover:text-blue-900"><X className="w-3 h-3" /></button>
                  </div>
                )}
                {(selectedCategory !== 'All' || searchQuery) && (
                   <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs text-red-500 hover:text-red-700 h-auto p-0 ml-2">Clear All</Button>
                )}
                {selectedCategory === 'All' && !searchQuery && (
                   <span className="text-sm text-slate-400 italic">None</span>
                )}
              </div>

              {/* Stats Bar */}
              <div className="mb-6 text-sm text-slate-500 flex justify-between items-center pb-4 border-b border-slate-200">
                <span>Showing {filteredPosts.length > 0 ? indexOfFirstPost + 1 : 0}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} articles</span>
              </div>

              {/* Posts Grid */}
              {currentPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {currentPosts.map((post, idx) => (
                    <BlogPostCard key={post.id} post={post} index={idx} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                  <h3 className="text-lg font-semibold text-slate-900">No articles found</h3>
                  <p className="text-slate-500">Try adjusting your search terms or filters.</p>
                  <Button variant="link" onClick={clearFilters} className="mt-2 text-blue-600">
                    View all articles
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(1)}
                    disabled={currentPage === 1}
                    className="hidden sm:flex"
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  <div className="flex items-center space-x-1">
                    {getPageNumbers().map((page, i) => (
                      <Button
                        key={i}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => typeof page === 'number' ? paginate(page) : null}
                        disabled={typeof page !== 'number'}
                        className={`w-9 h-9 p-0 ${currentPage === page ? 'bg-blue-600 text-white' : ''} ${typeof page !== 'number' ? 'cursor-default border-none hover:bg-transparent' : ''}`}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(totalPages)}
                    disabled={currentPage === totalPages}
                    className="hidden sm:flex"
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogListPage;