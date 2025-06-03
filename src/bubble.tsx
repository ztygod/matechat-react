import { type VariantProps, cva } from "class-variance-authority";
import "./tailwind.css";

import clsx from "clsx";
import type React from "react";
import { twMerge } from "tailwind-merge";
import type { MessageParam } from "./utils";

const bubbleVariants = cva(
  "flex flex-col gap-1 justify-center rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-200 text-gray-800",
  {
    variants: {
      size: {
        default: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
        md: "px-4 py-2 text-base",
        sm: "px-3 py-1 text-sm",
        xs: "px-2 py-1 text-xs",
      },
      align: {
        left: "self-start",
        center: "self-center",
        right: "self-end",
      },
    },
    defaultVariants: {
      size: "default",
      align: "left",
    },
  },
);

export interface BubbleProps {
  text: string;
  copy?: boolean;
  onCopy?: () => void;
}

export function Bubble({
  className,
  text,
  size,
  align,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> &
  BubbleProps) {
  return (
    <div
      data-slot="bubble"
      className={twMerge(clsx(bubbleVariants({ className, size, align })))}
      {...props}
    >
      {text}
    </div>
  );
}

export interface AvatarProps {
  text?: string;
  imageUrl?: string;
}

export function Avatar({
  className,
  text,
  imageUrl,
  ...props
}: React.ComponentProps<"div"> & AvatarProps) {
  return (
    <div
      data-slot="avatar"
      className={twMerge(
        clsx(
          "flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-800 dark:text-gray-200 text-gray-800",
          className,
        ),
      )}
      {...props}
    >
      {imageUrl ? (
        <img
          className="w-full h-full object-cover rounded-full"
          src={imageUrl}
          alt={text}
        />
      ) : (
        text
      )}
    </div>
  );
}

export interface BubbleListProps extends React.ComponentProps<"div"> {
  messages: MessageParam[];
  footer: React.ReactNode;
}

export function BubbleList({ className, footer, ...props }: BubbleListProps) {
  const { messages } = props;

  return (
    <div
      data-slot="bubble-list"
      className={twMerge(
        clsx("flex flex-col overflow-y-auto flex-1 gap-4", className),
      )}
      {...props}
    >
      <div data-slot="bubble-items" className="flex flex-col flex-1 gap-4">
        {messages.map((message, index) => (
          <div
            key={message.content.slice(0, 8) + index.toString()}
            data-slot="bubble-item"
            className={twMerge(
              clsx(
                "flex items-start gap-2",
                message.align === "right" && "flex-row-reverse",
              ),
            )}
          >
            {message.avatar && (
              <Avatar
                className="flex-shrink-0"
                {...(typeof message.avatar === "string"
                  ? { imageUrl: message.avatar }
                  : message.avatar)}
              />
            )}
            <Bubble text={message.content} align={message.align} />
          </div>
        ))}
      </div>
      {footer && (
        <div
          data-slot="bubble-footer"
          className="flex items-center justify-center mt-4"
        >
          {footer}
        </div>
      )}
    </div>
  );
}
