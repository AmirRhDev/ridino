import { DIFFERENTIAL } from "@/constants/forms";
import { cn } from "@/lib/utils";
import { TechnicalDetailType } from "@/types/product";

interface Props extends TechnicalDetailType {
  className?: string;
}

function ProductTechnicalDetail({
  className,
  motor,
  power,
  acceleration,
  differential,
  fuelConsumption,
}: Props) {
  const differentialLabel = DIFFERENTIAL.find(
    (d) => d.id === differential,
  )?.label;

  return (
    <div className={cn("flex flex-col pt-3 gap-3", className)}>
      <h3 className="font-semibold text-foreground sm:text-lg">مشخصات فنی</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-2 md:gap-x-1 lg:gap-x-0 gap-y-4">
        {!!motor && (
          <ProductTechnicalDetailItem
            title="حجم موتور"
            description={`${motor} لیتری`}
          />
        )}

        {!!acceleration && (
          <ProductTechnicalDetailItem
            title="شتاب"
            description={`${acceleration} ثانیه`}
          />
        )}

        {!!power && (
          <ProductTechnicalDetailItem
            title="قدرت"
            description={`${power} اسب بخار`}
          />
        )}

        {!!fuelConsumption && (
          <ProductTechnicalDetailItem
            title="مصرف سوخت"
            description={`${fuelConsumption} لیتر در صد کیلومتر`}
          />
        )}

        {!!differential && (
          <ProductTechnicalDetailItem
            title="دیفرانسیل"
            description={differentialLabel!}
          />
        )}
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
