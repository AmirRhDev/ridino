import { z } from "zod";

export const carFormSchema = z
  .object({
    images: z.array(z.any()).min(1, "حداقل یک عکس بارگذاری کنید"),
    title: z.string().min(3, "حداقل باید 3 کارکتر باشد"),
    year: z.string().min(1, "انتخاب سال ساخت الزامی است"),
    notDriven: z.boolean(),
    kilometers: z.coerce.number({ invalid_type_error: "کیلومتر نامعتبر است" }),
    gearbox: z.string().min(1, "انتخاب نوع گیربکس الزامی است"),
    location: z.string().min(1, "انتخاب مکان آگهی الزامی است"),
    negotiated: z.boolean(),
    price: z.coerce.number({ invalid_type_error: "قیمت نامعتبر است" }),
    gasType: z.string().min(1, "انتخاب نوع سوخت الزامی است"),
    clearBody: z.boolean(),
    bodyStatus: z.coerce.string({
      invalid_type_error: "وضعیت بدنه نامعتبر است",
    }),
    color: z.string().min(2, "حداقل باید 2 کارکتر باشد"),
    insideColor: z.string().min(2, "حداقل باید 2 کارکتر باشد"),
    motor: z.string(),
    acceleration: z.string(),
    power: z.string(),
    fuelConsumption: z.string(),
    differential: z.string(),
    description: z.string().min(10, "حداقل باید 10 کارکتر باشد"),
    phone: z.string().min(11, "شماره موبایل باید 11 رقمی باشد"),
  })
  .superRefine((data, ctx) => {
    if (!data.negotiated && (data.price <= 0 || !data.price)) {
      ctx.addIssue({
        path: ["price"],
        code: z.ZodIssueCode.custom,
        message: "قیمت الزامی است",
      });
    }

    if (!data.notDriven && (data.kilometers <= 0 || !data.kilometers)) {
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

export const signUpSchema = z
  .object({
    email: z.string().min(1, "ایمیل الزامی است").email("ایمیل معتبر نیست"),
    password: z.string().min(6, "رمزعبور باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: z.string().min(6, "تکرار رمزعبور الزامی است"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "رمزعبور و تکرار آن یکسان نیستند",
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.string().min(1, "ایمیل الزامی است").email("ایمیل معتبر نیست"),
  password: z.string().min(6, "رمزعبور باید حداقل ۶ کاراکتر باشد"),
});

export type SignInFormValues = z.infer<typeof signInSchema>;
