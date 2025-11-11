import AddCarForm from "@/components/features/car-form/add-car-form";

function AddCarPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-foreground text-2xl font-bold">افزودن خودرو جدید</h1>

      <AddCarForm />
    </div>
  );
}

export default AddCarPage;
