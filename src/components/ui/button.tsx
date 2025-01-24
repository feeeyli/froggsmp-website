import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
	"h-max border-2 border-border block leading-6 cursor-pointer text-white outline-none group/button disabled:opacity-50 disabled:pointer-events-none",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground [&>div]:shine-55",
				light: "bg-m-light-background text-border [&>div]:shine-55",
				dark: "bg-m-dark-background border-black text-white",
				destructive: "bg-destructive text-white",
				unset: "",
			},
			offset: {
				true: "hover:mt-[2px] active:mt-1",
			},
		},
		defaultVariants: {
			variant: "default",
			offset: true,
		},
	},
);

const buttonInnerVariants = cva(
	"border-b-4 flex items-center justify-center shine box-content group-hover/button:border-b-2 group-active/button:border-b-0",
	{
		variants: {
			variant: {
				default: "border-primary",
				light: "border-m-light-shadow",
				dark: "border-m-dark-shadow",
				destructive: "border-m-destructive-shadow",
				unset: "",
			},
			size: {
				default: "h-7 px-4",
				icon: "size-7",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants>,
		VariantProps<typeof buttonInnerVariants> {
	asChild?: boolean;
	innerClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			offset,
			asChild = false,
			children,
			innerClassName,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, offset, className }))}
				ref={ref}
				{...props}
			>
				<div
					className={cn(
						buttonInnerVariants({ variant, size, className: innerClassName }),
					)}
				>
					{children}
				</div>
			</Comp>
		);
	},
);
Button.displayName = "Button";

export interface LinkButtonProps
	extends React.ComponentProps<typeof Link>,
		VariantProps<typeof buttonVariants>,
		VariantProps<typeof buttonInnerVariants> {
	asChild?: boolean;
	innerClassName?: string;
}
const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
	(
		{ className, variant, size, offset, children, innerClassName, ...props },
		ref,
	) => {
		return (
			<Link
				className={cn(buttonVariants({ variant, offset, className }))}
				ref={ref}
				{...props}
			>
				<div
					className={cn(
						buttonInnerVariants({ size, className: innerClassName }),
					)}
				>
					{children}
				</div>
			</Link>
		);
	},
);
LinkButton.displayName = "Link Button";

export { Button, LinkButton, buttonInnerVariants, buttonVariants };
