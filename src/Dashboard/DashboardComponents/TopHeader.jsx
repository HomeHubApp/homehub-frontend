import { Dropdown, Avatar } from "flowbite-react";
import { Bell } from "lucide-react";

export default function TopHeader() {
  return (
    // 1. flex justify-between pushes the left and right groups to the edges
    // 2. We use flex-col on very small screens, and sm:flex-row on normal screens so it doesn't squish on mobile
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-8 gap-4 sm:gap-0 pt-4">
      
      {/* --- LEFT SIDE: Greeting & Date --- */}
      {/* flex-col stacks the Good Morning text and the Date on top of each other */}
      <div className="flex flex-col">
        <h1 className="text-[24px] md:text-[31px] font-bold font-['Plus_Jakarta_Sans'] leading-[120%] tracking-normal dark:text-white">
          Good Morning, David
        </h1>
        {/* Cleaned up the Figma classes to standard Tailwind text sizing and colors */}
        <p className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 mt-1">
          Saturday, 22 March • My House
        </p>
      </div>

      {/* --- RIGHT SIDE: Notification & Profile Dropdowns --- */}
      <div className="flex items-center gap-4 self-end sm:self-auto">
        
        {/* Notification Dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            // Custom Bell Trigger with a notification "dot"
            <div className="relative p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              {/* The little red notification dot */}
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
            </div>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm font-semibold text-gray-900 dark:text-white">Notifications</span>
          </Dropdown.Header>
          <Dropdown.Item>Motion detected in Backyard</Dropdown.Item>
          <Dropdown.Item>Living Room AC turned off</Dropdown.Item>
          <Dropdown.Item>Update available for Thermostat</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="text-blue-600 justify-center font-medium">View all</Dropdown.Item>
        </Dropdown>

        {/* User Profile Dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar 
              alt="User settings" 
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
              rounded 
              className="ring-2 ring-gray-100 dark:ring-gray-700"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm text-gray-900 dark:text-white">David</span>
            <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">david@example.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="text-red-600">Sign out</Dropdown.Item>
        </Dropdown>

      </div>
    </header>
  );
}