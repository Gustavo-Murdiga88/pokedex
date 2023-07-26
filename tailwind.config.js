/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontWeight: {
			regular: 400,
			medium: 500,
			bold: 700,
			extraBold: 900,
		},

		fontSize: {
			xs: "10px",
			sm: "12px",
			md: "14px",
			lg: "16px",
			xl: "18px",
			"2xl": "24px",
			"3xl": "28px",
			"4xl": "32px",
			"5xl": "40px",
			"6xl": "48px",
		},

		colors: {
			green100: "#D0EC94",
			green200: "#70D090",
			green300: "#54DC44",
			green400: "#1B932C",

			purple100: "#8D8ECB",
			purple200: "#8849B0",
			purple300: "#A98DF8",
			purple400: "#6114BC",

			orage100: "#F8A801",
			orage200: "#EC8C4C",

			red: "#F10A34",

			pink100: "#FFE0CA",
			pink200: "#FDB7DA",
			pink300: "#DDA1E7",
			pink: "#FF48CC",

			yellow: "#FCF47C",

			blue100: "#20C5F5",
			blue200: "#265DFC",
			blue300: "#0804B4",

			cyan100: "#8FC3E9",
			cyan200: "#AACBE1",
			cyan300: "#B7DBFF",

			black: "#000000",
			black100: "#1E1815",

			gray50: "#FFFFFF",
			gray100: "#F7F7F7",
			gray200: "#CDCDCD",
			gray300: "#B8B8B8",
			gray400: "#8A8886",
			gray500: "#555252",
			gray600: "#89A0B3",
			gray700: "#5D666E",

			brown100: "#54473D",
			brown200: "#9A8371",
			brown300: "#9E6E53",
			brown400: "#673E2C",
			brown500: "#7D3600",

			gray900: "#040534",
		},

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
	},
	plugins: [],
};
