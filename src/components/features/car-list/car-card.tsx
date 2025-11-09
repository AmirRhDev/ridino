import Image from "next/image";
import Link from "next/link";

import { MapPin } from "lucide-react";

import { formatPrice, timeAgo } from "@/lib/utils";

import { CarType } from "@/types/car";
import { GEARBOX, PROVINCES } from "@/constants/forms";
import TomanIcon from "@/components/icons/tomanIcon";

type Props = CarType & { car_images: { url: string }[] };

function CarCard({
  id,
  title,
  created_at,
  year,
  kilometers,
  gearbox,
  location,
  price,
  car_images,
}: Props) {
  const gearboxLabel = GEARBOX.find((d) => d.id === gearbox)?.label;
  const locationLabel = PROVINCES.find((d) => d.id === location)?.label;

  const firstImageUrl = car_images?.[0]?.url;

  return (
    <Link
      href={`/cars/${id}`}
      className="flex flex-col border border-foreground/30 shadow-muted shadow-sm rounded"
    >
      <Image
        className="w-full rounded-t aspect-[3/2] "
        src={firstImageUrl}
        alt="car image"
        width={400}
        height={300}
      />

      <div className="py-3 px-2">
        <div className="flex justify-between items-center gap-1">
          <p className="text-base text-foreground font-bold sm:text-lg">
            {title}
          </p>
          <span className="text-foreground/80 text-xs">
            {timeAgo(created_at!)}
          </span>
        </div>

        <div className="flex items-center text-foreground/80 text-sm gap-1 mt-2.5">
          <p>{year}</p>
          <span>-</span>
          <p>
            {!!kilometers ? `${formatPrice(kilometers)} km` : "صفر کیلومتر"}
          </p>
          <span>-</span>
          <p>{gearboxLabel}</p>
        </div>

        {/* features */}
        {/* <div className="flex flex-wrap gap-1 py-4">
          <Badge variant="special">بیمه کامل</Badge>
          <Badge variant="destructive">فروش فوری</Badge>
        </div> */}

        <div className="flex items-center justify-between gap-1 mt-2.5">
          <div className="flex items-center gap-0.5">
            <MapPin className="text-foreground" size={18} strokeWidth="1.5" />
            <span className="text-foreground/90 font-light">
              {locationLabel}
            </span>
          </div>

          <p className="flex gap-1 font-semibold text-foreground">
            <span>{!price ? "توافقی" : formatPrice(price)}</span>
            {!!price && <TomanIcon />}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CarCard;
