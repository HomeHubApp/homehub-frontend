import { Link, useSearchParams } from "react-router-dom";
import { Locate, Sun, BatteryWarning, CirclePlus, CirclePower } from "lucide-react";
import { MdPowerSettingsNew } from "react-icons/md";
import "../assets/CSS/dashboard.css";
import { Card, ToggleSwitch, Button } from "flowbite-react";
import TopHeader from "./DashboardComponents/TopHeader";
import ActivityLog from "./DashboardComponents/ActivityLog";
import PowerSwitchComponent from "./DashboardComponents/PowerSwitchComponent";

export default function LightDetails() {
    const [searchParams] = useSearchParams();
    const deviceName = searchParams.get("name") || "Main Light";

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

            {/* On large screens, grid items stretch to the same row height.
               Giving each column wrapper `h-full` allows the child cards to fill that shared height. */}
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 lg:gap-5 mt-2 mx-0.5">

                {/* Activity Log 
            order-2: Sits at the bottom on mobile
            lg:order-1: Moves back to the left side on large screen
        */}
                <div className="order-2 lg:order-1 w-full h-full">
                    <ActivityLog maxItems={3} />
                </div>


                <div className="order-1 lg:order-2 w-full h-full flex">
                    {/* This wrapper now fills the full grid column so the power card can match
                        the Activity Log height instead of shrinking to two-thirds width/height. */}
                    <PowerSwitchComponent />


                </div>

            </div>
        </>
    );
}
