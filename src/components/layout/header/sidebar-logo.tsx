import Image from "next/image";

import logo from "../../../../public/logo.svg";
import Link from "next/link";

function SidebarLogo() {
  return (
    <div className="overflow-hidden">
      <Link href="/">
        <Image width={90} src={logo} alt="ridino logo" />
      </Link>
    </div>
  );
}

export default SidebarLogo;
