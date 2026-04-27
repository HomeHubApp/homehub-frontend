import { Link } from "react-router";

// Importing Dashboard Components
import StatCards from "./DashboardComponents/StatCards";
import DeviceStatus from "./DashboardComponents/DeviceStatus";
import ActivityLog from "./DashboardComponents/ActivityLog";
import TopHeader from "./DashboardComponents/TopHeader";

export default function OverviewPage() {
  
  return (
    <>
    <TopHeader
      title="Good Morning, Ndazibari"
      subtitle="Saturday, 22 March • My House"
    />
      <StatCards />

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="w-full md:col-span-2">
          <DeviceStatus />
        </div>
        <div className="w-full md:col-span-1">
          {/* The dashboard should show a longer recent history preview. */}
          <ActivityLog maxItems={20} />
        </div>
      </div>
    </>
  );
}
