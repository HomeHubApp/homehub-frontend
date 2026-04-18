import { Link } from "react-router-dom";
import { Locate, Sun, BatteryWarning, CirclePlus } from "lucide-react";
import "../assets/CSS/dashboard.css";
import { Card, ToggleSwitch, Button } from "flowbite-react";
import TopHeader from "./DashboardComponents/TopHeader";
import ActivityLog from "./DashboardComponents/ActivityLog";

export default function LightDetails() {

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
                title="Main Light"
                subtitle="Room Details > Living Room"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                {/* Activity Log 
            order-2: Sits at the bottom on mobile
            md:order-1: Moves back to the left side on desktop
        */}
                <div className="order-2 md:order-1 w-full">
                    <ActivityLog />
                </div>


                <div className="order-1 md:order-2 w-2/3 h-full flex ">
                    {/* Changed width to w-full so it matches the ActivityLog's width completely */}
                    <div className="w-full h-1/2">
                        <Card className="w-full h-full border-2 border-dotted border-gray-400 shadow-none hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                            <div className="flex flex-col items-center justify-center gap-2 py-6 h-full">
                                <CirclePlus className="w-8 h-8 text-gray-400" />
                                <p className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-gray-500 dark:text-gray-400">
                                    Add a room
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    );
}
