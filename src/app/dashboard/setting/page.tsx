"use client";

import ToggleTheme from "@/components/common/toggle-theme";
import { Button } from "@/components/shadcnUi/button";
import { signOutUser } from "@/lib/auth";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function Setting() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);

    try {
      await signOutUser();

      router.replace("/");
    } catch (err: any) {
      console.error("Sign out error:", err);
      toast.error(err ?? "خطایی رخ داده است");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl text-foreground">تم اپلیکیشن</h2>
        <ToggleTheme withLabel />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl text-foreground">
          خروج از حساب کاربری
        </h2>
        <Button
          onClick={handleSignOut}
          disabled={loading}
          variant="destructive"
          className="w-24"
        >
          {loading ? (
            <>
              <LoaderCircle className="size-5 animate-spin " />
              <span>در حال خروج...</span>
            </>
          ) : (
            <span>خروج</span>
          )}
        </Button>
      </div>
    </div>
  );
}

export default Setting;
