import { cx } from "class-variance-authority";
import type { ClassValue } from "class-variance-authority/types";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs));
}

export function stripDatePrefix(id: string) {
  const match = id.match(/^\d{4}[-/.]\d{2}[-/.]\d{2}[-](.+)$/);
  return match ? match[1] : id;
}