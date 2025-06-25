import SearchField from "@/components/common/search-field";
import SwitchField from "@/components/common/switch-field";
import CategoryList from "@/components/features/product-list/category-list";
import ProductList from "@/components/features/product-list/product-list";
import { ProductsSortFilter } from "@/components/features/product-list/product-sort-filter";

function page() {
  return (
    <>
      <div className="w-full flex flex-col gap-3 border-b border-foreground/30 pb-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center gap-3">
          <SearchField />

          <ProductsSortFilter />

          <SwitchField />
        </div>

        <CategoryList />
      </div>

      <ProductList />
    </>
  );
}

export default page;
