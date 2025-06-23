import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function ProductDescription({ className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col mt-2 pb-3 border-b border-foreground/10",
        className,
      )}
    >
      <h3 className="font-semibold text-foreground sm:text-lg">توضیحات</h3>
      <p className="text-sm sm:text-base text-foreground/80">
        فروش فوری زیر قیمت بازار خشک مدارک آماده انتقال سند آزاد گارانتی فعال
        تحویل فوری لطفا فقط تماس بگیرید عرشیا نادری
      </p>
    </div>
  );
}

export default ProductDescription;
