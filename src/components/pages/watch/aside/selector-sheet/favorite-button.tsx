"use client";

import { cn } from "@/lib/utils";
import { useFavoritesStore } from "@/stores/favorites-store";
import { Heart } from "@phosphor-icons/react/dist/ssr";

type FavoriteButtonProps = {
	id: string;
};

export function FavoriteButton(props: FavoriteButtonProps) {
	const favorites = useFavoritesStore();

	return (
		<button
			data-state={favorites.streamers.includes(props.id)}
			onClick={() => favorites.toggleStreamer(props.id)}
			className={cn(
				"absolute -top-1 -left-1 z-10 size-7 flex items-center justify-center border-2 border-black shine hover:shine-75",
				"bg-m-dark-background text-white data-[state=true]:bg-primary data-[state=true]:text-primary-foreground",
			)}
		>
			<Heart size="1rem" weight="bold" />
		</button>
	);
}
