import { CarType } from "@/types/product";
import ProductCard from "./product-card";
import { cn } from "@/lib/utils";

interface ProductListProps {
  items?: CarType[];
  className?: string;
}

function ProductList({ items, className }: ProductListProps) {
  return (
    <div
      className={cn(
        "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
        className,
      )}
    >
      {items?.map((item) => <ProductCard key={item.id} {...item} />)}
    </div>
  );
}

export default ProductList;
