import { useState } from "react";
import ScheduleLayout from "../components/ScheduleLayout";
import TopHeader from "./ScheduleComponents/TopHeader";
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
    <ScheduleLayout>

      <TopHeader
        Title="Schedule"
        Subtitle="Automate your devices."
      />

      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg font-semibold"
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

    </ScheduleLayout>
  );
}