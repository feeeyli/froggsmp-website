"use client";

import { HelpSheet } from "@/components/pages/watch/aside/help-sheet/help-sheet";
import { LayoutDropdown } from "@/components/pages/watch/aside/layout-dropdown";
import { OrganizeSheet } from "@/components/pages/watch/aside/organize-sheet/organize-sheet";
import { SelectorSheet } from "@/components/pages/watch/aside/selector-sheet/selector-sheet";
import { SettingsSheet } from "@/components/pages/watch/aside/settings-sheet/settings-sheet";
import { Board } from "@/components/pages/watch/board/board";
import { useQueryData } from "@/hooks/use-query-data";
import { useLayoutMemoryStore } from "@/stores/layout-memory-store";
import { LayoutContext, createLayoutStore } from "@/stores/layout-store";
import { getBoardRows } from "@/util/get-board-rows";
import { generateTileLayout } from "@/util/layout-generator";
import { useEffect, useMemo, useRef } from "react";
import { Layout } from "react-grid-layout";
import { useStore } from "zustand";

export default function Watch() {
	const [tileList] = useQueryData();

	const rows = getBoardRows(tileList.length);

	const layoutMemory = useLayoutMemoryStore();

	const tiledLayout: Layout[] = useMemo(() => {
		return generateTileLayout({
			list: tileList,
			rows,
		}).sort((a, b) => a.i.localeCompare(b.i));
	}, [tileList, rows]);

	const initialLayout: Layout[] = useMemo(() => {
		const layoutKey = tiledLayout
			.map((tile) => tile.i)
			.sort()
			.join("/");

		return layoutMemory.getLayout(layoutKey) || tiledLayout;
	}, [tiledLayout, layoutMemory.getLayout]);

	const store = useRef(
		createLayoutStore({
			layout: initialLayout,
			tiledLayout,
			setLayoutMemory: layoutMemory.setLayout,
		}),
	).current;
	const layout = useStore(store);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		layout.setHasChanged(false);
		layout.setLayout(initialLayout);
		layout.setTiledLayout(tiledLayout);
	}, [initialLayout, tiledLayout]);

	useEffect(() => {
		if (layout.hasChanged) {
			console.log("> layout has changed to", layout.layout);
		}
	}, [layout.hasChanged, layout.layout]);

	return (
		<LayoutContext.Provider value={store}>
			<div className="font-minecraft min-h-screen flex dark bg-background">
				<Board tileList={tileList} />
				<aside className="flex flex-col gap-1 py-6">
					<SelectorSheet />
					{/* <OrganizeSheet /> */}
					<span className="block h-2" />
					<SettingsSheet />
					<HelpSheet />
					<span className="block h-2" />
					{tileList.length > 0 && <LayoutDropdown />}
				</aside>
			</div>
		</LayoutContext.Provider>
	);
}
