"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useUpdateSearchParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setParam = (key: string, value?: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === null || value === undefined || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return { setParam, searchParams };
}
