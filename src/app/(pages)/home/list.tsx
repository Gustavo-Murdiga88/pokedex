"use client";

import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { useFavoritePokemonsStore } from "store/favorites";
import { useStorePagination } from "store/pagination";
import { IPokemonFormattedProps } from "usecases/fetch_pokemon";
import { FetchListPokemons } from "usecases/list_pokemons";

import { Card } from "components/card";
import { Spinner } from "components/spinner";
import { SplashScreen } from "components/splash_screen";

interface IPokemonsList {
	data: IPokemonFormattedProps[];
}

let isFetching = false;
export function List({ data }: IPokemonsList) {
	const { initialState } = useFavoritePokemonsStore(({ initialState }) => {
		return {
			initialState,
		};
	});

	const [nextUrl, setPreviousAndNext] = useStorePagination(
		({ next, setPreviousAndNext }) => {
			return [next, setPreviousAndNext];
		},
	);

	const [pokemonsList, setPokemonsList] =
		useState<IPokemonFormattedProps[]>(data);
	const [isLoading, setLoading] = useState<boolean>(true);

	async function fetchMorePokemons() {
		if (!isFetching) {
			isFetching = true;
			const { data, next, previous } = await FetchListPokemons(nextUrl);

			setPreviousAndNext(previous, next);
			setPokemonsList([...pokemonsList, ...data]);
			isFetching = false;
		}
	}

	useEffect(() => {
		initialState();
		setLoading(false);
	}, [initialState]);

	if (isLoading) {
		return <SplashScreen />;
	}

	return (
		<div className="relative">
			<InfiniteScroll
				className="max-lg:grid-cols-1 mx-auto grid min-h-[516px] w-full max-w-card-content grid-cols-3 gap-x-[23px] gap-y-[40px] overflow-auto rounded-lg px-3 py-2 pb-[110px] max-[1380px]:grid-cols-2 max-[830px]:grid-cols-1 bp-2:px-8 bp-2:pb-10"
				next={fetchMorePokemons}
				dataLength={pokemonsList.length}
				loader={<Spinner />}
				hasMore={!!nextUrl}
				scrollThreshold={1}
			>
				{pokemonsList.map((pokemon) => {
					return <Card data={pokemon} key={pokemon.id} />;
				})}
			</InfiniteScroll>
		</div>
	);
}
