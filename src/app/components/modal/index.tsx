"use client";

import { memo, useState } from "react";

import { Heart } from "lucide-react";
import Img from "next/image";
import { usePathname } from "next/navigation";
import { BottomSheet } from "react-spring-bottom-sheet";
import { toast } from "react-toastify";

import { useMediaQuery } from "hooks/useMediaQuery";
import { useFavoritePokemonsStore } from "store/favorites";
import { IPokemonFormattedProps } from "usecases/fetch_pokemon";

import pokebool from "assets/icons/pokeballEclipse.png";

import { About } from "./components/about";
import { Button } from "./components/button";
import { Evolution } from "./components/evolution";
import { Moves } from "./components/moves";
import { Stats } from "./components/stats";

import { NavigationContainer } from "../navigation/container";
import { Tag } from "../tag";

type TabsProps = "about" | "stats" | "evolution" | "moves";

interface IModalProps {
	open: boolean;
	handleCancel: () => void;
	pokemon: {
		isFavorite: boolean;
		data: IPokemonFormattedProps;
		hash: string;
	};
}

function Component({ handleCancel, open, pokemon }: IModalProps) {
	const path = usePathname();
	const isFavoritesRoute = path.includes("favorites");

	const { data, isFavorite, hash } = pokemon;

	const { favoritePokemon, unFavoritePokemon } = useFavoritePokemonsStore(
		({ favoritePokemon, unFavoritePokemon }) => {
			return {
				favoritePokemon,
				unFavoritePokemon,
			};
		},
	);

	const [active, setActive] = useState<TabsProps>("about");

	const screenSmallerThan524 = useMediaQuery("(max-width: 524px)");

	const mask = screenSmallerThan524
		? "url(/assets/rectangle_mobile_sm.svg)"
		: "url(/assets/rectangle.svg)";

	function handleChangeTabs(value: TabsProps) {
		setActive(value);
	}

	const headerClassName = (() => {
		const type = data.types[0].name;

		if (type === "electric") {
			return "relative flex h-[200px] justify-end bp-1:h-[240px] bg-eletric";
		}

		if (type === "fire") {
			return "relative flex h-[200px] justify-end bp-1:h-[240px] bg-fire";
		}

		if (type === "water")
			return "relative flex h-[200px] justify-end bp-1:h-[240px] bg-water";

		return "relative flex h-[200px] justify-end bp-1:h-[240px] bg-grass";
	})();

	function handleFavoritePokemon() {
		const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);
		toast.success(`${pokemonName} adicionado aos favoritos!`, {
			icon: <Heart className="fill-red" size={30} />,
		});
		favoritePokemon(data);
	}

	function handleUnFavoritePokemon() {
		const name = data.name[0].toUpperCase() + data.name.slice(1);
		toast.success(`${name} removido dos favoritos!`, {
			icon: <Heart size={30} />,
		});
		unFavoritePokemon(data.id);
	}

	return (
		<BottomSheet
			sibling={screenSmallerThan524 ? <NavigationContainer /> : null}
			open={open}
			maxHeight={screenSmallerThan524 ? 810 : 920}
			header={
				<button
					disabled={isFavoritesRoute}
					onClick={(e) => {
						e.stopPropagation();

						if (isFavorite) {
							handleUnFavoritePokemon();
							return;
						}
						handleFavoritePokemon();
					}}
					role="alertdialog"
					className="absolute right-[17px] top-[50px] z-50 cursor-pointer rounded-md p-0 leading-none disabled:cursor-not-allowed"
				>
					<Heart
						size={screenSmallerThan524 ? 35 : 40}
						className={isFavorite ? "fill-red " : ""}
					/>
				</button>
			}
			scrollLocking
			blocking
			onDismiss={handleCancel}
			snapPoints={({ minHeight, maxHeight }) => {
				if (screenSmallerThan524) {
					return [minHeight, maxHeight * 0.975];
				}
				return [minHeight + 30, maxHeight * 0.92];
			}}
		>
			<div className="mx-auto h-[700px] w-[400px] overflow-hidden rounded-b-lg bp-1:h-[802px] bp-1:w-[524px]">
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
								<span className="mb-2 text-3xl font-extraBold capitalize leading-none text-gray50 bp-1:text-5xl">
									{data.name}
								</span>
								<div className="flex w-full gap-2">
									{data.types.map(({ name }) => {
										return <Tag type={name} key={name} />;
									})}
								</div>
							</div>
							<Img
								className="absolute bottom-[-10px] left-[20px] h-[155px] w-[135px] blur-[6px] bp-1:h-[181px] bp-1:w-[181px]"
								src={pokebool}
								width={181}
								height={181}
								alt="pokeboll"
							/>
						</header>
					</div>

					<main className="absolute inset-x-0 top-[200px] flex flex-col bg-gray50 dark:bg-zinc800 bp-1:top-[240px]">
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
						<div className="h-[432px] overflow-hidden bg-gray100 p-8 dark:bg-zinc900 bp-2:h-[464px]">
							<div
								data-index={active}
								id="tabs_scroll"
								className="flex gap-8 bp-1:gap-16"
							>
								<div className="flex min-w-[336px] flex-1 bp-1:min-w-[460px]">
									<About
										data={{
											ability: data.abilities,
											about: data.about,
											gender: data.isFemale,
											genera: data.genera,
											height: data.height,
											strengths: data.strengths,
											weakens: data.weakens,
											weight: data.weight,
										}}
									/>
								</div>
								<div className="flex min-w-[336px] bp-1:min-w-[460px]">
									<Stats data={data.stats} total={data.statsTotal} />
								</div>
								<div className="flex min-w-[336px] bp-1:min-w-[460px]">
									<Evolution evolutions={data.evolutions} />
								</div>
								<div className="flex min-w-[336px] bp-1:min-w-[460px]">
									<Moves moves={data.moves} tag={data.types[0].name} />
								</div>
							</div>
						</div>
					</main>
					<Img
						draggable={false}
						id="pokemon"
						className="absolute left-[20px] top-[25px] h-[202px] w-[204px] bp-1:h-[251px] bp-1:w-[236px]"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
						width={236}
						height={251}
						alt="Pokemon"
					/>
				</div>
			</div>
		</BottomSheet>
	);
}

export const BottomSheetModal = memo(Component);
