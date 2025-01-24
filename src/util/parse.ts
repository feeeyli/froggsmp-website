import { Streamer, Streamers } from "@/data/streamers";
import { Group, TileData, TileType } from "@/types/data";

function makeSlug(type: TileType, id: string) {
	if (type === TileType.twitch) return id;

	return `${type}-${id}`;
}

function parseStreamersAsTileData(streamers: string[]): TileData[] {
	return streamers.map((slug) => {
		const type = slug.startsWith("yt-") ? TileType.yt : TileType.twitch;
		const id = slug.replace(/^yt-/g, "");

		return { slug: makeSlug(type, id), id, type };
	});
}

function parseGroupsAsTileData(
	groupsSlugs: string[],
	groups: Group[],
): TileData[] {
	return groupsSlugs.flatMap((slug) => {
		const group = groups.find((g) => g.slug === slug);

		if (!group) return [];

		return group.members.map((member) => {
			const type = member.type ?? TileType.twitch;

			return {
				slug: makeSlug(type, member.id),
				id: member.id,
				type,
			};
		});
	});
}

function parseChatsAsTileData(chats: string[]): TileData[] {
	return chats.map((slug) => {
		const id = slug.replace(/^chat-/g, "");

		return { slug: `chat-${id}`, id, type: TileType.chat };
	});
}

function parseStreamersAsStreamer(streamers: string[]) {
	return streamers
		.map((slug) => {
			const id = slug.replace(/^yt-/g, "");

			return Streamers.get(id);
		})
		.filter((streamer): streamer is Streamer => streamer !== undefined);
}

function parseGroupsAsGroup(groupsSlugs: string[], groups: Group[]) {
	return groupsSlugs
		.flatMap((slug) => {
			return groups.find((g) => g.slug === slug);
		})
		.filter((streamer): streamer is Group => streamer !== undefined);
}

export {
	parseStreamersAsTileData,
	parseGroupsAsTileData,
	parseChatsAsTileData,
	parseStreamersAsStreamer,
	parseGroupsAsGroup,
};
