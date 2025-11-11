import { supabase } from "@/lib/supabaseClient";

export async function repoCreateProfile(
  userId: string,
  first: string,
  last: string,
) {
  return supabase.from("profiles").insert({
    id: userId,
    first_name: first,
    last_name: last,
  });
}

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
