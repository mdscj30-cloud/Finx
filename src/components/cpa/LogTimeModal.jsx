import React, { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

const LogTimeModal = ({ open, onOpenChange, onTimeLogged, clients, tasks, staff }) => {
  const { user } = useAuth();
  const [clientId, setClientId] = useState('');
  const [taskId, setTaskId] = useState('');
  const [staffId, setStaffId] = useState('');
  const [hours, setHours] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!clientId || !staffId || !hours || !date) {
      toast({ title: 'Client, staff, hours, and date are required', variant: 'destructive' });
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('cpa_time_entries')
      .insert([{ 
        client_id: clientId, 
        task_id: taskId || null,
        staff_id: staffId,
        hours_logged: hours,
        entry_date: date,
        description,
        cpa_firm_id: user.id 
      }])
      .select('*, cpa_clients(name), cpa_staff(full_name, hourly_rate)');

    setLoading(false);
    if (error) {
      toast({ title: 'Error logging time', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Time logged successfully!' });
      onTimeLogged(data[0]);
      onOpenChange(false);
      setClientId('');
      setTaskId('');
      setStaffId('');
      setHours('');
      setDescription('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Log Time Entry</DialogTitle>
          <DialogDescription>Record billable hours for a client or task.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="client">Client</Label>
              <select id="client" value={clientId} onChange={(e) => setClientId(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                <option value="">Select a client</option>
                {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="task">Task (Optional)</Label>
              <select id="task" value={taskId} onChange={(e) => setTaskId(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" disabled={!clientId}>
                <option value="">Select a task</option>
                {tasks.filter(t => t.client_id === clientId).map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="staff">Resource</Label>
              <select id="staff" value={staffId} onChange={(e) => setStaffId(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                <option value="">Select staff member</option>
                {staff.map(s => <option key={s.id} value={s.id}>{s.full_name}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="hours">Hours</Label>
                    <Input id="hours" type="number" step="0.01" value={hours} onChange={(e) => setHours(e.target.value)} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Details about the work..." />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Entry
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LogTimeModal;