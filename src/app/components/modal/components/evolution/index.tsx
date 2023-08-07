import { IPokemonFormattedProps } from "usecases/fetch_pokemon";

import { PokeAvatar } from "./avatar";

interface IEvolutionProps {
	evolutions: IPokemonFormattedProps["evolutions"];
}

export function Evolution({ evolutions }: IEvolutionProps) {
	return (
		<div
			onTouchStartCapture={(e) => {
				e.stopPropagation();
				document.body.style.overflow = "hidden";
			}}
			onTouchMoveCapture={(e) => {
				e.stopPropagation();
			}}
			onTouchEndCapture={() => {
				document.body.style.overflow = "auto";
			}}
			id="evolution"
			className="fixed top-0 flex h-[348px] w-full touch-pan-y  snap-center flex-wrap items-start justify-center gap-3 overflow-auto bp-2:h-[400px]"
		>
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
