import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "@/lib/dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(isoDate: string): string {
  return dayjs(isoDate).fromNow();
}

export function formatPrice(
  value: number | string,
  lang: "fa-IR" | "en-US" = "fa-IR",
): string {
  if (typeof value === "number") {
    return value.toLocaleString(lang);
  }

  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function stripCommas(value: string) {
  return value.replace(/,/g, "");
}
