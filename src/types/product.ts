export interface TechnicalDetailType {
  motor: string;
  power: string;
  acceleration: string;
  fuelConsumption: string;
  differential: string;
}

export interface ProductType {
  id: number;
  title: string;
  created_at: string;
  updated_at: string | null;
  year: number;
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
