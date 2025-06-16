"use client";

import * as React from "react";

import { Button } from "@/components/shadcnUi/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcnUi/dropdown-menu";

type FilterType = "default" | "newwest" | "mostView";

export function ProductsSortFilter() {
  const [selectedOption, setSelectedOption] =
    React.useState<FilterType>("default");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selectedOption === "default"
            ? "ترتیب"
            : selectedOption === "newwest"
              ? "جدیدترین"
              : "پر بازدید ترین"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>فیلتر بر اساس</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedOption === "default"}
          onCheckedChange={() => setSelectedOption("default")}
        >
          هیچکدام
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={selectedOption === "newwest"}
          onCheckedChange={() => setSelectedOption("newwest")}
        >
          جدید ترین
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={selectedOption === "mostView"}
          onCheckedChange={() => setSelectedOption("mostView")}
        >
          پر بازدید ترین
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
