import { Button } from "@/components/shadcnUi/button";
import NavList from "./nav-list";
import SidebarLogo from "./sidebar-logo";
import ToggleTheme from "@/components/common/toggle-theme";
import AuthSection from "./auth-section";

function Header() {
  return (
    <header className="sticky top-0 z-[999] bg-background/50 px-8 sm:px-11 py-4 flex items-center justify-between border-b border-border/70 backdrop-blur-lg">
      <nav className="flex items-center gap-10">
        <SidebarLogo />
        <NavList />
      </nav>

      <div className="flex items-center gap-2">
        <ToggleTheme />

        <AuthSection />
      </div>
    </header>
  );
}

export default Header;
