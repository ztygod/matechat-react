import "./tailwind.css";

import { type VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import type * as React from "react";
import { twMerge } from "tailwind-merge";

const promptVariants = cva(
  "flex flex-col gap-1 justify-center rounded-md border border-gray-300 shadow-sm",
  {
    variants: {
      size: {
        default: "px-4 py-2",
        lg: "px-6 py-4 text-lg",
        md: "px-4 py-2 text-base",
        sm: "px-2 py-1 text-sm",
        xs: "px-1 py-0.5 text-xs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export function Prompts({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="prompts"
      className={twMerge(clsx("flex flex-row flex-wrap gap-4", className))}
      {...props}
    />
  );
}

export function Prompt({
  className,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof promptVariants>) {
  return (
    <div
      data-slot="prompt"
      className={twMerge(clsx(promptVariants({ size, className })))}
      {...props}
    />
  );
}

export function PromptTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="prompt-title"
      className={twMerge(
        clsx("inline-flex items-center font-semibold gap-3", className),
      )}
      {...props}
    />
  );
}

export function PromptDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="prompt-description"
      className={twMerge(clsx("text-sm text-gray-500", className))}
      {...props}
    />
  );
}
