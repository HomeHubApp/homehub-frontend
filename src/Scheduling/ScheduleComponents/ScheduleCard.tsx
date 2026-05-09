import { useState } from "react";

type Schedule = {
  id: number;
  time: string;
  period: string;
  action: string;
  device: string;
  repeat: string;
  active: boolean;
};

type ScheduleCardProps = {
  schedule: Schedule;
};

export default function ScheduleCard({ schedule }: ScheduleCardProps) {
  const [enabled, setEnabled] = useState(schedule.active);

  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-colors dark:bg-gray-800 dark:shadow-none">

      {/* Time */}
      <div className="w-20 rounded-lg bg-yellow-100 px-4 py-2 text-center dark:bg-yellow-900/30">
        <p className="text-sm font-bold text-gray-900 dark:text-white">{schedule.time}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{schedule.period}</p>
      </div>

      {/* Info */}
      <div className="flex-1 ml-4">
        <h4 className="font-semibold text-gray-900 dark:text-white">{schedule.action}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{schedule.device}</p>

        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
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

        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer peer-checked:bg-yellow-400 dark:bg-gray-700 dark:peer-checked:bg-[#FEC60E]">

          <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5 dark:bg-gray-200"></div>

        </div>

      </label>

    </div>
  );
}
