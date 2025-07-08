"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { v4 } from "uuid";

import TextField from "@/components/common/text-field";
import { Button } from "@/components/shadcnUi/button";
import SelectField from "@/components/common/select-field";

import {
  DIFFERENTIAL,
  GASTYPE,
  GEARBOX,
  PROVINCES,
  YEARS,
} from "@/constants/forms";
import { Label } from "@/components/shadcnUi/label";
import { Checkbox } from "@/components/shadcnUi/checkbox";
import TextAreaField from "@/components/common/text-area-field";
import { parseToModel } from "@/lib/utils";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";
import { useSupabaseUpload } from "@/hooks/use-supabase-upload";
import { uploadImages } from "@/services/car.service";
import { ImageUploaderField } from "@/components/common/image-uploader-field";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { carFormSchema, CarFormValues } from "@/schemas/carFormSchema";

// TODO: required field when extra is uncheck
function AddCarForm() {
  const carId = v4();

  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    reset,
  } = useForm<CarFormValues>({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      images: [],
      title: "",
      year: "",
      notDriven: false,
      kilometers: "" as any,
      gearbox: "",
      location: "",
      negotiated: false,
      price: "" as any,
      clearBody: false,
      bodyStatus: "",
      gasType: "",
      color: "",
      insideColor: "",
      motor: "",
      acceleration: "",
      power: "",
      fuelConsumption: "",
      differential: "",
      description: "",
    },
  });

  const uploadProps = useSupabaseUpload({
    bucketName: "cars-images",
    path: (file) => `${carId}/${crypto.randomUUID()}-${file.name}`,
    allowedMimeTypes: ["image/*"],
    maxFiles: 5,
    maxFileSize: 10 * 1024 * 1024,
  });

  const onSubmit: SubmitHandler<CarFormValues> = async (data) => {
    const model = parseToModel({ ...data, id: carId });

    startTransition(async () => {
      try {
        const { data: car, error } = await supabase
          .from("cars")
          .insert([model])
          .select()
          .single();

        if (error) throw error;

        await uploadImages(carId, uploadProps.acceptedFiles);

        toast.success("عملیات با موفقیت انجام شد");

        router.push(`/car/${car.id}`);
      } catch (err) {
        console.log("unexpected happen", err);
        toast.error("خطایی رخ داده است، لطفا دوباره تلاش کنید");
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-foreground text-2xl font-bold">افزودن خودرو جدید</h1>
      <form
        onSubmit={handleSubmit(onSubmit, (error: any) =>
          console.log("error", error),
        )}
        className="grid sm:grid-cols-2 gap-5"
      >
        <ImageUploaderField
          control={control}
          name="images"
          uploadProps={uploadProps}
          className="sm:col-span-2"
        />

        <TextField
          label="نام خودرو"
          error={errors.title?.message}
          {...register("title")}
        />

        <Controller
          name="price"
          control={control}
          render={({ field }) => {
            const negotiated = watch("negotiated");
            return (
              <TextField
                label="قیمت (تومان)"
                error={errors.price?.message}
                value={negotiated ? "" : field.value}
                onChange={field.onChange}
                hasSeparator
                disabled={negotiated}
                extraOption={
                  <Controller
                    name="negotiated"
                    control={control}
                    render={({ field: negotiatedField }) => (
                      <div className="flex items-center gap-1">
                        <Label htmlFor="negotiated">قیمت توافقی</Label>
                        <Checkbox
                          checked={negotiatedField.value || false}
                          onCheckedChange={(val) => {
                            const checked = !!val;
                            negotiatedField.onChange(checked);
                            setValue("price", "" as any);
                          }}
                          id="negotiated"
                        />
                      </div>
                    )}
                  />
                }
              />
            );
          }}
        />

        <div className="space-y-2">
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <SelectField
                label="مکان آگهی"
                data={PROVINCES}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
          {errors.location && (
            <span className="font-medium text-destructive text-xs">
              {errors.location.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <SelectField
                label="سال ساخت"
                data={YEARS}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
          {errors.year && (
            <span className="font-medium text-destructive text-xs">
              {errors.year.message}
            </span>
          )}
        </div>

        <Controller
          name="kilometers"
          control={control}
          render={({ field }) => {
            const notDriven = watch("notDriven");
            return (
              <TextField
                label="کارکرد (کیلومتر)"
                error={errors.kilometers?.message}
                value={notDriven ? "" : field.value}
                onChange={field.onChange}
                hasSeparator
                disabled={notDriven}
                extraOption={
                  <Controller
                    name="notDriven"
                    control={control}
                    render={({ field: notDrivenField }) => (
                      <div className="flex items-center gap-1">
                        <Label htmlFor="notDriven">صفر کیلومتر</Label>
                        <Checkbox
                          checked={notDrivenField.value || false}
                          onCheckedChange={(val) => {
                            const checked = !!val;
                            notDrivenField.onChange(checked);
                            setValue("kilometers", "" as any);
                          }}
                          id="notDriven"
                        />
                      </div>
                    )}
                  />
                }
              />
            );
          }}
        />

        <div className="space-y-2">
          <Controller
            name="gearbox"
            control={control}
            render={({ field }) => (
              <SelectField
                label="گیربکس"
                data={GEARBOX}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
          {errors.gearbox && (
            <span className="font-medium text-destructive text-xs">
              {errors.gearbox.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <Controller
            name="gasType"
            control={control}
            render={({ field }) => (
              <SelectField
                label="نوع سوخت"
                data={GASTYPE}
                value={field.value}
                onValueChange={field.onChange}
              />
            )}
          />
          {errors.gasType && (
            <span className="font-medium text-destructive text-xs">
              {errors.gasType.message}
            </span>
          )}
        </div>

        <Controller
          name="bodyStatus"
          control={control}
          render={({ field }) => {
            const clearBody = watch("clearBody");
            return (
              <TextField
                label="وضعیت بدنه"
                error={errors.bodyStatus?.message}
                value={clearBody ? "" : (field.value ?? "")}
                onChange={field.onChange}
                disabled={clearBody}
                extraOption={
                  <Controller
                    name="clearBody"
                    control={control}
                    render={({ field: clearBodyField }) => (
                      <div className="flex items-center gap-1">
                        <Label htmlFor="clearBody">بی رنگ</Label>
                        <Checkbox
                          checked={clearBodyField.value || false}
                          onCheckedChange={(val) => {
                            const checked = !!val;
                            clearBodyField.onChange(checked);
                            setValue("bodyStatus", "");
                          }}
                          id="clearBody"
                        />
                      </div>
                    )}
                  />
                }
              />
            );
          }}
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
          <Controller
            name="differential"
            control={control}
            render={({ field }) => (
              <SelectField
                label="دیفرانسیل"
                data={DIFFERENTIAL}
                value={field.value ?? ""}
                onValueChange={field.onChange}
              />
            )}
          />
          {errors.differential && (
            <span className="font-medium text-destructive text-xs">
              {errors.differential.message}
            </span>
          )}
        </div>

        <div className="sm:col-span-2">
          <TextAreaField
            label="توضیحات"
            error={errors.description?.message}
            {...register("description")}
          />
        </div>

        <div className="sm:col-span-2 flex flex-row-reverse gap-2">
          <Button disabled={pending} type="submit" className="w-full sm:w-auto">
            {pending && <LoaderCircle className="size-5 animate-spin " />}
            ثبت خودرو
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddCarForm;
