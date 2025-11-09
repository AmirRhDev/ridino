import { z } from "zod";

export const carFormSchema = z
  .object({
    images: z.array(z.any()).min(1, "حداقل یک عکس بارگذاری کنید"),
    title: z.string().min(3, "حداقل باید 3 کارکتر باشد"),
    year: z.string().min(1, "انتخاب سال ساخت الزامی است"),
    notDriven: z.boolean().optional(),
    kilometers: z.coerce
      .number({ invalid_type_error: "کیلومتر نامعتبر است" })
      .optional(),
    gearbox: z.string().min(1, "انتخاب نوع گیربکس الزامی است"),
    location: z.string().min(1, "انتخاب مکان آگهی الزامی است"),
    negotiated: z.boolean().optional(),
    price: z.coerce
      .number({ invalid_type_error: "قیمت نامعتبر است" })
      .optional(),
    gasType: z.string().min(1, "انتخاب نوع سوخت الزامی است"),
    clearBody: z.boolean().optional(),
    bodyStatus: z.coerce.string({
      invalid_type_error: "وضعیت بدنه نامعتبر است",
    }),
    color: z.string().min(2, "حداقل باید 2 کارکتر باشد"),
    insideColor: z.string().min(2, "حداقل باید 2 کارکتر باشد"),
    motor: z.coerce
      .number({ invalid_type_error: "مقدار عددی وارد کنید" })
      .optional(),
    acceleration: z.coerce
      .number({ invalid_type_error: "مقدار عددی وارد کنید" })
      .optional(),
    power: z.coerce
      .number({ invalid_type_error: "مقدار عددی وارد کنید" })
      .optional(),
    fuelConsumption: z.coerce
      .number({ invalid_type_error: "مقدار عددی وارد کنید" })
      .optional(),
    differential: z.string(),
    description: z.string().min(10, "حداقل باید 10 کارکتر باشد"),
    phone: z.string().min(11, "شماره موبایل باید 11 رقمی باشد"),
  })
  .superRefine((data, ctx) => {
    if (!data.negotiated && (!data.price || data.price <= 0)) {
      ctx.addIssue({
        path: ["price"],
        code: z.ZodIssueCode.custom,
        message: "قیمت الزامی است",
      });
    }

    if (!data.notDriven && (!data.kilometers || data.kilometers <= 0)) {
      ctx.addIssue({
        path: ["kilometers"],
        code: z.ZodIssueCode.custom,
        message: "کیلومتر الزامی است",
      });
    }

    if (!data.clearBody && (data.bodyStatus === "" || !data.bodyStatus)) {
      ctx.addIssue({
        path: ["bodyStatus"],
        code: z.ZodIssueCode.custom,
        message: "وضعیت بدنه الزامی است",
      });
    }
  });

export type CarFormValues = z.infer<typeof carFormSchema>;
