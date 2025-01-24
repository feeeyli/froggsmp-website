import { Layout } from "react-grid-layout";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type LayoutMemoryState = {
	layouts: {
		key: string;
		layout: Layout[];
	}[];
	getLayout: (key: string) => Layout[] | undefined;
	setLayout: (layout: Layout[]) => void;
};

export const useLayoutMemoryStore = create<LayoutMemoryState>()(
	persist(
		(set, get) => ({
			layouts: [],
			getLayout(key) {
				return get().layouts.find((layout) => layout.key === key)?.layout;
			},
			setLayout(layout) {
				const key = layout
					.map((tile) => tile.i)
					.sort()
					.join("/");
				const filtered = get().layouts.filter((lay) => lay.key !== key);

				console.log("> set layout memory", key, layout);

				set({
					layouts: [
						...filtered,
						{
							key,
							layout,
						},
					],
				});
			},
		}),
		{
			name: "@Frogg/layout",
		},
	),
);
