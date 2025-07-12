import { supabase } from "@/lib/supabaseClient";

export async function supabaseSignUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw error;

  return data;
}

export async function supabaseSignIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw error;
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut({ scope: "local" });

  if (error) throw error;
}

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser();

  return data.user;
}
