import { type VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import type * as React from "react";
import { twMerge } from "tailwind-merge";
import "./tailwind.css";

const buttonVariants = cva(
  "inline-flex px-8 items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue hover:bg-blue/90",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return (
    <button
      data-slot="button"
      className={twMerge(clsx(buttonVariants({ variant, className })))}
      {...props}
    />
  );
}

export { Button };
