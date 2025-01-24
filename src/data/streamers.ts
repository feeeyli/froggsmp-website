export type Streamer = {
	display_name: string;
	id: string;
	thumbnail_url: string;
	skin_id: string | null;
	minecraft_uuid: string;
	twitch_login: string | null;
	twitter_login: string | null;
	youtube_login: string | null;
	youtube_channel_id?: string;
};

export const STREAMERS: Streamer[] = [
	{
		display_name: "Scott",
		id: "scott",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/1917209e-3c4e-49c2-8c09-e4e77141e1e1-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "46fa9dec-08a2-4722-bd59-00f190cab20a",
		twitch_login: "scott",
		twitter_login: "scottonauta",
		youtube_login: "Scortes",
	},
	{
		display_name: "Umild",
		id: "umild",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/6bf8fadb-69d5-4708-8827-83cbaaa454dd-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "f6a94a1e-9fc9-42b0-bc87-0ac8f4866590",
		twitch_login: "umildlive",
		twitter_login: "UmildCDU",
		youtube_login: "umildlive",
	},
	{
		display_name: "Tiba",
		id: "tiba",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/89dba2f2-567d-4697-840f-1c3cc863e7f0-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "703196c7-4c8d-4c22-bde8-601a08498a9d",
		twitch_login: "tiba041",
		twitter_login: "tiba041",
		youtube_login: "TibaLives",
	},
	{
		display_name: "Keller",
		id: "keller",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/8ebe8da4-c266-4809-92bb-605331a29627-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "5775b22b-b75b-432a-b1a2-29d3d5ce7448",
		twitch_login: "kellerzons",
		twitter_login: "kellerzons",
		youtube_login: "Bilaw",
	},
	{
		display_name: "Akino",
		id: "akino",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/d8be8432-f540-451c-8697-8867781efb09-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "87720615-8a89-41af-9434-f32aa0416b86",
		twitch_login: "oakinoo",
		twitter_login: "oAkinooo",
		youtube_login: "oakinoo",
	},
	{
		display_name: "Ameizim",
		id: "ameizim",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/69a4e8bc-01be-4f11-95ab-1c949932a13a-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "f084ae9b-c667-491d-8729-424c048c8076",
		twitch_login: "ameizim",
		twitter_login: "ameizim",
		youtube_login: "AmeizimLive",
	},
	{
		display_name: "Amelie",
		id: "amelie",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/c6b18c74-54c8-42bc-85e0-ca199397acaf-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "28f2c431-9218-4420-a6f2-3ee5668009af",
		twitch_login: "ameliebluie",
		twitter_login: "amelieBluie",
		youtube_login: "ameliebluie",
	},
	{
		display_name: "Carras",
		id: "carras",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/ac7035cf-f26e-4fe7-8e91-28d174478ef8-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "ea00118d-fed9-4300-9bae-d1bb0cd83648",
		twitch_login: "carrasquera",
		twitter_login: "Carras_quera",
		youtube_login: "CarrasqueraLives",
	},
	{
		display_name: "Dreas",
		id: "dreas",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/b2784187-3ee7-4c31-8161-59ac6fddda42-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "e72ad480-fbde-4501-98bb-e2da9579b045",
		twitch_login: "dreasbro",
		twitter_login: "DreasBro",
		youtube_login: "LivesDoDreas",
	},
	{
		display_name: "Emi",
		id: "emitriz",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/c610f062-34d1-467c-8e75-3a48361a5309-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "9ea313f6-da33-497f-b563-06e417b7d3b7",
		twitch_login: "emitriz_",
		twitter_login: "emitriz_",
		youtube_login: "emitriz",
	},
	{
		display_name: "Febatista",
		id: "febatista",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/0129c7d8-8e76-4501-8bad-35e6c0d3c0f6-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "b0bb3c43-de47-4013-bc7b-996f4819d2c7",
		twitch_login: "febatista",
		twitter_login: "Febatista",
		youtube_login: "FebatistaLives",
		youtube_channel_id: "UCN6_fEjR1MDKIHGqjuOwLuQ",
	},
	{
		display_name: "Feh",
		id: "fehdubs",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/f2614f03-9849-478f-8110-ab9adf8a8531-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "79c50e8f-32a2-452d-89c6-f2574149f63f",
		twitch_login: "fehdubs",
		twitter_login: "fehdubs",
		youtube_login: "FehDubs",
	},
	{
		display_name: "Flopi",
		id: "flopi",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/23d2b93f-4e22-4724-a494-266310c8fd71-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "9fb2c3ae-5bab-4773-8cf2-5ece58d65748",
		twitch_login: "oflopi",
		twitter_login: "oflopi_",
		youtube_login: "oflopinho",
	},
	{
		display_name: "Guaxinim",
		id: "guaxinim",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/3a88fb53-3d0b-45f5-8658-6bb6b49575d4-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "95ec17d2-9793-46d1-91f3-9a948cf049ff",
		twitch_login: "guaxinim",
		twitter_login: "GuaxinimGamer",
		youtube_login: "GuaxinimLives",
	},
	{
		display_name: "Hanako",
		id: "hanako",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/956c9c2c-d339-4378-bc90-e32d49f78c2e-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "e72e6354-bde4-487b-b347-c3837e5cac70",
		twitch_login: "hanakoawing",
		twitter_login: "HanakoAwing",
		youtube_login: "HanakoAwing",
	},
	{
		display_name: "Jinki",
		id: "jinki",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/e08bd224-64d0-4f1f-8473-1ff7b1dcf195-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "57d98d0a-2ee3-47e2-ae14-eb32185bc45e",
		twitch_login: "jinkiwinkki",
		twitter_login: "jinkiwinkki",
		youtube_login: "livesdajinkiwinkki",
	},
	{
		display_name: "Kaory",
		id: "kaory",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/32a42cae-51c1-4e08-96ee-262bee8729a4-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "58bc10e6-93b1-4b5a-b936-cf43248c7af2",
		twitch_login: "kaaory",
		twitter_login: "imkaory",
		youtube_login: "livesdakaory",
	},
	{
		display_name: "Kojj",
		id: "kojj",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/1ffb6086-5867-4e1c-8c30-1f6fc1b27600-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "46b47da6-fd09-4be9-beba-d64717eadb7f",
		twitch_login: "kojjlul",
		twitter_login: "Kojjlul",
		youtube_login: "ratariavods",
	},
	{
		display_name: "LJoga",
		id: "ljoga",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/8a5c0969-7d8d-4989-944e-6404ffb54ff6-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "180ac11e-7beb-4322-9a55-17c26293723d",
		twitch_login: "ljoga",
		twitter_login: "LJoga",
		youtube_login: "LJogaLives",
	},
	{
		display_name: "Mii Reis",
		id: "miireis",
		thumbnail_url: "/miireis_avatar.jpg",
		skin_id: null,
		minecraft_uuid: "bad7660b-4506-4f58-9392-d46582c194c4",
		twitch_login: null,
		twitter_login: "YasmimReisOFC",
		youtube_login: "Mii_Reis",
		youtube_channel_id: "UC4gwEpsyFnrjkMNOoevY8Rg",
	},
	{
		display_name: "Myn",
		id: "myn",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/e583a10d-d97f-447c-a248-bc946ce056fe-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "79c29788-6a07-440e-95ce-ccc63a0644f6",
		twitch_login: "mynluvsx",
		twitter_login: "mynluvsx",
		youtube_login: "livesdamyn",
	},
	{
		display_name: "Nick",
		id: "nick",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/144435a2-9a98-4bcc-b000-0dc31c08b404-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "67f7e50c-9ee0-4b07-a161-29f76061ba98",
		twitch_login: "nicklink",
		twitter_login: "nicklinkk",
		youtube_login: "nicklink",
	},
	{
		display_name: "Rafly",
		id: "rafly",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/87229533-a7b8-4303-8894-632803a9cff2-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "aab947c7-307a-4171-9f98-19ef68379c49",
		twitch_login: "imrafly",
		twitter_login: "imraflying",
		youtube_login: "livesdarafly",
	},
	{
		display_name: "Ronaldo",
		id: "ronaldo",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/9b9c8c4f-16df-4a40-8c53-ed93aeedb117-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "68650881-d0aa-41be-99f7-608f4aa18da1",
		twitch_login: "ronaldovtuber",
		twitter_login: "RonaldoVtuber",
		youtube_login: "RonaldoVTUBERCH",
	},
	{
		display_name: "Sunny",
		id: "sunny",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/54d3f43c-c1d6-4302-b87a-5facab31d758-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "c7e24d78-1dac-41e8-a1ae-4cedaa838a59",
		twitch_login: "sunnyseiki",
		twitter_login: "SunnySeiki",
		youtube_login: "SunnySeiki",
	},
	{
		display_name: "Yna",
		id: "ynasshi",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/ab736922-7adc-4a5c-bb8e-33351b8df580-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "43d93449-4982-472a-9743-0f55bb2a2ec4",
		twitch_login: "ynasshi",
		twitter_login: "YnasshiTV",
		youtube_login: "ynasshi",
	},
	{
		display_name: "Yume",
		id: "yume",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/15ce7641-9eed-480e-b235-faeed4f98714-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "8abf5ea6-335c-487d-ad90-d2a3f5bb0492",
		twitch_login: "yumematsu",
		twitter_login: "YumeMatsu1",
		youtube_login: "YumeMatsu",
	},
	{
		display_name: "Yui",
		id: "yui",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/dd054b79-a741-484f-be2c-5ad2f0247c66-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "6f1dca58-669d-4623-950f-7f38308223af",
		twitch_login: "yuiboboca",
		twitter_login: "yuiboboca",
		youtube_login: "yuiboboca",
		youtube_channel_id: "UC2DXysAjX1a15qmUf4lOhwg",
	},
	{
		display_name: "Yumi",
		id: "yumi",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/634e48a5-bcbb-408e-81ba-b2b7666931f5-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "8d04f1c4-08f1-4d88-bc86-8ac55b55c314",
		twitch_login: "yuyusaz",
		twitter_login: "YuyuSaz",
		youtube_login: null,
	},
];

const HIDDEN_STREAMERS = [
	{
		display_name: "Bastet",
		id: "bastet",
		thumbnail_url:
			"https://static-cdn.jtvnw.net/jtv_user_pictures/fee53afc-157d-412e-8761-6f2f3dd741ef-profile_image-300x300.png",
		skin_id: null,
		minecraft_uuid: "70999ec8-234b-4ae6-bfb3-0304b698ea07",
		twitch_login: "bastet",
		twitter_login: "bastet_min",
		youtube_login: "Bastet_min",
	},
];

export const Streamers = {
	get<T, R = T extends string ? Streamer | undefined : Streamer[]>(
		login?: T,
	): R {
		if (typeof login === "string") {
			return [...STREAMERS, ...HIDDEN_STREAMERS].find(
				({ twitch_login, twitter_login, youtube_login, id }) => {
					return [twitch_login, twitter_login, youtube_login, id].some(
						(l) => l === login,
					);
				},
			) as R;
		}

		return STREAMERS as R;
	},
};
