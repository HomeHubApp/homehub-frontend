
import { Minus, Plus } from "lucide-react";

export default function LightDetails({ className = "lg:h-1/2" }) {
    return(
        <div className={`w-full h-auto rounded-2xl bg-white border-gray-400 shadow-none hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors cursor-pointer ${className}`}>
           {/* `px-5` gives the title matching left and right spacing. */}
           <p className="px-5 pt-5 font-bold text-2xl">Fan Speed</p>

           {/* The speed control keeps the same horizontal padding as the title,
               and spreads the three items evenly inside a gray pill.
               `pb-5` keeps the control comfortably inside the card on small screens. */}
           <div className="px-5 pt-5 pb-5">
                  <div className="flex items-center justify-between rounded-3xl
                   bg-gray-200 px-5 py-4 text-gray-800 dark:bg-gray-700 dark:text-white
                   ">
                         {/* Using a real button here makes the control accessible and gives us
                             a proper box to style with border, radius and hover states. */}
                         <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-3xl text-gray-800 shadow-sm transition hover:bg-gray-100 dark:border-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600"
                            aria-label="Decrease fan speed"
                         >
                            <Minus className="h-5 w-5" />
                         </button>
                         <span className="text-2xl font-bold">3/5</span>
                         <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-3xl text-gray-800 shadow-sm transition hover:bg-gray-100 dark:border-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600"
                            aria-label="Increase fan speed"
                         >
                            <Plus className="h-5 w-5" />
                         </button>
                  </div>
           </div>
          
        </div>
    );
}
