import { Link } from "react-router-dom"; // Use react-router-dom

// Import Icons
import { CirclePlus, Clock, Check, Sun, HousePlus } from "lucide-react";
import "../../assets/CSS/dashboard.css";
import { Button, Card } from "flowbite-react";

export default function RoomsCard() {
  // Mock data to be replaced with real data from backend
  const stats = [
    {id:1, roomName: "Living Room", no_devices: 3, icon: HousePlus, iconColor: "#B28B0A", iconbgColor: "bg-[#FFF9E7]" },
    {id:2, roomName: "Kitchen", no_devices: 3, icon: Sun, iconColor: "#B28B0A", iconbgColor: "bg-[#FFF9E7]" },
    {id:3, roomName: "Master Bedroom", no_devices: 2, icon: Clock, iconColor: "#B28B0A", iconbgColor: "bg-[#FFF9E7]" },
    {id:4, roomName: "Home Office", no_devices: 2, icon: Check, iconColor: "#B28B0A", iconbgColor: "bg-[#FFF9E7]" },
  ];

  return (
    <>

    {/* Button */}
        <div className="hidden ml-300 md:flex justify-start mt-4">
        <Button 
            size="xl" 
            className="bg-[#FEC60E] dark:bg-[#FEC60E] enabled:hover:bg-[#E5B30C] text-gray-900 font-bold border-0 focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-900"
        >
            <div className="flex items-center text-lg">
            <CirclePlus className="w-6 h-6 mr-2" />
            Add New Room
            </div>
        </Button>
  
</div>
      {/* Major Page Div */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 ">
        
        {/* Left Side: This Div hosts all the room cards */}
        <div>
          <div className="grid grid-cols-2 gap-5 h-full">        
            {/* Loop through stats and input the values into the card. */}
            {stats.map((stat, index) => (
              
              <Link to ={`/roomdetails/${stat.id}`} key={index} className="w-full h-full">
                <Card 
                key={index}
                className="w-full h-full shadow-blue-200 transition-all duration-300 
                hover:-translate-y-2 hover:shadow-lime-900/50 hover:shadow-lg border-0 rounded-2xl dark:bg-gray-800 dark:shadow-none
                text-[16px] font-['Plus_Jakarta_Sans']"
              >
                {/* Fixed invalid 'flex-cols' to 'flex flex-col' */}
                <div className="flex flex-col justify-between h-full">
                  
                  {/* Icon Container: Small box with the background color */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${stat.iconbgColor}`}>
                    {/* The Icon itself is now much smaller (w-5 h-5) */}
                    <stat.icon className="w-5 h-5" color={stat.iconColor} />
                  </div>
                  
                  <div>
                    <p className=" leading-relaxed tracking-wide font-semibold text-gray-900 dark:text-white mt-1">
                       {stat.roomName}
                    </p>
                    <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-gray-500 dark:text-gray-400">
                      {stat.no_devices} Devices
                    </h2>
                  </div>

                </div>
              </Card>
              </Link>
              
            ))}
          </div>
        </div>

        {/* Right Side: "Add a room" Card */}
        <div className="w-1/2 md:w-full">
          <Card className="max-w-md h-full border-2 border-dotted border-gray-400 shadow-none hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-2 py-6">        
              <CirclePlus className="w-8 h-8 text-gray-400" />
              <p className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-gray-500 dark:text-gray-400">
                Add a room
              </p>        
            </div>
          </Card>
        </div>

      </div>
    </>
  );
}
