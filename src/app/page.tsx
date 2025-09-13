import SearchField from "@/components/common/search-field";
import Hero from "@/components/features/hero";
import { AllProduct } from "@/components/features/product-list-container";
import ProductLoader from "@/components/features/product-list/product-loader";
import { ProductsSortFilter } from "@/components/features/product-list/product-sort-filter";
import ProductStaticFilter from "@/components/features/product-list/product-static-filter";
import { SortFilterType } from "@/types/product";
import { Suspense } from "react";

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

      <div className="relative z-10">
        <div className="w-full flex flex-col gap-3 border-b border-border pb-4 mb-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center gap-3">
            <SearchField defaultValue={title} />

            <ProductsSortFilter defaultValue={sort} />

            <ProductStaticFilter defaultValue={hasFixedPrice} />
          </div>

          {/* <CategoryList /> */}
        </div>

        <Suspense
          fallback={
            <ProductLoader className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" />
          }
        >
          <AllProduct
            searchedTitle={title}
            sort={sort}
            hasFixedPrice={hasFixedPrice}
          />
        </Suspense>
      </div>
    </>
  );
}
