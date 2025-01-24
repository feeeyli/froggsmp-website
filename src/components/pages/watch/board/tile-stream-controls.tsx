import { SwapSlash } from "@/components/icons";
import { useLayoutContext } from "@/stores/layout-store";
import {
	ArrowsClockwise,
	ArrowsOut,
	Chat,
	ChatSlash,
	SpeakerHigh,
	SpeakerX,
	Swap,
	X,
} from "@phosphor-icons/react/dist/ssr";
import { Root as Toggle } from "@radix-ui/react-toggle";
import { useTileControls } from "./tile-context";
import { useQueryData } from "@/hooks/use-query-data";
import { useMemo } from "react";
import { TileControlsProps, controlButtonClassName } from "./tile-controls";
import { useSettingsStore } from "@/stores/settings-store";

export function TileStreamControls(props: TileControlsProps) {
	const layout = useLayoutContext((s) => s);
	const controls = useTileControls();
	const [_, setQuery, { chats, streamers }] = useQueryData();
	const isChatActivated = useMemo(() => {
		return chats.includes(props.tileData.id);
	}, [chats, props.tileData.id]);
	const isMemberOfAGroup = useMemo(() => {
		return !streamers.includes(props.tileData.id);
	}, [streamers, props.tileData.id]);
	const quick_actions = useSettingsStore((s) => s.settings.quick_actions);

	return (
		<div className="flex">
			{quick_actions.expand && (
				<button
					className={controlButtonClassName}
					onClick={() => controls.setMaximized(true)}
				>
					<ArrowsOut size="1.15rem" />
				</button>
			)}
			{quick_actions.sound && (
				<Toggle
					className={controlButtonClassName}
					onPressedChange={controls.setSound}
				>
					{!controls.sound && <SpeakerX size="1.15rem" />}
					{controls.sound && <SpeakerHigh size="1.15rem" />}
				</Toggle>
			)}
			{quick_actions.chat && (
				<button
					className={controlButtonClassName}
					onClick={() => {
						setQuery({
							chats: isChatActivated
								? chats.filter((chat) => chat !== props.tileData.id)
								: [...chats, props.tileData.id],
						});
					}}
				>
					{!isChatActivated && <Chat size="1.15rem" />}
					{isChatActivated && <ChatSlash size="1.15rem" />}
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
			{quick_actions.remove && !isMemberOfAGroup && (
				<button
					className={controlButtonClassName}
					onClick={() =>
						setQuery({
							streamers: streamers.filter((s) => s !== props.tileData.slug),
						})
					}
				>
					<X size="1.15rem" />
				</button>
			)}
		</div>
	);
}
