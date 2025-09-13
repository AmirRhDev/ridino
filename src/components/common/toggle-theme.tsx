"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/shadcnUi/button";

interface Props {
  withLabel?: boolean;
}

export default function ToggleTheme({ withLabel }: Props) {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      size={withLabel ? "default" : "icon"}
      variant="outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
      {withLabel && (isDark ? "تم تاریک" : "تم روشن")}
      <span className="sr-only">تغییر تم</span>
    </Button>
  );
}
