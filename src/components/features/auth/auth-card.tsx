import { ReactNode } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/shadcnUi/card";

import authImage from "../../../../public/bugatti.jpg";

interface AuthCardProps {
  children: ReactNode;
}
function AuthCard({ children }: AuthCardProps) {
  return (
    <div className={"flex flex-col gap-6"}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          {children}

          <div className="bg-muted relative hidden md:block">
            <Image
              src={authImage}
              alt="Sign up ridino"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AuthCard;
