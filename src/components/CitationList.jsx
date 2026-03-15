import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CitationList = ({ title, items, type = "bullet" }) => {
  return (
    <div className="my-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        {title && <h4 className="font-bold text-slate-900 mb-4">{title}</h4>}
        <ul className="space-y-3">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
  );
};
export default CitationList;