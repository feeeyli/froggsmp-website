import { EventType } from "@/types/data";
import { EventsTimeline } from "./events-timeline";

type EventsSectionProps = {
	events?: EventType[];
};

export function EventsSection(props: EventsSectionProps) {
	return (
		<section className="px-4 sm:px-8 md:px-20 lg:px-36 py-10" id="eventos">
			<h2 className="animate-in duration-200 slide-in-from-left-6 fade-in-0 delay-150">
				Eventos
			</h2>
			{props.events !== undefined && <EventsTimeline events={props.events} />}
		</section>
	);
}
