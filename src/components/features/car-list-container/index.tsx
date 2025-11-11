import { FilterStateType } from "@/types/car";
import CarList from "@/components/features/car-list/car-list";
import { getCarList } from "@/services/car.service";

async function AllCars({
  searchedTitle,
  hasFixedPrice,
  sort = "newest",
}: FilterStateType) {
  const cars = await getCarList({ searchedTitle, hasFixedPrice, sort });

  return <CarList items={cars} />;
}

export default AllCars;
