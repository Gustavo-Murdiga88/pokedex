"use client";

import { useState } from "react";

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
import { BottomSheet } from "react-spring-bottom-sheet";

type TabsProps = "about" | "stats" | "evolution" | "moves";

function Component() {
	const [active, setActive] = useState<TabsProps>("about");

	const screenSmallerThan524 = useMediaQuery("(max-width: 524px)");

	const mask = screenSmallerThan524
		? "url(/assets/rectangle_mobile.svg)"
		: "url(/assets/rectangle.svg)";

	function handleChangeTabs(value: TabsProps) {
		setActive(value);
	}

	return (
		<div
			className={`${
				screenSmallerThan524 !== null ? "" : "invisible"
			} relative mx-auto h-[624px] w-[430px] drop-shadow-card min-[524px]:h-[840px] min-[524px]:w-[524px]`}
		>
			<div
				style={{
					maskImage: mask,
					WebkitMaskImage: mask,
				}}
			>
				<header className="relative flex h-[240px] justify-end bg-fire">
					<div className="mb-4 ml-auto mr-[12px] mt-auto flex h-[105px] flex-col items-start gap-1 min-[524px]:mr-[39px]">
						<span className="text-md font-regular text-gray50">#004</span>
						<span className="mb-2 text-4xl font-extraBold leading-none text-gray50 min-[524px]:text-5xl">
							Charmander
						</span>
						<div className="flex w-full gap-2">
							<Tag type="dark" />
							<Tag type="ghost" />
						</div>
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

			<main className="absolute inset-x-0 top-[240px] flex h-[613px] flex-col rounded-b-xl bg-gray50">
				<div className="mb-[20px] mt-[50px] flex justify-between px-[40px]">
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
				<div className="overflow-hidden px-16 pb-[53px] pt-[40px]">
					<div
						data-index={active}
						id="tabs_scroll"
						className="flex h-full gap-16"
					>
						<div className="flex min-w-[396px]">
							<About />
						</div>
						<div className="flex min-w-[396px]">
							<Stats />
						</div>
						<div className="flex min-w-[396px]">
							<Evolution />
						</div>
						<div className="flex min-w-[396px]">
							<Moves />
						</div>
					</div>
				</div>
			</main>
			<Img
				draggable={false}
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

export function Modal() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					setOpen(!open);
				}}
			>
				oi
			</button>
			<BottomSheet
				open={open}
				expandOnContentDrag
				scrollLocking
				onDismiss={() => {
					setOpen(!open);
				}}
				snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight * 0.9]}
			>
				<Component />
			</BottomSheet>
		</>
	);
}
