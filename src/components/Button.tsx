
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  icon = false,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative overflow-hidden rounded-full font-medium transition-all duration-300 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-brown-dark via-brown to-brown-light text-sand-light hover:shadow-lg hover:shadow-brown/20 border border-brown/30",
    secondary: "bg-sand-light text-brown border border-brown/20 hover:border-brown/50",
    outline: "border-2 border-brown text-brown hover:bg-brown/10"
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-1.5",
    md: "text-base px-6 py-2.5",
    lg: "text-lg px-8 py-3"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        icon && "group",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
      )}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
      </span>
    </button>
  );
};

export default Button;
