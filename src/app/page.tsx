import SearchField from "@/components/common/search-field";
import Hero from "@/components/features/hero";
import AllCars from "@/components/features/car-list-container";
import CarLoader from "@/components/features/car-list/car-loader";
import CarSortFilter from "@/components/features/car-list/car-sort-filter";
import CarStaticFilter from "@/components/features/car-list/car-static-filter";
import { SortFilterType } from "@/types/car";
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

            <CarSortFilter defaultValue={sort} />

            <CarStaticFilter defaultValue={hasFixedPrice} />
          </div>
        </div>

        <Suspense
          key={`${title}-${sort}-${hasFixedPrice}`}
          fallback={
            <CarLoader className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" />
          }
        >
          <AllCars
            searchedTitle={title}
            sort={sort}
            hasFixedPrice={hasFixedPrice}
          />
        </Suspense>
      </div>
    </>
  );
}
