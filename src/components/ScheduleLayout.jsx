import SideBar from "./SideBar";

export default function ScheduleLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Sidebar */}
    

      {/* Main Content */}
      <main className="">
        {children}
      </main>

    </div>
  );
}