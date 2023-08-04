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
		<main className="max-lg:grid-cols-1 mx-auto mb-[94px] grid w-full max-w-card-content grid-cols-3 gap-x-[23px] gap-y-[40px] overflow-auto rounded-lg px-3 py-2 max-[1380px]:grid-cols-2 max-[830px]:grid-cols-1 bp-2:mb-10 bp-2:px-8">
			{pokemons.map((pokemon) => (
				<Card data={pokemon} key={pokemon.id} />
			))}
		</main>
	);
}
