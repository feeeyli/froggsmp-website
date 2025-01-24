import { Image } from "@/components/image";
import { LinkButton } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { Announcement as AnnouncementType } from "@/types/data";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { replace as emojiReplace } from "node-emoji";

const Publishers = {
	froggtv: {
		name: "FROGG",
		username: "FroggersTv",
		picture: "/eventos/publisher/froggtv.jpg",
	},
	dreasbro: {
		name: "Sou o Dreas",
		username: "DreasBro",
		picture: "/eventos/publisher/dreasbro.jpg",
	},
} as const;

type AnnouncementProps = {
	announcement: AnnouncementType;
};

export function Announcement(props: AnnouncementProps) {
	const publisher = Publishers[props.announcement.publisher];

	return (
		<CarouselItem className="sm:basis-[22rem]">
			<div className="p-4 bg-background/75 w-full border-2 border-primary">
				<div className="flex justify-between items-center">
					<div className="flex gap-2 items-center">
						<Image
							src={publisher.picture}
							alt={publisher.name}
							className="size-10"
						/>
						<div className="flex flex-col leading-4">
							<span>{publisher.name}</span>
							<span className="text-secondary">@{publisher.username}</span>
						</div>
					</div>
					<LinkButton
						size="icon"
						href={props.announcement.link}
						target="_blank"
					>
						<ArrowSquareOut size="1rem" weight="bold" />
					</LinkButton>
				</div>
				<Markdown
					className="mt-3 whitespace-pre-line leading-6"
					options={{
						overrides: {
							em({ children }) {
								return (
									<Link
										href={`https://x.com/hashtag/${String(children).slice(1)}`}
										target="_blank"
										className="text-secondary hover:underline"
									>
										{children}
									</Link>
								);
							},
							del({ children }) {
								return (
									<span className="font-emoji text-[1rem]">{children}</span>
								);
							},
							p: {
								props: {
									className: "mt-3",
								},
							},
						},
						enforceAtxHeadings: true,
					}}
				>
					{emojiReplace(props.announcement.text, (emoji) => {
						return `~~${emoji.emoji}~~`;
					})}
				</Markdown>
				<Link
					href={props.announcement.pictures[0]}
					target="_blank"
					className="mt-3 block"
				>
					<Image src={props.announcement.pictures[0]} alt="Imagem de anuncio" />
				</Link>
			</div>
		</CarouselItem>
	);
}
