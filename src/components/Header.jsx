import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { navigationData } from '@/lib/NavigationData';
import MobileNavigation from '@/components/MobileNavigation';

const Header = () => {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setIsPastHero(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setHoveredNav(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || hoveredNav ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
        }`}
      >
        <div className="container-max h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 z-20">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-xl font-display">F</span>
            </div>
            <span className={`font-display font-bold text-2xl tracking-tight ${
              isScrolled || hoveredNav ? 'text-slate-900' : 'text-slate-900 lg:text-slate-800'
            }`}>
              Finxis<span className="text-blue-600">AI</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {Object.entries(navigationData).map(([key, section]) => (
              <div 
                key={key}
                className="relative px-3 py-2"
                onMouseEnter={() => setHoveredNav(key)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <Link 
                  to={section.path}
                  className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                    hoveredNav === key ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-expanded={hoveredNav === key}
                >
                  {section.label}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${hoveredNav === key ? 'rotate-180' : ''}`} />
                </Link>

                <AnimatePresence>
                  {hoveredNav === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, duration: 0.15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-max"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 min-w-[260px] grid gap-1 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                        {section.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${
                              item.isAction ? 'bg-blue-50 hover:bg-blue-100 mt-2' : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className={`mt-0.5 ${item.isAction ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`}>
                              {item.isAction ? <ChevronRight className="w-4 h-4" /> : (section.icon ? <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> : null)}
                            </div>
                            <div>
                              <div className={`text-sm font-semibold ${item.isAction ? 'text-blue-700' : 'text-slate-900'}`}>
                                {item.label}
                              </div>
                              {item.desc && (
                                <div className="text-xs text-slate-500 mt-0.5 font-normal">
                                  {item.desc}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Log in
            </Link>
            <AnimatePresence mode="wait">
              {isPastHero ? (
                <motion.div
                  key="trial"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/onboarding">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 rounded-full px-6">
                      Start Free Trial
                    </Button>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="started"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 rounded-full px-6">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <MobileNavigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;