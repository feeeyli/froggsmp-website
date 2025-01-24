import { create } from "zustand";

type SelectorState = {
	streamers: string[];
	groups: string[];

	setStreamers: (value: string[]) => void;
	setGroups: (value: string[]) => void;
};

export const useSelectorStore = create<SelectorState>()((set) => ({
	streamers: [],
	groups: [],

	setStreamers: (value) => set({ streamers: value }),
	setGroups: (value) => set({ groups: value }),
}));
