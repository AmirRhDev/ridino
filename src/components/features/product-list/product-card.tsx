import Image from "next/image";

import { Badge } from "@/components/shadcnUi/badge";

import TomanIcon from "@/components/icons/tomanIcon";
import { MapPin } from "lucide-react";

import carImage from "../../../../public/car1.jpg";

function ProductCard() {
  return (
    <li className="flex flex-col border border-foreground/30 shadow-muted shadow-sm rounded">
      <Image
        className="w-full rounded-t aspect-[4/3] "
        src={carImage}
        alt="car image"
      />

      <div className="py-3 px-2">
        <div className="flex justify-between items-center gap-1">
          <p className="text-base text-foreground font-bold sm:text-lg">
            رنو ساندرو استپ وی
          </p>
          <span className="text-foreground/80 text-xs">لحظاتی پیش</span>
        </div>

        <div className="flex items-center text-foreground/80 text-sm gap-1">
          <p>1404</p>
          <span>-</span>
          <p>صفر کیلومتر</p>
          <span>-</span>
          <p>اتومات</p>
        </div>

        {/* features */}
        <div className="flex flex-wrap gap-1 py-4">
          <Badge variant="special">بیمه کامل</Badge>
          <Badge variant="destructive">فروش فوری</Badge>
        </div>

        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-0.5">
            <MapPin className="text-foreground" size={18} strokeWidth="1.5" />
            <span className="text-foreground/90 font-light">تهران</span>
          </div>

          <p className="flex gap-1 font-semibold text-foreground">
            <span>980,000,000</span>
            <TomanIcon />
          </p>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
