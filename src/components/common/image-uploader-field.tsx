"use client";

import { Control, Controller } from "react-hook-form";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "../shadcnUi/dropzone";
import { useEffect } from "react";
import { UseSupabaseUploadReturn } from "@/hooks/use-supabase-upload";

interface ImageUploaderFieldProps {
  control: Control<any>;
  name: string;
  uploadProps: UseSupabaseUploadReturn;
  className: string;
}

export function ImageUploaderField({
  control,
  name,
  uploadProps,
  className,
}: ImageUploaderFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (files) =>
          (Array.isArray(files) && files.length > 0) ||
          "حداقل یک عکس بارگذاری کنید",
      }}
      render={({ field, fieldState }) => {
        const { onChange } = field;
        const { acceptedFiles } = uploadProps;

        useEffect(() => {
          onChange(acceptedFiles);
        }, [acceptedFiles, onChange]);

        return (
          <div className={className}>
            <Dropzone {...uploadProps}>
              <DropzoneEmptyState />
              <DropzoneContent />
            </Dropzone>
            {fieldState.error && (
              <p className="text-destructive text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
}
