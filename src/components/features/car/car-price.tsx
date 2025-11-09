import TomanIcon from "@/components/icons/tomanIcon";
import { formatPrice } from "@/lib/utils";

function CarPrice({ price }: { price: number }) {
  return (
    <p className="flex gap-1 font-semibold text-foreground">
      <span>{!price ? "توافقی" : formatPrice(price)}</span>

      {!!price && <TomanIcon />}
    </p>
  );
}

export default CarPrice;
