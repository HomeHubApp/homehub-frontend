import SideBar from "./SideBar";

export default function ScheduleLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="ml-64 p-8">
        {children}
      </main>

    </div>
  );
}