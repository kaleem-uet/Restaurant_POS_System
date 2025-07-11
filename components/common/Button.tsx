"use client";

import React, { use } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  fullWidth?: boolean;
  goTo?: string;
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  label,
  fullWidth = true,
  variant = "primary",
  className,
  children,
  goTo,
  ...props
}) => {
  const baseStyles =
    "rounded-lg py-3 text-lg font-bold transition duration-200";

  const variantStyles: Record<string, string> = {
    primary: "bg-yellow-400 text-gray-900 hover:bg-yellow-300 mt-3",
    secondary: "bg-gray-700 text-white hover:bg-gray-600 mt-3",
    danger: "bg-red-500 text-white hover:bg-red-400 mt-3 ",
  };
  const router = useRouter();
  return (
    <button
      className={clsx(
        baseStyles,
        fullWidth && "w-full",
        variantStyles[variant],
        className
      )}
      {...props}
      onClick={() => {
        if (goTo) {
          router.push(goTo);
        }
      }}
    >
      {label || children}
    </button>
  );
};

export default Button;
