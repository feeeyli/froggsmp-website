import { Accordion } from "@/components/ui/accordion";
import { TimelineItem } from "./timeline-item";
import { Fragment } from "react";
import { EventType } from "@/types/data";

type EventsTimelineProps = {
	events: EventType[];
};

export function EventsTimeline(props: EventsTimelineProps) {
	return (
		<Accordion
			className="mt-5"
			type="multiple"
			defaultValue={[props.events[0].slug]}
			asChild
		>
			<ul className="flex flex-col">
				<li className="w-full font-bold pb-4 mb-4 border-b border-primary/50 text-center text-secondary dark:text-primary">
					2025
				</li>
				{props.events.map((event) => {
					return (
						<Fragment key={event.slug}>
							{event.slug === "caca-bingo" && (
								<li className="w-full font-bold py-4 my-4 border-b border-primary/50 text-center text-secondary dark:text-primary">
									2024
								</li>
							)}
							<TimelineItem event={event} />
						</Fragment>
					);
				})}
			</ul>
		</Accordion>
	);
}
