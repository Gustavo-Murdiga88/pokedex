import { TagsTypeProps } from "components/card/types";

export interface ITypePokemon {
	types: {
		slot: number;
		type: {
			name: TagsTypeProps;
			url: string;
		};
	}[];
}
export async function FetchOnlyTypePokemon(id: number): Promise<ITypePokemon> {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${id}/`,
			).then((res) => res.json());

			resolve(response);
		} catch (error) {
			reject(error);
		}
	});
}
