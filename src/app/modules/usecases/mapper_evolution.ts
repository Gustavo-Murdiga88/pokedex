import { TagsTypeProps } from "components/card/types";

import { IEvolvesProps } from "./fetch_evolution_pokemon";

export type EvolutionProps = {
	id: number;
	name: string;
	lastEvolution: boolean;
	type: TagsTypeProps;
};

export function mapperEvolution(this: EvolutionProps[], teste: IEvolvesProps) {
	this.push({
		id: +teste.species.url.split("/")[6],
		lastEvolution: teste.evolves_to.length === 0,
		name: teste.species.name,
		type: "bug",
	});
	teste.evolves_to.forEach(({ evolves_to, species }) => {
		this.push({
			id: +species.url.split("/")[6],
			lastEvolution: evolves_to.length === 0,
			name: species.name,
			type: "bug",
		});
		if (evolves_to.length > 0) {
			mapperEvolution.call(this, { evolves_to: evolves_to, species });
		}
	});
}
