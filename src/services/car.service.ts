import { supabase } from "@/lib/supabaseClient";
import { validate as isUuid } from "uuid";

export async function getCarById(id: string) {
  if (!isUuid(id)) {
    throw new Error(`Invalid car ID: ${id}`);
  }

  const { data: car, error: carError } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (carError) throw new Error(carError.message);

  const { data: images, error: imageError } = await supabase
    .from("car_images")
    .select("url")
    .eq("car_id", id);

  if (imageError) throw new Error(imageError.message);

  return {
    ...car,
    car_images: images?.map((img) => img.url) ?? [],
  };
}
