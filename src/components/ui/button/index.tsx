import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "lib/utils";

const buttonVariants = cva(
  "active:scale-95 gap-3 inline-flex whitespace-nowrap items-center justify-center rounded-md transition-all font-semibold focus:ring-2 focus:outline-none disabled:bg-gray-200 disabled:text-gray-400 disabled:border disabled:border-gray-400 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
        secondary:
          "bg-secondary-600 text-white hover:bg-secondary-600 active:bg-secondary-700",
        success:
          "bg-green-400 text-white hover:bg-green-600 active:bg-green-700",
        danger:
          "bg-red-600 text-white hover:bg-red-400 active:bg-red-600 ring-red-400",
        warning:
          "bg-amber-400 text-gray-600 hover:bg-amber-600 active:bg-amber-700",
        info: "bg-blue-400 text-white hover:bg-blue-600 active:bg-blue-700",
        outline:
          "border text-gray-600 active:text-white hover:text-white border-gray-600 hover:bg-gray-600 active:bg-gray-700",
        "outline-primary":
          "border text-primary-600 active:text-white hover:text-white border-primary-600 hover:bg-primary-600 active:bg-primary-700",
        "outline-secondary":
          "border text-secondary-600 active:text-white hover:text-white border-secondary-600 hover:bg-secondary-600 active:bg-secondary-700",
        "outline-success":
          "border text-green-600 active:text-white hover:text-white border-green-600 hover:bg-green-600 active:bg-green-700",
        "outline-danger":
          "border text-red-600 active:text-white hover:text-white border-red-600 hover:bg-red-600 active:bg-red-700",
        "outline-warning":
          "border text-amber-600 active:text-white hover:text-white border-amber-600 hover:bg-amber-600 active:bg-amber-700",
        "outline-info":
          "border text-blue-600 active:text-white hover:text-white border-blue-600 hover:bg-blue-600 active:bg-blue-700",
      },
      size: {
        default: "h-12 py-2 px-4",
        sm: "h-8 px-4 text-xs",
        lg: "h-14 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
