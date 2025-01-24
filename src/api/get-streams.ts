import { STREAMERS } from "@/data/streamers";
import axios from "axios";

type TwitchResponse = {
	data: {
		id: string;
		user_id: string;
		user_login: string;
		user_name: string;
		game_id: string;
		game_name: string;
		type: string;
		title: string;
		tags: string[];
		viewer_count: number;
		started_at: string;
		language: string;
		thumbnail_url: string;
		tag_ids: string[];
		is_mature: boolean;
	}[];
};

export type Stream = {
	user_login: string;
	user_name: string;
	game_name: string;
	tags: string[];
	thumbnail_url: string;
};

async function getStreams(): Promise<Stream[] | undefined> {
	if (
		!process.env.NEXT_PUBLIC_TWITCH_APP_KEY ||
		!process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID
	)
		return;

	console.log("> getting twitch data");

	const logins = STREAMERS.map((streamer) => {
		if (!streamer.twitch_login) return;

		return streamer.twitch_login;
	}).filter(Boolean) as string[];

	const {
		data: { data },
	} = await axios.get<TwitchResponse>("https://api.twitch.tv/helix/streams", {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITCH_APP_KEY}`,
			"Client-Id": process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
		},
		params: {
			user_login: logins,
		},
		paramsSerializer: {
			indexes: null,
		},
	});

	return data.map((stream) => {
		return {
			user_login: stream.user_login,
			user_name: stream.user_name,
			game_name: stream.game_name,
			tags: stream.tags,
			thumbnail_url: stream.thumbnail_url.replace(
				"{width}x{height}",
				"300x300",
			),
		};
	});
}

export { getStreams };
