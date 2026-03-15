import React from 'react';
import { Outlet } from 'react-router-dom';
import ClientSidebar from '@/components/ClientSidebar';
// AIFloatingWidget is now globally available in App.jsx

const ClientPortalLayout = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen font-sans">
      <ClientSidebar />
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default ClientPortalLayout;