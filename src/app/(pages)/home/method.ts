interface IPokeList {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
		name: string;
		url: string;
	}[];
}

export async function FetchListPokemons(): Promise<IPokeList> {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
				{
					next: {
						revalidate: 60 * 60 * 24 * 2, // 2 days
					},
				},
			).then((res) => res.json());

			resolve(response);
		} catch (e) {
			reject(e);
		}
	});
}

interface IPokemonProps {
	base_experience: number;
	id: number;
	name: string;
	stats: {
		base_stat: 39;
		effort: 0;
		stat: {
			name: string;
			url: string;
		};
	}[];
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		}[];
	};
	weight: number;

	moves: {
		move: {
			name: string;
			url: string;
		};
	};
}

export function FetchPokemons() {}
