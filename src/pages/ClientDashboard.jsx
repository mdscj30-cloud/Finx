import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  DollarSign, TrendingUp, TrendingDown, Clock, Banknote, FileWarning, FileCheck, PieChart, Users, Upload, Settings, HelpCircle, Briefcase, Bot, Link, Link2Off
} from 'lucide-react';
import DashboardMetricCard from '@/components/DashboardMetricCard';
import TransactionsPanel from '@/components/TransactionsPanel';
import ChartsSection from '@/components/ChartsSection';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ComplianceTimeline from '@/components/ComplianceTimeline';
import SubscriptionSpending from '@/components/SubscriptionSpending';
import CPAViewModal from '@/components/CPAViewModal';
import PayrollOverview from '@/components/PayrollOverview';
import AuditTrail from '@/components/AuditTrail';
import { useAIChat } from '@/contexts/AIChatContext.jsx';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { Link as RouterLink } from 'react-router-dom';

const staticMetrics = [
  { icon: DollarSign, title: 'Cash on Hand', value: '$250,480', change: '+5.2%', trend: 'up', color: 'text-green-500', integration: 'Plaid' },
  { icon: TrendingDown, title: 'Burn Rate', value: '$18,500/mo', change: '-3.1%', trend: 'down', color: 'text-green-500', integration: 'QuickBooks' },
  { icon: TrendingUp, title: 'ARR', value: '$1.2M', change: '+15%', trend: 'up', color: 'text-green-500', integration: 'Stripe' },
  { icon: Clock, title: 'Runway', value: '13.5 months', change: '+0.5m', trend: 'up', color: 'text-green-500', integration: 'QuickBooks' },
  { icon: Banknote, title: 'Gross Margin', value: '72%', change: '+1.2%', trend: 'up', color: 'text-green-500', integration: 'QuickBooks' },
  { icon: FileWarning, title: 'Outstanding Invoices (AR)', value: '$42,100', change: '+8%', trend: 'up', color: 'text-red-500', integration: 'QuickBooks' },
  { icon: FileCheck, title: 'Outstanding Bills (AP)', value: '$12,300', change: '-12%', trend: 'down', color: 'text-green-500', integration: 'QuickBooks' },
  { icon: DollarSign, title: 'Net Profit Margin', value: '18%', change: '+2.5%', trend: 'up', color: 'text-green-500', integration: 'QuickBooks' },
];

const quickbooksMetrics = [
    { icon: TrendingDown, title: 'Burn Rate', value: '$22,300/mo', change: '+2.5%', trend: 'up', color: 'text-red-500', integration: 'QuickBooks' },
    { icon: Clock, title: 'Runway', value: '11.2 months', change: '-0.8m', trend: 'down', color: 'text-red-500', integration: 'QuickBooks' },
    { icon: Banknote, title: 'Gross Margin', value: '68%', change: '-2.1%', trend: 'down', color: 'text-red-500', integration: 'QuickBooks' },
    { icon: FileWarning, title: 'Outstanding Invoices (AR)', value: '$58,600', change: '+15%', trend: 'up', color: 'text-red-500', integration: 'QuickBooks' },
    { icon: FileCheck, title: 'Outstanding Bills (AP)', value: '$15,100', change: '+5%', trend: 'up', color: 'text-red-500', integration: 'QuickBooks' },
    { icon: DollarSign, title: 'Net Profit Margin', value: '15%', change: '-1.5%', trend: 'down', color: 'text-red-500', integration: 'QuickBooks' },
];

const quickActions = [
    { icon: Upload, label: 'Upload Receipts' },
    { icon: Users, label: 'Invite Team' },
    { icon: Settings, label: 'Account Settings' },
    { icon: HelpCircle, label: 'Help & Support' },
];

const IntegrationPlaceholder = ({ title, icon: Icon, integrationName }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border flex flex-col items-center justify-center text-center h-full">
    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-slate-400" />
    </div>
    <h3 className="font-bold text-lg text-slate-700">{title}</h3>
    <p className="text-sm text-slate-500 mb-4">Connect {integrationName} to see your data.</p>
    <Button asChild variant="outline">
      <RouterLink to="/client/integrations">
        <Link className="w-4 h-4 mr-2" />
        Connect Now
      </RouterLink>
    </Button>
  </div>
);

