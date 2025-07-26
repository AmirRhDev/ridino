"use client";

import SwitchField from "@/components/common/switch-field";
import { useRouter, useSearchParams } from "next/navigation";

function ProductStaticFilter({ defaultValue }: { defaultValue?: boolean }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleToggle = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (defaultValue) {
      params.delete("fixed");
    } else {
      params.set("fixed", "true");
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <SwitchField
        label="فقط قیمت مشخص"
        onClick={handleToggle}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default ProductStaticFilter;
