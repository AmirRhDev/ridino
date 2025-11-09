import { CarType } from "@/types/car";
import CarCard from "./car-card";
import { cn } from "@/lib/utils";
import EmptyList from "@/components/common/empty-list";

interface CarListProps {
  items?: (CarType & { car_images: { url: string }[] })[];
  className?: string;
}

function CarList({ items, className }: CarListProps) {
  if (!items || !items?.length) {
    return <EmptyList className="mt-10" />;
  }

  return (
    <div
      className={cn(
        "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
        className,
      )}
    >
      {items?.map((item) => <CarCard key={item.id} {...item} />)}
    </div>
  );
}

export default CarList;
