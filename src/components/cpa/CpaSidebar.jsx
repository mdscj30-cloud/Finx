import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, ClipboardList, Clock, LogOut, Bot, UserCog, MessageSquare, ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CpaSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    toast({ title: "Logged Out", description: "Redirecting to login page." });
    setTimeout(() => navigate('/login'), 1500);
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/cpa/dashboard' },
    { icon: Users, label: 'Clients', path: '/cpa/clients' },
    { icon: ClipboardList, label: 'Tasks', path: '/cpa/tasks' },
    { icon: UserCog, label: 'Staff', path: '/cpa/staff' },
    { icon: Clock, label: 'Work Activity', path: '/cpa/activity' },
    { icon: MessageSquare, label: 'Communication', path: '/cpa/communication' },
    { icon: ShoppingCart, label: 'Buy Products', path: '/cpa/buy-products' },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="w-64 bg-white border-r p-4 flex flex-col h-screen sticky top-0 shadow-sm">
      <div className="flex items-center gap-3 mb-8 px-2 pt-2">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <Bot className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold gradient-text">FinxisAI</h1>
      </div>
      <nav className="flex-grow">
        <p className="text-xs font-semibold text-slate-400 uppercase mb-2 px-3 tracking-wider">CPA Menu</p>
        {navItems.map(item => (
          <Link key={item.label} to={item.path}>
            <Button 
              variant={isActive(item.path) ? "secondary" : "ghost"} 
              className={`w-full justify-start gap-3 text-base py-6 font-medium ${isActive(item.path) ? 'text-blue-700' : 'text-slate-600'}`}
            >
              <item.icon className="w-5 h-5" /> {item.label}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <Button variant="ghost" onClick={handleLogout} className="w-full justify-start gap-3 text-base py-6 text-slate-600 font-medium">
          <LogOut className="w-5 h-5" /> Logout
        </Button>
      </div>
    </div>
  );
};

export default CpaSidebar;