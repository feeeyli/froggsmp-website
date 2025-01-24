export function useTileInfo(tile: string) {
	const reg = /^(?<type>yt|chat)-/g.exec(tile);
	const type = (reg?.groups?.type ?? "twitch") as "yt" | "chat" | "twitch";
	const id = tile.replace(/^(?<type>yt|chat)-/g, "");

	return { type, id };
}
