import { Streamers } from "@/data/streamers";
import Link from "next/link";
import ReactPlayer from "react-player/twitch";

type StreamProps = {
	stream: {
		user_login: string;
		user_name: string;
		game_name: string;
		tags: string[];
		thumbnail_url: string;
	};
};

export function Stream(props: StreamProps) {
	const streamer = Streamers.get(props.stream.user_login);

	if (!streamer) return null;

	return (
		<div className="border-2 border-border animate-in slide-in-from-bottom-16 fade-in-0 duration-500">
			<div className="aspect-video bg-black">
				<ReactPlayer
					className="!size-full"
					url={`https://player.twitch.tv/${streamer.twitch_login}`}
					config={{
						options: {
							theme: "dark",
						},
					}}
					muted
					playing
					controls
				/>
			</div>
			<article className="bg-m-dark-background border-t-2 border-border text-white">
				<div className="flex items-center justify-between px-5 py-3 border-b-4 border-[#323334] gap-5 shine">
					<Link
						href={`#${streamer.id}`}
						className="flex min-w-max gap-2 items-center hover:text-primary transition-colors"
					>
						<picture className="relative border-2 border-border box-content">
							<div className="shine absolute inset-0" />
							<img
								src={streamer.thumbnail_url}
								alt="Scott"
								className="h-8 w-8"
							/>
						</picture>
						<span>{streamer.display_name}</span>
					</Link>
					<div className="flex gap-4">
						<span className="flex-1 text-white/75 overflow-x-hidden line-clamp-1 break-all">
							{props.stream.game_name}
						</span>
						<div className="flex gap-2">
							{props.stream.tags.map((tag, i) => {
								if (i > 2) return;

								return (
									<span
										className="bg-secondary dark:bg-secondary/50 shine border-2 border-border px-2"
										key={tag}
									>
										{tag}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</article>
		</div>
	);
}
