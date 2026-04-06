import { useState } from "react";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, DarkThemeToggle } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiMenu } from "react-icons/hi";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 1. Mobile Toggle Button */}
      {/* This button is hidden on screens larger than 'sm' (sm:hidden) */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenu className="w-6 h-6" />
      </button>

      {/* 2. Optional: Dark Overlay for mobile */}
      {/* Clicking outside the sidebar on mobile will close it */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 sm:hidden transition-opacity" 
          onClick={toggleSidebar}
        ></div>
      )}

      {/* 3. The Sidebar Container */}
      {/* fixed, top-0, left-0, h-screen: makes it full height and pinned to the left */}
      {/* transition-transform: gives it a smooth slide effect */}
      {/* sm:translate-x-0: ensures it is always visible on desktop */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar aria-label="Sidebar with content separator" className="w-full h-full">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="/dashboard" icon={HiChartPie}>Dashboard</SidebarItem>
              <SidebarItem href="#" icon={HiViewBoards}>Kanban</SidebarItem>
              <SidebarItem href="#" icon={HiInbox}>Inbox</SidebarItem>
              <SidebarItem href="#" icon={HiUser}>Users</SidebarItem>
              <SidebarItem href="#" icon={HiShoppingBag}>Products</SidebarItem>
              <SidebarItem href="#" icon={HiArrowSmRight}>Sign In</SidebarItem>
              <SidebarItem href="#" icon={HiTable}>Sign Up</SidebarItem>
            </SidebarItemGroup>
            
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>Upgrade to Pro</SidebarItem>
              <SidebarItem href="#" icon={HiViewBoards}>Documentation</SidebarItem>
              <SidebarItem href="#" icon={BiBuoy}>Help</SidebarItem>
            </SidebarItemGroup>

            {/* Dark Mode Toggle Group */}
            <SidebarItemGroup>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Dark Mode</span>
                {/* 2. The built-in Toggle Button */}
                <DarkThemeToggle />
              </div>
            </SidebarItemGroup>


          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}