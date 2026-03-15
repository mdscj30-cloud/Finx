import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogFAQSection from '@/components/BlogFAQSection';
import { getCpaPostBySlug, cpaBlogPosts } from '@/lib/cpaBlogPostsData';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSchemaMarkup } from '@/hooks/useSchemaMarkup';
import CpaBlogPostCard from '@/components/CpaBlogPostCard';
import { Card } from '@/components/ui/card';

const CpaBlogPostPage = () => {
  const { slug } = useParams();
  const post = getCpaPostBySlug(slug);
  
  // Find related posts (same category, excluding current)
  const relatedPosts = post 
    ? cpaBlogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3) 
    : [];

  useSchemaMarkup({
    article: post ? {
      headline: post.title,
      image: post.imageUrl,
      datePublished: post.publishDate,
      author: {
        "@type": "Person",
        "name": post.author.name
      },
      description: post.metaDescription
    } : null,
    faq: post ? post.faqs : null
  });

  if (!post) {
    return <Navigate to="/blog/cpa" replace />;
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Read this insight: ${post.title}`;
    let shareUrl = '';
    
    if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    if (platform === 'linkedin') shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{post.title} | FinxisAI CPA Insights</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="author" content={post.author.name} />
        <link rel="canonical" href={`https://finxis.ai/blog/cpa/${post.slug}`} />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="container-max mb-6">
           <div className="text-sm text-slate-500 flex items-center gap-2 flex-wrap">
             <Link to="/" className="hover:text-blue-600">Home</Link> <ChevronRight className="w-3 h-3" />
             <Link to="/blog/cpa" className="hover:text-blue-600">CPA Knowledge Hub</Link> <ChevronRight className="w-3 h-3" />
             <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-md">{post.title}</span>
           </div>
        </div>

        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Article Content */}
            <article className="lg:col-span-8">
              <header className="mb-10">
                <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 border-indigo-200 px-3 py-1 text-sm font-medium rounded-full">
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8 pb-8 border-b border-slate-200">
                  <div className="flex items-center">
                    <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{post.author.name}</p>
                      <p className="text-xs text-slate-500">{post.author.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readingTime}
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-auto object-cover max-h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </header>

              {/* Table of Contents Mobile */}
              <div className="lg:hidden mb-8 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-indigo-600" /> In this article
                </h4>
                <ul className="space-y-2 text-sm">
                  {post.sections.map((section, idx) => (
                    <li key={idx}>
                      <button 
                        onClick={() => scrollToSection(`section-${idx}`)}
                        className="text-slate-600 hover:text-indigo-600 text-left w-full truncate"
                      >
                        {section.heading}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg prose-indigo prose-slate max-w-none mb-10">
                <div className="text-xl text-slate-600 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: post.intro }} />
              </div>

              {/* Sections */}
              <div className="prose prose-lg prose-indigo prose-slate max-w-none mb-16">
                 {post.sections.map((section, idx) => (
                   <div key={idx} id={`section-${idx}`} className="mb-12 scroll-mt-28">
                     <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                       <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3 shadow-md flex-shrink-0">
                         {idx + 1}
                       </span>
                       {section.heading}
                     </h2>
                     <div dangerouslySetInnerHTML={{ __html: section.content }} />
                   </div>
                 ))}
              </div>
              
              {/* Key Takeaways Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-16 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h3 className="font-bold text-2xl mb-6 flex items-center">
                    <CheckCircle2 className="w-6 h-6 mr-3 text-green-400" /> Key Takeaways for Your Firm
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                       <p className="font-medium">Strategic Focus</p>
                       <p className="text-sm text-slate-300 mt-1">Shift from transactional compliance to relationship-based advisory.</p>
                     </div>
                     <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                       <p className="font-medium">Tech leverage</p>
                       <p className="text-sm text-slate-300 mt-1">Automate routine tasks to unlock capacity for high-value work.</p>
                     </div>
                     <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                       <p className="font-medium">Value Pricing</p>
                       <p className="text-sm text-slate-300 mt-1">Adopt fixed-fee or value-based pricing models to improve margins.</p>
                     </div>
                     <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                       <p className="font-medium">Proactive Comms</p>
                       <p className="text-sm text-slate-300 mt-1">Regularly engage clients with insights, not just deliverables.</p>
                     </div>
                  </div>
                </div>
              </div>

              <BlogFAQSection faqs={post.faqs} />

              {/* Social Share */}
              <div className="flex flex-col sm:flex-row items-center justify-between py-8 border-t border-b border-slate-200 mb-12 gap-4">
                <span className="font-bold text-slate-900 flex items-center">
                  <Share2 className="w-5 h-5 mr-2 text-indigo-600" /> Share this professional insight
                </span>
                <div className="flex gap-3">
                  <Button variant="outline" className="hover:text-[#1DA1F2] hover:border-[#1DA1F2]" onClick={() => handleShare('twitter')}>
                    <Twitter className="w-4 h-4 mr-2" /> Twitter
                  </Button>
                  <Button variant="outline" className="hover:text-[#0A66C2] hover:border-[#0A66C2]" onClick={() => handleShare('linkedin')}>
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </Button>
                  <Button variant="outline" className="hover:text-[#1877F2] hover:border-[#1877F2]" onClick={() => handleShare('facebook')}>
                    <Facebook className="w-4 h-4 mr-2" /> Facebook
                  </Button>
                </div>
              </div>
              
              {/* Author Bio Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
                 <img src={post.author.avatar} alt={post.author.name} className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover" />
                 <div className="text-center md:text-left">
                   <h3 className="text-xl font-bold text-slate-900">{post.author.name}</h3>
                   <p className="text-indigo-600 font-medium mb-3">{post.author.title}</p>
                   <p className="text-slate-600 mb-4">
                     Specializing in strategic financial advisory and operational efficiency for modern accounting firms.
                   </p>
                   <Link to="/about/team" className="text-sm font-semibold text-slate-900 hover:text-indigo-600 underline decoration-indigo-300 hover:decoration-indigo-600 transition-all">
                     View full profile
                   </Link>
                 </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 space-y-8">
              {/* Desktop TOC */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
                  <Briefcase className="w-5 h-5 mr-2 text-indigo-600" /> In this article
                </h4>
                <div className="relative pl-4 border-l-2 border-slate-100 space-y-3">
                  {post.sections.map((section, idx) => (
                    <button 
                      key={idx}
                      onClick={() => scrollToSection(`section-${idx}`)}
                      className="block text-sm text-slate-600 hover:text-indigo-600 text-left hover:font-medium transition-all w-full leading-snug"
                    >
                      {section.heading}
                    </button>
                  ))}
                </div>
              </div>

              {/* Consultation CTA */}
              <Card className="bg-indigo-600 text-white p-6 rounded-xl shadow-lg border-0 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                   <h4 className="font-bold text-xl mb-3">Need specialized CPA support?</h4>
                   <p className="text-indigo-100 text-sm mb-6">
                     Our AI-enhanced platform helps CPAs streamline operations and scale advisory services efficiently.
                   </p>
                   <Link to="/contact">
                     <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-bold border-0">
                       Schedule Consultation
                     </Button>
                   </Link>
                </div>
              </Card>

              {/* Related Glossary Terms */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-slate-500">
                  Related Concepts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.relatedGlossaryTerms.map(term => (
                    <Link key={term} to={`/glossary/${term.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Badge variant="outline" className="hover:bg-slate-100 cursor-pointer">
                        {term}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* Related Posts Carousel */}
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="container-max">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Related Insights for Your Firm</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, idx) => (
                <CpaBlogPostCard key={relatedPost.id} post={relatedPost} index={idx} />
              ))}
            </div>
             <div className="text-center mt-12">
               <Link to="/blog/cpa">
                 <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:border-indigo-600 hover:text-indigo-600">
                   View All CPA Insights
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

export default CpaBlogPostPage;