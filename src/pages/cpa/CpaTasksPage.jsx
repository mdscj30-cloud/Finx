import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Filter, CheckCircle, Clock, AlertCircle, PlusCircle, Loader2, User, Calendar, Tag, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { toast } from '@/components/ui/use-toast';
import AddTaskModal from '@/components/cpa/AddTaskModal';

const PriorityBadge = ({ priority }) => {
    const color = priority === 'High' ? 'bg-red-100 text-red-700' : priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700';
    return <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${color}`}>{priority}</span>;
};

const StatusBadge = ({ status }) => {
  const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5 w-fit";
  if (status === 'Completed') {
    return <span className={`${baseClasses} bg-green-100 text-green-700`}><CheckCircle size={12} /> {status}</span>;
  }
  if (status === 'In Progress') {
    return <span className={`${baseClasses} bg-blue-100 text-blue-700`}><Clock size={12} /> {status}</span>;
  }
  if (status === 'Blocked') {
    return <span className={`${baseClasses} bg-red-100 text-red-700`}><AlertCircle size={12} /> {status}</span>;
  }
  return <span className={`${baseClasses} bg-slate-100 text-slate-600`}>{status}</span>;
};

const CpaTasksPage = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [clients, setClients] = useState([]);
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    if (!user) return;
    setLoading(true);
    const [tasksRes, clientsRes, staffRes] = await Promise.all([
      supabase.from('cpa_tasks').select('*, cpa_clients(name), cpa_staff(full_name)').eq('cpa_firm_id', user.id).order('created_at', { ascending: false }),
      supabase.from('cpa_clients').select('id, name').eq('cpa_firm_id', user.id),
      supabase.from('cpa_staff').select('*').eq('cpa_firm_id', user.id)
    ]);

    if (tasksRes.error) {
      toast({ title: 'Error fetching tasks', description: tasksRes.error.message, variant: 'destructive' });
    } else {
      setTasks(tasksRes.data);
    }

    if (clientsRes.error) toast({ title: 'Error fetching clients', variant: 'destructive' });
    else setClients(clientsRes.data);

    if (staffRes.error) toast({ title: 'Error fetching staff', variant: 'destructive' });
    else setStaff(staffRes.data);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleTaskAdded = (newTask) => {
    // Refetch to get all joined data correctly
    fetchData();
  };

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>All Tasks - FinxisAI</title>
      </Helmet>
      <div className="p-6 lg:p-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Firm-Wide Task Tracker</h1>
            <p className="text-slate-500 mt-1">A complete list of all pending and completed items across all clients.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => toast({ title: '🚧 Filter feature coming soon!' })}><Filter className="w-4 h-4 mr-2" /> Filter Tasks</Button>
            <Button onClick={() => setIsModalOpen(true)}><PlusCircle className="w-4 h-4 mr-2" /> Add Task</Button>
          </div>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left min-w-[1024px]">
                <thead className="bg-slate-50 text-xs text-slate-500 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3 w-1/4">Task</th>
                    <th scope="col" className="px-6 py-3 w-1/4"><MessageSquare size={14} className="inline-block mr-1" />Description</th>
                    <th scope="col" className="px-6 py-3">Client</th>
                    <th scope="col" className="px-6 py-3"><Tag size={14} className="inline-block mr-1" />Priority</th>
                    <th scope="col" className="px-6 py-3"><Clock size={14} className="inline-block mr-1" />Status</th>
                    <th scope="col" className="px-6 py-3"><User size={14} className="inline-block mr-1" />Assigned To</th>
                    <th scope="col" className="px-6 py-3"><Calendar size={14} className="inline-block mr-1" />Due Date</th>
                    <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id} className="bg-white border-b hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">{task.title}</td>
                      <td className="px-6 py-4 text-slate-600 truncate" title={task.description}>{task.description || 'N/A'}</td>
                      <td className="px-6 py-4 text-slate-600">{task.cpa_clients?.name || 'N/A'}</td>
                      <td className="px-6 py-4"><PriorityBadge priority={task.priority} /></td>
                      <td className="px-6 py-4"><StatusBadge status={task.status} /></td>
                      <td className="px-6 py-4 text-slate-600">{task.cpa_staff?.full_name || 'Unassigned'}</td>
                      <td className="px-6 py-4 text-slate-600">{task.due_date ? new Date(task.due_date).toLocaleDateString() : 'N/A'}</td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" onClick={() => toast({ title: '🚧 View/Edit feature coming soon!' })}>View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
      <AddTaskModal open={isModalOpen} onOpenChange={setIsModalOpen} onTaskAdded={handleTaskAdded} clients={clients} staff={staff} />
    </>
  );
};

export default CpaTasksPage;