import * as Icons from "lucide-react";
import React, { ReactNode } from "react";

export interface ButtonProps {
  title?: string;
  onClick?: () => void;
  link?: string;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  textClassName?: string;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode | keyof typeof Icons;
  iconRight?: React.ReactNode | keyof typeof Icons;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface IconProps {
  name: keyof typeof Icons;
  size?: "sm" | "md" | "lg" | number;
  color?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
  hoverEffect?: boolean;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  secureToggle?: boolean;
  containerClassName?: string;
  inputClassName?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}
