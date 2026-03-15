import React from 'react';
import { Quote } from 'lucide-react';

const QuotableInsight = ({ quote, author, role }) => {
  return (
    <div className="my-8 pl-6 border-l-4 border-indigo-500 bg-indigo-50/50 p-6 rounded-r-xl relative">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-indigo-200" />
        <p className="text-xl font-serif italic text-slate-800 mb-4 relative z-10">
            "{quote}"
        </p>
        <div className="flex items-center gap-2">
            <span className="font-bold text-indigo-900 text-sm">{author}</span>
            <span className="text-indigo-400 text-sm">|</span>
            <span className="text-slate-500 text-sm">{role}</span>
        </div>
    </div>
  );
};
export default QuotableInsight;