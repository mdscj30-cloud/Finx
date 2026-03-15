import React from 'react';
import { motion } from 'framer-motion';
import { User, FilePlus, LogIn, Settings } from 'lucide-react';

const auditLog = [
  { icon: LogIn, user: 'Alex Johnson', action: 'logged in to the portal.', time: '2 hours ago', color: 'text-green-500' },
  { icon: FilePlus, user: 'Sarah Miller (CPA)', action: 'downloaded the Q3 P&L report.', time: '5 hours ago', color: 'text-blue-500' },
  { icon: Settings, user: 'Alex Johnson', action: 'updated payment information.', time: '1 day ago', color: 'text-orange-500' },
  { icon: User, user: 'Admin', action: 'invited "new.user@example.com" to the team.', time: '2 days ago', color: 'text-purple-500' },
];

const AuditTrail = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-sm border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
    >
      <h3 className="font-bold text-lg mb-4 text-slate-800">Audit Trail / Activity Log</h3>
      <div className="space-y-4">
        {auditLog.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 ${item.color}`}>
              <item.icon size={16} />
            </div>
            <div>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">{item.user}</span> {item.action}
              </p>
              <p className="text-xs text-slate-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AuditTrail;