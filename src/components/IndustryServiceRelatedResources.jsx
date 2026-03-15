import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, BookOpen } from 'lucide-react';

const IndustryServiceRelatedResources = ({ resources }) => {
  if (!resources || resources.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Related Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Link 
              key={index} 
              to={resource.link}
              className="group block bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                    {resource.type === 'Case Study' ? <FileText className="w-3 h-3 mr-1" /> : <BookOpen className="w-3 h-3 mr-1" />}
                    {resource.type}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {resource.title}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServiceRelatedResources;