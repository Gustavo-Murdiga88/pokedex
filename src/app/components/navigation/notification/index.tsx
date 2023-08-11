"use client";

import { useEffect } from "react";

import { Bell, Heart } from "lucide-react";
import Img from "next/image";

import { useNotificationsPokemonsStore } from "@/app/store/notifications";

import { DropDown } from "../../drop_down";

export function NotificationsComponent() {
	const { news, notifications, initialState, removeNews } =
		useNotificationsPokemonsStore(
			({ notifications, news, initialState, removeNews }) => {
				return {
					notifications,
					news,
					initialState,
					removeNews,
				};
			},
		);

	useEffect(() => {
		initialState();
	}, [initialState]);

	function handleRemoveNewsNotifications() {
		removeNews();
	}

	if (notifications.length === 0) {
		return (
			<DropDown.Root>
				<DropDown.Trigger>
					<Bell size={25} />
				</DropDown.Trigger>
				<DropDown.Content>
					<DropDown.Item lastChild>
						<div className="flex flex-col justify-center gap-1">
							<span className="inline-block text-md font-bold text-black dark:text-gray50">
								Não há notificações até o momento 🥹
							</span>
						</div>
					</DropDown.Item>
				</DropDown.Content>
			</DropDown.Root>
		);
	}

	return (
		<DropDown.Root>
			<DropDown.Trigger onClick={handleRemoveNewsNotifications}>
				<span
					className={
						news === 0
							? "max-w-[40px absolute -top-3 left-[55%] hidden min-w-[25px] rounded-full bg-red p-1 text-xs font-medium text-gray50"
							: "max-w-[40px absolute -top-3 left-[55%] inline-block min-w-[25px] rounded-full bg-red p-1 text-xs font-medium text-gray50"
					}
				>
					{news}
				</span>
				<Bell size={25} />
			</DropDown.Trigger>

			<DropDown.Content>
				{notifications.map(({ data, remove }, index, array) => {
					const name = data.name[0].toUpperCase() + data.name.slice(1);
					const message = remove
						? `${name} removido com sucesso!`
						: `${name} adicionado com sucesso!`;

					const heart = remove
						? "absolute top-[10px] right-[10px]"
						: "fill-red absolute top-[10px] right-[10px]";
					const title = remove
						? "Pokemon Removido dos favoritos!"
						: "Pokemon adicionado aos favoritos!";

					return (
						<DropDown.Item key={data.id} lastChild={array.length - 1 === index}>
							<Img
								unoptimized
								className="rounded-full border-[2px] border-blue200"
								id="pokemon"
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
								style={{
									width: 80,
									height: 80,
								}}
								width={80}
								height={80}
								alt="Pokemon"
							/>
							<div className="flex flex-col justify-center gap-1">
								<span className="inline-block pr-[35px] text-md font-bold text-black dark:text-gray50">
									{title}
								</span>
								<span className="inline-block text-md font-bold text-black dark:text-gray50">
									{message}
								</span>
							</div>
							<Heart className={heart} size={32} />
						</DropDown.Item>
					);
				})}
			</DropDown.Content>
		</DropDown.Root>
	);
}
