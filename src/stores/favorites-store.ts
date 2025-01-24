import { Group, TileType } from "@/types/data";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoritesState = {
	streamers: string[];
	toggleStreamer: (streamer: string) => void;

	groups: string[];
	toggleGroup: (streamer: string) => void;
};

export const useFavoritesStore = create<FavoritesState>()(
	persist(
		(set, get) => ({
			streamers: [],
			toggleStreamer(streamer) {
				if (get().streamers.includes(streamer)) {
					set({ streamers: get().streamers.filter((s) => s !== streamer) });
				} else {
					set({ streamers: [...get().streamers, streamer] });
				}
			},

			groups: [],
			toggleGroup(group) {
				if (get().groups.includes(group)) {
					set({ groups: get().groups.filter((s) => s !== group) });
				} else {
					set({ groups: [...get().groups, group] });
				}
			},
		}),
		{
			name: "@Frogg/favorites",
		},
	),
);
