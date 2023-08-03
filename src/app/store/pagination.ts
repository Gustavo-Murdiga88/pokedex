import { create } from "zustand";

interface IStorePagination {
	next: string | null;
	previous: string | null;
	setNext: (value: string | null) => void;
	setPrevious: (value: string | null) => void;
	setPreviousAndNext: (previous: string | null, next: string | null) => void;
}

export const useStorePagination = create<IStorePagination>((set) => ({
	next: "https://pokeapi.co/api/v2/pokemon?offset=21&limit=21",
	previous: null,
	setNext: (url) => {
		set({
			next: url,
		});
	},
	setPrevious: (url) => {
		set({
			previous: url,
		});
	},
	setPreviousAndNext: (previous, next) => {
		set({
			previous,
			next,
		});
	},
}));
