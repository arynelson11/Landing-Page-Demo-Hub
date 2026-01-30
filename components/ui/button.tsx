import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50",
                    // Base heights/padding based on size
                    {
                        "h-12 px-8 py-2": size === "default", // Default matching previous hardcoded
                        "h-9 rounded-md px-3": size === "sm",
                        "h-11 rounded-md px-8": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    {
                        "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 shadow-sm": variant === "primary",
                        "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80": variant === "secondary",
                        "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900": variant === "outline",
                        "hover:bg-zinc-100 hover:text-zinc-900": variant === "ghost",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
