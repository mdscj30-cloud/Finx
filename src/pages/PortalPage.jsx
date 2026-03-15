import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Link, FileText, Settings, LogOut, ChevronLeft, ChevronRight, BarChart2, DollarSign, TrendingUp, AlertCircle, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const integrationsData = [
  { name: 'QuickBooks', category: 'Accounting', alt: 'QuickBooks logo, a green Q with a blue circle' },
  { name: 'Xero', category: 'Accounting', alt: 'Xero logo, a stylized blue X' },
  { name: 'Stripe', category: 'Payments', alt: 'Stripe logo, a black and white wordmark' },
  { name: 'Sage', category: 'Accounting', alt: 'Sage logo, a green leaf icon' },
  { name: 'PayPal', category: 'Payments', alt: 'PayPal logo, a blue double P icon' },
  { name: 'Gusto', category: 'Payroll', alt: 'Gusto logo, a stylized G icon' },
];

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/portal' },
    { icon: Link, label: 'Integrations', path: '/portal' },
    { icon: FileText, label: 'Reports', path: '/portal' },
    { icon: Settings, label: 'Settings', path: '/portal' },
  ];

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out. Redirecting to homepage.",
    });
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative bg-white border-r border-slate-200 flex flex-col h-screen ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      <div className={`flex items-center p-4 border-b ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!isCollapsed && <span className="text-xl font-bold gradient-text">FinxisAI</span>}
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className="rounded-full">
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <nav className="flex-grow p-2 space-y-2">
        {navItems.map(item => (
          <Button
            key={item.label}
            variant="ghost"
            className={`w-full flex items-center gap-3 ${isCollapsed ? 'justify-center' : 'justify-start'}`}
            onClick={() => toast({ title: `Navigating to ${item.label}`, description: "This is a demo portal. All links lead to the dashboard." })}
          >
            <item.icon className="w-5 h-5" />
            {!isCollapsed && <span>{item.label}</span>}
          </Button>
        ))}
      </nav>
      <div className="p-2 border-t">
        <Button variant="ghost" className={`w-full flex items-center gap-3 ${isCollapsed ? 'justify-center' : 'justify-start'}`} onClick={handleLogout}>
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span>Logout</span>}
        </Button>
      </div>
    </motion.div>
  );
};

const DashboardWidget = ({ icon: Icon, title, value, change, period, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold text-slate-600">{title}</h3>
      <Icon className="w-6 h-6 text-slate-400" />
    </div>
    <p className="text-3xl font-bold text-slate-800 mb-2">{value}</p>
    <div className="flex items-center text-sm">
      <span className={`flex items-center font-semibold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change.startsWith('+') ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingUp className="w-4 h-4 mr-1 transform -scale-y-100" />}
        {change}
      </span>
      <span className="text-slate-500 ml-2">{period}</span>
    </div>
  </motion.div>
);

const IntegrationCard = ({ name, category, alt, index }) => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
    toast({
      title: `${isConnected ? 'Disconnected' : 'Connected'} to ${name}`,
      description: `You have successfully ${isConnected ? 'disconnected' : 'connected'} your ${name} account.`,
      action: <CheckCircle className="text-green-500" />,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center"
    >
      <img alt={alt} className="w-16 h-16 rounded-full mb-4 object-cover" src="https://images.unsplash.com/photo-1615003380049-a716b685b98e" />
      <h4 className="font-bold text-lg text-slate-800">{name}</h4>
      <p className="text-sm text-slate-500 mb-4 flex-grow">{category}</p>
      <Button onClick={handleConnect} variant={isConnected ? 'secondary' : 'default'} className="w-full group">
        {isConnected ? (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Connected
          </>
        ) : (
          <>
            <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Connect
          </>
        )}
      </Button>
    </motion.div>
  );
};

const PortalPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <>
      <Helmet>
        <title>Portal - FinxisAI</title>
        <meta name="description" content="Your central hub for financial automation and insights." />
      </Helmet>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
        <main className="flex-grow p-8 overflow-y-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold font-display mb-2">Welcome Back!</h1>
            <p className="text-slate-600 text-lg">Here's your financial overview for today.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <DashboardWidget icon={DollarSign} title="Cash Flow" value="$124,530.80" change="+5.2%" period="vs last month" index={0} />
            <DashboardWidget icon={BarChart2} title="Profit & Loss" value="$32,880.10" change="+12.8%" period="vs last month" index={1} />
            <DashboardWidget icon={TrendingUp} title="Burn Rate" value="$15,200.50" change="-2.1%" period="vs last month" index={2} />
            <DashboardWidget icon={AlertCircle} title="Open Alerts" value="3" change="+1" period="since yesterday" index={3} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
          >
            <h2 className="text-2xl font-bold mb-6">Connect Your Apps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {integrationsData.map((integration, index) => (
                <IntegrationCard key={integration.name} {...integration} index={index} />
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default PortalPage;