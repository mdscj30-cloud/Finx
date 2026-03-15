import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/blogData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const RelatedPostsSection = ({ currentPostId, relatedIds }) => {
  // Find posts that match IDs, exclude current post just in case
  const posts = blogPosts
    .filter(p => relatedIds.includes(p.id) && p.id !== currentPostId)
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/blog/${post.slug}`} className="group block h-full">
              <article className="bg-slate-50 rounded-xl p-5 h-full hover:bg-white hover:shadow-lg transition-all border border-slate-100 flex flex-col">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2 block">
                  {post.category}
                </span>
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPostsSection;