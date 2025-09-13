"use client";

import { ProfileForm } from "@/components/features/profile-form/profile-form";
import { useAuth } from "@/components/providers/auth-provider";
import { useProfile } from "@/hooks/use-profile";
import { supabase } from "@/lib/supabaseClient";
import { ProfileFormValues } from "@/schemas/profileFormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function Profile() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { data: profile, isLoading, isError } = useProfile();

  const { mutate: updateProfile, isPending: isUpdating } = useMutation({
    mutationFn: async (data: ProfileFormValues) => {
      if (!user) throw new Error("Not logged in");

      let avatarUrl = profile?.avatar_url || null;

      if (data.avatar?.length && data.avatar[0].file) {
        const file = data.avatar[0].file;

        const { data: storageData, error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(`${user.id}/avatar-${file.name}`, file, { upsert: true });

        if (uploadError) throw uploadError;

        avatarUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${storageData.path}`;
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          first_name: data.firstName,
          last_name: data.lastName,
          avatar_url: avatarUrl,
        })
        .eq("id", user.id);

      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (isError) return <p>خطا در دریافت پروفایل</p>;

  return (
    <ProfileForm
      onSubmit={(data) => updateProfile(data)}
      defaultValues={{
        firstName: profile?.first_name ?? "",
        lastName: profile?.last_name ?? "",
        avatar: profile?.avatar_url ? [{ url: profile.avatar_url }] : [],
      }}
      pending={isUpdating}
    />
  );
}

export default Profile;
