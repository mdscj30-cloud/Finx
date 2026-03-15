import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, ChevronRight, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarNavigation = ({ 
  title = "Navigation",
  categories = [], 
  onSearch, 
  currentCategory, 
  onCategoryChange 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const location = useLocation();

  const toggleSection = (label) => {
    setExpandedSections(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) onSearch(term);
  };

  return (
    <nav className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Mobile / Tablet Filter Header (Visible only on small screens handled by parent layout usually, but styled here) */}
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <Filter className="w-4 h-4 text-blue-600" />
          {title}
        </h3>
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b border-slate-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleSearch}
            className="pl-9 bg-slate-50 border-slate-200 focus:bg-white"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="p-2">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-1">
            {category.items ? (
              // Collapsible Section
              <div>
                <button 
                  onClick={() => toggleSection(category.label)}
                  className="w-full flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors text-left"
                >
                  <span className="font-semibold text-sm text-slate-700">{category.label}</span>
                  {expandedSections[category.label] ? 
                    <ChevronDown className="w-4 h-4 text-slate-400" /> : 
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  }
                </button>
                <AnimatePresence>
                  {expandedSections[category.label] && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden ml-2 pl-2 border-l border-slate-100"
                    >
                      {category.items.map((item, itemIdx) => (
                        <Link 
                          key={itemIdx}
                          to={item.path}
                          className={`block py-2 px-2 text-sm rounded-md transition-colors ${
                            location.pathname === item.path 
                              ? 'bg-blue-50 text-blue-700 font-medium' 
                              : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // Simple Filter Button/Link
              <button
                onClick={() => onCategoryChange && onCategoryChange(category.value || category.label)}
                className={`w-full text-left p-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                  currentCategory === (category.value || category.label)
                    ? 'bg-blue-600 text-white font-medium shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {category.label}
                {currentCategory === (category.value || category.label) && <ChevronRight className="w-4 h-4" />}
              </button>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SidebarNavigation;