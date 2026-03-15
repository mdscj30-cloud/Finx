import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/BlogSidebar';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/lib/blogData';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { generateBreadcrumbSchema } from '@/lib/seoHelpers';

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialTag = searchParams.get('tag') || '';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [visiblePosts, setVisiblePosts] = useState(9); // Pagination

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All');
  }, [searchParams]);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filtering Logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = !initialTag || post.tags.includes(initialTag);
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, initialTag]);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>FinxisAI Blog | Expert Financial Insights & Tax Strategies</title>
        <meta name="description" content="Read expert articles on AI bookkeeping, tax strategies, CPA firm growth, and virtual CFO insights. Stay ahead with FinxisAI." />
        <link rel="canonical" href="https://finxis.ai/blog" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "https://finxis.ai" },
            { name: "Blog", url: "https://finxis.ai/blog" }
          ]))}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="bg-slate-900 text-white py-16 mb-12">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Financial Intelligence
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Actionable insights on tax, accounting, and growth for modern businesses.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search articles..." 
                className="pl-12 py-6 bg-white/10 border-slate-700 text-white placeholder:text-slate-400 rounded-full focus:bg-white/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              
              {/* Category Filter Bar (Mobile/Desktop) */}
              <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-200">
                <SlidersHorizontal className="w-4 h-4 text-slate-500 mr-2" />
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSearchParams(cat === 'All' ? {} : { category: cat });
                    }}
                    className={`rounded-full ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    {cat}
                  </Button>
                ))}
                {(selectedCategory !== 'All' || searchQuery || initialTag) && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="ml-auto text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <X className="w-4 h-4 mr-1" /> Clear
                  </Button>
                )}
              </div>

              {/* Tag Filter Indicator */}
              {initialTag && (
                <div className="mb-6 flex items-center">
                  <span className="text-sm text-slate-500 mr-2">Filtering by tag:</span>
                  <Badge variant="secondary" className="px-3 py-1 flex items-center gap-2">
                    #{initialTag}
                    <X 
                      className="w-3 h-3 cursor-pointer hover:text-red-500" 
                      onClick={() => setSearchParams({})}
                    />
                  </Badge>
                </div>
              )}

              {/* Featured Post (Only show on first page of 'All') */}
              {featuredPost && selectedCategory === 'All' && !searchQuery && !initialTag && (
                 <div className="mb-12">
                   <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                     <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-2"></span>
                     Featured Article
                   </h2>
                   <BlogPostCard post={featuredPost} />
                 </div>
              )}

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {displayedPosts
                  .filter(p => !(selectedCategory === 'All' && !searchQuery && !initialTag && p.id === featuredPost?.id)) // Exclude featured from grid if shown above
                  .map((post, idx) => (
                  <BlogPostCard key={post.id} post={post} index={idx} />
                ))}
              </div>

              {/* No Results State */}
              {displayedPosts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                  <h3 className="text-lg font-semibold text-slate-900">No articles found</h3>
                  <p className="text-slate-500">Try adjusting your search terms or filters.</p>
                  <Button variant="link" onClick={clearFilters} className="mt-2 text-blue-600">
                    View all articles
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {visiblePosts < filteredPosts.length && (
                <div className="mt-12 text-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={handleLoadMore}
                    className="min-w-[200px]"
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar Area */}
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;