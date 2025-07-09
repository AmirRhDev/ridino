import { supabase } from "@/lib/supabaseClient";

export async function supabaseSignUp(email: string, password: string) {
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) throw error;
}
