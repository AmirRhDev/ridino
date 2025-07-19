"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/shadcnUi/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcnUi/dropdown-menu";
import { SortFilterType } from "@/types/product";

export function ProductsSortFilter({
  defaultValue,
}: {
  defaultValue?: SortFilterType;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSortChange = (sort: SortFilterType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sort);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="!border-border !bg-input w-full sm:w-1/2 md:w-auto"
        >
          {defaultValue === "newest" ? "جدیدترین" : "قدیمی‌ترین"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={defaultValue === "newest"}
          onCheckedChange={() => handleSortChange("newest")}
        >
          جدیدترین
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={defaultValue === "oldest"}
          onCheckedChange={() => handleSortChange("oldest")}
        >
          قدیمی‌ترین
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
