"use client";

import { useState, useTransition } from "react";
import { SubmitHandler } from "react-hook-form";
import { v4 } from "uuid";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabaseClient";
import { parseToModel } from "@/lib/utils";

import { CarFormValues } from "@/schemas/carFormSchema";
import { useAuth } from "@/components/providers/auth-provider";
import { DEFAULT_VALUES } from "@/constants/forms";
import { CarForm } from "./car-form";

function AddCarForm() {
  const { user } = useAuth();

  const [carId] = useState(() => v4());

  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<CarFormValues> = async (data) => {
    const model = parseToModel({ ...data, id: carId, user_id: user?.id! });

    startTransition(async () => {
      try {
        const { data: car, error } = await supabase
          .from("cars")
          .insert([model])
          .select()
          .single();

        if (error) throw error;

        for (const { file } of data.images) {
          const { data: storageData, error: uploadError } =
            await supabase.storage
              .from("cars-images")
              .upload(`${carId}/${crypto.randomUUID()}-${file.name}`, file);

          if (uploadError) throw uploadError;

          const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cars-images/${storageData.path}`;

          const { error: dbError } = await supabase.from("car_images").insert({
            car_id: car.id,
            url: imageUrl,
          });

          if (dbError) throw dbError;
        }

        toast.success("عملیات با موفقیت انجام شد");

        router.push(`/cars/${car.id}`);
      } catch {
        //TODO: use err here
        toast.error("خطایی رخ داده است، لطفا دوباره تلاش کنید");
      }
    });
  };
  return (
    <CarForm
      onSubmit={onSubmit}
      pending={pending}
      defaultValues={DEFAULT_VALUES}
    />
  );
}

export default AddCarForm;
