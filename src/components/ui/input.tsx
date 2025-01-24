import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input"> & {
		containerClassName?: string;
	}
>(({ className, containerClassName, type, ...props }, ref) => {
	return (
		<div
			className={cn(
				"flex border-2 border-black relative before:block before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-input-shadow",
				containerClassName,
			)}
		>
			<input
				type={type}
				className={cn(
					"flex bg-input px-3 h-9 text-base leading-5 text-white flex-1 placeholder:text-white/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		</div>
	);
});
Input.displayName = "Input";

export { Input };
