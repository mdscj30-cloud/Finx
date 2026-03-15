import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { Helmet } from 'react-helmet';

const QuickBooksCallbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [status, setStatus] = useState('Processing authentication...');

  useEffect(() => {
    const handleAuth = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      const realmId = params.get('realmId');

      if (!user) {
        setStatus('User not found. Please log in and try again.');
        toast({
          title: 'Authentication Error',
          description: 'You must be logged in to connect an integration.',
          variant: 'destructive',
        });
        setTimeout(() => navigate('/login'), 3000);
        return;
      }

      if (!code || !realmId) {
        setStatus('Invalid callback parameters. Redirecting...');
        toast({
          title: 'Authentication Error',
          description: 'QuickBooks did not return the necessary credentials.',
          variant: 'destructive',
        });
        setTimeout(() => navigate('/client/integrations'), 3000);
        return;
      }

      setStatus('Exchanging authorization code for access token...');

      const { data: functionData, error: functionError } = await supabase.functions.invoke('quickbooks-token-exchange', {
        body: JSON.stringify({ code, realmId, userId: user.id }),
      });

      if (functionError || functionData.error) {
        setStatus('Failed to connect to QuickBooks. Please try again.');
        toast({
          title: 'Connection Failed',
          description: functionError?.message || functionData.error || 'Could not verify authentication with QuickBooks.',
          variant: 'destructive',
        });
        setTimeout(() => navigate('/client/integrations'), 3000);
        return;
      }
      
      setStatus('Securely saving connection details...');

      const { error: dbError } = await supabase
        .from('client_integrations')
        .upsert({ user_id: user.id, integration_name: 'QuickBooks' }, { onConflict: 'user_id,integration_name' });

      if (dbError) {
        setStatus('Failed to save integration status.');
        toast({
          title: 'Database Error',
          description: 'Could not save the integration status. Please try again.',
          variant: 'destructive',
        });
        setTimeout(() => navigate('/client/integrations'), 3000);
        return;
      }

      setStatus('Successfully connected! Redirecting to your dashboard...');
      toast({
        title: 'QuickBooks Connected!',
        description: 'Your account data has been successfully fetched.',
      });
      setTimeout(() => navigate('/client/dashboard'), 2000);
    };

    if (user) {
      handleAuth();
    }
  }, [location, navigate, user]);

  return (
    <>
      <Helmet>
        <title>Connecting to QuickBooks...</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-4" />
        <h1 className="text-2xl font-bold text-slate-800">Connecting to QuickBooks</h1>
        <p className="text-slate-600 mt-2">{status}</p>
      </div>
    </>
  );
};

export default QuickBooksCallbackPage;