import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import BodyStatusController from "@/components/common/body-status-controller";
import KilometersController from "@/components/common/kilometers-controller";
import MultipleImageField from "@/components/common/multiple-image-field";
import PriceController from "@/components/common/price-controller";
import SelectController from "@/components/common/select-controller";
import TextAreaField from "@/components/common/text-area-field";
import TextField from "@/components/common/text-field";

import {
  PROVINCES,
  YEARS,
  GEARBOX,
  GASTYPE,
  DIFFERENTIAL,
} from "@/constants/forms";
import { CarFormValues } from "@/schemas/carFormSchema";

interface Props {
  control: Control<CarFormValues>;
  register: UseFormRegister<CarFormValues>;
  watch: UseFormWatch<CarFormValues>;
  setValue: UseFormSetValue<CarFormValues>;
  errors: FieldErrors<CarFormValues>;
}

function CarFormFields({ control, register, errors, watch, setValue }: Props) {
  return (
    <>
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
    </>
  );
}

export default CarFormFields;
