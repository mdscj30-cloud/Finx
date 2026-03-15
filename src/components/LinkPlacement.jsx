import React from 'react';
import ContextualLink from './ContextualLink';

const LinkPlacement = ({ placement, links, className }) => {
  if (!links || links.length === 0) return null;

  return (
    <div className={`my-6 p-4 rounded-lg bg-slate-50 border border-slate-100 ${className}`}>
      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">
        {placement === 'early-content' ? 'Related Service' : 
         placement === 'mid-content' ? 'Learn More' : 
         placement === 'near-conclusion' ? 'Compare Options' : 'Recommended'}
      </span>
      <div className="flex flex-wrap gap-2">
        {links.map((link, idx) => (
          <ContextualLink 
            key={idx}
            href={link.href}
            text={link.text}
            context={link.context}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkPlacement;