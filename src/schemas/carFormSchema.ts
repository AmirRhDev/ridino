import { z } from "zod";

export const carFormSchema = z.object({
  images: z.array(z.any()).min(1, "حداقل یک عکس بارگذاری کنید"),
  title: z.string().min(3, "حداقل باید 3 کارکتر باشد"),
  year: z.string().min(1, "انتخاب سال ساخت الزامی است"),
  notDriven: z.boolean(),
  kilometers: z.coerce
    .number({ invalid_type_error: "کارکرد نامعتبر است" })
    .positive("باید عددی بزرگتر از صفر وارد کنید")
    .min(0, "کارکرد باید عددی مثبت باشد"),
  gearbox: z.string().min(1, "انتخاب نوع گیربکس الزامی است"),
  location: z.string().min(1, "انتخاب مکان آگهی الزامی است"),
  negotiated: z.boolean(),
  price: z.coerce
    .number({ invalid_type_error: "قیمت نامعتبر است" })
    .positive("باید عددی بزرگتر از صفر وارد کنید")
    .min(0, "قیمت باید عددی مثبت باشد"),
  gasType: z.string().min(1, "انتخاب نوع سوخت الزامی است"),
  clearBody: z.boolean(),
  bodyStatus: z.string(),
  color: z.string().min(2, "حداقل باید 2 کارکتر باشد"),
  insideColor: z.string().min(2, "حداقل باید 2 کارکتر باشد"),
  motor: z.string(),
  acceleration: z.string(),
  power: z.string(),
  fuelConsumption: z.string(),
  differential: z.string(),
  description: z.string().min(10, "حداقل باید 10 کارکتر باشد"),
  phone: z.string().min(11, "شماره موبایل باید 11 رقمی باشد"),
});

export type CarFormValues = z.infer<typeof carFormSchema>;
