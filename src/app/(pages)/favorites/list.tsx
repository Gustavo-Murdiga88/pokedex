"use client";

import { useFavoritePokemonsStore } from "store/favorites";

import { Card } from "components/card";

import { NoContent } from "@/app/components/no_content_list";

export function ListFavorites() {
	const { pokemons } = useFavoritePokemonsStore(({ pokemons }) => {
		return {
			pokemons,
		};
	});

	if (pokemons.length === 0) {
		return <NoContent />;
	}

	return (
		<main className="br-2:mb-0 max-lg:grid-cols-1 mx-auto mb-[110px] grid min-h-[516px] w-full max-w-card-content grid-cols-3 gap-x-[23px] gap-y-[40px] px-3 max-[1380px]:grid-cols-2 max-[830px]:grid-cols-1 bp-2:px-8">
			{pokemons.map((pokemon) => (
				<Card data={pokemon} key={pokemon.id} />
			))}
		</main>
	);
}
