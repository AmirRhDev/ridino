import Image from "next/image";

import { Badge } from "@/components/shadcnUi/badge";

import TomanIcon from "@/components/icons/tomanIcon";
import { MapPin } from "lucide-react";

import carImage from "../../../../public/car1.jpg";
import Link from "next/link";
import { CarType } from "@/types/product";
import { formatPrice, timeAgo } from "@/lib/utils";
import { GEARBOX, PROVINCES } from "@/constants/forms";
import { supabase } from "@/lib/supabaseClient";

type Props = CarType;

async function ProductCard({
  id,
  title,
  created_at,
  year,
  kilometers,
  gearbox,
  location,
  price,
}: Props) {
  const gearboxLabel = GEARBOX.find((d) => d.id === gearbox)?.label;
  const locationLabel = PROVINCES.find((d) => d.id === location)?.label;

  const { data: images, error: listError } = await supabase.storage
    .from("cars-images")
    .list(`${id}/`, { limit: 100 });

  if (listError) throw new Error(listError.message);

  const firstImage = images?.[0];

  const firstImageUrl = firstImage
    ? supabase.storage
        .from("cars-images")
        .getPublicUrl(`${id}/${firstImage.name}`).data.publicUrl
    : null;

  return (
    <Link
      href={`/cars/${id}`}
      className="flex flex-col border border-foreground/30 shadow-muted shadow-sm rounded"
    >
      <Image
        className="w-full rounded-t aspect-[4/3] "
        src={firstImageUrl ?? carImage} //TODO: replace carImage to car thumbnail
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
            {timeAgo(created_at)}
          </span>
        </div>

        <div className="flex items-center text-foreground/80 text-sm gap-1">
          <p>{year}</p>
          <span>-</span>
          <p>
            {kilometers !== 0 ? `${formatPrice(kilometers)} km` : "صفر کیلومتر"}
          </p>
          <span>-</span>
          <p>{gearboxLabel}</p>
        </div>

        {/* features */}
        <div className="flex flex-wrap gap-1 py-4">
          <Badge variant="special">بیمه کامل</Badge>
          <Badge variant="destructive">فروش فوری</Badge>
        </div>

        <div className="flex items-center justify-between gap-1">
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

export default ProductCard;
