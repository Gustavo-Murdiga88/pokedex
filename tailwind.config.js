import { Theme } from "./src/app/styles/design";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		...Theme,

		maxWidth: {
			max: "1440px",
			"card-content": "1225px",
		},

		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				fire: "linear-gradient(180deg, #EBB753 0%, rgba(198, 0, 0, 0.71) 100%)",
				eletric: "linear-gradient(180deg, #FCF47C 0%, #BC8905 100%)",
				water: "linear-gradient(180deg, #20C5F5 0%, #157C9A 100%)",
				grass: "linear-gradient(180deg, #70D090 0%, #55A23A 100%)",
			},
		},

		backgroundImage: {
			pokeBoll: "url(/src/app/assets/icons/pokeball.svg)",
		},

		dropShadow: {
			card: "2px -1px 5px rgba(0, 0, 0, 0.25)",
		},

		screens: {
			"bp-1": "524px",
		},
	},
	plugins: [],
};
