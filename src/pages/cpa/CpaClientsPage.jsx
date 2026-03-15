import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, PlusCircle, Briefcase, Building, Calendar, CheckCircle, Clock, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import AddClientModal from '@/components/cpa/AddClientModal';
import { toast } from '@/components/ui/use-toast';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

const StatusBadge = ({ status }) => {
  const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5 w-fit";
  if (status === 'Active') {
    return <span className={`${baseClasses} bg-green-100 text-green-700`}><CheckCircle size={12} /> {status}</span>;
  }
  if (status === 'Onboarding') {
    return <span className={`${baseClasses} bg-blue-100 text-blue-700`}><Clock size={12} /> {status}</span>;
  }
  if (status === 'Filing Due') {
    return <span className={`${baseClasses} bg-yellow-100 text-yellow-700`}><Calendar size={12} /> {status}</span>;
  }
  return <span className={`${baseClasses} bg-slate-100 text-slate-600`}><Building size={12} /> {status}</span>;
};

const ClientCard = ({ client, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col hover:shadow-md hover:-translate-y-1 transition-all"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-bold text-lg text-slate-800">{client.name}</h3>
      <StatusBadge status={client.status} />
    </div>
    <div className="space-y-2 text-sm text-slate-500 mb-6 flex-grow">
      <p className="flex items-center gap-2"><Building size={14} /> {client.industry || 'N/A'}</p>
      <p className="flex items-center gap-2"><Briefcase size={14} /> Assigned to: <span className="font-medium text-slate-600">{client.assigned_to_id || 'Unassigned'}</span></p>
    </div>
    <Link to={`/cpa/clients/${client.id}`} className="mt-auto">
      <Button className="w-full">View Details</Button>
    </Link>
  </motion.div>
);

const CpaClientsPage = () => {
  const { user } = useAuth();
  const isOnline = useNetworkStatus();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchClients = async (retryCount = 3) => {
    if (!user) return;
    setLoading(true);
    setError(null);
    
    try {
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000));
      const dbPromise = supabase.from('cpa_clients').select('*').eq('cpa_firm_id', user.id);
      
      const { data, error: dbError } = await Promise.race([dbPromise, timeoutPromise]);
      
      if (dbError) throw dbError;
      setClients(data || []);
    } catch (err) {
      console.error('[CpaClientsPage] Fetch Error:', err);
      if (retryCount > 0 && isOnline) {
        setTimeout(() => fetchClients(retryCount - 1), 1000);
        return;
      }
      setError(err.message || 'Failed to load clients');
      toast({ title: 'Error fetching clients', description: err.message || 'Failed to load data', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [user]);

  const handleClientAdded = (newClient) => {
    setClients(prev => [...prev, newClient]);
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (client.industry && client.industry.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Manage Clients - FinxisAI</title>
      </Helmet>
      <div className="p-6 lg:p-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Client Management</h1>
            <p className="text-slate-500 mt-1">View, search, and manage all your firm's clients.</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-slate-900"
                disabled={loading || error}
              />
            </div>
            <Button onClick={() => setIsModalOpen(true)} disabled={!isOnline}><PlusCircle className="w-4 h-4 mr-2" /> Add Client</Button>
          </div>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
             <AlertCircle className="w-12 h-12 mb-4 text-red-500" />
             <h3 className="text-lg font-bold mb-2">Failed to load data</h3>
             <p className="mb-4">{error}</p>
             <Button variant="outline" className="bg-white" onClick={() => fetchClients()}>
               <RefreshCw className="w-4 h-4 mr-2" /> Retry
             </Button>
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
            <Briefcase className="w-12 h-12 mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-semibold text-slate-700">No clients found</h3>
            <p className="text-slate-500 mb-4">Add your first client to get started.</p>
            <Button onClick={() => setIsModalOpen(true)}><PlusCircle className="w-4 h-4 mr-2" /> Add Client</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client, index) => (
              <ClientCard key={client.id} client={client} index={index} />
            ))}
          </div>
        )}
      </div>
      <AddClientModal open={isModalOpen} onOpenChange={setIsModalOpen} onClientAdded={handleClientAdded} />
    </>
  );
};

export default CpaClientsPage;