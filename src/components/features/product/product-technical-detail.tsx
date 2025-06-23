import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function ProductTechnicalDetail({ className }: Props) {
  return (
    <div className={cn("flex flex-col pt-3 gap-3", className)}>
      <h3 className="font-semibold text-foreground sm:text-lg">مشخصات فنی</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-2 md:gap-x-1 lg:gap-x-0 gap-y-4">
        <ProductTechnicalDetailItem
          title="حجم موتور"
          description="7.5 لیتر در صد کیلومتر"
        />

        <ProductTechnicalDetailItem
          title="حجم موتور"
          description="7.5 لیتر در صد کیلومتر"
        />
      </div>
    </div>
  );
}

export default ProductTechnicalDetail;

interface ProductTechnicalDetailItem {
  title: string;
  description: string;
}
function ProductTechnicalDetailItem({
  title,
  description,
}: ProductTechnicalDetailItem) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold text-foreground/80 text-sm">{title}</p>
      <span className="font-semibold text-foreground text-base lg:text-xl">
        {description}
      </span>
    </div>
  );
}
