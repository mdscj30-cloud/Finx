import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const BlogPostCard = ({ post, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 h-full relative"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <Link to={`/blog/${post.slug}`}>
          <img 
            src={post.imageUrl} 
            alt={post.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-white/90 text-slate-900 hover:bg-white font-bold backdrop-blur-sm shadow-sm">
            {post.category}
          </Badge>
          {post.isFeatured && (
            <Badge className="bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-sm">
              Featured
            </Badge>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-slate-500 mb-3 space-x-4">
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            <time dateTime={post.publishDate}>{new Date(post.publishDate).toLocaleDateString()}</time>
          </span>
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {post.readingTime}
          </span>
        </div>

        <Link to={`/blog/${post.slug}`} className="block mb-3">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            {post.author.avatar ? (
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-8 h-8 rounded-full object-cover ring-2 ring-slate-50"
              />
            ) : (
               <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                 <User className="w-4 h-4 text-slate-500" />
               </div>
            )}
            <span className="text-xs font-medium text-slate-700">
              {post.author.name}
            </span>
          </div>
          
          <Link 
            to={`/blog/${post.slug}`} 
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            aria-label={`Read full article: ${post.title}`}
          >
            Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPostCard;