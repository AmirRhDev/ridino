import { supabase } from "@/lib/supabaseClient";

export async function uploadImages(
  carId: string,
  files: readonly File[],
): Promise<void> {
  for (const file of files) {
    await supabase.storage
      .from("cars-images")
      .upload(`${carId}/${crypto.randomUUID()}-${file.name}`, file);
  }
}
