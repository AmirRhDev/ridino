import { Skeleton } from "@/components/shadcnUi/skeleton";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function CarLoader({ className }: Props) {
  return (
    <div
      className={cn(
        "grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
        className,
      )}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton className="aspect-[3/2] rounded" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-2 w-10" />
          </div>
          <Skeleton className="h-3 w-24" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarLoader;
