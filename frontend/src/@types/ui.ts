import type { ReactNode } from "react";

export interface CustomButtonProps {
  children: ReactNode;
  type: "submit" | "button" | "reset"
}