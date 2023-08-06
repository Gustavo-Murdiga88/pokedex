"use client";

import { useEffect, useState } from "react";

import { MoveUp } from "lucide-react";
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
	const [showButtonTopUp, setButtonToUp] = useState<boolean>(false);

	async function fetchMorePokemons() {
		if (!isFetching) {
			isFetching = true;
			const { data, next, previous } = await FetchListPokemons(nextUrl);

			setPreviousAndNext(previous, next);
			setPokemonsList([...pokemonsList, ...data]);
			isFetching = false;
		}
	}

	function handleScroll() {
		setButtonToUp(!showButtonTopUp);
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
			<a
				href="#header"
				onClick={(e) => {
					e.stopPropagation();
				}}
				style={{
					display: showButtonTopUp ? "flex" : "none",
				}}
				className="fixed bottom-[100px] right-[20px] z-10 flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-gray500 bg-gray100 text-gray500 dark:border-gray50 dark:bg-zinc800 dark:text-gray50 bp-2:bottom-10 bp-2:right-20"
			>
				<MoveUp size={20} strokeWidth={4} />
			</a>
			<InfiniteScroll
				onScroll={() => {
					const { scrollY } = window;

					if (
						(scrollY > 1000 && !showButtonTopUp) ||
						(scrollY === 0 && showButtonTopUp) ||
						(scrollY <= 32 && showButtonTopUp)
					) {
						handleScroll();
					}
				}}
				className="max-lg:grid-cols-1 mx-auto mb-[94px] grid min-h-[516px] w-full max-w-card-content grid-cols-3 gap-x-[23px] gap-y-[40px] overflow-auto rounded-lg px-3 py-2 max-[1380px]:grid-cols-2 max-[830px]:grid-cols-1 bp-2:mb-10 bp-2:px-8"
				next={fetchMorePokemons}
				dataLength={pokemonsList.length}
				loader={<Spinner />}
				height={566}
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
