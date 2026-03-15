import React from 'react';
import { getRelatedPosts } from '@/lib/blogData';
import BlogPostCard from '@/components/BlogPostCard';

const BlogRelatedPosts = ({ currentPost }) => {
  const relatedPosts = getRelatedPosts(currentPost);

  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container-max">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post, idx) => (
            <BlogPostCard key={idx} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogRelatedPosts;