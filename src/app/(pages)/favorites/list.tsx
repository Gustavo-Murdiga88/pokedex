"use client";

import { useEffect, useState } from "react";

import { useFavoritePokemonsStore } from "store/favorites";

import { Card } from "components/card";

import { NoContent } from "@/app/components/no_content_list";
import { SplashScreen } from "@/app/components/splash_screen";

export function ListFavorites() {
	const [isLoading, setIsLoading] = useState(true);

	const { pokemons, initialState } = useFavoritePokemonsStore(
		({ pokemons, initialState }) => {
			return {
				pokemons,
				initialState,
			};
		},
	);

	useEffect(() => {
		initialState();
		setIsLoading(false);
	}, [initialState]);

	if (isLoading) {
		return <SplashScreen />;
	}

	if (pokemons.length === 0) {
		return <NoContent />;
	}

	return (
		<>
			<h1 className="br-2:px-8 mx-4 my-[5.125rem] w-[18.75rem] max-w-card-content text-left text-6xl  font-bold leading-10 dark:text-gray50 max-[600px]:my-8 max-[600px]:mt-[8.5rem] max-[600px]:text-4xl bp-2:mx-8 bp-2:w-full">
				Meus Pokémons favoritos
			</h1>
			<main className="max-lg:grid-cols-1 bp-2pb-10 mx-auto grid w-full max-w-card-content grid-cols-3 gap-x-[23px] gap-y-[40px] overflow-auto rounded-lg px-3 py-2 pb-[110px] max-[1380px]:grid-cols-2 max-[830px]:grid-cols-1 bp-2:px-8">
				{pokemons.map((pokemon) => (
					<Card data={pokemon} key={pokemon.id} />
				))}
			</main>
		</>
	);
}
