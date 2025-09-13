"use client";
import { Button } from "@/components/shadcnUi/button";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Lottie = dynamic(() => import("@/components/common/404"), { ssr: false });

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="space-y-4 text-center">
      <Lottie />
      <h1>صفحه مورد نظر شما یافت نشد!</h1>
      <Button variant={"outline"} onClick={() => router.back()}>
        بازگشت
      </Button>
    </div>
  );
}
