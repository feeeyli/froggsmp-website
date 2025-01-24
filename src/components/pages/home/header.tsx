import { Button, LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TelevisionSimple } from "@phosphor-icons/react/dist/ssr";
import { useMediaQuery } from "usehooks-ts";

export function Header() {
	// const mobile = useMediaQuery("(max-width: 640px)");

	// if (mobile)
	// 	return (
	// 		<header className="sticky top-0 flex flex-col py-4 px-6 bg-background gap-4 z-30">
	// 			<div className="flex items-center justify-between">
	// 				<img src="/froggsmp-logo.png" alt="FroggSMP" className="h-10" />
	// 				<LinkButton href="/multi" innerClassName="gap-2">
	// 					MultiFrogg <TelevisionSimple size="1rem" weight="bold" />
	// 				</LinkButton>
	// 			</div>
	// 		</header>
	// 	);

	return (
		<header className="items-center sticky top-0 flex justify-center md:justify-between py-4 px-6 bg-background gap-8 z-30">
			<img src="/froggsmp-logo.png" alt="FroggSMP" className="h-10" />
			<div
				className={cn(
					"md:flex hidden flex-wrap justify-center",
					"[&>a]:px-4 [&>a]:text-secondary dark:[&>a]:text-primary hover:[&>a]:underline [&>a]:underline-offset-[6px]",
					"[&>a]:animate-in [&>a]:fade-in [&>a]:slide-in-from-bottom-4",
				)}
			>
				<a className="delay-50" href="#lives">
					Lives
				</a>
				<a className="delay-100" href="#participantes">
					Participantes
				</a>
				<a className="delay-150" href="#eventos">
					Eventos
				</a>
				<a className="delay-200" href="#dias">
					Resumos
				</a>
				<a className="delay-250" href="#correio">
					Correio Froggiano
				</a>
			</div>
		</header>
	);
}
