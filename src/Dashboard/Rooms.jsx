import RoomsCard from "./DashboardComponents/RoomsCard";
import TopHeader from "./DashboardComponents/TopHeader";

export default function Rooms() {
  return (
    <>
      <TopHeader
        title="Rooms Overview"
        subtitle="Manage and monitor your smart home rooms"
      />
      <RoomsCard />
    </>
  );
}
