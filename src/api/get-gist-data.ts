import { EventType, Newspaper, Summary } from "@/types/data";

type GistData = {
	events: EventType[];
	summaries: Summary[];
	newspapers: Newspaper[];
};

export async function getGistData(): Promise<GistData> {
	const response = await fetch(
		"https://api.github.com/gists/d1b77fe751fa3a487caba4c1b457cb43",
		{
			next: { revalidate: 300 },
		},
	);

	const json = await response.json();

	const result = {
		events: JSON.parse(json.files["froggsmp-events.json"].content),
		summaries: JSON.parse(json.files["froggsmp-summaries.json"].content),
		newspapers: JSON.parse(json.files["correio-froggiano.json"].content),
	};

	console.log(result);

	return result;
}
