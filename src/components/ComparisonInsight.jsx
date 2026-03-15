import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

const ComparisonInsight = ({ title, metric, leftData, rightData, conclusion }) => {
  return (
    <div className="my-10 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-4 flex items-center justify-between text-white">
            <span className="font-bold flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-blue-400" />
                {title}
            </span>
            <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">Metric: {metric}</span>
        </div>
        <div className="grid md:grid-cols-2">
            <div className="p-6 bg-rose-50 border-r border-slate-200">
                <h5 className="font-bold text-rose-900 mb-2">{leftData.label}</h5>
                <p className="text-3xl font-bold text-rose-700 mb-2">{leftData.value}</p>
                <p className="text-sm text-rose-800">{leftData.desc}</p>
            </div>
            <div className="p-6 bg-emerald-50">
                <h5 className="font-bold text-emerald-900 mb-2">{rightData.label}</h5>
                <p className="text-3xl font-bold text-emerald-700 mb-2">{rightData.value}</p>
                <p className="text-sm text-emerald-800">{rightData.desc}</p>
            </div>
        </div>
        {conclusion && (
             <div className="p-4 bg-slate-50 border-t border-slate-200 text-sm text-slate-600 text-center">
                <span className="font-bold text-slate-900">Expert Take: </span>
                {conclusion}
            </div>
        )}
    </div>
  );
};
export default ComparisonInsight;