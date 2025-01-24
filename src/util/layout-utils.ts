import { Layout } from "react-grid-layout";

function isLayoutsEquals(first: Layout[], second: Layout[]): boolean {
	if (first.length !== second.length) return false;

	const equals = first.every((item1) =>
		second.some(
			(item2) =>
				item1.i === item2.i &&
				item1.x === item2.x &&
				item1.y === item2.y &&
				item1.w === item2.w &&
				item1.h === item2.h,
		),
	);

	return equals;
}

function isLayoutValid(layout: Layout[]) {
	if (layout.length === 0) return true;

	const someWithoutSize = layout.some((tile) => {
		return tile.h === 1 || tile.w === 1;
	});

	const everyZeroed = layout.every((tile) => {
		return tile.h === 0 && tile.w === 0;
	});

	return !someWithoutSize && !everyZeroed;
}

export { isLayoutsEquals, isLayoutValid };
