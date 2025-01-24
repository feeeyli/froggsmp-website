import type { Streamer as StreamerType } from "@/data/streamers";
import { ToggleGroupItem } from "@/components/ui/toggle-group";
import { Image } from "@/components/image";
import { FavoriteButton } from "../favorite-button";
import { StreamType } from "./streamers-tab";
import { ExclamationMark, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { useSettingsStore } from "@/stores/settings-store";

function NotPlayerBadge() {
	return (
		<div className="bg-amber-500 text-border border-2 border-border shine absolute top-1 right-1 z-10 p-0.5">
			<ExclamationMark size="1.25rem" weight="bold" />
		</div>
	);
}

function YoutubeBadge() {
	return (
		<div className="bg-red-500 text-border border-2 border-border shine absolute top-1 right-1 z-10 p-0.5">
			<YoutubeLogo size="1.25rem" weight="bold" />
		</div>
	);
}

type StreamerProps = {
	streamer: StreamerType;
	stream?: StreamType;
};

export function Streamer(props: StreamerProps) {
	const settings = useSettingsStore();
	const youtubeStreamer = props.streamer.youtube_channel_id !== undefined;

	return (
		<div className="relative">
			<FavoriteButton id={props.streamer.id} />
			<ToggleGroupItem
				value={props.streamer.id}
				innerClassName="flex-col relative"
			>
				<div
					className="relative max-w-32 max-h-32 size-32 data-[offline=true]:grayscale"
					data-offline={
						!youtubeStreamer &&
						settings.settings.show_offline_status &&
						!props.stream
					}
				>
					{settings.settings.show_playing_status &&
						props.stream &&
						props.stream.game_name !== "Minecraft" && <NotPlayerBadge />}
					{youtubeStreamer && <YoutubeBadge />}
					<Image
						src={props.streamer.thumbnail_url}
						alt={`Imagem de ${props.streamer.display_name}`}
						containerClassName="size-full"
					/>
					<div className="absolute bottom-2 right-2 w-8">
						<Image
							src={
								props.streamer.skin_id
									? `https://s.namemc.com/2d/skin/face.png?id=${props.streamer.skin_id}&scale=32`
									: `https://api.mineatar.io/face/${props.streamer.minecraft_uuid}?overlay`
							}
							alt={`Skin de ${props.streamer.display_name}`}
						/>
					</div>
				</div>
				<span>{props.streamer.display_name}</span>
			</ToggleGroupItem>
		</div>
	);
}
