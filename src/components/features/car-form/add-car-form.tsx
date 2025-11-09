"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { DEFAULT_VALUES } from "@/constants/forms";
import { CarForm } from "./car-form";
import { useAddCar } from "@/hooks/useCars";
import { useRouter } from "next/navigation";

export default function AddCarForm() {
  const { user } = useAuth();
  const router = useRouter();
  const { mutate, isPending } = useAddCar(user?.id);

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: (car) => {
        router.push(`/cars/${car.id}`);
      },
    });
  };

  return (
    <CarForm
      onSubmit={onSubmit}
      pending={isPending}
      defaultValues={DEFAULT_VALUES}
    />
  );
}
