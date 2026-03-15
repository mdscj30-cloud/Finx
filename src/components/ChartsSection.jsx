import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { BrainCircuit } from 'lucide-react';

const staticPnlData = [
  { name: 'Jan', profit: 4000, loss: 2400 }, { name: 'Feb', profit: 3000, loss: 1398 },
  { name: 'Mar', profit: 5000, loss: 4800 }, { name: 'Apr', profit: 4780, loss: 3908 },
  { name: 'May', profit: 5890, loss: 4800 }, { name: 'Jun', profit: 4390, loss: 3800 },
];

const quickbooksPnlData = [
  { name: 'Jan', profit: 3500, loss: 2800 }, { name: 'Feb', profit: 4200, loss: 1800 },
  { name: 'Mar', profit: 4800, loss: 5200 }, { name: 'Apr', profit: 4000, loss: 4100 },
  { name: 'May', profit: 6200, loss: 5000 }, { name: 'Jun', profit: 5100, loss: 4200 },
];

const staticRevenueData = [
    { name: 'Jan', revenue: 2800 }, { name: 'Feb', revenue: 3500 },
    { name: 'Mar', revenue: 3200 }, { name: 'Apr', revenue: 4100 },
    { name: 'May', revenue: 4500 }, { name: 'Jun', revenue: 4900 },
];

const quickbooksRevenueData = [
    { name: 'Jan', revenue: 3100 }, { name: 'Feb', revenue: 3800 },
    { name: 'Mar', revenue: 3500 }, { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 4800 }, { name: 'Jun', revenue: 5200 },
];

const staticExpenseData = [
  { name: 'Software', value: 400 }, { name: 'Marketing', value: 300 },
  { name: 'Payroll', value: 800 }, { name: 'Utilities', value: 200 },
];

const quickbooksExpenseData = [
  { name: 'Software', value: 650 }, { name: 'Marketing', value: 550 },
  { name: 'Payroll', value: 1200 }, { name: 'Office Rent', value: 500 },
];

const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#6366f1'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border">
        <p className="font-bold text-sm text-slate-700">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }} className="text-xs">
            {`${entry.name}: ${entry.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ChartCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h3 className="font-bold text-lg mb-4 text-slate-800">{title}</h3>
        {children}
    </div>
);

const ChartsSection = ({ isQuickBooksConnected }) => {
  const pnlData = isQuickBooksConnected ? quickbooksPnlData : staticPnlData;
  const revenueData = isQuickBooksConnected ? quickbooksRevenueData : staticRevenueData;
  const expenseData = isQuickBooksConnected ? quickbooksExpenseData : staticExpenseData;

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
        <ChartCard title="P&L Over Time">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={pnlData}>
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }} />
              <Legend iconSize={10} wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="profit" fill="#10b981" name="Profit" radius={[4, 4, 0, 0]} />
              <Bar dataKey="loss" fill="#ef4444" name="Loss" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>
      
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
        <ChartCard title="Expense Categories">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={expenseData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" nameKey="name">
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} />
              <Legend iconSize={10} wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
        <ChartCard title="Revenue Trend">
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={revenueData}>
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend iconSize={10} wrapperStyle={{ fontSize: '12px' }} />
                    <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} name="Revenue" dot={{ r: 5 }} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
        <ChartCard title="AI Highlights">
            <div className="h-[250px] flex flex-col justify-center gap-4">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0"><BrainCircuit size={20} /></div>
                    <div>
                        <p className="font-semibold text-sm">Revenue up 8%</p>
                        <p className="text-xs text-slate-500">Consistent growth in Q2, driven by new service contracts.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0"><BrainCircuit size={20} /></div>
                    <div>
                        <p className="font-semibold text-sm">High Software Spend</p>
                        <p className="text-xs text-slate-500">Software subscriptions are 15% of total expenses. Review for optimization.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0"><BrainCircuit size={20} /></div>
                    <div>
                        <p className="font-semibold text-sm">Negative Net Margin</p>
                        <p className="text-xs text-slate-500">Losses in March and April impacted overall profitability.</p>
                    </div>
                </div>
            </div>
        </ChartCard>
      </motion.div>
    </motion.div>
  );
};

export default ChartsSection;