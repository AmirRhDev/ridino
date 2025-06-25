"use client";
import type { PropsWithChildren } from "react";
import DirectionProvider from "./direction.provider";
import { QueryProvider } from "./query-provider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    // <ThemeProvider attribute="class" enableColorScheme defaultTheme="light">
    <DirectionProvider dir="rtl">
      <QueryProvider>{children}</QueryProvider>
    </DirectionProvider>
    // </ThemeProvider>
  );
}
