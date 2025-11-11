"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/shadcnUi/button";
import { signOutUser } from "@/services/auth.service";

interface Props {
  className?: string;
}

function LogoutButton({ className }: Props) {
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
    <Button
      onClick={handleSignOut}
      disabled={loading}
      variant="destructive"
      className={className}
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
  );
}

export default LogoutButton;
