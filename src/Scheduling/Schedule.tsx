import { useState } from "react";
import TopHeader from "../Dashboard/DashboardComponents/TopHeader";
import ScheduleCard from "./ScheduleComponents/ScheduleCard";
import AddScheduleModal from "./ScheduleComponents/AddScheduleModal";

export default function Schedule() {

  const [showModal, setShowModal] = useState(false);

  const schedules = [
    {
      id: 1,
      time: "05:00",
      period: "AM",
      action: "Turn on",
      device: "Kitchen Light • Kitchen",
      repeat: "Daily",
      active: true
    },
    {
      id: 2,
      time: "11:00",
      period: "PM",
      action: "Turn off",
      device: "Kitchen Light • Kitchen",
      repeat: "Daily",
      active: true
    },
    {
      id: 3,
      time: "02:30",
      period: "PM",
      action: "Increase speed",
      device: "Living Room Fan • Living Room",
      repeat: "Weekdays",
      active: true
    },
    {
      id: 4,
      time: "07:00",
      period: "AM",
      action: "Turn on",
      device: "Bedroom AC • Master",
      repeat: "Mon Tue Wed",
      active: false
    }
  ];

  return (
    <>

      <TopHeader
        title="Schedule"
        subtitle="Automate your devices."
      />

      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-gray-900 transition-colors hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-200 dark:bg-[#FEC60E] dark:text-gray-900 dark:hover:bg-[#E5B30C] dark:focus:ring-yellow-900"
        >
          + Add new schedule
        </button>
      </div>

      <div className="space-y-4">
        {schedules.map((schedule) => (
          <ScheduleCard key={schedule.id} schedule={schedule} />
        ))}
      </div>

      {showModal && (
        <AddScheduleModal close={() => setShowModal(false)} />
      )}
</>
  );
}
