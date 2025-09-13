import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  label: string;
  icon?: ReactNode;
}

function NavLink({ href, label, icon }: Props) {
  return (
    <Link
      className="text-base duration-100 text-foreground hover:text-foreground/70 font-semibold flex items-center gap-1"
      href={href}
    >
      {icon}
      {label}
    </Link>
  );
}

export default NavLink;
