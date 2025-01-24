import { SwapSlash } from "@/components/icons";
import { useLayoutContext } from "@/stores/layout-store";
import { ArrowsClockwise, Swap, X } from "@phosphor-icons/react/dist/ssr";
import { useTileControls } from "./tile-context";
import { useQueryData } from "@/hooks/use-query-data";
import { TileControlsProps, controlButtonClassName } from "./tile-controls";
import { useSettingsStore } from "@/stores/settings-store";

export function TileChatControls(props: TileControlsProps) {
	const layout = useLayoutContext((s) => s);
	const controls = useTileControls();
	const [_, setQuery, { chats }] = useQueryData();
	const quick_actions = useSettingsStore((s) => s.settings.quick_actions);

	return (
		<div className="flex">
			{quick_actions.remove && (
				<button
					className={controlButtonClassName}
					onClick={() => {
						setQuery({
							chats: chats.filter((chat) => chat !== props.tileData.id),
						});
					}}
				>
					<X size="1.15rem" />
				</button>
			)}
			{quick_actions.swap && (
				<button
					className={controlButtonClassName}
					onClick={() => {
						if (!props.tile) return;
						layout.toggleSwapping(props.tile);
					}}
				>
					{layout.swapping?.i !== props.tile?.i && <Swap size="1.15rem" />}
					{layout.swapping?.i === props.tile?.i && <SwapSlash size="1.15rem" />}
				</button>
			)}
			{quick_actions.reload && (
				<button
					className={controlButtonClassName}
					onClick={() => controls.reload()}
				>
					<ArrowsClockwise size="1.15rem" />
				</button>
			)}
		</div>
	);
}
