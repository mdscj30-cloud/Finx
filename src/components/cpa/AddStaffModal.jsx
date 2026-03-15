import React, { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

const AddStaffModal = ({ open, onOpenChange, onStaffAdded }) => {
  const { user } = useAuth();
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !hourlyRate) {
      toast({ title: 'Full name and hourly rate are required', variant: 'destructive' });
      return;
    }
    setLoading(true);
    
    const { data: staffData, error: staffError } = await supabase
      .from('cpa_staff')
      .insert([{ 
        full_name: fullName, 
        role, 
        hourly_rate: hourlyRate, 
        cpa_firm_id: user.id,
        user_id: user.id
      }])
      .select();

    setLoading(false);
    if (staffError) {
      toast({ title: 'Error adding staff member', description: staffError.message, variant: 'destructive' });
    } else {
      toast({ title: 'Staff member added successfully!' });
      onStaffAdded(staffData[0]);
      onOpenChange(false);
      setFullName('');
      setRole('');
      setHourlyRate('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Staff Member</DialogTitle>
          <DialogDescription>Enter the details for the new team member.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g., Senior Accountant" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hourly-rate">Hourly Rate</Label>
              <Input id="hourly-rate" type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} required />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Staff
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStaffModal;