import { Button } from "@/components/shadcnUi/button";
import NavList from "./nav-list";
import SidebarLogo from "./sidebar-logo";

function Header() {
  return (
    <header className="sticky top-0 bg-background px-11 py-5 flex items-center justif-between">
      <nav className="flex items-center gap-8">
        <SidebarLogo />
        <NavList />
        <Button>Button</Button>
      </nav>
    </header>
  );
}

export default Header;
