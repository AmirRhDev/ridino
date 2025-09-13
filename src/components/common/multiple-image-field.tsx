import { ChangeEvent, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageItem = {
  file?: File;
  url?: string;
};

type MultipleImageFieldProps = {
  value: ImageItem[];
  onChange: (files: ImageItem[]) => void;
  maxFiles?: number;
  maxFileSizeMB?: number;
};

export default function MultipleImageField({
  value,
  onChange,
  maxFiles = 5,
  maxFileSizeMB = 10,
}: MultipleImageFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setPreviews(
      value.map((item) =>
        item.file ? URL.createObjectURL(item.file) : item.url!,
      ),
    );
  }, [value]);

  const handleFiles = (files: FileList | File[]) => {
    const filesArray = Array.from(files);

    const validFiles = filesArray.filter(
      (f) => f.size <= maxFileSizeMB * 1024 * 1024,
    );

    const newItems = validFiles.map((file) => ({ file }));

    // enforce max files
    const total = [...value, ...newItems].slice(0, maxFiles);

    onChange(total);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  const handleRemove = (index: number) => {
    const updated = [...value];
    updated.splice(index, 1);
    onChange(updated);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-md bg-secondary flex flex-col items-center sm:py-2.5 py-5 transition-colors border-border",
        { "border-blue-500": isDragging },
      )}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <Upload size={20} className="text-foreground/95" />

      <p className="mt-1">آپلود حداکثر {maxFiles} عکس</p>

      <input
        type="file"
        multiple
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={handleInputChange}
      />

      <p className="text-sm text-foreground flex flex-wrap gap-0.5 mt-2 justify-center ">
        <span>برای آپلود فایل را بکشید و رها کنید یا</span>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="underline cursor-pointer"
        >
          انتخاب کنید
        </button>
      </p>

      <span className="text-foreground text-sm mt-0.5">
        حداکثر حجم فایل: {maxFileSizeMB}MB
      </span>

      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        {previews.map((url, idx) => (
          <div
            key={url}
            className="relative w-20 h-20 md:w-28 md:h-28 border rounded overflow-hidden"
          >
            <Image
              src={url}
              alt={`preview-${idx}`}
              fill
              className="object-cover"
            />
            <button
              type="button"
              className="absolute top-1 right-1 bg-black/70 cursor-pointer hover:bg-black/90 w-5 h-5 rounded text-white flex items-center justify-center"
              onClick={() => handleRemove(idx)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
