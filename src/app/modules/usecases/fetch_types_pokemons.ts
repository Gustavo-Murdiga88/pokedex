import { TagsTypeProps } from "components/card/types";

export interface ITypePokemons {
	damage_relations: {
		double_damage_from: {
			name: TagsTypeProps;
			url: string;
		}[];
		double_damage_to: {
			name: TagsTypeProps;
			url: string;
		}[];
	};
}

export interface ITypePokemonsFormattedProps {
	strengths: {
		name: TagsTypeProps;
		url: string;
	}[];
	weakens: {
		name: TagsTypeProps;
		url: string;
	}[];
}

export async function FetchTypePokemon(
	url: string,
): Promise<ITypePokemonsFormattedProps> {
	return new Promise(async (resolve, reject) => {
		try {
			const response: ITypePokemons = await fetch(url).then((res) =>
				res.json(),
			);

			const strengths = response.damage_relations.double_damage_from.map(
				(value) => value,
			);
			const weakens = response.damage_relations.double_damage_to.map(
				(value) => value,
			);

			resolve({ strengths, weakens });
		} catch (error) {
			reject(error);
		}
	});
}
