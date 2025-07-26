import SearchField from "@/components/common/search-field";
import Hero from "@/components/features/hero";
import { AllProduct } from "@/components/features/product-list-container";
import CategoryList from "@/components/features/product-list/category-list";
import { ProductsSortFilter } from "@/components/features/product-list/product-sort-filter";
import ProductStaticFilter from "@/components/features/product-list/product-static-filter";
import { SortFilterType } from "@/types/product";

interface HomeProps {
  searchParams: Promise<{ title?: string; sort?: string; fixed?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const title = params.title || "";
  const sort = (params.sort as SortFilterType) || "newest";
  const hasFixedPrice = params.fixed === "true";

  return (
    <>
      <Hero />

      <div className="w-full flex flex-col gap-3 border-b border-foreground/30 pb-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center gap-3">
          <SearchField defaultValue={title} />

          <ProductsSortFilter defaultValue={sort} />

          <ProductStaticFilter defaultValue={hasFixedPrice} />
        </div>

        <CategoryList />
      </div>

      <AllProduct
        searchedTitle={title}
        sort={sort}
        hasFixedPrice={hasFixedPrice}
      />
    </>
  );
}
