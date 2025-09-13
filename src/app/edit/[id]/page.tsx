import EditCarForm from "@/components/features/car-form/edit-car-form";
import { getCarById } from "@/services/car.service";

async function EditCarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = await getCarById(id);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-foreground text-2xl font-bold">ویرایش خودرو</h1>
      <EditCarForm initialData={car} />
    </div>
  );
}

export default EditCarPage;
