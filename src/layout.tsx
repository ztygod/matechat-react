import { cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

// Sender
type LayoutSenderProps = {
  children: React.ReactNode;
};

// Header
type LayoutHeaderProps = {
    children: React.ReactNode;
};

const headerVariants = cva('flex-none min-h-[40px]');

// Content
type LayoutContentProps = {
    children: React.ReactNode;
}

const contentVariants = cva('flex-auto min-h-0');

// Aside
type LayoutAsideProps = {
    children: React.ReactNode;
}
const asideVariants = cva('flex-row');

// Layout
type LayoutProps = {
    children: React.ReactNode;
}

const layoutVariants = cva('flex flex-auto flex-col');


export function LayoutSender({ children, ...props }: React.ComponentProps<"div"> & LayoutSenderProps) {
    return (
        <div data-slot="layout-sender" {...props}>
            {children}
        </div>
    );
}


export function LayoutHeader({children, ...props}: React.ComponentProps<"div"> & LayoutHeaderProps){
    return (
        <div data-slot="layout-header" className={twMerge(headerVariants())} {...props}>
            {children}
        </div>
    )
}

export function LayoutContent({children, ...props}: React.ComponentProps<"div"> & LayoutContentProps) {
    return (
        <div data-slot="layout-content" className={twMerge(contentVariants())} {...props}>
            {children}
        </div>
    )
}

export function LayoutAside({children, ...props}: React.ComponentProps<"div"> & LayoutAsideProps) {
    return (
        <div data-slot="layout-aside" className={twMerge(asideVariants())} {...props}>
            {children}
        </div>
    )
}

export function Layout({children, ...props}: React.ComponentProps<"div"> & LayoutProps){
    return (
        <div data-slot="layout" className={twMerge(layoutVariants())} {...props}>
            {children}
        </div>
    )
}

