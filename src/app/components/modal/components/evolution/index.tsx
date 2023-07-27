import { PokeAvatar } from "./avatar";

export function Evolution() {
	return (
		<div className="flex h-full w-full snap-mandatory scroll-px-6 items-center justify-center gap-3 overflow-x-auto">
			<PokeAvatar hasEvolution img="" numberOfEvolution="#007" type="" />
			<PokeAvatar hasEvolution img="" numberOfEvolution="#007" type="" />
			<PokeAvatar
				hasEvolution={false}
				img=""
				numberOfEvolution="#007"
				type=""
			/>
		</div>
	);
}
