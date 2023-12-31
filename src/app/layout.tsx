import React from "react";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { Header } from "./components/header";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "../../src/app/styles/react_bottom_shet.css";

const roboto = Roboto({
	weight: ["400", "500", "700", "900"],
	variable: "--roboto",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pokédex",
	description: "An application for test in my enterprise",
	themeColor: [
		{
			color: "#18181b",
			media: "(prefers-color-scheme: dark)",
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR" className="">
			<body
				className={`${roboto.className} ${roboto.variable} h-screen w-full dark:dark:bg-surface`}
			>
				<ToastContainer
					autoClose={5000}
					toastClassName="border border-yellow bg-gray50 font-regular text-black h-[1.875rem] text-md rounded-[16px]"
					hideProgressBar
					position="top-right"
					style={{
						zIndex: 99999999,
					}}
					toastStyle={{
						marginBottom: 12,
					}}
					closeOnClick
					closeButton={false}
				/>
				<main id="main" className="mx-auto w-full max-w-card-content">
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}
