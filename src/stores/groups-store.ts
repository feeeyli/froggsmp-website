import { Group, TileType } from "@/types/data";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type GroupsState = {
	groups: Group[];
	addGroup: (group: Group) => void;
	editGroup: (group: Group, slug: string) => void;
	removeGroup: (slug: string) => void;
};

export const useGroupsStore = create<GroupsState>()(
	persist(
		(set, get) => ({
			groups: [
				{
					display_name: "FroggTV",
					slug: "froggtv",
					members: [
						{
							id: "scott",
							type: TileType.twitch,
							minecraft_uuid: "46fa9dec-08a2-4722-bd59-00f190cab20a",
						},
						{
							id: "umild",
							type: TileType.twitch,
							minecraft_uuid: "f6a94a1e-9fc9-42b0-bc87-0ac8f4866590",
						},
						{
							id: "tiba",
							type: TileType.twitch,
							minecraft_uuid: "703196c7-4c8d-4c22-bde8-601a08498a9d",
						},
						{
							id: "keller",
							type: TileType.twitch,
							minecraft_uuid: "5775b22b-b75b-432a-b1a2-29d3d5ce7448",
						},
					],
				},
			],
			addGroup: (group) => set({ groups: [...get().groups, group] }),
			editGroup: (group, slug) => {
				const old = Array.from(get().groups);

				const index = get().groups.findIndex((g) => g.slug === slug);

				old[index] = group;

				set({ groups: old });
			},
			removeGroup: (slug) =>
				set({ groups: get().groups.filter((g) => g.slug !== slug) }),
		}),
		{
			name: "@Frogg/groups",
		},
	),
);
