import { Card } from "flowbite-react";
import { Clock } from "lucide-react"; // Import an icon to use as the indicator

export default function UpComingAutomations() {
  // Mock data for activity log
  const activities = [
    { activity: "Turn Off", device: "Kitchen Light", time: "10:30 AM", interval: "Daily" },
    { activity: "Living Room Fan turned On", device: "Living Room Fan", time: "12:30 PM", interval: "Daily" },
    { activity: "Bedroom AC turned On", device: "Bedroom AC", time: "11:30 AM", interval: "Weekly" },
    { activity: "Kitchen Light turned Off", device: "Kitchen Light", time: "2:30 PM", interval: "Daily" },
    { activity: "Living Room Fan turned On", device: "Living Room Fan", time: "12:30 PM", interval: "Weekly" },
  ];

  return (
    <Card className="w-full dark:bg-gray-800 dark:shadow-none">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Upcoming Automations
        </h5>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          View all
        </a>
      </div>
      
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          
          {/* Map through the activities array */}
          {activities.map((item, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                
                {/* The Icon Container */}
                <div className="shrink-0 p-2 rounded-full bg-gray-50 dark:bg-gray-800">
                  {/* Conditional Logic: 
                    If item.command === 'on', apply 'text-green-500'. 
                    Otherwise, apply 'text-gray-400'.
                  */}
                  <Clock 
                    className="h-5 w-5 text-gray-400"
                  />
                </div>
                
                {/* Activity Text */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {item.activity}
                  </p>
                  <small className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {item.device} - {item.time}
                  </small>
                </div>
                
                {/* Time */}
                <div className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <time>{item.interval}</time>
                </div>
                
              </div>
            </li>
          ))}

        </ul>
      </div>
    </Card>
  );
}
