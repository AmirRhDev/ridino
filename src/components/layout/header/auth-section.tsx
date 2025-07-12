"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/shadcnUi/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcnUi/dropdown-menu";
import { signOutUser } from "@/lib/auth";

import { LoaderCircle, LogIn, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function AuthSection() {
  const router = useRouter();

  const { user } = useAuth();

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
    <div>
      {!user ? (
        <Link href="/sign-in">
          <Button size={"lg"}>
            ورود <LogIn />
          </Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">
              <User />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-[99999]" align="end">
            <DropdownMenuLabel>حساب کاربری من</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>پروفایل</DropdownMenuItem>
              <DropdownMenuItem>تنظیمات</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Button
                onClick={handleSignOut}
                disabled={loading}
                variant="destructive"
                className="w-full"
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
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

export default AuthSection;
