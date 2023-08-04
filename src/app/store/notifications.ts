import { create } from "zustand";

import { IPokemonFormattedProps } from "../modules/usecases/fetch_pokemon";

export type INotificationsProps = {
	data: IPokemonFormattedProps;
	remove: boolean;
};

interface INotificationsPokemonsProps {
	news: number;
	notifications: INotificationsProps[];
	addNotifications: (value: INotificationsProps) => void;
	initialState: () => void;
	removeNews: () => void;
}

const localStorage = "@notifications-pokemons:1.0.0";

export const useNotificationsPokemonsStore =
	create<INotificationsPokemonsProps>((set) => ({
		notifications: [],
		removeNews: () => {
			set({
				news: 0,
			});
		},
		news: 0,
		addNotifications: (value) => {
			const list: INotificationsProps[] = JSON.parse(
				window.localStorage.getItem(localStorage) ?? "[]",
			);

			if (list.length === 20) {
				set(({ news }) => {
					list.pop();
					list.unshift(value);

					window.localStorage.setItem(localStorage, JSON.stringify(list));
					return {
						notifications: list,
						news: news + 1,
					};
				});
				return;
			}

			set(({ news }) => {
				list.unshift(value);
				window.localStorage.setItem(localStorage, JSON.stringify(list));

				return {
					notifications: list,
					news: news + 1,
				};
			});
		},
		initialState: () => {
			const list: INotificationsProps[] = JSON.parse(
				window.localStorage.getItem(localStorage) ?? "[]",
			);

			set({
				notifications: list,
			});
		},
	}));
