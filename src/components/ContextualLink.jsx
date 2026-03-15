import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Briefcase, FileText, Scale, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContextualLink = ({ href, text, context, className }) => {
  const getIcon = () => {
    switch (context) {
      case 'location-page': return <MapPin className="w-3 h-3 ml-1 inline" />;
      case 'industry-page': return <Briefcase className="w-3 h-3 ml-1 inline" />;
      case 'comparison-page': return <Scale className="w-3 h-3 ml-1 inline" />;
      case 'case-study': return <FileText className="w-3 h-3 ml-1 inline" />;
      case 'blog-post': return <Lightbulb className="w-3 h-3 ml-1 inline" />;
      default: return <ArrowUpRight className="w-3 h-3 ml-1 inline" />;
    }
  };

  const getStyle = () => {
    switch (context) {
      case 'location-page': return 'text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100';
      case 'comparison-page': return 'text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100';
      case 'case-study': return 'text-purple-700 bg-purple-50 border-purple-200 hover:bg-purple-100';
      default: return 'text-blue-700 bg-blue-50 border-blue-200 hover:bg-blue-100';
    }
  };

  return (
    <span className={cn("inline-block align-baseline", className)}>
      <Link 
        to={href} 
        className={cn(
          "inline-flex items-center px-1.5 py-0.5 rounded border transition-colors text-sm font-medium no-underline mx-1",
          getStyle()
        )}
      >
        {text}
        {getIcon()}
      </Link>
    </span>
  );
};

export default ContextualLink;