import { FilterStateType } from "@/types/car";
import CarList from "@/components/features/car-list/car-list";
import { supabase } from "@/lib/supabaseClient";

async function AllCars({
  searchedTitle,
  hasFixedPrice,
  sort = "newest",
}: FilterStateType) {
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

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return <CarList items={data} />;
}

export default AllCars;
