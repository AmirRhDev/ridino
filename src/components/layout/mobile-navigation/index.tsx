import { Car, Search } from "lucide-react";
import MobileNavigationLink from "./mobile-navigation-link";

function MobileNavigation() {
  return (
    <nav className="fixed bottom-0 right-0 z-50 w-full grid grid-cols-3 items-center border-t border-foreground/50 bg-background py-2 md:hidden">
      <MobileNavigationLink
        href="/"
        label="خودرو ها"
        icon={<Car size={20} />}
      />

      <MobileNavigationLink
        href="/search"
        label="جستوجو"
        icon={<Search size={20} />}
      />

      <MobileNavigationLink href="/about" label="درباره رایدینو" />
    </nav>
  );
}

export default MobileNavigation;