const ClientDashboard = () => {
  const [isCpaModalOpen, setIsCpaModalOpen] = useState(false);
  const { setIsAIChatOpen } = useAIChat();
  const { user } = useAuth();
  const [connectedIntegrations, setConnectedIntegrations] = useState(new Set());
  const [loadingIntegrations, setLoadingIntegrations] = useState(true);
  const [mainMetrics, setMainMetrics] = useState(staticMetrics);

  const fetchIntegrations = useCallback(async () => {
    if (!user) return;
    setLoadingIntegrations(true);
    const { data, error } = await supabase
      .from('client_integrations')
      .select('integration_name')
      .eq('user_id', user.id);

    if (error) {
      toast({ title: 'Error fetching integrations', description: error.message, variant: 'destructive' });
    } else {
      const integrations = new Set(data.map(i => i.integration_name));
      setConnectedIntegrations(integrations);
      if (integrations.has('QuickBooks')) {
        const updatedMetrics = staticMetrics.map(metric => {
            const qbMetric = quickbooksMetrics.find(qbm => qbm.title === metric.title);
            return qbMetric || metric;
        });
        setMainMetrics(updatedMetrics);
      } else {
        setMainMetrics(staticMetrics);
      }
    }
    setLoadingIntegrations(false);
  }, [user]);

  useEffect(() => {
    fetchIntegrations();
  }, [fetchIntegrations]);

  const handleQuickAction = (label) => {
    toast({
      title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀',
    });
  };

  const hasAccountingIntegration = connectedIntegrations.has('QuickBooks') || connectedIntegrations.has('Xero');
  const hasPaymentsIntegration = connectedIntegrations.has('Stripe') || connectedIntegrations.has('PayPal');
  const hasPayrollIntegration = connectedIntegrations.has('Gusto');

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Professional Dashboard - FinxisAI Client Portal</title>
      </Helmet>
      <CPAViewModal isOpen={isCpaModalOpen} onClose={() => setIsCpaModalOpen(false)} />
      <main className="flex-grow p-6 lg:p-8 overflow-y-auto bg-slate-100">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Professional Dashboard</h1>
            <p className="text-slate-500 mt-1">Your complete financial command center.</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button variant="outline" onClick={() => setIsCpaModalOpen(true)}>
              <Briefcase className="w-4 h-4 mr-2" />
              CPA View
            </Button>
            <Button onClick={() => handleQuickAction('Export Report')}>Export Report</Button>
          </div>
        </header>

        {hasAccountingIntegration && (
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl mb-8 flex items-center gap-4 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PieChart className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold text-sm">
              <span className="font-bold">AI Summary:</span> Burn rate has increased by 2.5% this month. Consider reviewing recent subscription costs in the panel below.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-8">
          {mainMetrics.map((metric, index) => (
            connectedIntegrations.has(metric.integration) ? (
              <DashboardMetricCard key={metric.title} {...metric} delay={index * 0.05} />
            ) : (
              <div key={metric.title} className="bg-white p-5 rounded-2xl shadow-sm border border-dashed flex flex-col items-center justify-center text-center">
                <Link2Off className="w-8 h-8 text-slate-300 mb-2" />
                <p className="text-sm font-medium text-slate-400">{metric.title}</p>
                <p className="text-xs text-slate-400 mt-1">Connect {metric.integration}</p>
              </div>
            )
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <div className="xl:col-span-2 flex flex-col gap-8">
            {hasAccountingIntegration ? <ChartsSection isQuickBooksConnected={connectedIntegrations.has('QuickBooks')} /> : <IntegrationPlaceholder title="Financial Charts" icon={PieChart} integrationName="an accounting app" />}
            <ComplianceTimeline />
          </div>
          <div className="flex flex-col gap-8">
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-sm border cursor-pointer hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsAIChatOpen(true)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Bot size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Ask FinxisAI</h3>
                  <p className="text-sm text-slate-500">Get instant answers about your finances.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-bold text-lg mb-4 text-slate-800">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map(action => (
                  <Button key={action.label} variant="outline" className="flex-col h-24" onClick={() => handleQuickAction(action.label)}>
                    <action.icon className="w-6 h-6 mb-2 text-blue-600" />
                    <span className="text-xs font-semibold text-center">{action.label}</span>
                  </Button>
                ))}
              </div>
            </motion.div>
            {hasPayrollIntegration ? <PayrollOverview /> : <IntegrationPlaceholder title="Payroll Overview" icon={Users} integrationName="Gusto" />}
            {hasPaymentsIntegration ? <SubscriptionSpending /> : <IntegrationPlaceholder title="Subscription Spending" icon={Briefcase} integrationName="Stripe or PayPal" />}
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
                <AuditTrail />
            </div>
            <div className="flex flex-col gap-8">
                {hasPaymentsIntegration ? <TransactionsPanel /> : <IntegrationPlaceholder title="Recent Transactions" icon={DollarSign} integrationName="Stripe or PayPal" />}
            </div>
        </div>
      </main>
    </>
  );
};

export default ClientDashboard;