import ProductList from "../product-list/product-list";
import { supabase } from "@/lib/supabaseClient";

export const AllProduct = async () => {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) throw new Error(error.message);

  return <ProductList items={data} />;
};
