import { isLayoutValid, isLayoutsEquals } from "@/util/layout-utils";
import { createContext, use } from "react";
import { Layout } from "react-grid-layout";
import { createStore, useStore } from "zustand";

type LayoutProps = {
	layout: Layout[];
	tiledLayout: Layout[];
	setLayoutMemory: (layout: Layout[]) => void;
};

type LayoutState = {
	hasChanged: boolean;
	setHasChanged: (value: boolean, layout?: Layout[]) => void;

	setLayout: (value: Layout[]) => void;
	setTiledLayout: (value: Layout[]) => void;

	getTile: (id: string) => Layout | undefined;

	moving: boolean;
	setMoving: (value: boolean) => void;

	swapping: Layout | undefined;
	toggleSwapping: (value: Layout) => void;
	swap: (target: Layout) => void;

	resetLayout: () => void;
} & LayoutProps;

type LayoutStore = ReturnType<typeof createLayoutStore>;

export const createLayoutStore = (initProps: LayoutProps) => {
	return createStore<LayoutState>((set, get) => ({
		...initProps,
		hasChanged: false,
		setHasChanged(value, layout) {
			if (layout && isLayoutsEquals(get().tiledLayout, layout)) return;

			set({ hasChanged: value });
		},

		setLayout(value) {
			if (
				isLayoutsEquals(get().layout, value) ||
				isLayoutValid(value) === false
			)
				return;

			if (get().hasChanged) {
				get().setLayoutMemory(value);
			}

			set({ layout: value });
		},

		setTiledLayout(value) {
			set({ tiledLayout: value });
		},

		getTile(id) {
			return get().layout.find((t) => t.i === id);
		},

		moving: false,
		setMoving(value) {
			set({ moving: value });
		},

		swapping: undefined,
		toggleSwapping(value) {
			if (get().swapping?.i === value.i) {
				return set({ swapping: undefined });
			}

			set({ swapping: value });
		},
		swap(target) {
			const swapping = get().swapping;
			let layout = get().layout;

			if (!swapping) return;
			layout = layout.reduce((acc, item) => {
				if (item.i === target.i) {
					acc.push({ ...item, i: swapping.i });
				} else if (item.i === swapping.i) {
					acc.push({ ...item, i: target.i });
				} else {
					acc.push(item);
				}
				return acc;
			}, [] as Layout[]);

			get().setLayoutMemory(layout);

			set({ layout, swapping: undefined, hasChanged: true });
		},

		resetLayout() {
			get().setLayoutMemory(get().tiledLayout);

			set({
				layout: get().tiledLayout,
				swapping: undefined,
				hasChanged: true,
			});
		},
	}));
};

export const LayoutContext = createContext<LayoutStore | null>(null);

export function useLayoutContext<T>(selector: (state: LayoutState) => T): T {
	const store = use(LayoutContext);
	if (!store) throw new Error("Missing LayoutContext.Provider in the tree");
	return useStore(store, selector);
}
