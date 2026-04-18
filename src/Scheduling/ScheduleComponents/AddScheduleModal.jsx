import { useState } from "react";
import { X } from "lucide-react";

export default function AddScheduleModal({ close }) {

  const [action, setAction] = useState("Turn On");

  const days = ["M","T","W","T","F","S","S"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60">

      <div className="w-[420px] rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-black/30">

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Add Schedule</h2>

          <button
            onClick={close}
            className="rounded-lg p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Device */}
        <div className="mb-4">
          <label className="text-sm text-gray-600 dark:text-gray-300">
            Select Device
          </label>

          <select className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-yellow-500 dark:focus:ring-yellow-500">
            <option>Kitchen Light</option>
            <option>Living Room Fan</option>
            <option>Bedroom AC</option>
          </select>
        </div>

        {/* Action */} 
        <div className="mb-4">

          <label className="text-sm text-gray-600 dark:text-gray-300">
            Action
          </label>

          <div className="flex gap-2 mt-2">

            <button
              onClick={() => setAction("Turn On")}
              className={`flex-1 rounded-lg border py-2 text-sm transition-colors ${
                action === "Turn On"
                ? "border-yellow-400 bg-yellow-400 font-medium text-gray-900 dark:border-[#FEC60E] dark:bg-[#FEC60E] dark:text-gray-900"
                : "bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Turn On
            </button>

            <button
              onClick={() => setAction("Turn Off")}
              className={`flex-1 rounded-lg border py-2 text-sm transition-colors ${
                action === "Turn Off"
                ? "border-yellow-400 bg-yellow-400 font-medium text-gray-900 dark:border-[#FEC60E] dark:bg-[#FEC60E] dark:text-gray-900"
                : "bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Turn Off
            </button>

            <button
              onClick={() => setAction("Increase Speed")}
              className={`flex-1 rounded-lg border py-2 text-sm transition-colors ${
                action === "Increase Speed"
                ? "border-yellow-400 bg-yellow-400 font-medium text-gray-900 dark:border-[#FEC60E] dark:bg-[#FEC60E] dark:text-gray-900"
                : "bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Increase Speed
            </button>

          </div>
        </div>

        {/* Time */}
        <div className="mb-4">

          <label className="text-sm text-gray-600 dark:text-gray-300">
            Time
          </label>

          <input
            type="time"
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:[color-scheme:dark] dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
          />

        </div>

        {/* Repeat */}
        <div className="mb-6">

          <label className="text-sm text-gray-600 dark:text-gray-300">
            Repeat
          </label>

          <div className="flex gap-2 mt-2">

            {days.map((day, index) => (
              <button
                key={index}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-700 transition-colors hover:bg-yellow-400 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-[#FEC60E] dark:hover:text-gray-900"
              >
                {day}
              </button>
            ))}

          </div>

        </div>

        {/* Save Button */}
        <button className="w-full rounded-lg bg-yellow-400 py-2 font-medium text-gray-900 transition-colors hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-200 dark:bg-[#FEC60E] dark:hover:bg-[#E5B30C] dark:focus:ring-yellow-900">
          Save Schedule
        </button>

      </div>

    </div>
  );
}
