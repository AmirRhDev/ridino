import CarBodyIcon from "@/components/icons/carBodyIcon";
import CarChairIcon from "@/components/icons/carChairIcon";
import CarKilometerIcon from "@/components/icons/carKilometerIcon";
import ColorBrushIcon from "@/components/icons/colorBrushIcon";
import GasIcon from "@/components/icons/gasIcon";
import GearBoxIcon from "@/components/icons/gearBoxIcon";
import { ReactElement } from "react";

function ProductMore() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 mt-5">
      <ProductMoreItem
        icon={<CarKilometerIcon className="size-7 m-1.5" />}
        title="کارکرد"
        description="صفر کیلومتر"
      />

      <ProductMoreItem
        icon={<GasIcon className="size-7 m-1.5" />}
        title="کارکرد"
        description="صفر کیلومتر"
      />

      <ProductMoreItem
        icon={<GearBoxIcon className="size-7 m-1.5" />}
        title="کارکرد"
        description="صفر کیلومتر"
      />

      <ProductMoreItem
        icon={<CarBodyIcon className="size-7 m-1.5" />}
        title="کارکرد"
        description="صفر کیلومتر"
      />

      <ProductMoreItem
        icon={<ColorBrushIcon className="size-7 m-1.5" />}
        title="کارکرد"
        description="صفر کیلومتر"
      />

      <ProductMoreItem
        icon={<CarChairIcon className="size-7 m-1.5" />}
        title="کارکرد"
        description="صفر کیلومتر"
      />
    </div>
  );
}

export default ProductMore;

interface ProductMoreItemProps {
  icon: ReactElement;
  title: string;
  description: string;
}

function ProductMoreItem({ icon, title, description }: ProductMoreItemProps) {
  return (
    <div className="flex flex-col gap-1 items-center p-2">
      <div className="border-2 border-primary/60 rounded-full text-foreground/90">
        {icon}
      </div>
      <span className="text-sm text-foreground/60">{title}</span>
      <p className="font-semibold text-foreground">{description}</p>
    </div>
  );
}
