import { IPokemonFormattedProps } from "usecases/fetch_pokemon";

import { PokeAvatar } from "./avatar";

interface IEvolutionProps {
	evolutions: IPokemonFormattedProps["evolutions"];
}

export function Evolution({ evolutions }: IEvolutionProps) {
	return (
		<div className="flex w-full flex-wrap items-start justify-center gap-3 overflow-y-auto bp-1:h-full">
			{evolutions.map(({ id, lastEvolution, name, type }) => {
				const hash = String(id).padStart(3, "0").padStart(4, "#");
				return (
					<PokeAvatar
						name={name}
						key={id}
						hasEvolution={lastEvolution}
						img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
						numberOfEvolution={hash}
						type={type}
					/>
				);
			})}
		</div>
	);
}
