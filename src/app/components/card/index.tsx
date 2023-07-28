"use client";

import { useState } from "react";

import Img from "next/image";

import pokebool from "../../assets/icons/pokeballEclipse.png";
import { Modal } from "../modal";
import { Tag } from "../tag";
import { Heart } from "lucide-react";

export function Card() {
	const [modalOpen, setOpen] = useState(false);

	function handleOpenModal() {
		setOpen(true);
	}

	function handleCloseModal() {
		setOpen(false);
	}

	return (
		<>
			<button
				onClick={handleOpenModal}
				className="flex h-[132px] justify-start gap-[8px] rounded-[32px] bg-green200"
			>
				<div className="flex min-w-[136px] flex-col items-start gap-[8px]  pb-[24px] pl-[24px] pt-[16px]">
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
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${2}.png`}
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

			<Modal
				open={modalOpen}
				handleCancel={handleCloseModal}
				pokemon={{
					hash: "#004",
					id: 4,
					name: "Teste",
					tags: ["eletric", "dragon"],
				}}
			/>
		</>
	);
}
