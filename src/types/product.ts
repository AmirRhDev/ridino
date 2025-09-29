import { Control, UseFormWatch } from "react-hook-form";

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
  price: number | undefined;
  location: string;
  kilometers: number | undefined;
  gas_type: string;
  gearbox: string;
  body_status: string;
  color: string;
  inside_color: string;
  description: string;
  technical_detail?: TechnicalDetailType;
  car_images: { url: string }[] | string[]; //TODO: FIX
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
  control: Control<any>;
  watch: UseFormWatch<any>;
  error?: string;
  setValue: any; //TODO: fix type later
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
