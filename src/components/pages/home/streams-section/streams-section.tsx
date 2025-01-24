"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import dayjs from "dayjs";
import { Offline } from "./offline";
import { Stream } from "./stream";
import { Stream as StreamType } from "@/api/get-streams";
import { Loading } from "./loading";
import { LinkButton } from "@/components/ui/button";
import { TelevisionSimple } from "@phosphor-icons/react/dist/ssr";

type StreamsSectionProps = {
	streams?: StreamType[];
};

export function StreamsSection(props: StreamsSectionProps) {
	const diff = dayjs().diff(dayjs("2024-01-08 00:00"), "days") + 1;
	const diffThisYear = dayjs().diff(dayjs("2025-01-18 00:00"), "days") + 1;
	const streams = props.streams?.filter(
		(stream) => stream.game_name === "Minecraft",
	);

	return (
		<section className="px-4 sm:px-8 md:px-20 lg:px-36 py-6" id="lives">
			<div className="flex flex-1 justify-between items-center">
				<h2 className="animate-in duration-200 slide-in-from-left-6 fade-in-0 delay-50">
					Ao vivo
				</h2>
				<p className="text-lg font-bold">
					Dia {diff}{" "}
					<span className="text-secondary font-normal">
						| {String(diffThisYear).padStart(3, "0")}
					</span>
				</p>
			</div>
			<Carousel
				opts={{
					watchDrag: false,
					align: "center",
				}}
				className="mt-6"
			>
				<CarouselContent>
					{streams === undefined && (
						<CarouselItem className="basis-full md:basis-[80%] md:max-w-[40rem]">
							<Loading />
						</CarouselItem>
					)}
					{streams?.map((stream) => (
						<CarouselItem
							key={stream.user_login}
							className="basis-full md:basis-[80%] md:max-w-[40rem]"
						>
							<Stream stream={stream} />
						</CarouselItem>
					))}
					{streams?.length === 0 && (
						<CarouselItem className="basis-full md:basis-[80%] md:max-w-[40rem]">
							<Offline />
						</CarouselItem>
					)}
				</CarouselContent>
				<CarouselPrevious className="-left-2 sm:-left-4 md:-left-8 lg:-left-12" />
				<CarouselNext className="-right-2 sm:-right-4 md:-right-8 lg:-right-12" />
			</Carousel>
			<div className="flex justify-center mt-6">
				<div className="flex items-center max-sm:flex-col gap-4 p-3 bg-primary/15 border-2 border-primary/50">
					<p className="leading-5">O MultiFrogg mudou de lugar, veja aqui</p>
					<LinkButton href="/multi" innerClassName="gap-2">
						Entrar no MultiFrogg <TelevisionSimple size="1rem" weight="bold" />
					</LinkButton>
				</div>
			</div>
		</section>
	);
}
