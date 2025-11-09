"use client";

import CarList from "@/components/features/car-list/car-list";
import CarLoader from "@/components/features/car-list/car-loader";
import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/shadcnUi/button";
import { useUserCars } from "@/hooks/useCars";
import Link from "next/link";

function MyCars() {
  const { user } = useAuth();

  const { data, isLoading, error } = useUserCars(user?.id);

  if (isLoading) return <CarLoader />;
  if (error) return <p>خطا در دریافت اطلاعات</p>; //TODO: handle error

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-foreground font-semibold text-xl">آگهی ها شما</h2>

        <Button asChild className="mb-4">
          <Link href="/new">افزودن خودرو</Link>
        </Button>
      </div>

      <CarList
        items={data ?? []}
        className="sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      />
    </>
  );
}

export default MyCars;
