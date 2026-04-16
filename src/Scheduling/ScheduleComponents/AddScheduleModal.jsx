import { useState } from "react";
import { X } from "lucide-react";

export default function AddScheduleModal({ close }) {

  const [action, setAction] = useState("Turn On");

  const days = ["M","T","W","T","F","S","S"];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[420px] rounded-2xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">Add Schedule</h2>

          <button onClick={close}>
            <X size={20} />
          </button>
        </div>

        {/* Device */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">
            Select Device
          </label>

          <select className="w-full mt-1 border rounded-lg p-2 text-sm">
            <option>Kitchen Light</option>
            <option>Living Room Fan</option>
            <option>Bedroom AC</option>
          </select>
        </div>

        {/* Action */} 
        <div className="mb-4">

          <label className="text-sm text-gray-600">
            Action
          </label>

          <div className="flex gap-2 mt-2">

            <button
              onClick={() => setAction("Turn On")}
              className={`flex-1 py-2 rounded-lg border text-sm ${
                action === "Turn On"
                ? "bg-yellow-400 border-yellow-400 font-medium"
                : "bg-white"
              }`}
            >
              Turn On
            </button>

            <button
              onClick={() => setAction("Turn Off")}
              className={`flex-1 py-2 rounded-lg border text-sm ${
                action === "Turn Off"
                ? "bg-yellow-400 border-yellow-400 font-medium"
                : "bg-white"
              }`}
            >
              Turn Off
            </button>

            <button
              onClick={() => setAction("Increase Speed")}
              className={`flex-1 py-2 rounded-lg border text-sm ${
                action === "Increase Speed"
                ? "bg-yellow-400 border-yellow-400 font-medium"
                : "bg-white"
              }`}
            >
              Increase Speed
            </button>

          </div>
        </div>

        {/* Time */}
        <div className="mb-4">

          <label className="text-sm text-gray-600">
            Time
          </label>

          <input
            type="time"
            className="w-full mt-1 border rounded-lg p-2 text-sm"
          />

        </div>

        {/* Repeat */}
        <div className="mb-6">

          <label className="text-sm text-gray-600">
            Repeat
          </label>

          <div className="flex gap-2 mt-2">

            {days.map((day, index) => (
              <button
                key={index}
                className="w-8 h-8 rounded-full bg-gray-100 text-sm flex items-center justify-center hover:bg-yellow-400"
              >
                {day}
              </button>
            ))}

          </div>

        </div>

        {/* Save Button */}
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg font-medium">
          Save Schedule
        </button>

      </div>

    </div>
  );
}