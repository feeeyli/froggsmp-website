"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
	"h-max border-2 border-black block leading-6 cursor-pointer text-white outline-none group/button disabled:opacity-50 disabled:pointer-events-none data-[state=on]:ring-2 ring-primary transition-shadow",
	{
		variants: {
			variant: {
				default: "bg-m-dark-background text-white",
				unset: "",
			},
			offset: {
				true: "hover:mt-[2px] data-[state=on]:!mt-1 active:mt-1",
			},
		},
		defaultVariants: {
			variant: "default",
			offset: true,
		},
	},
);

const toggleInnerVariants = cva(
	"border-b-4 border-[#323334] flex items-center justify-center shine box-content group-hover/button:border-b-2 group-active/button:border-b-0 group-data-[state=on]/button:border-b-0",
	{
		variants: {
			size: {
				default: "p-2",
				icon: "size-7",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
);

const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
		VariantProps<typeof toggleVariants>
>(({ className, variant, ...props }, ref) => (
	<TogglePrimitive.Root
		ref={ref}
		className={cn(toggleVariants({ variant, className }))}
		{...props}
	/>
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants, toggleInnerVariants };
