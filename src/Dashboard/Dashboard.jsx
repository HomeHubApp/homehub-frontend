import { Link } from "react-router";

// Importing Dashboard Components
import StatCards from "./DashboardComponents/StatCards";
import DeviceStatus from "./DashboardComponents/DeviceStatus";
import ActivityLog from "./DashboardComponents/ActivityLog";
import TopHeader from "./DashboardComponents/TopHeader";

export default function OverviewPage() {
  
  return (
    <>
    {/* Welcome Navbar */}
    <TopHeader
    Title = "Good Morning, David"
    Subtitle = "Saturday, 22 March • My House"
     />
    {/* The Current Statistics Cards */}
      <StatCards />



      {/* This Div controls the outlay for Device Status and Activity Log Components */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Device Status Component */}
        <div className="w-full md:col-span-2">
          <DeviceStatus />
        </div>
        {/* Activity Log Component */}
        <div className="w-full md:col-span-1">
          <ActivityLog />
        </div>
      </div>


     
        
      
    </>
  );
}