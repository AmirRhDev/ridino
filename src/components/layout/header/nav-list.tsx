import { Car, Search } from "lucide-react";
import NavLink from "./nav-link";

function NavList() {
  return (
    <nav className="flex items-center gap-9">
      <NavLink href="/" label="ماشین ها" icon={<Car size={20} />} />
      <NavLink href="/search" label="جستوجو" icon={<Search size={20} />} />
      <NavLink href="/about" label="درباره رایدینو" />
    </nav>
  );
}

export default NavList;
