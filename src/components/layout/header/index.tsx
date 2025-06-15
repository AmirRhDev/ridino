import { Button } from "@/components/shadcnUi/button";
import NavList from "./nav-list";
import SidebarLogo from "./sidebar-logo";
import { LogIn } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 bg-background px-11 py-4 flex items-center justify-between border-b border-zinc-200 backdrop-blur-lg">
      <nav className="flex items-center gap-10">
        <SidebarLogo />
        <NavList />
      </nav>

      <Button size={"lg"}>
        ورود <LogIn />
      </Button>
    </header>
  );
}

export default Header;
