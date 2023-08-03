export interface IEvolvesProps {
	evolves_to: {
		evolves_to: IEvolvesProps["evolves_to"];
		species: {
			name: string;
			url: string;
		};
	}[];
	species: {
		name: string;
		url: string;
	};
}

interface IEvolutionProps {
	chain: {
		evolves_to: {
			evolves_to: IEvolvesProps["evolves_to"];
			species: {
				name: string;
				url: string;
			};
		}[];
		species: {
			name: string;
			url: string;
		};
	};
}

export async function FetchEvolutionPokemon(
	url: string,
): Promise<IEvolutionProps> {
	return new Promise(async (resolve, reject) => {
		try {
			const response = fetch(url).then((res) => res.json());

			resolve(response);
		} catch (error) {
			reject(error);
		}
	});
}
