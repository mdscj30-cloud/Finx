import React from 'react';
import { Outlet } from 'react-router-dom';
import CpaSidebar from '@/components/cpa/CpaSidebar';
import CpaHeader from '@/components/cpa/CpaHeader';
// AIFloatingWidget is now globally available in App.jsx

const CpaPortalLayout = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen font-sans">
      <CpaSidebar />
      <div className="flex-1 flex flex-col">
        <CpaHeader />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CpaPortalLayout;