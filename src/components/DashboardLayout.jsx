// src/components/DashboardLayout.jsx
import Sidebar from "./SideBar";
import { Outlet } from 'react-router-dom';

function DashboardLayout() {           // ← Remove { children }
  return (
    // Control for Dark Mode is also here since it affects the entire dashboard
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"> 
      <Sidebar />
      <main className="flex-1 p-8  sm:ml-64 overflow-auto">
        <Outlet />                     {/* This will render the page content */}
      </main>
    </div>
  );
}

export default DashboardLayout;