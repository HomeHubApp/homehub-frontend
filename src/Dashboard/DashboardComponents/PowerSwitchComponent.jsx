import { Link } from "react-router-dom";
import { Locate, Sun, BatteryWarning, CirclePlus, CirclePower } from "lucide-react";
import { MdPowerSettingsNew, MdExposureNeg1 } from "react-icons/md";
import { Card, ToggleSwitch, Button } from "flowbite-react";

export default function PowerSwitchComponent() {
    return (
        
<div className="w-full h-full">
                        {/* `h-full` allows this card to stretch to the same height as its sibling
                            whenever the parent layout places both components in the same row. */}
                        <Card className="w-full h-full border-2 border-dotted border-gray-400 shadow-none hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                            <div className="flex flex-col items-center justify-center py-6 h-full ">
                                <div className="power-icon-container">
                                    <MdPowerSettingsNew className="w-16 h-16 rounded-full bg-[#FEC60E] p-3 text-black" />
                                </div>
                                <p className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-gray-500 dark:text-gray-400">
                                    Tap to Turn Off
                                    
                                </p>
                            </div>
                        </Card>
                    </div>
    );
}
