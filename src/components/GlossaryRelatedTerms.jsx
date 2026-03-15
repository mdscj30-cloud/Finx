import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { glossaryTerms } from '@/lib/glossaryTermsData';

const GlossaryRelatedTerms = ({ currentSlug, relatedSlugs }) => {
  // Find full term objects based on slugs
  const relatedTerms = relatedSlugs
    .map(slug => glossaryTerms.find(term => term.slug === slug))
    .filter(Boolean); // Remove any not found

  if (relatedTerms.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Terms</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedTerms.map((term, index) => (
          <Link key={term.id} to={`/glossary/${term.slug}`} className="group">
            <Card className="h-full p-6 border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
              <Badge variant="secondary" className="mb-3 bg-blue-50 text-blue-700 hover:bg-blue-100">
                {term.category}
              </Badge>
              <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {term.title}
              </h4>
              <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                {term.definition}
              </p>
              <div className="flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Read Definition <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GlossaryRelatedTerms;