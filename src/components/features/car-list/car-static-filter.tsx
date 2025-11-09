"use client";

import SwitchField from "@/components/common/switch-field";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

function CarStaticFilter({ defaultValue }: { defaultValue?: boolean }) {
  const { setParam } = useUpdateSearchParams();

  const handleToggle = () => {
    setParam("fixed", defaultValue ? null : "true");
  };

  return (
    <SwitchField
      label="فقط قیمت مشخص"
      onClick={handleToggle}
      defaultValue={defaultValue}
    />
  );
}

export default CarStaticFilter;
