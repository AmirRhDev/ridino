"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/shadcnUi/button";
import TextField from "@/components/common/text-field";
import AuthCard from "@/components/features/auth/auth-card";

import { SignUpFormValues, signUpSchema } from "@/schemas/authFormSchema";
import { signUpWithProfile, supabaseSignUp } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

function SignUp() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setLoading(true);
    try {
      await signUpWithProfile(
        data.email,
        data.password,
        data.firstName,
        data.lastName,
      );

      toast.success("ثبت نام با موفقیت انجام شد");
      router.replace("/");
    } catch (err: any) {
      toast.error(
        err.message === "User already registered"
          ? "کاربر از قبل ثبت نام کرده‌ است"
          : err.message || "خطایی رخ داد",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthCard>
      <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">خوش آمدید</h1>
            <p className="text-muted-foreground text-balance">
              یک حساب کاربری برای خود بسازید
            </p>
          </div>

          <TextField
            label="نام"
            placeholder="نام خود را وارد کنید"
            {...register("firstName")}
            error={errors.firstName?.message}
          />

          <TextField
            label="نام خانوادگی"
            placeholder="نام خانوادگی خود را وارد کنید"
            {...register("lastName")}
            error={errors.lastName?.message}
          />

          <TextField
            label="ایمیل"
            placeholder="m@example.com"
            dir="ltr"
            {...register("email")}
            error={errors.email?.message}
          />

          <TextField
            label="رمزعبور"
            type="password"
            {...register("password")}
            error={errors.password?.message}
            extraOption={
              <Link
                href="#"
                className="mr-auto text-sm underline-offset-2 hover:underline"
              >
                رمز خود را فراموش کردید؟
              </Link>
            }
          />

          <TextField
            label="تکرار رمزعبور"
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <LoaderCircle className="size-5 animate-spin " />
                <span>در حال ثبت نام</span>
              </>
            ) : (
              <span>ثبت نام</span>
            )}
          </Button>

          <div className="text-center text-sm">
            حساب کاربری دارید؟{" "}
            <Link href="/sign-in" className="underline underline-offset-4">
              وارد شوید
            </Link>
          </div>
        </div>
      </form>
    </AuthCard>
  );
}

export default SignUp;
