"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormLabel } from "./form";
import { Control, FieldValues } from "react-hook-form";

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			// "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
			// "border-2 border-black shine bg-[#8c8d90] h-6 w-[3.25rem] relative focus-visible:outline-none data-[state=checked]:bg-primary",
			"cursor-pointer shine border-2 border-black min-w-[3.75rem] w-[3.75rem] h-7 bg-[#8c8d90] relative focus-visible:outline-none data-[state=checked]:bg-primary",
			"after:block after:size-3 after:checkbox-off-icon after:absolute after:top-1.5 after:right-2",
			"before:block before:size-3 before:checkbox-on-icon before:absolute before:top-1.5 before:left-2",
			className,
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			forceMount
			className={cn(
				// "absolute data-[state=unchecked]:-left-0.5 data-[state=checked]:-right-0.5 -bottom-0.5 border-2 border-black",
				"size-8 border-2 border-black absolute data-[state=unchecked]:-left-0.5 data-[state=checked]:-right-0.5 -bottom-0.5 z-10",
				"before:bg-[#d0d1d4] before:shine before:block before:size-full before:border-b-4 before:border-[#58585a]",
			)}
		/>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

const CheckboxInput = ({
	id,
	children,
	className,
	control,
	name,
	...props
}: React.DetailedHTMLProps<
	React.LabelHTMLAttributes<HTMLLabelElement>,
	HTMLLabelElement
> & {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: any;
	name: string;
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel
						className={cn(
							"pl-3 leading-5 has-[[data-state='checked']]:text-primary flex items-center justify-between w-full cursor-pointer select-none",
							className,
						)}
					>
						{children}
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormControl>
					</FormLabel>
				</FormItem>
			)}
		/>
	);
};

export { Checkbox, CheckboxInput };
