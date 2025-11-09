import { supabase } from "@/lib/supabaseClient";

export async function repoGetCarById(id: string) {
  return supabase
    .from("cars")
    .select("*, car_images(url)")
    .eq("id", id)
    .single();
}

export async function repoCreateCar(model: any) {
  return supabase.from("cars").insert([model]).select().single();
}

export async function repoUpdateCar(carId: string, model: any) {
  return supabase.from("cars").update(model).eq("id", carId);
}

export async function repoDeleteCar(carId: string) {
  return supabase.from("cars").delete().eq("id", carId);
}

export async function repoAddImages(rows: { car_id: string; url: string }[]) {
  return supabase.from("car_images").insert(rows);
}

export async function repoRemoveImage(url: string) {
  return supabase.from("car_images").delete().eq("url", url);
}

export async function repoUploadImage(filePath: string, file: File) {
  return supabase.storage.from("cars-images").upload(filePath, file);
}

export async function repoRemoveImageFromBucket(path: string) {
  return supabase.storage.from("cars-images").remove([path]);
}
