import RoomsCard from "./DashboardComponents/RoomsCard";
import TopHeader from "./DashboardComponents/TopHeader";

export default function Rooms() {
  return (
    <>
      <TopHeader
        Title="Rooms Overview"
        Subtitle="Manage and monitor your smart home rooms"
      />
      <RoomsCard />
    </>
  );
}