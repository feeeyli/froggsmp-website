import { ToggleGroupItem } from "@/components/ui/toggle-group";
import { Group as GroupType } from "@/types/data";
import { EditGroupSheet } from "../../edit-group-sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import { PencilSimple } from "@phosphor-icons/react/dist/ssr";

function getColumns(l: number) {
	if (l === 1) return 1;
	if (l >= 2 && l <= 4) return 2;
	if (l >= 5 && l <= 9) return 3;
	return 4;
}

type GroupProps = {
	group: GroupType;
};

export function Group(props: GroupProps) {
	return (
		<div className="relative">
			{props.group.slug !== "froggtv" && (
				<EditGroupSheet group={props.group}>
					<SheetTrigger asChild>
						<button className="absolute -top-1 -left-1 z-10 size-7 flex items-center justify-center border-2 border-black shine hover:shine-75 bg-m-dark-background text-white">
							<PencilSimple size="1rem" weight="bold" />
						</button>
					</SheetTrigger>
				</EditGroupSheet>
			)}
			<ToggleGroupItem value={props.group.slug} innerClassName="flex-col">
				<div className="size-32 flex items-center overflow-hidden">
					<div className="pointer-events-none select-none flex flex-wrap justify-center">
						{props.group.members.slice(0, 16).map((member, i) => (
							<picture
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={i}
								className="relative align-middle border-2 border-border"
								style={{
									width: `${100 / getColumns(props.group.members.length)}%`,
									imageRendering: "pixelated",
								}}
							>
								<img
									src={`https://api.mineatar.io/face/${member.minecraft_uuid}?overlay`}
									alt={`Skin de ${member.id}`}
									width={128}
									height={128}
									className="pointer-events-none aspect-square"
								/>
								<div className="absolute inset-0 shine" />
							</picture>
						))}
					</div>
				</div>
				<span>{props.group.display_name}</span>
			</ToggleGroupItem>
		</div>
	);
}
