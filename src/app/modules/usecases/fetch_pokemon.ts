import { TagsTypeProps } from "components/card/types";

import { FetchEvolutionPokemon } from "./fetch_evolution_pokemon";
import { FetchOnlyTypePokemon } from "./fetch_onlytype_pokemon";
import {
	FetchSpeciePokemon,
	IPokemonSpecie,
	IPokemonSpecieFormattedProps,
} from "./fetch_specie_pokemons";
import {
	FetchTypePokemon,
	ITypePokemons,
	ITypePokemonsFormattedProps,
} from "./fetch_types_pokemons";
import { EvolutionProps, mapperEvolution } from "./mapper_evolution";

export interface IPokemonProps {
	base_experience: number;
	height: number;
	sprites: {
		back_female: string;
	};
	abilities: {
		ability: {
			name: string;
			url: string;
		};
		is_hidden: false;
		slot: number;
	}[];
	species: {
		name: string;
		url: string;
	};
	id: number;
	name: string;
	stats: {
		base_stat: number;
		effort: number;
		stat: {
			name: string;
			url: string;
		};
	}[];
	statsTotal: number;
	types: {
		slot: number;
		type: {
			name: TagsTypeProps;
			url: string;
		};
	}[];
	weight: number;
	moves: {
		move: {
			name: string;
			url: string;
		};
	}[];

	evolution: EvolutionProps[];

	specie: IPokemonSpecie;
	type: ITypePokemons;
}

export interface IPokemonFormattedProps {
	base_experience: number;
	height: number;
	isFemale: boolean;
	abilities: {
		name: string;
		url: string;
		weight: number;
	}[];
	id: number;
	name: string;
	stats: {
		base_stat: number;
		effort: number;
		name: string;
		url: string;
	}[];
	statsTotal: number;
	types: {
		name: TagsTypeProps;
		url: string;
	}[];
	weight: number;
	moves: {
		name: string;
		url: string;
	}[];
	evolutions: EvolutionProps[];
	about: IPokemonSpecieFormattedProps["flavor_text_entries"];
	genera: IPokemonSpecieFormattedProps["genera"];
	strengths: ITypePokemonsFormattedProps["strengths"];
	weakens: ITypePokemonsFormattedProps["weakens"];
}

export function FetchPokemon(url: string): Promise<IPokemonFormattedProps> {
	return new Promise(async (resolve, reject) => {
		try {
			let pokemons = {} as IPokemonFormattedProps;
			const response: IPokemonProps = await fetch(url).then((result) =>
				result.json(),
			);

			pokemons = {
				...response,
				strengths: [],
				weakens: [],
				about: [],
				genera: [],
				moves: response.moves.map(({ move }) => {
					return {
						...move,
					};
				}),
				types: response.types.map(({ type }) => {
					return {
						name: type.name,
						url: type.url,
					};
				}),
				isFemale: !!response.sprites.back_female,
				evolutions: [],
				abilities: response.abilities.map(({ ability, slot }) => {
					return {
						name: ability.name,
						url: ability.url,
						weight: slot,
					};
				}),
				stats: response.stats.map(({ base_stat, effort, stat }) => {
					const [firstName, lastName] = stat.name.split("-");
					let nameComputed = "";

					if (firstName && lastName) {
						nameComputed = firstName.slice(0, 1) + "." + lastName.slice(0.2);
					}

					if (firstName && !lastName) {
						nameComputed = firstName;
					}

					return {
						name: nameComputed,
						url: stat.url,
						base_stat,
						effort,
					};
				}),
			};

			pokemons.statsTotal = response.stats.reduce(
				(acc, value) => value.base_stat + acc,
				0,
			);

			const { evolution_chain, flavor_text_entries, genera } =
				await FetchSpeciePokemon(response.species.url);

			pokemons.about = flavor_text_entries;
			pokemons.genera = genera;

			const { strengths, weakens } = await FetchTypePokemon(
				response.types[0].type.url,
			);

			pokemons.strengths = strengths;
			pokemons.weakens = weakens;

			const evolution = await FetchEvolutionPokemon(evolution_chain.url);

			const { species, evolves_to } = evolution.chain;

			const evolutions: EvolutionProps[] = [];

			evolutions.push({
				id: +species.url.split("/")[6],
				lastEvolution: evolves_to.length === 0,
				name: species.name,
				type: "bug",
			});

			evolution.chain.evolves_to.map(({ evolves_to, species }) => {
				mapperEvolution.call(evolutions, { evolves_to, species });
			});

			pokemons.evolutions = evolutions;

			const typesEvolutions = pokemons.evolutions.map(({ id }) => {
				return Promise.resolve(FetchOnlyTypePokemon(id));
			});

			const types = await Promise.all(typesEvolutions);

			types.forEach(({ types }, index) => {
				pokemons.evolutions[index].type = types[0].type.name;
			});

			resolve(pokemons);
		} catch (error) {
			reject(error);
		}
	});
}
