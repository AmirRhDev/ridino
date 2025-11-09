import { supabase } from "@/lib/supabaseClient";
import { repoUpdateProfile } from "@/repositories/profile.repository";

export async function updateProfile(userId: string, data: any) {
  let avatarUrl = data.avatar_url;

  if (data.avatar?.length && data.avatar[0].file) {
    const file = data.avatar[0].file;
    const { data: uploadData, error } = await supabase.storage
      .from("avatars")
      .upload(`${userId}/avatar-${file.name}`, file, { upsert: true });

    if (error) throw error;

    avatarUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${uploadData.path}`;
  }

  const { error } = await repoUpdateProfile(userId, {
    first_name: data.firstName,
    last_name: data.lastName,
    avatar_url: avatarUrl,
  });

  if (error) throw error;
}
