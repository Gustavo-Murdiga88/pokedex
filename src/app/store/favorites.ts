import { create } from "zustand";

import { IPokemonFormattedProps } from "../modules/usecases/fetch_pokemon";

interface IFavoritesPokemonsProps {
	pokemons: IPokemonFormattedProps[];
	favoritePokemon: (value: IPokemonFormattedProps) => void;
	unFavoritePokemon: (id: number) => void;
	initialState: () => void;
}

const localStorage = "@favorites-pokemons:1.0.0";

export const useFavoritePokemonsStore = create<IFavoritesPokemonsProps>(
	(set) => ({
		pokemons: [],
		favoritePokemon: (data) => {
			set(({ pokemons }) => {
				const list = [...pokemons, data];
				window.localStorage.setItem(localStorage, JSON.stringify(list));
				return {
					pokemons: list,
				};
			});
		},
		unFavoritePokemon: (idPokemon) => {
			set(({ pokemons }) => {
				const list = pokemons.filter(({ id }) => id !== idPokemon);
				window.localStorage.setItem(localStorage, JSON.stringify(list));
				return {
					pokemons: list,
				};
			});
		},
		initialState: () => {
			const list: IPokemonFormattedProps[] = JSON.parse(
				window.localStorage.getItem(localStorage) ?? "[]",
			);

			set({
				pokemons: list,
			});
		},
	}),
);
