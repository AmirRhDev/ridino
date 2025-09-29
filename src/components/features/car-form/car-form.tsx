"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, Pen, Plus } from "lucide-react";

import { carFormSchema, CarFormValues } from "@/schemas/carFormSchema";

import { Button } from "@/components/shadcnUi/button";
import TextField from "@/components/common/text-field";
import TextAreaField from "@/components/common/text-area-field";
import SelectController from "@/components/common/select-controller";
import PriceController from "@/components/common/price-controller";
import KilometersController from "@/components/common/kilometers-controller";
import BodyStatusController from "@/components/common/body-status-controller";
import MultipleImageField from "@/components/common/multiple-image-field";

import {
  DIFFERENTIAL,
  GASTYPE,
  GEARBOX,
  PROVINCES,
  YEARS,
} from "@/constants/forms";
import ProductDelete from "./product-delete";

type Props = {
  onSubmit: SubmitHandler<CarFormValues>;
  defaultValues?: Partial<CarFormValues>;
  isEditing?: boolean;
  pending?: boolean;
  onDelete?: () => Promise<void>;
  deletePending?: boolean;
};

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

  console.log("errors", errors);

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="grid sm:grid-cols-2 gap-5"
    >
      <Controller
        name="images"
        control={control}
        render={({ field, fieldState }) => (
          <div className="sm:col-span-2">
            <MultipleImageField
              value={field.value}
              onChange={field.onChange}
              maxFiles={5}
              maxFileSizeMB={10}
            />
            {fieldState.error && (
              <p className="text-sm text-destructive mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      <TextField
        label="نام خودرو"
        error={errors.title?.message}
        {...register("title")}
      />

      <PriceController
        watch={watch}
        control={control}
        setValue={setValue}
        error={errors.price?.message}
      />

      <TextField
        label="شماره تماس"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <div className="space-y-2">
        <SelectController
          name="location"
          control={control}
          data={PROVINCES}
          label="مکان آگهی"
          error={errors.location?.message}
        />
      </div>

      <div className="space-y-2">
        <SelectController
          name="year"
          control={control}
          data={YEARS}
          label="سال ساخت"
          error={errors.year?.message}
        />
      </div>

      <KilometersController
        watch={watch}
        control={control}
        setValue={setValue}
        error={errors.kilometers?.message}
      />

      <div className="space-y-2">
        <SelectController
          name="gearbox"
          control={control}
          data={GEARBOX}
          label="گیربکس"
          error={errors.gearbox?.message}
        />
      </div>

      <div className="space-y-2">
        <SelectController
          name="gasType"
          control={control}
          data={GASTYPE}
          label="نوع سوخت"
          error={errors.gasType?.message}
        />
      </div>

      <BodyStatusController
        watch={watch}
        control={control}
        setValue={setValue}
        error={errors.bodyStatus?.message}
      />

      <TextField
        label="رنگ بدنه"
        error={errors.color?.message}
        {...register("color")}
      />

      <TextField
        label="رنگ داخلی"
        error={errors.insideColor?.message}
        {...register("insideColor")}
      />

      <TextField
        label="حجم موتور (لیتر)"
        error={errors.motor?.message}
        {...register("motor")}
      />

      <TextField
        label="شتاب (ثانیه)"
        error={errors.acceleration?.message}
        {...register("acceleration")}
      />

      <TextField
        label="قدرت (اسب بخار)"
        error={errors.power?.message}
        {...register("power")}
      />

      <TextField
        label="مصرف سوخت (لیتر در صد کیلومتر)"
        error={errors.fuelConsumption?.message}
        {...register("fuelConsumption")}
      />

      <div className="space-y-2">
        <SelectController
          name="differential"
          control={control}
          data={DIFFERENTIAL}
          label="دیفرانسیل"
          error={errors.differential?.message}
        />
      </div>

      <div className="sm:col-span-2">
        <TextAreaField
          label="توضیحات"
          error={errors.description?.message}
          {...register("description")}
        />
      </div>

      {/* <div className="sm:col-span-2 flex flex-row-reverse gap-2">
        <Button type="submit" className="w-full sm:w-auto">
          {isEditing ? "ویرایش خودرو" : "ثبت خودرو"}
        </Button>
      </div> */}
      <div className="sm:col-span-2 flex flex-row-reverse gap-2">
        <Button disabled={pending} type="submit" className="w-full sm:w-auto">
          {pending && <LoaderCircle className="size-5 animate-spin " />}
          {!pending && (isEditing ? <Pen /> : <Plus />)}
          {isEditing ? "ویرایش خودرو" : "ثبت خودرو"}
        </Button>

        {isEditing && onDelete && (
          <ProductDelete onDelete={onDelete} deletePending={deletePending} />
        )}
      </div>
    </form>
  );
}
