"use client";

import { getGistData } from "@/api/get-gist-data";
import { Stream, getStreams } from "@/api/get-streams";
import { DaysSection } from "@/components/pages/home/days-section/days-section";
import { EventsSection } from "@/components/pages/home/events-section/events-section";
import { Footer } from "@/components/pages/home/footer";
import { Header } from "@/components/pages/home/header";
import { Navigator } from "@/components/pages/home/navigator";
import { NewspapersSection } from "@/components/pages/home/newspapers-section/newspapers-section";
import { PlayersSection } from "@/components/pages/home/players-section/players-section";
import { StreamsSection } from "@/components/pages/home/streams-section/streams-section";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	// const streams = await getStreams();
	const { data: streams } = useQuery({
		queryKey: ["streams"],
		queryFn: getStreams,
	});
	const { data: gistData } = useQuery({
		queryKey: ["gist-data"],
		queryFn: getGistData,
	});

	return (
		<div className="font-minecraft min-h-screen">
			<>
				<Header />
				<Navigator />
			</>
			<main className="odd:[&>section]:bg-primary/20 dark:odd:[&>section]:bg-primary/10 [&_h2]:text-[2.5rem] [&_h2]:font-bold">
				<StreamsSection streams={streams} />
				<PlayersSection streams={streams || []} />
				<EventsSection events={gistData?.events} />
				<DaysSection
					summaries={gistData?.summaries || []}
					events={gistData?.events || []}
				/>
				<NewspapersSection newspapers={gistData?.newspapers || []} />
			</main>
			<Footer />
		</div>
	);
}
