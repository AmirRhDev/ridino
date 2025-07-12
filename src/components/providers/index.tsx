"use client";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

import DirectionProvider from "@/components/providers/direction.provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { AuthProvider } from "@/components/providers/auth-provider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableColorScheme>
      <DirectionProvider dir="rtl">
        <QueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryProvider>
      </DirectionProvider>
    </ThemeProvider>
  );
}
