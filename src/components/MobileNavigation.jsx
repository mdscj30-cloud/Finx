import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { navigationData } from '@/lib/NavigationData';

const MobileNavigation = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[60] bg-white text-slate-900 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
            <span className="font-bold text-xl text-slate-900">Menu</span>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 space-y-6 pb-24">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-slate-50 border-slate-200 text-lg"
              />
            </div>

            {/* Navigation Items */}
            <nav className="space-y-2">
              <Link 
                to="/" 
                onClick={onClose}
                className="block p-4 text-lg font-semibold text-slate-900 border-b border-slate-50"
              >
                Home
              </Link>
              
              {Object.entries(navigationData).map(([key, section]) => (
                <div key={key} className="border-b border-slate-50">
                  <button
                    onClick={() => toggleSection(key)}
                    className="w-full flex items-center justify-between p-4 text-lg font-semibold text-slate-900"
                  >
                    <span className="flex items-center gap-3">
                      {section.icon && <section.icon className="w-5 h-5 text-blue-600" />}
                      {section.label}
                    </span>
                    {expandedSection === key ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedSection === key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50"
                      >
                        <div className="px-4 pb-4 pt-2 space-y-1">
                          {section.items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={onClose}
                              className={`block py-3 px-4 rounded-lg text-base ${
                                item.isAction 
                                  ? 'text-blue-600 font-semibold bg-blue-50/50' 
                                  : 'text-slate-600 active:bg-slate-200'
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <Link 
                to="/pricing" 
                onClick={onClose}
                className="block p-4 text-lg font-semibold text-slate-900"
              >
                Pricing
              </Link>
            </nav>

            {/* CTA */}
            <div className="pt-6">
              <Link to="/contact" onClick={onClose}>
                <Button className="w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 rounded-xl">
                  Get Started
                </Button>
              </Link>
              <div className="mt-4 text-center">
                <Link to="/login" onClick={onClose} className="text-slate-500 font-medium py-2 px-4">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;