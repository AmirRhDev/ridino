import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

function NavLink({ href, label }: Props) {
  return (
    <Link
      className="text-sm duration-100 text-zinc-900/80 hover:text-zinc-900 font-semibold"
      href={href}
    >
      {label}
    </Link>
  );
}

export default NavLink;
