import { LinkButton } from "@/components/ui/button";
import { Streamer } from "@/data/streamers";
import {
	Broadcast,
	TwitchLogo,
	TwitterLogo,
	YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { CSSProperties } from "react";

type PlayerProps = {
	player: Streamer & {
		is_live: boolean;
	};
};

export function Player(props: PlayerProps) {
	return (
		<article
			className="relative hover:scale-105 hover:z-20 transition-all ease-out-back bg-background border-2 border-primary sm:w-min dark:border-black"
			// style={
			// 	{
			// 		"--rotate": `${Math.floor(Math.random() * 13) - 6}deg`,
			// 	} as CSSProperties
			// }
			id={props.player.id}
		>
			{props.player.is_live && (
				<span className="absolute top-2 left-2 p-1.5 bg-destructive text-white z-10 text-sm border-2 border-border shine">
					<Broadcast size="1.25rem" />
				</span>
			)}
			<picture className="relative w-full block aspect-square">
				<div className="shine absolute inset-0" />
				<img
					src={props.player.thumbnail_url}
					alt={`Imagem de ${props.player.display_name}`}
					className="aspect-square"
				/>
				<div className="absolute bottom-2 right-2 w-10 aspect-[110/128] transition-all">
					<img
						src={
							props.player.skin_id
								? `https://s.namemc.com/2d/skin/face.png?id=${props.player.skin_id}&scale=32`
								: `https://api.mineatar.io/head/${props.player.minecraft_uuid}?overlay&scale=8`
						}
						alt={`Skin de ${props.player.display_name}`}
						className="relative z-10 m-auto"
					/>
					<img
						src={
							props.player.skin_id
								? `https://s.namemc.com/2d/skin/face.png?id=${props.player.skin_id}&scale=32`
								: `https://api.mineatar.io/head/${props.player.minecraft_uuid}?overlay&scale=8`
						}
						alt={`Skin de ${props.player.display_name}`}
						className="absolute scale-[1.15] transition-transform inset-0 brightness-0 invert"
					/>
				</div>
			</picture>
			<footer className="flex flex-col py-2 px-2 bg-primary/25 dark:bg-primary/15 gap-2 w-full sm:w-max">
				<p className="text-lg font-semibold leading-6 px-1">
					{props.player.display_name}
				</p>
				<div className="grid grid-cols-3 sm:grid-cols-[2rem_2rem_auto] gap-2">
					<LinkButton
						size="icon"
						data-disabled={props.player.youtube_login === null}
						variant="unset"
						className="bg-red-500 hover:bg-red-500/90 text-red-50"
						innerClassName="w-full border-red-500"
						target="_blank"
						href={`https://youtube.com/@${props.player.youtube_login}`}
					>
						<YoutubeLogo size="1rem" weight="bold" />
					</LinkButton>
					<LinkButton
						size="icon"
						data-disabled={props.player.twitter_login === null}
						variant="unset"
						className="bg-sky-500 hover:bg-sky-500/90 text-sky-50"
						innerClassName="w-full border-sky-500"
						target="_blank"
						href={`https://twitter.com/${props.player.twitter_login}`}
					>
						<TwitterLogo size="1rem" weight="bold" />
					</LinkButton>
					<LinkButton
						data-disabled={props.player.twitch_login === null}
						variant="unset"
						className="bg-purple-500 hover:bg-purple-500/90 text-purple-50"
						innerClassName="w-full sm:w-auto border-purple-500 flex items-center gap-2 px-0 sm:px-4"
						target="_blank"
						href={`https://twitch.tv/${props.player.twitch_login}`}
					>
						<span className="hidden md:inline">Twitch</span>
						<TwitchLogo size="1rem" weight="bold" />
					</LinkButton>
				</div>
			</footer>
		</article>
	);
}
