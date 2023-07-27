"use client";

import { useState } from "react";

import Img from "next/image";

import { Tag } from "@/app/components/card";

import { MoveRight } from "lucide-react";

interface IPokeAvatarProps {
	hasEvolution: boolean;
	numberOfEvolution: string;
	img: string;
	type: string;
}

export function PokeAvatar({
	hasEvolution,
	img,
	numberOfEvolution,
	type,
}: IPokeAvatarProps) {
	const [loading, setLoading] = useState(true);

	// function removeSkeleton() {
	// 	if (containerRef.current) {
	// 	}
	// }

	return (
		<div
			className={`relative flex ${
				loading ? "animate-pulse bg-gray200" : ""
			} flex-col items-center gap-3 rounded-md`}
		>
			<span
				className={`inline-block max-w-[140px] ${
					loading ? "invisible" : ""
				} overflow-hidden rounded-full border border-blue300 bg-gray50`}
			>
				<Img
					id="pokemon"
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
					width={140}
					onLoadingComplete={() => {
						setLoading(false);
					}}
					height={140}
					objectFit="cover"
					alt="Pokemon"
				/>
			</span>
			<div className={`flex gap-2 ${loading ? "invisible" : ""}`}>
				<span className="text-lg font-medium text-gray500">Squirtle</span>
				<span className="inline-block pt-[5px] text-sm font-regular text-gray500">
					{numberOfEvolution}
				</span>
				<span
					className={`flex items-center text-gray500 ${
						hasEvolution ? "inline-block" : "invisible"
					}`}
				>
					<MoveRight size={19} />
				</span>
			</div>
			<div
				className={`w-[76px]
      ${loading ? "invisible" : ""}
      `}
			>
				<Tag />
			</div>
		</div>
	);
}
