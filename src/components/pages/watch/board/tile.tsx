import { useLayoutContext } from "@/stores/layout-store";
import { Swap } from "@phosphor-icons/react/dist/ssr";
import { TileControlsProvider } from "./tile-context";
import { TileControls } from "./tile-controls";
import { TilePlayer } from "./tile-player";
import { TileData } from "@/types/data";

type TileProps = {
	tile: TileData;
};

export function Tile(props: TileProps) {
	const layout = useLayoutContext((s) => s);
	const tile = layout.getTile(props.tile.slug);

	return (
		<TileControlsProvider>
			<div
				className="data-[moving=true]:pointer-events-none data-[moving=true]:select-none h-full flex flex-col relative bg-background"
				data-moving={layout.moving}
			>
				<TileControls tileData={props.tile} tile={tile} />
				<div className="relative flex-1 border-2 border-t-0 border-black bg-black text-white">
					{layout.swapping !== undefined &&
						layout.swapping.i !== props.tile.slug && (
							<button
								className="flex items-center justify-center absolute inset-0 bg-muted/25 text-white cursor-crosshair"
								onClick={() => {
									if (!tile) return;
									layout.swap(tile);
								}}
							>
								<Swap size="3rem" />
							</button>
						)}
					<TilePlayer tile={props.tile} />
				</div>
			</div>
		</TileControlsProvider>
	);
}
