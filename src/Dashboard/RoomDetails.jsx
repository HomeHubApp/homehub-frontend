import { Link } from "react-router-dom"; // Note: Usually 'react-router-dom', not 'react-router'
import { Locate, Sun, BatteryWarning, CirclePlus } from "lucide-react";
import "../assets/CSS/dashboard.css";
// 1. Import ToggleSwitch from flowbite-react
import { Card, ToggleSwitch, Button } from "flowbite-react";
import TopHeader from "./DashboardComponents/TopHeader";



export default function RoomDetails() {
  
  // Mock Data
  const deviceStatusData = [
    { deviceName: "Kitchen Light", deviceRoom: "Living Room", icon: Locate, iconbgColor: "bg-yellow-200", status: "On" },
    { deviceName: "Living Room Fan", deviceRoom: "Living Room", icon: Sun, iconbgColor: "bg-gray-100", status: "On" },
    { deviceName: "Split AC", deviceRoom: "Living Room", icon: BatteryWarning, iconbgColor: "bg-yellow-200", status: "Off" },
  ];

  // 2. Sort the data: "On" devices come first
  const sortedDevices = [...deviceStatusData].sort((a, b) => {
    if (a.status === "On" && b.status === "Off") return -1;
    if (a.status === "Off" && b.status === "On") return 1;
    return 0;
  });

  return (
    <>
    <TopHeader
            Title="Room Details"
            Subtitle="Living Room"
          />
    {/* Button */}
            <div className="hidden md:flex justify-end mt-4">
            <Button 
                size="xl" 
                className="bg-[#FEC60E] dark:bg-[#FEC60E] enabled:hover:bg-[#E5B30C] text-gray-900 font-bold border-0 focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-900"
            >
                <div className="flex items-center text-lg">
                <CirclePlus className="w-6 h-6 mr-2" />
                Add New Device
                </div>
            </Button>

    </div>
    <div className="border border-gray-200 rounded-2xl p-3">

      
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
                    {device.status}
                  </p>
                </div>

              </div>
            </Card>
          </div>       
        ))}
        
      </div>

           


    </div>

    </>
  );
}