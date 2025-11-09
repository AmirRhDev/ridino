"use client";

import { Copy } from "lucide-react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

function CarCopy() {
  const pathname = usePathname();

  const copy = () => {
    navigator.clipboard.writeText(window.location.origin + pathname);
    toast.success("لینک آگهی با موفقیت کپی شد");
  };

  return (
    <button className="cursor-pointer group">
      <Copy
        onClick={copy}
        size={25}
        className="text-foreground/60 group-hover:text-foreground/80 duration-75"
      />
    </button>
  );
}

export default CarCopy;
