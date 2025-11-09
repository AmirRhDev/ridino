"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { v4 } from "uuid";

import { supabase } from "@/lib/supabaseClient";
import { parseToModel } from "@/lib/utils";
import { CarFormValues } from "@/schemas/carFormSchema";
import { addCar } from "@/services/car.service";
import { CarType } from "@/types/car";

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

export const useCarById = (id: string) => {
  return useQuery<CarType, Error>({
    queryKey: ["car", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("cars")
        .select("*")
        .eq("id", id)
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

export function useAddCar(userId?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CarFormValues) => {
      const carId = v4();
      const model = parseToModel({ ...data, id: carId, user_id: userId! });
      return await addCar(model, data.images);
    },
    onSuccess: (car) => {
      toast.success("عملیات با موفقیت انجام شد ✅");

      queryClient.invalidateQueries({ queryKey: ["cars"] });
      queryClient.invalidateQueries({ queryKey: ["my-cars", userId] });

      return car;
    },
    onError: () => {
      toast.error("خطایی رخ داده است، لطفا دوباره تلاش کنید ❌");
    },
  });
}
