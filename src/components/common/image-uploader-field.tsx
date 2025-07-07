"use client";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/shadcnUi/dropzone";
import { cn } from "@/lib/utils";

function ImageUploaderField({
  props,
  className,
}: {
  props: any;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <Dropzone {...props}>
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  );
}

export default ImageUploaderField;
