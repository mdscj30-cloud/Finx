import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { getBreadcrumbs } from '@/lib/NavigationData';

const BreadcrumbNavigation = ({ customItems }) => {
  const location = useLocation();
  
  // Use custom items if provided, otherwise generate from path
  const items = customItems || getBreadcrumbs(location.pathname);

  // Generate Schema.org BreadcrumbList
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://finxis.ai${item.path}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4 text-sm font-medium w-full">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <ol className="flex items-center space-x-2 text-slate-500 flex-wrap">
        <li>
          <Link to="/" className="hover:text-blue-600 transition-colors flex items-center p-1 rounded-md hover:bg-slate-100">
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.slice(1).map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {index === items.length - 2 ? (
              <span className="text-slate-900 font-semibold truncate max-w-[150px] md:max-w-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-blue-600 transition-colors hover:underline truncate max-w-[120px] md:max-w-none">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNavigation;