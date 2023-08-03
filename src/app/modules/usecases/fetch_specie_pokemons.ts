export interface IPokemonSpecie {
	flavor_text_entries: {
		flavor_text: string;
	}[];
	genera: {
		genus: string;
		language: {
			name: string;
			url: string;
		};
	}[];
	evolution_chain: {
		url: string;
	};
}

export interface IPokemonSpecieFormattedProps {
	flavor_text_entries: {
		flavor_text: string;
	}[];
	genera: {
		genus: string;
	}[];
	evolution_chain: {
		url: string;
	};
}

export async function FetchSpeciePokemon(
	url: string,
): Promise<IPokemonSpecieFormattedProps> {
	return new Promise(async (resolve, reject) => {
		try {
			const response: IPokemonSpecie = await fetch(url).then((response) =>
				response.json(),
			);
			const category = response.genera
				.filter(({ language }) => language.name.includes("en"))
				.map(({ genus }) => {
					const [name] = genus.split(" ");

					return {
						genus: name,
					};
				});

			resolve({
				flavor_text_entries: response.flavor_text_entries,
				evolution_chain: response.evolution_chain,
				genera: category,
			});
		} catch (error) {
			reject(error);
		}
	});
}
