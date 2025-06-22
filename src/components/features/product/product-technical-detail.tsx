function ProductTechnicalDetail() {
  return (
    <div className="flex flex-col pt-3 gap-3">
      <h3 className="font-semibold text-foreground text-lg">مشخصات فنی</h3>

      <div className="grid grid-cols-4 gap-y-4">
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
      <span className="font-semibold text-foreground text-xl">
        {description}
      </span>
    </div>
  );
}
