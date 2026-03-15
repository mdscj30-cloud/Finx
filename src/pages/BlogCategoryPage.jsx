import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/BlogSidebar';
import BlogPostCard from '@/components/BlogPostCard';
import { Button } from '@/components/ui/button';
import { getPostsByCategory, allCategories, getPostBySlug } from '@/lib/blogData';
import { generateBreadcrumbSchema } from '@/lib/seoHelpers';
import { FolderOpen, ArrowRight } from 'lucide-react';

const BlogCategoryPage = () => {
  const { category } = useParams();
  
  // Convert URL slug back to Category Name (e.g. "small-business" -> "Small Business")
  const categoryName = allCategories.find(c => c.toLowerCase().replace(/\s+/g, '-') === category);

  if (!categoryName) {
    return <Navigate to="/blog" replace />;
  }

  const posts = getPostsByCategory(categoryName);
  
  // Find pillar page for this category if it exists
  const pillarPost = posts.find(p => p.isFeatured);
  const clusterPosts = posts.filter(p => !p.isFeatured);

  return (
    <div className="min-h-screen bg-slate-50">
       <Helmet>
        <title>{categoryName} Financial Services Guides | FinxisAI Blog</title>
        <meta name="description" content={`Comprehensive guides and articles on financial services for ${categoryName}. Expert accounting, tax, and CFO insights.`} />
        <link rel="canonical" href={`https://finxis.ai/blog/category/${category}`} />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "https://finxis.ai" },
            { name: "Blog", url: "https://finxis.ai/blog" },
            { name: categoryName, url: `https://finxis.ai/blog/category/${category}` }
          ]))}
        </script>
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
         <section className="bg-slate-900 text-white py-16 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="container-max text-center relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <FolderOpen className="w-6 h-6 text-blue-300" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              {categoryName} Insights
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Expert financial guidance tailored for the {categoryName} industry.
            </p>
          </div>
        </section>

        <div className="container-max">
           <div className="grid lg:grid-cols-12 gap-12">
             <div className="lg:col-span-8">
               
               {/* Pillar Page Highlight */}
               {pillarPost && (
                 <div className="mb-12">
                   <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Comprehensive Guide</h2>
                   <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden group">
                     <div className="relative h-64 md:h-80 overflow-hidden">
                        <img 
                          src={pillarPost.imageUrl} 
                          alt={pillarPost.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                          <div>
                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3">Pillar Page</span>
                            <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{pillarPost.title}</h3>
                          </div>
                        </div>
                     </div>
                     <div className="p-8">
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">{pillarPost.excerpt}</p>
                        <Link to={`/blog/${pillarPost.slug}`}>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            Read Full Guide <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                     </div>
                   </div>
                 </div>
               )}

               <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">In-Depth Articles</h2>
               <div className="grid md:grid-cols-2 gap-8">
                  {clusterPosts.map((post, idx) => (
                    <BlogPostCard key={post.id} post={post} index={idx} />
                  ))}
               </div>
             </div>
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

export default BlogCategoryPage;