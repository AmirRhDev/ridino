import { Car, Info, Search } from "lucide-react";
import NavLink from "./nav-link";

function NavList() {
  return (
    <nav className="hidden md:flex items-center gap-9">
      <NavLink href="/" label="خودرو ها" icon={<Car size={20} />} />
      <NavLink href="/search" label="جستوجو" icon={<Search size={20} />} />
      <NavLink href="/about" label="درباره رایدینو" icon={<Info size={20} />} />
    </nav>
  );
}

export default NavList;
