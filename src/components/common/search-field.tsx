"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/shadcnUi/input";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

function SearchField({ defaultValue = "" }: { defaultValue?: string }) {
  const [value, setValue] = useState(defaultValue);
  const { setParam } = useUpdateSearchParams();

  const handleSearch = () => setParam("title", value || null);

  return (
    <div className="relative flex items-center md:w-64 w-full">
      <Search className="absolute right-4 size-4 text-foreground/65" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="w-full pr-11"
        type="text"
        placeholder="جستجو نام خودرو، مثال: ساندرو"
      />
    </div>
  );
}

export default SearchField;
