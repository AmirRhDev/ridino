import { supabase } from "@/lib/supabaseClient";
import { repoCreateProfile } from "@/repositories/profile.repository";

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

export async function signUpWithProfile(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) {
  //Create user
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  const user = data.user;
  if (!user) throw new Error("User not created");

  //Create profile
  const { error: profileError } = await repoCreateProfile(
    user.id,
    firstName,
    lastName,
  );
  if (profileError) throw profileError;

  //Auto login
  if (!data.session) {
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (loginError) throw loginError;
  }

  return true;
}
