"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";

import {
  profileFormSchema,
  ProfileFormValues,
} from "@/schemas/profileFormSchema";

import { Button } from "@/components/shadcnUi/button";
import TextField from "@/components/common/text-field";
import MultipleImageField from "@/components/common/multiple-image-field";
import { Label } from "@radix-ui/react-dropdown-menu";

type Props = {
  onSubmit: SubmitHandler<ProfileFormValues>;
  defaultValues?: Partial<ProfileFormValues>;
  pending?: boolean;
};

export function ProfileForm({ onSubmit, defaultValues, pending }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const handleFormSubmit = (data: ProfileFormValues) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="grid sm:grid-cols-2 gap-5"
    >
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Label>تصویر پروفایل</Label>
        <Controller
          name="avatar"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <MultipleImageField
                value={field.value || []}
                onChange={field.onChange}
                maxFiles={1}
                maxFileSizeMB={5}
              />
              {fieldState.error && (
                <p className="text-sm text-destructive mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </>
          )}
        />
      </div>

      <TextField
        label="نام"
        error={errors.firstName?.message}
        {...register("firstName")}
        className="sm:col-span-2 md:col-span-1"
      />

      <TextField
        label="نام خانوادگی"
        error={errors.lastName?.message}
        {...register("lastName")}
        className="sm:col-span-2 md:col-span-1"
      />

      <div className="sm:col-span-2 flex flex-row-reverse gap-2">
        <Button disabled={pending} type="submit" className="w-full sm:w-auto">
          {pending && <LoaderCircle className="size-5 animate-spin " />}
          ذخیره پروفایل
        </Button>
      </div>
    </form>
  );
}
