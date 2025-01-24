"use client";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { Summary } from "./summary";
import { EventType, Summary as SummaryType } from "@/types/data";

type DaysSectionProps = {
	summaries: SummaryType[];
	events: EventType[];
};

export function DaysSection(props: DaysSectionProps) {
	const [date, setDate] = useState<Date | undefined>(new Date());

	const enabledDays = useMemo(() => {
		return props.summaries.map((day) => day.date);
	}, [props.summaries]);

	const selected = props.summaries.find(
		(s) => s.date === dayjs(date).format("YYYY-MM-DD"),
	);

	useEffect(() => {
		if (!props.summaries || props.summaries.length === 0) return;

		const last = props.summaries[props.summaries.length - 1];

		if (!last) return;

		setDate(new Date(`${last.date} 00:00`));
	}, [props.summaries]);

	return (
		<section className="px-4 sm:px-8 md:px-20 lg:px-36 py-8" id="dias">
			<h2 className="animate-in duration-200 slide-in-from-left-6 fade-in-0 delay-200">
				Resumos
			</h2>
			<div className="flex flex-col items-center md:flex-row gap-6 mt-6">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					disabled={(day) => {
						return !enabledDays.includes(dayjs(day).format("YYYY-MM-DD"));
					}}
					startMonth={new Date(enabledDays[0])}
					endMonth={new Date(enabledDays[enabledDays.length - 1])}
					className="border-2 border-primary h-max"
					showOutsideDays={false}
					components={{
						DayButton({ className, ...p }) {
							const day = props.summaries.find(
								(s) => s.date === dayjs(p.day.date).format("YYYY-MM-DD"),
							);
							const event = day?.event
								? props.events.find((e) => e.slug === day.event)
								: undefined;

							return (
								<button
									{...p}
									className={cn(event && "font-emoji text-[1rem]", className)}
								>
									{event?.emoji}
									{!event && p.children}
								</button>
							);
						},
					}}
				/>
				<div className="flex-1 flex justify-center">
					{selected && (
						<Summary
							summary={selected}
							event={props.events.find((e) => e.slug === selected.event)}
						/>
					)}
				</div>
			</div>
		</section>
	);
}
