import React from 'react';
import { Lightbulb, UserCheck } from 'lucide-react';

const ExpertInsight = ({ insight, attribution, source }) => {
  // Schema for AI extraction
  const schema = {
    "@context": "https://schema.org",
    "@type": "Quotation",
    "text": insight,
    "creator": {
      "@type": "Person",
      "name": attribution?.name || "FinxisAI Expert Team",
      "jobTitle": attribution?.role || "Financial Analyst"
    },
    "citation": source
  };

  return (
    <div className="my-12 relative group">
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white p-8 rounded-xl border border-slate-100 shadow-xl">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    <Lightbulb className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">Expert Insight</span>
                        {source && <span className="text-xs text-slate-400">• Source: {source}</span>}
                    </div>
                    <p className="text-lg text-slate-800 font-medium leading-relaxed mb-4">
                        "{insight}"
                    </p>
                    <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                             <UserCheck className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">{attribution?.name || "FinxisAI Analysis Team"}</p>
                            <p className="text-xs text-slate-500">{attribution?.role || "CPA & Data Science Unit"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ExpertInsight;