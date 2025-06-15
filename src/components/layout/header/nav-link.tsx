import Link from "next/link";

interface Props {
  href: string;
  label: string;
  icon?: any;
}

function NavLink({ href, label, icon }: Props) {
  return (
    <Link
      className="text-base duration-100 text-secondary hover:text-secondary/70 font-semibold flex items-center gap-1"
      href={href}
    >
      {icon}
      {label}
    </Link>
  );
}

export default NavLink;
