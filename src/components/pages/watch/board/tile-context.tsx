import { ReactNode, createContext, use, useState } from "react";
import { Layout } from "react-grid-layout";

type TileControlsState = {
	sound: boolean;
	setSound: (value: boolean) => void;

	maximized: boolean;
	setMaximized: (value: boolean) => void;

	reloadKey: number;
	reload: () => void;

	remove: () => void;
};

const TileControlsContext = createContext<TileControlsState>({
	sound: false,
	setSound() {},

	maximized: false,
	setMaximized() {},

	reloadKey: 0,
	reload() {},

	remove() {},
});

type TileControlsProviderProps = {
	children: ReactNode;
};

export const TileControlsProvider = ({
	children,
}: TileControlsProviderProps) => {
	const [sound, setSound] = useState(false);
	function toggleSound() {
		setSound((s) => !s);
	}

	const [maximized, setMaximized] = useState(false);
	function toggleMaximized() {
		setMaximized((m) => !m);
	}

	const [reloadKey, setReloadKey] = useState(0);
	function reload() {
		setReloadKey((k) => (k === 0 ? 1 : 0));
	}

	function remove() {}

	return (
		<TileControlsContext
			value={{
				sound,
				setSound,

				maximized,
				setMaximized,

				reloadKey,
				reload,

				remove,
			}}
		>
			{children}
		</TileControlsContext>
	);
};

export function useTileControls() {
	const context = use(TileControlsContext);

	return context;
}
