"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { useProfile } from "@/hooks/use-profile";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { data: profile, isLoading, isError } = useProfile();

  const pathname = usePathname();

  const fallbackAvatar = "/user.png";

  const avatarUrl = profile?.avatar_url ?? fallbackAvatar;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:border border-border m-auto max-w-6/7 rounded-md">
      <aside className="lg:w-64 p-2 lg:p-4 lg:border-l border-border">
        <div className="flex items-center gap-1.5 lg:border-b border-border pb-4">
          <Image
            src={avatarUrl}
            alt="profile-thumbnail"
            width={36}
            height={36}
            className="size-9 rounded-full shrink-0 object-cover border border-slate-300"
          />
          <h2 className="text-foreground font-semibold">
            {isLoading && "در حال بارگذاری..."}
            {isError && "کاربر نامشخص"}
            {profile && `${profile.first_name} ${profile.last_name}`}
          </h2>
        </div>

        <nav className="flex overflow-x-scroll lg:overflow-x-hidden lg:flex-col gap-2 pt-4">
          <Link
            href="/dashboard/my-cars"
            className={cn(
              "text-foreground font-semibold text-lg hover:bg-secondary p-2 rounded-md shrink-0",
              { "bg-secondary": pathname === "/dashboard/my-cars" },
            )}
          >
            آگهی های من
          </Link>
          <Link
            href="/dashboard/saved"
            className={cn(
              "text-foreground font-semibold text-lg hover:bg-secondary p-2 rounded-md shrink-0",
              { "bg-secondary": pathname === "/dashboard/saved" },
            )}
          >
            ذخیره ها
          </Link>
          <Link
            href="/dashboard/profile"
            className={cn(
              "text-foreground font-semibold text-lg hover:bg-secondary p-2 rounded-md shrink-0",
              { "bg-secondary": pathname === "/dashboard/profile" },
            )}
          >
            پروفایل
          </Link>
          <Link
            href="/dashboard/setting"
            className={cn(
              "text-foreground font-semibold text-lg hover:bg-secondary p-2 rounded-md shrink-0",
              { "bg-secondary": pathname === "/dashboard/setting" },
            )}
          >
            تنظیمات
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 border border-border lg:border-0 rounded-md">
        {children}
      </main>
    </div>
  );
}
