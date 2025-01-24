"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { Streamer as StreamerType, Streamers } from "@/data/streamers";
import {
	SelectionAll,
	SelectionSlash,
	Broadcast,
	GameController,
	Selection,
	X,
	Spinner,
} from "@phosphor-icons/react/dist/ssr";
import { Streamer } from "./streamer";
import { Button } from "@/components/ui/button";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { useSelectorStore } from "@/stores/selector-store";
import { useMemo, useState } from "react";
import { useFavoritesStore } from "@/stores/favorites-store";
import { cn } from "@/lib/utils";
import { filter } from "@/util/filter";
import { getStreams } from "@/api/get-streams";
import { useQuery } from "@tanstack/react-query";
import { matchSorter } from "match-sorter";
import { useSettingsStore } from "@/stores/settings-store";

export type StreamType = {
	user_login: string;
	user_name: string;
	game_name: string;
	tags: string[];
	thumbnail_url: string;
};

export function StreamersTab() {
	const { streamers, setStreamers } = useSelectorStore();
	const favoriteStreamers = useFavoritesStore((s) => s.streamers);
	const { data: streams, isLoading: isStreamsLoading } = useQuery({
		queryKey: ["streams"],
		queryFn: getStreams,
	});
	const [search, setSearch] = useState("");
	const settings = useSettingsStore();

	const searchedStreamers = matchSorter(Streamers.get(), search, {
		keys: ["display_name", "id", "twitch_login"],
		baseSort: () => 0,
	});

	const children = useMemo(() => {
		const NEW_STREAMERS = (process.env.NEXT_PUBLIC_NEW_STREAMERS ?? "").split(
			"/",
		);

		const result = [];

		const base = (() => {
			if (
				isStreamsLoading ||
				(!settings.settings.hide_offline && !settings.settings.hide_playing)
			)
				return searchedStreamers;

			return searchedStreamers.filter((streamer) => {
				const stream = streams?.find(
					(stream) => stream.user_login === streamer.twitch_login,
				);

				if (settings.settings.hide_offline && !stream) return false;
				if (settings.settings.hide_playing && stream?.game_name !== "Minecraft")
					return false;

				return true;
			});
		})();

		const [newStreamers, r] = filter(base, (streamer) => {
			return NEW_STREAMERS.includes(streamer.id);
		});

		if (newStreamers.length > 0) {
			result.push({
				title: "new",
				items: newStreamers.sort((a, b) =>
					a.display_name.localeCompare(b.display_name),
				),
			});
		}

		const [favorites, rr] = filter(r, (streamer) => {
			return favoriteStreamers.includes(streamer.id);
		});

		if (favorites.length > 0) {
			result.push({
				title: "favorites",
				items: favorites.sort((a, b) =>
					a.display_name.localeCompare(b.display_name),
				),
			});
		}

		if (rr.length > 0) {
			result.push({
				title: "default",
				items: rr,
			});
		}

		return result;
	}, [
		favoriteStreamers,
		searchedStreamers,
		settings.settings,
		isStreamsLoading,
		streams,
	]);

	const { onlineStreamers, playingStreamers } = useMemo(() => {
		if (isStreamsLoading || !streams)
			return {
				onlineStreamers: [],
				playingStreamers: [],
			};

		const onlineStreamers = streams
			.map((stream) => Streamers.get(stream.user_login))
			.filter((streamer): streamer is StreamerType => streamer !== undefined);

		const playingStreamers = streams
			.map((stream) => {
				if (stream.game_name !== "Minecraft") return;

				return Streamers.get(stream.user_login);
			})
			.filter((streamer): streamer is StreamerType => streamer !== undefined);

		return { onlineStreamers, playingStreamers };
	}, [isStreamsLoading, streams]);

	return (
		<TabsContent value="streamers" className="flex flex-col overflow-y-hidden">
			<div className="flex gap-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button innerClassName="h-8 gap-2 px-2" variant="dark">
							Selecionar
							<Selection size="1rem" weight="bold" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem
							onClick={() => {
								setStreamers(Streamers.get().map((s) => s.id));
							}}
						>
							<SelectionAll size="1rem" weight="bold" />
							Todos
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => {
								setStreamers([]);
							}}
						>
							<SelectionSlash size="1rem" weight="bold" />
							Nenhum
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => {
								setStreamers(onlineStreamers.map((s) => s.id));
							}}
						>
							<Broadcast size="1rem" weight="bold" />
							Todos online
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => {
								setStreamers(playingStreamers.map((s) => s.id));
							}}
						>
							<GameController size="1rem" weight="bold" />
							Todos jogando
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<div className="flex flex-1">
					<Input
						containerClassName="flex-1"
						placeholder="Buscar por streamers"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					<Button
						innerClassName="size-8 px-0"
						variant="destructive"
						onClick={() => {
							setSearch("");
						}}
					>
						<X size="1rem" weight="bold" />
					</Button>
				</div>
			</div>
			{isStreamsLoading && (
				<div className="text-muted-foreground flex w-full items-center justify-center gap-2 mt-2">
					<Spinner size="1.15rem" weight="bold" className="animate-spin" />
					Buscando informações
				</div>
			)}
			<ToggleGroup
				type="multiple"
				className="h-full mt-2 overflow-y-scroll p-1 pr-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted divide-y-2 divide-muted"
				value={streamers}
				onValueChange={setStreamers}
			>
				{children.map((section, i) => {
					return (
						<div
							key={section.title}
							className={cn(
								"grid grid-cols-2-max sm:grid-cols-3-max lg:grid-cols-4-max gap-2",
								i === 0 ? "pb-4" : "py-4",
							)}
						>
							{section.title === "new" && (
								<p className="col-span-full text-primary font-bold text-center ">
									{section.items.length === 1 && "Novo participante"}
									{section.items.length > 1 && "Novos participantes"}
								</p>
							)}
							{section.items.map((streamer) => {
								const stream = streams?.find(
									(stream) => stream.user_login === streamer.twitch_login,
								);

								return (
									<Streamer
										key={streamer.id}
										streamer={streamer}
										stream={stream}
									/>
								);
							})}
						</div>
					);
				})}
			</ToggleGroup>
		</TabsContent>
	);
}
