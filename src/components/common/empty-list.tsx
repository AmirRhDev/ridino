import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
  label?: string;
}

function EmptyList({ className, label }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 justify-center items-center text-foreground/70 font-semibold text-lg",
        className,
      )}
    >
      <Image
        src="/emptyfolder.png"
        width={70}
        height={70}
        alt="empty folder icon"
      />
      <p>{label ?? "اطلاعاتی جهت نمایش وجود ندارد!"}</p>
    </div>
  );
}

export default EmptyList;
