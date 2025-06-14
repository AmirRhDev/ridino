import NavLink from "./nav-link";

function NavList() {
  return (
    <nav className="flex items-center gap-4">
      <NavLink href="/" label="ماشین ها" />
      <NavLink href="/about" label="درباره رایدینو" />
    </nav>
  );
}

export default NavList;
