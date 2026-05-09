import type { ReactNode } from "react";

type ScheduleLayoutProps = {
  children: ReactNode;
};

export default function ScheduleLayout({ children }: ScheduleLayoutProps) {
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
