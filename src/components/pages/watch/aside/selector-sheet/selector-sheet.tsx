"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { TelevisionSimple } from "@phosphor-icons/react/dist/ssr";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StreamersTab } from "./tabs/streamers-tab";
import { GroupsTab } from "./tabs/groups-tab";
import { Footer } from "./footer";
import { useSelectorStore } from "@/stores/selector-store";
import { useQueryData } from "@/hooks/use-query-data";

export function SelectorSheet() {
	const { setStreamers, setGroups } = useSelectorStore();
	const [_, __, { streamers, groups }] = useQueryData();

	return (
		<Sheet
			onOpenChange={(open) => {
				if (open) {
					setStreamers(
						streamers.map((s) => {
							return s.replace(/^yt-/g, "");
						}),
					);
					setGroups(groups);
				} else {
					setStreamers([]);
					setGroups([]);
				}
			}}
		>
			<SheetTrigger asChild>
				<Button size="icon" className="border-r-0" innerClassName="size-8">
					<TelevisionSimple size="1.15rem" weight="bold" />
				</Button>
			</SheetTrigger>
			<SheetContent className="sm:max-w-max grid grid-rows-[max-content_1fr_max-content] w-min">
				<SheetHeader>
					<SheetTitle>Seletor</SheetTitle>
					<SheetDescription>
						Escolha os streamers e/ou grupos que deseja assistir.
					</SheetDescription>
				</SheetHeader>
				<Tabs
					defaultValue="streamers"
					className="overflow-y-hidden w-max grid grid-rows-[max-content_1fr]"
				>
					<TabsList>
						<TabsTrigger value="streamers" asChild>
							<Button
								variant="light"
								className="data-[state=active]:!mt-1 data-[state=active]:bg-primary"
								innerClassName="group-data-[state=active]/button:border-b-0 h-9"
							>
								Streamers
							</Button>
						</TabsTrigger>
						<TabsTrigger value="groups" asChild>
							<Button
								variant="light"
								className="data-[state=active]:!mt-1 data-[state=active]:bg-primary"
								innerClassName="group-data-[state=active]/button:border-b-0 h-9"
							>
								Grupos
							</Button>
						</TabsTrigger>
					</TabsList>
					<StreamersTab />
					<GroupsTab />
				</Tabs>
				<Footer />
			</SheetContent>
		</Sheet>
	);
}
