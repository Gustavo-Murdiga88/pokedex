import { useCallback, useState, useLayoutEffect } from "react";

export function useMediaQuery(query: string) {
	const [match, setMatch] = useState<boolean | null>(null);

	const resize = useCallback(() => {
		const sizeMatch = window.matchMedia(query).matches;

		if (sizeMatch !== match) {
			setMatch(sizeMatch);
		}
	}, [match, query]);

	useLayoutEffect(() => {
		window.addEventListener("resize", resize);
		resize();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, [resize]);

	return match;
}
