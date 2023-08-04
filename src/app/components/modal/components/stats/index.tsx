import { IPokemonFormattedProps } from "usecases/fetch_pokemon";

import { Slider } from "./slider";

interface IStatsProps {
	data: IPokemonFormattedProps["stats"];
	total: number;
}

export function Stats({ data, total }: IStatsProps) {
	return (
		<div className="flex flex-1 flex-col gap-3 bp-1:gap-[31px]">
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
