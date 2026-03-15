import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, PlusCircle, Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import AIChat from '@/components/AIChat';
import AddTaskModal from '@/components/cpa/AddTaskModal';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { toast } from '@/components/ui/use-toast';

const CpaCommunicationPage = () => {
  const { user } = useAuth();
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!user) return;
    setLoading(true);
    const [clientsRes, staffRes] = await Promise.all([
      supabase.from('cpa_clients').select('id, name').eq('cpa_firm_id', user.id),
      supabase.from('cpa_staff').select('*').eq('cpa_firm_id', user.id)
    ]);

    if (clientsRes.error) toast({ title: 'Error fetching clients', variant: 'destructive' });
    else setClients(clientsRes.data);

    if (staffRes.error) toast({ title: 'Error fetching staff', variant: 'destructive' });
    else setStaff(staffRes.data);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleTaskAdded = () => {
    toast({ title: 'Task added successfully!' });
    // Optionally refetch tasks or update state
  };

  const handleScheduleMeeting = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/your-username' });
    } else {
      toast({
        title: "Calendly not loaded",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Communication Hub - FinxisAI</title>
      </Helmet>
      <div className="p-6 lg:p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Communication Hub</h1>
          <p className="text-slate-500 mt-1">Schedule, chat, and manage tasks all in one place.</p>
        </header>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Tabs defaultValue="chat" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="chat"><MessageSquare className="w-4 h-4 mr-2" /> AI Chat</TabsTrigger>
              <TabsTrigger value="schedule"><Calendar className="w-4 h-4 mr-2" /> Schedule Meeting</TabsTrigger>
              <TabsTrigger value="task"><PlusCircle className="w-4 h-4 mr-2" /> Add Task</TabsTrigger>
            </TabsList>
            <TabsContent value="chat">
              <div className="bg-white rounded-2xl shadow-sm border mt-4 h-[65vh] flex flex-col">
                <AIChat />
              </div>
            </TabsContent>
            <TabsContent value="schedule">
              <div className="bg-white rounded-2xl shadow-sm border mt-4 p-8 text-center flex flex-col items-center justify-center h-[65vh]">
                <Calendar className="w-16 h-16 text-blue-500 mb-4" />
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Schedule a Meeting</h2>
                <p className="text-slate-500 mb-6 max-w-md">
                  Easily book a time with clients or team members using our integrated Calendly scheduler.
                </p>
                <Button onClick={handleScheduleMeeting} size="lg">
                  Open Scheduler
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="task">
              <div className="bg-white rounded-2xl shadow-sm border mt-4 p-8 text-center flex flex-col items-center justify-center h-[65vh]">
                {loading ? (
                  <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                ) : (
                  <>
                    <PlusCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Create a New Task</h2>
                    <p className="text-slate-500 mb-6 max-w-md">
                      Quickly add a new task for a client and assign it to a team member.
                    </p>
                    <Button onClick={() => setIsTaskModalOpen(true)} size="lg" variant="outline">
                      Add New Task
                    </Button>
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      <AddTaskModal 
        open={isTaskModalOpen} 
        onOpenChange={setIsTaskModalOpen} 
        onTaskAdded={handleTaskAdded} 
        clients={clients} 
        staff={staff} 
      />
    </>
  );
};

export default CpaCommunicationPage;