import { useGroupsStore } from "@/stores/groups-store";
import { TileData } from "@/types/data";
import {
	parseChatsAsTileData,
	parseGroupsAsTileData,
	parseStreamersAsTileData,
} from "@/util/parse";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";
import { useMemo } from "react";

function removeDuplicates(tiles: TileData[]): TileData[] {
	const seen = new Set<string>();
	return tiles.filter((tile) => {
		if (seen.has(tile.slug)) {
			return false;
		}
		seen.add(tile.slug);
		return true;
	});
}

export function useQueryData() {
	const { groups } = useGroupsStore();
	const [query, setQuery] = useQueryStates(
		{
			streamers: parseAsArrayOf(parseAsString, "/").withDefault([]),
			groups: parseAsArrayOf(parseAsString, "/").withDefault([]),
			chats: parseAsArrayOf(parseAsString, "/").withDefault([]),
		},
		{
			history: "push",
		},
	);

	const unified: TileData[] = useMemo(() => {
		return removeDuplicates(
			[
				parseStreamersAsTileData(query.streamers),
				parseGroupsAsTileData(query.groups, groups),
				parseChatsAsTileData(query.chats),
			].flat(),
		);
	}, [query, groups]);

	return [unified, setQuery, query] as [
		TileData[],
		typeof setQuery,
		typeof query,
	];
}
