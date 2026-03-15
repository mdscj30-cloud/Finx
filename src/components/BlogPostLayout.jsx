import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Calendar, Clock, Linkedin, Twitter, Facebook, Link as LinkIcon, 
  ChevronRight, ArrowLeft, ArrowRight, User, Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import BlogFAQSection from './BlogFAQSection';
import RelatedPostsSection from './RelatedPostsSection';
import BlogCalloutBox from './BlogCalloutBox';
import BlogPullQuote from './BlogPullQuote';
import { cn } from '@/lib/utils';
import Footer from './Footer';
import Header from './Header';

const BlogPostLayout = ({ post, breadcrumbs }) => {
  const [activeHeading, setActiveHeading] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headings = post.content.filter(block => block.type === 'heading' && block.level === 2);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map((h, i) => document.getElementById(`section-${i}`));
      const scrollPosition = window.scrollY + 200;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHeading(`section-${i}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out: ${post.title}`;
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      toast({ title: "Link copied!", description: "Article URL copied to clipboard." });
      return;
    }
    let shareUrl = '';
    if (platform === 'linkedin') shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const renderContent = (block, index) => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.level}`;
        const id = block.level === 2 ? `section-${headings.indexOf(block)}` : undefined;
        return (
          <HeadingTag key={index} id={id} className={cn(
            "font-display font-bold text-slate-900 mt-12 mb-6 scroll-mt-32",
            block.level === 2 ? "text-3xl" : "text-xl"
          )}>
            {block.content}
          </HeadingTag>
        );
      case 'paragraph':
        return <p key={index} className="text-lg text-slate-700 leading-relaxed mb-6">{block.content}</p>;
      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-8 ml-4">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'callout':
        return <BlogCalloutBox key={index} {...block} />;
      case 'quote':
        return <BlogPullQuote key={index} {...block} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />
      
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
          </div>
          
          <div className="container-max relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-slate-300 mb-8 overflow-x-auto whitespace-nowrap pb-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-slate-500" />
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-slate-500" />
              <span className="text-blue-400 font-medium truncate max-w-[200px]">{post.title}</span>
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6">
                {post.category}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8 text-white">
                {post.title}
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
                {post.subtitle || post.metaDescription}
              </p>

              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  {post.author.avatar ? (
                    <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-white/20" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-white">{post.author.name}</div>
                    <div className="text-sm text-slate-400">{post.author.title}</div>
                  </div>
                </div>
                <div className="flex gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container-max py-16 grid lg:grid-cols-12 gap-12 relative">
          
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Table of Contents</h3>
                <nav className="space-y-1">
                  {headings.map((h, i) => {
                    const id = `section-${i}`;
                    const isActive = activeHeading === id;
                    return (
                      <a 
                        key={i} 
                        href={`#${id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                          setActiveHeading(id);
                        }}
                        className={cn(
                          "block py-2 px-3 text-sm rounded-md transition-all duration-200 border-l-2",
                          isActive 
                            ? "text-blue-600 bg-blue-50 border-blue-600 font-medium translate-x-1" 
                            : "text-slate-600 hover:text-blue-600 hover:bg-slate-50 border-transparent"
                        )}
                      >
                        {h.content}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Related CPA Services Widget */}
              <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">For CPA Firms</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Scale your practice with our white-label bookkeeping and outsourced support services.
                </p>
                <div className="space-y-3">
                  <Link to="/services/cpa-bookkeeping" className="block text-sm text-indigo-600 font-medium hover:underline">
                    View CPA Bookkeeping &rarr;
                  </Link>
                  <Link to="/services/cpa-outsourced-support" className="block text-sm text-indigo-600 font-medium hover:underline">
                    View Outsourced Support &rarr;
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Share Article</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => handleShare('linkedin')} className="hover:text-[#0077b5] hover:bg-blue-50"><Linkedin className="w-4 h-4"/></Button>
                  <Button variant="outline" size="icon" onClick={() => handleShare('twitter')} className="hover:text-[#1DA1F2] hover:bg-blue-50"><Twitter className="w-4 h-4"/></Button>
                  <Button variant="outline" size="icon" onClick={() => handleShare('facebook')} className="hover:text-[#4267B2] hover:bg-blue-50"><Facebook className="w-4 h-4"/></Button>
                  <Button variant="outline" size="icon" onClick={() => handleShare('copy')}><LinkIcon className="w-4 h-4"/></Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-9 max-w-4xl mx-auto w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-slate-100">
              
              {/* Mobile TOC */}
              <div className="lg:hidden mb-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">In this article</h3>
                <ul className="space-y-3 text-sm">
                   {headings.map((h, i) => (
                     <li key={i}>
                       <a href={`#section-${i}`} className="text-blue-600 underline-offset-4 hover:underline">
                         {h.content}
                       </a>
                     </li>
                   ))}
                </ul>
              </div>

              {/* Body Content */}
              <div className="prose prose-lg prose-slate max-w-none prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-2xl prose-strong:text-slate-900">
                {post.content.map(renderContent)}
              </div>

              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                      <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors">
                        #{tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Internal Links Callout */}
              {post.internalLinks && post.internalLinks.length > 0 && (
                 <div className="mt-12 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white">
                    <h4 className="text-xl font-bold mb-6">Explore Further</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {post.internalLinks.map((link, i) => (
                        <Link key={i} to={link.url} className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group">
                          <span className="font-medium text-sm">{link.text}</span>
                          <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                    </div>
                 </div>
              )}

              {/* FAQ Section */}
              <BlogFAQSection faqs={post.faqs} />
            </div>

            {/* Author Bio (Bottom) */}
            <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
              <div className="flex-shrink-0">
                 {post.author.avatar ? (
                    <img src={post.author.avatar} alt={post.author.name} className="w-24 h-24 rounded-full object-cover border-4 border-slate-50" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                      <User className="w-10 h-10" />
                    </div>
                  )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">About {post.author.name}</h3>
                <div className="text-blue-600 font-medium text-sm mb-4">{post.author.title} • {post.author.credentials}</div>
                <p className="text-slate-600 leading-relaxed mb-6">{post.author.bio}</p>
                <div className="flex justify-center md:justify-start gap-3">
                  <Button variant="outline" size="sm" className="rounded-full">View Profile</Button>
                  <Button variant="outline" size="sm" className="rounded-full">All Articles</Button>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <RelatedPostsSection currentPostId={post.id} relatedIds={post.relatedPostIds || []} />
          
          </article>
        </div>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20 mt-12">
          <div className="container-max text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your Financial Operations?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking CPAs and business owners leveraging FinxisAI for accuracy, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                  Schedule a Demo
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  View Pricing
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

export default BlogPostLayout;