import React from 'react';
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const BlogCalloutBox = ({ title, content, type = 'info', className }) => {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      text: 'text-blue-900',
      icon: Info,
      iconColor: 'text-blue-600'
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-500',
      text: 'text-amber-900',
      icon: AlertTriangle,
      iconColor: 'text-amber-600'
    },
    success: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-500',
      text: 'text-emerald-900',
      icon: CheckCircle,
      iconColor: 'text-emerald-600'
    },
    tip: {
      bg: 'bg-violet-50',
      border: 'border-violet-500',
      text: 'text-violet-900',
      icon: Lightbulb,
      iconColor: 'text-violet-600'
    }
  };

  const style = styles[type] || styles.info;
  const Icon = style.icon;

  return (
    <div className={cn(`my-8 p-6 rounded-r-xl border-l-4 ${style.bg} ${style.border} shadow-sm`, className)}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <Icon className={`w-6 h-6 ${style.iconColor}`} />
        </div>
        <div>
          {title && <h4 className={`font-bold text-lg mb-2 ${style.text}`}>{title}</h4>}
          <div className={`text-slate-700 leading-relaxed ${style.text}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCalloutBox;