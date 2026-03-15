import React, { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

const AddTaskModal = ({ open, onOpenChange, onTaskAdded, clients, staff }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [clientId, setClientId] = useState('');
  const [assignedToId, setAssignedToId] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Not Started');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setTitle('');
    setClientId('');
    setAssignedToId('');
    setDueDate('');
    setPriority('Medium');
    setStatus('Not Started');
    setDescription('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !clientId) {
      toast({ title: 'Title and client are required', variant: 'destructive' });
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('cpa_tasks')
      .insert([{ 
        title, 
        description,
        client_id: clientId, 
        due_date: dueDate || null, 
        priority, 
        status,
        assigned_to_id: assignedToId || null,
        cpa_firm_id: user.id 
      }])
      .select(`*, cpa_clients ( name ), cpa_staff ( full_name )`);

    setLoading(false);
    if (error) {
      toast({ title: 'Error adding task', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Task added successfully!' });
      onTaskAdded(data[0]);
      onOpenChange(false);
      resetForm();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>Assign a new task, set deadlines, and provide details.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add more details about the task..." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="client">Client</Label>
                    <select id="client" value={clientId} onChange={(e) => setClientId(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                        <option value="">Select a client</option>
                        {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="assigned-to">Assign To</Label>
                    <select id="assigned-to" value={assignedToId} onChange={(e) => setAssignedToId(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="">Unassigned</option>
                        {staff.map(s => <option key={s.id} value={s.id}>{s.full_name}</option>)}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input id="due-date" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Not Started</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                        <option>Blocked</option>
                    </select>
                </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskModal;