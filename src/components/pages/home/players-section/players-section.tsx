import { Streamers } from "@/data/streamers";
import { Player } from "./player";
import { Stream } from "@/api/get-streams";

type PlayersSectionProps = {
	streams: Stream[];
};

export function PlayersSection(props: PlayersSectionProps) {
	return (
		<section className="px-4 sm:px-8 md:px-20 lg:px-36 py-8" id="participantes">
			<h2 className="animate-in duration-200 slide-in-from-left-6 fade-in-0 delay-100">
				Participantes
			</h2>
			<div className="grid grid-cols-2 sm:flex flex-wrap gap-4 justify-center mt-8">
				{Streamers.get().map((streamer) => {
					return (
						<Player
							key={streamer.display_name}
							player={{
								is_live: props.streams.some(
									(stream) => stream.user_login === streamer.twitch_login,
								),
								...streamer,
							}}
						/>
					);
				})}
			</div>
		</section>
	);
}
