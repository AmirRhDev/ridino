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

import { SignInFormValues, signInSchema } from "@/schemas/authFormSchema";
import { supabaseSignIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

function SignIn() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormValues) => {
    setLoading(true);
    try {
      await supabaseSignIn(data.email, data.password);
      toast.success("ورود با موفقیت انجام شد");

      router.replace("/");
    } catch (err: any) {
      toast.error(err.message ? "اطلاعات وارد شده اشتباه است" : "خطایی رخ داد");
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
              وارد حساب کاربری خور شوید
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

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <LoaderCircle className="size-5 animate-spin " />
                <span>در حال ورود</span>
              </>
            ) : (
              <span>ورود</span>
            )}
          </Button>

          <div className="text-center text-sm">
            حساب کاربری ندارید؟{" "}
            <Link href="/sign-up" className="underline underline-offset-4">
              ثبت نام کنید
            </Link>
          </div>
        </div>
      </form>
    </AuthCard>
  );
}

export default SignIn;
