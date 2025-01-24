export enum TileType {
	yt = "yt",
	twitch = "twitch",
	chat = "chat",
}

export type TileData = {
	slug: string;
	id: string;
	type: TileType;
};

export type Group = {
	display_name: string;
	slug: string;
	members: {
		id: string;
		minecraft_uuid: string;
		type?: TileType;
	}[];
};

type PlayerEnum =
	| "scott"
	| "umild"
	| "tiba"
	| "keller"
	| "akino"
	| "ameizim"
	| "amelie"
	| "bastet"
	| "carras"
	| "dreas"
	| "emitriz"
	| "febatista"
	| "fehdubs"
	| "flopi"
	| "guaxinim"
	| "hanako"
	| "jinki"
	| "kaory"
	| "kojj"
	| "ljoga"
	| "miireis"
	| "myn"
	| "rafly"
	| "ronaldo"
	| "sunny"
	| "ynasshi"
	| "yume"
	| "yui"
	| "yumi";

export type Summary = {
	link: string;
	date: string;
	day: number;
	players: PlayerEnum[];
	event?: string;
};

export type PublisherEnum = "froggtv" | "dreasbro";

export type Announcement = {
	link: string;
	pictures: string[];
	publisher: PublisherEnum;
	text: string;
	thread?: boolean;
};

export type EventType = {
	name: string;
	slug: string;
	time: string;
	emoji: string;
	announcements?: Announcement[];
};

export type Newspaper = {
	day: string;
	edition: number;
	pages: {
		picture: string;
		transcript: string;
	}[];
	link: string;
};
