import CarCarousel from "@/components/features/car/car-carousel";
import CarDescription from "@/components/features/car/car-description";
import CarTechnicalDetail from "@/components/features/car/car-technical-detail";
import CarCopy from "@/components/features/car/car-copy";
import CarSave from "@/components/features/car/car-save";
import CarDetail from "@/components/features/car/car-detail";
import CarLocation from "@/components/features/car/car-location";
import CarPrice from "@/components/features/car/car-price";
import CarCallCustomer from "@/components/features/car/car-call-customer";
import CarMore from "@/components/features/car/car-more";
import CarEdit from "@/components/features/car/car-edit";
import { timeAgo } from "@/lib/utils";
import { createServerSupabase } from "@/lib/supabaseServer";
import { getFullCarDetail } from "@/services/car.service";

interface CarDetailProps {
  params: Promise<{ id: string }>;
}

export default async function CarDetailPage({ params }: CarDetailProps) {
  const { id } = await params;

  const supabase = await createServerSupabase();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { car, images, isSaved } = await getFullCarDetail(id, user?.id);

  const carHasTechnicalDetail = !Object.values(car.technical_detail).every(
    (v) => v === "",
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-11 gap-4">
      <div className="lg:col-span-7 flex flex-col gap-1">
        <CarCarousel items={images} />

        <CarDescription
          description={car.description}
          className="hidden lg:flex"
        />

        {carHasTechnicalDetail && (
          <CarTechnicalDetail
            {...car.technical_detail}
            className="hidden lg:flex"
          />
        )}
      </div>

      <div className="lg:col-span-4 flex flex-col gap-1 p-1 h-min lg:sticky lg:top-[80px]">
        <div className="flex justify-between items-center gap-3">
          <h1 className="font-semibold text-foreground text-xl">{car.title}</h1>
          <div className="flex items-center gap-3.5">
            <CarEdit carId={car.id} userId={car.user_id} />
            <CarCopy />
            <CarSave carId={car.id} initialSaved={isSaved} />
          </div>
        </div>

        <CarDetail
          year={car.year}
          kilometers={car.kilometers}
          gearbox={car.gearbox}
        />
        <span className="text-foreground/80 text-sm mt-3">
          {timeAgo(car.created_at)}
        </span>

        <div className="flex items-center justify-between gap-1 text-lg border-b border-foreground/10 pb-3">
          <CarLocation location={car.location} />
          <CarPrice price={car.price} />
        </div>

        <CarCallCustomer phone={car.phone} />
        <CarMore
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

      <CarDescription
        description={car.description}
        className="flex lg:hidden border-t pt-3"
      />
      {carHasTechnicalDetail && (
        <CarTechnicalDetail
          {...car.technical_detail}
          className="flex lg:hidden"
        />
      )}
    </div>
  );
}
