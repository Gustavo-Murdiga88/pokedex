import { FetchPokemon, IPokemonFormattedProps } from "./fetch_pokemon";

export interface IPokeList {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
}

export interface IPokeDataProps {
	data: IPokemonFormattedProps[];
	next: string | null;
	previous: string | null;
}

export async function FetchListPokemons(
	url: string | null,
): Promise<IPokeDataProps> {
	return new Promise(async (resolve, reject) => {
		try {
			const response: IPokeList = await fetch(
				url ?? "https://pokeapi.co/api/v2/pokemon?limit=21&offset=0",
				{
					cache: "force-cache",
					next: {
						revalidate: 60 * 60 * 24 * 2, // 2 days
					},
				},
			).then((res) => res.json());

			const listPromises = response.results.map((pokemon) => {
				return Promise.resolve(FetchPokemon(pokemon.url));
			});

			const pokemons = await Promise.all(listPromises);

			resolve({
				data: pokemons,
				next: response.next,
				previous: response.previous,
			});
		} catch (e) {
			reject(e);
		}
	});
}
