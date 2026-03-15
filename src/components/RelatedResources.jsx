import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, MapPin, Scale, Briefcase } from 'lucide-react';

const RelatedResources = ({ 
  relatedBlogs = [], 
  relatedLocations = [], 
  relatedComparisons = [], 
  relatedCaseStudies = [],
  relatedIndustries = []
}) => {
  const hasContent = 
    relatedBlogs.length > 0 || 
    relatedLocations.length > 0 || 
    relatedComparisons.length > 0 || 
    relatedCaseStudies.length > 0 ||
    relatedIndustries.length > 0;

  if (!hasContent) return null;

  return (
    <section className="py-12 border-t border-slate-200 bg-slate-50/50">
      <div className="container-max">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Resources</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Blogs */}
          {relatedBlogs.length > 0 && (
            <div>
              <h4 className="flex items-center font-bold text-slate-900 mb-4">
                <FileText className="w-4 h-4 mr-2 text-blue-600" /> Guides & Articles
              </h4>
              <ul className="space-y-3">
                {relatedBlogs.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-sm text-slate-600 hover:text-blue-600 hover:underline flex items-start">
                      <span className="mr-2">•</span> {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Locations */}
          {relatedLocations.length > 0 && (
            <div>
              <h4 className="flex items-center font-bold text-slate-900 mb-4">
                <MapPin className="w-4 h-4 mr-2 text-emerald-600" /> Local Services
              </h4>
              <ul className="space-y-3">
                {relatedLocations.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-sm text-slate-600 hover:text-emerald-600 hover:underline flex items-start">
                       <span className="mr-2">•</span> {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Comparisons */}
          {relatedComparisons.length > 0 && (
            <div>
              <h4 className="flex items-center font-bold text-slate-900 mb-4">
                <Scale className="w-4 h-4 mr-2 text-amber-600" /> Comparisons
              </h4>
              <ul className="space-y-3">
                {relatedComparisons.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-sm text-slate-600 hover:text-amber-600 hover:underline flex items-start">
                       <span className="mr-2">•</span> {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Case Studies / Industries */}
          {(relatedCaseStudies.length > 0 || relatedIndustries.length > 0) && (
            <div>
              <h4 className="flex items-center font-bold text-slate-900 mb-4">
                <Briefcase className="w-4 h-4 mr-2 text-purple-600" /> Use Cases
              </h4>
              <ul className="space-y-3">
                {relatedCaseStudies.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-sm text-slate-600 hover:text-purple-600 hover:underline flex items-start">
                       <span className="mr-2">•</span> Case Study: {link.text}
                    </Link>
                  </li>
                ))}
                {relatedIndustries.map((link, i) => (
                  <li key={i}>
                     <Link to={link.href} className="text-sm text-slate-600 hover:text-purple-600 hover:underline flex items-start">
                       <span className="mr-2">•</span> For {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default RelatedResources;