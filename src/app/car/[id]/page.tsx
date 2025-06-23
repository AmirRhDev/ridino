import ProductCarousel from "@/components/features/product/product-carousel";
import ProductDescription from "@/components/features/product/product-description";
import ProductTechnicalDetail from "@/components/features/product/product-technical-detail";
import ProductCopy from "@/components/features/product/product-copy";
import ProductLike from "@/components/features/product/product-like";
import ProductDetail from "@/components/features/product/product-detail";
import ProductsLocation from "@/components/features/product/products-location";
import ProductPrice from "@/components/features/product/product-price";
import ProductCallCustomer from "@/components/features/product/product-call-customer";
import ProductMore from "@/components/features/product/product-more";

function CarDetail() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-11 gap-4">
      <div className="lg:col-span-7 flex flex-col gap-1">
        <ProductCarousel />

        <ProductDescription className="hidden lg:flex" />

        <ProductTechnicalDetail className="hidden lg:flex" />
      </div>

      {/* TODO: fix sticky later */}
      <div className="lg:col-span-4 flex flex-col gap-1 p-1 h-min lg:sticky lg:top-[80px]">
        <div className="flex justify-between items-center gap-3">
          <h1 className="font-semibold text-foreground text-xl">پژو، پارس</h1>

          <div className="flex items-center gap-3.5">
            <ProductCopy />

            <ProductLike />
          </div>
        </div>

        <ProductDetail />

        <span className="text-foreground/80 text-sm mt-3">لحظاتی پیش</span>

        <div className="flex items-center justify-between gap-1 text-lg border-b border-foreground/10 pb-3">
          <ProductsLocation />

          <ProductPrice />
        </div>

        <ProductCallCustomer />

        <ProductMore />
      </div>

      <ProductDescription className="flex lg:hidden border-t pt-3" />

      <ProductTechnicalDetail className="flex lg:hidden" />
    </div>
  );
}

export default CarDetail;
