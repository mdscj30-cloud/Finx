import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { generateBreadcrumbSchema } from '@/lib/seoHelpers';

const ServiceIndustryBreadcrumb = ({ serviceName, industryName, serviceSlug, industrySlug }) => {
  const breadcrumbs = [
    { name: "Home", url: "https://finxis.ai" },
    { name: "Services", url: "https://finxis.ai/services" },
    { name: serviceName, url: `https://finxis.ai/services/${serviceSlug}` },
    { name: industryName, url: `https://finxis.ai/services/${serviceSlug}/${industrySlug}` }
  ];

  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema(breadcrumbs))}
        </script>
      </Helmet>
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="ml-1 text-sm font-medium text-slate-500 md:ml-2">Services</span>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link to={`/services/${serviceSlug}`} className="ml-1 text-sm font-medium text-slate-500 hover:text-blue-600 md:ml-2">
              {serviceName}
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="ml-1 text-sm font-medium text-slate-900 md:ml-2">{industryName}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default ServiceIndustryBreadcrumb;