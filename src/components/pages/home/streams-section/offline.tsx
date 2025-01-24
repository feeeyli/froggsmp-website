import { VideoCameraSlash } from "@phosphor-icons/react/dist/ssr";

export function Offline() {
	return (
		<div className="border-2 border-border">
			<div className="aspect-video w-full bg-primary/25 flex items-center justify-center">
				<VideoCameraSlash
					size={64}
					className="opacity-35 text-border/50 dark:text-border"
				/>
			</div>
			<article className="bg-m-dark-background border-t-2 border-border text-white">
				<div className="flex items-center justify-between px-5 py-3 border-b-4 border-[#323334] gap-5 shine">
					Nenhum streamer em live agora <span className="text-xs">🐸</span>
				</div>
			</article>
		</div>
	);
}
