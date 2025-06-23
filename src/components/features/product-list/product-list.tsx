import ProductCard from "./product-card";
import SearchField from "@/components/common/search-field";
import { ProductsSortFilter } from "./product-sort-filter";
import { Switch } from "@/components/shadcnUi/switch";
import { Label } from "@/components/shadcnUi/label";
import CategoryList from "./category-list";

function ProductList() {
  return (
    <div>
      <div className="flex flex-col gap-3 border-b border-foreground/30 pb-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center gap-3">
          <SearchField />

          <ProductsSortFilter />

          {/* TODO: fix dark mode */}
          <Label
            dir="ltr"
            className="flex items-center justify-center gap-2 cursor-pointer border border-border bg-input py-2 px-2.5 rounded-md w-full sm:w-auto sm:grow md:grow-0"
          >
            <Switch />
            <span className="text-foreground">فقط قیمت مشخص</span>
          </Label>
        </div>

        <CategoryList />
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </div>
  );
}

export default ProductList;
