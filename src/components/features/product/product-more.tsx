import CarBodyIcon from "@/components/icons/carBodyIcon";
import CarChairIcon from "@/components/icons/carChairIcon";
import CarKilometerIcon from "@/components/icons/carKilometerIcon";
import ColorBrushIcon from "@/components/icons/colorBrushIcon";
import GasIcon from "@/components/icons/gasIcon";
import GearBoxIcon from "@/components/icons/gearBoxIcon";
import { GASTYPE, GEARBOX } from "@/constants/forms";
import { formatPrice } from "@/lib/utils";
import { ReactElement } from "react";

interface DataTypeProps {
  kilometers: string;
  gasType: string;
  gearbox: string;
  color: string;
  insideColor: string;
  bodyStatus: string;
}

function ProductMore({ data }: { data: DataTypeProps }) {
  const gasTypeLabel = GASTYPE.find((d) => d.id === data.gasType)?.label;
  const gearboxLabel = GEARBOX.find((d) => d.id === data.gearbox)?.label;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 mt-5">
      <ProductMoreItem
        icon={<CarKilometerIcon className="size-7 m-1.5" />}
        title="کارکرد"
        description={`${formatPrice(data.kilometers)} km`}
      />

      <ProductMoreItem
        icon={<GasIcon className="size-7 m-1.5" />}
        title="نوع سوخت"
        description={gasTypeLabel!}
      />

      <ProductMoreItem
        icon={<GearBoxIcon className="size-7 m-1.5" />}
        title="گیربکس"
        description={gearboxLabel!}
      />

      <ProductMoreItem
        icon={<CarBodyIcon className="size-7 m-1.5" />}
        title="وضعیت بدنه"
        description={data.bodyStatus}
      />

      <ProductMoreItem
        icon={<ColorBrushIcon className="size-7 m-1.5" />}
        title="رنگ بدنه"
        description={data.color}
      />

      <ProductMoreItem
        icon={<CarChairIcon className="size-7 m-1.5" />}
        title="رنگ داخلی"
        description={data.insideColor}
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
      <bdi className="font-semibold text-foreground">{description}</bdi>
    </div>
  );
}
