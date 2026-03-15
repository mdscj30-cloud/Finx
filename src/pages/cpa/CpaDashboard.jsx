import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { 
  Users, DollarSign, TrendingUp, TrendingDown, Wallet, Calendar,
  Clock, FileText, MessageSquare, AlertCircle, CheckCircle, 
  Plus, Search, Bell, Moon, Sun, Download, Filter, BarChart3,
  PieChart, Activity, Briefcase, Target, Zap, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import AddClientModal from '@/components/cpa/AddClientModal';
import AddTaskModal from '@/components/cpa/AddTaskModal';
import AddStaffModal from '@/components/cpa/AddStaffModal';
import LogTimeModal from '@/components/cpa/LogTimeModal';
import AIFinancialInsights from '@/components/cpa/AIFinancialInsights';
import { LineChart, Line, BarChart, Bar, PieChart as RechartsPie, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const CpaDashboard = () => {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [clientFilter, setClientFilter] = useState('all');
  
  // Modal states
  const [showAddClient, setShowAddClient] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [showLogTime, setShowLogTime] = useState(false);
  
  // Data states
  const [clients, setClients] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [staff, setStaff] = useState([]);
  const [timeEntries, setTimeEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all data
  useEffect(() => {
    if (user) {
      fetchAllData();
    }
  }, [user]);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [clientsRes, tasksRes, staffRes, timeRes] = await Promise.all([
        supabase.from('cpa_clients').select('*').eq('cpa_firm_id', user.id),
        supabase.from('cpa_tasks').select('*, cpa_clients(name), cpa_staff(full_name)').eq('cpa_firm_id', user.id),
        supabase.from('cpa_staff').select('*').eq('cpa_firm_id', user.id),
        supabase.from('cpa_time_entries').select('*, cpa_clients(name), cpa_staff(full_name, hourly_rate)').eq('cpa_firm_id', user.id)
      ]);

      if (clientsRes.data) setClients(clientsRes.data);
      if (tasksRes.data) setTasks(tasksRes.data);
      if (staffRes.data) setStaff(staffRes.data);
      if (timeRes.data) setTimeEntries(timeRes.data);
    } catch (error) {
      toast({ title: 'Error loading data', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  // Calculate metrics
  const totalClients = clients.length;
  const activeClients = clients.filter(c => c.status === 'Active').length;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'Completed').length;
  const pendingTasks = tasks.filter(t => t.status !== 'Completed').length;
  const overdueTasks = tasks.filter(t => t.due_date && new Date(t.due_date) < new Date() && t.status !== 'Completed').length;
  
  const totalHoursLogged = timeEntries.reduce((sum, entry) => sum + parseFloat(entry.hours_logged || 0), 0);
  const totalRevenue = timeEntries.reduce((sum, entry) => {
    const hours = parseFloat(entry.hours_logged || 0);
    const rate = parseFloat(entry.cpa_staff?.hourly_rate || 0);
    return sum + (hours * rate);
  }, 0);

  // Mock financial data (in production, this would come from accounting integrations)
  const mockFinancials = {
    totalAR: 125000,
    totalAP: 45000,
    bankBalance: 280000,
    cashRunway: 8.5,
    arr: 1200000,
    burnRate: 32000
  };

  // Chart data
  const revenueData = [
    { month: 'Jan', revenue: 95000, expenses: 42000 },
    { month: 'Feb', revenue: 102000, expenses: 45000 },
    { month: 'Mar', revenue: 98000, expenses: 43000 },
    { month: 'Apr', revenue: 115000, expenses: 48000 },
    { month: 'May', revenue: 108000, expenses: 46000 },
    { month: 'Jun', revenue: 125000, expenses: 50000 }
  ];

  const expenseBreakdown = [
    { name: 'Payroll', value: 180000, color: '#3b82f6' },
    { name: 'Software', value: 45000, color: '#8b5cf6' },
    { name: 'Office', value: 32000, color: '#10b981' },
    { name: 'Marketing', value: 28000, color: '#f59e0b' },
    { name: 'Other', value: 15000, color: '#ef4444' }
  ];

  const tasksByStatus = [
    { status: 'Not Started', count: tasks.filter(t => t.status === 'Not Started').length },
    { status: 'In Progress', count: tasks.filter(t => t.status === 'In Progress').length },
    { status: 'Completed', count: completedTasks },
    { status: 'Blocked', count: tasks.filter(t => t.status === 'Blocked').length }
  ];

  const MetricCard = ({ icon: Icon, title, value, change, trend, color, onClick }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm cursor-pointer transition-all hover:shadow-lg`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {change && (
          <div className={`flex items-center text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
            {change}
          </div>
        )}
      </div>
      <h3 className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-1`}>{title}</h3>
      <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{value}</p>
    </motion.div>
  );

  const exportToCSV = () => {
    toast({ title: 'Export started', description: 'Your CSV file will download shortly.' });
  };

  const exportToPDF = () => {
    toast({ title: 'Export started', description: 'Your PDF report will download shortly.' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Helmet>
        <title>CPA Dashboard - FinxisAI</title>
        <meta name="description" content="Comprehensive CPA firm management dashboard with client tracking, task management, and financial insights." />
      </Helmet>
      <main className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <div className="flex space-x-3">
            <Button onClick={() => setShowAddClient(true)} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
            <Button onClick={() => setShowAddTask(true)} variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
            <Button onClick={() => setShowAddStaff(true)} variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Staff
            </Button>
            <Button onClick={() => setShowLogTime(true)} variant="outline">
              <Clock className="w-4 h-4 mr-2" />
              Log Time
            </Button>
          </div>
        </div>

        {/* Top Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={Users}
            title="Total Clients"
            value={totalClients}
            change="+12%"
            trend="up"
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <MetricCard
            icon={DollarSign}
            title="Total AR"
            value={`$${(mockFinancials.totalAR / 1000).toFixed(0)}K`}
            change="+8%"
            trend="up"
            color="bg-gradient-to-br from-green-500 to-green-600"
          />
          <MetricCard
            icon={TrendingDown}
            title="Total AP"
            value={`$${(mockFinancials.totalAP / 1000).toFixed(0)}K`}
            change="-5%"
            trend="down"
            color="bg-gradient-to-br from-orange-500 to-orange-600"
          />
          <MetricCard
            icon={Wallet}
            title="Bank Balance"
            value={`$${(mockFinancials.bankBalance / 1000).toFixed(0)}K`}
            change="+15%"
            trend="up"
            color="bg-gradient-to-br from-purple-500 to-purple-600"
          />
          <MetricCard
            icon={Calendar}
            title="Cash Runway"
            value={`${mockFinancials.cashRunway} months`}
            color="bg-gradient-to-br from-indigo-500 to-indigo-600"
          />
          <MetricCard
            icon={TrendingUp}
            title="ARR"
            value={`$${(mockFinancials.arr / 1000000).toFixed(1)}M`}
            change="+22%"
            trend="up"
            color="bg-gradient-to-br from-emerald-500 to-emerald-600"
          />
          <MetricCard
            icon={Activity}
            title="Burn Rate"
            value={`$${(mockFinancials.burnRate / 1000).toFixed(0)}K/mo`}
            change="-3%"
            trend="down"
            color="bg-gradient-to-br from-red-500 to-red-600"
          />
          <MetricCard
            icon={Target}
            title="Revenue (MTD)"
            value={`$${(totalRevenue / 1000).toFixed(0)}K`}
            change="+18%"
            trend="up"
            color="bg-gradient-to-br from-cyan-500 to-cyan-600"
          />
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={CheckCircle}
            title="Tasks Completed"
            value={completedTasks}
            color="bg-gradient-to-br from-green-500 to-emerald-600"
          />
          <MetricCard
            icon={AlertCircle}
            title="Pending Tasks"
            value={pendingTasks}
            color="bg-gradient-to-br from-yellow-500 to-amber-600"
          />
          <MetricCard
            icon={Clock}
            title="Hours Logged"
            value={totalHoursLogged.toFixed(1)}
            color="bg-gradient-to-br from-blue-500 to-indigo-600"
          />
          <MetricCard
            icon={Briefcase}
            title="Active Staff"
            value={staff.length}
            color="bg-gradient-to-br from-purple-500 to-violet-600"
          />
        </div>

        {/* AI Insights Panel */}
        <AIFinancialInsights />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Trends */}
          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Revenue vs Expenses</h3>
              <BarChart3 className="w-5 h-5 text-slate-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1e293b' : '#fff', border: 'none', borderRadius: '8px' }} />
                <Legend />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="expenses" stackId="2" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Expense Breakdown */}
          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Expense Breakdown</h3>
              <PieChart className="w-5 h-5 text-slate-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPie>
                <Pie
                  data={expenseBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPie>
            </ResponsiveContainer>
          </div>

          {/* Task Status Distribution */}
          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Task Status Distribution</h3>
              <Activity className="w-5 h-5 text-slate-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tasksByStatus}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="status" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1e293b' : '#fff', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Cash Flow Forecast */}
          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Cash Flow Forecast</h3>
              <TrendingUp className="w-5 h-5 text-slate-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1e293b' : '#fff', border: 'none', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Client Status Overview */}
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Client Status Overview</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                  <th className="text-left py-3 px-4 font-medium text-sm">Client Name</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Industry</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Open Tasks</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {clients.slice(0, 5).map((client) => {
                  const clientTasks = tasks.filter(t => t.client_id === client.id && t.status !== 'Completed');
                  return (
                    <tr key={client.id} className={`border-b ${darkMode ? 'border-slate-700 hover:bg-slate-700' : 'border-slate-100 hover:bg-slate-50'} transition-colors cursor-pointer`}>
                      <td className="py-3 px-4 font-medium">{client.name}</td>
                      <td className="py-3 px-4 text-slate-500">{client.industry || 'N/A'}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          client.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {client.status || 'Active'}
                        </span>
                      </td>
                      <td className="py-3 px-4">{clientTasks.length}</td>
                      <td className="py-3 px-4 text-slate-500">
                        {new Date(client.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Task Manager & Team Time Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Task Manager */}
          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Recent Tasks</h3>
              <Button variant="outline" size="sm" onClick={() => setShowAddTask(true)}>
                <Plus className="w-4 h-4 mr-2" />
                New Task
              </Button>
            </div>
            <div className="space-y-3">
              {tasks.slice(0, 5).map((task) => (
                <div key={task.id} className={`p-4 rounded-lg border ${darkMode ? 'border-slate-700 hover:bg-slate-700' : 'border-slate-200 hover:bg-slate-50'} transition-colors cursor-pointer`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{task.title}</h4>
                      <p className="text-sm text-slate-500 mb-2">{task.cpa_clients?.name}</p>
                      <div className="flex items-center space-x-3 text-xs">
                        <span className={`px-2 py-1 rounded ${
                          task.priority === 'High' ? 'bg-red-100 text-red-700' :
                          task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {task.priority}
                        </span>
                        {task.due_date && (
                          <span className="text-slate-500">
                            Due: {new Date(task.due_date).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      task.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      task.status === 'Blocked' ? 'bg-red-100 text-red-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Time Tracker */}
          <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Team Time Tracker</h3>
              <Button variant="outline" size="sm" onClick={() => setShowLogTime(true)}>
                <Clock className="w-4 h-4 mr-2" />
                Log Time
              </Button>
            </div>
            <div className="space-y-3">
              {timeEntries.slice(0, 5).map((entry) => {
                const amount = parseFloat(entry.hours_logged || 0) * parseFloat(entry.cpa_staff?.hourly_rate || 0);
                return (
                  <div key={entry.id} className={`p-4 rounded-lg border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{entry.cpa_staff?.full_name}</p>
                        <p className="text-sm text-slate-500">{entry.cpa_clients?.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-blue-600">{entry.hours_logged}h</p>
                        <p className="text-sm text-slate-500">${amount.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{new Date(entry.entry_date).toLocaleDateString()}</span>
                      <span>${entry.cpa_staff?.hourly_rate}/hr</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Calendly Scheduling Widget */}
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Schedule a Meeting</h3>
            <Calendar className="w-5 h-5 text-slate-400" />
          </div>
          <div className="text-center py-8">
            <p className="text-slate-500 mb-4">Book a consultation with your clients or team members</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              Open Calendly Scheduler
            </Button>
            <p className="text-xs text-slate-400 mt-2">Powered by Calendly</p>
          </div>
        </div>

        {/* Document Center */}
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Document Center</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Upload
              </Button>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Tax Returns 2024', 'Financial Statements Q2', 'Client Contracts'].map((doc, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${darkMode ? 'border-slate-700 hover:bg-slate-700' : 'border-slate-200 hover:bg-slate-50'} transition-colors cursor-pointer`}>
                <FileText className="w-8 h-8 text-blue-500 mb-3" />
                <h4 className="font-medium mb-1">{doc}</h4>
                <p className="text-xs text-slate-500">Updated 2 days ago</p>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Hub */}
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl border shadow-sm`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Communication Hub</h3>
            <Button variant="outline" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              New Message
            </Button>
          </div>
          <div className="space-y-3">
            {[
              { client: 'Acme Corp', message: 'Can you review the Q2 financials?', time: '10 min ago', unread: true },
              { client: 'TechStart Inc', message: 'Tax filing deadline reminder', time: '1 hour ago', unread: false },
              { client: 'Global Ventures', message: 'Meeting scheduled for tomorrow', time: '3 hours ago', unread: false }
            ].map((msg, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${darkMode ? 'border-slate-700 hover:bg-slate-700' : 'border-slate-200 hover:bg-slate-50'} transition-colors cursor-pointer ${msg.unread ? 'bg-blue-50/50' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium">{msg.client}</h4>
                      {msg.unread && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
                    </div>
                    <p className="text-sm text-slate-500">{msg.message}</p>
                  </div>
                  <span className="text-xs text-slate-400">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modals */}
      <AddClientModal
        open={showAddClient}
        onOpenChange={setShowAddClient}
        onClientAdded={(newClient) => {
          setClients([...clients, newClient]);
          fetchAllData();
        }}
      />
      <AddTaskModal
        open={showAddTask}
        onOpenChange={setShowAddTask}
        clients={clients}
        staff={staff}
        onTaskAdded={(newTask) => {
          setTasks([...tasks, newTask]);
          fetchAllData();
        }}
      />
      <AddStaffModal
        open={showAddStaff}
        onOpenChange={setShowAddStaff}
        onStaffAdded={(newStaff) => {
          setStaff([...staff, newStaff]);
          fetchAllData();
        }}
      />
      <LogTimeModal
        open={showLogTime}
        onOpenChange={setShowLogTime}
        clients={clients}
        tasks={tasks}
        staff={staff}
        onTimeLogged={(newEntry) => {
          setTimeEntries([...timeEntries, newEntry]);
          fetchAllData();
        }}
      />
    </div>
  );
};

export default CpaDashboard;