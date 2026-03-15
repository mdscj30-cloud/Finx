import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PlayCircle, PauseCircle, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const activityLog = [
  { id: 1, member: 'Sarah Miller', client: 'Innovate Inc.', task: 'Q3 Bookkeeping', time: '2h 15m', status: 'In Progress' },
  { id: 2, member: 'John Doe', client: 'Market Movers', task: 'Payroll Review', time: '1h 30m', status: 'Completed' },
  { id: 3, member: 'Jane Smith', client: 'HealthFirst', task: 'Onboarding Call', time: '0h 45m', status: 'Completed' },
  { id: 4, member: 'Sarah Miller', client: 'GreenScape Co.', task: 'Tax Planning', time: '3h 05m', status: 'In Progress' },
];

const StatusBadge = ({ status }) => {
  const color = status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700';
  return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${color}`}>{status}</span>;
};

const CpaActivityPage = () => {
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Work Activity - FinxisAI</title>
      </Helmet>
      <div className="p-6 lg:p-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Work Activity & Time Tracking</h1>
            <p className="text-slate-500 mt-1">Monitor team activity and log time spent on clients.</p>
          </div>
          <Button><PlusCircle className="w-4 h-4 mr-2" /> Manual Time Entry</Button>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm border mb-8"
        >
          <h3 className="font-bold text-lg mb-4 text-slate-800">Live Time Tracker</h3>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-4">
              <p className="font-medium">
                <span className="text-slate-500">Tracking:</span> <span className="text-blue-600">Q3 Bookkeeping for Innovate Inc.</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-bold font-mono text-slate-800">01:23:45</p>
              <Button size="lg" onClick={() => setIsTimerRunning(!isTimerRunning)}>
                {isTimerRunning ? <PauseCircle className="w-5 h-5 mr-2" /> : <PlayCircle className="w-5 h-5 mr-2" />}
                {isTimerRunning ? 'Pause Timer' : 'Start Timer'}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-xs text-slate-500 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">Team Member</th>
                  <th scope="col" className="px-6 py-3">Client</th>
                  <th scope="col" className="px-6 py-3">Task</th>
                  <th scope="col" className="px-6 py-3">Time Logged (Today)</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {activityLog.map((log) => (
                  <tr key={log.id} className="bg-white border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{log.member}</td>
                    <td className="px-6 py-4">{log.client}</td>
                    <td className="px-6 py-4">{log.task}</td>
                    <td className="px-6 py-4 font-mono">{log.time}</td>
                    <td className="px-6 py-4"><StatusBadge status={log.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CpaActivityPage;