"use client";

import Img from "next/image";

import { About } from "./components/about";
import { Button } from "./components/button";
import { Evolution } from "./components/evolution";
import { Moves } from "./components/moves";
import { Stats } from "./components/stats";

import pokebool from "../../assets/icons/pokeballEclipse.png";
import { Tag } from "../card";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { Heart } from "lucide-react";

export function Modal() {
	const screenSmallerThan524 = useMediaQuery("(max-width: 524px)");

	const mask = screenSmallerThan524
		? "url(/assets/rectangle_mobile.svg)"
		: "url(/assets/rectangle.svg)";

	return (
		<div
			className={`${
				screenSmallerThan524 !== null ? "" : "hidden"
			} relative mx-auto max-h-[624px] w-[430px] drop-shadow-card min-[524px]:h-[789px] min-[524px]:w-[524px]`}
		>
			<div
				className="w-[430px] min-[524px]:w-[524px]"
				style={{
					maskImage: mask,
					maskSize: "contain",
					maskRepeat: "no-repeat",
					WebkitMaskRepeat: "no-repeat",
					WebkitMaskImage: mask,
				}}
			>
				<header className="relative flex h-[240px] justify-end bg-fire">
					<div className="mb-4 ml-auto mr-[12px] mt-auto flex h-[105px] flex-col items-start gap-1 min-[524px]:mr-[39px]">
						<span className="text-md font-regular text-gray50">#004</span>
						<span className="mb-2 text-4xl font-extraBold leading-none text-gray50 min-[524px]:text-5xl">
							Charmander
						</span>
						<Tag />
					</div>
					<Img
						className="absolute bottom-[-10px] left-[20px] blur-[6px]"
						src={pokebool}
						width={181}
						height={181}
						alt="pokeboll"
					/>
				</header>
				<button className="absolute right-[17px] top-[50px] rounded-md p-0 leading-none">
					<Heart size={screenSmallerThan524 ? 35 : 40} />
				</button>
			</div>

			<main className=" absolute inset-x-0 top-[240px] flex h-[561px] flex-col bg-gray50">
				<div className="mb-[20px] mt-[50px] flex justify-between px-[40px]">
					<Button active={false}>About</Button>
					<Button active={false}>Stats</Button>
					<Button active={false}>Evolution</Button>
					<Button active>Moves</Button>
				</div>
				<div className="flex flex-1 flex-col gap-8 bg-gray100 px-16 pb-[53px] pt-[40px]">
					{/* <About /> */}
					{/* <Stats /> */}
					{/* <Evolution /> */}
					<Moves />
				</div>
			</main>
			<Img
				id="pokemon"
				className="absolute left-[20px] top-[30px]"
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
				width={236}
				height={251}
				alt="Pokemon"
			/>
		</div>
	);
}
