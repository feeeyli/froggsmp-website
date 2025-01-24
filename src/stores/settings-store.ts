import { create } from "zustand";
import { persist } from "zustand/middleware";

type Settings = {
	show_offline_status: boolean;
	show_playing_status: boolean;
	hide_offline: boolean;
	hide_playing: boolean;
	quick_actions: {
		expand: boolean;
		sound: boolean;
		chat: boolean;
		swap: boolean;
		reload: boolean;
		remove: boolean;
	};
};

type SettingsState = {
	settings: Settings;

	setSettings: (value: Settings) => void;
};

export const useSettingsStore = create<SettingsState>()(
	persist(
		(set) => ({
			settings: {
				show_offline_status: true,
				show_playing_status: true,
				hide_offline: false,
				hide_playing: false,
				quick_actions: {
					expand: true,
					sound: true,
					chat: true,
					swap: true,
					reload: false,
					remove: false,
				},
			},
			setSettings(value) {
				set({ settings: value });
			},
		}),
		{
			name: "@Frogg/settings",
		},
	),
);
