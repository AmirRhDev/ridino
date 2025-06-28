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
  price: number,
  lang: "fa-IR" | "en-US" = "fa-IR",
): string {
  return price.toLocaleString(lang);
}
