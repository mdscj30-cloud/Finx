import React from 'react';
import { BookOpen } from 'lucide-react';

const DefinitionBox = ({ term, definition, explanation }) => {
  return (
    <div className="my-8 bg-emerald-50 border border-emerald-100 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-emerald-800 uppercase tracking-wide text-xs">Definition</span>
        </div>
        <h4 className="text-lg font-bold text-slate-900 mb-2">{term}</h4>
        <p className="font-medium text-slate-800 mb-3 border-b border-emerald-200/50 pb-3">
            {definition}
        </p>
        <p className="text-slate-600 text-sm">
            <span className="font-semibold text-emerald-700">Why it matters: </span>
            {explanation}
        </p>
    </div>
  );
};
export default DefinitionBox;