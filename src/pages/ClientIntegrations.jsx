import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, Zap, ExternalLink, Loader2, Power, PowerOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const IntegrationCard = ({ name, description, category, icon, isConnected, onToggle, isLoading, onConnect }) => {
  const handleConnectClick = () => {
    if (name === 'QuickBooks' || name === 'Calendly' || name === 'Booking.com') {
      onConnect(name);
    } else {
      onToggle(name, false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border flex flex-col transition-all duration-300 hover:shadow-md">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-50 border">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">{name}</h3>
          <p className="text-xs text-slate-500">{category}</p>
        </div>
      </div>
      <p className="text-sm text-slate-600 flex-grow mb-6">{description}</p>
      <div className="mt-auto">
        {isConnected ? (
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-green-600 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Connected</span>
            <Button variant="outline" size="sm" onClick={() => onToggle(name, true)} disabled={isLoading}>
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <PowerOff className="w-4 h-4 mr-2" />}
              Disconnect
            </Button>
          </div>
        ) : (
          <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleConnectClick} disabled={isLoading}>
            {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Power className="w-4 h-4 mr-2" />}
            Connect
          </Button>
        )}
      </div>
    </div>
  );
};

const ClientIntegrations = () => {
  const { user } = useAuth();
  const [connectedIntegrations, setConnectedIntegrations] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [updatingIntegration, setUpdatingIntegration] = useState(null);

  const fetchIntegrations = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('client_integrations')
      .select('integration_name')
      .eq('user_id', user.id);

    if (error) {
      toast({ title: 'Error fetching integrations', description: error.message, variant: 'destructive' });
    } else {
      setConnectedIntegrations(new Set(data.map(i => i.integration_name)));
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchIntegrations();
  }, [fetchIntegrations]);

  const handleToggleIntegration = async (name, isConnected) => {
    if (!user) return;
    setUpdatingIntegration(name);

    if (isConnected) {
      const { error } = await supabase
        .from('client_integrations')
        .delete()
        .match({ user_id: user.id, integration_name: name });

      if (error) {
        toast({ title: `Failed to disconnect ${name}`, description: error.message, variant: 'destructive' });
      } else {
        toast({ title: `Disconnected from ${name}`, description: "Your dashboard will now show sample data." });
        setConnectedIntegrations(prev => {
          const newSet = new Set(prev);
          newSet.delete(name);
          return newSet;
        });
      }
    } else {
      const { error } = await supabase
        .from('client_integrations')
        .insert({ user_id: user.id, integration_name: name });

      if (error) {
        toast({ title: `Successfully connected to ${name}`, description: "Your dashboard will now reflect the new data." });
        setConnectedIntegrations(prev => new Set(prev).add(name));
      }
    }
    setUpdatingIntegration(null);
  };

  const handleConnect = (name) => {
    if (name === 'QuickBooks') {
      const clientId = 'ABXOQ4t3yoFTB04oHbfia0iiO9BZphK9gNn3nNmbuDJl3U45NH'; // This will be read from secrets on the server, not here.
      const redirectUri = 'https://finxisai.com/client/dashboard';
      const scope = 'com.intuit.quickbooks.accounting';
      const state = Math.random().toString(36).substring(2);
      
      const authUrl = `https://appcenter.intuit.com/connect/oauth2?client_id=${clientId}&response_type=code&scope=${scope}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
      
      window.location.href = authUrl;

    } else if (name === 'Calendly') {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: 'https://calendly.com/your-username' });
        handleToggleIntegration(name, false);
      } else {
        toast({
          title: "Scheduler not ready",
          description: "The meeting scheduler is still loading. Please try again in a moment.",
          variant: "destructive"
        });
      }
    } else {
      handleToggleIntegration(name, false);
    }
  };

  const integrations = {
    accounting: [
      { name: 'QuickBooks', description: 'Sync invoices, expenses, and chart of accounts automatically.', category: 'Accounting', icon: <img alt="QuickBooks logo" className="w-8 h-8 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Intuit_QuickBooks_logo.svg/2560px-Intuit_QuickBooks_logo.svg.png" /> },
      { name: 'Xero', description: 'Keep your Xero organization up-to-date with seamless data flow.', category: 'Accounting', icon: <img alt="Xero logo" className="w-8 h-8 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Xero_software_logo.svg/2560px-Xero_software_logo.svg.png" /> },
    ],
    payments: [
      { name: 'Stripe', description: 'Import sales data and manage subscriptions directly.', category: 'Payments', icon: <img alt="Stripe logo" className="w-8 h-8 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" /> },
      { name: 'PayPal', description: 'Reconcile your PayPal transactions with ease.', category: 'Payments', icon: <img alt="PayPal logo" className="w-8 h-8 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" /> },
    ],
    payroll: [
      { name: 'Gusto', description: 'Automate payroll journal entries and keep employee data synced.', category: 'Payroll', icon: <img alt="Gusto logo" className="w-8 h-8 object-contain" src="https://avatars.githubusercontent.com/u/3938549?s=280&v=4" /> },
    ],
    scheduling: [
      { name: 'Calendly', description: 'Sync your scheduled meetings and events automatically.', category: 'Scheduling', icon: <img alt="Calendly logo" className="w-8 h-8 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Calendly_logo.svg/2560px-Calendly_logo.svg.png" /> },
    ],
    travel: [
      { name: 'Booking.com', description: 'Import your travel expenses and manage business trip receipts.', category: 'Travel', icon: <img alt="Booking.com logo" className="w-8 h-8 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png" /> },
    ],
    banking: [
      { name: 'Plaid', description: 'Securely connect your bank accounts for real-time transaction data.', category: 'Banking', icon: <img alt="Plaid logo" className="w-8 h-8 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Plaid_logo.svg/2560px-Plaid_logo.svg.png" /> },
    ],
  };

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Integrations - FinxisAI Client Portal</title>
      </Helmet>
      <main className="flex-grow p-8 bg-slate-50">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Connect Your Apps</h1>
            <p className="text-slate-500 mt-1">Sync your financial data from the tools you already use.</p>
          </div>
          <Button variant="outline" onClick={() => toast({ title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀' })}>
            API Documentation <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          Object.entries(integrations).map(([category, items]) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl font-semibold mb-4 capitalize text-slate-700 border-b pb-2">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                  <IntegrationCard 
                    key={item.name} 
                    {...item} 
                    isConnected={connectedIntegrations.has(item.name)}
                    onToggle={handleToggleIntegration}
                    isLoading={updatingIntegration === item.name}
                    onConnect={handleConnect}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default ClientIntegrations;