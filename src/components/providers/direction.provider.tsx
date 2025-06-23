"use client";

import { ReactNode } from "react";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";

interface DirectionProviderProps {
  children: ReactNode;
  dir: "rtl" | "ltr";
}

function DirectionProvider({ children, dir }: DirectionProviderProps) {
  return <RadixDirectionProvider dir={dir}>{children}</RadixDirectionProvider>;
}

export default DirectionProvider;
