"use client";

import Image from "next/image";
import { useProfile } from "@/hooks/use-profile";

function UserDetails() {
  const { data: profile, isLoading, isError } = useProfile();

  const fallbackAvatar = "/user.png";
  const avatarUrl = profile?.avatar_url ?? fallbackAvatar;

  return (
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
  );
}

export default UserDetails;
