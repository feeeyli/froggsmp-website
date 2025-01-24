"use client";

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import dayjs from "dayjs";
import Link from "next/link";
import { Announcement } from "./announcement";
import { EventType } from "@/types/data";

type TimelineItemMobileProps = {
	event: EventType;
};

export function TimelineItemMobile(props: TimelineItemMobileProps) {
	const date = dayjs(props.event.time);
	const diff = date.diff("2024-01-08 00:00", "days") + 1;

	return (
		<AccordionItem
			value={props.event.slug}
			className="border-b-primary/50 data-[state=closed]:max-sm:border-0"
			defaultChecked
			asChild
		>
			<li>
				<AccordionTrigger className="p-0 hover:bg-secondary/5">
					<div className="grid grid-cols-[3.75rem_1.25rem_1fr] w-full gap-4">
						<div className="flex flex-col items-end text-right mt-2">
							<span>Dia {diff}</span>
							<span className="text-secondary leading-5">
								{date.format("DD/MM")}
							</span>
						</div>
						<div className="grid grid-rows-[1.25rem_1.25rem_1fr] gap-1.5">
							<span className="w-0.5 h-full bg-primary/50 mx-auto" />
							<span className="font-emoji text-[1rem] flex items-center justify-center">
								{props.event.emoji}
							</span>
							<span className="w-0.5 h-full bg-primary/50 min-h-5 mx-auto" />
						</div>
						<div className="flex flex-col items-center">
							<span className="">{props.event.name}</span>
							<Link
								href={`https://froggsmp.vercel.app/wiki/${props.event.name.replaceAll("?", "%3F")}`}
								target="_blank"
								className="text-secondary hover:underline flex gap-2 items-center"
								onClick={(e) => {
									e.stopPropagation();
								}}
							>
								Resumo do evento
								<ArrowSquareOut size="1rem" weight="bold" />
							</Link>
						</div>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<Carousel
						opts={{
							align: "start",
						}}
						className="mt-1"
					>
						<CarouselContent>
							{props.event.announcements?.map((announcement) => (
								<Announcement
									key={announcement.link}
									announcement={announcement}
								/>
							))}
						</CarouselContent>
						<CarouselPrevious className="left-2 disabled:opacity-0 transition-all" />
						<CarouselNext className="right-2 disabled:opacity-0 transition-all" />
					</Carousel>
				</AccordionContent>
			</li>
		</AccordionItem>
	);
}
