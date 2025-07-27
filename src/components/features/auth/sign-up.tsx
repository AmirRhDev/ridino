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

import { SignUpFormValues, signUpSchema } from "@/schemas/carFormSchema";
import { supabaseSignIn, supabaseSignUp } from "@/lib/auth";
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

  const onSubmit = async ({ email, password }: SignUpFormValues) => {
    setLoading(true);
    try {
      const signUpData = await supabaseSignUp(email, password);

      if (!signUpData.session) {
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (loginError) throw loginError;
      }

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

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              یا با موارد زیر ادامه دهید
            </span>
          </div>

          <div>
            <Button variant="outline" type="button" className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">Login with Google</span>
            </Button>
          </div>

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
