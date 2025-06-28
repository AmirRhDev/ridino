import TomanIcon from "@/components/icons/tomanIcon";
import { formatPrice } from "@/lib/utils";

function ProductPrice({ price }: { price: number }) {
  return (
    <p className="flex gap-1 font-semibold text-foreground">
      <span>{formatPrice(price)}</span>

      <TomanIcon />
    </p>
  );
}

export default ProductPrice;
