import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
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
