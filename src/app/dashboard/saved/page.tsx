"use client";

import ProductList from "@/components/features/product-list/product-list";
import ProductLoader from "@/components/features/product-list/product-loader";
import { useAuth } from "@/components/providers/auth-provider";
import { useSavedCars } from "@/hooks/useCars";

function Saved() {
  const { user } = useAuth();
  const { data, isLoading, error } = useSavedCars(user?.id);

  if (isLoading) return <ProductLoader />;
  if (error) return <p>خطا در دریافت اطلاعات</p>; //TODO: handle error

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-foreground font-semibold text-xl">
          خودروهای ذخیره‌شده
        </h2>
      </div>

      <ProductList
        items={data ?? []}
        className="sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      />
    </>
  );
}

export default Saved;
