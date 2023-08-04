"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";

import { SplashScreen } from "../../splash_screen";

const TOKEN = "@pokemons.theme";

export function ThemeMode() {
	const [theme, setTheme] = useState<"dark" | "light" | "loading">("loading");

	function handleChangeTheme() {
		if (theme === "light") {
			document.documentElement.classList.add("dark");
			window.localStorage.setItem(TOKEN, "dark");
			setTheme("dark");
			return;
		} else {
			document.documentElement.classList.remove("dark");
			setTheme("light");
			window.localStorage.setItem(TOKEN, "light");
		}
	}

	function setThemeOnLoadApp(value: "dark" | "light") {
		if (value === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}

	useEffect(() => {
		const theme = (window.localStorage.getItem(TOKEN) || "light") as
			| "dark"
			| "light";
		setThemeOnLoadApp(theme);
		setTheme(theme);
	}, []);

	const mode = {
		loading: <SplashScreen />,
		dark: (
			<button
				className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1 text-sm font-bold  text-gray500 dark:text-gray300 dark:hover:text-gray50 min-[640px]:text-2xl"
				onClick={handleChangeTheme}
			>
				<Moon size={24} />
			</button>
		),
		light: (
			<button
				className="group flex items-center justify-center gap-[8px] rounded-2xl px-2 py-1 text-sm font-bold  text-gray500 dark:text-gray300 dark:hover:text-gray50 min-[640px]:text-2xl"
				onClick={handleChangeTheme}
			>
				<Sun size={24} />
			</button>
		),
	}[theme];

	return mode;
}
