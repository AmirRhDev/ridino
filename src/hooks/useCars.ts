"use client";

import { supabase } from "@/lib/supabaseClient";
import { CarType } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

export const useCars = () => {
  return useQuery<CarType[], Error>({
    queryKey: ["cars"],
    queryFn: async () => {
      const { data, error } = await supabase.from("cars").select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  });
};

export const useCarById = (slug: number) => {
  return useQuery<CarType, Error>({
    queryKey: ["car", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .eq("id", slug)
        .single();

      if (error) throw new Error(error.message);

      return data;
    },
  });
};

export function useUserCars(userId?: string) {
  return useQuery({
    queryKey: ["my-cars", userId],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase
        .from("cars")
        .select("*, car_images(url)")
        .eq("user_id", userId);

      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!userId,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });
}

export function useSavedCars(userId?: string) {
  return useQuery({
    queryKey: ["saved-cars", userId],
    queryFn: async () => {
      if (!userId) return [];

      const { data, error } = await supabase
        .from("saved_cars")
        .select("cars(*, car_images(url))")
        .eq("user_id", userId);

      if (error) throw new Error(error.message);

      return data.flatMap((item) => item.cars);
    },
    enabled: !!userId,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });
}
