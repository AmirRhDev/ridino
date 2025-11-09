"use client";

import LogoutButton from "@/components/common/logout-button";
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

import { LogIn, User } from "lucide-react";
import Link from "next/link";

function AuthSection() {
  const { user } = useAuth();

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
              <DropdownMenuItem asChild>
                <Link href="/new">افزودن خودرو</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/my-cars">پنل کاربری</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <LogoutButton className="w-full" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

export default AuthSection;
