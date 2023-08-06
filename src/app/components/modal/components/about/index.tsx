import Img from "next/image";

import { IPokemonFormattedProps } from "usecases/fetch_pokemon";

import { Tag } from "components/tag";

import genere from "assets/icons/genere.svg";
import heightsvg from "assets/icons/height.svg";
import weightsvg from "assets/icons/weight.svg";

interface IAboutProps {
	data: {
		about: IPokemonFormattedProps["about"];
		height: IPokemonFormattedProps["height"];
		gender: IPokemonFormattedProps["isFemale"];
		ability: IPokemonFormattedProps["abilities"];
		genera: IPokemonFormattedProps["genera"];
		weight: IPokemonFormattedProps["weight"];
		weakens: IPokemonFormattedProps["weakens"];
		strengths: IPokemonFormattedProps["strengths"];
	};
}

export function About({ data }: IAboutProps) {
	return (
		<div className="flex h-[368px] w-full flex-col gap-4 overflow-y-auto bp-2:h-[400px]">
			<span className="inline-block break-words text-sm font-regular leading-[24px] text-gray500 dark:text-gray50 bp-1:text-lg">
				{data.about[8].flavor_text}
			</span>
			<section className="grid grid-cols-3 gap-y-6">
				<div>
					<span className="text-sm font-medium text-gray500 dark:text-gray50 bp-1:text-md ">
						Height
					</span>
					<div className="mt-[14px] flex items-end gap-1">
						<Img
							className="dark:invert"
							src={heightsvg}
							alt="height"
							style={{
								height: 18,
								width: 18,
							}}
							height={18}
							width={18}
						/>
						<span className="ml-1 text-sm leading-none dark:text-gray50 bp-1:text-md">{`${(
							data.height / 10
						).toFixed(1)}m`}</span>
					</div>
				</div>
				<div>
					<span className="text-sm font-medium text-gray500 dark:text-gray50 bp-1:text-md ">
						Weight
					</span>
					<div className="mt-[14px] flex items-end gap-1">
						<Img
							className="dark:invert"
							src={weightsvg}
							alt="weight"
							style={{
								height: 18,
								width: 18,
							}}
							height={18}
							width={18}
						/>
						<span className="ml-1 text-sm leading-none dark:text-gray50 bp-1:text-md">
							{data.weight}Kg
						</span>
					</div>
				</div>
				<div>
					<span className="text-sm font-medium text-gray500 dark:text-gray50 bp-1:text-md ">
						Gender
					</span>
					<div className="mt-[14px] flex items-end gap-1">
						<Img
							className="dark:invert"
							src={genere}
							alt="gender"
							style={{
								height: 18,
								width: 18,
							}}
							height={18}
							width={18}
						/>
						<span className="ml-1 text-sm leading-none dark:text-gray50 bp-1:text-md">
							{data.gender ? "Female" : "Male"}
						</span>
					</div>
				</div>
				<div>
					<span className="text-sm dark:text-gray50 bp-1:text-lg">
						Category
					</span>
					<div>
						<span className="text-sm dark:text-gray50 bp-1:text-lg">
							{data.genera[0].genus}
						</span>
					</div>
				</div>
				<div>
					<span className="text-sm dark:text-gray50 bp-1:text-lg">
						Abilities
					</span>
					<div>
						<span className="text-sm dark:text-gray50 bp-1:text-lg">
							{data.ability[0].name}
						</span>
					</div>
				</div>
			</section>

			<footer className="flex flex-col gap-3 bp-1:gap-8 ">
				<div>
					<span className="text-sm dark:text-gray50 bp-1:text-lg">Weakens</span>
					<div className="mt-3 flex w-full flex-wrap gap-2">
						{data.weakens.map(({ name }) => {
							return <Tag type={name} key={name} />;
						})}
					</div>
				</div>
				<div className="text-sm dark:text-gray50 bp-1:text-lg">
					<span>Strengths</span>
					<div className="mt-3 flex flex-wrap gap-2">
						{data.strengths.map(({ name }) => {
							return <Tag type={name} key={name} />;
						})}
					</div>
				</div>
			</footer>
		</div>
	);
}
