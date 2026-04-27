import { Link, useSearchParams } from "react-router-dom";
import { Locate, Sun, BatteryWarning, CirclePlus, CirclePower } from "lucide-react";
import { MdPowerSettingsNew } from "react-icons/md";
import "../assets/CSS/dashboard.css";
import { Card, ToggleSwitch, Button } from "flowbite-react";
import TopHeader from "./DashboardComponents/TopHeader";
import ActivityLog from "./DashboardComponents/ActivityLog";
import PowerSwitchComponent from "./DashboardComponents/PowerSwitchComponent";
import IncrementalController from "./DashboardComponents/IncrementalController";

export default function FanDeviceDetails() {
    const [searchParams] = useSearchParams();
    const deviceName = searchParams.get("name") || "Main Fan";

    // Mock Data
    const deviceStatusData = [
        { deviceName: "Kitchen Light", deviceRoom: "Living Room", icon: Locate, iconbgColor: "bg-yellow-200", status: "On" },
        { deviceName: "Living Room Fan", deviceRoom: "Living Room", icon: Sun, iconbgColor: "bg-gray-100", status: "On" },
        { deviceName: "Split AC", deviceRoom: "Living Room", icon: BatteryWarning, iconbgColor: "bg-yellow-200", status: "Off" },
    ];

    const sortedDevices = [...deviceStatusData].sort((a, b) => {
        if (a.status === "On" && b.status === "Off") return -1;
        if (a.status === "Off" && b.status === "On") return 1;
        return 0;
    });

    return (
        <>
            <TopHeader
                title={deviceName}
                subtitle="Room Details > Living Room"
            />

            {/* `gap-4` adds breathing room when the cards stack on mobile.
                `items-stretch` keeps each desktop column aligned to the same row height. */}
            <div className="grid grid-cols-1 gap-4 items-stretch lg:grid-cols-3 lg:gap-5 mt-2 mx-0.5">

                {/* Activity Log 
            order-2: Sits at the bottom on mobile
            lg:order-1: Moves back to the left side on large screen
        */}
                 <div className="order-2 lg:order-1 w-full h-full">
                    {/* On this page the speed controller should stretch like the other cards. */}
                    <IncrementalController className="lg:h-full" />
                </div>

                <div className="order-3 lg:order-2 w-full h-full">
                    {/* Device detail pages only need a short preview of the latest activity. */}
                    <ActivityLog maxItems={3} />
                </div>


                <div className="order-1 lg:order-2 w-full h-full flex">
                    {/* Changed width to w-full so it matches the ActivityLog's width completely */}
                    <PowerSwitchComponent />
                </div>

            </div>
        </>
    );
}
