import { FilterStateType } from "@/types/product";
import ProductList from "../product-list/product-list";
import { supabase } from "@/lib/supabaseClient";

export const AllProduct = async ({
  searchedTitle,
  hasFixedPrice,
  sort = "newest",
}: FilterStateType) => {
  let query = supabase.from("cars").select("*");

  if (searchedTitle) {
    query = query.ilike("title", `%${searchedTitle}%`);
  }

  if (hasFixedPrice) {
    query = query.gt("price", 0);
  }

  query = query.order("created_at", { ascending: sort === "oldest" });

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return <ProductList items={data} />;
};
