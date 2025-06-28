import { ProductType } from "@/types/product";
import ProductCard from "./product-card";

interface ProductListProps {
  items?: ProductType[];
}

function ProductList({ items }: ProductListProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items?.map((item) => <ProductCard key={item.id} {...item} />)}
    </div>
  );
}

export default ProductList;
