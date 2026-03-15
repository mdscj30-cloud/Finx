import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustryServiceBreadcrumb = ({ serviceName, industryName }) => {
  return (
    <nav className="flex items-center text-sm text-slate-400 py-4 container-max">
      <Link to="/" className="hover:text-blue-400 transition-colors flex items-center">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
      <Link to="/services/by-industry" className="hover:text-blue-400 transition-colors">
        Industries
      </Link>
      <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
      <span className="text-slate-200 capitalize">{serviceName.replace(/-/g, ' ')}</span>
      <ChevronRight className="w-4 h-4 mx-2 text-slate-600" />
      <span className="text-blue-400 font-medium capitalize">{industryName.replace(/-/g, ' ')}</span>
    </nav>
  );
};

export default IndustryServiceBreadcrumb;