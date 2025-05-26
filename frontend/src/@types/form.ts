import { type InputHTMLAttributes } from "react";

export interface InputWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: "text" | "date" | "email";
  className?: string;
  disabled?: boolean;
  name?: string;
}