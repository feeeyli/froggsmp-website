import { LinkButton } from "@/components/ui/button";
import { Streamers } from "@/data/streamers";
import { EventType, Summary as SummaryType } from "@/types/data";
import { cn } from "@/lib/utils";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import dayjs from "dayjs";

type SummaryProps = {
	summary: SummaryType;
	event?: EventType;
};

export function Summary(props: SummaryProps) {
	const date = dayjs(props.summary.date);

	return (
		<div key={props.summary.date} className="flex flex-col gap-3">
			<div className="flex flex-col text-center [&>*]:animate-in [&>*]:slide-in-from-bottom-4 [&>*]:fade-in">
				<span className="text-xl font-bold leading-9">
					{date.format("DD/MM/YYYY")}
				</span>
				<span className="text-lg leading-7 text-muted dark:text-muted-foreground delay-50">
					Dia {date.diff(dayjs("2024-01-08 00:00"), "days") + 1}
				</span>
				{props.event && (
					<p className="mt-2 text-lg leading-7 text-secondary delay-100">
						{props.event.name}{" "}
						<span className="font-emoji text-[1rem]">{props.event.emoji}</span>
					</p>
				)}
			</div>
			<div
				className={cn(
					"flex gap-x-6 gap-y-2 justify-center flex-wrap max-w-[36rem] animate-in slide-in-from-bottom-4 fade-in",
					props.event ? "delay-150" : "delay-100",
				)}
			>
				{props.summary.players.map((p) => {
					const player = Streamers.get(p);

					if (!player) return;

					return (
						<div key={player.id} className="flex flex-col items-center">
							<img
								src={`https://api.mineatar.io/head/${player.minecraft_uuid}?overlay`}
								alt={`Skin de ${player.display_name}`}
								className="w-8 md:w-12"
							/>
							<span>{player.display_name.replace("quera", "")}</span>
						</div>
					);
				})}
			</div>
			<div
				className={cn(
					"animate-in slide-in-from-bottom-4 fade-in delay-400",
					props.event ? "delay-200" : "delay-150",
				)}
			>
				<LinkButton
					href={props.summary.link}
					target="_blank"
					innerClassName="gap-2"
				>
					Ver resumo do dia <ArrowSquareOut size="1rem" weight="bold" />
				</LinkButton>
			</div>
		</div>
	);
}

// export function Summary(props: SummaryProps) {
// 	const template = `~~🔔~~ | FROGG SMP ATUALIZAÇÃO
// > DIA ${dayjs(props.summary.date).format("DD.MM.YYYY")}

// > ${props.event ? `${props.event.name} ~~${props.event.emoji}~~` : ""}

// *#FroggSMP* *#FSMP*`;

// 	return (
// 		<div className="p-4 w-[22rem] border-2 border-primary">
// 			<div className="flex justify-between items-center">
// 				<div className="flex gap-2 items-center">
// 					<Image
// 						src="/eventos/publisher/froggsmpnots.png"
// 						alt="Frogg SMP Updates"
// 						className="size-10"
// 					/>
// 					<div className="flex flex-col leading-4">
// 						<span>Frogg SMP Updates</span>
// 						<span className="text-secondary">@froggsmpnots</span>
// 					</div>
// 				</div>
// 				{/* <LinkButton
//             size="icon"
//             href={props.announcement.link}
//             target="_blank"
//           >
//             <ArrowSquareOut size="1rem" weight="bold" />
//           </LinkButton> */}
// 			</div>
// 			<Markdown
// 				className="mt-3 leading-6"
// 				options={{
// 					overrides: {
// 						em({ children }) {
// 							return (
// 								<Link
// 									href={`https://x.com/hashtag/${String(children).slice(1)}`}
// 									target="_blank"
// 									className="text-secondary hover:underline"
// 								>
// 									{children}
// 								</Link>
// 							);
// 						},
// 						del({ children }) {
// 							return <span className="font-emoji text-[1rem]">{children}</span>;
// 						},
// 						p: {
// 							props: {
// 								className: "mt-3",
// 							},
// 						},
// 						blockquote({ children }) {
// 							return <div className="text-center">{children}</div>;
// 						},
// 					},
// 					enforceAtxHeadings: true,
// 				}}
// 			>
// 				{template}
// 			</Markdown>
// 			<Link href={props.summary.picture} target="_blank" className="mt-3 block">
// 				<Image src={props.summary.picture} alt="Imagem de anuncio" />
// 			</Link>
// 		</div>
// 	);
// }
