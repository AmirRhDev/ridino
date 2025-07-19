import { Control, UseFormWatch } from "react-hook-form";

export interface TechnicalDetailType {
  motor: string;
  power: string;
  acceleration: string;
  fuelConsumption: string;
  differential: string;
}

export interface CarType {
  id: string;
  title: string;
  created_at: string;
  updated_at: string | null;
  year: string;
  price: number;
  location: string;
  kilometers: number;
  gas_type: string;
  gearbox: string;
  body_status: string;
  color: string;
  inside_color: string;
  description: string;
  technical_detail: TechnicalDetailType;
}

export interface CarFormType {
  id: string;
  title: string;
  year: string;
  kilometers: number;
  gearbox: string;
  location: string;
  price: number;
  bodyStatus: string;
  gasType: string;
  color: string;
  insideColor: string;
  motor: string;
  acceleration: string;
  power: string;
  fuelConsumption: string;
  differential: string;
  description: string;
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
