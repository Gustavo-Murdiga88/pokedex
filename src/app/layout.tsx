import React from "react";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { Header } from "./components/header";

import "./globals.css";
import "./styles/react_bottom_shet.css";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
	weight: ["400", "500", "700", "900"],
	variable: "--roboto",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pokédex",
	description: "An application for test in my enterprise",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body
				className={`${roboto.className} ${roboto.variable} mx-auto w-full max-w-max dark:dark:bg-surface`}
			>
				<ToastContainer
					autoClose={5000}
					toastClassName="border border-yellow bg-gray50 font-regular text-black h-[1.875rem] text-md rounded-[16px]"
					hideProgressBar
					position="top-right"
					closeOnClick
					closeButton={false}
				/>
				<main className="mx-auto max-w-card-content">
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}
