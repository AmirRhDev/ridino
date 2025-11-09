import { Skeleton } from "@/components/shadcnUi/skeleton";

function ProfileFormLoader() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Skeleton className="w-full h-40" />
      </div>

      <Skeleton className="sm:col-span-2 md:col-span-1 h-20" />
      <Skeleton className="sm:col-span-2 md:col-span-1 h-20" />

      <div className="sm:col-span-2 flex flex-row-reverse gap-2">
        <Skeleton className="w-24 h-9" />
      </div>
    </div>
  );
}

export default ProfileFormLoader;
