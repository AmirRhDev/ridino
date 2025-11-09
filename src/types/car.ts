import { CarFormValues } from "@/schemas/carFormSchema";
import { Control, UseFormSetValue, UseFormWatch } from "react-hook-form";

export interface TechnicalDetailType {
  motor?: number;
  power?: number;
  acceleration?: number;
  fuelConsumption?: number;
  differential?: string;
}

export interface CarType {
  id: string;
  user_id: string;
  title: string;
  created_at?: string;
  updated_at?: string | null;
  year: string;
  price: number | null;
  location: string;
  kilometers: number | null;
  gas_type: string;
  gearbox: string;
  body_status: string;
  color: string;
  inside_color: string;
  description: string;
  technical_detail?: TechnicalDetailType;
  car_images: { url: string }[] | string[];
  phone: string;
}

export interface CarFormType {
  id: string;
  title: string;
  year: string;
  kilometers?: number | undefined;
  gearbox: string;
  location: string;
  price?: number | undefined;
  bodyStatus: string;
  gasType: string;
  color: string;
  insideColor: string;
  motor?: number;
  acceleration?: number;
  power?: number;
  fuelConsumption?: number;
  differential: string;
  description: string;
  user_id: string;
  phone: string;
}

export type CustomControllerPropType = {
  control: Control<CarFormValues>;
  watch: UseFormWatch<CarFormValues>;
  error?: string;
  setValue: UseFormSetValue<CarFormValues>;
};

export type FilterStateType = {
  searchedTitle?: string;
  hasFixedPrice?: boolean;
  sort?: "oldest" | "newest";
};

export type SortFilterType = "newest" | "oldest";

export type ImageItem = {
  file?: File;
  url?: string;
};
