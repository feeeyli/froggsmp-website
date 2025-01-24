import { useTileInfo } from "@/hooks/use-tile-info";
import { useTileControls } from "./tile-context";
import { Streamers } from "@/data/streamers";
import ReactPlayer from "react-player/twitch";
import { TileData, TileType } from "@/types/data";
import { ReactNode } from "react";

function StreamNotFound() {
	return (
		<div className="bg-input size-full p-4 text-center flex flex-col items-center justify-center leading-5 gap-2">
			<span className="text-primary font-bold">Oops</span>
			<span>não foi possível carregar essa live</span>
		</div>
	);
}

function DebugStream({ children }: { children: ReactNode }) {
	return (
		<div className="bg-input size-full p-4 text-center flex flex-col items-center justify-center leading-5 gap-2">
			<p>{children}</p>
		</div>
	);
}

type TilePlayerProps = {
	tile: TileData;
};

export function TilePlayer(props: TilePlayerProps) {
	const { sound, reloadKey } = useTileControls();
	const streamer = Streamers.get(props.tile.id);

	if (process.env.NEXT_PUBLIC_DEBUG === "true")
		return <DebugStream>{JSON.stringify(props.tile, null, 2)}</DebugStream>;

	if (!streamer) return <StreamNotFound />;

	if (props.tile.type === TileType.yt) {
		if (!streamer.youtube_channel_id) return <StreamNotFound />;

		return (
			// biome-ignore lint/a11y/useIframeTitle: <explanation>
			<iframe
				src={`https://www.youtube.com/embed/live_stream?channel=${streamer.youtube_channel_id}`}
				allow="autoplay; fullscreen"
				sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
				width="100%"
				height="100%"
				key={reloadKey}
			/>
		);
	}

	if (props.tile.type === TileType.chat)
		return (
			<iframe
				src={`https://www.twitch.tv/embed/${streamer.twitch_login}/chat?darkpopout&parent=localhost`}
				width="100%"
				height="100%"
				key={reloadKey}
				{...props}
			/>
		);

	return (
		<ReactPlayer
			className="!size-full"
			url={`https://player.twitch.tv/${streamer.twitch_login}`}
			config={{
				options: {
					theme: "dark",
				},
			}}
			muted={!sound}
			playing
			controls
			key={reloadKey}
		/>
	);
}
