"use client";

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
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export function ProductsSortFilter({
  defaultValue,
}: {
  defaultValue?: SortFilterType;
}) {
  const { setParam } = useUpdateSearchParams();

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
          onCheckedChange={() => setParam("sort", "newest")}
        >
          جدیدترین
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={defaultValue === "oldest"}
          onCheckedChange={() => setParam("sort", "oldest")}
        >
          قدیمی‌ترین
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
