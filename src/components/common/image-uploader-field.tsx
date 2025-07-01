"use client";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/shadcnUi/dropzone";
import { useSupabaseUpload } from "@/hooks/use-supabase-upload";

function imageUploaderField() {
  const props = useSupabaseUpload({
    bucketName: "car-images",
    path: "test",
    allowedMimeTypes: ["image/*"],
    maxFiles: 2,
    maxFileSize: 1000 * 1000 * 10, // 10MB,
  });

  return (
    <div className="w-full">
      <Dropzone {...props}>
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  );
}

export default imageUploaderField;
