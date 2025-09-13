import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "@/lib/dayjs";
import { CarFormType, CarType } from "@/types/product";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(isoDate: string): string {
  return dayjs(isoDate).fromNow();
}

export function formatPrice(
  value: number | string,
  lang: "fa-IR" | "en-US" = "fa-IR",
): string {
  if (typeof value === "number") {
    return value.toLocaleString(lang);
  }

  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function stripCommas(value: string) {
  return value.replace(/,/g, "");
}

export function parseToModel(data: CarFormType): CarType {
  return {
    id: data.id,
    user_id: data.user_id,
    title: data.title,
    year: data.year,
    kilometers: data.kilometers,
    gearbox: data.gearbox,
    location: data.location,
    price: data.price,
    body_status: data.bodyStatus,
    gas_type: data.gasType,
    color: data.color,
    inside_color: data.insideColor,
    technical_detail: {
      motor: data.motor,
      acceleration: data.acceleration,
      power: data.power,
      fuelConsumption: data.fuelConsumption,
      differential: data.differential,
    },
    description: data.description,
    phone: data.phone,
  };
}

export function parseToFormData(data: CarType) {
  return {
    id: data.id,
    user_id: data.user_id,
    title: data.title,
    year: data.year,
    kilometers: data.kilometers,
    notDriven: Boolean(!data.kilometers),
    gearbox: data.gearbox,
    location: data.location,
    price: data.price,
    negotiated: Boolean(!data.price),
    bodyStatus: data.body_status,
    clearBody: Boolean(!data.body_status),
    gasType: data.gas_type,
    color: data.color,
    insideColor: data.inside_color,
    motor: data.technical_detail?.motor,
    acceleration: data.technical_detail?.acceleration,
    power: data.technical_detail?.power,
    fuelConsumption: data.technical_detail?.fuelConsumption,
    differential: data.technical_detail?.differential,
    description: data.description,
    images: data.car_images,
    phone: data.phone,
  };
}
