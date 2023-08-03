"use client";

import { useState } from "react";

import { MoveRight } from "lucide-react";
import Img from "next/image";

import { TagsTypeProps } from "components/card/types";
import { Tag } from "components/tag";

interface IPokeAvatarProps {
	hasEvolution: boolean;
	numberOfEvolution: string;
	img: string;
	type: TagsTypeProps;
	name: string;
}

export function PokeAvatar({
	hasEvolution,
	img,
	numberOfEvolution,
	type,
	name,
}: IPokeAvatarProps) {
	const [loading, setLoading] = useState(true);

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
					src={img}
					style={{
						width: 117,
						height: 117,
					}}
					width={117}
					height={117}
					onLoadingComplete={() => {
						setLoading(false);
					}}
					alt="Pokemon"
				/>
			</span>
			<div className={`flex gap-2 ${loading ? "invisible" : ""}`}>
				<span className=" text-sm font-medium capitalize text-gray500 bp-1:text-lg">
					{name}
				</span>
				<span className="inline-block text-sm font-regular text-gray500 bp-1:pt-[5px]">
					{numberOfEvolution}
				</span>
				<span
					className={`flex items-center text-gray500 ${
						hasEvolution ? "invisible" : "inline-block"
					}`}
				>
					<MoveRight size={19} />
				</span>
			</div>
			<div
				className={`min-[76px]
      ${loading ? "invisible" : ""}
      `}
			>
				<Tag type={type} />
			</div>
		</div>
	);
}
