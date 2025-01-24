"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { useGroupsStore } from "@/stores/groups-store";
import { useSelectorStore } from "@/stores/selector-store";
import {
	Plus,
	Selection,
	SelectionAll,
	SelectionSlash,
	X,
} from "@phosphor-icons/react/dist/ssr";
import { Group } from "./group";
import { useState } from "react";
import { matchSorter } from "match-sorter";
import { CreateGroupSheet } from "../../create-group-sheet";
import { SheetTrigger } from "@/components/ui/sheet";

export function GroupsTab() {
	const { groups, setGroups } = useSelectorStore();
	const Groups = useGroupsStore((state) => state.groups);
	const [search, setSearch] = useState("");

	const searchedGroups = matchSorter(Groups, search, {
		keys: ["display_name", "slug"],
		baseSort: () => 0,
	});

	return (
		<TabsContent value="groups">
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
								setGroups(Groups.map((g) => g.slug));
							}}
						>
							<SelectionAll size="1rem" weight="bold" />
							Todos
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => {
								setGroups([]);
							}}
						>
							<SelectionSlash size="1rem" weight="bold" />
							Nenhum
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<div className="flex flex-1">
					<Input
						containerClassName="flex-1"
						placeholder="Buscar por grupos"
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
			<ToggleGroup
				type="multiple"
				className="mt-2 grid grid-cols-2-max sm:grid-cols-3-max lg:grid-cols-4-max gap-2 overflow-y-scroll p-1 pr-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted"
				value={groups}
				onValueChange={setGroups}
			>
				{searchedGroups.map((group) => {
					return <Group key={group.slug} group={group} />;
				})}
				<CreateGroupSheet>
					<SheetTrigger asChild>
						<Button variant="dark" innerClassName="p-2 h-auto flex-col">
							<div className="size-32 flex items-center justify-center">
								<Plus size="2rem" weight="bold" />
							</div>
							<span>Novo Grupo</span>
						</Button>
					</SheetTrigger>
				</CreateGroupSheet>
			</ToggleGroup>
		</TabsContent>
	);
}
