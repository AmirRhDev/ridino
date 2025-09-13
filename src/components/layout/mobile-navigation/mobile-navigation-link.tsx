import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  label: string;
  icon?: ReactNode;
}

function MobileNavigationLink({ href, label, icon }: Props) {
  return (
    <Link
      className="text-base duration-100 text-foreground hover:text-foreground/70 font-semibold flex flex-col items-center gap-1"
      href={href}
    >
      {icon}
      {label}
    </Link>
  );
}

export default MobileNavigationLink;
