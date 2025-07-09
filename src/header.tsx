import { cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

// 根容器
const headerVariants = cva("flex justify-between items-center");

// logo 容器
const logoContainerVariants = cva("flex items-center gap-4", {
  variants: {
    clickable: {
      true: "cursor-pointer",
      false: "",
    },
  },
  defaultVariants: {
    clickable: false,
  },
});

// logo 图片
const logoImgVariants = cva("h-6"); 

// 标题
const titleVariants = cva('tracking-[1px] font-medium text-[20px]');

type HeaderProps = {
    logoImg?: string;
    title: string;
    logoClickable?: boolean;
    onLogoClicked?: () => void;
    operationArea?: React.ReactNode;
    className?: string; 
};
  
export function Header({
    logoImg,
    title,
    logoClickable = false,
    onLogoClicked,
    operationArea,
    className,
    ...props
}: React.ComponentProps<"div"> & HeaderProps) {
    return (
        <div className={twMerge(clsx(headerVariants(), className))} data-slot="header" {...props}>
            <div
                className={twMerge(logoContainerVariants({ clickable: logoClickable }))}
                onClick={logoClickable ? onLogoClicked : undefined}
                data-slot="header-logo-container"
            >
                {logoImg && (
                    <img src={logoImg} alt={logoImg} className={twMerge(logoImgVariants())} data-slot="header-logo" />
                )}
                <div className={twMerge(titleVariants())} data-slot="header-title">
                    {title}
                </div>
            </div>
            <div data-slot="header-operation">
                {operationArea}
            </div>
        </div>
    );
}
  