import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PlusCircle, Loader2, User, DollarSign, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { toast } from '@/components/ui/use-toast';
import AddStaffModal from '@/components/cpa/AddStaffModal';

const CpaStaffPage = () => {
  const { user } = useAuth();
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchStaff = async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('cpa_staff')
      .select('*')
      .eq('cpa_firm_id', user.id);
    
    if (error) {
      toast({ title: 'Error fetching staff', description: error.message, variant: 'destructive' });
    } else {
      setStaff(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStaff();
  }, [user]);

  const handleStaffAdded = (newStaffMember) => {
    setStaff(prev => [...prev, newStaffMember]);
  };

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Manage Staff - FinxisAI</title>
      </Helmet>
      <div className="p-6 lg:p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Staff Management</h1>
            <p className="text-slate-500 mt-1">Manage your firm's team members and their roles.</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}><PlusCircle className="w-4 h-4 mr-2" /> Add Staff</Button>
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
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-xs text-slate-500 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3 flex items-center gap-2"><User size={14} /> Full Name</th>
                    <th scope="col" className="px-6 py-3 flex items-center gap-2"><Briefcase size={14} /> Role</th>
                    <th scope="col" className="px-6 py-3 flex items-center gap-2"><DollarSign size={14} /> Hourly Rate</th>
                    <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((member) => (
                    <tr key={member.id} className="bg-white border-b hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">{member.full_name}</td>
                      <td className="px-6 py-4 text-slate-600">{member.role}</td>
                      <td className="px-6 py-4 text-slate-600">${member.hourly_rate}</td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" onClick={() => toast({ title: '🚧 Edit feature coming soon!' })}>Edit</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
      <AddStaffModal open={isModalOpen} onOpenChange={setIsModalOpen} onStaffAdded={handleStaffAdded} />
    </>
  );
};

export default CpaStaffPage;