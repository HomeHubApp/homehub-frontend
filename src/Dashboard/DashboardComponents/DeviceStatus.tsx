import { Link } from "react-router-dom"; // Note: Usually 'react-router-dom', not 'react-router'
import { Locate, Sun, BatteryWarning } from "lucide-react";
import "../../assets/CSS/dashboard.css";
// 1. Import ToggleSwitch from flowbite-react
import { Card, ToggleSwitch } from "flowbite-react";


import UpComingAutomations from "./UpComingAutomations";

export default function DeviceStatus() {
  
  // Mock Data
  const deviceStatusData = [
    { deviceName: "Kitchen Light", deviceRoom: "Kitchen", icon: Locate, iconbgColor: "bg-yellow-200", status: "On" },
    { deviceName: "Living Room Fan", deviceRoom: "Living Room", icon: Sun, iconbgColor: "bg-gray-100", status: "Off" },
    { deviceName: "Bedroom AC", deviceRoom: "Bedroom", icon: BatteryWarning, iconbgColor: "bg-yellow-200", status: "On" },
     { deviceName: "Living Room Fan", deviceRoom: "Living Room", icon: Sun, iconbgColor: "bg-gray-100", status: "Off" },
    { deviceName: "Bedroom AC", deviceRoom: "Bedroom", icon: BatteryWarning, iconbgColor: "bg-yellow-200", status: "On" },
     { deviceName: "Living Room Fan", deviceRoom: "Living Room", icon: Sun, iconbgColor: "bg-gray-100", status: "Off" },
  ];

  // 2. Sort the data: "On" devices come first
  const sortedDevices = [...deviceStatusData].sort((a, b) => {
    if (a.status === "On" && b.status === "Off") return -1;
    if (a.status === "Off" && b.status === "On") return 1;
    return 0;
  });

  return (
    <>
    <div className="border border-gray-200 rounded-2xl p-3">

      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-4">Device Status</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        {/* Map through the SORTED array instead of the raw data */}
        {sortedDevices.map((device, index) => (
          <div key={index} className="w-full">
            
            {/* 3. Dynamic Background Color applied to the Card */}
            <Card 
              className={`w-full border-0 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg
                ${device.status === "On" 
                  ? "bg-[#FEC60E] dark:bg-yellow-900/30" // Yellow bg for "On"
                  : "bg-white dark:bg-gray-800"          // White bg for "Off"
                }
              `}
            >
              {/* Changed to flex-col to stack the top row and bottom text */}
              <div className="flex flex-col gap-4">
                
                {/* Top Row: Icon (Left) & Toggle (Right) */}
                <div className="flex items-start justify-between w-full">
                  <div className={`p-2 rounded-full ${device.iconbgColor}`}>
                    <device.icon className="w-8 h-8" color="#1A1A1A" />
                  </div>
                  
                  {/* Flowbite Toggle Switch */}
                  <ToggleSwitch 
                    checked={device.status === "On"} 
                    onChange={() => {}} // Empty for now, requires state to be interactive
                    color="warning" // Makes the toggle yellow/orange when active
                  />
                </div>

                {/* Bottom Row: Device Name & Room */}
                <div className="mt-2">
                  <p className="text-xl font-['Plus_Jakarta_Sans'] font-semibold text-gray-900 dark:text-white">
                    {device.deviceName}
                  </p>
                  <p className="text-[14px] font-medium text-gray-500 dark:text-gray-400 mt-1">
                    {device.deviceRoom}
                  </p>
                </div>

              </div>
            </Card>
          </div>       
        ))}
        
      </div>

            {/* Upcoming Automations Component */}
            <div className="mt-5">
                <UpComingAutomations  />
            </div>
            {/* End of border div */}


    </div>

    </>
  );
}