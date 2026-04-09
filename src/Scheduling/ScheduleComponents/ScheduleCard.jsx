import { useState } from "react";

export default function ScheduleCard({ schedule }) {

  const [enabled, setEnabled] = useState(schedule.active);

  return (
    <div className="bg-white shadow-sm rounded-xl p-4 flex items-center justify-between">

      {/* Time */}
      <div className="bg-yellow-100 px-4 py-2 rounded-lg text-center w-20">
        <p className="text-sm font-bold">{schedule.time}</p>
        <p className="text-xs text-gray-500">{schedule.period}</p>
      </div>

      {/* Info */}
      <div className="flex-1 ml-4">
        <h4 className="font-semibold">{schedule.action}</h4>
        <p className="text-sm text-gray-500">{schedule.device}</p>

        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
          {schedule.repeat}
        </span>
      </div>

      {/* Toggle */}
      <label className="relative inline-flex items-center cursor-pointer">

        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className="sr-only peer"
        />

        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-yellow-400 relative">

          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>

        </div>

      </label>

    </div>
  );
}