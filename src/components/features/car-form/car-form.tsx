"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CarFormFields from "./car-form-fields";
import CarFormActions from "./car-form-actions";

import { carFormSchema, CarFormValues } from "@/schemas/carFormSchema";
import { ActionTypes } from "@/types/form";

type Props = {
  onSubmit: SubmitHandler<CarFormValues>;
  defaultValues?: Partial<CarFormValues>;
} & ActionTypes;

export function CarForm({
  onSubmit,
  defaultValues,
  isEditing,
  pending,
  onDelete,
  deletePending,
}: Props) {
  const handleFormSubmit = (data: CarFormValues) => {
    onSubmit(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<CarFormValues>({
    resolver: zodResolver(carFormSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="grid sm:grid-cols-2 gap-5"
    >
      <CarFormFields
        control={control}
        register={register}
        errors={errors}
        watch={watch}
        setValue={setValue}
      />

      <CarFormActions
        onDelete={onDelete}
        isEditing={isEditing}
        deletePending={deletePending}
        pending={pending}
      />
    </form>
  );
}
