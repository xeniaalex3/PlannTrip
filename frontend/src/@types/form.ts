import { type InputHTMLAttributes } from "react";

export interface InputWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: "text" | "date";
  className?: string;
}