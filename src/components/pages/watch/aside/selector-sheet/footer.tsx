"use client";

import { Button } from "@/components/ui/button";
import { SheetFooter } from "@/components/ui/sheet";
import { Streamers, Streamer } from "@/data/streamers";
import { useQueryData } from "@/hooks/use-query-data";
import { useGroupsStore } from "@/stores/groups-store";
import { useSelectorStore } from "@/stores/selector-store";
import { Group } from "@/types/data";
import { TelevisionSimple } from "@phosphor-icons/react/dist/ssr";
import { useMemo } from "react";

export function Footer() {
	const selector = useSelectorStore();
	const { groups: Groups } = useGroupsStore();
	const { streamers, groups } = useMemo(() => {
		return {
			streamers: selector.streamers
				.map(Streamers.get)
				.filter(Boolean) as Streamer[],
			groups: selector.groups
				.map((slug) => Groups.find((g) => g.slug === slug))
				.filter(Boolean) as Group[],
		};
	}, [selector, Groups]);
	const [_, setQuery, { chats }] = useQueryData();

	return (
		<SheetFooter className="items-center">
			<p className="text-foreground text-left flex-1 leading-5 line-clamp-2">
				{streamers.length === 0 &&
					groups.length === 0 &&
					"Nenhum streamer ou grupo selecionado"}
				{(streamers.length > 0 || groups.length > 0) && (
					<>
						<span className="text-muted-foreground">Selecionado(s):</span>{" "}
						{[
							streamers.map((s) => s.display_name),
							groups.map((g) => g.display_name),
						]
							.flat()
							.join(", ")}
					</>
				)}
			</p>
			<Button
				innerClassName="gap-2"
				onClick={() => {
					const queryStreamers = streamers.map((s) => {
						return s.youtube_channel_id ? `yt-${s.id}` : s.id;
					});

					const queryGroups = groups.map((g) => {
						return g.slug;
					});

					setQuery({
						streamers: queryStreamers,
						groups: queryGroups,
						chats: chats.filter((chat) => {
							return streamers.some((s) => {
								return s.twitch_login === chat;
							});
						}),
					});
				}}
			>
				Assistir <TelevisionSimple size="1rem" weight="bold" />
			</Button>
		</SheetFooter>
	);
}
