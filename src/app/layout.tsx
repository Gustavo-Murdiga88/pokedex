import "./globals.css";
import React from "react";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

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
				className={`${roboto.className} ${roboto.variable} mx-auto w-full max-w-max`}
			>
				{children}
			</body>
		</html>
	);
}
