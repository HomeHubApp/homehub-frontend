import { Dropdown, DropdownItem, Avatar } from "flowbite-react";
import { Bell } from "lucide-react";

export default function TopHeader({Title, Subtitle}) {
  return (
    // 1. flex justify-between pushes the left and right groups to the edges
    // 2. We use flex-col on very small screens, and sm:flex-row on normal screens so it doesn't squish on mobile
    <header className="flex  sm:flex-row justify-between items-start sm:items-center mb-8 gap-2 sm:gap-0 pt-2">
      
      {/* --- LEFT SIDE: Greeting & Date --- */}
      {/* flex-col stacks the */}
      <div className="flex flex-col">
        <h1 className="text-[24px] md:text-[31px] font-bold font-['Plus_Jakarta_Sans'] leading-[120%] tracking-normal dark:text-white">
         {Title}
        </h1>
        {/* Subtitle Text */}
        <p className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 mt-1">
          {Subtitle}
        </p>
      </div>

         </header>
  );
}