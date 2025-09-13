import { z } from "zod";

export const profileFormSchema = z.object({
  firstName: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
  lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد"),
  avatar: z.array(z.any()).max(1, "فقط یک تصویر مجاز است").optional(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
