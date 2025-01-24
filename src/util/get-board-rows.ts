function getBoardRows(items: number) {
	if (items === 2) return 1;
	return Math.ceil(Math.sqrt(items));
}

export { getBoardRows };
