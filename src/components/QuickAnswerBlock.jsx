import React from 'react';
import { Sparkles } from 'lucide-react';

const QuickAnswerBlock = ({ answer, title = "Quick Answer", icon: Icon = Sparkles }) => {
  return (
    <div className="bg-blue-50/80 rounded-xl shadow-lg p-6 md:p-8 mb-8 border border-blue-100 not-prose">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 mt-1">
            {title}
          </h3>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickAnswerBlock;