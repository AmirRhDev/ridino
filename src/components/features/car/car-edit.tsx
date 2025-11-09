"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { Edit } from "lucide-react";
import Link from "next/link";

function CarEdit({ carId, userId }: { carId: string; userId: string }) {
  const { user } = useAuth();

  return (
    userId === user?.id && (
      <Link href={`/edit/${carId}`} className="cursor-pointer group">
        <Edit
          size={25}
          className="text-accent-foreground group-hover:text-accent-foreground/80 duration-75"
        />
      </Link>
    )
  );
}

export default CarEdit;
