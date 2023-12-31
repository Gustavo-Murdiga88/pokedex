"use client";

import { memo, useState } from "react";

import { Heart } from "lucide-react";
import Img from "next/image";
import { toast } from "react-toastify";

import { useFavoritePokemonsStore } from "store/favorites";
import { IPokemonFormattedProps } from "usecases/fetch_pokemon";

import { Theme } from "styles/theme";

import { MappingTag } from "./types";
import { useNotificationsPokemonsStore } from "@/app/store/notifications";

import pokebool from "../../assets/icons/pokeballEclipse.png";
import { BottomSheetModal } from "../modal";
import { Tag } from "../tag";

interface ICardProps {
	data: IPokemonFormattedProps;
}

function Component({ data }: ICardProps) {
	const { favoritePokemon, pokemons, unFavoritePokemon } =
		useFavoritePokemonsStore(
			({ favoritePokemon, pokemons, unFavoritePokemon }) => {
				return {
					favoritePokemon,
					pokemons,
					unFavoritePokemon,
				};
			},
		);
	const { addNotifications } = useNotificationsPokemonsStore(
		({ addNotifications }) => {
			return {
				addNotifications,
			};
		},
	);

	const hash = String(data.id).padStart(3, "0").padStart(4, "#");
	const isFavorite = pokemons.some(({ id }) => id === data.id);

	const [modalOpen, setOpen] = useState({ open: false, render: false });

	const { cardColor } = MappingTag[data?.types[0].name ?? ""];

	function handleOpenModal() {
		setOpen({
			open: true,
			render: true,
		});
	}

	function handleCloseModal() {
		setOpen({
			open: false,
			render: true,
		});

		setTimeout(() => {
			setOpen({
				open: false,
				render: false,
			});
		}, 1000);
	}

	function handleFavoritePokemon() {
		const name = data.name[0].toUpperCase() + data.name.slice(1);
		toast.success(`${name} adicionado aos favoritos!`, {
			icon: <Heart className="fill-red" size={30} />,
		});
		favoritePokemon(data);
		addNotifications({
			data,
			remove: false,
		});
	}

	function handleUnfavoritePokemon() {
		const name = data.name[0].toUpperCase() + data.name.slice(1);
		toast.success(`${name} removido dos favoritos!`, {
			icon: <Heart size={30} />,
		});
		unFavoritePokemon(data.id);
		addNotifications({
			data,
			remove: true,
		});
	}

	return (
		<>
			<button
				onClick={handleOpenModal}
				style={{
					backgroundColor: Theme.colors[cardColor],
				}}
				className="flex h-[8.25rem] justify-start gap-[8px] rounded-[32px]"
			>
				<div className="flex basis-[52%] flex-col items-start gap-[8px] truncate pb-[24px]  pl-[24px] pt-[16px]">
					<span className="text-sm font-regular leading-none text-black">
						{hash}
					</span>
					<span className="w-full truncate text-left text-3xl font-bold capitalize leading-tight">
						{data.name}
					</span>
					<div className="mt-1 flex items-center justify-start gap-[8px]">
						{data.types.map(({ name }) => {
							return <Tag type={name} key={name} />;
						})}
					</div>
				</div>
				<div className="relative ml-auto h-full max-w-[214px] flex-1">
					<Img
						unoptimized
						style={{
							width: 134,
							height: 132,
						}}
						className="absolute right-0 top-0 blur-[6px]"
						src={pokebool}
						width={134}
						height={132}
						alt="pokeboll"
					/>

					<Img
						unoptimized
						className="absolute bottom-0 left-0"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
						height={116}
						width={115}
						draggable={false}
						style={{
							height: 116,
							width: 115,
						}}
						alt="pokemon"
					/>

					<Heart
						onClick={(e) => {
							e.stopPropagation();
							if (isFavorite) {
								handleUnfavoritePokemon();
								return;
							}
							handleFavoritePokemon();
						}}
						className={
							isFavorite
								? "cursor-pointe absolute right-[23px] top-[25px] fill-red"
								: "cursor-pointe absolute right-[23px]  top-[25px]"
						}
						size={30}
					/>
				</div>
			</button>
			{modalOpen.render && (
				<BottomSheetModal
					open={modalOpen.open}
					handleCancel={handleCloseModal}
					pokemon={{
						data,
						hash,
						isFavorite,
					}}
				/>
			)}
		</>
	);
}

export const Card = memo(Component);
