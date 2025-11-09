"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

function DashboardNavlink({ href, label }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "text-foreground font-semibold text-lg hover:bg-secondary p-2 rounded-md shrink-0",
        { "bg-secondary": pathname === href },
      )}
    >
      {label}
    </Link>
  );
}

export default DashboardNavlink;
