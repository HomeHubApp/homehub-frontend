import { Card } from "flowbite-react";
import { Power } from "lucide-react"; // Import an icon to use as the indicator

type ActivityLogProps = {
  maxItems?: number;
};

export default function ActivityLog({ maxItems = 20 }: ActivityLogProps) {
  // This shared component is used in multiple places.
  // `maxItems` lets each page decide how many recent activity rows it wants to show
  // without duplicating the UI markup in several files.
  const activities = [
    { activity: "Kitchen Light turned On", time: "10:30 AM", command: "on" },
    { activity: "Living Room Fan turned Off", time: "10:12 AM", command: "off" },
    { activity: "Bedroom AC turned On", time: "9:58 AM", command: "on" },
    { activity: "Porch Light turned Off", time: "9:40 AM", command: "off" },
    { activity: "Dining Room Fan turned On", time: "9:15 AM", command: "on" },
    { activity: "Garage Light turned On", time: "8:52 AM", command: "on" },
    { activity: "Hallway Light turned Off", time: "8:30 AM", command: "off" },
    { activity: "Office Lamp turned On", time: "8:05 AM", command: "on" },
    { activity: "Guest Room AC turned Off", time: "7:48 AM", command: "off" },
    { activity: "Kitchen Light turned Off", time: "7:20 AM", command: "off" },
    { activity: "Living Room Fan turned On", time: "7:02 AM", command: "on" },
    { activity: "Bathroom Heater turned Off", time: "6:45 AM", command: "off" },
    { activity: "Bedroom Lamp turned On", time: "6:20 AM", command: "on" },
    { activity: "Nursery Light turned Off", time: "6:00 AM", command: "off" },
    { activity: "Outdoor Camera powered On", time: "5:42 AM", command: "on" },
    { activity: "Study Fan turned Off", time: "5:18 AM", command: "off" },
    { activity: "Laundry Room Light turned On", time: "4:55 AM", command: "on" },
    { activity: "Corridor Light turned Off", time: "4:30 AM", command: "off" },
    { activity: "Master AC turned On", time: "4:05 AM", command: "on" },
    { activity: "Kitchen Exhaust turned Off", time: "3:40 AM", command: "off" },
  ];

  // We only render the number of rows requested by the page that uses this component.
  // Pagination is intentionally not applied yet, based on the current requirement.
  const recentActivities = activities.slice(0, maxItems);

  return (
    // `h-full` lets the activity card expand to match neighboring cards when used in a stretched grid row.
    <Card className="w-full h-full">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Activity Log
        </h5>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          View all
        </a>
      </div>
      
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          
          {/* Render only the most recent items for the current page */}
          {recentActivities.map((item, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                
                {/* The Icon Container */}
                <div className="shrink-0 p-2 rounded-full bg-gray-50 dark:bg-gray-800">
                  {/* Conditional Logic: 
                    If item.command === 'on', apply 'text-green-500'. 
                    Otherwise, apply 'text-gray-400'.
                  */}
                  <Power 
                    className={`w-5 h-5 ${
                      item.command === "on" ? "text-green-500" : "text-gray-400"
                    }`} 
                  />
                </div>
                
                {/* Activity Text */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {item.activity}
                  </p>
                </div>
                
                {/* Time */}
                <div className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <time>{item.time}</time>
                </div>
                
              </div>
            </li>
          ))}

        </ul>
      </div>
    </Card>
  );
}
