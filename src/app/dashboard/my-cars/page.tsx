"use client";

import ProductList from "@/components/features/product-list/product-list";
import ProductLoader from "@/components/features/product-list/product-loader";
import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/shadcnUi/button";
import { useUserCars } from "@/hooks/useCars";
import Link from "next/link";

function MyCars() {
  const { user } = useAuth();

  const { data, isLoading, error } = useUserCars(user?.id);

  if (isLoading) return <ProductLoader />;
  if (error) return <p>خطا در دریافت اطلاعات</p>; //TODO: handle error

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-foreground font-semibold text-xl">آگهی ها شما</h2>

        <Button asChild className="mb-4">
          <Link href="/new">افزودن خودرو</Link>
        </Button>
      </div>

      <ProductList
        items={data ?? []}
        className="sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      />
    </>
  );
}

export default MyCars;
