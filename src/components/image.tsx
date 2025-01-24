import { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ImageProps = {
	containerClassName?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export function Image({ containerClassName, ...props }: ImageProps) {
	return (
		<picture
			className={cn(
				"border-2 border-border relative max-w-full h-auto block align-middle",
				// "border-2 size-full max-w-max max-h-max border-border relative inline-block",
				containerClassName,
			)}
		>
			{/* biome-ignore lint/a11y/useAltText: <explanation> */}
			<img {...props} />
			<div className="absolute inset-0 shine" />
		</picture>
	);
}
