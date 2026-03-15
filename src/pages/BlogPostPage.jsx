import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostLayout from '@/components/BlogPostLayout';
import { getPostBySlug, getRelatedPosts } from '@/lib/blogData';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle } from 'lucide-react';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import RelatedResources from '@/components/RelatedResources';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <AlertCircle className="w-16 h-16 text-slate-300 mb-6" />
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8 max-w-md">We couldn't find the article you're looking for. It may have been moved or deleted.</p>
          <Link to="/blog">
            <Button>Back to Blog <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedPosts(post);
  
  // Map related posts to resource links format
  const relatedResources = related.map(p => ({
    href: `/blog/${p.slug}`,
    text: p.title
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.imageUrl,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "datePublished": post.publishDate,
    "description": post.excerpt
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | FinxisAI Blog</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://finxisai.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container-max mb-8">
             <BreadcrumbNavigation />
          </div>
          
          <BlogPostLayout post={post} />
          
          <div className="mt-12">
             <RelatedResources relatedBlogs={relatedResources} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;