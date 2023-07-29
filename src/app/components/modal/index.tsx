"use client";

import { useState } from "react";

import Img from "next/image";

import { About } from "./components/about";
import { Button } from "./components/button";
import { Evolution } from "./components/evolution";
import { Moves } from "./components/moves";
import { Stats } from "./components/stats";

import pokebool from "../../assets/icons/pokeballEclipse.png";
import { TagsTypeProps } from "../card/types";
import { Tag } from "../tag";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { Heart } from "lucide-react";
import { BottomSheet } from "react-spring-bottom-sheet";

type TabsProps = "about" | "stats" | "evolution" | "moves";

interface IModalProps {
	open: boolean;
	handleCancel: () => void;
	pokemon: {
		name: string;
		id: number;
		tags: TagsTypeProps[];
		hash: string;
	};
}

function Component({ id, name, tags, hash }: IModalProps["pokemon"]) {
	const [active, setActive] = useState<TabsProps>("about");

	const screenSmallerThan524 = useMediaQuery("(max-width: 524px)");

	const mask = screenSmallerThan524
		? "url(/assets/rectangle_mobile_sm.svg)"
		: "url(/assets/rectangle.svg)";

	function handleChangeTabs(value: TabsProps) {
		setActive(value);
	}

	const headerClassName = (() => {
		const type = tags[0];

		if (type === "eletric") {
			return "relative flex h-[200px] justify-end bp-1:h-[240px] bg-eletric";
		}

		if (type === "fire") {
			return "relative flex h-[200px] justify-end bp-1:h-[240px] bg-fire";
		}

		if (type === "water")
			return "relative flex h-[200px] justify-end bp-1:h-[240px] bg-water";

		return "relative flex h-[200px] justify-end bp-1:h-[240px] bg-grass";
	})();

	return (
		<div className="mx-auto h-[740px] w-[400px] overflow-hidden bp-1:h-[840px]  bp-1:w-[524px] bp-1-[600px]:rounded-b-lg">
			<div
				className={`${
					screenSmallerThan524 !== null ? "" : "invisible"
				} relative mx-auto rounded-b-xl drop-shadow-card 
			`}
			>
				<div
					style={{
						maskImage: mask,
						WebkitMaskImage: mask,
					}}
				>
					<header className={headerClassName}>
						<div className="mb-2 mr-[12px] mt-auto flex h-[105px] flex-col items-start gap-1 bp-1:mb-4 bp-1:ml-auto min-[524px]:mr-[39px]">
							<span className="text-md font-regular text-gray50">{hash}</span>
							<span className="mb-2 text-3xl font-extraBold leading-none text-gray50 bp-1:text-5xl">
								{name}
							</span>
							<div className="flex w-full gap-2">
								{tags.map((type) => {
									return <Tag type={type} key={type} />;
								})}
							</div>
						</div>
						<Img
							className="absolute bottom-[-10px] left-[20px] h-[155px] blur-[6px] bp-1:h-[181px] bp-1:w-[181px]"
							src={pokebool}
							style={{
								objectFit: "contain",
								objectPosition: " 50% 50%",
							}}
							width={135}
							height={155}
							alt="pokeboll"
						/>
					</header>
					<button className="absolute right-[17px] top-[50px] rounded-md p-0 leading-none">
						<Heart size={screenSmallerThan524 ? 35 : 40} />
					</button>
				</div>

				<main className="absolute inset-x-0 top-[200px] flex h-[613px] flex-col bg-gray50 bp-1:top-[240px]">
					<div className="my-[20px] flex justify-between px-[40px] min-[600px]:mt-[50px]">
						<Button
							active={active === "about"}
							onClick={() => {
								handleChangeTabs("about");
							}}
						>
							About
						</Button>
						<Button
							active={active === "stats"}
							onClick={() => {
								handleChangeTabs("stats");
							}}
						>
							Stats
						</Button>
						<Button
							active={active === "evolution"}
							onClick={() => {
								handleChangeTabs("evolution");
							}}
						>
							Evolution
						</Button>
						<Button
							active={active === "moves"}
							onClick={() => {
								handleChangeTabs("moves");
							}}
						>
							Moves
						</Button>
					</div>
					<div className="overflow-hidden rounded-b-xl bg-gray100 px-8 pb-[30px] pt-[40px] bp-1:px-16 bp-1:pb-[53px]">
						<div
							data-index={active}
							id="tabs_scroll"
							className="flex h-full gap-8 bp-1:gap-16"
						>
							<div className="flex min-w-[336px] bp-1:min-w-[396px]">
								<About />
							</div>
							<div className="flex min-w-[336px] bp-1:min-w-[396px]">
								<Stats />
							</div>
							<div className="flex min-w-[336px] bp-1:min-w-[396px]">
								<Evolution />
							</div>
							<div className="flex min-w-[336px] bp-1:min-w-[396px]">
								<Moves />
							</div>
						</div>
					</div>
				</main>
				<Img
					draggable={false}
					id="pokemon"
					style={{
						objectFit: "contain",
						objectPosition: " 50% 50%",
					}}
					className="absolute left-[20px] top-[25px] bp-1:h-[251px] bp-1:w-[236px]"
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
					width={204}
					height={216}
					alt="Pokemon"
				/>
			</div>
		</div>
	);
}

export function Modal({ handleCancel, open, pokemon }: IModalProps) {
	return (
		<>
			<BottomSheet
				open={open}
				expandOnContentDrag
				scrollLocking
				footer={<div className="h-[68px] bp-2:hidden bp-2:h-0 " />}
				onDismiss={handleCancel}
				snapPoints={({ minHeight, maxHeight }) => {
					return [minHeight, maxHeight * 0.8];
				}}
			>
				<Component
					id={pokemon.id}
					name={pokemon.name}
					tags={pokemon.tags}
					hash={pokemon.hash}
				/>
			</BottomSheet>
		</>
	);
}
