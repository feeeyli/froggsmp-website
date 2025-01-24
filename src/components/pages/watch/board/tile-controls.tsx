import { Layout } from "react-grid-layout";
import { TileData, TileType } from "@/types/data";
import { TileStreamControls } from "./tile-stream-controls";
import { TileChatControls } from "./tile-chat-controls";
import { useTileControls } from "./tile-context";
import { ArrowsIn } from "@phosphor-icons/react/dist/ssr";

export const controlButtonClassName =
	"h-7 w-8 flex items-center justify-center hover:bg-white/5 transition-colors shine-95";

export type TileControlsProps = {
	tile: Layout | undefined;
	tileData: TileData;
};

export function TileControls(props: TileControlsProps) {
	const controls = useTileControls();
	const ControlsComponent =
		props.tileData.type === TileType.chat
			? TileChatControls
			: TileStreamControls;

	if (controls.maximized)
		return (
			<div className="bg-m-dark-background shine border-2 border-border text-white absolute top-0 left-0 opacity-50 hover:opacity-100 transition-opacity z-20">
				<button
					className={controlButtonClassName}
					onClick={() => controls.setMaximized(false)}
				>
					<ArrowsIn size="1.15rem" />
				</button>
			</div>
		);

	return (
		<div
			data-hidden={controls.maximized}
			className="grid grid-cols-[max-content_1fr] items-center bg-m-dark-background shine border-2 border-border text-white data-[hidden='true']:hidden"
		>
			<ControlsComponent tile={props.tile} tileData={props.tileData} />
			<div className="drag-handle size-full cursor-grab active:cursor-grabbing leading-5">
				{/* {props.tileData.slug} */}
			</div>
		</div>
	);
}
