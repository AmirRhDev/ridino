import { supabase } from "@/lib/supabaseClient";

export async function repoGetCars({
  searchedTitle,
  hasFixedPrice,
  sort,
}: {
  searchedTitle?: string;
  hasFixedPrice?: boolean;
  sort?: "newest" | "oldest";
}) {
  let query = supabase
    .from("cars")
    .select("*, car_images(url)")
    .order("created_at", { ascending: sort === "oldest" });

  if (searchedTitle) {
    query = query.ilike("title", `%${searchedTitle}%`);
  }

  if (hasFixedPrice) {
    query = query.gt("price", 0);
  }

  return query;
}

export async function repoGetCarById(id: string) {
  return supabase
    .from("cars")
    .select("*, car_images(url)")
    .eq("id", id)
    .single();
}

export async function repoGetCarImages(id: string) {
  return supabase.from("car_images").select("url").eq("car_id", id);
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

export const repoSaveCar = (userId: string, carId: string) => {
  return supabase.from("saved_cars").insert({ user_id: userId, car_id: carId });
};

export const repoUnsaveCar = (userId: string, carId: string) => {
  return supabase
    .from("saved_cars")
    .delete()
    .eq("user_id", userId)
    .eq("car_id", carId);
};

export async function repoIsCarSaved(userId: string, carId: string) {
  const { data, error } = await supabase
    .from("saved_cars")
    .select("id")
    .eq("user_id", userId)
    .eq("car_id", carId)
    .maybeSingle();

  if (error) throw error;
  return !!data;
}
