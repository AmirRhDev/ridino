import { ReactNode } from "react";
import DashboardSidebar from "./dashboard-sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:border border-border m-auto max-w-6/7 rounded-md">
      <DashboardSidebar />

      <main className="flex-1 p-6 border border-border lg:border-0 rounded-md">
        {children}
      </main>
    </div>
  );
}
