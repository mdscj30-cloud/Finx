import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, User, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CpaBlogPostCard = ({ post, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 h-full relative"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <Link to={`/blog/cpa/${post.slug}`}>
          <img 
            src={post.imageUrl} 
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-white/95 text-slate-800 hover:bg-white font-semibold backdrop-blur-md shadow-sm border border-slate-100/50">
            {post.category}
          </Badge>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-slate-500 mb-3 space-x-3">
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            <time dateTime={post.publishDate}>{new Date(post.publishDate).toLocaleDateString()}</time>
          </span>
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {post.readingTime}
          </span>
        </div>

        <Link to={`/blog/cpa/${post.slug}`} className="block mb-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>
        </Link>

        <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
          {post.metaDescription}
        </p>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
            />
            <span className="text-xs font-medium text-slate-700 truncate max-w-[100px]">
              {post.author.name}
            </span>
          </div>
          
          <Link 
            to={`/blog/cpa/${post.slug}`} 
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Read Insights <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default CpaBlogPostCard;