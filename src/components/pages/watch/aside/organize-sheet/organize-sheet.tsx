import { Image } from "@/components/image";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Toggle } from "@/components/ui/toggle";
import { Streamers } from "@/data/streamers";
import { useQueryData } from "@/hooks/use-query-data";
import { useGroupsStore } from "@/stores/groups-store";
import { parseStreamersAsStreamer, parseGroupsAsGroup } from "@/util/parse";
import {
	Chat,
	Eye,
	ListBullets,
	TelevisionSimple,
	X,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export function OrganizeSheet() {
	const { groups: groupsStore } = useGroupsStore();
	const [_, setQuery, query] = useQueryData();

	const [streamers, setStreamers] = useState(
		parseStreamersAsStreamer(query.streamers),
	);
	const [groups, setGroups] = useState(
		parseGroupsAsGroup(query.groups, groupsStore),
	);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" className="border-r-0" innerClassName="size-8">
					<ListBullets size="1.15rem" weight="bold" />
				</Button>
			</SheetTrigger>
			<SheetContent className="text-foreground flex flex-col sm:max-w-2xl">
				<SheetHeader>
					<SheetTitle>Gerenciador</SheetTitle>
					<SheetDescription>
						Gerencie seus streamers, grupos e chats.
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-wrap divide-x-2 divide-muted/25 flex-1">
					<div className="flex flex-1 flex-col items-center pr-3">
						<span>Streamers</span>
						<ul className="w-full divide-y-2 divide-muted">
							{streamers.map((streamer) => {
								return (
									<li key={streamer.id} className="flex items-center gap-3 p-2">
										<Button
											variant="destructive"
											size="icon"
											innerClassName="size-5"
											onClick={() => {
												setStreamers((old) =>
													old.filter((s) => s.id !== streamer.id),
												);
											}}
										>
											<X size="1rem" weight="bold" />
										</Button>
										<Image
											src={
												streamer.skin_id
													? `https://s.namemc.com/2d/skin/face.png?id=${streamer.skin_id}&scale=32`
													: `https://crafatar.com/avatars/${streamer.minecraft_uuid}?overlay`
											}
											alt={`Skin de ${streamer.display_name}`}
											className="size-8"
										/>
										<span>{streamer.display_name}</span>
										<Toggle className="ml-auto" asChild>
											<Button
												variant="dark"
												size="icon"
												innerClassName="size-6 group-data-[state=on]/button:border-b-0"
											>
												<Chat size="1rem" weight="bold" />
											</Button>
										</Toggle>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="flex flex-1 flex-col items-center pl-3">
						<span>Grupos</span>
						<ul className="w-full divide-y-2 divide-muted">
							{groups.map((group) => {
								return (
									<li key={group.slug} className="flex flex-col">
										<div className="flex items-center gap-3 p-2">
											<Button
												variant="destructive"
												size="icon"
												innerClassName="size-5"
												onClick={() => {
													setGroups((old) =>
														old.filter((s) => s.slug !== group.slug),
													);
												}}
											>
												<X size="1rem" weight="bold" />
											</Button>
											<span>{group.display_name}</span>
										</div>
										<div className="grid grid-cols-[44px_1fr]">
											<span className="w-0.5 bg-muted mx-auto mb-[26px]" />
											<div>
												{group.members.map((s) => {
													const streamer = Streamers.get(s.id);

													if (!streamer) return;

													return (
														<div
															key={streamer.id}
															className="flex items-center gap-3 py-2"
														>
															{/* <Toggle
																className="data-[state=on]:ring-0"
																asChild
															>
																<Button
																	variant="dark"
																	size="icon"
																	innerClassName="size-6 group-data-[state=on]/button:border-b-0"
																>
																	<Eye size="1rem" weight="bold" />
																</Button>
															</Toggle> */}
															<Image
																src={
																	streamer.skin_id
																		? `https://s.namemc.com/2d/skin/face.png?id=${streamer.skin_id}&scale=32`
																		: `https://crafatar.com/avatars/${streamer.minecraft_uuid}?overlay`
																}
																alt={`Skin de ${streamer.display_name}`}
																className="size-8"
															/>
															<span>{streamer.display_name}</span>
															{/* <Toggle className="ml-auto" asChild>
																<Button
																	variant="dark"
																	size="icon"
																	innerClassName="size-6 group-data-[state=on]/button:border-b-0"
																>
																	<Chat size="1rem" weight="bold" />
																</Button>
															</Toggle> */}
														</div>
													);
												})}
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<SheetFooter>
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
								chats: query.chats.filter((c) =>
									streamers.some((s) => s.id === c),
								),
							});
						}}
					>
						Assistir <TelevisionSimple size="1rem" weight="bold" />
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
