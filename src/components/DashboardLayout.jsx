// src/components/DashboardLayout.jsx
import Sidebar from "./SideBar";
import { Outlet } from 'react-router-dom';

function DashboardLayout() {           // ← Remove { children }
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 pt-20 sm:ml-64 overflow-auto">
        <Outlet />                     {/* This will render the page content */}
      </main>
    </div>
  );
}

export default DashboardLayout;