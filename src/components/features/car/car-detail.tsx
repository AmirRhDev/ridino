import { GEARBOX } from "@/constants/forms";
import { formatPrice } from "@/lib/utils";

interface Props {
  year: string;
  kilometers: number;
  gearbox: string;
}

function CarDetail({ year, kilometers, gearbox }: Props) {
  const gearboxLabel = GEARBOX.find((d) => d.id === gearbox)?.label;

  return (
    <div className="flex items-center text-foreground/90 gap-1 mt-2.5">
      <p>{year}</p>
      <span>-</span>
      <bdi>
        {!!kilometers ? `${formatPrice(kilometers)} km` : "صفر کیلومتر"}
      </bdi>
      <span>-</span>
      <p>{gearboxLabel}</p>
    </div>
  );
}

export default CarDetail;
