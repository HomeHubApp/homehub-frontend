import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, DarkThemeToggle, Button } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiUsers, HiChartPie, HiCalendar, HiViewBoards, HiMenu, HiOutlineHome, HiPlus, HiViewList } from "react-icons/hi";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Initialize useLocation to track the current URL path
  const location = useLocation();

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenu className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 sm:hidden transition-opacity" 
          onClick={toggleSidebar}
        ></div>
      )}

      {/* The Sidebar Container */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar aria-label="Sidebar with content separator" className="w-full h-full">
          <SidebarItems>
            
            {/* THIS IS THE MAGIC WRAPPER */}
            <div className="flex flex-col justify-between h-[calc(100vh-4rem)]">
              
              {/* TOP SECTION */}
              <div>
                <SidebarItemGroup>
                  <SidebarItem 
                    as={Link} 
                    to="/dashboard" 
                    icon={HiOutlineHome}
                    className={location.pathname === "/dashboard" ? "bg-[#FFF9E7] dark:bg-gray-700 hover:bg-[#FFF9E7]" : ""}
                  >
                    Home
                  </SidebarItem>

                  <SidebarItem 
                    as={Link} 
                    to="/rooms" 
                    icon={HiViewBoards}
                    className={location.pathname === "/rooms" ? "bg-[#FFF9E7] dark:bg-gray-700 hover:bg-[#FFF9E7]" : ""}
                  >
                    Rooms
                  </SidebarItem>

                  <SidebarItem 
                    as={Link} 
                    to="/schedule" 
                    icon={HiCalendar}
                    className={location.pathname === "/schedule" ? "bg-[#FFF9E7] dark:bg-gray-700 hover:bg-[#FFF9E7]" : ""}
                  >
                    Schedule
                  </SidebarItem>

                  <SidebarItem 
                    as={Link} 
                    to="/profile" 
                    icon={HiUsers}
                    className={location.pathname === "/profile" ? "bg-[#FFF9E7] dark:bg-gray-700 hover:bg-[#FFF9E7]" : ""}
                  >
                    Profile
                  </SidebarItem>
                </SidebarItemGroup>
              </div>
              
              {/* BOTTOM SECTION */}
              {/* Because of 'justify-between' on the parent div, this is forced to the bottom */}
              <div> 
                <SidebarItemGroup>
                  <SidebarItem 
                    as={Link} 
                    to="/dashboard" 
                    icon={HiUsers}
                    className="bg-[#FEC60E] hover:bg-amber-200 dark:bg-gray-900" >
                    My House
                  </SidebarItem>

                  <SidebarItem href="#" icon={HiViewBoards}>Office</SidebarItem>
                  <Button className="justify-center align-middle px-10 hover:bg-amber-300" 
                  color="alternative">
                    <span className="mr-1"><HiPlus /></span>Add House</Button>
                </SidebarItemGroup>

                {/* Your Dark Mode Toggle Group */}
                <SidebarItemGroup>
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Theme</span>
                    <DarkThemeToggle />
                  </div>
                </SidebarItemGroup>
              </div>

            </div> {/* END OF MAGIC WRAPPER */}

          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}