"use client";

import DashboardNavlink from "./dashboard-navlink";
import UserDetails from "./user-details";

function DashboardSidebar() {
  return (
    <aside className="lg:w-64 p-2 lg:p-4 lg:border-l border-border">
      <UserDetails />

      <nav className="flex overflow-x-scroll lg:overflow-x-hidden lg:flex-col gap-2 pt-4">
        <DashboardNavlink href="/dashboard/my-cars" label="آگهی های من" />
        <DashboardNavlink href="/dashboard/saved" label="ذخیره ها" />
        <DashboardNavlink href="/dashboard/profile" label="پروفایل" />
        <DashboardNavlink href="/dashboard/setting" label="تنظیمات" />
      </nav>
    </aside>
  );
}

export default DashboardSidebar;
