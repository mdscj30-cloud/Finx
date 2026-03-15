import React from 'react';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const BlogPullQuote = ({ quote, author, className }) => {
  return (
    <div className={cn("my-10 relative pl-8 md:pl-12 py-4", className)}>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
      <Quote className="absolute left-4 top-0 w-8 h-8 text-blue-100 -z-10 transform -translate-y-2 opacity-50" />
      
      <blockquote className="relative">
        <p className="text-xl md:text-2xl font-serif italic text-slate-800 leading-relaxed mb-4">
          "{quote}"
        </p>
        {author && (
          <footer className="text-sm font-bold text-slate-500 uppercase tracking-wide flex items-center gap-2">
            <span className="w-8 h-[1px] bg-slate-300"></span>
            {author}
          </footer>
        )}
      </blockquote>
    </div>
  );
};

export default BlogPullQuote;