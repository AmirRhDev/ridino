import Image from "next/image";

import logo from "../../../../public/logo.png";
import Link from "next/link";

function SidebarLogo() {
  return (
    <div className="overflow-hidden">
      <Link href="/">
        <Image className="scale-200" height={35} src={logo} alt="ridino logo" />
      </Link>
    </div>
  );
}

export default SidebarLogo;
