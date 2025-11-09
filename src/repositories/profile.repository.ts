import { supabase } from "@/lib/supabaseClient";

export const repoGetProfile = async (userId: string) => {
  return supabase.from("profiles").select("*").eq("id", userId).single();
};

export const repoUpdateProfile = async (
  userId: string,
  data: {
    first_name: string;
    last_name: string;
    avatar_url: string | null;
  },
) => {
  return supabase.from("profiles").update(data).eq("id", userId);
};
