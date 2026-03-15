import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { List } from 'lucide-react';

const BlogTableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Simple logic to highlight active section based on scroll position
      // In a real implementation, IntersectionObserver is better
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!sections || sections.length === 0) return null;

  return (
    <div className="lg:sticky lg:top-24 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div 
        className="flex items-center justify-between cursor-pointer lg:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-bold text-slate-900 flex items-center">
          <List className="w-4 h-4 mr-2" />
          Table of Contents
        </h4>
        <span className="lg:hidden text-slate-400 text-sm">{isOpen ? 'Hide' : 'Show'}</span>
      </div>
      
      <nav className={`mt-4 space-y-1 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        {sections.map((section, idx) => {
          const id = `section-${idx}`;
          return (
            <Link
              key={idx}
              to={id}
              smooth={true}
              duration={500}
              offset={-100}
              className="block py-1.5 px-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-500"
              activeClass="text-blue-600 bg-blue-50 border-blue-500 font-medium"
              spy={true}
            >
              {section.heading}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BlogTableOfContents;