import { supabase } from "@/lib/supabaseClient";

export const uploadImages = async (carId: string, files: readonly File[]) => {
  const uploadedUrls: string[] = [];

  for (const file of files) {
    const filePath = `${carId}/${crypto.randomUUID()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("cars-images")
      .upload(filePath, file);

    if (error) throw error;

    const publicUrl = supabase.storage
      .from("cars-images")
      .getPublicUrl(filePath).data.publicUrl;

    uploadedUrls.push(publicUrl);

    const { error: insertError } = await supabase.from("car_images").insert({
      car_id: carId,
      url: publicUrl,
    });

    if (insertError) {
      console.log("insertError", insertError);
      console.error("Failed to save image metadata:", insertError.message);
      // TODO: handle error
    }
  }

  return uploadedUrls;
};
