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
import { supabase } from "@/lib/supabaseClient";
import { timeAgo } from "@/lib/utils";
interface CarDetailProps {
  params: Promise<{ id: string }>;
}

async function CarDetail({ params }: CarDetailProps) {
  const { id } = await params;

  const { data: car, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  const { data: images, error: listError } = await supabase.storage
    .from("cars-images")
    .list(`${id}/`, { limit: 100 });

  if (listError) throw new Error(listError.message);

  const imageUrls = images
    ?.map(
      (img) =>
        supabase.storage.from("cars-images").getPublicUrl(`${id}/${img.name}`)
          .data.publicUrl,
    )
    .filter(Boolean);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-11 gap-4">
      <div className="lg:col-span-7 flex flex-col gap-1">
        <ProductCarousel items={imageUrls} />

        <ProductDescription
          description={car.description}
          className="hidden lg:flex"
        />

        <ProductTechnicalDetail
          {...car.technical_detail}
          className="hidden lg:flex"
        />
      </div>

      <div className="lg:col-span-4 flex flex-col gap-1 p-1 h-min lg:sticky lg:top-[80px]">
        <div className="flex justify-between items-center gap-3">
          <h1 className="font-semibold text-foreground text-xl">{car.title}</h1>

          <div className="flex items-center gap-3.5">
            <ProductCopy />

            <ProductLike />
          </div>
        </div>

        <ProductDetail
          year={car.year}
          kilometers={car.kilometers}
          gearbox={car.gearbox}
        />

        <span className="text-foreground/80 text-sm mt-3">
          {timeAgo(car.created_at)}
        </span>

        <div className="flex items-center justify-between gap-1 text-lg border-b border-foreground/10 pb-3">
          <ProductsLocation location={car.location} />

          <ProductPrice price={car.price} />
        </div>

        <ProductCallCustomer />

        <ProductMore
          data={{
            kilometers: car.kilometers,
            gasType: car.gas_type,
            gearbox: car.gearbox,
            color: car.color,
            insideColor: car.inside_color,
            bodyStatus: car.body_status,
          }}
        />
      </div>

      <ProductDescription
        description={car.description}
        className="flex lg:hidden border-t pt-3"
      />

      <ProductTechnicalDetail
        {...car.technical_detail}
        className="flex lg:hidden"
      />
    </div>
  );
}

export default CarDetail;
