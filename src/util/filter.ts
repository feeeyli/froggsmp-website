function filter<T>(arr: T[], predicate: (value: T) => boolean) {
	const hasPassed = arr.filter((item) => predicate(item));

	return [hasPassed, arr.filter((item) => !predicate(item))];
}

export { filter };
