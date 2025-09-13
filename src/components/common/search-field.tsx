"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Search } from "lucide-react";
import { Input } from "@/components/shadcnUi/input";

function SearchField({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(defaultValue);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("title", value);
    } else {
      params.delete("title");
    }
    router.replace(`/?${params.toString()}`);
  };

  return (
    <div className="relative flex items-center md:w-64 w-full">
      <Search className="absolute right-4 size-4 text-foreground/65" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full pr-11"
        type="text"
        placeholder="جستجو نام خودرو، مثال: ساندرو"
      />
    </div>
  );
}

export default SearchField;
