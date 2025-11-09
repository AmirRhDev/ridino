"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { CarForm } from "@/components/features/car-form/car-form";
import { CarFormValues } from "@/schemas/carFormSchema";
import { CarType } from "@/types/car";
import { useAuth } from "@/components/providers/auth-provider";
import { parseToFormData, parseToModel } from "@/lib/utils";
import { deleteCar, updateCar } from "@/services/car.service";

type Props = {
  initialData: CarType & { id: string; car_images: string[] };
};

function EditCarForm({ initialData }: Props) {
  console.log("initialData", initialData);
  const router = useRouter();
  const { user } = useAuth();
  const [pending, startTransition] = useTransition();
  const [deletePending, setDeletePending] = useState(false);

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

        const newFiles = data.images.filter((i) => i.file) as { file: File }[];
        const existingUrls = data.images.filter((i) => i.url).map((i) => i.url);

        await updateCar(
          formData.id,
          model,
          newFiles,
          existingUrls,
          initialData.car_images,
        );

        toast.success("خودرو با موفقیت ویرایش شد");
        router.push(`/cars/${formData.id}`);
      } catch (error) {
        console.error(error);
        toast.error("خطا در ویرایش خودرو");
      }
    });
  };

  const onDelete = async () => {
    try {
      setDeletePending(true);

      await deleteCar(formData.id, initialData.car_images);

      toast.success("خودرو با موفقیت حذف شد");
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("خطا در حذف خودرو");
    } finally {
      setDeletePending(false);
    }
  };

  return (
    <CarForm
      isEditing
      onSubmit={onSubmit}
      pending={pending}
      defaultValues={formData}
      onDelete={onDelete}
      deletePending={deletePending}
    />
  );
}

export default EditCarForm;
