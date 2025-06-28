import { formatPrice } from "@/lib/utils";

interface Props {
  year: string;
  kilometers: number;
  gearbox: string;
}

function ProductDetail({ year, kilometers, gearbox }: Props) {
  return (
    <div className="flex items-center text-foreground/90 gap-1 mt-2.5">
      <p>{year}</p>
      <span>-</span>
      <bdi>
        {kilometers !== 0 ? `${formatPrice(kilometers)} km` : "صفر کیلومتر"}
      </bdi>
      <span>-</span>
      <p>{gearbox}</p>
    </div>
  );
}

export default ProductDetail;
