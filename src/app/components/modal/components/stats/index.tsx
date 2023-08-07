import { IPokemonFormattedProps } from "usecases/fetch_pokemon";

import { Slider } from "./slider";

interface IStatsProps {
	data: IPokemonFormattedProps["stats"];
	total: number;
}

export function Stats({ data, total }: IStatsProps) {
	return (
		<div
			onTouchMove={(e) => {
				e.stopPropagation();
			}}
			id="stats"
			className="flex h-[348px] flex-1 snap-center flex-col gap-3 bp-1:gap-[31px] bp-2:h-[400px]"
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
		>
			{data?.map(({ base_stat, name }, index, array) => {
				return (
					<Slider
						capitalize={index === 0 ? "uppercase" : "capitalize"}
						color={index + 1 === array.length ? "blue300" : "red"}
						attribute={name}
						value={base_stat}
						key={name}
					/>
				);
			})}
			<div>
				<span className="mr-[20px] inline-block min-w-[70px] text-right  text-sm font-medium text-gray500 dark:text-gray50 bp-1:text-lg">
					Total
				</span>
				<span className="text-left  text-sm font-regular text-black dark:text-gray50 bp-1:text-lg">
					{total}
				</span>
			</div>
		</div>
	);
}
