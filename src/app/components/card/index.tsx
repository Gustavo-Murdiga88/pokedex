/* eslint-disable tailwindcss/classnames-order */
import Img from "next/image";

import pokebool from "../../assets/icons/pokeballEclipse.png";
import { MappingTag, TagsTypeProps } from "./types";
import { Theme } from "@/app/styles/design";
import { Heart } from "lucide-react";

export function Card() {
	return (
		<button className="flex h-[132px] justify-start gap-[8px] rounded-[32px] bg-green200">
			<div className="flex basis-[136px] flex-col items-start gap-[8px]  pb-[24px] pl-[24px] pt-[16px]">
				<span className="text-sm font-regular leading-none text-black">
					#001
				</span>

				<span className="text-3xl font-bold leading-none">Bulbasaur</span>
				<div className="flex items-center justify-start gap-[8px]">
					<Tag type="bug" />
					<Tag type="dragon" />
				</div>
			</div>
			<div className="relative ml-auto h-full max-w-[214px] flex-1">
				<Img
					className="absolute right-0 top-0 blur-[6px]"
					src={pokebool}
					width={134}
					height={132}
					alt="pokeboll"
				/>

				<Img
					className="absolute bottom-0 left-0"
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
					height={107}
					width={115}
					alt="pokemon"
				/>

				<Heart
					className="absolute right-[23px] top-[25px]  cursor-pointer fill-red"
					size={30}
				/>
			</div>
		</button>
	);
}

interface ITagProps {
	type: TagsTypeProps;
}

export function Tag({ type }: ITagProps) {
	const { color, icon, name } = MappingTag[type];

	return (
		<span
			className="flex rounded-full px-2 py-1 pr-3 text-sm font-regular text-gray50"
			style={{
				backgroundColor: Theme.colors[color],
			}}
		>
			<Img
				className="object-cover"
				src={icon}
				alt={name}
				width={18}
				height={20}
			/>
			<span className="text-lg font-regular">{name}</span>
		</span>
	);
}
