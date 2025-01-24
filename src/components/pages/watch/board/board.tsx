"use client";

import { useLayoutContext } from "@/stores/layout-store";
import { useMemo } from "react";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import { Tile } from "./tile";
import { TileData } from "@/types/data";
import { Constants } from "@/util/constants";
import { TelevisionSimple } from "@phosphor-icons/react/dist/ssr";

type BoardProps = {
	tileList: TileData[];
};

export function Board(props: BoardProps) {
	const GridLayout = useMemo(() => WidthProvider(RGL), []);

	const layout = useLayoutContext((s) => s);

	const actions = {
		startMove() {
			layout.setMoving(true);
		},
		stopMove(lay: Layout[]) {
			layout.setMoving(false);
			layout.setHasChanged(true, lay);
		},
	};

	const children = useMemo(() => {
		return props.tileList.map((tile) => (
			<div className="overflow-hidden flex flex-col relative" key={tile.slug}>
				<Tile tile={tile} />
			</div>
		));
	}, [props.tileList]);

	return (
		<div
			className="max-h-screen h-screen w-full relative overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted"
			dir="rtl"
		>
			<div className="size-full" dir="ltr">
				{process.env.NEXT_PUBLIC_DEBUG === "true" && (
					<div className="max-w-[50%] p-4 z-50 absolute bottom-4 right-4 border-2 border-border bg-m-dark-background shine flex flex-col gap-2 leading-5 text-foreground [&_span]:text-primary [&_span]:break-all">
						<p>
							has changed: <span>{String(layout.hasChanged)}</span>
						</p>
						<p>
							layout key:{" "}
							<span>
								{layout.layout
									.map((tile) => tile.i)
									.sort()
									.join("/")}
							</span>
						</p>
					</div>
				)}
				{typeof window !== "undefined" && props.tileList.length > 0 && (
					<GridLayout
						layout={layout.layout}
						onLayoutChange={layout.setLayout}
						cols={36}
						maxRows={Constants.BOARD_ROWS}
						rowHeight={window.innerHeight / Constants.BOARD_ROWS - 4.2}
						resizeHandles={["sw", "se"]}
						draggableHandle=".drag-handle"
						margin={[4, 4]}
						onDragStart={actions.startMove}
						onResizeStart={actions.startMove}
						onDragStop={actions.stopMove}
						onResizeStop={actions.stopMove}
					>
						{children}
					</GridLayout>
				)}
				{props.tileList.length === 0 && (
					<div className="text-foreground leading-6 flex flex-col items-center justify-center size-full">
						<p>Parece que você ainda não escolheu nenhuma live.</p>
						<p>
							Clique no botão "
							<TelevisionSimple
								size="1.25rem"
								weight="bold"
								className="text-primary inline"
							/>
							" á direita e comece a assistir!
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
