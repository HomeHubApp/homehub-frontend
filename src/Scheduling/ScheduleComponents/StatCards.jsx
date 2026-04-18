import { Link } from "react-router";

// Import Icons
import { House, Building2, Cpu, Activity, Clock, Check, Sun } from "lucide-react";
import "../../assets/CSS/dashboard.css";
import { Button, Card } from "flowbite-react";

export default function StatCards() {
  // Mock data to be replaced with real data from backend
  const stats = [
    { label: "Total Devices", value: "8", icon: Sun, iconColor: "#1A1A1A", iconbgColor: "bg-[#FFF9E7]" },
    { label: "Devices On", value: "3", icon: Check , iconColor: "#22C55E", iconbgColor: "bg-[#E9F9EF]" },
    { label: "Scheduled Today", value: "2", icon: Clock, iconColor: "#B28B0A", iconbgColor: "bg-[#FFF9E7]" },
  ];

  return (
    <>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        {/* Card One */}
        
          {/* Loop through stats and input the values into the card. */}
         {stats.map((stat, index) => (
          <div key={index}>
           <Card className="w-full rounded-2xl border-0 shadow-blue-200 transition-all duration-300 hover:-translate-y-2.5
               hover:shadow-lg hover:shadow-lime-900/50 dark:bg-gray-800 dark:shadow-none">
            <div className="flex items-center">
              <div className="mr-4">
                <stat.icon className={`w-10 h-10 ${stat.iconbgColor} `} color={stat.iconColor}  />
              </div>
              <div>
               <p className="text-[28px] font-['Plus_Jakarta_Sans'] leading-relaxed tracking-wide font-semibold text-gray-900 dark:text-white mt-1">
                  {stat.value}
                </p>

                <h2 className="text-[13px] font-medium text-gray-500 dark:text-gray-400">
                  {stat.label}
                </h2>
                
              </div>
            </div>
          </Card>
          </div>
         ))}
         
        

        
      </div>
      {/* Card Section Ends */}
    </>
  );
}
