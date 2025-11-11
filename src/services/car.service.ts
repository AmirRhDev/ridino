import { validate as isUuid } from "uuid";
import {
  repoGetCarById,
  repoCreateCar,
  repoUploadImage,
  repoAddImages,
  repoUpdateCar,
  repoRemoveImage,
  repoRemoveImageFromBucket,
  repoDeleteCar,
} from "@/repositories/car.repository";

export async function getCarById(id: string) {
  if (!isUuid(id)) throw new Error("Invalid ID");

  const { data, error } = await repoGetCarById(id);
  if (error) throw error;

  return {
    ...data,
    car_images: data?.car_images?.map((img: any) => img.url) ?? [],
  };
}

export async function getFullCarDetail(carId: string, userId?: string) {
  if (!isUuid(carId)) throw new Error("Invalid car id");

  const { data: carData, error: carError } = await repoGetCarById(carId);
  if (carError) throw carError;

  const imageUrls =
    carData?.car_images?.map((i: any) => i.url).filter(Boolean) ?? [];

  let isSaved = false;
  if (userId) {
    isSaved = await repoIsCarSaved(userId, carId);
  }

  return {
    car: carData,
    images: imageUrls,
    isSaved,
  };
}

export async function addCar(model: any, images: { file: File }[]) {
  const { data: car, error } = await repoCreateCar(model);
  if (error) throw error;

  const urls = [];

  for (const { file } of images) {
    const filePath = `${car.id}/${crypto.randomUUID()}-${file.name}`;
    const { data, error: uploadErr } = await repoUploadImage(filePath, file);
    if (uploadErr) throw uploadErr;

    urls.push(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cars-images/${data.path}`,
    );
  }

  await repoAddImages(urls.map((url) => ({ car_id: car.id, url })));

  return car;
}

export async function updateCar(
  carId: string,
  model: any,
  newFiles: { file: File }[],
  existingUrls: string[],
  oldUrls: string[],
) {
  const { error } = await repoUpdateCar(carId, model);
  if (error) throw error;

  const removed = oldUrls.filter((url) => !existingUrls.includes(url));
  for (const url of removed) {
    const path = url.split("/storage/v1/object/public/cars-images/")[1];
    await repoRemoveImageFromBucket(path);
    await repoRemoveImage(url);
  }

  for (const { file } of newFiles) {
    const filePath = `${carId}/${crypto.randomUUID()}-${file.name}`;
    const { data, error: uploadErr } = await repoUploadImage(filePath, file);
    if (uploadErr) throw uploadErr;
    await repoAddImages([
      {
        car_id: carId,
        url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cars-images/${data.path}`,
      },
    ]);
  }
}

export async function deleteCar(carId: string, urls: string[]) {
  for (const url of urls) {
    const path = url.split("/storage/v1/object/public/cars-images/")[1];
    await repoRemoveImageFromBucket(path);
    await repoRemoveImage(url);
  }
  await repoDeleteCar(carId);
}

export async function toggleCarSave({
  userId,
  carId,
  isSaved,
}: {
  userId: string;
  carId: string;
  isSaved: boolean;
}) {
  if (isSaved) {
    const { error } = await repoUnsaveCar(userId, carId);
    if (error) throw error;
    return false;
  } else {
    const { error } = await repoSaveCar(userId, carId);
    if (error) throw error;
    return true;
  }
}
