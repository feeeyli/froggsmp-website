import { TileData } from "@/types/data";
import { Layout } from "react-grid-layout";
import { Constants } from "./constants";

function split<T>(arr: T[], perChunk: number): T[][] {
	return arr.reduce((all: T[][], one, i) => {
		const ch = Math.floor(i / perChunk);
		all[ch] = ([] as T[]).concat(all[ch] || [], one);
		return all;
	}, []);
}

function splitIntoChunks<T>(arr: T[], numChunks: number): T[][] {
	const avgChunkSize = Math.floor(arr.length / numChunks);
	const remainder = arr.length % numChunks;

	const chunks: T[][] = [];
	let start = 0;

	for (let i = 0; i < numChunks; i++) {
		const end = start + avgChunkSize + (i < remainder ? 1 : 0);
		chunks.push(arr.slice(start, end));
		start = end;
	}

	return chunks;
}

type GenerateTileLayoutProps = {
	list: TileData[];
	rows: number;
};

function generateTileLayout({ list, rows }: GenerateTileLayoutProps): Layout[] {
	const layRows = splitIntoChunks(list, rows).reverse();

	const height = Math.ceil(Constants.BOARD_ROWS / rows);

	return layRows.flatMap((row, ii) => {
		const diff =
			Math.ceil(Constants.BOARD_COLUMNS / row.length) * row.length -
			Constants.BOARD_COLUMNS;

		return row.map((item, i) => {
			const w = Math.ceil(Constants.BOARD_COLUMNS / row.length);

			return {
				i: item.slug,
				h: height,
				y: Constants.BOARD_ROWS - height * (ii + 1),
				w: w - (i > row.length - diff - 1 ? 1 : 0),
				x: w * i - (i > row.length - diff ? 1 * i - 1 : 0),
				minH: 3,
				minW: 5,
			};
		});
	});
}

function makeTiles<T extends Layout>(rows: T[][], rowsInScreen: number) {
	const height = Math.floor(rowsInScreen / rows.length);

	return rows.flatMap((row, ii) => {
		const diff =
			Math.ceil(Constants.BOARD_COLUMNS / row.length) * row.length -
			Constants.BOARD_COLUMNS;

		return row.map((item, i) => {
			const w = Math.ceil(Constants.BOARD_COLUMNS / row.length);
			return {
				...item,
				h: height,
				y: rowsInScreen - height * (ii + 1),
				w: w - (i > row.length - diff - 1 ? 1 : 0),
				x: w * i - (i > row.length - diff ? 1 * i - 1 : 0),
			};
		});
	});
}

type GenerateFocusLayoutProps = {
	list: Layout[];
	type: "one" | "two" | "chat";
};

function generateFocusLayout({
	list,
	type,
}: GenerateFocusLayoutProps): Layout[] {
	const focused = type === "one" ? 1 : 2;

	const restRows = Math.ceil((list.length - focused) / 6);
	const restHeight = (() => {
		if (restRows === 1)
			return Math.ceil((1 / 4) /* 20% */ * Constants.BOARD_ROWS);
		if (restRows === 2)
			return Math.ceil((2 / 5) /* 40% */ * Constants.BOARD_ROWS);
		return Math.ceil((1 / 2) /* 50% */ * Constants.BOARD_ROWS);
	})();

	const focusedTiles = list.slice(0, focused).map((tile, i) => {
		const width: number = (() => {
			if (type === "chat") {
				return (i === 0 ? 2 / 3 : 1 / 3) * Constants.BOARD_COLUMNS;
			}

			return Constants.BOARD_COLUMNS / focused;
		})();

		return {
			...tile,
			h: Constants.BOARD_ROWS - restHeight,
			w: width,
			x: 0,
			y: 0,
		};
	});

	if (focusedTiles.length === 2) {
		focusedTiles[1].x = focusedTiles[0].w;
	}

	const rest = makeTiles(
		splitIntoChunks(list.slice(focused), restRows),
		restHeight,
	).map((tile) => {
		return {
			...tile,
			y: tile.y + focusedTiles[0].h,
		};
	});

	return [...focusedTiles, ...rest];
}

export { generateTileLayout, generateFocusLayout };
