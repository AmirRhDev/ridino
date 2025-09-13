"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { CarForm } from "@/components/features/car-form/car-form";
import { CarFormValues } from "@/schemas/carFormSchema";
import { CarType } from "@/types/product";
import { useAuth } from "@/components/providers/auth-provider";
import { supabase } from "@/lib/supabaseClient";
import { parseToFormData, parseToModel } from "@/lib/utils";

type Props = {
  initialData: CarType & { id: string; car_images: string[] };
};

function EditCarForm({ initialData }: Props) {
  const router = useRouter();
  const { user } = useAuth();
  const [pending, startTransition] = useTransition();

  const formData = {
    ...parseToFormData(initialData),
    images: initialData.car_images.map((u) => ({ url: u })),
  };

  const onSubmit = async (data: CarFormValues) => {
    startTransition(async () => {
      try {
        const model = parseToModel({
          ...data,
          id: formData.id,
          user_id: user?.id!,
        });
        await supabase.from("cars").update(model).eq("id", formData.id);

        const newFiles = data.images.filter((i) => i.file) as { file: File }[];
        const existingUrls = data.images.filter((i) => i.url).map((i) => i.url);

        const removed = initialData.car_images.filter(
          (url) => !existingUrls.includes(url),
        );
        for (const url of removed) {
          const path = url.split("/storage/v1/object/public/cars-images/")[1];
          await supabase.storage.from("cars-images").remove([path]);
          await supabase.from("car_images").delete().eq("url", url);
        }

        for (const { file } of newFiles) {
          const { data: uploadData, error } = await supabase.storage
            .from("cars-images")
            .upload(`${formData.id}/${crypto.randomUUID()}-${file.name}`, file);

          if (error) throw error;

          const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cars-images/${uploadData.path}`;
          await supabase.from("car_images").insert({
            car_id: formData.id,
            url: imageUrl,
          });
        }

        toast.success("خودرو با موفقیت ویرایش شد");
        router.push(`/cars/${formData.id}`);
      } catch (err) {
        console.error(err);
        toast.error("خطا در ویرایش خودرو");
      }
    });
  };

  return (
    <CarForm
      isEditing
      onSubmit={onSubmit}
      pending={pending}
      defaultValues={formData}
    />
  );
}

export default EditCarForm;
