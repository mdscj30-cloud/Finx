import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const timelineEvents = [
  {
    date: 'Oct 15, 2025',
    title: 'Corporate Tax Filing Deadline',
    status: 'upcoming',
    description: 'Form 1120 due for corporations on extension.',
  },
  {
    date: 'Sep 30, 2025',
    title: 'Q3 Estimated Tax Payment',
    status: 'completed',
    description: 'Payment for the third quarter was successfully submitted.',
  },
  {
    date: 'Aug 31, 2025',
    title: 'KYC Verification',
    status: 'completed',
    description: 'Annual Know Your Customer documents verified.',
  },
  {
    date: 'Jan 31, 2026',
    title: 'Form W-2 & 1099 Filing',
    status: 'upcoming',
    description: 'Deadline to send forms to employees and contractors.',
  },
];

const TimelineItem = ({ event, isLast }) => {
  const isCompleted = event.status === 'completed';
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
          {isCompleted ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
        </div>
        {!isLast && <div className="w-px flex-grow bg-slate-300 my-2"></div>}
      </div>
      <div className="pb-8">
        <p className={`font-bold text-sm ${isCompleted ? 'text-slate-500' : 'text-slate-800'}`}>{event.title}</p>
        <div className="flex items-center text-xs text-slate-500 mt-1">
          <Calendar className="w-3 h-3 mr-1.5" />
          <span>{event.date}</span>
        </div>
        <p className="text-sm text-slate-600 mt-2">{event.description}</p>
      </div>
    </div>
  );
};

const ComplianceTimeline = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-sm border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="font-bold text-lg mb-4 text-slate-800">Compliance Timeline</h3>
      <div>
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} event={event} isLast={index === timelineEvents.length - 1} />
        ))}
      </div>
    </motion.div>
  );
};

export default ComplianceTimeline;