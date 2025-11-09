"use client";

import { ProfileForm } from "@/components/features/profile-form/profile-form";
import ProfileFormLoader from "@/components/features/profile-form/profile-form-loader";
import { useAuth } from "@/components/providers/auth-provider";
import { useProfile } from "@/hooks/use-profile";
import { ProfileFormValues } from "@/schemas/profileFormSchema";
import { updateProfile } from "@/services/profile.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function Profile() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { data: profile, isLoading, isError } = useProfile();

  const { mutate: submit, isPending } = useMutation<
    void,
    Error,
    ProfileFormValues
  >({
    mutationFn: (data) => updateProfile(user!.id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });

  if (isLoading) return <ProfileFormLoader />;
  if (isError) return <p>خطا در دریافت پروفایل</p>; //TODO: handle error

  return (
    <ProfileForm
      onSubmit={(data) => submit(data)}
      pending={isPending}
      defaultValues={{
        firstName: profile?.first_name ?? "",
        lastName: profile?.last_name ?? "",
        avatar: profile?.avatar_url ? [{ url: profile.avatar_url }] : [],
      }}
    />
  );
}

export default Profile;
