import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Briefcase, MapPin, Building2, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

const InternalLinksComponent = ({ 
  title = "Related Content", 
  items = [], 
  type = "default", // list, grid, cards
  viewAllLink = null 
}) => {
  if (!items || items.length === 0) return null;

  const getIcon = (context) => {
    switch(context) {
      case 'blog-post': return FileText;
      case 'case-study': return Briefcase;
      case 'location-page': return MapPin;
      case 'industry-page': return Building2;
      case 'glossary-term': return BookOpen;
      default: return ArrowRight;
    }
  };

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        {viewAllLink && (
          <Link to={viewAllLink} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        )}
      </div>

      {type === 'cards' && (
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = getIcon(item.context);
            return (
              <Link key={idx} to={item.path} className="group block h-full">
                <Card className="h-full p-6 hover:shadow-md transition-all border-slate-200 group-hover:border-blue-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {item.label || item.title}
                  </h4>
                  {item.desc && (
                    <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                      {item.desc}
                    </p>
                  )}
                  <span className="text-xs font-semibold text-blue-600 flex items-center mt-auto">
                    Read More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      )}

      {type === 'list' && (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <ul className="space-y-4">
            {items.map((item, idx) => {
              const Icon = getIcon(item.context);
              return (
                <li key={idx}>
                  <Link to={item.path} className="flex items-center group">
                    <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-3 text-slate-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors block">
                        {item.label || item.title}
                      </span>
                      {item.desc && <span className="text-xs text-slate-500">{item.desc}</span>}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InternalLinksComponent;